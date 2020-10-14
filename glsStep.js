import glsStepAction from './glsStepAction.js'

function injectElementToElement (elementSelector, elementToInject) {
    const elements = $(elementSelector);
    if (elements.length) {
      const element = elements[elements.length - 1];
      // element.insertAdjacentElement('beforebegin', elementToInject);
      element.insertAdjacentElement('afterend', elementToInject);
      // element.parentElement.insertAdjacentElement('beforebegin', elementToInject);
    }
  }

class glsStep {
    constructor (glsWrapper, step) {
        this._glsWrapper = glsWrapper;
        this._step = step;
        this._action = null;
        this.tooltipDiv = null;
        this.sttipDiv = null;
    }

    get id () {
        const { id } = this._step;
        return id;
    }

    get action () {
        if(!this._action){
            const { action } = this._step;
            this._action = new glsStepAction(this._glsWrapper, this ,action);
        }
        return this._action;
    }

    get followers () {
        const { followers } = this._step;
        return followers;
    }



    get nextStep () {
        if(!this.followers.length){
            return null;
        }
        const nextStepID = this.followers[0].next;
        const nextStep = this._glsWrapper.steps.find(step => step.id === nextStepID);
        return nextStep;
    }

    get prevStep () {
        const prevStep = this._glsWrapper.steps.find(step => {
          if (!step.followers.length) { // (followers.length === 0)
            return false;
          }
          return step.followers[0].next === this.id;
        })
        return prevStep;
    }


    get next () {
        const { next } = this._step;
        return next;
      }
    
    get currentIndex () {
            const currentStepIndex = this._glsWrapper.steps.findIndex(s => s.id === this.id);
        return currentStepIndex
      }

    get nextBtnElement() {
      return this.tooltipDiv.querySelector('[data-iridize-role="nextBt"]');
    }

    get prevBtnElement() {
      return this.tooltipDiv.querySelector('[data-iridize-role="prevBt"]');
    }

    get closeBtnElement() {
      return this.tooltipDiv.querySelector('[data-iridize-role="closeBt"]');
    }

    buildGuideElement () {
      const elementHTML = this._glsWrapper.tiplates[this.action.type];
      this.sttipDiv = document.createElement('div');
      this.sttipDiv.classList.add('sttip');

      if (this.action.fixed) {
        this.sttipDiv.classList.add('panel');
      }

      this.tooltipDiv = document.createElement('div');
      this.tooltipDiv.classList.add('tooltip');
      this.tooltipDiv.insertAdjacentHTML('afterbegin', elementHTML);
      this.sttipDiv.appendChild(this.tooltipDiv);
      this.action.classes.split(' ').forEach(className => {
        this.tooltipDiv.classList.add(className);  
      });

      this.setContents();
      this.setRoleTexts();
      this.tooltipDiv.classList.add(this.action.placement);

      switch (this.action.placement) {
        case 'right':
          this.sttipDiv.classList.add('rightPanel');
          break;
        case 'left':
          this.sttipDiv.classList.add('leftPanel');
          break;
        case 'bottom':
          this.sttipDiv.classList.add('bottomPanel');
          break;
        case 'top':
          this.sttipDiv.classList.add('topPanel');
        default:
          break;
      }

      /*if (this.action.placement === 'right') {
        this.sttipDiv.classList.add('rightPanel');
      } else if (this.action.placement === 'left') {
        this.sttipDiv.classList.add('leftPanel');
      } else if (this.action.placement === 'bottom') {
        this.sttipDiv.classList.add('bottomPanel');
      } else if (this.action.placement === 'top') {
        this.sttipDiv.classList.add('topPanel');
      }*/

      this.insertStepCount();
      this.setListeners();
      injectElementToElement(this.action.selector, this.sttipDiv);
      // const docElement = document.querySelector(this.selector)
      // if (docElement) {
      //   docElement.insertAdjacentElement('afterbegin', sttipDiv)
      // }
      // document.body.appendChild(appendDiv)
    }

    setContents () {
      for (const key in this.action.contents) {
        const value = this.action.contents[key];
        const wantedElement = this.tooltipDiv.querySelector(`[data-iridize-id="${key.slice(1)}"]`);
        wantedElement.insertAdjacentHTML('afterbegin', value);
      }
    }

    setRoleTexts () {
      for (const key in this.action.roleTexts) {
        const value = this.action.roleTexts[key];
        const wantedElement = this.tooltipDiv.querySelector(`[data-iridize-role="${key}"]`);
        wantedElement.innerText = value;
      }
    }

    insertStepCount () {
      const numOfSteps = this._glsWrapper.steps.length;
      const currentStepIndex = this.currentIndex;
      const currentStepSpan = this.tooltipDiv.querySelector('[data-iridize-role="stepCount"]');
      const stepsSpan = this.tooltipDiv.querySelector('[data-iridize-role="stepsCount"]');
      currentStepSpan.innerText = currentStepIndex + 1;
      stepsSpan.innerText = numOfSteps;
    }

    removeGuideElement () {
      if (this.sttipDiv) {
        this.sttipDiv.remove()
        this.sttipDiv = null;
        this.tooltipDiv = null;
      }
    }

    setListeners () {
      this.nextBtnElement.addEventListener('click', this._glsWrapper.goNext.bind(this._glsWrapper));
      this.prevBtnElement.addEventListener('click', this._glsWrapper.goBack.bind(this._glsWrapper));
      this.closeBtnElement.addEventListener('click', this._glsWrapper.stopPlayer.bind(this._glsWrapper));
      if (this.next) {
        const { event, selector } = this.next
        if (event && selector) {
          // const elementToListen = document.querySelector(selector)
          const elements = $(selector)
          if (elements.length) {
            const elementToListen = elements[0]
            elementToListen.addEventListener(event, this._glsWrapper.goNext.bind(this._glsWrapper));
          }
        }
      }
    }
}

export default glsStep
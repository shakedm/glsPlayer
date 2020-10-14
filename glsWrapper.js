import glsStep from './glsStep.js'
import { css } from './utils.js'


class glsWrapper {
    constructor (data) {
        this._data = data;
        this._steps = null;
        this._currentStep = null;
        this.insertCss();
    }

    get structure () {
        const { structure } = this._data;
        return structure;
    }

    get tiplates () {
        const { tiplates } = this._data;
        return tiplates;
    }

    get css () {
        return css;
        //const { css } = this._data;
        //return unescape(css);
        
    }

    get settings () {
        const { settings } = this._data;
        return settings;
    }

    get steps () {
        if(!this._steps){
            const { steps } = this.structure;
            this._steps = steps.map(step => new glsStep(this, step));
        }
        
        return this._steps;
        
    }

    get tipElement () {
        const { tip } = this.tiplates;
        return tip;
    }

    get hoverTipElement () {
        const { hoverTip } = this.tiplates;
        return hoverTip;
    }

    goNext (event) {
        if (event){
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
        if (!this._currentStep){
            this.startPlayer();
            return;
        }

        this._currentStep.removeGuideElement();
        this._currentStep = this.currentStep.nextStep;
        if (this._currentStep.action.type === 'closeScenario') {
            this.stopPlayer();
            return;
        }
        this._currentStep.buildGuideElement();
    }

    get currentStep () {
    if (!this._currentStep) {
        this._currentStep = this.steps[0];
        }
    return this._currentStep;
    }

    goBack () {
        if (!this._currentStep) {
            this.startPlayer();
            return;
        }
        if (!this._currentStep.prevStep) {
            return;
        }
        
        this._currentStep.removeGuideElement();
        this._currentStep = this._currentStep.prevStep;
        this._currentStep.buildGuideElement();
    }

    stopPlayer () {
        this._currentStep.removeGuideElement();
        this._currentStep = null;
    }
    startPlayer () {
        this.currentStep.buildGuideElement();
    }

    insertCss () {
    const styleDiv = document.createElement('style');
    styleDiv.innerHTML = this.css;
    document.body.append(styleDiv);
    }
}

export default glsWrapper;
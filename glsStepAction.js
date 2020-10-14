//sconst { default: glsStep } = require("../../../Downloads/glsProject/glsStep");


class glsStepAction {
    constructor (glsWrapper,glsStep ,action) {
        this._action = action;
        this._glsWrapper = glsWrapper;
        this._glsStep = glsStep;
    }

    get classes () {
        const { classes } = this._action;
        return classes;
    }

    get contents () {
        const { contents } = this._action;
        return contents;
    }

    get exposeType () {
        const { exposeType } = this._action;
        return exposeType;
    }

    get fixed () {
        const { fixed } = this._action;
        return fixed;
    }

    get onlyOneTip () {
        const { onlyOneTip } = this._action;
        return onlyOneTip;
    }

    get placement () {
        const { placement } = this._action;
        return placement;
    }

    get roleTexts () {
        const { roleTexts } = this._action;
        return roleTexts;
    }
    
    get selector () {
        const { selector } = this._action;
        return selector;
    }

    get stepOrdinal () {
        const { stepOrdinal } = this._action;
        return stepOrdinal;
    }

    get type () {
        const { type } = this._action;
        return type;
    }

    get warningTimeout () {
        const { warningTimeout } = this._action;
        return warningTimeout;
    }

    get watchDog () {
        const { watchDog } = this._action;
        return watchDog;
    }

    get watchSelector () {
        const { watchSelector } = this._action;
        return watchSelector;
    }

    get wdInterval () {
        const { wdInterval } = this._action;
        return wdInterval;
    }

    /*buildGuideElement () {
        const elementHTML = this._glsWrapper.tiplates[this.type];
        const appendDiv = document.createElement('div');
        appendDiv.innerHTML = unescape(elementHTML);
        //const docElement = document.querySelector(this.selector);
        //if(docElement && docElement.parentElement) {
          //  docElement.parentElement.append(appendDiv);
        //}
        document.body.append(appendDiv);
    }*/
}

export default glsStepAction;

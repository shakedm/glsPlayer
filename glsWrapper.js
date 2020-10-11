import glsStep from './glsStep'


class glsWrapper{
    constructor (data) {
        this._data = data;
        this._steps = null;
        this._curerntStep = null;
        this.insertCss();
    }

    get structure (){
        const { structure } = this._data;
        return structure;
    }

    get tiplates () {
        const { tiplates } = this._data;
        return tiplates;
    }

    get css () {
        const { css } = this._data;
        return unescape(css);
        // might need to parse the css?
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

    //need to add steps methods
}
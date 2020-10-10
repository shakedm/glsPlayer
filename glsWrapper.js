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
        return css;
        // might need to parse the css?
    }

    get settings () {
        const { settings } = this._data;
        return settings;
    }

    get steps () {
        const { steps } = this.structure;
        return this._steps;
        // check this
    }
}
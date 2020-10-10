import glsStepAction from './glsStepAction'

class glsStep {
    constructor (glsWrapper, step) {
        this._glsWrapper = glsWrapper;
        this._step = step;
        this._action = null;
    }

    get id () {
        const { id } = this._step;
        return id;
    }

    get _action () {
        const { action } = this._step;
        return action;
    }


}
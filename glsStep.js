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

    get action () {
        if(!this._action){
            const { action } = this._step;
            this._action = new glsStepAction(this._glsWrapper,action);
        }
        return this._action;
    }

    get nextStep () {
        const { followers } = this._step;
        if(!followers.length){
            return null;
        }
        const nextStepID = followers[0].next;
        const nextStep = this._glsWrapper.steps.find(step => step.id === nextStepID);
        return nextStep;
    }

}
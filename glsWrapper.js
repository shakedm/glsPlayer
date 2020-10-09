
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
}
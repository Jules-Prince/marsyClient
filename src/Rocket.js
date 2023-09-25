import {RocketState} from "./RocketState";

export class Rocket {

    constructor() {
        this._status = RocketState.NOT_READY;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}
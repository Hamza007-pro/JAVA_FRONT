import Constraints from "../interfaces/Constraints";

export default class AutoIncrement implements Constraints{
    name: string;

    constructor(){
        this.name = 'AutoIncrement';
    }
}
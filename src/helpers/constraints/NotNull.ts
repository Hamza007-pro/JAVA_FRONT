import Constraints from "../interfaces/Constraints";

export default class NotNull implements Constraints{
    name: string;

    constructor(){
        this.name = 'NotNull';
    }
}
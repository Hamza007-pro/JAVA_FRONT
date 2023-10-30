import Constraints from "../interfaces/Constraints";

export default class Default implements Constraints{
    name: string;
    value:any;

    constructor(value:any){
        this.name = 'Default';
        this.value = value;
    }
}
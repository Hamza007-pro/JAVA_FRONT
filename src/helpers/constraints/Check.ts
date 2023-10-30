import Constraints from "../interfaces/Constraints";

export default class Check implements Constraints{
    name: string;
    value:any;
    operation:string;

    constructor(value:any, operation:string){
        this.name = 'Check';
        this.value = value;
        this.operation = operation;
    }
}
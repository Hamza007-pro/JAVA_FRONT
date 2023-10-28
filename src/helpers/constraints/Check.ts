import Constraints from "../interfaces/Constraints";

export default class Check implements Constraints{
    name: string;
    value:any;
    operation:string;

    constructor(name:string, value:any, operation:string){
        this.name = name;
        this.value = value;
        this.operation = operation;
    }
}
import Constraints from "../interfaces/Constraints";

export default class Default implements Constraints{
    name: string;
    value:any;

    constructor(name:string, value:any){
        this.name = name;
        this.value = value;
    }
}
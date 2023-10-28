import Constraints from "../interfaces/Constraints";

export default class ForeignKey implements Constraints{
    name: string;
    targetTable:string;
    targetAttribute:string;

    constructor (name:string,targetTable:string, targetAttribute:string){
        this.name = name;
        this.targetTable = targetTable;
        this.targetAttribute = targetAttribute;
    }
}
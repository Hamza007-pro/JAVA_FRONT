import Constraints from "../interfaces/Constraints";

export default class ForeignKey implements Constraints{
    name: string;
    targetTable:string;
    targetAttribute:string;

    constructor (targetTable:string, targetAttribute:string){
        this.name = 'ForeignKey';
        this.targetTable = targetTable;
        this.targetAttribute = targetAttribute;
    }
}
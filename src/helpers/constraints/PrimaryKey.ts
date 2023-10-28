import Constraints from "../interfaces/Constraints";

export default class PrimaryKey implements Constraints{
    name: string;

    constructor(name:string){
        this.name = name;
    }
}
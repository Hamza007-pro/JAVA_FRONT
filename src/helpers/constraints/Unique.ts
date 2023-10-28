import Constraints from "../interfaces/Constraints";

export default class Unique implements Constraints{
    name: string;

    constructor(name:string){
        this.name = name;
    }
}
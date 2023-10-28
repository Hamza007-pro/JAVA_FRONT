import Constraints from "../interfaces/Constraints";

export default class NotNull implements Constraints{
    name: string;

    constructor(name:string){
        this.name = name;
    }
}
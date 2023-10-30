import Constraints from "../interfaces/Constraints";

export default class PrimaryKey implements Constraints{
    name: string;

    constructor(){
        this.name = 'PrimaryKey';
    }
}
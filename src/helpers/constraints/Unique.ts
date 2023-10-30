import Constraints from "../interfaces/Constraints";

export default class Unique implements Constraints{
    name: string;
    constructor(){
        this.name = 'Unique';
    }
}
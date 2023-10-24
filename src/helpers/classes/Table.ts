import Attribute from "./Attribute";

class Table{
    Id:number;
    Name:string;
    Attributes:Attribute[]=[];

    constructor(id:number, name:string){
        this.Id=id;
        this.Name=name;
    }
}
export default Table;
class Attribute{
    Name: string;
    Type:string;
    Size:number;
    Constraints:Object[]=[];

    constructor(name:string, type:string, size:number){
        this.Name = name;
        this.Type = type;
        this.Size = size;
    }
    
}
export default Attribute;
class Attribute{
    Name: string;
    Type:string;
    Size:number;
    Constraints:any[]=[];

    constructor(name:string, type:string, size:number){
        this.Name = name;
        this.Type = type;
        this.Size = size;
    }
    
}
export default Attribute;
import Schema from "./Schema";

class Project{
    Name:string;
    Description:string;
    Schema:Schema;

    constructor(Name:string,Description:string,Schema:Schema){
        this.Name = Name;
        this.Description = Description;
        this.Schema = Schema;
    }
}
export default Project;
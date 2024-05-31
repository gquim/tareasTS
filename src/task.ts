export class task{
    description: string;
    completed: boolean;

    constructor(description:string){        
        this.description=description;
        this.completed= false;
    }
    taskCompleted(){
        this.completed = !this.completed;
    }
}



/* --------------------- */


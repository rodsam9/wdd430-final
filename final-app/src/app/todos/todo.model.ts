export class Todo{
    public id: string;
    public todoItem: string; 

    constructor(id: string, todoItem: string){
        this.id = id;
        this.todoItem = todoItem;
    }
}
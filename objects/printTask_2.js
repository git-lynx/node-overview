class Task {
    constructor(id, done, title, desk, dueDate) {
        this.id = id;
        this.done = done;
        this.title = title;
        this.desk = desk;
        this.dueDate = dueDate;
    }
    // toString() {
    //   let output = '';
    //   return output;
    // }
}
console.log(new Task({id: 3, title: 'Implement methods'}))
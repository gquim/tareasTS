var task = /** @class */ (function () {
    function task(description) {
        this.completed = false;
        this.description = description;
    }
    task.prototype.taskCompleted = function () {
        this.completed = !this.completed;
    };
    return task;
}());
export { task };

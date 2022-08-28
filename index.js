function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box")
const task2 = newTask("Do Laundry", "ugh");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();



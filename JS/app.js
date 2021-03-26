
const todolist = [
                    {todo: "clone repo for starter code", status:"complete" },
                    {todo: "added JS src in html", status: "complete"}, 
                    {todo: "creating JS in html", status: "started"}, 
                    {todo: "push the file into the remote" , status: "started"}
                 ]   

const completedTodos = []

for (task of todolist) {
    if (task.status === "complete"){
        completedTodos.push(task)
    }
}


for (value of completedTodos) {
    complete_task = value.todo
    console.log(complete_task)
}
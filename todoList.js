function displayTodoList(todoList){
    const incomplete = todoList.filter(v => !v.status )
    const completed = todoList.filter(v => v.status)
    return [...incomplete, ...completed]
}

function updateStatus(updateItem, todoList){
    const index = todoList.findIndex(v => updateItem.id === v.id)
    if(index !== -1){
        todoList[index] = {...todoList[index], ...updateItem}
        return todoList
    }
}

function deleteTodoList(id, todoList){
    const index = todoList.findIndex(v => id === v.id)
    if(index !== -1){
        todoList.splice(index,1)
        return todoList
    }
}

function editTodoList(editItem, todoList){
    const index = todoList.findIndex(v => editItem.id === v.id);
    if(index !== -1){
        todoList[index] = { ...todoList[index], ...editItem };
        return todoList;
    }
}

function createTodoList(todoList, createdList, id){
    createdList.push({id: id, todo: todoList, status: false})
    return createdList
}

let created_list = []

createTodoList('Wake up', created_list, 1)
createTodoList('Brush Teeth', created_list, 2)
createTodoList('Eat food', created_list, 3)
// console.log(created_list,'after create')

editTodoList({id: 1, todo: 'Do exercise'}, created_list)
editTodoList({id: 3, todo: 'Read books'}, created_list)
// console.log(created_list,'after edit')

deleteTodoList(2, created_list)
// console.log(created_list,'after delete')

updateStatus({id: 3, status: true}, created_list)
// console.log(created_list, 'after update')

console.log(displayTodoList(created_list), 'display')
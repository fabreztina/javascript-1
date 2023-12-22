function displayTodoList(todoList){
    const completed = todoList.filter(v => v.status === 'Completed')
    const incomplete = todoList.filter(v => v.status === 'Incomplete')
    return [...completed, ...incomplete]
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

function editTodoList(editItems, todoList){
    const index = todoList.findIndex(v => editItems.id === v.id);
    if(index !== -1){
        todoList[index] = { ...todoList[index], ...editItems };
        return todoList;
    }
}
let created_list = []
let count = 1 
function createTodoList(todoList){
    created_list.push({id: count, todo: todoList, status: 'Incomplete'})
    count++
    return created_list
}

createTodoList('Wake up')
createTodoList('Brush Teeth')
createTodoList('Eat food')
// console.log(created_list,'after create')

editTodoList({id: 1, todo: 'Do exercise'}, created_list)
editTodoList({id: 3, todo: 'Read books'}, created_list)
// console.log(created_list,'after edit')

deleteTodoList(2, created_list)
// console.log(created_list,'after delete')

updateStatus({id: 3, status: 'Completed'}, created_list)
// console.log(created_list, 'after update')

console.log(displayTodoList(created_list), 'display')
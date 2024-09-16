function displayByTagName(todoList, tagNames){
    return todoList.filter(v => tagNames.every(tag => v.tags.includes(tag)) );
}

function displayTodoList(todoList){
    const incomplete = todoList.filter(v => !v.status )
    const completed = todoList.filter(v => v.status)
    return [...incomplete, ...completed]
}

function updateStatus(todoList, id, status){
    const index = todoList.findIndex(v => id === v.id)
    if(index !== -1){
        todoList[index] = {...todoList[index], status}
        return todoList
    }
}

function deleteTodoList(todoList, id){
    const index = todoList.findIndex(v => id === v.id)
    if(index !== -1){
        todoList.splice(index,1)
        return todoList
    }
}

function editTodoList(todoList, id, todo, tags){
    const index = todoList.findIndex(v => id === v.id);
    if(index !== -1){
        todoList[index] = { ...todoList[index], todo, tags: tags ? tags : todoList[index].tags}
        return todoList;
    }
}

function createTodoList(createdList, todo, tags){
    let id = createdList.reduce((acc, cur) => acc > cur.id ? acc : cur.id, 0) + 1
    createdList.push({id: id, todo: todo, status: false, tags: tags ? tags : []})
    return createdList
}

let created_list = []

createTodoList(created_list,'Wake up')
createTodoList(created_list,'Brush Teeth', ['Morning', 'Night'])
createTodoList(created_list,'Eat food', ['Morning', 'Afternoon', 'Night'])
// console.log(created_list,'after create')

editTodoList(created_list, 1, 'Do Exercise', ['Night'])
editTodoList(created_list, 3, 'Read books')
// console.log(created_list,'after edit')

deleteTodoList(created_list, 2)
// console.log(created_list,'after delete')

updateStatus(created_list, 1, true)
// console.log(created_list, 'after update')

console.log(displayTodoList(created_list), 'display')

console.log(displayByTagName(created_list,['Night']), 'display by tag name')
import React from 'react'
import { useContext, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import BackDrop from './BackDrop';
import TodosContext from '../Todo-Context/todo-context.js'
import AddModal from './AddModal';


const TodoComponent = () => {
    
    const todoList = useContext(TodosContext);
    const [modalOpen, setModalOpen] = useState(false);

    function todoListHandler(props) {
        setModalOpen(true);
    }

    const confirmAdd = props => { 
        todoList.addTodo(props);
        setModalOpen(false);
        console.log(props);
    }

    const closeModal = props => {
        setModalOpen(false);
    }

    return (
        <div>
            <TodoHeader />
            <div className='grid-container-tasks'>
                <button className='add-button' type='submit' onClick={todoListHandler}>Add task</button>
            </div>
            { modalOpen && <AddModal onCancel={closeModal} onConfirm={confirmAdd}/>}
            { modalOpen && <BackDrop onCancel={closeModal}/> }
            <TodoList todos={todoList.todos}/>
        </div>
    );
}

export default TodoComponent;
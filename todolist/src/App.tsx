import { Header, Panel, TodoList } from './components'
import './App.css'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TodoContext } from './TodoContext';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

function App() {
  const [editTodoId, setEditTodoId] = useState<number | null>(null)
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'task 1', description: 'test', checked: false },
    { id: 2, name: 'task 2', description: 'test', checked: false },
    { id: 3, name: 'task 3', description: ' testtest', checked: true }
  ])

  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const onAddTodo = (todo: Todo) => {
    setTodoList([...todoList, {
      id: todoList[todoList.length - 1].id + 1,
      description: todo.description,
      name: todo.name,
      checked: false
    }])
  }

  const onChecked = (id: Todo['id']) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === id)
        return { ...todo, checked: !todo.checked }
      else
        return todo;
    }))
  }

  const onEditTodo = (id: Todo['id']) => {
    setEditTodoId(id)
  }

  const onChangeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(todoList.map(todo => {
      if(todo.id === editTodoId){
        setEditTodoId(null);
        return {...todo, name:name, description:description}
      }else{
        return todo
      }
    }))
  }

  return (
    <TodoContext.Provider value={{
      todoList,
      editTodoId,
      onAddTodo,
      onDeleteTodo,
      onChangeTodo,
      onEditTodo,
      onChecked
    }}>
      <Box display='flex' flexDirection='column' width={'500px'} >
        <Header />
        <Panel />
        <TodoList />
      </Box>
    </TodoContext.Provider>
  )
}

export default App

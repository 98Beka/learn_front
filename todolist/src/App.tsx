import { Header, Panel, TodoList } from './components'
import './App.css'
import Box from '@mui/material/Box'

function App() {
  return (
    <Box display='flex' flexDirection='column' width={'500px'} >
      <Header />
      <Panel />
      <TodoList />
    </Box>
  )
}

export default App

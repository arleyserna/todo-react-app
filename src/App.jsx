import { Header } from './components/Header'
import { TasksPage } from './Pages/Tasks'
import { TaskContextProvider } from './contexts/TaskContextProvider'
import './App.css'

function App() {

  return (
    <>
    <TaskContextProvider>
      <Header />
      <TasksPage />
    </TaskContextProvider>
    </>
  )
}

export default App

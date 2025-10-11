import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { TasksPage } from './Pages/Tasks'
import { TaskContextProvider } from './contexts/TaskContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

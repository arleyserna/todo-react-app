import { Header } from './components/Header'
import { TasksPage } from './Pages/Tasks'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/forms/LoginForm'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

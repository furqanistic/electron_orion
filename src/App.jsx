import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import User from './pages/User'
import Event from './pages/Event'
import Finance from './pages/Finance'
import Chat from './pages/Chat'
import Activity from './pages/Activity'
import Teachers from './pages/Teacher'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='students' element={<Students />} />
        <Route path='users' element={<User />} />
        <Route path='teachers' element={<Teachers />} />
        <Route path='events' element={<Event />} />
        <Route path='finances' element={<Finance />} />
        <Route path='chats' element={<Chat />} />
        <Route path='activity' element={<Activity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

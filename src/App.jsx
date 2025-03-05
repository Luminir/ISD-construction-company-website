import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chung-toi' element={<About/>}/>
          <Route path='/dich-vu' element={<Services/>}/>
          <Route path='/tin-tuc' element={<Project/>}/>
          <Route path='/du-an' element={<News/>}/>
          <Route path='/lien-he' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

// SƠn: e dã tạo home.jsx trong pages/
// const Home = () => <div className="pt-20 bg-amber-300 text-black text-center text-xl">Home Page</div>;
const About = () => <div className="pt-20 bg-amber-300 text-black text-center text-xl">About Page</div>;
const Services = () => <div className="pt-20 bg-amber-300 text-black text-center text-xl">Services Page</div>;
const Project = () => <div className="pt-20 bg-amber-300 text-black text-center text-xl">Project Page</div>;
const News = () => <div className="pt-20 bg-amber-300 text-black text-center text-xl">News Page</div>;
const Contact = () => <div className="pt-20 bg-amber-300 text-black text-center text-xl">Contact Page</div>;

export default App

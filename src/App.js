import logo from './logo.svg'
import './App.css'
import Footer from './Components/Footer.js'
import AboutMe from './Components/AboutMe'
import Header from './Components/Header'
import ContactMe from './Components/ContactMe'
import Projects from './Components/Projects'

function App () {
  return (
    <div className='App'>
      <Header/>
      <div><AboutMe/></div>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App

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
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link href='https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap' rel='stylesheet' />
      <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
      <Header/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App

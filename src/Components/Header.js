import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { FaBookReader, FaProjectDiagram } from 'react-icons/fa'
import { MdOutlineContactMail } from 'react-icons/md'
import { RiHomeWifiFill } from 'react-icons/ri'
const Header = () => {
  return (
    <header className='site-header' id='home'>
      <a href={require('../asset-files/resume.pdf')} download='MyResume'>
        <button className='resume-link'> Download Resume
          <div>
            <Player
              src='https://assets1.lottiefiles.com/packages/lf20_dzhfzjx8/dowlnload-shape_icon_set.json'
              style={{ height: '50px', width: '50px', float: 'right', marginRight: '0px'}}
              loop
              autoplay/>
            <Controls visible={false} />
            {/* <Controls visible={false} buttons={["play", "repeat"]} /> */} </div>
        </button>
      </a>
      <div className='navigation'>
        <nav>
          <a href='#home'>
            <RiHomeWifiFill className='icon' />Home</a> |
          <a class='about-me-nav' href='#about_me'>
            <FaBookReader className='icon' />About Me</a> |
          <a class='my-project-nav' href='#my-projects'>
            <FaProjectDiagram className='icon' />My Projects</a> |
          <a class='contact-nav' href='#contact'>
            <MdOutlineContactMail className='icon' />Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

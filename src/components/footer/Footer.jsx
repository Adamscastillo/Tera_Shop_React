import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import './Footer.css'
import wzimg from '../footer/wzp.png'

function Footer() {
  return (
    <footer className="footer" bg="dark">
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className="copy_right">
        <span>GODOY & CASTILLO</span> @copy 2022
      </p>
      <a href="" ><img src={wzimg} className='iconws'  alt=""/></a>  
    </footer>
  )
}

export default Footer

import reactLogo from '../../assets/react.svg'
import "./index.css"


const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <img src={reactLogo} alt=""  className='nav-logo' />
                <h3 className='nav--logo_text'>ReactFacts</h3>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header
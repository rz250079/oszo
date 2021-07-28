import LogoSrc from 'Images/logo.svg';
import './Logo.css';

const Logo = (props) => {
    return <img className={`Logo ${props.className}`} src={LogoSrc} alt="logo" />;
}

export const LogoSm = (props) => {
    return <Logo className="small" />;
}

export default Logo;
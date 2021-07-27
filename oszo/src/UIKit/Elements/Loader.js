import dots from 'Images/Loaders/dots.svg';
import './Loader.css';

const Loader = () => {
    return (
        <div className="Loader">
            <img src={dots} alt="Loader" />
        </div>
    );
}

export default Loader;
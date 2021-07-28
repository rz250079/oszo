import dots from 'Images/Loaders/dots.svg';
import './Loader.css';

import { Center } from 'UIKit';

const Loader = () => {
    return (
        <Center>
            <div className="Loader">
                <img src={dots} alt="Loader" />
            </div>
        </Center>
    );
}

export default Loader;
import { Link } from 'react-router-dom';
import './Button.css';

export function Button() {
    return (
        <Link to='/signup'>
            <button className='btn'>Sign Up</button>
        </Link>
    );
}

export default Button;

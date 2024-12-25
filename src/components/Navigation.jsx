import react from 'react';

export default function Navigation() {
    return (
        <nav className='container'>
            <div className='logo'>
                <img src="./images/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">About</li>
                <li href="#">Location</li>
                <li href="#">Contact us</li>
            </ul>
            <button>Login</button>
        </nav>
    )
}
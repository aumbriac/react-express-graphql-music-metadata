import React from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Navbar = () => {

    const { loading } = React.useContext(AppContext)

    return (
        <nav style={{marginBottom: '2rem'}}>
            <div className="nav-wrapper gradient fw-light">
                <a href="#!" className="brand-logo left">
                    <i className='material-icons'>headset</i>
                </a>
                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to='/'>
                            Tracklist
                        </Link>
                    </li>
                </ul>
                {loading && 
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar

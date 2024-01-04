import { useSelector, useDispatch } from "react-redux";
import { deleteProfil } from "../../redux";

import { Link, useNavigate } from 'react-router-dom';

import logo from './../../assets/argentBankLogo.png'
import './style.css'

function Header() {
    const profile = useSelector((state) => state.user);
    const isConnected = profile.userName !== '';
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header>
            <Link to='/'>
                <h1>
                    <img src={logo} alt="Argent Bank" />
                </h1>
            </Link>

            <nav className={!isConnected ? 'hover-effect' : ''}>
                <Link 
                    to='/profile'
                    className={isConnected ? 'hover-effect' : ''}
                >
                    <i className='fas fa-circle-user'></i>
                    <span>{isConnected && profile.userName}</span>
                </Link>
                
                {!isConnected && <Link to='/sign-in'><span>Sign In</span></Link>}

                {isConnected && 
                    <button 
                        className="hover-effect"
                        onClick={() => {
                            dispatch(deleteProfil());
                            navigate('/');
                        }}
                    >
                        <i className="fas fa-right-from-bracket"></i>
                        <span>Sign Out</span>
                    </button>
                } 
            </nav>
        </header>
    )
}

export default Header;
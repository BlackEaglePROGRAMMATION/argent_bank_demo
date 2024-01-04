import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addProfil } from "../../redux";

import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

import Editor from "../../components/Editor";
import accounts from './../../datas/accounts';

import './style.css'

// Static demo
import { useEffect } from "react";

function Profile() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const profile = useSelector((state) => state.user);
    
    useEffect(() => {
        // Static demo
        if (profile.userName === '') {
            navigate('/sign-in')
        }

    }, [navigate, profile])

    // const token = profile.token;

    // useEffect(() => {
    //     if (token === '') { navigate('/sign-in') }
    //     checkConnection();

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [token])

    // const checkConnection = async () => {
    //     const req = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    //         method: "POST",
    //         headers: { 
    //             "Content-Type": "application/json", 
    //             "Authorization": `Bearer ${token}` 
    //         }
    //     });

    //     if (!req.ok || req.status === 401) {
    //         navigate("/sign-in");
    //         return;
    //     }

    //     const res = await req.json();

    //     if (!res) {              
    //         navigate("/sign-in");
    //         return;          
    //     }
        
    //     const newProfil = {
    //         token: token,
    //         ...res.body
    //     };
        
    //     dispatch(addProfil(newProfil));
    // }    

    return (
        <div className='profile'>
            <Editor />

            <ul className="ul-accounts">
                {accounts.map((account, idx) => 
                    <li key={idx}>
                        <h3>{account.title}</h3>
                        <p className="amount">{account.amount}</p>
                        <p className="descr">{account.descr}</p>
                        <button>View transactions</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Profile;
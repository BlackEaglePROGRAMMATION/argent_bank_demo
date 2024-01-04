import { useSelector, useDispatch } from "react-redux";
import { editName } from "../../redux";

import { useState } from 'react';

import './style.css'

function Editor() {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState('');

    const profile = useSelector((state) => state.user);

    const editUserName = async (e) => {
        e.preventDefault();

        if (userName === '') {
            alert('Vous ne pouvez pas ajouter un pseudo vide');
            return;
        }

        if (userName.length > 24) {
            alert('Vous ne pouvez pas écrire plus de 24 caractères !');
            return;
        }

        // const req = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        //     method: 'PUT',
        //     headers: { "Content-Type": "application/json", "Authorization": `Bearer ${profile.token}` },
        //     body: JSON.stringify({ userName: userName })
        // });

        // const res = await req.json();

        // if (res) {
        //     dispatch(editName(userName));
        //     setIsOpen(false);
        // } 

        dispatch(editName(userName));
        setIsOpen(false);
    }

    return (
        <form
            className="editor"
            onSubmit={(e) => editUserName(e)}
        >
            <h2>
                Welcome back <br />
                {isOpen ? (
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                ) : `${profile.userName}!`}
            </h2>

            {!isOpen &&
                <button
                    className="btn-open"
                    onClick={() => setIsOpen(true)}
                >Edit name</button>
            }

            {isOpen && (
                <div className="container">
                    <button
                        className="btn-close"
                        onClick={() => setIsOpen(false)}
                    >Close</button>

                    <button
                        type="submit"
                        className="btn-edit"
                    >Edit</button>
                </div>
            )}
        </form>
    )
}

export default Editor;
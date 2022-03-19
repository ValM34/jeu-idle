import React, { useRef } from "react";




function Signin() {
    
    


    const formRef = useRef(null);



    const signinSubmit = (e) => {
        e.preventDefault();
        fetch(formRef.current.action, {
            method: formRef.current.method,
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify({
                "email": formRef.current.email.value,
                "password": formRef.current.password.value
            })
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response.userId)
            let userLocalStorage = [];
            userLocalStorage.push(response);
            localStorage.setItem('userDataConnexion', JSON.stringify(userLocalStorage))
        })
    }


    return (
        <div>

            <form action="http://localhost:3001/utilisateur/connexion" method="post" onSubmit={signinSubmit} ref={formRef}>
                <h2>Connexion</h2>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" id="input-email-signin" />
                <label htmlFor="password">Mot de passe</label>
                <input name="password" type="password" id="input-password-signin" />
                <button type="submit">ddddddddddd</button>
            </form>
        </div>
    );
}

export default Signin;
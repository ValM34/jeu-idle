import React, { useRef } from "react";




function Signup() {


    const formRef = useRef(null);

    


    const signupSubmit = (e) => {
        e.preventDefault();
        console.log(formRef.current.email.value)
        fetch(formRef.current.action, {
            method: formRef.current.method,
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify({
                "email": formRef.current.email.value,
                "password": formRef.current.password.value
            })
        })
    }


    return (
        <div>

            <form action="http://localhost:3001/utilisateur/inscription" method="post" onSubmit={signupSubmit} ref={formRef}>
                <h2>Inscription</h2>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" id="input-email-signup" />
                <label htmlFor="password">Mot de passe</label>
                <input name="password" type="password" id="input-password-signup" />
                <button type="submit">ddddddddddd</button>
            </form>
        </div>
    );
}

export default Signup;
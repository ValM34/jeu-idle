import React, { useState } from "react";
import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';



function Page1() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // CODE POUR UTILISER LE LOCAL STORAGE QUE J UTILISERAI QUAND J AURAI MIS BROWSER ROUTER ETC
    let localStorageTest = JSON.parse(localStorage.getItem('userDataConnexion'));
    // -----------------------------------------------------------------------------------------

    let boutonEnAttendantDeCallerLeTokenDansLeLocalStorage = () => {
        
        if(isLoggedIn === false){
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }


    return (
        <div>
            <button type="button" onClick={boutonEnAttendantDeCallerLeTokenDansLeLocalStorage}>Switch</button>
            {isLoggedIn ? <Signin /> : <Signup />}
            
            
        </div>
    );
}

export default Page1;
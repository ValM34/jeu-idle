import React, { useState } from "react";



function Page2() {


    const [golds, setGolds] = useState(0);

    let localStorageTest = JSON.parse(localStorage.getItem('userDataConnexion'));

    const buyUnit1 = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/unites/addunit', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorageTest[0].token
            },
            body: JSON.stringify({ "number": "1" }),
            mode: "cors",
        })
    }

    const buyUnit1_10 = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/unites/addunit', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorageTest[0].token
            },
            body: JSON.stringify({ "number": "10" }),
            mode: "cors",
        })
    }

    const buyUnit1_100 = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/unites/addunit', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorageTest[0].token
            },
            body: JSON.stringify({ "number": "100" }),
            mode: "cors",
        })
    }

    const mine = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/utilisateur/hit', {
            method: 'post',
            mode: 'cors',
            headers: { 
                "Content-Type": "application/json",
                "Authorization": localStorageTest[0].token
            },
            body: JSON.stringify({ "onverre": "onverra" })
        })
        .then(response => response.json())
        .then((response) => {
            setGolds(response.golds)
        })

    }



    return (
        <div>

            <h2>Salut</h2>
            <div>Unité 1</div>
            <button type="button" onClick={buyUnit1}>Acheter</button>
            <button type="button" onClick={buyUnit1_10}>Acheter 10</button>
            <button type="button" onClick={buyUnit1_100}>Acheter 100</button>


            <h3>Or : {golds}</h3>
            <div className="mine" onClick={mine}>Ici je clique pour gagner de l'or </div>

        </div>
    );
}

export default Page2;
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg, miningFunc } from '../../redux/Reducers/dataImgReducer';



function Page2() {


    const [golds, setGolds] = useState(0);

    let localStorageTest = JSON.parse(localStorage.getItem('userDataConnexion'));




    // TEST REACT REDUX


    const {cart, count, imgURL} = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer,
        ...state.dataImgReducer
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: 'INCR'
        })
    }

    const decrFunc = () => {
        dispatch({
            type: 'DECR'
        })
    }

    const [cartData, setCartData] = useState(0);

    const addToCartFunc = () => {
        dispatch({
            type: 'ADDCART',
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg());
        
    }, [])



    // FIN TEST 











    const buyUnit1 = (e) => {
        e.preventDefault();
        fetch('https://fast-springs-73959.herokuapp.com/unites/addunit', {
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
        fetch('https://fast-springs-73959.herokuapp.com/unites/addunit', {
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
        fetch('https://fast-springs-73959.herokuapp.com/unites/addunit', {
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
        dispatch(miningFunc());
        console.log(golds)

    }



    return (
        <div>

            <h2>Salut</h2>
            <div>Unité 1</div>
            <button type="button" onClick={buyUnit1}>Acheter</button>
            <button type="button" onClick={buyUnit1_10}>Acheter 10</button>
            <button type="button" onClick={buyUnit1_100}>Acheter 100</button>


            <h3>Test redux : {count}</h3>
            <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button>
            <br />
            <br />
            <br />
            <h3>Votre panier : {cart}</h3>
            <input type="number" value={cartData} onInput={e => setCartData(e.target.value)}/>
            <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>


            <h3>Or : {golds}</h3>
            <h3>Or test redux : {imgURL}</h3>
            <div className="mine" onClick={mine}>Ici je clique pour gagner de l'or </div>

        </div>
    );
}

export default Page2;
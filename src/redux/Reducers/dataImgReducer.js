const INITIAL_STATE = {
    imgURL: ""
}

function dataImgReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                imgURL: action.payload
            }
        }
        case 'MINING': {
            return {
                ...state,
                imgURL: action.payload
            }
        }
    }

    return state;
}

export default dataImgReducer;

let localStorageTest = JSON.parse(localStorage.getItem('userDataConnexion'));

export const getCatImg = () => dispatch => {

if(localStorage[0] !== undefined){
    fetch('https://fast-springs-73959.herokuapp.com/utilisateur/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorageTest[0].token
        },
    })
        .then(response => response.json())
        .then((response) => {
            dispatch({
                type: 'LOADING',
                payload: response.golds
            })
        })

    }
}

export const miningFunc = () => dispatch => {


    fetch('https://fast-springs-73959.herokuapp.com/utilisateur/hit', {
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
            dispatch({
                type: 'MINING',
                payload: response.golds
            })
        })


}
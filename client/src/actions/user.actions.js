export const GET_USER = 'GET_USER';
export const UPDATE_PROFIL = 'UPDATE_PROFIL';


export const getUser = (token) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/user/profile',{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization": 'Bearer'+ token
            },
            })
            .then((res)=> res.json())
            .then((res)=> {
                //console.log(res);
                dispatch({type: GET_USER, payload: res.body});
            })
            .catch((err)=> console.log(err));
    };
};

export const updateProfil = ( firstName, lastName, token) =>{
    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/user/profile',{
            method:"PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization": 'Bearer'+ token,
            },
            body: JSON.stringify({firstName, lastName})
        })
        .then((res) => {
            dispatch({type: UPDATE_PROFIL, payload:{firstName,lastName}})
        })
        .catch((err)=> console.log(err))
    }
}
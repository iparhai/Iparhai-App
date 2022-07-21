import axios from 'axios';

let baseURL = 'https://iparhai.com/iParhai/api/login.php/?tkn=0x5488131B482626F331225B4D2E59C96CAF2518E43A008F6A042A2F1E353E6A23';


export const login = (user) => (dispatch) => {
    const data = new FormData();
    data.append("id", user.id);
    data.append('pwd', user.pwd);
    
    return  axios.post(baseURL , data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then(res=>{
        // console.log(res.data)
        if(res.data.message == 'Login Success...'){
            console.log('hitted')
            dispatch({
                type : 'LOGIN_SUCCESS',
                payload : {user : user.id , id: res.data.id, typeOfUser : res.data.typeUser , message : res.data.message}
            })
            // Promise.resolve()
            return Promise.resolve(res.data)
        }
        else if(res.data.message == 'Incorrect Combination of Email and Password'){
            console.log('hitted incorrect')
            dispatch({
                type : 'INCORRECT_CREDENTIAL',
                payload : {user : user.id , id: res.data.id, typeOfUser : res.data.typeUser , message : res.data.message}
            })

            return Promise.resolve(res.data)
        }   
    }
    )
    .catch(err=>console.log(err))
}



// {
//     type : 'LOGIN_SUCCESS',
//     payload : user
// }

export const logout = () => (dispatch) => {
    return dispatch({
        type : 'LOGOUT_USER'
    })
}
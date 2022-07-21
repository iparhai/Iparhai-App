import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    isAuthenticated : false,
    user : null
};

const auth = (state = initialState , action) => {
    const {type , payload} = action;
    // console.log(payload) 
    switch (type){
        case 'LOGIN_SUCCESS' :
            console.log(payload)
            AsyncStorage.setItem("user", JSON.stringify(payload))
            return {...state , isAuthenticated : true , user : payload.user}
            case 'INCORRECT_CREDENTIAL' :
            AsyncStorage.setItem("user", JSON.stringify(payload))
            return {...state , isAuthenticated : false , user : payload.user}
        case 'LOGOUT_USER' :
            AsyncStorage.clear();
            return {...state , isAuthenticated : false , user : null}
        default :
            return state
    }
}

export default auth;
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionType";


interface LoginState {
    isLoading: boolean;
    isAuth: boolean,
    userData: object;
    isError: boolean;
    errorMessage: string;
}


const loginInitialState: LoginState = {
    isLoading: false,
    isAuth: false,
    userData: {},
    isError: false,
    errorMessage: "",
};


interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: object;
}

interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: boolean
}

interface Logout {
    type: typeof LOGOUT;
}


type LoginActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction | Logout;


const LoginReducer = (state = loginInitialState, action: LoginActionTypes) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMessage: "",
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                isAuth: true,
                isError: false,
                errorMessage: "",
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                isError: action.payload,
                errorMessage: action.payload,
            };

        case LOGOUT:
            return {
                ...state, isAuth: false, userData: {}
            }
        default:
            return state;
    }
};

export default LoginReducer;

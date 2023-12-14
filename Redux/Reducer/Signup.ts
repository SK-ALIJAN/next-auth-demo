import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionType";

interface signup {
    isLoading: boolean,
    data: object,
    isError: boolean,
    errorMessage: string
}

let signupInitialState: signup = {
    isLoading: false,
    data: {},
    isError: false,
    errorMessage: ""
}

interface SignupRequestAction {
    type: typeof SIGNUP_REQUEST;
}

interface SignupSuccessAction {
    type: typeof SIGNUP_SUCCESS;
    payload: object;
}

interface SignupFailureAction {
    type: typeof SIGNUP_FAILURE;
    payload: {
        isError: boolean;
        errorMessage: string;
    };
}

type SignupActionTypes = SignupRequestAction | SignupSuccessAction | SignupFailureAction;


let SignupReducer = (state = signupInitialState, action: SignupActionTypes) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMessage: "",
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload.isError,
                errorMessage: action.payload.errorMessage,
            };
        default:
            return state;
    }
}


export default SignupReducer;
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


export const SIGNIN_USER_REQUEST = "SIGNIN_USER_REQUEST";
export const SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const SIGNIN_USER_FAILURE = "SIGNIN_USER_FAILURE";

export const SIGNOUT_USER = "SIGNOUT_USER";

export function signoutUser(error) {
    return {
        type: SIGNOUT_USER,
        error,
    };
}


// SIGNIN a User
export const SigninUser = (user) => {
    const { email, password } = user;
    return async (dispatch) => {
        dispatch({ type: SIGNIN_USER_REQUEST });
        const requestBody = {
            email: email,
            password: password,
        };
        // console.log("ree", requestBody);
        try {
            let dataURL = "/api/signin";
            let response = await axios.post(dataURL, requestBody);
            console.log("res", response.data.msg);
            dispatch({ type: SIGNIN_USER_SUCCESS, payload: response.data });
        } catch (error) {
            console.log(error?.response?.data?.errors[0]?.msg);
            dispatch({
                type: SIGNIN_USER_FAILURE,
                payload: error?.response?.data?.errors[0]?.msg,
            });
            toast.error(error?.response?.data?.errors[0]?.msg);
        }
    };
};

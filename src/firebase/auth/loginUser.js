import { signInWithEmailAndPassword } from "firebase/auth";
import { TOO_MANY_REQUESTS, USER_NOT_FOUND, WRONG_PASSWORD } from "./errorCodes";
import { auth } from "../firebase.config";

const loginUser = async ({ email, password, setIsLoading }) => {
  try {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code === USER_NOT_FOUND) {
      throw "User doesn't exist.";
    } else if (error.code === WRONG_PASSWORD) {
      throw "Password is incorrect.";
    } else if (error.code === TOO_MANY_REQUESTS) {
      throw "Too many requests. Try again later.";
    } else {
      throw "There was a problem registering for an account.";
    }
  }
};

export default loginUser;

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { addUser } from "../firestore/user";
import { EMAIL_EXISTS, TOO_MANY_REQUESTS } from "./errorCodes";

const registerUser = async ({ email, password, firstName, lastName, cartId, setIsLoading }) => {
  try {
    setIsLoading(true);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await signOut(auth);
    await signInWithEmailAndPassword(auth, email, password);

    const { uid, email: userEmail } = userCredential.user;

    // Add user to firestore
    await addUser({
      uid,
      firstName,
      lastName,
      email: userEmail,
      cartId,
    });
  } catch (error) {
    console.log(error);
    if (error.code === EMAIL_EXISTS) {
      throw "Email is already in use.";
    } else if (error.code === TOO_MANY_REQUESTS) {
      throw "Too many requests. Try again later.";
    } else {
      throw "There was a problem registering for an account.";
    }
  }
};

export default registerUser;

import {
  doc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase.config";

const usersCollection = collection(db, "users");

// Add a user
const addUser = async (user) => {
  try {
    const docRef = await addDoc(usersCollection, {
      ...user,
      favorites: [],
    });

    return docRef.id;
  } catch (err) {
    throw "There was a problem adding account to database.";
  }
};

// Get user
const getUser = async (refId) => {
  try {
    const docRef = doc(db, "users", refId);

    const user = await getDoc(docRef);

    if (user.exists()) return user.data();
  } catch (error) {
    console.log("User not found.", error);
  }
};

// Find user
const findUserByUid = async (uid) => {
  try {
    const querySnapshot = await getDocs(usersCollection);
    const users = querySnapshot.docs.map((doc) => doc.data());

    // console.log(users);

    const user = users.find((user) => user.uid === uid);
    if (user) {
      // console.log(user);
      return user;
    }
  } catch (error) {
    console.log("User not found.", error);
    throw "User doesn't exist.";
  }
};

const addToFavoritesUser = async ({ uid, product }) => {
  try {
    const querySnapshot = await getDocs(usersCollection);
    const docId = querySnapshot.docs.find((doc) => doc.data().uid === uid).id;

    const docRef = doc(usersCollection, docId);

    await updateDoc(docRef, {
      favorites: arrayUnion(product),
    });
  } catch (error) {
    console.log(error.message);
    console.log("There was a problem updating favorites list.");
  }
};

const removeFromFavoritesUser = async ({ uid, product }) => {
  try {
    const querySnapshot = await getDocs(usersCollection);
    const docId = querySnapshot.docs.find((doc) => doc.data().uid === uid).id;

    const docRef = doc(usersCollection, docId);

    console.log(product);

    await updateDoc(docRef, {
      favorites: arrayRemove(product),
    });
  } catch (error) {
    console.log(error.message);
    console.log("There was a problem updating favorites list.");
  }
};

export { addUser, getUser, findUserByUid, addToFavoritesUser, removeFromFavoritesUser };

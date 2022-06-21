import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { authenticateUser } from "./features/userSlice";
import { auth } from "./firebase/firebase.config";
import { findUserByUid } from "./firebase/firestore/user";
import "./index.css";
import store from "./app/store";
import { initializeFavorites } from "./features/favoritesSlice";
import { PreLoader } from "./components";
import WebFont from "webfontloader";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<PreLoader />);

WebFont.load({
  custom: {
    families: ["HelveticaNeue"],
  },
});

onAuthStateChanged(auth, async (userCredential) => {
  if (userCredential) {
    const { uid } = userCredential;

    // console.log(userCredential);

    const user = await findUserByUid(uid);

    store.dispatch(authenticateUser(user));
    store.dispatch(initializeFavorites(user?.favorites));
  }

  root.render(<App />);
});

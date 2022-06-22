# Description
A demo ecommerce web application that integrates ([Commerce JS](https://commercejs.com/docs/api/)) to display storefront products, product categories, and perform cart operations. It also uses Firebase authentication to authenticate users and firestore to store user's current cart and wishlists.

## Tools Used

- [React](https://reactjs.org/) (Frontend JS UI Library)
- [Firebase](https://firebase.google.com/docs/web/setup) (Authentication and Database)
- [Commerce JS](https://commercejs.com/for/developers) (Headless Commerce Backend)
- [React Redux](https://react-redux.js.org/) (React bindings for Redux)
- [Redux Toolkit](https://redux-toolkit.js.org/) (State Management)
- [React Query](https://react-query.tanstack.com/) (Data Synchronization)
- [Chakra UI](https://chakra-ui.com/) (UI Component Library)
- [React Router v6](https://reactrouter.com/docs/en/v6) (Client/Server side Routing)
- [React Hook Forms](https://react-hook-form.com/) (Form Validation)
- [Vite](https://vitejs.dev/guide) (Build Tool)

## Features
- CRUD operations on products
- Firebase authentication
- Commerce JS integration
- Account registration
- Login/Logout
- Checkout (to be integrated soon)

## Images
![Home snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/home.png)
![Products snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/products.png)
![Single Product snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/product-item.png)
![Cart snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/cart.png)
![Favorites snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/favorites.png)
![Login snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/login.png)
![Register snapshot](https://raw.githubusercontent.com/seancaleb/sn-commerce-react/main/images/register.png)
![Home authenticated snapshot](https://github.com/seancaleb/sn-commerce-react/blob/main/images/home-authenticated.png)

## Installation

### 1. Clone this repository.

```bash
git clone https://github.com/seancaleb/sn-commerce-react.git <YOUR_PROJECT_NAME>
```

- Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.

- Run `npm install` in order to install the necessary dependencies for this project.

### 2. Setup a firebase project
- Head into [firebase](https://firebase.google.com/) and login with your Google account.

- Initialize a [new project](https://console.firebase.google.com/u/0/).

- Create a `.env` file at the root of your project.
    - `.env.local` - loaded in all cases, ignored by git
    - `.env.[mode]` - only loaded in specified mode   

- Setup firebase configuration details
```
// Be sure to checkout the firebase config of your app and only include those that are listed in the firebaseConfig object.

VITE_FIREBASE_API_KEY = YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN = YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID = YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET = YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID = YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID = YOUR_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID = YOUR_FIREBASE_MEASUREMENT_ID
```

- After setting up configuration details, enable Authentication service in firebase then select `Email/Password` provider and create a Database using `Cloud Firestore` and start in test mode.

### 3. Setup Commerce JS 
- Create/Login in account in [Commerce JS](https://commercejs.com/for/developers).

- Setup some dummy products and categories to be used in your react web application.

- Add API key to your `.env` file
```
// You can either use the live/sandbox environment then the type 'public' key for this project

VITE_COMMERCEJS_API_KEY = YOUR_COMMERCEJS_API_KEY
```

### 4. Run the project locally
```
npm run dev
```

## Build the project
```
npm run build
```

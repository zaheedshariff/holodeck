import React from 'react';
import { render } from 'react-dom';
//normalize renders all the elements the same on all browsers
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
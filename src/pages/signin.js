import React, { useContext, useState } from 'react';
// standard import usehistory: allows us to push to different pages on an action
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    //these are set to empty string, because we are hoping for a value
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // if password and email address is empty, than invalid
    const isInvalid = password === '' || emailAddress ==='';
    const handleSignIn = (event) => {
        event.preventDefault();
        //firebase Authentication!!
        return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
        //push to browser page
        //custom hook:
          history.push(ROUTES.BROWSE);
        })
        // error handler
        .catch((error) => {
          setEmailAddress('');
          setPassword('');
          setError(error.message);
    });
}


    // check form input elements are valid
    // email and password
    return(
        <>
        <HeaderContainer> 
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
  

             <Form.Base onSubmit={handleSignIn} method="POST">
                <Form.Input
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)} />
                <Form.Input
                    type="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)} />
                <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
            </Form.Base>

                <Form.Text> New to Holodeck? <Form.Link to="/signup"> Sign Up! </Form.Link> </Form.Text>
                <Form.TextSmall>
                    This page is protected by Zig and Google Recapture, if you are a bot, I will know!
                </Form.TextSmall>
            </Form>

        </HeaderContainer> 
        <FooterContainer />
        </>
    ) 
};
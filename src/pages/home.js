import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';



export default function Home () {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Welcome to the Holodeck!</Feature.Title>
                    <Feature.SubTitle>Always Entertaining, All the Time!</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Enter your email to signup and watch for free!</OptForm.Text>
                </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
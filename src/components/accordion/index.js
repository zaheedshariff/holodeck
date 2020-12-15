import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion'

// Creates a Context object. When React renders a component that subscribes to this 
// Context object it will read the current context value from the closest matching 
// Provider above it in the tree.
const ToggleContext = createContext();

// parent container function
export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow}}>
        <Item {...restProps}> {children} </Item>;
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    // in this example we have toggleshow will is naturally set to false
    const { toggleShow, setToggleShow } = useContext(ToggleContext)

    return (
        // in this situation, we are setting toggle show to the inverse, to true
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
            {children}
            {/* this could be used to find the current state of the toggle and display in the accordion menu */}
            {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="open" />
            )}
        </Header>
    )
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    // if toggleshow is true, show the body
    return toggleShow ? <Body { ...restProps }> {children} </Body> : null;
}


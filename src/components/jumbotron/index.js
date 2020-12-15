import React from 'react';
import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/jumbotron'


// compound component
// Compound components is a pattern in which components are used 
// together such that they share an implicit state that let's them communicate 
// with each other in the background.

// user can use what they want, if they don't want something from the jumbtron, they can remove it
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return(
        <Item { ...restProps } >
            <Inner direction={ direction }>
           { children }
           </Inner>
        </Item>
    
    )
};

Jumbotron.Container = function JumbotronContainer ({ children, ...restProps}) {
    return <Container { ...restProps }>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane ({ children, ...restProps}) {
    return <Pane { ...restProps }>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle ({ children, ...restProps}) {
    return <Title { ...restProps }>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle ({ children, ...restProps}) {
    return <SubTitle { ...restProps }>{children}</SubTitle>;
};

//no children are being passed through
Jumbotron.Image = function JumbotronImage ({ ...restProps}) {
    return <Image { ...restProps } />;
};


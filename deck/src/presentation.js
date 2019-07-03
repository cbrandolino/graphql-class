// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Slide,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            What's on the menu
          </Heading>

          <List>
            <ListItem>What is graphql</ListItem>
            <ListItem>Which problems does it solve</ListItem>
            <ListItem>Graphql architecture overview</ListItem>
            <ListItem>Adding graphql to an existing API with Apollo</ListItem>
            <ListItem>Mixing different data sources</ListItem>
            <ListItem>Client-side development</ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} fit textColor="primary" caps>
            What is GraphQL?
          </Heading>
          <Heading size={4} textColor="primary" fit>
            a query language for APIs.
          </Heading>
          <Image src="whatIsGraphql.png" />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" caps>
            API example: Pokemon api
          </Heading>
          <Heading size={5} textColor="tertiary">
            https://pokeapi.co/
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" caps>
            What's wrong with REST?
          </Heading>
          <List>
            <ListItem>Overfetching</ListItem>
            <ListItem>Underfetching</ListItem>
            <ListItem>Connecting multiple services</ListItem>
            <ListItem>Friction when adding new use cases</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" caps>
            GraphQL architecture
          </Heading>
          <Image src="architecture.png" />
        </Slide>
      </Deck>
    );
  }
}

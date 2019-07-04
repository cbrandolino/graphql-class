// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
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
            <Appear>
              <ListItem>What is graphql</ListItem>
            </Appear>
            <Appear>
              <ListItem>Which problems does it solve</ListItem>
            </Appear>
            <Appear>
              <ListItem>Graphql architecture overview</ListItem>
            </Appear>
            <Appear>
              <ListItem>Adding graphql to an existing API with Apollo</ListItem>
            </Appear>
            <Appear>
              <ListItem>Mixing different data sources</ListItem>
            </Appear>
            <Appear>
              <ListItem>Client-side development</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" caps>
            API example: Pokemon api
          </Heading>
          <Heading size={5} textColor="tertiary">
            https://pokeapi.co/
          </Heading>
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
          <Heading size={4} textColor="tertiary" caps>
            What's wrong with REST?
          </Heading>
          <List>
            <Appear>
              <ListItem>Overfetching</ListItem>
            </Appear>
            <Appear>
              <ListItem>Underfetching</ListItem>
            </Appear>
            <Appear>
              <ListItem>Connecting multiple services</ListItem>
            </Appear>
            <Appear>
              <ListItem>Friction when adding new use cases</ListItem>
            </Appear>
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

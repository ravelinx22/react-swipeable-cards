# React-Swipeable-Cards

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React-swipeable-cards is a flexible react component that lets you build custom interactive cards that can be swipeable.

## Getting Started

### Installing

````
npm install react-swipeable-cards --save
````

### Demo

## Usage

## Example

```jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';

class Example extends Component {
  render() {
    return(
      <CardWrapper>
        <Card>
          Hello World!
        </Card>
      </CardWrapper>
    );
  }
}
```

## Components

### CardWrapper

Is the container of all the cards that are going to be displayed.

**Optional Props:**

| Name       | Type     | Description                                                                                                                                                                                                                              |
|------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| addEndCard | Function | Function that returns a custom position fixed Card component that is going to be displayed when all cards have been swiped. If the prop is not passed CardWrapper assumes that there is no need for a fixed card at the end of the deck. |
| style      | Object   | Custom styles that is going to have the container.                                                                                                                                                                                       |

### Card

Card that is going to be displayed inside the CardWrapper.

**Optional Props:**

| Name         | Type     | Description                                              |
|--------------|----------|----------------------------------------------------------|
| data         | Object   | Data object that is going to be represented by the card. |
| onSwipe      | Function | Called when a card is swiped left or right.              |
| onSwipeLeft  | Function | Called when a card is swiped left.                       |
| onSwipeRight | Function | Called when a card is swiped right.                      |
| onDoubleTap  | Function | Called when a card is taped twice.                       |
| style        | Object   | Custom styles that is going to have the card.            |

#### Examples

**Swipe and Tap listeners**

```jsx
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from '../../src/index'

class Example extends Component {

  onSwipe(data) {
    console.log("I was swiped.");
  }

  onSwipeLeft(data) {
    console.log("I was swiped left.");
  }

  onSwipeRight(data) {
    console.log("I was swiped right.");
  }

  onDoubleTap(data) {
    console.log("I was double taped.");
  }

  renderCards() {
    let data = ["first", "second", "third"];
    return data.map((d) => {
      return(
        <Card
          key={d}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onDoubleTap={this.onDoubleTap.bind(this)}>
            Hello World!
        </Card>
      );
    });
  }
  
  render() {
    return(
      <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
    );
  }
}
```

**Passing data to card**

```jsx
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from '../../src/index'

class Example extends Component {
  onSwipe(data) {
    console.log(data.name + " was swiped.");
  }

  renderCards() {
    let data = [{id: 1, name: "First"},{id: 2, name: "Second"}];
    return data.map((d) => {
      return(
        <Card
          key={d.id}
          onSwipe={this.onSwipe.bind(this)}
          data={d}>
            {d.name}
        </Card>
      );
    });
  }

  render() {
    return(
      <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
    );
  }
}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

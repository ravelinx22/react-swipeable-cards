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

## CardWrapper

Is the container of all the cards that are going to be displayed.

**Optional Props:**

| Name       | Type     | Description                                                                                                                                                                                                                              |
|------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| addEndCard | Function | Function that returns a custom position fixed Card component that is going to be displayed when all cards have been swiped. If the prop is not passed CardWrapper assumes that there is no need for a fixed card at the end of the deck. |
| style      | Object   | Custom styles that is going to have the container.                                                                                                                                                                                       |

## Card

Card that is going to be displayed inside the CardWrapper

**Optional Props:**

| Name         | Type     | Description                                              |
|--------------|----------|----------------------------------------------------------|
| data         | Object   | Data object that is going to be represented by the card. |
| onSwipe      | Function | Called when a card is swiped left or right.              |
| onSwipeLeft  | Function | Called when a card is swiped left.                       |
| onSwipeRight | Function | Called when a card is swiped right.                      |
| onDoubleTap  | Function | Called when a card is taped twice.                       |
| style        | Object   | Custom styles that is going to have the card.            |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

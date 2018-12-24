import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/2000/800/?random',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
     key : '1'
  },
  {
    src: 'https://picsum.photos/2001/800/?random',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
     key : '2'
  },
  {
    src: 'https://picsum.photos/2002/800/?random',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
     key : '3'
  }
];

const Slide = () => <UncontrolledCarousel items={items} key = { items.key}/>;

export default Slide;
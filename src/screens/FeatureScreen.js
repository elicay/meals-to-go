import React from 'react';
import FeatureList from '../components/FeatureList';

const RESTAURANT_DATA = [
  {
    id: 1,
    name: 'Wolf LLC',
    icon: '',
    photo:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: '510 Zemlak Fort',
    isOpen: true,
    rating: 5,
    isCloseTemporarly: false,
  },
  {
    id: 2,
    name: 'Inc,and Sons,LLC,Group',
    icon: '',
    photo:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    address: '132 Annette Hollow',
    isOpen: true,
    rating: 3,
    isCloseTemporarly: false,
  },
  {
    id: 3,
    name: 'Envisioneer B2C synergies',
    icon: '',
    photo:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    address: '24292 Clemens Streets',
    isOpen: false,
    rating: 1,
    isCloseTemporarly: true,
  },
  {
    id: 4,
    name: 'Directional',
    icon: '',
    photo:
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    address: '492 Kohler Unions',
    isOpen: false,
    rating: 1,
    isCloseTemporarly: true,
  },
];

export default function FeatureScreen() {
  return (
    <>
      <FeatureList items={RESTAURANT_DATA} />
    </>
  );
}

import React from 'react';
import { FlatList } from 'react-native';
import FeatureListItem from './FeatureListItem';

export default function FeatureList(props) {
  const { items } = props;
  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FeatureListItem
            name={item.name}
            address={item.address}
            rating={item.rating}
            isOpen={item.isOpen}
            photo={item.photo}
          />
        )}
      />
    </>
  );
}

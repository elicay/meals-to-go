import React from 'react';
import { StyleSheet } from 'react-native';
import { Badge, Card, Text } from 'react-native-paper';

export default function FeatureListItem(props) {
  const { name, address, rating, isOpen, photo } = props;
  const stars = [];

  for (let index = 0; index < rating; index++) {
    stars.push('⭐');
  }

  return (
    <>
      <Card style={styles.card}>
        <Badge
          style={[
            styles.badge,
            isOpen ? styles.open : styles.close,
            styles.badge,
          ]}
        >
          {isOpen ? 'Open' : 'Closed'}
        </Badge>
        <Card.Cover source={{ uri: photo }} />
        <Text style={styles.title} variant="titleMedium">
          {name}
        </Text>

        <Text style={styles.title} variant="titleMedium">
          {stars.join('')}
        </Text>

        <Text style={styles.title} variant="titleSmall">
          {address}
        </Text>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 7,
    margin: 10,
  },
  title: {
    marginTop: 5,
    fontWeight: 900,
  },
  badge: {
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  open: {
    backgroundColor: '#03c9a9',
  },
  close: {
    backgroundColor: '#ff4c30',
  },
});

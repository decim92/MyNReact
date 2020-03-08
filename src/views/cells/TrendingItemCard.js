import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type Props = {
  title: string,
  poster_image_url: string,
  overview: string,
};
const TrendingItemCard: React.SFC<Props> = props => (
  <View style={styles.container}>
    <View style={styles.dataContainer}>
      <Image source={{uri: props.poster_image_url}} style={styles.image} />
      <View style={styles.basicDataContainer}>
        <Text>{props.title}</Text>
      </View>
    </View>
    <Text style={styles.overview}>{props.overview}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    margin: 8,
  },
  dataContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  basicDataContainer: {
    marginLeft: 16,
  },
  overview: {
    textAlign: 'justify',
  },
  image: {width: 120, height: 180},
});

export default TrendingItemCard;

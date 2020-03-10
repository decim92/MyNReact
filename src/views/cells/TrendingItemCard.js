import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

type Props = {
  title: string,
  poster_image_url: string,
  overview: string,
  id: number,
  onShowDetail: 'function',
};
const TrendingItemCard: React.SFC<Props> = props => (
  <View style={styles.container}>
    <View style={styles.borderedContainer}>
      <View style={styles.dataContainer}>
        <Image source={{uri: props.poster_image_url}} style={styles.image} />
        <View style={styles.basicDataContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Button
            onPress={() => props.onShowDetail(props.id)}
            title="Show details"
          />
        </View>
      </View>
      <Text style={styles.overview}>{props.overview}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    margin: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    // height: 275,
  },
  borderedContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'white',
    // overflow: 'hidden',
  },
  dataContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  basicDataContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  overview: {
    textAlign: 'justify',
  },
  image: {width: 120, height: 180},
  title: {
    fontSize: 20,
  },
});

export default TrendingItemCard;

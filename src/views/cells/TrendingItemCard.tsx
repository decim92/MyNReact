import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {TrendingMovie} from '../../selectors/home';
import {translate} from '../../utils/i18n';

type Props = {
  item: TrendingMovie;
  onShowDetail(id: number): void;
};
const TrendingItemCard: React.SFC<Props> = props => (
  <View style={styles.container}>
    <View style={styles.borderedContainer}>
      <View style={styles.dataContainer}>
        <Image
          source={{uri: props.item.poster_image_url}}
          style={styles.image}
        />
        <View style={styles.basicDataContainer}>
          <Text style={styles.title}>{props.item.title}</Text>
          <Button
            onPress={() => props.onShowDetail(props.item.id)}
            title={translate('trending_item_card.show_detail_button')}
          />
        </View>
      </View>
      <Text style={styles.overview}>{props.item.overview}</Text>
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

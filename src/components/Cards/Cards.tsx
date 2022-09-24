import {images} from '../../utils/imageCrypto';
import {Image, StyleSheet, Text, View} from 'react-native';

const Card: React.FC<{
  title: string;
  titleSmall: string;
  cost: string;
  day: string;
  week: string;
}> = ({title, cost, day, week, titleSmall}) => {
  return (
    <>
      <View style={styles.upperRow}>
        <Image style={styles.image} source={{uri: images[title]}} />
        <Text style={styles.coinSymbol}>{title}</Text>
        <Text style={styles.seperator}>|</Text>
        <Text style={styles.coinName}>{titleSmall}</Text>
        <Text style={styles.coinPrice}>
          {Number(cost).toFixed(2)}
          <Text style={styles.moneySymbol}> $ </Text>
        </Text>
      </View>
      <View style={styles.statisticsContainer}>
        <Text>
          24h:
          <Text
            style={
              Number(day) < 0
                ? styles.percentChangeMinus
                : styles.percentChangePlus
            }>
            {day} %
          </Text>
        </Text>
        <Text>
          7d:
          <Text
            style={
              Number(week) < 0
                ? styles.percentChangeMinus
                : styles.percentChangePlus
            }>
            {week} %
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#007242',
    fontSize: 30,
    paddingVertical: 30,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: 'bold',
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    padding: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#aaa',
    justifyContent: 'space-around',
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ({item}): JSX.Element => (
  <Card
    title={item.symbol}
    titleSmall={item.name}
    cost={item.quote.USD.price}
    day={Number(item.quote.USD.percent_change_24h).toFixed(2)}
    week={Number(item.quote.USD.percent_change_7d).toFixed(2)}
  />
);

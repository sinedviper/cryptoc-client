import {StyleSheet, Text} from 'react-native';

export default () => <Text style={styles.header}>Cryptoc</Text>;

const styles = StyleSheet.create({
  header: {
    color: '#007242',
    fontSize: 30,
    paddingVertical: 30,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#007242',
  },
});

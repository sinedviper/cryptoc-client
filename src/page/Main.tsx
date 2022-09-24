import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';

import Cards from '../components/Cards/Cards';
import Header from '../components/Header/Header';
import {useCryptoc} from './use-cryptoc';

const Main = () => {
  const {list} = useCryptoc();

  return (
    <SafeAreaView>
      <View>
        <Header />
        <FlatList
          data={list}
          renderItem={Cards}
          keyExtractor={item => item.id}
          scrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;

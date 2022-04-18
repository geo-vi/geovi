import {ListRenderItemInfo} from 'react-native';
import React from 'react';
import AnimatedFlatList from '../components/AnimatedFlatList';
import PageData from '../constants/Pages';

type HomeTypes = {
  onScroll: any;
  flatListRef: React.Ref<any>;
};

function Home({onScroll, flatListRef}: HomeTypes) {
  function renderItem(itemInfo: ListRenderItemInfo<any>) {
    const ItemPage = itemInfo.item;

    return <ItemPage index={itemInfo.index} />;
  }

  return (
    <AnimatedFlatList
      ref={flatListRef}
      scrollEventThrottle={16} // ~60 events per second
      onScroll={onScroll}
      data={PageData}
      renderItem={renderItem}
    />
  );
}

export default Home;

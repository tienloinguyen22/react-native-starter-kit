import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  NativeScrollEvent,
  LayoutChangeEvent,
  ImageBackground,
  ListRenderItemInfo,
  ImageSourcePropType,
  Animated,
} from 'react-native';
import { Text } from 'react-native-elements';
import { welcome1, welcome2, welcome3, welcome4 } from '@app/assets';
import { styles } from './WelcomeScreenStyles';

interface IntroSlide {
  key: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const slides = [
  {
    key: 'slide1',
    title: 'Pet Hotel',
    description: '-',
    image: welcome1,
  },
  {
    key: 'slide2',
    title: 'Day care',
    description: 'You go to work, kids go to school & you pup goes to our Day Care',
    image: welcome2,
  },
  {
    key: 'slide3',
    title: 'Grooming',
    description: '-',
    image: welcome3,
  },
  {
    key: 'slide4',
    title: 'Bathing',
    description: 'A great way to enhance bonding with your pup',
    image: welcome4,
  },
];

export const WelcomeScreen = (): JSX.Element => {
  const flatList = useRef<FlatList>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [animatedValue] = useState<Animated.Value[]>(
    slides.map((_, i) => (i === activeIndex ? new Animated.Value(18) : new Animated.Value(6))),
  );

  const renderItem = (listRenderItemInfo: ListRenderItemInfo<IntroSlide>): JSX.Element => {
    const { item } = listRenderItemInfo;
    const itemStyles = {
      width,
      flex: 1,
    };
    return (
      <View style={itemStyles}>
        <ImageBackground source={item.image} style={styles.background}>
          <View style={styles.slideInfo}>
            <View>
              <Text style={styles.slideTitle}>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.slideDescription}>{item.description}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderPagination = (): JSX.Element => {
    // const isLastSlide = activeIndex === slides.length - 1;

    return (
      <View style={styles.paginationContainer}>
        <View>
          <View style={styles.paginationDots}>
            {slides.map((slide, i) => {
              const activeDotStyles = { width: animatedValue[i] };
              return (
                <Animated.View key={slide.key} style={i === activeIndex ? [styles.dot, activeDotStyles] : styles.dot} />
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  const onMomentumScrollEnd = (e: { nativeEvent: NativeScrollEvent }): void => {
    const offset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offset / width);
    Animated.timing(animatedValue[newIndex], {
      toValue: 18,
      duration: 200,
      useNativeDriver: false,
    }).start();
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const onMomentumScrollBegin = (): void => {
    Animated.timing(animatedValue[activeIndex], {
      toValue: 6,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onLayout = ({ nativeEvent }: LayoutChangeEvent): void => {
    if (nativeEvent.layout.width !== width || nativeEvent.layout.height !== height) {
      setWidth(nativeEvent.layout.width);
      setHeight(nativeEvent.layout.height);

      // Set new scroll position
      const scrollToPosition = (): void => {
        if (flatList && flatList.current) {
          flatList.current.scrollToOffset({
            offset: activeIndex * width,
            animated: false,
          });
        }
      };
      setTimeout(scrollToPosition, 0);
    }
  };

  return (
    <View style={styles.flexOne}>
      <FlatList
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={flatList as any}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.flatList}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onLayout={onLayout}
        keyExtractor={(item: IntroSlide) => item.key}
        initialNumToRender={slides.length}
      />
      {renderPagination()}
    </View>
  );
};

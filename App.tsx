import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const variantStyles = {
    default: 'rounded-full',
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-white-500 text-black',
  };

  return (
    <SafeAreaProvider>
      <View tw="flex-1">
        <View tw="flex-1 flex-column items-center justify-center bg-white">
          <Text tw="font-bold top-[50] text-black">Open up App.js to start working on your app!</Text>
        </View>
        <View tw="flex-1 justify-center bg-black w-[50vh] pl-[50]">
          <Text tw="font-bold color-white ">Second line of text...</Text>
        </View>
        <View tw="flex-1 justify-center">
          <Text
            tw={`
            android:text-red-500
            ios:text-blue-500
          `} style={{fontWeight: 'bold'}}>
            Third line of text...
          </Text>
        </View>
        <View
          tw={`
            flex-1 
            justify-center
            bg-black
            ${variantStyles.default}
        `}>
          <Text tw="text-red-500 px-[160]">Fourth line of text...</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

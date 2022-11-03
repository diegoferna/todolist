import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/page/home';

export default function App() {
  return (
    <View >
      <StatusBar barStyle="default" backgroundColor="transparent" translucent/>
      <Home/>
    </View>
  );
}
;

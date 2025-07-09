import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TagsScreen from './src/screens/TagsScreen';
const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.app}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TagsScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default App;

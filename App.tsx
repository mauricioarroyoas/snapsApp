import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import TopicBubble from './scr/components/TopicBubble';

type Topic = {
  id: number;
  name: string;
};
const topics: Topic[] = [
  { id: 1, name: 'Coffee' },
  { id: 2, name: 'After Office' },
  { id: 3, name: 'Pets' },
  { id: 4, name: 'Fitness' },
  { id: 5, name: 'Snacks' },
  { id: 6, name: 'Office Decor' },
  { id: 7, name: 'Music' },
  { id: 8, name: 'Birthdays' },
  { id: 9, name: 'Gaming' },
  { id: 10, name: 'Futbol' },
  { id: 11, name: 'Meme Time' },
  { id: 12, name: 'Lunch Time' },
  { id: 13, name: 'New Joiner' },
  { id: 14, name: 'Anime' },
  { id: 15, name: 'Technology' },
];

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  isDarkMode ? 'black' : 'white',
    },
    flatListContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
      backgroundColor: 'blue',
    },
    textColor: {
      color: isDarkMode ? 'white' : 'black',
    },
  });

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Text style={styles.textColor}>Welcome to the Topics Screen!</Text>
      <Text style={styles.textColor}>Welcome to the Topics Screen!</Text>

      <FlatList
        data={topics}
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TopicBubble topicName={item.name} />}
      />
    </SafeAreaView>
  );
};

export default App;

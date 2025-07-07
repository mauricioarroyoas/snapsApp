import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
    topicsScreen: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      backgroundColor: isDarkMode ? '#020513' : 'white',
    },


    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: 20,
      gap: 5,
      // backgroundColor: 'red',
    },
    separator: {
      height: 2,
      backgroundColor: '#C7FD46',
      marginHorizontal: 20,
    },
    contentContainer: {
      flex: 1,
      padding: 10,
      // backgroundColor: 'coral',
    },
    topicsList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      rowGap: 20,
      // backgroundColor: 'blue',
    },
    topicItemWrapper: {
      width: '48%',
      marginHorizontal: '1%',
      paddingHorizontal: 2,
    },
    bubbleWidth: {
      width: '100%',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 35,
      paddingHorizontal: 20,
      // backgroundColor: 'lightblue',
    },

    textLarge: {
      fontSize: 30,
    },
    titleText: {
      fontSize: 18,
      fontWeight: '600',
      color: isDarkMode ? '#FFFFFF' : 'black',
    },
    textExtraBold: {
      fontWeight: '900',
    },
    textMediumBold: {
      fontWeight: '500',
    },
    button: {
      width: '100%',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 18,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },

    primaryColor: {
      backgroundColor: '#0040D3',
    }
  });

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.topicsScreen}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, styles.textLarge, styles.textExtraBold]}>What are you interested in?</Text>
          <Text style={[styles.titleText, styles.textMediumBold]}>
            Choose 1 or more topics you like!
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.contentContainer}>
          <FlatList
            data={topics}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.topicsList}
            renderItem={({ item }) => (
              <View style={styles.topicItemWrapper}>
                <TopicBubble
                  topicName={item.name}
                  containerStyle={styles.bubbleWidth}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.primaryColor]}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

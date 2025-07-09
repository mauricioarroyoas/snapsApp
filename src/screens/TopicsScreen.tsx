import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TopicBubble from '../components/TopicBubble';
import { getColors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';
const getStyles = (isDarkMode: boolean) => {
  const colors = getColors(isDarkMode);

  return StyleSheet.create({
    topicsScreen: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      backgroundColor: colors.background,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: 20,
      gap: 5,
    },
    text: {
      color: colors.text,
    },
    contentContainer: {
      flex: 1,
      padding: 10,
    },
    topicsList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      rowGap: 20,
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
    },
    buttonPrimary: {
      backgroundColor: colors.primary,
    },
    buttonPrimaryPressed: {
      backgroundColor: colors.primaryPressed,
    },
    buttonPrimaryDisabled: {
      backgroundColor: colors.primaryDisabled,
      opacity: 0.5,
    },
  });
};

const TopicsScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const styles = getStyles(isDarkMode);

  const handleOnPressTopicBubble = (topicId: number) => {
    const topic = topics.find(t => t.id === topicId)!;
    const alreadyAdded = selectedTopics.some(t => t.id === topic.id);

    let newTopics: Topic[] = [];
    if (alreadyAdded) {
      newTopics = selectedTopics.filter(t => t.id !== topicId);
      setSelectedTopics(newTopics);
    } else {
      newTopics = [...selectedTopics, topic];
      setSelectedTopics(newTopics);
    }
  };

  return (
    <View style={styles.topicsScreen}>
      <View style={styles.titleContainer}>
        <Text
          style={[
            globalStyles.textExtraLarge,
            globalStyles.textExtraBold,
            styles.text,
          ]}
        >
          Tags
        </Text>
        <Text
          style={[
            globalStyles.textSmall,
            globalStyles.textMediumBold,
            styles.text,
          ]}
        >
          Choose at least one
        </Text>
      </View>
      <View style={globalStyles.separator} />
      <View style={styles.contentContainer}>
        <FlatList
          data={topics}
          numColumns={2}
          contentContainerStyle={styles.topicsList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.topicItemWrapper}>
              <TopicBubble
                topic={item}
                containerStyle={styles.bubbleWidth}
                onPress={() => handleOnPressTopicBubble(item.id)}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          disabled={selectedTopics.length === 0}
          style={({ pressed }) => [
            globalStyles.button,
            styles.buttonPrimary,
            pressed && styles.buttonPrimaryPressed,
            selectedTopics.length === 0 && styles.buttonPrimaryDisabled,
          ]}
        >
          <Text
            style={[
              globalStyles.textLarge,
              globalStyles.textSemiBold,
              styles.text,
            ]}
          >
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default TopicsScreen;

export type Topic = {
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

import { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TagBubble from '../components/TagBubble';
import { fetchTags } from '../services/TagService';
import { assignTagsToUser } from '../services/UserService';
import { User } from '../models/User';
import { Tag } from '../models/Tag';
import { getColors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';
import { getLoggedInUser } from '../services/AuthorizationService';

const getStyles = (isDarkMode: boolean) => {
  const colors = getColors(isDarkMode);

  return StyleSheet.create({
    tagsScreen: {
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
    tagsList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      rowGap: 20,
    },
    tagItemWrapper: {
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

const TagsScreen = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    setUser(loggedInUser);

    fetchTags().then(tagsData => {
      setTags(tagsData);
    });
  }, []);

  const handleOnPressTagBubble = (tagId: string) => {
    const tag = tags.find(t => t.id === tagId)!;
    const alreadyAdded = selectedTags.some(t => t.id === tag.id);

    let newTags: Tag[] = [];
    if (alreadyAdded) {
      newTags = selectedTags.filter(t => t.id !== tagId);
      setSelectedTags(newTags);
    } else {
      newTags = [...selectedTags, tag];
      setSelectedTags(newTags);
    }
  };

  const handleOnPressContinue = async () => {
    try {
      const tagIds = selectedTags.map(t => t.id);
      await assignTagsToUser(user!.id, tagIds);
    } catch (error) {}
  };

  return (
    <View style={styles.tagsScreen}>
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
          data={tags}
          numColumns={2}
          contentContainerStyle={styles.tagsList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.tagItemWrapper}>
              <TagBubble
                tag={item}
                containerStyle={styles.bubbleWidth}
                onPress={() => handleOnPressTagBubble(item.id)}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          testID="continue-button"
          disabled={selectedTags.length === 0}
          style={({ pressed }) => [
            globalStyles.button,
            styles.buttonPrimary,
            pressed && styles.buttonPrimaryPressed,
            selectedTags.length === 0 && styles.buttonPrimaryDisabled,
          ]}
          onPress={handleOnPressContinue}
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
export default TagsScreen;

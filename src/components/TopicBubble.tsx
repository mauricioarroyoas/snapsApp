import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import { getColors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';
import { Topic } from '../../App';

const getStyles = (isDarkMode: boolean) => {
  const colors = getColors(isDarkMode);

  return StyleSheet.create({
    topicBubble: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 22,
      backgroundColor: '#3A3B47',
      borderRadius: 30,
    },
    topicBubbleActive: {
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.text,
    },
  });
};

interface TopicBubbleProps {
  topic: Topic;
  containerStyle?: ViewStyle;
  onPress?: (topicId: number) => void;
}
const TopicBubble = ({ topic, containerStyle, onPress }: TopicBubbleProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress?.(topic.id);
  };

  return (
    <Pressable
      style={[
        styles.topicBubble,
        isSelected && styles.topicBubbleActive,
        containerStyle,
      ]}
      onPress={handlePress}
    >
      <Text
        style={[styles.text, globalStyles.textMedium, globalStyles.textBold]}
      >
        {topic.name}
      </Text>
    </Pressable>
  );
};
export default TopicBubble;

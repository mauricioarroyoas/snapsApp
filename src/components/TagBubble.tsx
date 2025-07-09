import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import { Tag } from '../models/Tag';
import { getColors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';
const getStyles = (isDarkMode: boolean) => {
  const colors = getColors(isDarkMode);

  return StyleSheet.create({
    tagBubble: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 22,
      backgroundColor: '#3A3B47',
      borderRadius: 30,
    },
    tagBubbleActive: {
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.text,
    },
  });
};

interface TagBubbleProps {
  tag: Tag;
  containerStyle?: ViewStyle;
  onPress?: (tagId: string) => void;
}
const TagBubble = ({ tag, containerStyle, onPress }: TagBubbleProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress?.(tag.id);
  };

  return (
    <Pressable
      style={[
        styles.tagBubble,
        isSelected && styles.tagBubbleActive,
        containerStyle,
      ]}
      onPress={handlePress}
    >
      <Text
        style={[styles.text, globalStyles.textMedium, globalStyles.textBold]}
      >
        {tag.name}
      </Text>
    </Pressable>
  );
};
export default TagBubble;

import { useState } from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  topicBubble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#3A3B47',
    borderRadius: 20,
  },
  bubbleText: {
    fontWeight: 'bold',
    color: 'white',
  },
  topicBubblePressed: {
    backgroundColor: '#0040D3',
  },
  bubbleTextPressed: {
    color: 'white',
  },
});

interface TopicBubbleProps {
  topicName: string;
  containerStyle?: ViewStyle;
}

const TopicBubble = ({ topicName, containerStyle }: TopicBubbleProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Pressable
      style={[
        styles.topicBubble,
        isSelected && styles.topicBubblePressed,
        containerStyle,
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.bubbleText, isSelected && styles.bubbleTextPressed]}>
        {topicName}
      </Text>
    </Pressable>
  );
};

export default TopicBubble;

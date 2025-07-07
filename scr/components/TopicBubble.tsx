import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  bubble: {
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  bubbleText: {
    fontWeight: 'bold',
    color: '#333',
  },
  backgorundPressedColor: {
    backgroundColor: '#1DB954',
  },

  textColor: {
    color: 'white',
  },
});

interface TopicBubbleProps {
  topicName: string;
}

const TopicBubble = ({ topicName }: TopicBubbleProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Pressable
      style={[styles.bubble, isSelected && styles.backgorundPressedColor]}
      onPress={handlePress}
    >
      <Text style={styles.bubbleText}>{topicName}</Text>
    </Pressable>
  );
};

export default TopicBubble;

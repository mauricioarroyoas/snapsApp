import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TopicBubble from '../TopicBubble';

describe('TopicBubble', () => {
  it('renders the topic name correctly', () => {
    const mockTopic = { id: 1, name: 'Test Topic 1' };

    const { getByText } = render(<TopicBubble topic={mockTopic} />);

    expect(getByText('Test Topic 1')).toBeTruthy();
  });

  it('calls onPress with topic id when tapped', () => {
    const mockTopic = { id: 42, name: 'Pressable Topic' };
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <TopicBubble topic={mockTopic} onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Pressable Topic'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(mockOnPress).toHaveBeenCalledWith(42);
  });
});

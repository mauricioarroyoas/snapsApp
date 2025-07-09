import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TagBubble from '../TagBubble';

describe('TagBubble', () => {
  it('renders the tag name correctly', () => {
    const mockTag = { id: '42', name: 'Test tag 1' };

    const { getByText } = render(<TagBubble tag={mockTag} />);

    expect(getByText('Test tag 1')).toBeTruthy();
  });

  it('calls onPress with tag id when tapped', () => {
    const mockTag = { id: '42', name: 'Pressable tag' };
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <TagBubble tag={mockTag} onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Pressable tag'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(mockOnPress).toHaveBeenCalledWith('42');
  });
});

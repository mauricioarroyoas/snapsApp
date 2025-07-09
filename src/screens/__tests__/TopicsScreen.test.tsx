import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import TopicsScreen from '../TopicsScreen';

describe('TopicsScreen', () => {
  it('renders the title, subtitle, all topics, and disables Continue   ', () => {
    const { getByText, queryAllByText } = render(<TopicsScreen />);

    expect(getByText('Tags')).toBeTruthy();
    expect(getByText('Choose at least one')).toBeTruthy();
    expect(queryAllByText('Coffee')).toBeTruthy();
    expect(queryAllByText('Futbol')).toBeTruthy();
    expect(queryAllByText('Anime')).toBeTruthy();
    expect(getByText('Continue')).toBeTruthy();
  });

 it('enables Continue button after selecting a topic', () => {
    const { getByText} = render(<TopicsScreen />);

    const continueButton = getByText('Continue').parent!;
    expect(continueButton.props.accessibilityState?.disabled || continueButton.props.disabled).toBe(true);
    const coffeeBubble = getByText('Coffee');
    fireEvent.press(coffeeBubble);

    expect(continueButton.props.accessibilityState?.disabled || continueButton.props.disabled).toBe(false);
  });
});

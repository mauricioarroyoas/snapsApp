import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import TagsScreen from '../TagsScreen';
import { fetchTags } from '../../services/TagService';

jest.mock('../../services/TagService');
const mockTags = [
  { id: '1', name: 'Coffee' },
  { id: '2', name: 'Tea' },
];

describe('TagsScreen', () => {
  beforeEach(() => {
    (fetchTags as jest.Mock).mockResolvedValue(mockTags);
  });

  it('renders the title, subtitle, all tags, and disables Continue', async () => {
    const { getByText, queryAllByText } = render(<TagsScreen />);

    await waitFor(() => {expect(getByText('Coffee')).toBeTruthy();});
    expect(getByText('Tags')).toBeTruthy();
    expect(getByText('Choose at least one')).toBeTruthy();
    expect(queryAllByText('Coffee').length).toBeGreaterThan(0);
    expect(getByText('Continue')).toBeTruthy();
  });

  it('enables Continue button after selecting a tag', async () => {
    const { getByTestId, getByText } = render(<TagsScreen />);
    
    await waitFor(() => {expect(getByText('Coffee')).toBeTruthy();});

    const continueButton = getByTestId('continue-button');
    expect(continueButton.props.accessibilityState?.disabled).toBe(true);

    fireEvent.press(getByText('Coffee'));
    await waitFor(() => {expect(continueButton.props.accessibilityState?.disabled).toBe(false);});
  });
});

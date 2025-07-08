export const getColors = (isDarkMode: boolean = false) => ({
  text: isDarkMode ? '#FFFFFF' : 'black',
  background: isDarkMode ? '#020513' : 'white',
  separator: '#C7FD46',
  primary: '#0040D3',
  primaryPressed: '#0035A0',
  primaryDisabled: '#002B80',
});

import Snackbar from 'react-native-snackbar';

export const showError = (message) => {
  Snackbar.show({
    title: message,
    backgroundColor: '#D22F2F',
    duration: Snackbar.LENGTH_LONG,
  });
};

export const showSuccess = (message) => {
  Snackbar.show({
    title: message,
    backgroundColor: '#43A047',
    duration: Snackbar.LENGTH_LONG,
  });
};

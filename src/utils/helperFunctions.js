import { showMessage } from "react-native-flash-message";

const showError = message => {
  console.log(message, 'THIS IS MESSAGE');
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};
const showSuccess = message => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });

};
export {
  showError,
  showSuccess,}
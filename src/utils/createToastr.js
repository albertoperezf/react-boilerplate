import { toastr } from 'react-redux-toastr';

export default function showToastrMessage(
  messageType = 'error',
  messageTitle = 'Your application encounter an error',
  messageText = '',
  AvoidToastrMessages = false,
) {
  const toastrOptions = {
    icon: messageType,
    status: messageType,
  };

  if (!AvoidToastrMessages) {
    toastr.light(messageTitle, messageText, toastrOptions);
  }
}

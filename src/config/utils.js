import Alert from '../components/Alerts/index';

export const responseMessages = (type, messages) => {
  if (messages) {
    messages.map(message => {
      if (!message.key)
        //   return notification[type]({
        //     message: message.Message || loc('title.error'),
        //     description: message.Description
        //   });
        return <Alert />;
      // return notification[type]({
      //   message: message.Message || loc('title.error'),
      //   key: message.key
      // });
      return <Alert />;
    });
  }
};

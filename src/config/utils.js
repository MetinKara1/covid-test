import React from 'react';
import {notification} from 'antd';
import Alert from '../components/Alerts/index';

export const responseMessages = (type, messages) => {
  if (messages) {
    messages.map(message => {
      if (!message.key)
        return notification[type]({
          message: message.Message || 'Hata', // loc('title.error'),
          description: message.Description,
        });
      return notification[type]({
        message: message.Message || 'Hata', // loc('title.error'),
        key: message.key,
      });
    });
  }
};

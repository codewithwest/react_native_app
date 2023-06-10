import * as React from 'react';
import {useRoute} from '@react-navigation/native';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import * as MailComposer from 'expo-mail-composer';






// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const onAppServiceLinkPress = () => {

    MailComposer.composeAsync({
              recipients: 
              ['manaswemokhutso@gmail.com'],
              subject: "Mobile App Development Services",
              body: "Greetings\n\n",
            });
  };
  const onWebServiceLinkPress = () => {

    MailComposer.composeAsync({
              recipients: 
              ['manaswemokhutso@gmail.com'],
              subject: "Web Development Services",
              body: "Greetings\n\n",
            });
  };
  const onDeskServiceLinkPress = () => {

    MailComposer.composeAsync({
              recipients: 
              ['manaswemokhutso@gmail.com'],
              subject: "Desktop Development Services",
              body: "Greetings\n\n",
            });
  };
  const onTechServiceLinkPress = () => {

    MailComposer.composeAsync({
              recipients: 
              ['manaswemokhutso@gmail.com'],
              subject: "Tech Support Services",
              body: "Greetings\n\n",
            });
  };

export { onAppServiceLinkPress, 
          onWebServiceLinkPress, 
          onDeskServiceLinkPress, 
          onTechServiceLinkPress
          };



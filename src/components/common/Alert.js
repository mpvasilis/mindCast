// @flow

import { Alert } from 'react-native';

export const TYPES = {
  REMOVE_DOWNLOADED_PODCAST: 'REMOVE_DOWNLOADED_PODCAST',
  REMOVE_PODCAST_FROM_PLAYLIST: 'REMOVE_PODCAST_FROM_PLAYLIST',
  DOWNLOAD_PODCAST: 'DOWNLOAD_PODCAST',
};

const configs = {
  [TYPES.REMOVE_DOWNLOADED_PODCAST]: {
    title: 'Remove Downloaded Podcast',
    description:
      'Are you sure to remove this Podcast permanently from your device?',
  },

  [TYPES.DOWNLOAD_PODCAST]: {
    title: 'Download Podcast',
    description:
      'Are you sure you want to Download this podcast? It can take a while.',
  },

  [TYPES.REMOVE_PODCAST_FROM_PLAYLIST]: {
    title: 'Remove Podcast',
    description:
      'Are you sure you want to remove this Podcast from this Playlist?',
  },
};

export const CustomAlert = (type: string, action: Function): void => {
  const { title, description } = configs[type];

  Alert.alert(
    title,
    description,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Yes', onPress: () => action() },
    ],
    { cancelable: false },
  );
};
import firebase from 'firebase/app';
import 'firebase/database';

import config from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase.database();
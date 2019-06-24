import React from 'react';
import styles from '@css/main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '@js/routes';
import { store, persistor } from '@js/store';

const SpotifyPlayerApp = () => {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className={styles.background_color_dark}>
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default SpotifyPlayerApp;

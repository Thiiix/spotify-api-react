import React from 'react';
import styles from '@css/main.scss';
import SpotifyBrand from '@images/spotify_logo_with_text.svg';

const SpotifyPlayerApp = () => {
  return(
    <fragment className={styles.background_color_dark}>
      <SpotifyBrand/>
      <h1>Here i will start to build Spotify Player app :-)</h1>
      <p>Include Bootstrap’s source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don’t include documentation, but do include our build system and readme.</p>
    </fragment>
  );
};

export default SpotifyPlayerApp;

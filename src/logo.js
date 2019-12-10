import React from 'react';
import { Image } from 'react-native';
import Logo from './images/animal-track.png';

function LogoTitle() {
  return (
    <Image
      source={Logo}
      style={{width: 30, height: 30}}
    />
  )
}

export default LogoTitle;
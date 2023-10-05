import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress}) => {
  // setting the iconurl dimension handlepress as props 
  return (
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image 
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handlePress}) => {

  console.log(item)

  return (
    <TouchableOpacity
      
    >
      <TouchableOpacity
      style={styles.logoContainer(selectedJob, item)}
      >
        <Image 
          source={{url: item.employer_logo}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard
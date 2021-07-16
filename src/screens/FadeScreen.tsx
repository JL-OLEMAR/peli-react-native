import * as React from 'react'
import { Button, View, Animated } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade()

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Animated.View style={{
        backgroundColor: '#084F6A',
        borderColor: 'white',
        borderWidth: 10,
        height: 150,
        marginBottom: 10,
        opacity,
        width: 150
      }}
      />

      <Button
        title='fadeIn'
        onPress={() => fadeIn()}
      />

      <Button
        title='fadeOut'
        onPress={() => fadeOut()}
      />

    </View>
  )
}

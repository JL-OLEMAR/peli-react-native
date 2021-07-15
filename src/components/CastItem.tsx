import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {actor: Cast}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
      {actor.profile_path &&
          <Image
            source={{ uri }}
            style={styles.actorImage}
          />
      }
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 55,
    marginRight: 15,
    paddingRight: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9

  },
  actorImage: {
    borderRadius: 10,
    height: 55,
    width: 50
  },
  actorInfo: {
    marginLeft: 10
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7
  }
})

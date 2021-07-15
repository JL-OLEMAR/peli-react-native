import * as React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'

import { Cast } from '../interfaces/creditsInterface'
import { CastItem } from './CastItem'
import { MovieFull } from '../interfaces/movieInterface'

interface Props {
    movieFull: MovieFull
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>

        <View style={{ flexDirection: 'row' }}>
          <Icon name='star-outline' color='grey' size={16} />

          <Text> {movieFull.vote_average}</Text>

          <Text style={{ marginLeft: 5 }}>
            - { movieFull.genres.map(g => g.name).join(', ') }
          </Text>
        </View>

        {/* Historia */}
        <Text style={styles.titleDetail}>Historia</Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={styles.titleDetail}>Presupuesto</Text>
        <Text style={{ fontSize: 18 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
      </View>

      {/* Casting */}
      <View style={{ marginBottom: 100, marginTop: 10 }}>
        <Text style={styles.DetailActor}>Autores</Text>

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<CastItem actor={item} />)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.carrusel}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  titleDetail: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold'
  },
  DetailActor: {
    fontSize: 23,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10
  },
  carrusel: {
    marginTop: 10,
    height: 70,
    marginHorizontal: 20
  }
})

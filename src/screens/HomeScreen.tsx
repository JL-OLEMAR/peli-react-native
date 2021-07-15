import * as React from 'react'
import { Dimensions, View, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

import { MoviePoster } from '../components/MoviePoster'
import { HorizontalSlider } from '../components/HorizontalSlider'
import { useMovies } from '../hooks/useMovies'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }} >
          {/* Carrusel Principal */}
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title='Popular' movies={popular} />

        {/* Peliculas topRated */}
        <HorizontalSlider title='Top Rated' movies={topRated} />

        {/* Peliculas upcoming */}
        <HorizontalSlider title='Upcoming' movies={upcoming} />
      </View>
    </ScrollView>
  )
}

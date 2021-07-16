import React, { useContext, useEffect } from 'react'
import { Dimensions, View, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

import { getImageColors } from '../helpers/getImageColors'
import { GradientContext } from '../context/GradientContext'
import { GradientBackground } from '../components/GradientBackground'
import { HorizontalSlider } from '../components/HorizontalSlider'
import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()
  const { setMainColors } = useContext(GradientContext)

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const [primary = 'green', secondary = 'purple'] = await getImageColors(uri)
    setMainColors({ primary, secondary })
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [nowPlaying])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <GradientBackground>
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
              onSnapToItem={index => getPosterColors(index)}
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
    </GradientBackground>
  )
}

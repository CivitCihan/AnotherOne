import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = ({ name }) => {
  const navigation = useNavigation();
  
  const handleGoToBookReco = () => {
    navigation.navigate('BookReco', { name });
  };
  const handleGoToMusicReco = () => {
    navigation.navigate('MusicReco', { name });
  };
  const handleGoToFilmReco = () => {
    navigation.navigate('FilmSeriesReco', { name });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={handleGoToMusicReco}>
        <Image source={require('./assets/music.png')} style={styles.navImage} />
        <Text style={styles.navText}>Music</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handleGoToBookReco}>
        <Image source={require('./assets/book.png')} style={styles.navImage} />
        <Text style={styles.navText}>Book</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handleGoToFilmReco}>
        <Image source={require('./assets/film.png')} style={styles.navImage} />
        <Text style={styles.navText}>Film&Series</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 60,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
    width: 28,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 6,
  },
});

export default NavigationBar;

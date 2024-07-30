import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from './NavigationBar';

const MusicRecommendationsScreen = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { name } = route.params;

  const allMusicRecommendations = [
    { id: 1, title: 'Barbie Girl', singer: 'Aqua' },
    { id: 2, title: 'Kapıcı İzzet', singer: 'Ankaralı Namık' },
    { id: 3, title: 'Ashes', singer: 'Stellar' },
    { id: 4, title: 'Anoni Niyolay', singer: 'Volkan' },
    { id: 5, title: 'Bohemian Rhapsody', singer: 'Queen' },
    { id: 6, title: 'Highway To Hell', singer: 'AC/DC' },
    { id: 7, title: 'Smells Like Teen Spirit', singer: 'Nirvana' },
    { id: 8, title: 'Aya Benzer', singer: 'Mustafa Sandal' },
    { id: 9, title: 'Hotel California', singer: 'Eagles' },
    { id: 10, title: 'The Great Chinggis Khaan', singer: 'The Hu' },
    { id: 11, title: 'Senden Çok Var', singer: 'Rober Hatemo' },
    { id: 12, title: 'Careless Whisper', singer: 'George Michael' },
    { id: 13, title: 'Rasputin', singer: 'Boney M.' },
    { id: 14, title: 'Another One Bites The Dust', singer: 'Queen' },
    { id: 15, title: 'Düm Tek Tek', singer: 'Hadise' },
    { id: 16, title: 'Dönence', singer: 'Barış Manço' },
    { id: 17, title: 'Her Akşam "Sarhoş"', singer: 'Dario Moreno' },
    { id: 18, title: 'You Give Love A Bad Name', singer: 'Bon Jovi' },
    { id: 19, title: 'Push It', singer: 'Salt-N-Pepa' },
    { id: 20, title: 'Get Busy', singer: 'Sean Paul' },
    { id: 21, title: 'Thriller', singer: 'Michael Jackson' },
    { id: 22, title: 'Rolling in the Deep', singer: 'Adele' },
    { id: 23, title: 'Shape of You', singer: 'Ed Sheeran' },
    { id: 24, title: 'All of Me', singer: 'John Legend' },
    { id: 25, title: 'Uptown Funk', singer: 'Mark Ronson ft. Bruno Mars' },
    { id: 26, title: 'Blinding Lights', singer: 'The Weeknd' },
    { id: 27, title: 'Despacito', singer: 'Luis Fonsi ft. Daddy Yankee' },
    { id: 28, title: 'Imagine', singer: 'John Lennon' },
    { id: 29, title: 'Purple Rain', singer: 'Prince' },
    { id: 30, title: 'Like a Rolling Stone', singer: 'Bob Dylan' },
    { id: 31, title: 'Take Five', singer: 'Dave Brubeck' },
    { id: 32, title: 'Blue Monday', singer: 'New Order' },
    { id: 33, title: 'One More Time', singer: 'Daft Punk' },
    { id: 34, title: 'My Heart Will Go On', singer: 'Celine Dion' },
    { id: 35, title: "Hips Don't Lie", singer: 'Shakira ft. Wyclef Jean' },
    { id: 36, title: 'Wonderwall', singer: 'Oasis' },
    { id: 37, title: 'No Woman, No Cry', singer: 'Bob Marley and the Wailers' },
    { id: 38, title: 'Stayin Alive', singer: 'Bee Gees' },
    { id: 39, title: 'Bad Romance', singer: 'Lady Gaga' },
    { id: 40, title: 'Smooth', singer: 'Santana ft. Rob Thomas' }
  ];

  const [musicRecommendations, setMusicRecommendations] = useState([]);

  const generateRandomRecommendations = () => {
    const selectedMusics = [];
    while (selectedMusics.length < 3) {
      const randomIndex = Math.floor(Math.random() * allMusicRecommendations.length);
      const selectedMusic = allMusicRecommendations[randomIndex];
      if (!selectedMusics.find(music => music.id === selectedMusic.id)) {
        selectedMusics.push(selectedMusic);
      }
    }
    setMusicRecommendations(selectedMusics);
  };

  useEffect(() => {
    generateRandomRecommendations();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./assets/profilePic.jpg')} style={styles.profileImage} />
        </TouchableOpacity>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={generateRandomRecommendations}>
            <Image source={require('./assets/restart.png')} style={styles.rightImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./assets/profile.png')} style={styles.rightImage} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Welcome to Music Recommendations, {name}!</Text>
      <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={musicRecommendations}
        renderItem={({ item }) => (
          <View style={styles.musicItem}>
            <Text style={styles.musicTitle}>{item.title}</Text>
            <Text style={styles.musicSinger}>{item.singer}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.navigationBarContainer}>
      <NavigationBar name={name} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rightImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  musicItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  musicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  musicSinger: {
    fontSize: 16,
    color: '#555',
  },
  navigationBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default MusicRecommendationsScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from './NavigationBar';

const FilmRecommendationsScreen = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { name } = route.params;

  const allFilmRecommendations = [
    { id: 1, title: 'To Kill a Mockingbird', director: 'Harper Lee' },
    { id: 2, title: '1984', director: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', director: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Pride and Prejudice', director: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', director: 'J.D. Salinger' },
    { id: 6, title: 'The Hobbit', director: 'J.R.R. Tolkien' },
    { id: 7, title: 'The Lord of the Rings', director: 'J.R.R. Tolkien' },
    { id: 8, title: "Harry Potter and the Sorcerer's Stone", director: 'J.K. Rowling' },
    { id: 9, title: 'Eternal Sunshine of the Spotless Mind', director: 'Michel Gondry' },
    { id: 10, title: 'The Da Vinci Code', director: 'Dan Brown' },
    { id: 11, title: 'Hidden', director: 'Michael Haneke' },
    { id: 12, title: 'Taste Of Cherry', director: 'Abbas Kiarostami' },
    { id: 13, title: 'Pickpocked', director: 'Robert Bresson' },
    { id: 14, title: 'The Colour of Pomegranates', director: 'Sergei Paradjanov' },
    { id: 15, title: 'The Conformist', director: 'Bernardo Bertolucci' },
    { id: 16, title: 'Parasite', director: 'Bong Joon-ho' },
    { id: 17, title: 'Yi Yi', director: 'Edward Yang' },
    { id: 18, title: "Sherlock Holmes - Series ", director: 'Michael Hurst' },
    { id: 19, title: 'Arcane', director: 'David Benioff' },
    { id: 20, title: 'House', director: 'Bryan Singer' },
    { id: 21, title: 'Inception', director: 'Christopher Nolan' },
    { id: 22, title: 'The Godfather', director: 'Francis Ford Coppola' },
    { id: 23, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
    { id: 24, title: 'Schindler’s List', director: 'Steven Spielberg' },
    { id: 25, title: 'Spirited Away', director: 'Hayao Miyazaki' },
    { id: 26, title: 'Fight Club', director: 'David Fincher' },
    { id: 27, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
    { id: 28, title: 'Breaking Bad', director: 'Vince Gilligan' },
    { id: 29, title: 'The Dark Knight', director: 'Christopher Nolan' },
    { id: 30, title: 'Forrest Gump', director: 'Robert Zemeckis' },
    { id: 31, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski' },
    { id: 32, title: 'Gladiator', director: 'Ridley Scott' },
    { id: 33, title: 'Black Mirror', director: 'Charlie Brooker' },
    { id: 34, title: 'Game of Thrones', director: 'David Benioff, D.B. Weiss' },
    { id: 35, title: 'The Crown', director: 'Peter Morgan' },
    { id: 36, title: 'Stranger Things', director: 'The Duffer Brothers' },
    { id: 37, title: 'The Sopranos', director: 'David Chase' },
    { id: 38, title: 'The Handmaid’s Tale', director: 'Bruce Miller' },
    { id: 39, title: 'Narcos', director: 'Chris Brancato, Carlo Bernard, Doug Miro' },
    { id: 40, title: 'Money Heist', director: 'Álex Pina' }
  ];

  const [filmRecommendations, setFilmRecommendations] = useState([]);

  const generateRandomRecommendations = () => {
    const selectedFilms = [];
    while (selectedFilms.length < 3) {
      const randomIndex = Math.floor(Math.random() * allFilmRecommendations.length);
      const selectedFilm = allFilmRecommendations[randomIndex];
      if (!selectedFilms.find(film => film.id === selectedFilm.id)) {
        selectedFilms.push(selectedFilm);
      }
    }
    setFilmRecommendations(selectedFilms);
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
      <Text style={styles.title}>Welcome to Film & Series Recommendations, {name}!</Text>
      <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <FlatList
        data={filmRecommendations}
        renderItem={({ item }) => (
          <View style={styles.filmItem}>
            <Text style={styles.filmTitle}>{item.title}</Text>
            <Text style={styles.filmDirector}>{item.director}</Text>
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
  filmItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  filmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filmSinger: {
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

export default FilmRecommendationsScreen;

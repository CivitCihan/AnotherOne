import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import NavigationBar from './NavigationBar';

const BookRecommendationsScreen = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { name } = route.params;

    const allBookRecommendations = [
      { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { id: 2, title: '1984', author: 'George Orwell' },
      { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
      { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
      { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
      { id: 7, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
      { id: 8, title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling' },
      { id: 9, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { id: 10, title: 'The Da Vinci Code', author: 'Dan Brown' },
      { id: 11, title: 'The Slience of the Girls', author: 'Pat Barker' },
      { id: 12, title: 'Suicide Shop', author: 'Jean Taule' },
      { id: 13, title: 'Scaffold Dans', author: 'Anna Day' },
      { id: 14, title: 'Anna Karenina', author: 'Leo Tolstoy' },
      { id: 15, title: 'Madame Bovary', author: 'Gustave Flaubert' },
      { id: 16, title: 'War and Peace', author: 'Leo Tolstoy' },
      { id: 17, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { id: 18, title: 'Lolita', author: 'Vladimir Nabokov' },
      { id: 19, title: 'Middlemarch', author: 'George Eliot' },
      { id: 20, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain' },
      { id: 21, title: 'Moby-Dick', author: 'Herman Melville' },
      { id: 22, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
      { id: 23, title: 'Brave New World', author: 'Aldous Huxley' },
      { id: 24, title: 'Jane Eyre', author: 'Charlotte Brontë' },
      { id: 25, title: 'Wuthering Heights', author: 'Emily Brontë' },
      { id: 26, title: 'Frankenstein', author: 'Mary Shelley' },
      { id: 27, title: 'Dracula', author: 'Bram Stoker' },
      { id: 28, title: 'Catch-22', author: 'Joseph Heller' },
      { id: 29, title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
      { id: 30, title: 'The Odyssey', author: 'Homer' },
      { id: 31, title: 'The Iliad', author: 'Homer' },
      { id: 32, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
      { id: 33, title: 'The Divine Comedy', author: 'Dante Alighieri' },
      { id: 34, title: 'A Tale of Two Cities', author: 'Charles Dickens' },
      { id: 35, title: 'Great Expectations', author: 'Charles Dickens' },
      { id: 36, title: 'Les Misérables', author: 'Victor Hugo' },
      { id: 37, title: 'Don Quixote', author: 'Miguel de Cervantes' },
      { id: 38, title: 'The Catch-22', author: 'Joseph Heller' },
      { id: 39, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas' },
      { id: 40, title: 'Heart of Darkness', author: 'Joseph Conrad' },
    ];

  const [bookRecommendations, setBookRecommendations] = useState([]);

  const generateRandomRecommendations = () => {
    const selectedBooks = [];
    while (selectedBooks.length < 3) {
      const randomIndex = Math.floor(Math.random() * allBookRecommendations.length);
      const selectedBook = allBookRecommendations[randomIndex];
      if (!selectedBooks.find(book => book.id === selectedBook.id)) {
        selectedBooks.push(selectedBook);
      }
    }
    setBookRecommendations(selectedBooks);
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
      <Text style={styles.title}>Welcome to Book Recommendations, {name}!</Text>
      <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={bookRecommendations}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
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
  bookItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
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

export default BookRecommendationsScreen;

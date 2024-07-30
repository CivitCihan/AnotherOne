import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationBar from './NavigationBar';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Ryan Gosling');
  const [email, setEmail] = useState('Ryan.Gostling@gmail.com');

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      {editing ? (
        <View>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
          <View>
          <View style={styles.header}>
          <Image source={require('./assets/profilePic.jpg')} style={styles.profileImage} />
          </View>

          <Text style={styles.label}>Name:</Text>
          <Text>{name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text>{email}</Text>

          <TouchableOpacity style={styles.button} onPress={() => setEditing(true)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

        </View>
      )}
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
    backgroundColor: '#ffffff', 
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  navigationBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ProfileScreen;

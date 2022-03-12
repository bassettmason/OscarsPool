import * as React from 'react';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Categories({ navigation }) {

  const [categories, setCategories] = React.useState([]);
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://Oscars-Pool-App.masonp00pyd.repl.co//api/getcategorylist'
      );
      const json = await response.json();
      return json.categories;
    } catch (error) {
      console.error(error);
    }
  };
  setCategories(getMoviesFromApiAsync());
  return (
    <View style={globalStyles.container}>
      <FlatList data={categories} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Nominees', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.category }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}
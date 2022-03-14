import * as React from 'react';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Categories({ navigation }) {

  const [categories, setCategories] = React.useState(null);
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://Oscars-Pool-App.masonp00pyd.repl.co//api/getcategorylist'
      );
      const json = await response.json();
      setCategories(json.categories)
      return json;
    } catch (error) {
      alert(error);
    }
  };
  if (categories === null) {
    getMoviesFromApiAsync();
  } else {
    console.log("categories found")
  }
  
  return (
    <View style={globalStyles.container}>
      <FlatList data={categories} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Nominees', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
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
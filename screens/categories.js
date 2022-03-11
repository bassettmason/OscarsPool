import * as React from 'react';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
export default function Categories({ navigation }) {

  const [categories, setCategories] = React.useState([
    { title: 'ACTOR IN A SUPPORTING ROLE', choice: null, winner: null, key: '1' },
    { title: 'ACTRESS IN A LEADING ROLE', choice: null, winner: null , key: '2' },
    { title: 'ACTRESS IN A SUPPORTING ROLE', choice: null, winner: null, key: '3' },
  ]);

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
import * as React from 'react';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
export default function HomeScreen({ navigation }) {

  const [pools, setPools] = React.useState([
    { title: 'Friends Pool', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Family Pool', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Work Pool', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={pools} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Pool', item)}>
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
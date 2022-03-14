import * as React from 'react';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Pool({ navigation }) {

  const [users, setUsers] = React.useState([
    { title: 'Mason Bassett', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Maria Rivera', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Sinlair Ballmes', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={users} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Categories', item)}>
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
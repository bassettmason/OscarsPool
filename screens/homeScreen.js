import * as React from 'react';
import { StyleSheet, Button, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { useNavigation } from '@react-navigation/core'
import { auth, db } from '../firebase'
import { collection, doc, addDoc, getDoc } from 'firebase/firestore/lite';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [pools, setPools] = React.useState([
    { title: 'Friends Pool', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Family Pool', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Work Pool', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
  const getPools = async ()=>{
    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      setPools(userSnap.data().pools);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  getPools()
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });   }

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
          title={"logout " + auth.currentUser?.email}
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
}
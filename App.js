import React , {useState} from 'react';
import Header from './Components/Header.js';
import { StyleSheet, Text, View , FlatList, Alert} from 'react-native';
import ListItem from './Components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './Components/AddItem';
export default function App() {
  const [ items,setItems]=useState([
    {id: uuidv4(), text:'Milk'},
    {id: uuidv4(), text:'Eggs'},
    {id: uuidv4(), text:'Bread'},
    {id: uuidv4(), text:'Juice'}
  ]);
   
  const addItem=(text)=>{
    if(!text){
      
      /**
       *    Alert.alert('Error', 'Please enter some text', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true });
       */

          Alert.alert('Error','Please enter an item',[{text:'Okay'}],{cancelable:true});
        
    }else{
      setItems(prevItems=>{
        return[{id:uuidv4(), text}, ...prevItems]
      });
    }
   
  }

  const deletItem=(id)=>{
    // call setItems if we want to manipulate the state
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id!=id);
    });
  }
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList 
       data={items}
       // items converted to object as passed to renderItems as item
       // 
      /**
       *  renderItem={({item})=>(
        <Text>{item.text}</Text>
      )}
       */
      renderItem={({item})=><ListItem item={item} deletItem={deletItem}/>}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
  },

});

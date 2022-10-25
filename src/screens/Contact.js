import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const DATA = [
    {
      id: "1",
      title: "Bengalí",
      src: require('../img/ben.jpg'),
      text: "Estados Unidos"
    },
    {
        id: "1",
        title: "Gato Egipcio",
        src: require('../img/egipcio.jpg'),
        text: "Toronto"
      },
      {
        id: "1",
        title: "Birmano",
        src: require('../img/bir.jpg'),
        text: "Francia/Myanmar"
      },
      {
        id: "1",
        title: "Angora",
        src: require('../img/angora.jpg'),
        text: "Turquia"
      },
  ];
  
  const Item = ({ title, img, text}) => (
    <View style={styles.opciones}> 
      <Image style={styles.img} source={img}></Image>
      <View style={styles.descripcion}>
      <Text style={styles.item}>{title}</Text>
      <Text style={styles.texto}>{text}</Text>
      </View>
    </View>
    
  );

  const renderItem = ({ item }) => 
  <Item title={item.title}  img={item.src} text={item.text}/>;

export default function Contact() {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 25,
     
    },
    item: {
      padding: 5,
      fontSize: 18,
      height: 30,
      fontWeight:'bold'
    },
    opciones:{
      flexDirection:"row",
      padding:10,
      height:150
    },
    img:{
      width:120,
      height: 130,
      justifyContent:'flex-start'
    },
    texto: {
      margin: 10,
      fontSize: 14,
      height: 100,
      marginRight:90
    },
    descripcion:{
      flexDirection:"column",
      margin:10,
    },
  });
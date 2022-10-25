import React from "react";
import { View, Text, Image, FlatList, StyleSheet} from "react-native";


export default function Home(props) {

    const{navigation} = props;

    const DATA = [
        {
          id: "1",
          title: "Bichon Maltes",
          src: require('../img/maltes.jpg'),
          text: "Cuenca del Mediterraneo"
        },
        {
            id: "1",
            title: "Manchester Terrier",
            src: require('../img/terrier.jpg'),
            text: "Inglaterra"
          },
          {
            id: "1",
            title: "Bulldog Frances",
            src: require('../img/bull.jpg'),
            text: "Francia/Inglaterra"
          },
          {
            id: "1",
            title: "Schnauzer",
            src: require('../img/sch.jpg'),
            text: "Alemania"
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
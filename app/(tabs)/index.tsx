import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Switch
} from "react-native";
import React, { useState } from "react";
import type {PropsWithChildren} from 'react'

//Importing Images
import One from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import three from '../../assets/images/three.png'
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import six from "../../assets/images/six.png";

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps):JSX.Element => {
  return(
    <View>
      <Image  style={styles.image} source={imageUrl}  />
    </View>
  )
};

export default function HomeScreen() {
  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(One)

  //Creating function to roll the dice
  const RollDice = () =>{
    let RandomNumber = Math.floor(Math.random()*6) + 1;

    switch (RandomNumber) {
      case 1:
        setDiceImage(One)
        break;
      case 2:
        setDiceImage(two)
        break;
      case 3:
        setDiceImage(three)
        break;
      case 4:
        setDiceImage(four)
        break;
      case 5:
        setDiceImage(five)
        break;
      case 6:
        setDiceImage(six)
        break;

      default:
        setDiceImage(two)
        break;

    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.changeRoll}  onPress={RollDice}>
        <Dice imageUrl={diceImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent: 'center',
  },
  image:{
    height:250,
    width:250,
    backgroundColor:'black',
    borderRadius:50, 
  },
  changeRoll:{
    elevation:30,
    borderRadius:50,
    padding:20,
    backgroundColor:'black',
  },
});

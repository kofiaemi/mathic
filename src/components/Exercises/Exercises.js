import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Color from "../../../assets/Utilites/Color";
import styles from "./Exercises.styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useNavigation } from "@react-navigation/native";
import AnimatedProgressBar from "react-native-progress-bar-animated";
import ProgressBar from "react-native-animated-progress";


const Exercises = ({ exercise }) => {
  const navigation = useNavigation();
  const url =
    "https://raw.githubusercontent.com/kofiaemi/mathic/main/assets/Icons/" +
    exercise.definition.picture;

  return (
    exercise && (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ExercisePage", (exercise = exercise))
        }
        style={styles.innerButton}
      >
      
            <View>
              <Text>{}</Text>
            </View>
            <View
              style={{
                ...styles.innerCircle,
                backgroundColor: Color.Charcoal,
              }}
            >
              <Image
                style={styles.innerLogo}
                source={{
                  uri: url,
                }}
                resizeMode="cover"
              />
              
            </View>
            <View style={{...styles.progressbar}}>
            <AnimatedProgressBar
                progress={exercise.definition.levels}
                height={10}
                width={styles.innerCircle.width}
                backgroundColor={Color.Mask_Green}
               />
            </View>
          
        
        <Text style={styles.innerText}>{exercise.definition.name}</Text>
      </TouchableOpacity>
    )
  );
};

export default Exercises;

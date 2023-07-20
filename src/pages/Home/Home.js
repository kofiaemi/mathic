import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./Home.styles";
import Exercises from "../../components/Exercises";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import data from "../../../data/courseData.json";
import countryData from "../../../data/countryData.json";

import { StatusBar } from "expo-status-bar";

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("CountrySelect")}>
          <Text
            style={styles.countryLogo}
          >
            XP
          </Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={styles.diamondLogo}
            source={require("../../../assets/Icons/profile-unactive.png")}
          />
          <Text style={styles.diamondText}>Profile</Text>
        </View>
        <View style={styles.infoContainer}>
          <Image
            style={styles.fireLogo}
            source={require("../../../assets/Icons/fire.png")}
          />
          <Text style={styles.fireText}>5</Text>
        </View>
      </View>

      <FlatList
        data={data.sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        
      />
    </SafeAreaView>
  );
};

export default Home;

const renderSection = ({ item }) => {
  const { id, data } = item;

  return (
    <View style={styles.section}>
      {data.map((tier) => {
        return (
          <View style={styles.tier} key={tier.tier}>
            {tier.exercises.map((exercise) => {
              return <Exercises exercise={exercise} key={exercise.id} />;
            })}
          </View>
        );
      })}
    </View>
  );
};

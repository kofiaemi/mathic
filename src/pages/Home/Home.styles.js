import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../assets/Utilites/Color";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.Our_Green,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  header: {
    flexDirection: "row",
    backgroundColor: Color.Our_Green,
    borderBottomColor: Color.Hare,
    borderBottomWidth: 1.5,
    width: width,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryLogo: {
    fontSize: 15,
    textAlign: "center",
    width: width * 0.12,
    height: height * 0.045,
  },
  diamondLogo: {
    width: width * 0.05,
    height: height * 0.03,
    alignContent: "center",
    marginLeft: 20,
    marginRight: 10,
  },
  diamondText: {
    fontSize: 16,
    color: Color.Snow,
    margin: 5,
    //fontFamily: "Nunito_ExtraBold",
    textAlign: "center",
  },
  fireText: {
    fontSize: 16,
    color: Color.Fox,
    margin: 5,
    //fontFamily: "Nunito_ExtraBold",
  },
  fireLogo: {
    width: width * 0.06,
    height: height * 0.04,
  },
  body: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  unitLogo: {
    height: 120,
    width: 200,
    margin: 15,
  },
  section: {
    flex: 1,
    paddingBottom: 60,
  },
  tier: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  profile: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: width * 0.35,
    height: height * 0.05,
    backgroundColor: Color.Charcoal,
    borderRadius: 10,

  }
});

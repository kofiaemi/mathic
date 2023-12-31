import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../assets/Utilites/Color";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default StyleSheet.create({
  innerCircle: {
    opacity: 0.8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 120,
  },
  innerLogo: {
    width: 50,
    height: 50,
  },
  innerButton: {
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
  },
  innerText: { fontFamily: "Nunito_Black", fontSize: 18, marginTop: 5 },
  body: {
    flex: 1,
    padding: 20,
  },
  unitLogo: {
    height: 120,
    width: 200,
    marginBottom: 15,
  },
  progressbar: {
    marginTop: 10,
  }
});

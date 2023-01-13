import { Image, StyleSheet } from "react-native";
const PlaceholderImage = require("../assets/images/choux.jpg");

export default function ImageViewer({ uri }) {
  const imageSrc = uri ? { uri } : PlaceholderImage;
  return <Image source={imageSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

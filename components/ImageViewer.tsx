import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { Image, type ImageSource } from "expo-image";
const { width: screenWidth } = Dimensions.get('window');
const calculatedHeight = (screenWidth * 0.95) / 1.75;
type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.95,
    height: calculatedHeight,
    borderRadius: 18,
  },
});

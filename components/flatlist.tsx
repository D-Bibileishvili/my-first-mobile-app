import { Image } from "expo-image";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
    description: "Description for the first item.",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    id: "2",
    title: "Second Item",
    description: "Description for the second item.",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    id: "3",
    title: "Third Item",
    description: "Description for the third item.",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    id: "4",
    title: "Fourth Item",
    description: "Description for the fourth item.",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
  {
    id: "5",
    title: "Fifth Item",
    description: "Description for the fifth item.",
    image: "https://picsum.photos/seed/696/3000/2000",
  },
];

export default function Index() {
  return (
    <FlatList contentContainerStyle={styles.flatlist}
    showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) => (
        <TouchableOpacity key={item.id} style={styles.container}>
          <Image
            style={styles.image}
            source={item.image}
            contentFit="cover"
            transition={1000}
          />
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 120,
  },
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    margin: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
  text: {
    fontWeight: "800",
    marginVertical: 8,
    fontSize: 22,
  },
  description: {
    textAlign: "justify",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
});

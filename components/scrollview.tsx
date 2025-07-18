import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrpllview}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source="https://cdn-images.dzcdn.net/images/cover/42a0c8b32bf5667d57bbfe3200d739d5/200x200.jpg"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.descWrapper}>
          <Text style={styles.text}>Assasin's Cread Pirates</Text>
          <Text style={styles.description}>Ubisoft Entertainment</Text>
          <View style={styles.dots}>
            <FontAwesome name="ellipsis-v" size={30} color="#888" />
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.leftSide}>
              <Text style={styles.ratingText}>4.4</Text>
              <FontAwesome name="star" size={14} color="#555" />
            </View>
            <Text style={styles.free}>Free</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/b8/08/61/b80861b2-3d91-db08-b0ec-2bea5951cdff/source/200x200bb.webp"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.descWrapper}>
          <Text style={styles.text}>Spider-Man Unlimited</Text>
          <Text style={styles.description}>Gameloft</Text>
          <View style={styles.dots}>
            <FontAwesome name="ellipsis-v" size={30} color="#888" />
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.leftSide}>
              <Text style={styles.ratingText}>4.2</Text>
              <FontAwesome name="star" size={14} color="#555" />
            </View>
            <Text style={styles.free}>Free</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source="https://eta.vgmtreasurechest.com/soundtracks/dumb-ways-to-die-2-the-games-android-ios-online-windows-gamerip-2014/app.png"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.descWrapper}>
          <Text style={styles.text}>Dumb Ways die 2</Text>
          <Text style={styles.description}>Metro Trans</Text>
          <View style={styles.dots}>
            <FontAwesome name="ellipsis-v" size={30} color="#888" />
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.leftSide}>
              <Text style={styles.ratingText}>4.1</Text>
              <FontAwesome name="star" size={14} color="#555" />
            </View>
            <Text style={styles.free}>Free</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          source="https://img.utdstc.com/icon/3eb/2f8/3eb2f80ae66ab0b0f5530f891648b4152acf6202fcef63f7a508de0ba4a288bc:200"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.descWrapper}>
          <Text style={styles.text}>Temple Run</Text>
          <Text style={styles.description}>Image Studios</Text>
          <View style={styles.dots}>
            <FontAwesome name="ellipsis-v" size={30} color="#888" />
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.leftSide}>
              <Text style={styles.ratingText}>4.6</Text>
              <FontAwesome name="star" size={14} color="#555" />
            </View>
            <Text style={styles.free}>Free</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrpllview: {
    // paddingBottom: 120,
  },
  container: {
    width: 230,
    height: 360,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
  text: {
    fontWeight: "800",
    marginVertical: 7,
    fontSize: 22,
    maxWidth: 170,
  },
  description: {
    textAlign: "justify",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    justifyContent: "space-between",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    color: "#555",
    marginRight: 4,
  },
  free: {
    color: "green",
  },
  descWrapper: {
    position: "relative",
  },
  dots: {
    position: "absolute",
    top: 25,
    right: -20,
  },
});

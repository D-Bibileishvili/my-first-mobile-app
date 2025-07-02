import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const index = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
    console.log(result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleGoDetails = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <FlatList
        contentContainerStyle={styles.flatslist}
        data={products}
        renderItem={({ item }) => (
          <Link href={`/products/${item.id}`} style={styles.itemWrapper}>
            <View key={item.id}>
              <Image
                style={styles.image}
                source={item.image}
                contentFit="contain"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={3} style={styles.description}>
                {item.description}
              </Text>
              <Button
                title="go to details"
                onPress={() => handleGoDetails(item.id)}
              />
            </View>
          </Link>
        )}
      />
    </>
  );
};
export default index;

const styles = StyleSheet.create({
  flatslist: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  itemWrapper: {
    borderRadius: 10,
    marginBottom: 32,
    height: 400,
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 5, height: 5 },
    padding: 20,
  },
  image: {
    height: 200,
  },
  title: {
    fontWeight: "800",
    marginVertical: 10,
  },
  description: {
    marginBottom: 10,
  },
});

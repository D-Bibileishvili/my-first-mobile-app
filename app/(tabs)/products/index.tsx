import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const index = () => {
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
  return (
    <>
      <FlatList
       contentContainerStyle={styles.flatslist}
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper} key={item.id}>
            <Image style={styles.image} source={item.image} contentFit="contain"/>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
            <Link href={`/products/${item.id}`} asChild>
              <Button title='go to details' />
            </Link>
          </View>
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
  description:{
    marginBottom: 10,
  }
});

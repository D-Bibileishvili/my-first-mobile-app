import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { addToCart } from "../utils/cartStorage";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.warn("ID is missing from route.");
      return;
    }

    const fetchProduct = async () => {
      try {
        const url = `https://fakestoreapi.com/products/${id}`;
        console.log("Fetching from:", url);

        const response = await fetch(url);
        const text = await response.text();
        console.log("Raw response text:", text.slice(0, 100));
        if (!text || text.trim() === "") {
          throw new Error("API returned empty response");
        }

        const data = JSON.parse(text);
        setProduct(data);
      } catch (error) {
        console.error("❌ Error fetching product:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(product);
      Alert.alert("Added to cart", `${product.title} was added to your cart.`);
    } catch (err) {
      Alert.alert("Error", "Could not add to cart.");
    }
  };

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" color="gray" />;
  }

  if (!product) {
    return (
      <Text style={{ padding: 20 }}>
        ⚠️ Product not found or failed to load.
      </Text>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});

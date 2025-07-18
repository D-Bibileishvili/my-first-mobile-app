import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export interface CartItem {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState("");

  useFocusEffect(
    useCallback(() => {
      const loadCart = async () => {
        const data = await AsyncStorage.getItem("cart");
        if (data) setCartItems(JSON.parse(data));
      };
      loadCart();
    }, [])
  );

  useEffect(() => {
    AsyncStorage.setItem("cart", JSON.stringify(cartItems));
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  const handleAdd = (item: CartItem) => {
    const updated = cartItems.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCartItems(updated);
  };

  const handleDecrease = (item: CartItem) => {
    const updated = cartItems
      .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
      .filter((i) => i.quantity > 0);
    setCartItems(updated);
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        <Text style={styles.price}>
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity
            onPress={() => handleDecrease(item)}
            style={styles.qtyBtn}
          >
            <Text style={styles.qtyText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleAdd(item)}
            style={styles.qtyBtn}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shopping Cart</Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <Text>
          Shipping: <Text style={{ color: "green" }}>Free</Text>
        </Text>
        <Text>Subtotal: ${subtotal.toFixed(2)}</Text>

        <TextInput
          style={styles.input}
          placeholder="Coupon Code"
          value={coupon}
          onChangeText={setCoupon}
        />
        <Button title="Apply" onPress={() => {}} />

        <Text style={styles.total}>
          Total:{" "}
          <Text style={{ fontWeight: "bold" }}>${subtotal.toFixed(2)}</Text>
        </Text>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>BUY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 12,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    marginTop: 4,
    marginBottom: 8,
    fontWeight: "600",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  qtyBtn: {
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  qty: {
    fontSize: 16,
  },
  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginVertical: 8,
  },
  total: {
    marginTop: 10,
    fontSize: 18,
  },
  buyButton: {
    backgroundColor: "maroon",
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buyText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

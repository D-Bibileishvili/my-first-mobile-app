import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCart = async (product: any) => {
  const existing = await AsyncStorage.getItem("cart");
  let cart = existing ? JSON.parse(existing) : [];

  const index = cart.findIndex((item: any) => item.id === product.id);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  await AsyncStorage.setItem("cart", JSON.stringify(cart));
};

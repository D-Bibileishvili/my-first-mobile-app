// const addToCart = async (product: CartItem) => {
//   const stored = await AsyncStorage.getItem('cart');
//   const cart: CartItem[] = stored ? JSON.parse(stored) : [];

//   const existing = cart.find((i) => i.id === product.id);
//   if (existing) {
//     existing.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   await AsyncStorage.setItem('cart', JSON.stringify(cart));
//   Alert.alert('✅ Added to cart!');
// };

// export default addToCart;
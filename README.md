# 🛒 Expo E-Commerce App

This is a simple mobile e-commerce application built with **React Native + Expo** using the **expo-router** file-based routing system. It supports product browsing, a shopping cart with quantity updates, persistent storage using `AsyncStorage`, and a basic user profile and authentication flow.

---

## ⚙️ Technologies Used

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [expo-router](https://expo.github.io/router/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://github.com/jquense/yup)

---

## 💡 Features

- ✅ Product listing from Fake Store API
- ✅ Product detail page with dynamic routing using `[id].tsx`
- ✅ Add to Cart functionality
- ✅ Cart item quantity update (+ / -)
- ✅ Cart data persistence with `AsyncStorage`
- ✅ Profile page with stored user data
- ✅ Authentication (Register / Login)
- ✅ Coupon code input (UI only for now)
- ✅ Order summary and buy button UI

---

## 🛠 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

   ```

2. **Install dependencies**
   npm install

3. **Start the development server**
   bash
   Copy code
   npx expo start

4. **(Optional) Clear local storage during testing**
   ts
   Copy code
   await AsyncStorage.clear();

🧪 Development Notes

- ✅ useRouter() and useLocalSearchParams() are used from expo-router for dynamic navigation and route parameters.

- ✅ Forms (like login/register) use react-hook-form with yupResolver for validation.

- ✅ The shopping cart page (tabs/cart.tsx) uses FlatList to render items and keeps the order summary fixed at the bottom.

- ✅ Styling is handled using StyleSheet.create().

🙋‍♂️ Author
Davit Bibileishvili

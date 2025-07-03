import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

const fetchUserProfile = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/1`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
};

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user-token");
    router.replace("/(auth)");
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.profileWrap}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading profile data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.profileWrap}>
        <Text style={styles.errorText}>
          Failed to load profile: {error.message}
        </Text>
        <Text style={styles.errorText}>Please try again later.</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.profileWrap}>
        <Text style={styles.errorText}>No user data found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.profileWrap}>
      <Text style={styles.mainHeading}>User Profile</Text>
      <Text style={styles.detailText}>
        <Text style={styles.label}>Username:</Text> {user.username}
      </Text>
      <Text style={styles.detailText}>
        <Text style={styles.label}>First Name:</Text> {user.name.firstname}
      </Text>
      <Text style={styles.detailText}>
        <Text style={styles.label}>Last Name:</Text> {user.name.lastname}
      </Text>
      <Text style={styles.detailText}>
        <Text style={styles.label}>Email:</Text> {user.email}
      </Text>
      <Text style={styles.detailText}>
        <Text style={styles.label}>Phone:</Text> {user.phone}
      </Text>
      <Text style={styles.detailText}>
        <Text style={styles.label}>Address:</Text> {user.address.number}{" "}
        {user.address.street}, {user.address.city}, {user.address.zipcode}
      </Text>
      <View style={styles.button} >
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  profileWrap: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 25,
    alignSelf: "center", 
  },
  detailText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 15,
    lineHeight: 24,
  },
  label: {
    fontWeight: "600",
    color: "#444",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
  }
});
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"


const Index = () => {
    const [value, setValue] = useState<string>()
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef?.current?.focus();
    }, []);
    
    return (
        <View>
            <TextInput ref={inputRef} style={styles.input} onChangeText={setValue}/>
        </View>

    )
}

export default Index;

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        borderRadius: 5,
        margin: 10,
        fontSize: 16,
    },     
})
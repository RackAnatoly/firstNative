import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [value, setValue] = useState('')
    return (
        <View style={styles.container}>
            <Text style={[globalStyles.text, styles.text]}>Багов нет</Text>
            {/* <TextInput style={[globalStyles.border, styles.input]} value={value} onChangeText={setValue}/> */}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text: {
        width: 200,
        fontSize: 18,
        padding: 8 
    }
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "red"
    }
})
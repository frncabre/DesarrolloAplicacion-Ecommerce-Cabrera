import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';



const Search = ({onSearchHandlerEvent}) => {
    const [searchInput, setSearchInput] = useState('')


    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar ...'
                value={searchInput}
            />
            <TouchableOpacity onPress={()=>{onSearchHandlerEvent()}}>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity >
                <MaterialIcons name="cancel" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    textInput: {
        width: '80%'
    }
})
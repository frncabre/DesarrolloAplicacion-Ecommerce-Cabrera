import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';



const Search = ({onSearchHandlerEvent}) => {
    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    const onSearchHandler = () => {
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError('Solo se admiten letras y numero')
            setSearchInput('')
        }else{
            setError('')
            onSearchHandlerEvent(searchInput)
        }
    }

    const onResetSearchHandler = () => {
        setSearchInput('')
        onSearchHandlerEvent(searchInput)
    }

    return (
        <>
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar ...'
                value={searchInput}
            />
            <TouchableOpacity onPress={()=>{onSearchHandler(searchInput)}}>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onResetSearchHandler}>
                <MaterialIcons name="cancel" size={24} color="black" />
            </TouchableOpacity>
        </View>
        {
            error
            ?
            <View><Text style={styles.textError}>{error}</Text></View>
            :
            null
        }
        </>
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
    },
    textError: {
        color: 'red'
    }
})
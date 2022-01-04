import { StyleSheet } from "react-native";

const appTheme = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    pokebolaBG:{
        position:"absolute",
        height: 300,
        width: 300,
        top: -100,
        right: -100,
        opacity: 0.3
    },
    title:{
        fontSize: 35,
        fontWeight: '900',
        textTransform: 'uppercase'
        
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    }
})

export default appTheme
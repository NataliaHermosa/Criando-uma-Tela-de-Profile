import react from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from "react-native";

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F56SE'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/102878489?v=4';
const urlToMyGithub = 'https://github.com/NataliaHermosa';

const App = () => {
    const handlePressGoToGithub = async ()=>{
        console.log ('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
       console.log ('Link aprovado');
       console.log ('Abrindo link.....');
       await Linking.openURL(urlToMyGithub);
    }
    };
    return (
        <SafeAreaView style={style.container}>
            <statusbar backgroundColor={colorGithub} barStyle = "light-content" />
        <view style={style.content}>
           <Image 
           accessibilityLabel="Natalia sorrindo no escritório"
           style={style.avatar} 
           source={{uri: imageProfileGithub}}
           />
           <text 
           accessibilityLabel="Nome: Natalia Hermosa"
           style={[style.defaultText, style.name]}>
               Natalia Hermosa
               </text>
           <text 
           accessibilityLabel="Nickname: Natalia Hermosa"
           style={[style.defaultText, style.nickname]}>
               NataliaHermosa
               </text>
           <text 
           accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas, Jornalista e Publicitária em transição de carreira."
           style={[style.defaultText, style.description]}>
           Estudante de Análise e Desenvolvimento de Sistemas, Jornalista e Publicitária em transição de carreira.
           </text>
           <Pressable onPress={handlePressGoToGithub}>           
           <view style={style.button}>
              <Text style={[style.defaultText, style.textButton]}>
                  Open in Github
                  </Text> 
           </view>
           </Pressable>
        </view>
        </SafeAreaView>
    );
};

export default App; 

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderBottomLeftRadius: 10,
        padding: 20, 
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
   });

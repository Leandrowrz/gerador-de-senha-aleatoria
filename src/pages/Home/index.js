
import { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword} from '../../components/modal'



let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
  const[size, setSize] =useState(8)
  const[passwordValue,setPasswordValue] =useState("")
const[modalVisible,setModalVisible] =useState(false);


  function generatePassword(){

   let password = "";
   for (let i = 0, n = charset.length; i < size; i++) {
    password += charset.charAt(Math.floor(Math.random()*n))
   }

  setPasswordValue(password)
setModalVisible(true);
  }

  return (
    <View style={styles.container}>
    <Image
    source= {require("../../assets/logo1.png")}
    style={styles.logo}
    />


<Text style={styles.title}>{size} CARACTERES</Text>

<View  style={styles.area}>

<Slider 
style={{height:50}}
minimumValue={8}
maximumValue={20}
maximumTrackTintColor="#ffff"
minimumTrackTintColor="#0a6ffff9"
thumbTintColor="#0a6ffff9"

value={size}
onValueChange={(value) => setSize(value.toFixed(0))}

/>

</View>

<TouchableOpacity style={styles.button}onPress={generatePassword}>
  <Text style={styles.buttonText}>Gerar Senha</Text>
</TouchableOpacity>

<Modal visible={modalVisible}animationType="fade" transparent={true}>
<ModalPassword password={passwordValue} handleClose={()=> setModalVisible(false)}/>

</Modal>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    
    marginBottom:20,

  },

  area:{
    
    marginTop:14,
    marginBottom: 14,
    width:"80%",
    backgroundColor:"black",
    borderRadius: 8,
    padding:8,

  },


  button:{

    backgroundColor:"#0a6ffff9",
    width:"60%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
marginBottom:18
  },


  buttonText:{
color:"white",
fontSize:20,
fontWeight:'bold'
  },

  title:{
fontSize: 28 ,
fontWeight:'bold'


   

  },




});

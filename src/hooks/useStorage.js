import AsyncStorage from "@react-native-async-storage/async-storage";



const useStorage = () => { 
//Buscar os itens salvos
const getItem= async(key) => {
try{
const password = await AsyncStorage.getItem(key);
return JSON.parse(password) || [];

}catch(error){
    console.log("Erro ao Buscar ", error)
    return[];
  }
}


//Salvar um item storage
const saveItem = async (key,value) =>{
    try{
        let password = await getItem(key)
       password.push(value)

       await AsyncStorage.setItem(key, JSON.stringify(password))
        
        }catch(error){
            console.log("Erro ao Salvar ", error)
        
        }


}
//Remover algo do storage
const removeItem = async (key, item ) => {


    try{
        let password = await getItem(key)

        let myPassword = password.filter( (password) => {
return(password !== item)
        })

       await AsyncStorage.setItem(key, JSON.stringify(myPassword))
       return myPassword;
        
        }catch(erro){
            console.log("Erro ao Deletar ", erro)
        
        }


}
return{
    getItem,
    saveItem,
    removeItem,
}
}

export default useStorage;
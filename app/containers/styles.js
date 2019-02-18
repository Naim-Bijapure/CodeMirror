import {StyleSheet  } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    
    },
    checkBorder:{
      borderColor:'red',
      borderWidth:3,
    },
    PrimaryColor:{
      color:'#3f51b5',
      fontSize:17,
      fontWeight:"bold"
      
    }
    
  });
  export default styles;
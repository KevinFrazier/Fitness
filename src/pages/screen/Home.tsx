/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useState, useEffect}from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Button
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 declare const global: {HermesInternal: null | {}};
 const Home = ({navigation} : any) => {
 
   const [example, setExample] = useState('');
   useEffect(() => {
     setExample('hello');
   }, []);
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>
           <Header />
           {global.HermesInternal == null ? null : (
             <View style={styles.engine}>
               <Text style={styles.footer}>Engine: Hermes</Text>
             </View>
           )}
           <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button 
                onPress={() => {navigation.navigate('Profile')}}
                title= {example}/>
              <Button 
                onPress={() => {navigation.navigate('Camera')}}
                title= {'Camera'}/>
            </View>
           </View>
         </ScrollView>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
 });
 
 export default Home;
 
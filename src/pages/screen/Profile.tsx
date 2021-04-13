import React, {useState, useEffect}from 'react';
import {Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({navigation} : any) => {

    const [example, setExample] = useState('');
    useEffect(() => {
        setExample('Text Button');
    }, [])
    return(
    	<>
				<SafeAreaView>
				<Text>Profile</Text>
				<Button 
				onPress={() => {navigation.navigate('Home')}}
				title= {example}/>
				</SafeAreaView>
    </>
    )
}

export default Profile;
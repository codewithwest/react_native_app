import * as firebase from 'firebase'
import { Alert } from 'react-native';

export async function Register(email, password, name){
    try{
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            const currentUser = firebase.auth().currentUser

            const db = firebase.firestore()
            db.collection('users')
            .doc(currentUser.uid).set({
                name: name,
                email:email,
                password: password
            });
            alert('Registration Successfull')
            
            

    }catch(error){
        Alert.alert("There is something Wrong!", error.message)
    }
}

    
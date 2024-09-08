import { initializeApp } from "firebase/app";
import firebaseConfig from "../secrets/firebaseSDK";
import { getFirestore, doc, getDoc, } from "firebase/firestore";
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

async function getAlumniWishes(id: string) {

    const docRef = doc(firestore, 'alumnis', id);


    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log('No such document!');
    }
}


export { getAlumniWishes } 
const firebaseConfig = {
    apiKey: "AIzaSyAVI1z3HQtmBWBmY1LeVafV5qNm-fj860s",
    authDomain: "copidb.firebaseapp.com",
    projectId: "copidb",
    storageBucket: "copidb.appspot.com",
    messagingSenderId: "632268448339",
    appId: "1:632268448339:web:28a9106657ebbcadc95ca6",
    measurementId: "G-6DQTT3BWH5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
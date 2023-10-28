import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD1ttXvRQgNzMy2F8HKQMngNhp-o3odRFA",
  authDomain: "skarbonka-dev.firebaseapp.com",
  projectId: "skarbonka-dev",
  storageBucket: "skarbonka-dev.appspot.com",
  messagingSenderId: "676858597746",
  appId: "1:676858597746:web:353fc2055172de12ba0deb",
};

const app = initializeApp(firebaseConfig);

export { app };

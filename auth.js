import firebase from './firebase-config';

// Registration function
export const registerUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log("User created: ", userCredential.user);
    // Additional setup or redirection after registration
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

// Login function
export const loginUser = async (email, password) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("User logged in: ", userCredential.user);
    // Redirect the user or handle login success
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// Logout function
export const logoutUser = async () => {
  try {
    await firebase.auth().signOut();
    console.log("User logged out");
    // Handle post-logout logic
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

// Check for auth state changes
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("User is logged in", user);
    // Handle logged-in state
  } else {
    console.log("User is signed out");
    // Handle not logged-in state
  }
});

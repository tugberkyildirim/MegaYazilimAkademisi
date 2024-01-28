import db from './firestore.js';
import toast from 'react-hot-toast';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';

const addUserData = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    return docRef.id;
  } catch (error) {
    toast.error('Kullanıcı Eklenemedi')
  }
};

const updateUserData = async (userId, newData) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, newData);
  } catch (error) {
    console.error(error);
  }
};

const deleteUserData = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    await deleteDoc(userRef);
  } catch (error) {
    toast.error('Kullanıcı Silinemedi');
  }
};

const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const userData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return userData;
  } catch (error) {
    toast.error('Bilgi Getirilemedi');
  }
};

export { addUserData, updateUserData, deleteUserData, getAllUsers }
import {initializeApp} from 'firebase/app';

import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

import {
	getFirestore,
	setDoc,
	getDoc,
	doc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDT-Y69D88HX0ni_gEK8gL_K7U43ueDvxo',
	authDomain: 'crwn-clothing-db-8738f.firebaseapp.com',
	projectId: 'crwn-clothing-db-8738f',
	storageBucket: 'crwn-clothing-db-8738f.firebasestorage.app',
	messagingSenderId: '463415120344',
	appId: '1:463415120344:web:f316c0494d403f33a1a2ad',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey,
																								objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	})
	await batch.commit();
	console.log('done');
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);

	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const {title, items} = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})

	return categoryMap;
}


export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (err) {
			console.log(`error creating the user`, err.message);
		}
	}

	return userDocRef;
};

export const signOutUser = async () => await signOut(auth);

export const signInWithGooglePopup = () => signInWithPopup(auth,
	googleProvider);

export const signInWithEmailAndPass = async (email,
																						 password) => await signInWithEmailAndPassword(
	auth, email, password);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,
	callback)
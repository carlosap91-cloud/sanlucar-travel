import React, { createContext, useState, useEffect, useContext } from 'react';
import { db, auth } from '../firebase/config';
import {
  collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, setDoc
} from 'firebase/firestore';
import {
  onAuthStateChanged, signInWithEmailAndPassword, signOut
} from 'firebase/auth';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  // ==========================================
  // 📝 ZONA DE EDICIÓN DE DATOS (Manual CMS)
  // ==========================================
  // Aquí puedes añadir, borrar o modificar tus datos.
  // Se cargarán automáticamente si no hay sistema de base de datos activado.

  // 1. RESTAURANTES 🍽️
  const initialRestaurants = [
    {
      id: 1,
      name: 'Casa Bigote',
      address: 'Pórtico de Bajo de Guía, 10',
      cuisine: ['Mariscos', 'Tradicional'],
      reviews: [{ user: 'Carlos', comment: 'El mejor langostino.', rating: 5 }],
      menuLink: 'https://casabigote.com/carta',
      mapLink: 'https://goo.gl/maps/example1',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
      description: 'Un referente histórico. Famoso por sus langostinos y guisos marineros frente al Coto de Doñana.',
      price: '€€€',
      socials: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' },
      lat: 36.7828, lng: -6.3607,
      isFeatured: true // ✨ Destacado en portada
    },
    {
      id: 2,
      name: 'Casa Balbino',
      address: 'Plaza del Cabildo, 14',
      cuisine: ['Tapas', 'Tortillitas'],
      reviews: [],
      menuLink: '',
      mapLink: 'https://goo.gl/maps/example2',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      description: 'El templo de las tortillitas de camarones. Parada para tapear en la Plaza del Cabildo.',
      price: '€€',
      socials: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' },
      lat: 36.7785, lng: -6.3526,
      isFeatured: false
    }
    // 👇 AÑADE AQUÍ MÁS RESTAURANTES COPIANDO EL BLOQUE ANTERIOR 👇
  ];

  // 2. BODEGAS 🍇
  const initialWineries = [
    {
      id: 1,
      name: 'Bodegas Barbadillo',
      address: 'Calle Sevilla, 6',
      description: 'Cuna de la Manzanilla Solear. Visitas guiadas y museo del vino.',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      mapLink: 'https://maps.google.com/?q=Bodegas+Barbadillo',
      socials: { instagram: '#' }
    }
  ];

  // 3. EXPERIENCIAS ✨
  const initialExperiences = [
    {
      id: 1,
      name: 'Atardecer en Doñana',
      description: 'Visita guiada en 4x4 por el Parque Nacional durante la puesta de sol.',
      image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=800',
      price: '35€',
      duration: '3 horas'
    }
  ];

  // 4. ALOJAMIENTOS 🏨
  const initialAccommodations = [
    {
      id: 1,
      name: 'Hotel Guadalquivir',
      address: 'Calzada del Ejército, s/n',
      description: 'Vistas panorámicas a la desembocadura y a Doñana. El referente de la ciudad.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      price: '€€€',
      type: 'Hotel',
      socials: { website: '#' }
    },
    {
      id: 2,
      name: 'Palacio de los Duques',
      address: 'Plaza del Cabildo',
      description: 'Duerme en un antiguo palacio renovado con patio andaluz.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
      price: '€€€',
      type: 'Boutique',
      socials: { website: '#' }
    },
    {
      id: 3,
      name: 'Hostal La Salle',
      address: 'Calle San Juan',
      description: 'Económico, céntrico y familiar. Ideal para escapadas fin de semana.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
      price: '€',
      type: 'Hostal',
      socials: { website: '#' }
    },
    {
      id: 4,
      name: 'Apartamentos Doñana',
      address: 'Bajo de Guía',
      description: 'Apartamentos turísticos en primera línea de playa con terraza.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
      price: '€€',
      type: 'Apartamento',
      socials: { website: '#' }
    }
  ];

  // 5. TRANSPORTES 🚌
  const initialTransport = [];

  // ==========================================
  // FIN DE ZONA DE EDICIÓN
  // ==========================================

  // NOTE: In production, we'd have all initial data here, but for the hybrid rewrite 
  // I will rely on the user to seed or use the existing local storage if firebase is off.

  const safeJSONParse = (key, fallback) => {
    try {
      const saved = localStorage.getItem(key);
      const savedVersion = localStorage.getItem('dataVersion');
      const CURRENT_VERSION = '2.1'; // Bumped to force load of new dummy data
      if (saved && savedVersion === CURRENT_VERSION) {
        return JSON.parse(saved);
      }
      return fallback;
    } catch (e) {
      return fallback;
    }
  };

  // --- STATE ---
  const [restaurants, setRestaurants] = useState(() => safeJSONParse('restaurants', initialRestaurants));
  const [accommodations, setAccommodations] = useState(() => safeJSONParse('accommodations', initialAccommodations));
  const [wineries, setWineries] = useState(() => safeJSONParse('wineries', initialWineries));
  const [transport, setTransport] = useState(() => safeJSONParse('transport', initialTransport));
  const [experiences, setExperiences] = useState(() => safeJSONParse('experiences', initialExperiences));
  const [markets, setMarkets] = useState(() => safeJSONParse('markets', []));
  const [shops, setShops] = useState(() => safeJSONParse('shops', []));
  const [reservations, setReservations] = useState(() => safeJSONParse('reservations', []));

  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');
  const [userProfile, setUserProfile] = useState(() => safeJSONParse('userProfile', { name: 'Admin', avatar: '' }));

  const [isFirebaseEnabled, setIsFirebaseEnabled] = useState(false);

  // --- FIREBASE INITIALIZATION ---
  useEffect(() => {
    if (db && auth) {
      setIsFirebaseEnabled(true);
      console.log("🔥 Firebase Enabled: Syncing Data...");

      // Subscribe to Collections
      const unsubs = [];

      // Helper for subscription
      const subscribe = (collectionName, setter) => {
        const q = collection(db, collectionName);
        const unsub = onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          // Only update if we have data, otherwise keep fallback? 
          // No, if firebase is active, it is the source of truth. Even if empty.
          setter(data);
        });
        unsubs.push(unsub);
      };

      subscribe('restaurants', setRestaurants);
      subscribe('accommodations', setAccommodations);
      subscribe('wineries', setWineries);
      subscribe('transport', setTransport);
      subscribe('experiences', setExperiences);
      subscribe('reservations', setReservations);
      // Add others if needed

      // Auth Listener
      const authUnsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAdmin(true);
          setUserProfile(prev => ({ ...prev, name: user.email }));
        } else {
          setIsAdmin(false);
        }
      });
      unsubs.push(authUnsub);

      return () => unsubs.forEach(u => u());
    }
  }, []);

  // --- LOCAL STORAGE SYNC (Fallback only) ---
  // Only write to LS if firebase is NOT enabled, to preserve "offline" mode functionality if needed
  // OR: always write to LS as a cache? syncing might be tricky.
  // Decision: If Firebase is enabled, DO NOT write to LS, to avoid conflicts.
  useEffect(() => {
    if (!isFirebaseEnabled) {
      localStorage.setItem('restaurants', JSON.stringify(restaurants));
      localStorage.setItem('dataVersion', '2.0');
      localStorage.setItem('accommodations', JSON.stringify(accommodations));
      localStorage.setItem('wineries', JSON.stringify(wineries));
      localStorage.setItem('transport', JSON.stringify(transport));
      localStorage.setItem('experiences', JSON.stringify(experiences));
      localStorage.setItem('markets', JSON.stringify(markets));
      localStorage.setItem('shops', JSON.stringify(shops));
      localStorage.setItem('reservations', JSON.stringify(reservations));
      localStorage.setItem('isAdmin', isAdmin);
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
  }, [restaurants, accommodations, wineries, transport, experiences, markets, shops, reservations, isAdmin, userProfile, isFirebaseEnabled]);

  // --- ACTIONS ---

  // AUTH
  const login = async (email, password) => {
    if (isFirebaseEnabled) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        return true;
      } catch (error) {
        console.error("Firebase Login Error", error);
        alert(error.message);
        return false;
      }
    } else {
      // Mock
      setIsAdmin(true);
      return true;
    }
  };

  const logout = async () => {
    if (isFirebaseEnabled) {
      await signOut(auth);
    } else {
      setIsAdmin(false);
    }
  };

  // GENERIC CRUD HELPER
  const addItem = async (collectionName, item, setter, currentList) => {
    if (isFirebaseEnabled) {
      try {
        // Remove ID if present (let firestore gen it) or use it?
        // Best to let firestore gen ID
        const { id, ...data } = item;
        await addDoc(collection(db, collectionName), data);
      } catch (e) { console.error("Error adding doc", e); alert("Error guardando"); }
    } else {
      setter([...currentList, { ...item, id: Date.now(), reviews: [] }]);
    }
  };

  const updateItem = async (collectionName, id, data, setter, currentList) => {
    if (isFirebaseEnabled) {
      try {
        await updateDoc(doc(db, collectionName, String(id)), data);
      } catch (e) { console.error("Error updating", e); }
    } else {
      setter(currentList.map(i => i.id === id ? { ...i, ...data } : i));
    }
  };

  const deleteItem = async (collectionName, id, setter, currentList) => {
    if (isFirebaseEnabled) {
      try {
        await deleteDoc(doc(db, collectionName, String(id)));
      } catch (e) { console.error("Error deleting", e); }
    } else {
      setter(currentList.filter(i => i.id !== id));
    }
  };


  // SPECIFIC EXPORTS
  const addRestaurant = (item) => addItem('restaurants', item, setRestaurants, restaurants);
  const updateRestaurant = (id, data) => updateItem('restaurants', id, data, setRestaurants, restaurants);
  const deleteRestaurant = (id) => deleteItem('restaurants', id, setRestaurants, restaurants);

  const addAccommodation = (item) => addItem('accommodations', item, setAccommodations, accommodations);
  const updateAccommodation = (id, data) => updateItem('accommodations', id, data, setAccommodations, accommodations);
  const deleteAccommodation = (id) => deleteItem('accommodations', id, setAccommodations, accommodations);

  const addWinery = (item) => addItem('wineries', item, setWineries, wineries);
  const updateWinery = (id, data) => updateItem('wineries', id, data, setWineries, wineries);
  const deleteWinery = (id) => deleteItem('wineries', id, setWineries, wineries);

  const addTransport = (item) => addItem('transport', item, setTransport, transport);
  const updateTransport = (id, data) => updateItem('transport', id, data, setTransport, transport);
  const deleteTransport = (id) => deleteItem('transport', id, setTransport, transport);

  const addExperience = (item) => addItem('experiences', item, setExperiences, experiences);
  const updateExperience = (id, data) => updateItem('experiences', id, data, setExperiences, experiences);
  const deleteExperience = (id) => deleteItem('experiences', id, setExperiences, experiences);

  const addReservation = (item) => addItem('reservations', item, setReservations, reservations);
  const updateReservationStatus = (id, status) => updateItem('reservations', id, { status }, setReservations, reservations);

  // Profile
  const updateUserProfile = (data) => setUserProfile(data); // TODO: Sync profile to firebase if needed, for now local/state

  const getRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  // Need trivial handlers for markets/shops if they used it
  const addMarket = (item) => addItem('markets', item, setMarkets, markets);
  const deleteMarket = (id) => deleteItem('markets', id, setMarkets, markets);
  const updateMarket = (id, data) => updateItem('markets', id, data, setMarkets, markets);

  const addShop = (item) => addItem('shops', item, setShops, shops);
  const deleteShop = (id) => deleteItem('shops', id, setShops, shops);
  const updateShop = (id, data) => updateItem('shops', id, data, setShops, shops);

  const addReview = async (collectionType, itemId, review) => {
    // Logic for nested reviews in firestore... 
    // Firestore arrayUnion?
    if (isFirebaseEnabled) {
      // this is harder, need doc ref
      // Simplified: We won't support reviews in firebase for this MVP unless deeply nested
      console.log("Reviews in firebase not yet impl");
    } else {
      // ... legacy code
    }
  };


  return (
    <DataContext.Provider value={{
      restaurants, accommodations, wineries, transport, experiences, markets, shops, reservations,
      isAdmin, userProfile, isFirebaseEnabled,
      login, logout,
      addRestaurant, deleteRestaurant, updateRestaurant,
      addAccommodation, deleteAccommodation, updateAccommodation,
      addWinery, deleteWinery, updateWinery,
      addTransport, deleteTransport, updateTransport,
      addExperience, deleteExperience, updateExperience,
      addMarket, deleteMarket, updateMarket,
      addShop, deleteShop, updateShop,
      addReservation, updateReservationStatus,
      updateUserProfile, getRating, addReview
    }}>
      {children}
    </DataContext.Provider>
  );
};

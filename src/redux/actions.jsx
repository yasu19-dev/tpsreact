import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER, GET_POSTS } from "./types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// --- 1. READ (GET Users) ---
export const getUsers = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then(res => res.json())
      .then(users => {
        dispatch({ type: GET_USERS, payload: users });
      })
      .catch(err => console.error(err));
  };
};

// --- 2. CREATE (POST User) ---
export const addUser = (user) => {
  return (dispatch) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(res => res.json())
    .then(data => {
      // JSONPlaceholder renvoie id: 11 à chaque fois, on simule un ID unique pour l'affichage
      const newUser = { ...data, id: Date.now() }; 
      dispatch({ type: ADD_USER, payload: newUser });
    });
  };
};

// --- 3. DELETE (DELETE User) ---
export const deleteUser = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        dispatch({ type: DELETE_USER, payload: id });
      });
  };
};

// --- 4. UPDATE (PUT User) ---
export const updateUser = (id, updatedData) => {
  return (dispatch) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: UPDATE_USER, payload: data });
    });
  };
};

// --- GET POSTS (Pour un user spécifique) ---
export const getPostsByUser = (userId) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => res.json())
      .then(posts => {
        dispatch({ 
            type: GET_POSTS, 
            payload: { userId, posts } // On envoie l'ID et les posts
        });
      });
  };
};
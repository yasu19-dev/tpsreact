import React from 'react';
import { createLegacyStore } from 'redux';
import { Provider } from 'react-redux';
import courseReducer from './redux';
import ListeCours from './ListeCours'; // Vos composants
import ModifierDuree from './ModifierDuree';

// Création du store avec le reducer importé
const store = createLegacyStore(courseReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestion des Cours</h1>
        <ListeCours />
        <ModifierDuree />
      </div>
    </Provider>
  );
}

export default App;
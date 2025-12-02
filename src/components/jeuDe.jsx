import React from "react";
class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouerOuInitialiser() {
    if (this.state.fin) {
      this.initialiser();
    } else {
      this.jouer();
    }
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === this.props.valeurCache,
    }));
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const facesImages = [
      "images/face1.PNG",
      "images/face2.PNG",
      "images/face3.PNG",
      "images/face4.PNG",
      "images/face5.PNG",
      "/images/face6.PNG",
    ];

    return (
      <div>
        <img src="images/Dé.PNG" alt="Dé" />
        <h1>Jeu de Dé...</h1>
        <h2>face: {this.state.face !== null ? <img src={facesImages[this.state.face - 1]} alt={`Face ${this.state.face}`} /> : "..."}</h2>
        <h2>nombre d'essais: {this.state.compteur}</h2>

        {this.state.fin && (
          <p>Bravo, vous avez trouvé la face cachée !</p>
        )}

        <button onClick={() => this.jouerOuInitialiser()}>
          {this.state.fin ? "Initialiser" : "Jouer"}
        </button>
      </div>
    );
  }
}

export default JeuDe;


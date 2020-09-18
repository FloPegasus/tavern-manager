import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
    return ( <div>
                <Navbar></Navbar>
                <div className="subscription-form">
                    <h2>Inscription</h2>
                    <text>
                        Tavern Manager vous permet d'organiser
                        vos partie de jeux de rôle. Il s'adapte aussi
                        bien autour d'une table qu'à une partie 
                        en ligne.
                    </text>
                    <form >
                        <label for="login" className="label-items">Login</label>
                        <input type="text" id="login" className="sub-items"></input>
                        <label for="mail" className="label-items">Adresse Email</label>
                        <input type="text" id="mail"className="sub-items"></input>
                        <label for="password1" className="label-items">Mot de passe</label>
                        <input type="password" id="password1" className="sub-items"></input>
                        <label for="password2" className="label-items">Confirmer Mot de passe</label>
                        <input type="password" id="password2" className="sub-items"></input>
                        <button className="button primary">S'inscrire</button>
                    </form>
                </div>
            </div>
            )
    }
}

export default Home
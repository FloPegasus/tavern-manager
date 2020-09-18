import React from 'react';
import './PartyCard.scss';

class PartyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLeft: true,
        }
    }

    toLeft() {
        this.setState({isLeft: true});
    }

    toRight() {
        this.setState({isLeft: false});
    }

    cardsChange() {
        if (!this.state.isLeft) {
            return (
                <div className="party-card">
                    <button className="button triangle-left" onClick={() => this.toLeft()}></button>
                    <button className="tile new" title="Créer nouvelle Partie">Nouvelle Partie<p/><i className="fa fa-3x fa-plus-circle"></i></button>
                    <button className="button triangle-right" onClick={() => this.toRight()}></button>
                </div>
            )
        } else {
            return (
                <div className="party-card">
                    <button className="button triangle-left" onClick={() => this.toLeft()}></button>
                    <button className="tile" title="Visualiser partie">
                        <div className="party">
                            <div className="party-id">
                                <label for="name">Nom</label>
                                <input type="text" id="name" disabled></input>
                                <label for="master">Maitre du jeu</label>
                                <input type="text" id="master" disabled></input>
                            </div>
                            <div className="photo-circle"><i className="fa fa-camera"></i></div>
                        </div>
                        <div className="players">
                            <label for="table-players" className="table-label">Joueurs</label>
                            <table id="table-players">
                                <tr className="header">
                                    <th>Nom</th>
                                    <th>Personnage</th>
                                    <th>Classe</th>
                                    <th>Niveau</th>
                                </tr>
                                <tr className="body">
                                    <td>Nom</td>
                                    <td>Personnage</td>
                                    <td>Classe</td>
                                    <td>Niveau</td>
                                </tr>
                                <tr className="body">
                                    <td>Nom</td>
                                    <td>Personnage</td>
                                    <td>Classe</td>
                                    <td>Niveau</td>
                                </tr>
                                <tr className="body">
                                    <td>Nom</td>
                                    <td>Personnage</td>
                                    <td>Classe</td>
                                    <td>Niveau</td>
                                </tr>
                                <tr className="body">
                                    <td>Nom</td>
                                    <td>Personnage</td>
                                    <td>Classe</td>
                                    <td>Niveau</td>
                                </tr>
                            </table>
                        </div>
                    </button>
                    <button className="button triangle-right" onClick={() => this.toRight()}></button>
                </div>
            )
        }           
    }


    render() {
    return ( 
        <div>
            <label className="tile-label">Mes Parties</label>
            {this.cardsChange()}
        </div>
    )
    }
}

export default PartyCard
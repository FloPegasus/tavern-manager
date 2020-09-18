import React from 'react';
import './CharacterCard.scss';

class CharacterCard extends React.Component {
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
                <div className="character-card">
                    <button className="button triangle-left" onClick={() => this.toLeft()}></button>
                    <button className="tile new" title="Créer nouveau personnage">Nouveau Personnage<p/><i className="fa fa-3x fa-plus-circle"></i></button>
                    <button className="button triangle-right" onClick={() => this.toRight()}></button>
                </div>
            )
        } else {
            return (
                <div className="character-card">
                    <button className="button triangle-left" onClick={() => this.toLeft()}></button>
                    <button className="tile" title="Modifier personnage">
                        <div className="char">
                            <div className="photo-circle"><i className="fa fa-camera"></i></div>
                            <div className="char-id">
                                <label for="name">Nom</label>
                                <input type="text" id="name" disabled></input>
                                <label for="party">Partie</label>
                                <input type="text" id="party" disabled></input>
                            </div>
                        </div>
                        <div className="resume">
                            <label for="resume">Description</label>
                            <input type="text" id="resume" disabled></input>
                        </div>
                        
                        <div className="carac">
                            <label for="carac" className="carac-label">Caractéristiques</label>
                            <div className="carac-props" id="carac">
                                <div className="carac-stat">
                                    <label className="carac-name">For</label>
                                    <input type="text" className="caracdata" disabled></input>
                                    <label className="carac-name">Int</label>
                                    <input type="text" className="caracdata" disabled></input>
                                    <label className="carac-name">Dex</label>
                                    <input type="text" className="caracdata" disabled></input>
                                    <label className="carac-name">Sag</label>
                                    <input type="text" className="caracdata" disabled></input>
                                    <label className="carac-name">Con</label>
                                    <input type="text" className="caracdata" disabled></input>
                                    <label className="carac-name">Cha</label>
                                    <input type="text" className="caracdata" disabled></input>
                                </div>
                                <div className="carac-info">
                                    <div className="line">
                                        <div className="class">
                                            <label for="class">Classe</label>
                                            <input type="text" id="class" disabled></input>
                                        </div>
                                        <div className="level">
                                            <label for="level">Niveau</label>
                                            <input type="text" id="level" disabled></input>
                                        </div>
                                    </div>
                                    <div className="line">
                                        <div className="xp"> 
                                            <label for="xp">Expériance</label>
                                            <input type="text" id="xp" disabled></input>
                                        </div>
                                        <div className="gold">
                                            <label for="gold">Or</label>
                                            <input type="text" id="gold" disabled></input>                           
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            <label className="tile-label">Mes Personnages</label>
            {this.cardsChange()}
        </div>
    )
    }
}

export default CharacterCard
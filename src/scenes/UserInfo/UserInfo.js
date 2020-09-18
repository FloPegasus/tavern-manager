import React from 'react';
import './UserInfo.scss';
import Navbar from '../../components/Navbar/Navbar'

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
    return ( <div>
                <Navbar></Navbar>
                <div className="user-info-form">
                    <label className="header">Informations de compte</label>
                    <div className="body">
                        <form>
                            <label for="login" className="label-items">Login</label>
                            <input type="text" id="login" className="sub-items"></input>
                            <label for="mail" className="label-items">Adresse Email</label>
                            <input type="text" id="mail"className="sub-items"></input>
                            <label for="password1" className="label-items">Mot de passe</label>
                            <input type="password" id="password1" className="sub-items"></input>
                            <label for="password2" className="label-items">Confirmer Mot de passe</label>
                            <input type="password" id="password2" className="sub-items"></input>
                        </form>
                        <div className="photo-picker">
                            <div className="photo-circle"><i className="fa fa-camera"></i></div>
                        </div>
                   </div>
                    <div className="body2">
                        <label for="description" className="label-items">Un petit mot pour vous décrire</label>
                        <textarea type="text" id="description" className="sub-items"></textarea>
                    </div>
                    <div className="footer">
                        <button className="button warning">Annuler</button>
                        <button className="button success">Sauvegarder</button>
                    </div>
                </div>
            </div>
            )
    }
}

export default UserInfo
import React from 'react';
import './Navbar.scss';
import ConnexionService from '../../Service/ConnexionService'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    toConnect() {
        localStorage.setItem("userName", "Utilisateur")
        localStorage.setItem("userId", 1)
        window.location.href = "/board"
    }

    toDisconnect() {
        let cs = new ConnexionService()
        cs.disconnect();
        window.location.href = "/"
    }

    showUser() {
        let cs = new ConnexionService()
        if (cs.isConnected()) {
            return <tex>Bonjour {cs.getUserName()}</tex> 
        }
    }

    goToMail() {
        window.location.href = "/mail-box"
    }

    goToUserInfo() {
        window.location.href = "/user-info"
    }

    goHome() {
        let cs = new ConnexionService()
        if (cs.isConnected()) {
            window.location.href = "/board"
        } else {
            window.location.href = "/"
        }
    }

    navConnexion() {
        let cs = new ConnexionService()
        if (!cs.isConnected()) {
            return (
                <div className="Menu">
                    <input type="text" id="login" placeholder="Login"></input>
                    <input type="password" placeholder="Password"></input>
                    <button className="button primary" onClick={() => this.toConnect()}>Connexion</button>
                </div>
            )
        } else {
            return (
                <div className="Menu">
                    <button className="button items"><i className="fa fa-bell"></i></button>
                    <button className="button items" onClick={() => this.goToMail()}><i className="fa fa-envelope"></i></button>
                    <button className="button items"><i className="fa fa-users"></i></button>
                    <button className="button items" onClick={() => this.goToUserInfo()}><i className="fa fa-user"></i></button>
                    <button className="button warning" onClick={() => this.toDisconnect()}>Disconnexion</button>
                </div>
            )
        }           
    }

    render() {
        return ( 
            <div class="navbar">
                <div className="logo" onClick={() => this.goHome()}>
                    <img src="./images/logo.jpg"/>
                    <h1>Tavern Manager</h1>
                </div>
                {this.showUser()}
                {this.navConnexion()}
            </div>
                )
        }
}

export default Navbar
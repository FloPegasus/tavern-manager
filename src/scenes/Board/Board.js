import React from 'react';
import './Board.scss';
import Navbar from '../../components/Navbar/Navbar'
import CharacterCard from '../../components/c-card/CharacterCard/CharacterCard';
import PartyCard from '../../components/c-card/PartyCard/PartyCard'
import NewsCard from '../../components/c-card/NewsCard/NewsCard'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false
        }
    }

    render() {
    return ( <div>
                <Navbar></Navbar>
                <div className="top">
                    <CharacterCard/>
                    <PartyCard/>
                </div>
                <div className="bottom">
                    <NewsCard />
                </div>
            </div>
            )
    }
}

export default Board
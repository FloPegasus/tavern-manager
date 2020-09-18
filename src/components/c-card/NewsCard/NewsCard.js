import React from 'react';
import './NewsCard.scss';

class NewsCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nbNews: 5,
            start:0,
            news: ["a","b","c","d","e","f","g"]
        }
    }

    toLeft() {
        if (this.state.start != 0) {
            this.setState({start: this.state.start-1,nbNews: this.state.nbNews-1});
        }
        console.log(this.state)
    }

    toRight() {
        if ( this.state.nbNews < this.state.news.length) {
            this.setState({start: this.state.start+1,nbNews: this.state.nbNews+1});
        }
        console.log(this.state.news.length)
    }

    cardsChange() {
            return (
                <div className="news-caroussel">
                    <button className="button triangle-left" onClick={() => this.toLeft()}></button>
                    <div className="news-card">
                        {
                            this.state.news.slice(this.state.start, this.state.nbNews).map((news, i) => {
                                    return (
                                        <button className="tile" title="Visualiser Information">
                                            <div className="news">
                                                <label for="news">Information {news}</label>
                                            </div>
                                            <div className="news body">
                                                <text id="news">Random text pour information {news}</text>
                                            </div>
                                        </button>
                                        )
                            })
                        }
                    </div>
                    <button className="button triangle-right" onClick={() => this.toRight()}></button>
                </div>
            )
    }          


    render() {
        return ( 
            <div>
                <label className="tile-label">Informations</label>
                {this.cardsChange()}
            </div>
        )
    }
}

export default NewsCard
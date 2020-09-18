import React from 'react';
import './MailBox.scss';
import Navbar from '../../components/Navbar/Navbar'

class MailBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nbMails: 100,
            mails: [],
            page: 1,
            rows: 15,
            intervalPage: 0,
        }
    }

    componentDidMount() {
        this.initializeMails()
    } 

    initializeMails() {
        let mokeMails = []
        for (let i=1;i<=this.state.nbMails;i++) {
            mokeMails.push(i)
        }
        this.setState({mails: mokeMails})
    }

    nextPage() {
        const nbPage = Math.ceil(this.state.mails.length/this.state.rows);
        if (this.state.page<nbPage) {
            this.setState({page: this.state.page+1})
        }
    }

    lastPage() {
        const nbPage = Math.ceil(this.state.mails.length/this.state.rows);
        this.setState({page: nbPage})
    }

    previousPage() {
        if (this.state.page > 1) {
            this.setState({page: this.state.page-1})
        }
    }

    showButtonPaginate() {
        const nbPage = Math.ceil(this.state.mails.length/this.state.rows);
        let buttons = []
        let intervalPage = 0
        if (this.state.page > 1) {
            intervalPage = this.state.page -1
            if (this.state.page>3) {
                intervalPage = 2
            }
        }
        for (let i=this.state.page-intervalPage; i<= nbPage && i<this.state.page+5-intervalPage;i++) {
            if (i === this.state.page) {
                buttons.push(<button className="page" onClick={() => this.setState({page: i})} disabled>{i}</button>)
            } else {
                buttons.push(<button className="page" onClick={() => this.setState({page: i})}>{i}</button>)
            }
        }
        console.log(buttons)
        return buttons
    }

    showLeftArrows() {
        let arrows = []
        if (this.state.page>1) {
            arrows.push(
                <button className="arrow" onClick={() => this.setState({page: 1})}><i className="fa fa-caret-left"/><i className="fa fa-caret-left"/></button>
            )
            arrows.push(
                <button className="arrow" onClick={() => this.previousPage()}><i className="fa fa-caret-left"/></button>
            )
        } 
        return arrows
    }
    
    showRightArrows() {
        const nbPage = Math.ceil(this.state.mails.length/this.state.rows);
        let arrows = []
        if (this.state.page<nbPage) {
            arrows.push(
                <button className="arrow" onClick={() => this.nextPage()}><i className="fa fa-caret-right"/></button>
            )
            arrows.push(
                <button className="arrow" onClick={() => this.setState({page: nbPage})}><i className="fa fa-caret-right"/><i className="fa fa-caret-right"/></button>
            )
        } 
        return arrows
    }

    showPaginate() {
        if (this.state.mails.length/this.state.rows>1) {
            return (
                <div className="paginator">
                    {this.showLeftArrows()}
                    {this.showButtonPaginate()}
                    {this.showRightArrows()}
                </div>  
            )
        }
    }

    render() {
        return ( <div>
                    <Navbar></Navbar>
                    <div className="mail-form">
                        <div className="tools">
                            <div className="use-tool">
                                <button className="button warning">Supprimer</button>
                                <button className="button success">Nouveau message</button>
                            </div>
                            <div className="search-tool">
                                <input></input>
                                <button className="button primary">Rechercher</button>
                            </div>
                        </div>
                        <div className="mail-table">
                            <table>
                                <tr>
                                    <th className="select-mail"><input type="checkbox"></input></th>
                                    <th className="sender">Expéditeur</th>
                                    <th className="subject">Sujet</th>
                                    <th className="date">Date</th>
                                </tr>
                                {
                                    this.state.mails.slice((this.state.rows*this.state.page)-this.state.rows, this.state.page*this.state.rows).map((mail, i) => {
                                            return (
                                                <tr>
                                                    <td className="select-mail"><input type="checkbox"></input></td>
                                                    <td className="sender">Expéditeur {mail}</td>
                                                    <td className="subject">Sujet {mail}</td>
                                                    <td className="date">date {mail}</td>
                                                </tr>
                                            )
                                    })
                                
                                }
                            </table>
                            {this.showPaginate()}
                        </div>
                                        
                    </div>
                </div>
            )
        }
}

export default MailBox
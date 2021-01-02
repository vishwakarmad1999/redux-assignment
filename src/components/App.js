import React from "react"
import { connect } from "react-redux"

import { fetchdata } from "../actions/employee"
import { putData } from "../actions/contacts"

const mapStateToProps = (state) => ({
    data: state.data,
    contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchdata: () => dispatch(fetchdata()),
        putData: (data) => dispatch(putData(data))
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.fetchdata()
    }

    callEmployee(item) {
        const d = new Date()
        item = {
            ...item,
            timestamp: `${d.getHours()}:${d.getMinutes()}` 
        }
        this.props.putData(item)
    }

    render() {
        console.log(this.props.contacts)

        if (!this.props.data.employee.length) {
            return (
                <h1 className="mt-5 text-center text-info display-1">Loading</h1>
            )
        } 

        return (
            <React.Fragment>
                <div className="main-container">
                    <div className="cards-container">
                        { this.props.data.employee.map((item, index) => {
                            return (
                                <div className="emp-card" key={index}>
                                    <p>{ item.name }</p>
                                    <p><strong>Mail: </strong>{ item.email }</p>
                                    <p><strong>Company: </strong>{ item.company.name }</p>
                                    <button className="btn btn-warning btn-block" onClick={() => this.callEmployee(item)}><i className="fas fa-phone-alt"></i></button>
                                </div>
                            )
                        }) }
                    </div>
                    <div className="contacts-container">
                        <h5 className="text-center">Recently Contacted</h5>
                        <div className="text-center btn btn-dark btn-block mt-3">{ this.props.contacts[this.props.contacts.length - 1] ? this.props.contacts[this.props.contacts.length - 1].name + " - " +  this.props.contacts[this.props.contacts.length - 1].timestamp : "Unknown" }</div>
                        <div className="text-center btn btn-dark btn-block mt-3">{ this.props.contacts[this.props.contacts.length - 2] ? this.props.contacts[this.props.contacts.length - 2].name + " - " +  this.props.contacts[this.props.contacts.length - 2].timestamp : "Unknown" }</div>
                        <div className="text-center btn btn-dark btn-block mt-3">{ this.props.contacts[this.props.contacts.length - 3] ? this.props.contacts[this.props.contacts.length - 3].name + " - " +  this.props.contacts[this.props.contacts.length - 3].timestamp : "Unknown" }</div>
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
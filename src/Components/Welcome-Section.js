import React, {Component} from 'react'
import './custom.scss';

let date = new Date()

let singleUser = {
  name: 'Gypsy',
  time: date.toDateString(),
}


export default class Section extends Component {
    render () {
        return (
            <section className="welcomeSection">
                <h1>Welcome {singleUser.name}</h1>
                <p>Today's Date is {singleUser.time}</p>
            </section>
        )
    }
    
}

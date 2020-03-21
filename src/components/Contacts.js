import React, { Component } from "react"
import Contact from "./Contact"

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "sachin singh",
        email: "rajeshsachin786@gmail.com",
        phone: "9834573812"
      },
      {
        id: 2,
        name: "Rahul singh",
        email: "sachin.antino@lonaride.com",
        phone: "63762877778"
      },
      {
        id: 3,
        name: "Rohit singh",
        email: "sachin.singh@antino.io",
        phone: "6382638728"
      }
    ]
  }

  render() {
    const { contacts } = this.state
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    )
  }
}

export default Contacts

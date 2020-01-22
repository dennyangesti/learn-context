import React, { Component, createContext } from 'react'

export const UserAccessContext = createContext()

export class UserAccessProvider extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isLoggedin: localStorage.getItem('authentication-token') ? true : false
      }
   }

   login = () => {
      localStorage.setItem('authentication-token', "pura-pura-token")
      this.setState({ isLoggedin: true })
   }
   logout = () => {
      localStorage.removeItem('authentication-token')
      this.setState({ isLoggedin: false })
   }

   render() {
      return (
         <UserAccessContext.Provider value={{ isLoggedin: this.state.isLoggedin, login: this.login, logout: this.logout }}>
            {this.props.children}
         </UserAccessContext.Provider>
      )
   }
} 
import React, { component, Component } from 'react'
import { UserAccessContext } from '../context/UserAccessContext'



export default class Login extends Component {
   static contextType = UserAccessContext

   constructor(props) {
      super(props);
      this.state = {}

   }
   handleOnClick = () => {
      this.context.login()
   }

   render() {
      return (
         <button onClick={this.handleOnClick}>
            login
         </button>
      )
   }
}
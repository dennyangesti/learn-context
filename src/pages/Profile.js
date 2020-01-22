import React, { component, Component } from 'react'
import { UserAccessContext } from '../context/UserAccessContext'

export default class Profile extends Component {
   static contextType = UserAccessContext;
   constructor(props) {
      super(props);
      this.state = {}
   }

   handleOnClick = () => {
      this.context.logout()
   }

   render() {
      return (
         <span>
            Profile
            <button onClick={this.handleOnClick}>Keluar !!!</button>
         </span>
      )
   }
}
import {Component } from "react";
class Message extends Component{
   render(){
     return <h1>message: {this .props.messagecontent} and its code: {this.props. messagecode} 
</h1>
   }
}

export default Message;
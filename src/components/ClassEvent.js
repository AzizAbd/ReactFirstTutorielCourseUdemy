
import { Component} from "react";
class ClassEvent extends Component{
    handleClick(){
        console.log('class basd event handling')
    }
    render(){
        return(
            <div>
                this is a class based Component
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassEvent;
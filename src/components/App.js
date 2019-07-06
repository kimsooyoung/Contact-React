import React from 'react';
import Contact from './Contact';
import { runInThisContext } from 'vm';

class Couter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
        this.handleClick = this.handleClick.bind(this);        
    }
    handleClick(){
        this.setState({value: this.state.value + 1});
    }
    render(){
        return(
            <div>
                {this.state.value}
                <button onClick={this.handleClick}>Press</button>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({value: this.state.value + 1});
    }
    render(){
        return (
            <div>
                {/* <Couter/> */}
                <Contact/>
            </div>
        )
    }
}

export default App;
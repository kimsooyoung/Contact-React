import React from 'react';

export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(e){
        let tempContact = [];
        tempContact[e.target.name] = e.target.value;
        this.setState(tempContact);        
    }
    handleClick(){
        const createdContact = {
            name: this.state.name,
            phone: this.state.phone
        }
        this.props.onCreate(createdContact);
        this.setState({
            name: '',
            phone: ''
        })
        this.nameInput.focus();
    }
    handleKeyPress(e) {
        if(e.charCode === 13){
            this.handleClick();
        }
    }
    render(){
        return(
            <div>
                <h2>
                    Create Contact
                </h2>
                <p>
                    <input 
                        type='text' 
                        placeholder='name' 
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        ref={ (ref) => {this.nameInput = ref }}
                    ></input>
                    <input 
                        type='text' 
                        placeholder='phone'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    ></input>
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}

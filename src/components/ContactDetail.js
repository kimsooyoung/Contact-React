import React from 'react';

export default class ContactDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(e) {
        let tempContact = [];
        tempContact[e.target.name] = e.target.value;
        this.setState(tempContact);
    }
    handleToggle() {
        if(!this.state.isEdit){
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            })
        }else{
            this.props.onEdit(this.state.name, this.state.phone);
        }
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    handleKeyPress(e) {
        if(e.charCode === 13){
            this.handleToggle();
        }
    }
    render(){
        let defaultName = 'Not Selected';
        let article = null;
        if(this.props.contact === undefined){
            article = defaultName;
        }else{
            if(this.state.isEdit === false){
                article = (<span>
                    <p>{this.props.contact.name}</p>
                    <p>{this.props.contact.phone}</p>
                    </span>);
            }else{
                article = <div>
                    <p>
                        <input 
                            type='text' 
                            name='name'
                            placeholder='name' 
                            value={this.state.name}
                            onChange={this.handleChange}>
                        </input>
                    </p>
                    <p>
                        <input 
                            type='text' 
                            name='phone'
                            placeholder='phone' 
                            value={this.state.phone}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}>
                        </input>
                    </p>
                </div>
            }
        }
        return(
            <div>
                <h2>Detail</h2>
                {article}
                <p>
                    <button onClick={this.handleToggle}>{this.state.isEdit ? 'OK':'Edit'}</button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        )
    }
}
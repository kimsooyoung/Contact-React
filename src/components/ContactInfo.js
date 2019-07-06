import React from 'react';

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick}>
                <div style={{textDecoration: 'underline'}}>{this.props.contact.name}</div>
                {/* {this.props.contact.phone} */}
            </div>
        )
    }
}
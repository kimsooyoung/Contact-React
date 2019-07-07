import React from 'react';

export default class ContactDetail extends React.Component{
    render(){
        let defaultName = 'Not Selected';
        let article = null;
        if(this.props.contact === undefined){
            article = defaultName;
        }else{
            article = <span>{this.props.contact.name} {this.props.contact.phone}</span>;
        }
        return(
            <div>
                <h2>Detail</h2>
                {article}
                <p>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        )
    }
}
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';
import { runInThisContext } from 'vm';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: -1,
            keyword: '',
            contactData: [
                {name:'Park', phone: '01056584585'},
                {name:'Lee', phone: '01077845684'},
                {name:'Kim', phone: '01086890259'},
                {name:'Hwang', phone: '01047170259'}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit   = this.handleEdit.bind(this);
    }
    handleChange(e){
        this.setState({keyword: e.target.value})
    }
    handleClick(i){
        this.setState({selected: i});
    }
    handleCreate(contact){
        this.setState({
            contactData: update(this.state.contactData, {
                $push: [contact] 
            })
        });
    }
    handleRemove(){
        if(this.state.selected < 0){
            return;
        }
        this.setState({
            contactData: update(this.state.contactData, {
                $splice: [[this.selected, 1]] 
            }),
            selected: 0
        });
    }
    handleEdit(name, phone){
        this.setState({
            contactData: update(this.state.contactData, {
                [this.state.selected]: {
                    name: { $set: name },
                    phone: { $set: phone }
                }
            })
        })
    }

    render(){
        const mapToContact = (data) =>{
            data.sort((a,b)=>{
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
               });
            // data.sort();
            console.log(data);
            data = data.filter(
                (contact) => {
                    return (contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1) ||
                    (contact.phone.indexOf(String(this.state.keyword)) > -1);
                }
            );
            return data.map((e, i)=>{
                return <ContactInfo contact={e} key={i}
                onClick={()=>this.handleClick(i)}></ContactInfo>
            });
        };
        return (
            <div>
                <h1>Contact</h1>
                <input name="keyword" placeholder="Search"
                value={this.state.keyword}
                onChange={this.handleChange}
                />
                {mapToContact(this.state.contactData)}
                <ContactDetail
                    contact={this.state.contactData[this.state.selected]}
                    onRemove={this.handleRemove}
                />
                <ContactCreate onCreate={this.handleCreate}/>
            </div>
        )
    }
}
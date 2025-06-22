import { Component } from "react";

class PhoneList extends Component{

    render() {

    
        return (
            
            <ul>
                {this.props.contacts.map(({id, name, number}) => {
                    return <li key={id}>
                        <p>{name}: {number}</p>
                        <button onClick={() => {this.props.handleDelete(id)}}>Delete</button>



                    </li>
                })}


                
            </ul>
            
        )
    }
}


export default PhoneList
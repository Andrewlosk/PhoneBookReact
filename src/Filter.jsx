import { Component } from "react";


class Filter extends Component{
    render() {
        return (
            <>
            <h3>Find your contacts by name</h3>
            
            <input name="filter" type="text" onChange={this.props.filterFn} />
            </>
        )
    }
}


export default Filter
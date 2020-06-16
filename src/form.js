import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             companyName : '',
             companyWebsite : '',
             Goods : '',
             lga : '',
             state : '',
             address : '',
             firstName : '',
             lastName : '',
             phoneNumber : '',
             email : ''

        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>Company Name</label>
                    <input type="text" placeholder="typye your Company below" name="company Name" required="true" title="anything is allow" />
                    <label>Company Name</label>
                    <input type="text" placeholder="typye your Company below" name="company Name" required="true" title="anything is allow" />
                    <label>Company Name</label>
                    <input type="text" placeholder="typye your Company below" name="company Name" required="true" title="anything is allow" />
                    <label>Company Name</label>
                    <input type="text" placeholder="typye your Company below" name="company Name" required="true" title="anything is allow" />
                    <label>Company Name</label>
                    <input type="text" placeholder="typye your Company below" name="company Name" required="true" title="anything is allow" />
                </form>
            </div>
        )
    }
}

export default form


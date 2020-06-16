import React, { Component } from 'react'
import Upper from './Upper'
import Group from './images/Group.png'
import carrier from './images/carrier.png'
import './App.css'
import { MdNearMe} from 'react-icons/md';
import Clock from './images/Clock.png'
import pickup from './images/pickup.png'
import { GiPencil } from "react-icons/gi";
import {GrCheckmark } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import logistics from './images/logistics.png'


export class Home extends Component {
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
             email : '',
             value : 'give a descriptive address of your precise location',

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
 

        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit(event) {
        alert('i just submitted : ' + this.state);
        event.preventDefault();
      }
    
    render() {
        return (
            <div className="Home">

        <nav className="navigate">
        <div className="inner-content">
        <img src={logistics} alt="logo" className="logo"/>
            <ul className="Nav-list">
              <li className="Navbar-Links">
               
                <a href="./#ship" exact className="links">How it works</a>
                </li>
              <li className="Navbar-Links">
                <a href="./#form" className="links">Send parcel</a></li> 
              <li className="Navbar-Links">
              <a href="./#Upper" className="links">Track your Parcel</a></li>
              <li className="Navbar-Links">
               <a href="./#footer" className="links">Contact Us</a>
               </li> 
            </ul>
      </div>
      </nav>
      {/* </header> */}
    {/* // </div> */}
                <Upper />
                <img src={Group} alt="vehicle" className="vehicle-One"/>
                   <div  className="Ship-container" id="ship">
                       <span className="align"><MdNearMe className="arrow"/><p className="Ship">SHIP WITH US </p></span>
                   <h4 className="ship-content">Ship with the peace of mind that a faster and safer way to move <br/> goods is always available with <span className="bfl">BFL</span>Logistics.</h4>
            
                     <span className="lined">
                   <img src={carrier} alt="carrier" className="carrier"/>
                    <img src={Clock} alt="Clock" className="clock" />
                    <img src={pickup} alt="pickup" className="pickup"/>
                   </span>
                   <hr className="hori-line"/>
                    <div>
                        <span className="flex-container">
                            <p className="flex">PAY ON DELIVERY</p>
                            <p className="flex">REAL TIME TRACKING</p>
                            <p className="flex">PICK UP / DROP OFF SERVICE</p>
                            </span>
                            <span className="flex-container">
                            <h4 className="flex sizing">get paid for your Goods with our world-class-pay-on-deliver service</h4>
                            <h4 className="flex sizing move">Have peace offf mind with real tracking</h4>
                            <h4 className="flex sizing move">Save time in traffic with pick-off and drop-off services</h4>
                            </span>
                            <div className="sender-container">
                                <span className="sender"><GiPencil className="Pencil"/><p className="sender-content">JOIN OUR SATISFIED SENDER</p></span>
                                <h6 className="form-sender">Fill the form below to join our satisfied sender</h6>
                                <p className="process">
                                    <h2 className="process-counter">1</h2>
                                    <h2 className="process-counter-two">2</h2>
                                    <h2 className="process-counter-two">3</h2>
                                    <h2 className="process-counter-two">4</h2>
                                    <h2 className="process-counter-done"><GrCheckmark /></h2>
                                   
                                </p>
                                <p className="content-container">
                                     <h2 className="process-content"> Sender Information</h2>
                                     <h2 className="process-content contain"> ben-flo plan details</h2>
                                    <h2  className="process-content "> Trader key contact</h2>
                                    <h2  className="process-content "> Review and confirmation</h2>
                                    <h2 className="process-content"> Successful Registration</h2>
                                </p>
                            </div>
                            <form className="form-container" onSubmit={this.handleSubmit} id="form">
                                <p className="trade">1: TRADE INFORMATION</p>
                                <p className="required">Required field</p>
                                <hr className="hr"/>
                    <label className="form-input">Pickup Address: <br />
                    <input type="text" placeholder="typye your Company name" name="company Name" required="true" title="anything is allow" onChange={this.handleChange}  className="inputer" />
                    </label> <br />
                    <label className="form-input">Sender's Name <br />
                    <input type="text" placeholder="typye your Company url" name="company Website" required="true" title="anything is allow" onChange={this.handleChange} className="inputer" />
                    </label> <br />
                    <label className="form-input">item Description <br />
                    <select className="selecter">
                        <option  selected value=""></option>
                        <option value="grapefruit">Files</option>
                         <option value="lime">Eatables</option>
                        <option value="coconut">Cosmetics</option>
                        <option value="mango">Wears</option>
                        onChange={this.handleChange}
                        value={this.state.value} 
                        
</select> <br />
                    </label>
                    <label className="form-input">State <br />
                    <select className="select">
                        <option  selected value=""></option>
                        <option value="grapefruit">Lagos</option>
                         <option value="lime">Abuja</option>
                         <option value="coconut">Ogun State</option>
                         <option value="mango">Imo</option>
                         onChange={this.handleChange}
                         value={this.state.value} 
</select>
</label>
<label className="form-inputs">LGA <br />
                    <select className="selects">
                        <option  selected value=""></option>
                        <option value="grapefruit">Alimosho lga</option>
                         <option value="lime">yaba lga</option>
                         <option value="coconut">Agege lga</option>
                         <option value="mango">Ikeja lga</option>
                         onChange={this.handleChange}
</select>

                    </label> <br />
                    <label className="form-inputer">Street Address <br/>
                    <textarea value={this.state.value} onChange={this.handleChange} className="text"/>
                    <hr className="new-hr"/>
                    </label>
                    <p className="point-person">MANAGEMENT POINT PERSON</p>
                    <div className="personal">
                    <label className="">First Name <br />
                    <input type="text" placeholder=" your name" name="company Name" required="true" title="anything is allow" onChange={this.handleChange}  className="personal-info" />
                    </label> <br />
                    <label className="">Last Name <br />
                    <input type="text" placeholder="your last name" name="company Name" required="true" title="anything is allow" onChange={this.handleChange}  className="personal-info" />
                    </label> <br />
                    <label className="">Phone Number <br />
                    <input type="text" placeholder="+2340000000000" name="company Name" required="true" title="anything is allow" onChange={this.handleChange}  className="personal-info" />
                    </label> <br />
                    <label className="">Email<br />
                    <input type="text" placeholder="@gmail.com" name="company Name" required="true" title="anything is allow" onChange={this.handleChange}  className="personal-info" />
                    </label> <br />
                    </div>
                    <button className="btn">NEXT</button>
                </form> 
                    </div>
                    <footer className="footer-container" id="footer">
                <p className="visit">Visit Us</p>
               <span className="same-line"><p className="Time">Monday to Fridat 8:30am to 8:00pm</p> <p className="email">For enquire: info@bfl.com.ng</p><p className="country">Lagos-Nigeria</p></span> 
                <span className="icons">
                   <a href="https://web.facebook.com" className=".anchor"><FaFacebook/> </a> 
                    <a href="https://web.instagram.com" className=".anchor"><FaInstagram/></a>
                     <a href="https://web.twitter.com" className=".anchor"><AiFillTwitterCircle /></a>
                      <a href="https://web.google.com" className=".anchor"><FaGooglePlus/></a>
                     <a href="https://web.linkedin.com" className=".anchor"> < AiFillLinkedin/></a>
                     </span>
                     <hr className="footer-line"/>
                     <span className="lastly">
                     <a href="unknown" className="terms">Terms and conditions</a>
                         <a href="unknown" className="privacy">Privacy Policy</a>
                         <label className="copyright">Copyright@<span className="benflo">BenFlo</span> Logistics 2020. All Right Reserved</label>
                     </span>
            </footer>
                    
          </div>
           
            </div>
            
         
        )
    }
}

export default Home

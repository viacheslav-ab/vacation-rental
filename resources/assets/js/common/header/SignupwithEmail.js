import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';


  import 'react-toastify/dist/ReactToastify.css';
class SignupwithEmail extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      first_name : '',
      last_name : '',
      phone_number : '',
      email : '',
      password : '',
      password_confirmation : '',
      birthday_month : '',
      birthday_day : '',
      birthday_year : '',
      user_type : 'guest',
      agree_tac : '',
      is_signup_success : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }
  handleChange(e){

    let target = e.target;
    let value = target.type === 'checkbox'  ? target.checked : target.value;
    let name = target.name;
    console.log(name, value)
    this.setState({
      [name]: value
    });
  }
  onSignupSubmit(e){
    e.preventDefault();
    console.log(this.state)
    if(this.state.agree_tac == true){
      axios.post('/ajax/signup', this.state)
          .then(response => {
              if(response.data.success == true){
                //  location.href='/'
                this.props.onSuccess()

              }
              else{
                toast.error("Signup Failed", {
                    position: toast.POSITION.TOP_RIGHT
                  });
              }
                  
          })
          .catch(error => {
              console.log(error)
          })
    }
    else{
      toast.error("Please Agree Terms Of Services!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
    render(){
        return(
		<div>	
				<div className="modal-header">
                            <h5 className="modal-title">Sign In</h5>
                        </div>
		<div className="panel top-home bor-none">
       
        <div className="  panel-body   bor-none   clearfix">
          <i className="icon-remove-1 rm_lg"   onClick={this.props.onChangeForm}/>
   
          <form method="POST"  onSubmit={this.onSignupSubmit} acceptCharset="UTF-8" className="signup-form vr_form ng-pristine ng-valid" data-action="Signup" id="signup_email_form" noValidate="novalidate"><input name="_token" type="hidden" defaultValue="nL35ucJMZqYrYVBLbFxgOOOkYiNzYYP8nPmj7RGQ" className="tooltipstered" />
            <div className="signup-form-fields">
              <input id="signup_from_modal" name="from" type="hidden" defaultValue="email_signup" className="tooltipstered" />
              <input id="access_code_modal" name="access_code" type="hidden" className="tooltipstered" />
              <input id="ip_address_modal" name="ip_address" type="hidden" defaultValue="188.43.224.141" className="tooltipstered" />
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="control-group row-space-2 field_ico" id="inputFirst">
                    <div className="pos_rel">
                      <i className="icon-users" />
                      <input required className="decorative-input name-icon input_new tooltipstered" placeholder="First name" name="first_name" type="text" onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="control-group row-space-2 field_ico" id="inputLast">
                    <div className="pos_rel">
                      <i className="icon-users" />
                      <input required className="decorative-input inspectletIgnore name-icon input_new tooltipstered" placeholder="Last name" name="last_name" type="text" onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="control-group row-space-2 field_ico" id="inputPhone">
                    <div className="pos_rel">
                      <i className="icon-phone" />
                      <input required className="decorative-input inspectletIgnore name-phone name-icon input_new tooltipstered" placeholder="Phone Number"  name="phone_number" type="tel" onChange={this.handleChange} />
                      <span id="valid-msg" className="hide pull-right mb-3 valid-msg_modal">✓ Valid</span>
                      <span id="error-msg" className="hide pull-right mb-3 error-msg_modal">Invalid number</span>
                      <input id="phone_code_modal" name="phone_code" type="hidden" defaultValue="us" className="tooltipstered" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="control-group row-space-2 field_ico" id="inputEmail">
                    <div className="pos_rel">
                      <i className="icon-envelope" />
                      <input required className="decorative-input inspectletIgnore name-mail name-icon input_new tooltipstered" placeholder="Email address"  name="email" type="email" onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="control-group row-space-2 field_ico" id="inputPassword">
                    <div className="pos_rel">
                      <i className="icon-lock" />
                      <input required className="decorative-input inspectletIgnore name-pwd name-icon input_new tooltipstered" placeholder="Password"  data-hook="user_password" name="password" type="password" onChange={this.handleChange} />
                    </div>
                    <div data-hook="password-strength" className="password-strength hide" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="control-group row-space-2 field_ico" id="inputPasswordConfirmation">
                    <div className="pos_rel">
                      <i className="icon-lock" />
                      <input required className="decorative-input inspectletIgnore name-pwd-confirmation name-icon input_new tooltipstered" placeholder="Confirm Password"  data-hook="user_password_confirmation" name="password_confirmation" type="password" onChange={this.handleChange}/>
                    </div>
                    <div data-hook="password-strength" className="password-strength hide" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="control-group row-space-top-3 row-space-2 birthday-label-container">
                    <p className="h4 row-space-1 title">Birthday</p>
                    <p className="let_sp desc">You must be 18+ to register.</p>
                  </div>
                  <div className="control-group row-space-1 " id="inputBirthday" >
                  <div className="control-group row-space-2 calander_new tooltipstered">
                    <label className="select month drp_dwn_cng">
                      <i className="icon-chevron-down" />
                      <select className="birthday_group" onChange={this.handleChange}   name="birthday_month"><option value>Month</option><option value={1}>January</option><option value={2}>February</option><option value={3}>March</option><option value={4}>April</option><option value={5}>May</option><option value={6}>June</option><option value={7}>July</option><option value={8}>August</option><option value={9}>September</option><option value={10}>October</option><option value={11}>November</option><option value={12}>December</option></select>
                    </label>
                    <label className="select day month drp_dwn_cng">
                      <i className="icon-chevron-down" />
                      <select className="birthday_group" onChange={this.handleChange}   name="birthday_day"><option value>Day</option><option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option><option value={10}>10</option><option value={11}>11</option><option value={12}>12</option><option value={13}>13</option><option value={14}>14</option><option value={15}>15</option><option value={16}>16</option><option value={17}>17</option><option value={18}>18</option><option value={19}>19</option><option value={20}>20</option><option value={21}>21</option><option value={22}>22</option><option value={23}>23</option><option value={24}>24</option><option value={25}>25</option><option value={26}>26</option><option value={27}>27</option><option value={28}>28</option><option value={29}>29</option><option value={30}>30</option><option value={31}>31</option></select>
                    </label>
                    <label className="select year month drp_dwn_cng">
                      <i className="icon-chevron-down" />
                      <select className="birthday_group" onChange={this.handleChange}   name="birthday_year"><option value>Year</option><option value={2018}>2018</option><option value={2017}>2017</option><option value={2016}>2016</option><option value={2015}>2015</option><option value={2014}>2014</option><option value={2013}>2013</option><option value={2012}>2012</option><option value={2011}>2011</option><option value={2010}>2010</option><option value={2009}>2009</option><option value={2008}>2008</option><option value={2007}>2007</option><option value={2006}>2006</option><option value={2005}>2005</option><option value={2004}>2004</option><option value={2003}>2003</option><option value={2002}>2002</option><option value={2001}>2001</option><option value={2000}>2000</option><option value={1999}>1999</option><option value={1998}>1998</option><option value={1997}>1997</option><option value={1996}>1996</option><option value={1995}>1995</option><option value={1994}>1994</option><option value={1993}>1993</option><option value={1992}>1992</option><option value={1991}>1991</option><option value={1990}>1990</option><option value={1989}>1989</option><option value={1988}>1988</option><option value={1987}>1987</option><option value={1986}>1986</option><option value={1985}>1985</option><option value={1984}>1984</option><option value={1983}>1983</option><option value={1982}>1982</option><option value={1981}>1981</option><option value={1980}>1980</option><option value={1979}>1979</option><option value={1978}>1978</option><option value={1977}>1977</option><option value={1976}>1976</option><option value={1975}>1975</option><option value={1974}>1974</option><option value={1973}>1973</option><option value={1972}>1972</option><option value={1971}>1971</option><option value={1970}>1970</option><option value={1969}>1969</option><option value={1968}>1968</option><option value={1967}>1967</option><option value={1966}>1966</option><option value={1965}>1965</option><option value={1964}>1964</option><option value={1963}>1963</option><option value={1962}>1962</option><option value={1961}>1961</option><option value={1960}>1960</option><option value={1959}>1959</option><option value={1958}>1958</option><option value={1957}>1957</option><option value={1956}>1956</option><option value={1955}>1955</option><option value={1954}>1954</option><option value={1953}>1953</option><option value={1952}>1952</option><option value={1951}>1951</option><option value={1950}>1950</option><option value={1949}>1949</option><option value={1948}>1948</option><option value={1947}>1947</option><option value={1946}>1946</option><option value={1945}>1945</option><option value={1944}>1944</option><option value={1943}>1943</option><option value={1942}>1942</option><option value={1941}>1941</option><option value={1940}>1940</option><option value={1939}>1939</option><option value={1938}>1938</option><option value={1937}>1937</option><option value={1936}>1936</option><option value={1935}>1935</option><option value={1934}>1934</option><option value={1933}>1933</option><option value={1932}>1932</option><option value={1931}>1931</option><option value={1930}>1930</option><option value={1929}>1929</option><option value={1928}>1928</option><option value={1927}>1927</option><option value={1926}>1926</option><option value={1925}>1925</option><option value={1924}>1924</option><option value={1923}>1923</option><option value={1922}>1922</option><option value={1921}>1921</option><option value={1920}>1920</option><option value={1919}>1919</option><option value={1918}>1918</option><option value={1917}>1917</option><option value={1916}>1916</option><option value={1915}>1915</option><option value={1914}>1914</option><option value={1913}>1913</option><option value={1912}>1912</option><option value={1911}>1911</option><option value={1910}>1910</option><option value={1909}>1909</option><option value={1908}>1908</option><option value={1907}>1907</option><option value={1906}>1906</option><option value={1905}>1905</option><option value={1904}>1904</option><option value={1903}>1903</option><option value={1902}>1902</option><option value={1901}>1901</option><option value={1900}>1900</option><option value={1899}>1899</option><option value={1898}>1898</option></select>
                    </label>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="control-group row-space-top-3 row-space-2 usertype-label-container">
                    <p className="h4 row-space-1 title">I'm interested in : </p>
                  </div>
                  <div className="control-group row-space-2 field_ico usertype-input-container tooltipstered" id="inputUserType">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <input type="radio" name="user_type" id="box-1_modal"   value="host" className="user_type_group" onChange={this.handleChange}  checked={this.state.user_type === "host"}  />
                        <label htmlFor="box-1_modal">Listing a Vacation Rental</label>
                      </div>
                      <div className="col-12 col-md-4">
                        <input type="radio" name="user_type" id="box-2_modal"   value="guest" className="user_type_group" checked={this.state.user_type === "guest"}  onChange={this.handleChange} />
                        <label htmlFor="box-2_modal">Booking a Vacation Rental</label>
                      </div>
                      <div className="col-12 col-md-4"> 
                        <input type="radio" name="user_type" id="box-3_modal"   value="both" className="user_type_group" checked={this.state.user_type === "both"}  onChange={this.handleChange} />
                        <label htmlFor="box-3_modal">Both</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div id="tos_outside" className="row-space-top-2 chk-box tos-container">
                <div className="dis_tb control-group tooltipstered">
                  <div className="dis_cell">
                    <input type="checkbox" name="agree_tac" onChange={this.handleChange}   required />
                  </div>
                  <div className="dis_cell">
                    <small>
                      By signing up, I agree to Vacation.Rentals's <a href="https://www.vacation.rentals/legal/terms-of-service" data-popup="true">Terms of Service</a>, <a href="https://www.vacation.rentals/legal/privacy-policy" data-popup="true">Privacy Policy</a>.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <input className="btn btn-primary btn-block btn-large pad-top tooltipstered" id="user-signup-btn_modal" type="submit" defaultValue="Sign Up" />
          </form>
        </div>
      
      </div>
      </div>
	  )
    }
}

export default SignupwithEmail
import React from 'react'

class SigninForm extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
          user_email : '',
          user_pass : '',
		  is_signup_form: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.onLoginSubmit = this.onLoginSubmit.bind(this)
		this.handlesingin_form = this.handlesingin_form.bind(this)
		this.onForgotPasswordSubmit = this.onForgotPasswordSubmit.bind(this)
    }
    handleChange(e){
      e.preventDefault();
      let target = e.target;
      let name = target.name;
      let value = target.value;
      this.setState({
        [name] : value
      })
    }
    onLoginSubmit(e){
      e.preventDefault();
      // console.log(this.state)
      let {user_email, user_pass} = this.state
      this.props.onLogin(user_email, user_pass)
    }
	onForgotPasswordSubmit(e){
      e.preventDefault();
      // console.log(this.state)
      let {user_email} = this.state
      this.props.onForgotPassword(user_email)
    }
	handlesingin_form() {
        this.setState({
            is_signup_form: !this.state.is_signup_form
        })
    }
	
	render() {
		
		let is_signup_form = this.state.is_signup_form;
		let is_singin_form = !is_signup_form;
			
        if(this.props.visible == true) {
			
			if (is_singin_form) {
				return(
				<div>	
				<div className="modal-header">
                            <h5 className="modal-title">Forgot Password</h5>
                        </div>
				<div className="panel top-home">
					<div className="panel-body bor-none  ">
					  <div className="clearfix" />
					  <form method="POST" onSubmit={this.onForgotPasswordSubmit} acceptCharset="UTF-8" className="vr_form signup-form login-form ng-pristine ng-valid" id="login_form_modal" data-action="Signin" noValidate="novalidate">
						<input name="_token" id="token_modal" type="hidden" className="tooltipstered" />
						<input id="login_from_modal" name="from" type="hidden" defaultValue="email_login" className="tooltipstered" />
						<div className="control-group row-space-2 field_ico">
						  <div className="pos_rel">
							<i className="icon-envelope" />
							<input className="decorative-input inspectletIgnore name-icon signin_email tooltipstered" placeholder="Email address" id="signin_email_modal" name="user_email" onChange={this.handleChange} type="email"  />
						  </div>
						</div>
						<div className="clearfix row-space-3">
						  
						</div>
						<input className="btn btn-primary btn-block btn-large pad-top btn_new user-login-btn tooltipstered" id="user-login-btn_modal" type="submit" defaultValue="Log In" />
					  </form>
					</div>
				  </div>
				  </div>
				  
					
				)
			} else {
				return(
				<div>	
				<div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                        </div>
				<div className="panel top-home">
				
					<div className="panel-body bor-none  ">
					  
					  
						
					  <a href="/login/facebook" className="btn icon-btn btn-block btn-large row-space-1 btn-facebook font-normal pad-top mr1">
						<span><i className="icon icon-facebook" /></span>
						<span>Log in with Facebook</span>
					  </a>  
					  <a href="/login/google" className="btn btn-danger icon-btn btn-block btn-large row-space-1 btn-google font-normal pad-top mr1">
						<span><i className="icon icon-google-plus" /></span>
						<span>Log in with Google</span>
					  </a>
					  {/* <a href="/login/linkedin" className="li-button li-blue btn icon-btn btn-block btn-large row-space-1 btn-linkedin mr1">
						<span><i className="icon icon-linkedin" /></span>
						<span>Log in with LinkedIn</span>
					  </a>  */}
					  <div className="signup-or-separator">
						<span className="h6 signup-or-separator--text">or</span>  <hr />
					  </div>
					  <div className="clearfix" />
					  <form method="POST" onSubmit={this.onLoginSubmit} acceptCharset="UTF-8" className="vr_form signup-form login-form ng-pristine ng-valid" id="login_form_modal" data-action="Signin" noValidate="novalidate">
						<input name="_token" id="token_modal" type="hidden" className="tooltipstered" />
						<input id="login_from_modal" name="from" type="hidden" defaultValue="email_login" className="tooltipstered" />
						<div className="control-group row-space-2 field_ico">
						  <div className="pos_rel">
							<i className="icon-envelope" />
							<input className="decorative-input inspectletIgnore name-icon signin_email tooltipstered" placeholder="Email address" id="signin_email_modal" name="user_email" onChange={this.handleChange} type="email"  />
						  </div>
						</div>
						<div className="control-group row-space-3 field_ico">
						  <div className="pos_rel">
							<i className="icon-lock" />
							<input className="decorative-input inspectletIgnore name-icon signin_password tooltipstered" placeholder="Password" id="signin_password_modal" data-hook="signin_password" name="user_pass" onChange={this.handleChange} type="password"  />
						  </div>
						</div>
						<div className="clearfix row-space-3">
						  <label htmlFor="remember_me2" className="checkbox remember-me">
							<input id="remember_me2_modal" className="remember_me" name="remember_me" type="checkbox" defaultValue={1} /> Remember me
						  </label>
						  <a href="javascript:void(0);" className="forgot-password forgot-password-popup link_color pull-right h5" onClick={this.handlesingin_form}>Forgot password?</a>
						</div>
						<input className="btn btn-primary btn-block btn-large pad-top btn_new user-login-btn tooltipstered" id="user-login-btn_modal" type="submit" defaultValue="Log In" />
					  </form>
					</div>
				  </div>
				  </div>
				)
			}
			
			
		
        } else {
			return(
				<div></div>
			)
		}
	}
}

export default SigninForm
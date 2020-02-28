import React from 'react';
import Modal from 'react-responsive-modal';
import './header.css';
import SignupForm from './SignupForm'
import SigninForm from './SigninForm';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from 'react-responsive-modal';
const metas = document.getElementsByTagName('meta');
class Navigation extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            signup_visible: false,
            is_signup_form: true,
            isLogedIn: metas['isLogedin'].content,
            userName: metas['userName'].content,
            is_signup_success : false
		}
        this.signupmodalShowHandler = this.signupmodalShowHandler.bind(this)
        this.signinmodalShowHandler = this.signinmodalShowHandler.bind(this)
        this.singupformShowHandler = this.singupformShowHandler.bind(this)
        this.handlesingin_form = this.handlesingin_form.bind(this)
        this.updateLoginStatus = this.updateLoginStatus.bind(this)
        this.onSignupSuccess = this.onSignupSuccess.bind(this)
    }
    componentDidMount() {
        if(metas['isLogedin'].content == 'true'){
        }
        else{
            // this.setState({
            //     is_signup_success : true
            // }, ()=>{
            //     console.log('please try to login')
            // })
        }
    }
    updateLoginStatus(){
        setTimeout(this.updateLoginStatus, 5000)
        axios.post('/ajax/updateLoginStatus')
      }
    signupmodalShowHandler(e) {
        this.setState({
            is_signup_form: true,
            signup_visible: !this.state.signup_visible
        })
    }
    signinmodalShowHandler(e) {
        this.setState({
            is_signup_form: false,
            signup_visible: !this.state.signup_visible
        })
    }
    singupformShowHandler(e) {
        this.setState({
            is_signup_modal: false,
            is_signup_form: false,
            signup_visible: !this.state.signup_visible,
        })
    }
    handlesingin_form() {
        this.setState({
            is_signup_form: !this.state.is_signup_form
        })
    }
    onLoginHandler(email, password) {
        console.log(email, password)
        const credential = {
            email: email,
            password: password
        }
        axios.post('/ajax/login', credential)
            .then(response => {
                if (response.data.success == true) {
                    metas['isLogedin'].setAttribute("content", 'true')
                    metas['userName'].setAttribute("content", response.data.userinfo.first_name)
                    toast.success("Login Success", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    location.href='/'
                }
                else {
                    toast.error("Login Failed", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }

            })
            .catch(error => {
                console.log(error)
            })

    }
	onForgotPasswordHandler(email) {
        console.log(email)
        const credential = {
            email: email,
        }
        axios.post('/ajax/forgot-password', credential)
            .then(response => {
                if (response.data.success == true) {
                    //metas['isLogedin'].setAttribute("content", 'true')
                    //metas['userName'].setAttribute("content", response.data.userinfo.first_name)
                    toast.success("Please check your mail box", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    //location.href='/'
                }
                else {
                    toast.error("Email address does not match", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }

            })
            .catch(error => {
                console.log(error)
            })

    }
	
    onSignupSuccess(){
        this.setState({
            signup_visible : false,
            is_signup_success : true
          })
    }
    render() {
        if (this.state.isLogedIn == 'true') {
            return (
                <div className="navik-header header-shadow">
                    <div className="container">
                        <div className="navik-header-container">
                            <div className="logo" data-mobile-logo="https://res.cloudinary.com/vacation-rentals/image/upload/v1555704142/images/logo.png" data-sticky-logo="https://res.cloudinary.com/vacation-rentals/image/upload/v1555704142/images/logo.png">
                                <a href='/'><img src="https://res.cloudinary.com/vacation-rentals/image/upload/v1555704142/images/logo.png" alt="logo" width='100%' height = 'auto' /></a>
                            </div>
                            <div className="burger-menu">
                                <div className="line-menu line-half first-line" />
                                <div className="line-menu" />
                                <div className="line-menu line-half last-line" />
                            </div>
                            <nav className="navik-menu menu-caret menu-hover-4 submenu-top-border submenu-scale">
                                <ul>
                                    <li> <a href="/help">Help <span className="sr-only">(current)</span></a></li>
                                    <li className="submenu-right"><a href="/inbox">Mail <span className="sr-only">(current)</span></a>
                                        <ul>
                                            <li> <a href="/inbox" className="link-reset view-trips "> <span className=' text-black'>Messages</span><small>(View Inbox)</small></a></li>
                                            <li> <a href="/dashboard" className="link-reset view-trips "> <span className=' text-black'>Notifications</span><small>(View Dashboard)</small></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu-right"><a href="#"> Hi {this.state.userName}</a>
                                        <ul>
                                            <li><a className="dropdown-item menuitems" href="/dashboard">Dashboard</a></li>
                                            <li><a className="dropdown-item menuitems" href="/dashboard/rooms">Your Listings</a></li>
                                            <li><a className="dropdown-item menuitems" href="/dashboard/myprofile">Edit Profile</a></li>
                                            <li><a className="dropdown-item menuitems" href="/dashboard/myaccount">Account</a></li>
                                            <li><a className="dropdown-item menuitems" href="/dashboard/account_ba">BookingAutomation</a></li>
                                            <li><a className="dropdown-item menuitems" href="/dashboard/ba_update">Update</a></li>
                                            <div className="dropdown-divider" />
                                            <li><a href='/logout'>LogOut</a></li>
                                        </ul>
                                    </li>
                                    <li> <a href="/rooms/new">List your Home<span className="sr-only">(current)</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            let is_signup_form = this.state.is_signup_form;
            let is_singin_form = !is_signup_form;
            let modal_footer_text = <div className=" text-center">
                <hr />
                Already an Vacation.Rentals member? &nbsp;
                <a href="javascript:;" className="modal-link link-to-login-in-signup login-btn login_popup_head link_color" onClick={this.handlesingin_form}>
                    Log In
                </a>
            </div>
            let modal_label = 'Sign Up'
            if (is_singin_form) {
                modal_footer_text = <div className=" text-center"> 
                    Don’t have an account?
                <a href="javascript:void(0);" className="ml-1 link-to-signup-in-login login-btn link_color signup_popup_head" onClick={this.handlesingin_form}>
                        &nbsp;Sign Up </a>
                </div>
                modal_label = 'Sign In'
            }

            return (
                <div className="navik-header header-shadow">
                   
                    <div className="container">
                        <div className="navik-header-container">
                        <ToastContainer/>
                            <div className="logo" data-mobile-logo="https://res.cloudinary.com/vacation-rentals/image/upload/v1555704142/images/logo.png" data-sticky-logo="https://res.cloudinary.com/vacation-rentals/image/upload/v1555704142/images/logo.png">
                                <a href='/'><img src="https://res.cloudinary.com/vacation-rentals/image/upload/v1555704142/images/logo.png" alt="logo" /></a>
                            </div>
                            <div className="burger-menu">
                                <div className="line-menu line-half first-line" />
                                <div className="line-menu" />
                                <div className="line-menu line-half last-line" />
                            </div>
                            <nav className="navik-menu menu-caret menu-hover-4 submenu-top-border submenu-scale">
                                <ul>
                                    <li>
                                        <a name="singin" href="javascript:;" onClick={this.signinmodalShowHandler}>Log In <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li>
                                        <a name="singup" href="javascript:;" onClick={this.signupmodalShowHandler}>Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="/help">Help <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li>
                                        <a href="/contactus">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" onClick={this.signinmodalShowHandler}>List your Home<span className="sr-only">(current)</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <SuccessModal open={this.state.is_signup_success} onClose={()=>this.setState({is_signup_success : false})} styles={{ modal : { padding : '0px'} }}>
        <div className="modal-content modal-newsletter">
          <form   method="post">
            <div className="modal-header">
              <div className="icon-box mx-auto">						
                <i className="fa fa-envelope-open-o" />
              </div>
            </div>
            <div className="modal-body text-center">
              <h4>Thank you for your registration</h4>	
              <p>Please check your email inbox to verify your account.</p>
              <p>If there is no new email, please check spam folder.</p>
               
            </div>
          </form>			
        </div>
                    </SuccessModal>  
                    <Modal open={this.state.signup_visible} onClose={()=>this.setState({signup_visible : false})} styles={{ modal : { padding : '0px'} }}>
                        <div className="modal-body">
                            <SignupForm visible={is_signup_form} onSignupSuccess={this.onSignupSuccess} />
                            <SigninForm visible={is_singin_form} onForgotPassword={(email) => this.onForgotPasswordHandler(email)} onLogin={(email, password) => this.onLoginHandler(email, password)} />
                        </div>
                        <div className="modal-footer">
                            {modal_footer_text}
                        </div>
                    </Modal>
                </div>






            );
        }

    }
}

export default Navigation;
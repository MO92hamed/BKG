import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import Logout from './Logout';

class Header extends Component{
	componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

    }
	
	render(){
		return(
			<header className="site-header header-transparent mo-left">
				
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix ">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
								<Link to={"./"} className="logo-1"><img src={require("../../images/logo-white3.png")} alt="" /></Link>
								<Link to={"./"} className="logo-2"><img src={require("./../../images/logo-white3.png")} alt="" /></Link> 
							</div>
							
							<button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									<Link to={"/register"} className="site-button-link white"><i className="ti-import m-r5 rotate90"></i> Sign In</Link>
									<Logout />									
									<Link to={"/add-event"} className="site-button radius-xl m-l10"><i className="fa fa-plus m-r5"></i> Add Event</Link>
								</div>
							</div>
							
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
								<ul className="nav navbar-nav">              
								<li><Link to={"/"}>Home </Link></li>
										
									
									<li><Link to={"/error-404"}>About Us </Link>
										{/*<ul className="sub-menu">
											<li><Link to={"/error-404"}>Error 404</Link></li>
											<li><Link to={"/About-us"}>About Us</Link></li>
										</ul>*/}
									</li>
									<li><Link to={"/searching"}>Places</Link></li>
										
									<li><Link to={"/blog"}>Blog</Link></li>
										
									
									<li><Link to={"/contact-us"}>Contact Us</Link></li>
								</ul>		
							</div>
						</div>
					</div>
				</div>
				
			</header>
		)
	}
}

export default Header;

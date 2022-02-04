import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import Header from './../Layout/Header';
import Footer	from './../Layout/Footer';

import Popcity from './../Element/popCity';
import Topplacesowl from './../Element/Topplacesowl';
import Userowl from './../Element/Userowl';
import Fromblog from './../Element/Fromblog';
import Tabservices from '../Element/Tabservices';
import Tabcontent from './../Element/Tabcontent';

var bnr = require('./../../images/main-slider/slide1.jpg');

var bnr2 = require('./../../images/background/bg1.jpg');
var bnr3 = require('./../../images/background/bg1.jpg');
var img1 = require('./../../images/background/bg1.jpg');

const locationBlog = [
	{
		image: require('./../../images/featured/pic5.jpg'),
		title: 'Japan',
	},
	{
		image: require('./../../images/featured/pic2.jpg'),
		title: 'United States',
	},
	{
		image: require('./../../images/featured/pic3.jpg'),
		title: 'England',
	},
	{
		image: require('./../../images/featured/pic4.jpg'),
		title: 'Korea',
	},
]

class Homepage extends Component{
	render(){
		return(
			
			<div className="page-wraper">
				<Header />

				<div className="page-content bg-white">

					<div className="dlab-bnr-inr dlab-bnr-inr-md" style={{backgroundImage:"url(" + bnr + ")", backgroundSize: "cover"}}>
			            <div className="container">
			                <div className="dlab-bnr-inr-entry align-m dlab-home">
								<div className="bnr-content">
									<h2><strong>Find & Get</strong> Your Dream Place.</h2>
								</div>
								
								<div className="dlab-tabs search-filter">
									<Tabcontent />
								</div>
								
								<div className="category-bx">
									<Link to={"./listing-left-sidebar"} className="category">
										<i className="flaticon-cart-of-ecommerce"></i>
										<p>carts</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-carrot"></i>
										<p>foods</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-hockey"></i>
										<p>candy</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-pill-capsule"></i>
										<p>medicine</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-birthday-cake"></i>
										<p>cake</p>
									</Link>
									<Link to={"/listing-left-sidebar"} className="category">
										<i className="flaticon-place"></i>
										<p>place</p>
									</Link>
								</div>
							</div>
			            </div>
			        </div>
					<div className="content-block">
						
						 <div className="section-full bg-white content-inner">
							<div className="container">
								<div className="section-head text-black text-center">
									<h2 className="box-title">Popular Cities</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
								</div>
								
								<Popcity />
								
							</div>
						</div>
						
						<Topplacesowl />

						<div className="section-full bg-gray-1 content-inner about-us overlay-black-dark owl-out" style={{backgroundImage:"url(" + bnr3 + ")", backgroundPosition: "top"}}>
						<div className="container max">
							<div className="section-head text-white text-left text-center">
								<h2 className="box-title">Best Things to Do in the City</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							
							<Tabservices />
							
						</div>
					</div>
						
						<div className="section-full content-inner bg-white">
						<div className="container">
							<div className="section-head text-center">
								<h2 className="box-title">How It Works?</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							<div className="row work-box-area">
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">1</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Choose Location</h3>
											<i className="flaticon-place"></i>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">2</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Pick Category</h3>
											<i className="flaticon-team"></i>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">3</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Explore Place</h3>
											<i className="flaticon-city-hall-1"></i>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">4</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Enjoy Your Day</h3>
											<i className="flaticon-city-hall"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					  </div>
						
					  <div className="section-full bg-white content-inner-2 bg-img-fix overlay-black-dark owl-out" style={{backgroundImage:"url(" + bnr2 + ")", backgroundPosition: "left bottom"}}>
						<div className="container">
							<div className="section-head text-center text-white">
								<h2 className="box-title">What Our Users Say</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							
							<Userowl />
							
						</div>
					 </div>

					      
					  <div className="section-full bg-white content-inner-2">
						<div className="container max">
							<div className="section-head text-black text-center">
								<h2 className="box-title">Top Featured Locations</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							<div className="row m-lr0 featured-style2-area">
								<div className="col-lg-6 col-md-12 p-lr0">
									<div className="row m-lr0">
										<div className="col-lg-12 col-md-12 col-sm-12 p-lr0">
											<div className="featured-bx style2">
												<div className="featured-media">
													<img src={require("./../../images/featured/pic1.jpg")} alt="" />
													<div className="featured-type featured-top">
														TOP <br/>FEATURED
													</div>
												</div>
												<div className="featured-content text-white">
													<h2 className="title"><Link to={"#"}>London</Link></h2>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 p-lr0">
									<div className="row m-lr0">
										{locationBlog.map((item, index) => (
											<div className="col-lg-6 col-md-6 col-sm-6 p-lr0" key={index}>
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={item.image} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={"#"}>{item.title}</Link></h2>
													</div>
												</div>
											</div>
										))}	
										
									</div>
								</div>
							</div>
						</div>
					 </div>
					
					    <div className="section-full bg-white content-inner">
							<div className="container">
								<div className="section-head text-black text-center">
									<h2 className="box-title">From The Blog</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
								</div>
								
								<Fromblog />
							</div>
						</div>		
						
					</div>	
				

				</div>	
				
				<Footer />
				
			</div>
			
			
		)
	}
	
}

export default Homepage;
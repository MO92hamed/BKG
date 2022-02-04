import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Aboutus from './../Element/Aboutus';


class Error extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				<Header />
				
				<div className="page-content bg-white">
					
					<Aboutus />
					
					<div className="section-full content-inner-2">
						<div className="container">
							<div className="">
								<div className="error-page">
									<span className="error-no">404</span>
									<span className="error-title">Page <br/> Not <br/> Found</span>
								</div>
								<div className="error-page-search">
									<div className="search-bx">
										<form role="search" method="post">
											<div className="input-group">
												<input name="text" type="text" className="form-control" placeholder="Search your keyword..." />
												<span className="input-group-btn">
													<button type="submit" className="site-button"><i className="fa fa-search"></i></button>
												</span> 
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<Footer  />
			</div>	
		)
	}
}


export default Error;
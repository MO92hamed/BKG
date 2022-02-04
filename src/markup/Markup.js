import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Addevent from './Pages/Addevent';
import Error from './Pages/Error';
import Register from './Pages/Register';
import Searching from './Pages/Searching';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import ScrollToTop from './Element/ScrollToTop';

const Markup = () =>{
	return (
		<>
			
			<div className="page-wraper">
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/home' exact component={Homepage} />
					<Route path='/add-event' exact component={Addevent} />
					<Route path='/error-404' exact component={Error} />
					<Route path='/contact-us' exact component={Contact} />
					<Route path='/register' exact component={Register} />
					<Route path='/searching' exact component={Searching} />
					<Route path='/blog' exact component={Blog} />
					
				</Switch>
			</div>
			<ScrollToTop />
		</>

	)
}

export default Markup;
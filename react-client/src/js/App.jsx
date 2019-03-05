import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {
	Address,
	Cart,
	Category,
	Department,
	Final,
	Home,
	Payment,
	Product,
	Register,
	Search,
	Signin,
	Summary
} from './views';

const App = () => (
	<Router>
		<div className="wrapper">
			<Route name="address" exact path="/address" component={Address} />
			<Route name="cart" exact path="/cart" component={Cart} />
			<Route name="category" exact path="/category" component={Category} />
			<Route name="department" exact path="/department/:id" component={Department} />
			<Route name="final" exact path="/final" component={Final} />
			<Route name="homepage" exact path="/" component={Home} />
			<Route name="payment" exact path="/payment" component={Payment} />
			<Route name="product" exact path="/product" component={Product} />
			<Route name="register" exact path="/register" component={Register} />
			<Route name="search" exact path="/search" component={Search} />
			<Route name="signin" exact path="/signin" component={Signin} />
			<Route name="summary" exact path="/summary" component={Summary} />
		</div>
	</Router>
);

export default App;

import React from 'react';

class Footer extends React.Component {
	state = {}

	componentDidMount() {
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}
	
	render() {
		return (
			<footer className="pt-4 my-md-5 pt-md-5 border-top">
				<div className="row">
					<div className="col-12 col-md">
						<img className="mb-2" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
						<small className="d-block mb-3 text-muted">© 2018 TShirtShop Co. Ltd.</small>
					</div>
					<div className="col-6 col-md">
						<h5>Questions?</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Help</a></li>
							<li><a className="text-muted" href="#">Track Order</a></li>
							<li><a className="text-muted" href="#">Returns</a></li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>What&apos;s In Store</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Women</a></li>
							<li><a className="text-muted" href="#">Men</a></li>
							<li><a className="text-muted" href="#">Product A-Z</a></li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>Follow Us</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Facebook</a></li>
							<li><a className="text-muted" href="#">Twitter</a></li>
							<li><a className="text-muted" href="#">YouTube</a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;

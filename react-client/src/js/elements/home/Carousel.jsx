import React from 'react';

class Carousel extends React.Component {
	state = {}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	render() {
		return (
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="/assets/imgs/slide2.jpg?v=3" className="d-block w-100" alt="slide2" />
					</div>
					
					<div className="carousel-item">
						<img src="/assets/imgs/slide3.jpg?v=3" className="d-block w-100" alt="slide3" />
					</div>

					<div className="carousel-item">
					</div>
				</div>
					
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
							
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

export default Carousel;

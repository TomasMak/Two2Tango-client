import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/Footer.css'
import logoWhite from '../../styling/images/logo.png';
import facebook from '../../styling/images/facebook.png';
import tweet from '../../styling/images/tweet.png';
import instagram from '../../styling/images/instagram.png';



export default class Footer extends Component {
	render() {
		return (
			<footer class="page-footer font-small blue pt-4">
    		<div class="container-fluid text-center text-md-left">
      		<div class="row">
						<div class="col-md-6 mt-md-0 mt-3">
						<h5 class="text-uppercase">Footer Content</h5>
          		<p>Here you can use rows and columns here to organize your footer content.</p>
						</div>
						<hr class="clearfix w-100 d-md-none pb-3" />
        		<div class="col-md-3 mb-md-0 mb-3">
            	<h5 class="text-uppercase">Links</h5>
            	<ul class="list-unstyled">
            		<li>
                	<a href="#!">Link 1</a>
              	</li>
              	<li>
                	<a href="#!">Link 2</a>
              	</li>
            	</ul>
          	</div>
          	<div class="col-md-3 mb-md-0 mb-3">
							<h5 class="text-uppercase">Links</h5>
							<ul class="list-unstyled">
								<li>
									<Link to="#!">
										<img src={facebook} alt="fb"/>
										Facebook
									</Link>
								</li>
								<li>
									<Link to="#!">
										<img src={tweet} alt="tw"/>
										Tweeter
									</Link>
								</li>
								<li>
									<Link to="#!">
										<img src={instagram} alt="ig"/>
										Instagram
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright text-center py-3">© 2018 Copyright:
					<Link to="https://mdbootstrap.com/education/bootstrap/"> Two2Tango.com</Link>
				</div>
			</footer>




			// <footer>
			// 	<div className="container footer-home">
			// 		<div className="row">
			// 			<div className="container col-6">
			// 				<img src={logoWhite} alt="logo" className="text-left"/>
			// 				<div className="container text-right col-6">
			// 					<img src={facebook} alt="fb"/>
			// 					<img src={tweet} alt="tw"/>
			// 					<img src={instagram} alt="ig"/>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </footer>
		);
	}
}

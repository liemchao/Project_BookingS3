import React from 'react';
import {Link} from 'react-router-dom';

///Images
import profile10 from './../../../../images/profile/10.jpg';

const GuestDetail = () =>{
	return(
		<>
			<div className="row">

				<div className="col-xl-3 col-xxl-4">
					<div className="card profile-card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<img src={profile10} alt="" className="rounded profile-img me-4" />
								<div>
									<h5 className="text-primary">#GS-2234</h5>
									<h4 className="mb-0">Liem Chao</h4>
								</div>
							</div>
							<div className="row mt-4 pt-3">
								<div className="col-8">
									<Link to={"#"} className="btn btn-dark light btn-block">Edit Profile</Link>
								</div>
								<div className="col-4">
									<Link to={"#"} className="btn btn-danger btn-block"><i className="far fa-times-circle scale3"></i></Link>
								</div>
							</div>
							<ul className="user-info-list">
								<li>
									<i className="fas fa-phone-volume"></i>
									<span>+12 3456 678</span>
								</li>
								<li>
									<i className="far fa-envelope"></i>
									<span className="overflow-hidden">louiskhan002@mail.com</span>
								</li>
								<li>
									<i className="fas fa-map-marker-alt"></i>
									<span>New Avenue Street Corner South London 224151</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <div className="col-xl-12">
					<div className="d-flex align-items-center rooms flex-wrap">
						<h4 className="me-auto mb-3">History Booking</h4>
						<div className="mb-3">
							<Link to={"#"} className="btn btn-primary me-3"><i className="fas fa-calendar-times me-2"></i>Date Filter</Link>
							<Link to={"#"} className="btn btn-primary"><i className="far fa-file-word me-2"></i>Generate Report</Link>	
						</div>
					</div>
				
				</div>	 */}
			</div>	
		</>
	)
}
export default GuestDetail;
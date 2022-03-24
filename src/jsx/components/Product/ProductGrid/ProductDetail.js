import React, { useState } from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import avater1 from "../../../../../src/images/avatar/1.jpg";
import PageTitle from "../../../../jsx/layouts/PageTitle";
import StarRating from './../ProductList/StarRating';

const ProductDetail = () => {
	const [reviewToggle, setReviewToggle] = useState(false);
	const [activeTab, setActiveTab] = useState('0');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
  return (
    <>
      <PageTitle motherMenu="Sevice" activeMenu="Detail" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
					<div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
					  {/* Tab panes */}
						<Tab.Container defaultActiveKey="first">
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<img className="img-fluid" src="https://th.bing.com/th/id/OIP.0Do1o8o1mw2uVYbPEQQl9gHaE7?pid=ImgDet&rs=1" alt="" />
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img className="img-fluid" src="https://newgem.com.vn/wp-content/uploads/2019/02/spa-co-bao-nhieu-loai-hinh.jpg" alt="" />
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<img className="img-fluid" src="https://www.vietnam-sketch.com/wp-content/uploads/2020/09/KARA-Spa_VNS_202010_PHOTO.jpg" alt="" />
								</Tab.Pane>
								<Tab.Pane eventKey="four">
									<img className="img-fluid" src="https://www.bookislandtours.com/images/tile-images/st-lucia/slu-tiles-wellness.jpg?2" alt="" />
								</Tab.Pane>
							</Tab.Content>
							<div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
							  {/* Nav tabs */}
								<Nav as="ul" className="nav slide-item-list mt-3" role="tablist">
									<Nav.Item as="li">
										<Nav.Link as="a" eventKey="first" to="#first">
											<img className="img-fluid" src="https://th.bing.com/th/id/OIP.0Do1o8o1mw2uVYbPEQQl9gHaE7?pid=ImgDet&rs=1" alt=""width={50} />
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as="a" eventKey="second" to="#second">
											<img className="img-fluid" src="https://newgem.com.vn/wp-content/uploads/2019/02/spa-co-bao-nhieu-loai-hinh.jpg" alt="" width={50}/>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as="a" eventKey="third" to="#third">
											<img  className="img-fluid" src="https://www.vietnam-sketch.com/wp-content/uploads/2020/09/KARA-Spa_VNS_202010_PHOTO.jpg" alt="" width={50}/>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as="a" to="#for" eventKey="four">
											<img  className="img-fluid" src="https://www.bookislandtours.com/images/tile-images/st-lucia/slu-tiles-wellness.jpg?2" alt="" width={50}/>
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</Tab.Container>
					</div>
                {/*Tab slider End*/}

                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                  <div className="product-detail-content">
                    {/*Product details*/}
                    <div className="new-arrival-content pr">
                      <h4>Massage</h4>
						<div className="comment-review star-rating">
							<ul>
								{" "}<li> <i className="fa fa-star" /></li>
								{" "}<li><i className="fa fa-star" /></li>
								{" "}<li><i className="fa fa-star" /></li>
								{" "}<li><i className="fa fa-star-half-empty" /></li>
								{" "}<li><i className="fa fa-star-half-empty" /></li>
							</ul>
							<span className="review-text">(34 reviews) / </span>
							<Link onClick={() => setReviewToggle(true)} className="product-review" to="/service-detail" data-toggle="modal" data-target="#reviewModal">Write a review?</Link>
						</div>
						<div className="d-table mb-2">
							<p className="price float-left d-block">$100</p>
						</div>
						<p> Status:{" "}<span className="item"><i className="fa fa-check-circle text-success"></i></span></p>
						<p> Service code: <span className="item">0405689</span>{" "}</p>
						<p> Spa: <span className="item">Ga Spa</span></p>
						<p>
						     Service Type:&nbsp;&nbsp;
							<span className="badge badge-success light me-1">Skin Care</span>
							<span className="badge badge-success light me-1">Massage</span>
							<span className="badge badge-success light me-1">Skin hard</span>
							<span className="badge badge-success light me-1">Cut miss</span>
						</p>
						<p className="text-content">
							There are many variations of passages of Lorem Ipsum
							available, but the majority have suffered alteration in
							some form, by injected humour, or randomised words which
							don't look even slightly believable. If you are going to
							use a passage of Lorem Ipsum, you need to be sure there
							isn't anything embarrassing.
						</p>
						<div className="filtaring-area my-3">
							<div className="size-filter">
								<h4 className="m-b-15">Select Band Service</h4>
								  <div className="btn-group" data-toggle="buttons">
										<label  className= {classnames({ active : activeTab === '1'}) + ' btn btn-outline-primary light btn-sm'}  onClick={() => { toggle('1'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option5"/>{" "}Normal
										</label>
										<label className= {classnames({ active : activeTab === '2'}) + ' btn btn-outline-primary light btn-sm'} onClick={() => { toggle('2'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option1" defaultChecked/>Vip
										</label>
										<label className= {classnames({ active : activeTab === '3'}) + ' btn btn-outline-primary light btn-sm'} onClick={() => { toggle('3'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option2" />{" "} Peramum
										</label>
										
								  </div>
							</div>
						</div>
                      {/*Quantity start*/}
						
                      {/*Quanatity End*/}
						<div className="shopping-cart mt-3">

						</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* review */}
        <Modal show={reviewToggle} onHide={setReviewToggle} className="modal fade" id="reviewModal">
          <>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Review</h5>
                <button
                  type="button"
                  onClick={() => setReviewToggle(false)}
                  className="btn-close"
                  data-dismiss="modal"
                >
                </button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReviewToggle(false);
                  }}
                >
                  <div className="text-center mb-4">
                    <img
                      className="img-fluid rounded"
                      width={78}
                      src={avater1}
                      alt="DexignZone"
                    />
                  </div>
                  <div className="form-group">
                    <div className="rating-widget mb-4 text-center">
                      {/* Rating Stars Box */}
                      <div className="rating-stars">
                        <ul
                          id="stars"
                          className="d-flex justify-content-center align-items-center"
                        >
						<StarRating />
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Comment"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-success btn-block">RATE</button>
                </form>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
};

export default ProductDetail;

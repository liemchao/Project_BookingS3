/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
//import plus from "../../../images/plus.png";

class MM extends Component {
	  componentDidMount() {
		this.$el = this.el;
		this.mm = new Metismenu(this.$el);
	  }
	  componentWillUnmount() {
	  }
	render() {
		return (
			<div className="mm-wrapper">
				<ul className="metismenu" ref={(el) => (this.el = el)}>
					{this.props.children}
				</ul>
			</div>
		);
	}
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
	
	//sidebar icon Heart blast
	var handleheartBlast = document.querySelector('.heart');
        function heartBlast() {
            return handleheartBlast.classList.toggle("heart-blast");
        }
        handleheartBlast.addEventListener('click', heartBlast);
	
  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
      // "dashboard-dark",
      // "customer-list",
      // "customer-detail",
      "reviews",
      "task",
    ],
    // email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "form-create",
      "spa-list",
      "customer-list",
      "service-table",
    ],
    charts = [
      "service-detail",
      "service-list",
    ],
    bootstrap = [
      "customer-table",
      "customer-detail",
    
    ],
    plugins = [
      "payment-table",
      "account-spa",
      "account-user",
      
    ];

  return (
    <PerfectScrollbar 
      className={`deznav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <div className="deznav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Home</span>
            </Link>
      
              {/* <li><Link className={`${path === "" ? "mm-active" : "dashboard"}`} to="/dashboard"> Dashboard Light</Link></li>
				<li>
					<Link className={`${path === "dashboard-dark" ? "mm-active" : ""}`} to="/dashboard-dark"> 
						Dashboard Dark
					</Link>
				</li> */}
				
				{/* <li><Link className={`${path === "customer-list" ? "mm-active" : ""}`} to="/customer-list">Guest</Link></li>
				<li><Link className={`${path === "customer-detail" ? "mm-active" : ""}`} to="/customer-detail">Guest Detail</Link></li> */}
				{/* <li><Link className={`${path === "room-list" ? "mm-active" : ""}`} to="/room-list">Room</Link></li> */}
				{/* <li><Link className={`${path === "reviews" ? "mm-active" : ""}`} to="/reviews">Reviews</Link></li> */}
          </li>
          <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-050-info"></i>
              <span className="nav-text">Acount</span>
            </Link>
                 <li><Link className={`${path === "plugins" ? "mm-active" : ""}`} to="/account-spa">Account Spa Ower</Link></li>
                 <li><Link className={`${path === "plugins" ? "mm-active" : ""}`} to="/account-user">Account User</Link></li>
        
              {/* <li><Link className={`${path === "app-profile" ? "mm-active" : ""}`} to="/app-profile"></Link></li>
              <li><Link className={`${path === "post-details" ? "mm-active" : ""}`} to="/post-details">Post Details</Link></li>
              <li className={`${email.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Email</Link>
                <ul  className={`${email.includes(path) ? "mm-show" : ""}`}>
                  <li><Link className={`${ path === "email-compose" ? "mm-active" : ""}`} to="/email-compose">Compose</Link></li>
                  <li><Link className={`${path === "email-inbox" ? "mm-active" : ""}`} to="/email-inbox">Inbox</Link></li>
                  <li><Link className={`${path === "email-read" ? "mm-active" : ""}`} to="/email-read">Read</Link></li>
                </ul>
              </li>
              <li><Link className={`${path === "app-calender" ? "mm-active" : ""}`}to="/app-calender">Calendar</Link></li> */}
         
                <li className={`${plugins.includes(path) ? "mm-show" : ""}`}>
                {/* <li><Link className={`${path === "payment-table" ? "mm-active" : ""}`} to="/payment">Payment</Link></li> */}
              
                 {/* <li><Link className={`${path === "uc-select2" ? "mm-active" : ""}`} to="/checkout-table">Checkout</Link></li>
                 <li><Link className={`${path === "uc-noui-slider" ? "mm-active" : ""}`} to="/order-table">Book Detail</Link></li> */}
                  {/* <li><Link className={`${ path === "service-list" ? "mm-active" : ""}`} to="/service-list">Service List</Link></li>
                  <li><Link className={`${ path === "service-detail" ? "mm-active" : "" }`} to="/service-detail">Service Details</Link></li> */}
                  {/* <li><Link className={`${ path === "ecom-product-order" ? "mm-active" : "" }`} to="/ecom-product-order">Order</Link></li>
                  <li><Link className={`${ path === "ecom-checkout" ? "mm-active" : ""}`} to="/ecom-checkout">Checkout</Link></li>
                  <li><Link className={`${ path === "ecom-invoice" ? "mm-active" : "" }`} to="/ecom-invoice">Invoice</Link></li>
                  <li><Link className={`${ path === "ecom-customers" ? "mm-active" : "" }`} to="/ecom-customers">Customers</Link></li> */}
              </li>
          </li>
          <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-041-graph"></i>
              <span className="nav-text">Spa</span>
            </Link>
            <li><Link className={`${ path === "shop" ? "mm-active" : ""}`} to="/spa-list">Spa List</Link></li>
            {/* <li><Link className={`${ path === "customer-list" ? "mm-active" : "" }`} to="/customer-list">Customer List</Link></li>
            <li><Link className={`${ path === "service-table" ? "mm-active" : "" }`} to="/service-table">Sevice List</Link></li> */}
    
              {/* <li>
                <Link
                  className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                  to="/chart-rechart"
                >
					             Service List
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                  to="/chart-chartjs"
                >
                      Service Detail
                </Link>
              </li> */}
              {/* <li>
                <Link
                  className={`${path === "chart-chartist" ? "mm-active" : ""}`}
                  to="/chart-chartist"
                >
                  Chartist
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-sparkline" ? "mm-active" : ""}`}
                  to="/chart-sparkline"
                >
                  Sparkline
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-apexchart" ? "mm-active" : ""}`}
                  to="/chart-apexchart"
                >
                  Apexchart
                </Link>
              </li> */}
        
          </li>
          {/* <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-086-star"></i>
              <span className="nav-text">Customer</span>
            </Link>
         
            <li><Link className={`${path === "customer-table" ? "mm-active" : ""}`} to="/customer-table">Customer Data</Link></li>
			    	<li><Link className={`${path === "customer-detail" ? "mm-active" : ""}`} to="/customer-detail">Customer Detail</Link></li>
          </li>
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-045-heart"></i>
              <span className="nav-text">Service</span>
            </Link>
            <li><Link className={`${ path === "service-list" ? "mm-active" : ""}`} to="/service-list">Service Data</Link></li>
            <li><Link className={`${ path === "service-detail" ? "mm-active" : "" }`} to="/service-detail">Service Details</Link></li>
            </li> */}
			{/* <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow ai-icon" to="#" >
                        <i className="flaticon-087-stop"></i><span className="nav-text">Redux</span>
                    </Link>
                <ul>
                  <li><Link className={`${path === "todo" ? "mm-active" : ""}`} to="/todo">Todo</Link></li>
                  <li><Link className={`${path === "redux-form" ? "mm-active" : ""}`} to="/redux-form">Redux Form</Link></li>
                  <li><Link className={`${path === "redux-wizard" ? "mm-active" : ""}`} to="/redux-wizard">Redux Wizard</Link></li>
                </ul>
            </li>
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="widget-basic" className="ai-icon" >
              <i className="flaticon-013-checkmark"></i>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-072-printer"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "form-element" ? "mm-active" : ""}`}
                  to="/form-element"
                >
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-wizard" ? "mm-active" : ""}`}
                  to="/form-wizard"
                >
                  Wizard
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-editor-summernote" ? "mm-active" : ""
                  }`}
                  to="/form-editor-summernote"
                >
                  Summernote
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-pickers" ? "mm-active" : ""}`}
                  to="/form-pickers"
                >
                  Pickers
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-validation-jquery" ? "mm-active" : ""
                  }`}
                  to="/form-validation-jquery"
                >
                  Form Validate
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" ><i className="flaticon-043-menu"></i><span className="nav-text">Table</span></Link>
            <ul>
				<li>
					<Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} to="/table-filtering">
						Table Filtering
					</Link>
				</li>
				<li>
					<Link className={`${ path === "table-sorting" ? "mm-active" : "" }`} to="/table-sorting">
						Table Sorting
					</Link>
				</li>
				<li>
					<Link className={`${ path === "table-bootstrap-basic" ? "mm-active" : "" }`} to="/table-bootstrap-basic">
						Bootstrap
					</Link>
				</li>
				<li>
					<Link className={`${ path === "table-datatable-basic" ? "mm-active" : ""}`} to="/table-datatable-basic">
						Datatable
					</Link>
				</li>
            </ul>
          </li>
          <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-022-copy"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul >
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" >Error</Link>
                <ul>
                 
                  <li><Link className={`${ path === "page-error-404" ? "mm-active" : "" }`} to="/page-error-404">Error 404</Link></li>
                </ul>
              </li>
              
            </ul>
          </li> */}
        </MM>
		<div className="copyright">
			<p><strong>BookingS3 Admin</strong> © 2022 All Rights Reserved</p>
			<p className="fs-12">Made with <span className="heart"></span> by LiemTroller</p>
		</div>
      </div>
    </PerfectScrollbar>
  );
};

export default SideBar;

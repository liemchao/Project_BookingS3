import React, { useContext } from "react";

/// React router dom
import {  Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import AccountUser from "./components/Dashboard/Table/accountData";
import AccountSpa from "./components/Dashboard/Table/accountSpa";
/// Dashboard
import Home from "./components/Dashboard/Home";
import Employer from"./components/Dashboard/Employer";
import CustomerList from"./components/Dashboard/CustomerList";
import CustomerDetail from"./components/Dashboard/CustomerDetail";
//Service Spa
import ProductList from "./components/Product/ProductList/ProductList"
import ProductDetail from "./components/Product/ProductGrid/ProductDetail"
//Service Table
import SeviceTable from "./components/Dashboard/services";
import SpadDetal from "./components/Dashboard/Table/spaDetail";
//Customer
import CutomerTable from "./components/Dashboard/Customer/Customer";
//Table
import SpaTable from"./components/Dashboard/Spa/Spatable";
import Checkout from "./components/Dashboard/Payment/Paytable";
import OrderTable from "./components/Product/ProductGrid/ProductOrder";
import Payment from "./components/Product/ProductGrid/Checkout";
import FormCreate from "./components/Dashboard/Form/jQueryValidation";
import FormUpdateSpa from "./components/Dashboard/Form/updateFormSpa";
import Review from "./components/Dashboard/Table/Reviews";
import Profile from"./components/Dashboard/Table/Proflie"
/// Form
import Error404 from "./pages/Error404";
import AccountCreateUser from "./components/Dashboard/Form/createAccountuser";
import AccountUpdateUser from "./components/Dashboard/Form/updateAccount";
import AccountCreateSpa from "./components/Dashboard/Form/creatAccount";
import AccountUpdateSpa from "./components/Dashboard/Form/updateAccountSpa";

import CreateService from "./components/Dashboard/Form/createService";
import UpdateService from "./components/Dashboard/Form/updateService";





import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {
  const { menuToggle } = useContext(ThemeContext);
  const routes = [
    /// Spa
    { url: "", component: Home },
    { url:"Dashboard", component: Home },
    { url:"employer-list", component: Employer},
    { url:"account-spa", component: AccountSpa},
    { url:"account-user", component: AccountUser},


    /// Customer
    {url:"customer-detail",component: CustomerDetail},
    {url:"customer-list",component: CustomerList},
    {url:"customer-table",component: CutomerTable},
    //Service Spa
    {url:"service-detail",component: ProductDetail},
    {url:"service-list",component: ProductList},
    //service-table"
    {url:"service-table", component: SeviceTable },
    //table
    {url:"spa-list", component: SpaTable},
    {url:"checkout-table",component: Checkout},
    {url:"payment",component: Payment},
    {url:"order-table",component: OrderTable},

    {url:"reviews", component: Review},
    {url:"profile", component: Profile},
    //Detail
    {url:"spa-detail", component:SpadDetal},
     //form


     {url:"form-create", component:FormCreate},
     {url:"form-update-spa", component:FormUpdateSpa},

     {url:"create-account-user", component:AccountCreateUser},
     {url:"update-account-user/:id", component:AccountUpdateUser},

     {url:"create-account-spa", component:AccountCreateSpa},
     {url:"update-account-spa", component:AccountUpdateSpa},
     {url:"update-account-spa/:id", component:AccountUpdateSpa},


     {url:"create-service", component:CreateService}, 
     {url:"update-service", component:UpdateService}, 

    {url: "page-error-404", component: Error404 },
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Nav />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
    </>
  );
};

export default Markup;

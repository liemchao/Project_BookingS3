import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle";
import axios from "axios";

const CreacteAccount = () => {
  const [createValue, setCreateValue] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const [saveData, setSaveData] = useState([]);
  

 
  console.log(saveData);
    saveData.code = Math.floor(Math.random() * 9999) + 1000;
    console.log("code: ", saveData.code);
  const onChangeCreate = (event) => {
    setDataUser({ ...createValue, [event.target.name]: event.target.value });
    if(dataUser.userName != null) saveData.userName = dataUser.userName;
    if(dataUser.password != null) saveData.password = dataUser.password;
    if(dataUser.fullName != null) saveData.fullName = dataUser.fullName;
    if(dataUser.phone != null) saveData.phone = dataUser.phone;
    if(dataUser.email != null) saveData.email = dataUser.email;
    if(dataUser.address != null) saveData.address = dataUser.address;

    
  };


  // console.log(dataCreate);
  const onCreate = () => {
    axios
      .post("http://bookings3v1.somee.com/api/users", 
      {
        userName: saveData.userName,
        password: saveData.password,
        code: `${saveData.code}`,
        fullName: saveData.fullName,
        phone: saveData.phone,
        email: saveData.email,
        address: saveData.address,
        status: false,
        roleId: 2,
      }
      // {
      //   userName: 'ThaiLNQ',
      //   password: '4567890',
      //   code: '3241',
      //   fullName: 'Lai nguyen quoc thai',
      //   phone: '394469671',
      //   email: 'thailnq@gmail.com',
      //   address: 'Thủ Đức, Hcm',
      //   status: false,
      //   roleId: 2,
      // }
      )
      .then((item) => {
        // console.log(dataCreate);
      });
  };


  return (
    <Fragment>
      <PageTitle activeMenu="Create" motherMenu="Form" pageContent="Create" />

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Form Create Account User</h4>
            </div>
            <div className="card-body">
              <div className="form-validation">
                <form
                  className="form-valide"
                  action="#"
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    
                    <div className="col-xl-6">
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-skill"
                        >
                          User Name
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            className="form-control"
                            id="val-skill"
                            name="userName"
                            value={dataUser.userName}
                            onChange={onChangeCreate}
                          ></input>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-skill"
                        >
                          Full Name
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            className="form-control"
                            id="val-skill"
                            name="fullName"
                            value={dataUser.fullName}
                            onChange={onChangeCreate}
                          ></input>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-currency"
                        >
                          Phone
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-currency"
                            name="phone"
                            value={dataUser.phone}
                            onChange={onChangeCreate}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-website"
                        >
                          Email
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="email"
                            className="form-control"
                            id="val-website"
                            name="email"
                            value={dataUser.email}
                            onChange={onChangeCreate}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-digits"
                        >
                          Address <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-digits"
                            name="address"
                            value={dataUser.address}
                            onChange={onChangeCreate}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-password"
                        >
                          Password
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="password"
                            className="form-control"
                            id="val-password"
                            name="password"
                            value={dataUser.password}
                            onChange={onChangeCreate}
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-confirm-password"
                        >
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="password"
                            className="form-control"
                            id="val-confirm-password"
                            name="confirmPassword"
                            value={dataUser.confirmPassword}
                            onChange={onChangeCreate}
                          />
                        </div>
                      </div>
                      {/* <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-number"
                        >
                          DayCreate <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-number"
                            name="val-number"
                            placeholder="5.0"
                          />
                        </div>
                      </div> */}
                      <div className="form-group mb-3 row">
                        <label className="col-lg-4 col-form-label">
                          <Link to="form-validation-jquery">
                            Terms &amp; Conditions
                          </Link>{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-8">
                          <label
                            className="form-check css-control-primary css-checkbox"
                            htmlFor="val-terms"
                          >
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              id="val-terms"
                              name="val-terms"
                              value="1"
                            />
                            <span className="css-control-indicator"></span> I
                            agree to the terms
                          </label>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <div className="col-lg-8 ms-auto">
                          <Link to={`/account-user`}>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={onCreate}
                            >
                              Create
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Vertical Forms with icon</h4>
            </div>
            <div className="card-body">
              <div className="basic-form"> */}
        {/* <Formik
                  initialValues={{ username: "", password: "" }}
                  validationSchema={loginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div
                        className={`form-group mb-3 ${
                          values.username
                            ? errors.username
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa fa-user" />{" "}
                            </span>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            placeholder="Enter a username.."
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.username && errors.username}
                          </div>

                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          />
                        </div>
                      </div>
                      <div
                        className={`form-group mb-3 ${
                          values.password
                            ? errors.password
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">Password *</label>
                        <div className="input-group transparent-append mb-2">
                          
                            <span className="input-group-text">
                              {" "}
                              <i className="fa fa-lock" />{" "}
                            </span>
                          
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            className="form-control"
                            id="val-password1"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Choose a safe one.."
                          />

                          <div
                            className="input-group-text show-pass"
                            onClick={() => setShowPassword(!showPassword)}
                          >

                              {" "}
                              <i className="fa fa-eye-slash" />
                            
                          </div>
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.password && errors.password}
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <div className="form-check">
                          <input
                            id="checkbox1"
                            className="form-check-input"
                            type="checkbox"
                          />
                          <label
                            htmlFor="checkbox1"
                            className="form-check-label"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn me-3 btn-primary"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                      <button type="submit" className="btn btn-light">
                        cencel
                      </button>
                    </form>
                  )}
                </Formik> */}
        {/* </div>
            </div> */}
        {/* </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default CreacteAccount;

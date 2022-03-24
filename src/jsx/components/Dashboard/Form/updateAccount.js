import React, { Fragment, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateAccount = () => {
  const [test] = useState(0);
  const [dataUser, setDataUser] = useState([]);
  const [dataUser2, setDataUser2] = useState([0]);
  const [updateValue, setUpdateValue] = useState("");
  let params = useParams();
  // use effect
  useLayoutEffect(() => {
    console.log("aaaaaa");
    console.log(params);
    axios
      .get(`http://bookings3v1.somee.com/api/users/${params.id}`)
      .then((item) => {
        console.log(item.data);
        setDataUser2(item.data)
        setDataUser(item.data);
        console.log(dataUser);
      });
    //chackboxFun();
  }, [test]);

  const onUpdate = () => {
    
    axios
      .get(`http://bookings3v1.somee.com/api/users?role=cus&search=`)
      .then((item) => {
        console.log('item.data');
        
        
      });
  };

  const onChangeUpdate = (event) => {
    setDataUser({ ...updateValue, [event.target.name]:event.target.value,});
  };


  return (
    <Fragment>
      <PageTitle activeMenu="Update" motherMenu="Form" pageContent="Spa" />

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Form Update Account User: <h2>{dataUser2.userName}</h2></h4>
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
                            onChange={onChangeUpdate}
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
                            name="val-skill"
                            value={dataUser.fullName}
                            onChange={onChangeUpdate}
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
                            name="val-currency"
                            value={dataUser.phone}
                            onChange={onChangeUpdate}
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
                            name="val-website"
                            value={dataUser.email}
                            onChange={onChangeUpdate}
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
                            name="val-digits"
                            value={dataUser.address}
                            onChange={onChangeUpdate}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-skill"
                        >
                          Role
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            id="val-skill"
                            name="val-skill"
                            placeholder="User"
                          >
                            <option value="css">User</option>
                            {/* <option value="html">Host</option> */}
                          </select>
                        </div>
                      </div>
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
                        <div className="col-lg-8 ms-auto" onClick={onUpdate}>
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
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

export default UpdateAccount;

import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import axios from "axios";

//import pic11 from './../../../images/hotel/pic11.jpg';
import AccountCaro from "../Booking/AccountCaro";

const DropdownBlog = (props) => {
  const onBan = (stat) => {
    console.log("s");
    axios
      .delete(`http://bookings3v1.somee.com/api/users/${stat}`)
      .then((res) => {
        props.onRefresh();
      });
  };
  return (
    <>
      <Dropdown className="dropdown">
        <Dropdown.Toggle
          as="div"
          className="btn-link i-false"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item className="dropdFown-item">
            <Link to={`/update-account-user/${props.id}`}>View</Link>
          </Dropdown.Item>
          <Dropdown.Item className="dropdFown-item">
          <div onClick={() => onBan(props.id)}>{props.status ? "Ban" : "Unban"}</div>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item">
            <div onClick={() => onBan(props.id)}>{props.status ? "Unban" : "Ban"}</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const Room = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#room_wrapper tbody tr")
  );
  const sort = 10;
  const activePag = useRef(0);
  const [test, settest] = useState(0);
  const [dataTable, setDataTable] = useState([]);
  const [dataStatusTrue, setDataStatusTrue] = useState([]);
  const [dataStatusFalse, setDataStatusFalse] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // use effect
  // get all role = cus
  useLayoutEffect(() => {
    console.log("aaaaaa");
    axios
      .get("http://bookings3v1.somee.com/api/users?role=cus&PAGE_SIZE=15")
      .then((item) => {
        console.log("v", item.data.data);
        setDataTable(item.data.data);
      });
    //chackboxFun();
  }, [test]);

  useLayoutEffect(() => {
    console.log("aaaaaa");
    axios
      .get("http://bookings3v1.somee.com/api/users?role=cus&sortby=active")
      .then((item) => {
        console.log("v", item.data.data);
        setDataStatusTrue(item.data.data);
      });
    //chackboxFun();
  }, [test]);

  useLayoutEffect(() => {
    console.log("aaaaaa");
    axios
      .get("http://bookings3v1.somee.com/api/users?role=cus&sortby=inactive")
      .then((item) => {
        console.log("v", item.data.data);
        setDataStatusFalse(item.data.data);
      });
    //chackboxFun();
  }, [test]);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };

  const onSearch = () => {
    console.log(searchValue);
    //api http://bookings3v1.somee.com/api/users?search=t&role=cus
    axios
      .get(
        `http://bookings3v1.somee.com/api/users?search=${searchValue}&role=cus`
      )
      .then((item) => {
        console.log(item.data);
        setDataTable(item.data.data);
        console.log(dataTable);
      });
  };

  const onSearchTrue = () => {
    console.log(searchValue);
    //api http://bookings3v1.somee.com/api/users?search=t&role=cus
    axios
      .get(
        `http://bookings3v1.somee.com/api/users?search=${searchValue}&role=cus&sortby=active`
      )
      .then((item) => {
        console.log(item.data);
        setDataStatusTrue(item.data.data);
        console.log(dataTable);
      });
  };

  const onSearchFalse = () => {
    console.log(searchValue);
    //api http://bookings3v1.somee.com/api/users?search=t&role=cus
    axios
      .get(
        `http://bookings3v1.somee.com/api/users?search=${searchValue}&role=cus&sortby=inactive`
      )
      .then((item) => {
        console.log(item.data);
        setDataStatusFalse(item.data.data);
        console.log(dataTable);
      });
  };

  const onChangeSearch = (event) => {
    console.log("vvvv", event);
    setSearchValue(event.target.value);
  };

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };
  const fetchData = () => {
    console.log("fetch");
    window.location.reload(false);
  };
  const chackbox = document.querySelectorAll(".sorting_7 input");
  const motherChackBox = document.querySelector(".sorting_asc_7 input");
  // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };
  return (
    <>
      <Tab.Container defaultActiveKey="All">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
              <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                <Nav as="ul" className="nav nav-tabs" role="tablist">
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link className="nav-link" eventKey="All">
                      All Account
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link className="nav-link" eventKey="Active-Account">
                      Active Account{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link className="nav-link" eventKey="Inactive-Account">
                      Inactive Account
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="table-search">
                  <div className="input-group search-area mb-xxl-0 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                      value={searchValue}
                      onChange={onChangeSearch}
                    />
                    <span className="input-group-text">
                      <div onClick={onSearch}>
                        <i className="flaticon-381-search-2"></i>
                      </div>
                    </span>
                  </div>
                </div>
              <Link
                to={"create-account-user"}
                className="btn btn-primary mb-xxl-0 mb-4"
              >
                <i className="far fa-file-word me-2"></i>Create
              </Link>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="All">
               
                <div className="table-responsive">
                  <div
                    id="room_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc_7 bg-none">
                            <div className="form-check  style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun("all")}
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                            </div>
                          </th>
                          <th>User Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Bad Booking</th>
                          <th>Status</th>
                          <th>Action</th>
                          <th className="bg-none"></th>
                        </tr>
                      </thead>
                      <tbody id="accountUser">
                        {dataTable.map((item) => {
                          // const checkStatus = () => {
                          //   if(item.status = true){
                          //     return <a>Active</a>
                          //   }else {
                          //     return <a>InActive</a>
                          //   }
                          // }

                          return (
                            <tr role="row" className="odd">
                              <td className="sorting_7">
                                <div className="form-check   style-1">
                                  <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="form-check-input"
                                    id="customCheckBox21"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="guest-bx">
                                  <div
                                    id="carouselExampleControls"
                                    className="carousel slide me-3"
                                  >
                                    <div className="carousel-inner">
                                      <AccountCaro />
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-primary">
                                      {item.id}
                                    </span>
                                    <h4 className="mb-0 mt-1">
                                      <Link
                                        className="text-black"
                                        to={"profile"}
                                      >
                                        {item.userName}
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.address}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.email}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.phone}</span>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <div>
                                  <span className="text-warning">
                                    {item.roleId} times
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span
                                    className={
                                      item.status
                                        ? "text-success"
                                        : "text-danger"
                                    }
                                  >
                                    {item.status ? "Active" : "Inactive"}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <DropdownBlog
                                  id={item.id}
                                  onRefresh={fetchData}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Active-Account">
                <div className="table-search">
                  <div className="input-group search-area mb-xxl-0 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                      value={searchValue}
                      onChange={onChangeSearch}
                    />
                    <span className="input-group-text">
                      <div onClick={onSearchTrue}>
                        <i className="flaticon-381-search-2"></i>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="table-responsive">
                  <div
                    id="room_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc_7 bg-none">
                            <div className="form-check  style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun("all")}
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                            </div>
                          </th>
                          <th>User Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Bad Booking</th>
                          <th>Status</th>
                          <th>Action</th>
                          <th className="bg-none"></th>
                        </tr>
                      </thead>
                      <tbody id="accountUser">
                        {dataStatusTrue.map((item) => {
                          // const checkStatus = () => {
                          //   if(item.status = true){
                          //     return <a>Active</a>
                          //   }else {
                          //     return <a>InActive</a>
                          //   }
                          // }

                          return (
                            <tr role="row" className="odd">
                              <td className="sorting_7">
                                <div className="form-check   style-1">
                                  <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="form-check-input"
                                    id="customCheckBox21"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="guest-bx">
                                  <div
                                    id="carouselExampleControls"
                                    className="carousel slide me-3"
                                  >
                                    <div className="carousel-inner">
                                      <AccountCaro />
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-primary">
                                      {item.id}
                                    </span>
                                    <h4 className="mb-0 mt-1">
                                      <Link
                                        className="text-black"
                                        to={"profile"}
                                      >
                                        {item.userName}
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.address}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.email}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.phone}</span>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <div>
                                  <span className="text-warning">
                                    {item.roleId} times
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span
                                    className={
                                      item.status
                                        ? "text-success"
                                        : "text-failed"
                                    }
                                  >
                                    {item.status ? "Active" : "Inactive"}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <DropdownBlog
                                  id={item.id}
                                  onRefresh={fetchData}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Inactive-Account">
                <div className="table-search">
                  <div className="input-group search-area mb-xxl-0 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                      value={searchValue}
                      onChange={onChangeSearch}
                    />
                    <span className="input-group-text">
                      <div onClick={onSearchFalse}>
                        <i className="flaticon-381-search-2"></i>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="table-responsive">
                  <div
                    id="room_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc_7 bg-none">
                            <div className="form-check  style-1">
                              <input
                                type="checkbox"
                                onClick={() => chackboxFun("all")}
                                className="form-check-input"
                                id="checkAll"
                                required=""
                              />
                            </div>
                          </th>
                          <th>User Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Bad Booking</th>
                          <th>Status</th>
                          <th>Action</th>
                          <th className="bg-none"></th>
                        </tr>
                      </thead>
                      <tbody id="accountUser">
                        {dataStatusFalse.map((item) => {
                          // const checkStatus = () => {
                          //   if(item.status = true){
                          //     return <a>Active</a>
                          //   }else {
                          //     return <a>InActive</a>
                          //   }
                          // }

                          return (
                            <tr role="row" className="odd">
                              <td className="sorting_7">
                                <div className="form-check   style-1">
                                  <input
                                    type="checkbox"
                                    onClick={() => chackboxFun()}
                                    className="form-check-input"
                                    id="customCheckBox21"
                                    required=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="guest-bx">
                                  <div
                                    id="carouselExampleControls"
                                    className="carousel slide me-3"
                                  >
                                    <div className="carousel-inner">
                                      <AccountCaro />
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-primary">
                                      {item.id}
                                    </span>
                                    <h4 className="mb-0 mt-1">
                                      <Link
                                        className="text-black"
                                        to={"profile"}
                                      >
                                        {item.userName}
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.address}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.email}</span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span className="fs-16">{item.phone}</span>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <div>
                                  <span className="text-warning">
                                    {item.roleId} times
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span
                                    className={
                                      item.status
                                        ? "text-success"
                                        : "text-failed"
                                    }
                                  >
                                    {item.status ? "Active" : "Inactive"}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <DropdownBlog
                                  id={item.id}
                                  onRefresh={fetchData}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};
export default Room;

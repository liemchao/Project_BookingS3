import React, { Fragment, useRef, useState } from "react";
// import { Table, Pagination } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";
import axios from "axios";
import { useLayoutEffect } from "react";
import { Dropdown } from "react-bootstrap";

const ProfileDatatable = (props) => {
  const [dataTable, setDataTable] = useState([]);
  const [test] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    console.log(searchValue);
    //api http://bookings3v1.somee.com/api/users?search=
    axios
      .get(`http://bookings3v1.somee.com/api/v1/spas?search=${searchValue}`)
      .then((item) => {
        console.log(item.data);
        setDataTable(item.data.data);
        console.log(dataTable);
      });
  };

  const onChangeSearch = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };

  useLayoutEffect(() => {
    console.log("Component is mounted in the DOM");
    axios.get("http://bookings3v1.somee.com/api/v1/spas/Getalldetails").then((item) => {
      console.log(item.data);
      setDataTable(item.data.data);
      console.log(dataTable);

    });
  }, [test]);

  const sort = 3;
  let paggination = Array(Math.ceil(data.profileTable.data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);
  const jobData = useRef(
    data.profileTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  );
  //const [demo, setdemo] = useState();
  const onClick = (i) => {
    activePag.current = i;

    jobData.current = data.profileTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    );
    /* setdemo(
      data.profileTable.data.slice(
        activePag.current * sort,
        (activePag.current + 1) * sort
      )
    ); */
  };
  // useEffect(() => {
  //   axios.get("http://bookings3v1.somee.com/api/users?page=2").then((item) => {
  //     console.log(item.data);
  //     setDataTable(item.data.data);
  //     console.log(dataTable);
  //   });
  //   //chackboxFun();
  // });

  const DropdownBlog = (props) => {
    console.log(props.id)
    return (
      <>
        <div className="d-flex">
          <Link
            to={`form-update-spa/${props.id}`}
            className="btn btn-primary shadow btn-xs sharp me-1"
          >
            <i className="fas fa-pen"></i>
          
          </Link>
          <Link to="#" className="btn btn-danger shadow btn-xs sharp">
            <i className="fa fa-trash"></i>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <div className="col-xl-12">
            <div className="d-flex align-items-center rooms flex-wrap">
              <h4 className="me-auto mb-3">Spa List</h4>

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
              {/* <div className="mb-3">
                <Link to={"form-create"} className="btn btn-primary">
                  <i className="far fa-file-word me-2"></i>Create
                </Link>
              </div> */}
              <table id="example" className="display w-100 dataTable">
                <thead>
                  <tr role="row">
                    {data.profileTable.columns.map((d, i) => (
                      <th key={i}>{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((el) => (
                    <tr>
                      {data.profileTable.columns.map((item, i) => (
                        
                        <td>
                          {i === 0 ? (
                            <Link to="/spa-detail">
                              <img
                                className="rounded-circle"
                                width="35"
                                src={el[item]}
                                alt=""
                              />
                            </Link>
                          ) : (
                            <Dropdown>
                              {el[item]}
                              {console.log(item.id)}
                              {i === 7 && <DropdownBlog id={el.id} />}
                            </Dropdown>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/spa-list"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to="/spa-list"
                        className={`paginate_button  ${
                          activePag.current === i ? "current" : ""
                        } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to="/spa-list"
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDatatable;

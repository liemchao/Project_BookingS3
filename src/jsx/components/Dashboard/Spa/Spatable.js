import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";

import ProfileDatatable from "../Table/ProfileDatatable";



const DataTable = () => {
  return (
    <Fragment>
      <PageTitle
        activeMenu="Spa"
        motherMenu="Table"
        pageContent="Spa"
      />
      <div className="row"> 
        <ProfileDatatable />  
      </div>
    </Fragment>
  );
};

export default DataTable;

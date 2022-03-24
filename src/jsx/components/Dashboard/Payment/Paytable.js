import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";
import PatientTable from "../Table/PatientTable";



const DataTable = () => {
  return (
    <Fragment>
      <PageTitle
        activeMenu="Invoice"
        motherMenu="Check Out"
        pageContent="Invoice"
      />
      <div className="row"> 
        <PatientTable />  
      </div>
    </Fragment>
  );
};

export default DataTable;

import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

function Employees() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}

export default Employees;

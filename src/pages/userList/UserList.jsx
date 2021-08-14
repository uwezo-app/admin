import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import DataTable from "react-data-table-component";

import { userRows } from "../../dummyData";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (Id) => {
    setData(data.filter((item) => item.Id !== Id));
  };
  const columns = [
    {
      name: "Id",
      selector: "Id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "DOB",
      selector: "dob",
    },
    {
      cell: (row) => (
        <>
          <Link to={"/user/" + row.Id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(row.Id)}
          />
        </>
      ),
      allowOverflow: true,
      button: true,
      width: "100px", // custom width for icon button
    },
  ];

  return (
    <div className="userList">
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        selectableRows
      />
    </div>
  );
}

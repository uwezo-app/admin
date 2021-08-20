import "./patientList.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import DataTable from "react-data-table-component";

export default function UserList({ url }) {
  const [psychologists, setPsychologists] = useState([]);

  React.useEffect(() => {
    const func = async () => {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok && response.status === 200) {
        const res = await response.json();
        setPsychologists(res);
      } else {
        console.log(response.statusText);
      }
    };

    func();
  }, [url]);

  const handleDelete = (Email) => {
    setPsychologists(psychologists.filter((item) => item.Email !== Email));
  };

  const columns = [
    {
      name: "ID",
      selector: "ID",
      sortable: true,
    },
    {
      name: "First Name",
      selector: "FirstName",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "LastName",
      sortable: true,
    },
    {
      name: "Email",
      selector: "Email",
      sortable: true,
    },
    {
      name: "Is Deleted",
      selector: "IsDeleted",
    },
    {
      name: "Is Verified",
      selector: "IsVerified",
    },
    {
      cell: (row) => (
        <>
          <Link to={"/user/" + row.Email}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            onClick={() => handleDelete(row.Email)}
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
      {!psychologists ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!psychologists && <CircularProgress style={{ color: green[500] }} />}
        </div>
      ) : (
        <DataTable
          title="Current Patients"
          columns={columns}
          data={psychologists}
          pagination
          highlightOnHover
          selectableRows
        />
      )}
    </div>
  );
}

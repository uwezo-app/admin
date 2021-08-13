import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";
import DataTable from 'react-data-table-component';

export default function UserList() {
  const [data, setData]= useState(userRows);
  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id !== id));
  }
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'DOB',
      selector: 'dob',
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
      />
        </div>
    )
}

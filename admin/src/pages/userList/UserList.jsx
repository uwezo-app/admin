import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          renderCell: (params)=>{
              return(
                  <div className="userListUser"> 
                      <img src={params.row.avatar} alt="" className="userListImg"/>
                      {params.row.firstName}
                  </div>
              );
          }
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
        },
    
        {
          field: 'email',
          headerName: 'Email',
          sortable: false,
          width: 160,
        },
        {
            field: 'status',
            headerName: 'Status',
            type:"number",
            width: 160,
          },
          {
              field:'action',
              headerName:'Action',
              width:150,
              rendercell: (params)={
                  return(
                    <>
                      <button className="userListEdit">Edit</button>
                      <DeleteOutline/>
                    </>
                  )
              }
          }
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com',status:"active"},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com',status:"active"},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com', status:"active" },
        { id: 4, lastName: 'Stark', firstName: 'Arya', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com',status:"active"},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com',status:"active" },
        { id: 6, lastName: 'Melisandre', firstName: 'Lucien',avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com', status:"active"},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com',status:"active"},
        { id: 8, lastName: 'Frances', firstName: 'Rossini',avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com' ,status:"active"},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', avatar:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', email:'Jon@gmail.com' ,status:"active" },
      ];
    return (
        <div className="userList">
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

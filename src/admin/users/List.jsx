import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import { userService } from "@/_services";

function List({ match }) {
  const { path } = match;
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggles, setToggles] = useState(false);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  function deleteUser(id) {
    setUsers(
      users.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    userService.delete(id).then(() => {
      setUsers((users) => users.filter((x) => x.id !== id));
    });
  }

  const toggleUser = () => {
     setToggles(prevToggles => !toggles)
  }

  return (
    <div>
      <h1>Users</h1>
      <div class="row mt-5" style={{marginBottom: "40px"}}>
        <div class="col-md-5 mx-auto">
            <div class="input-group">
                <input class="form-control border" type="text" placeholder="Search..." id="example-search-input" onChange={(e) => {setSearchTerm(e.target.value)}}/>
            </div>
        </div>
    </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "30%" }}>Email</th>
            <th style={{ width: "30%" }}>Role</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.filter((user)=>{
                if(searchTerm == ""){
                    return user
                }else if(user.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return user
                }
            }).map((user) => (
              <tr key={user.id}>
                <td>
                  {user.title} {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <Link
                    to={`${path}/edit/${user.id}`}
                    className="btn btn-sm btn-primary mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-sm btn-danger mr-1"
                    style={{ width: "60px" }}
                    disabled={user.isDeleting}
                  >
                    {user.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                   
                  {!toggles? <button
                      className="btn btn-sm btn-primary"
                      onClick={toggleUser}
                    >
                       Deactivate
                      
                    </button> 
                    :
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={toggleUser}
                    >
                       Activate
                      
                    </button> 
                  }
                  
                </td>
              </tr>
            ))}
          {!users && (
            <tr>
              <td colSpan="4" className="text-center">
                <span className="spinner-border spinner-border-lg align-center"></span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">
        Add User
      </Link>
    </div>
  );
}

export { List };

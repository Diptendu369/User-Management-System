import { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered Users
  const [editingUser, setEditingUser] = useState(null);
  const [editedData, setEditedData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [searchQuery, setSearchQuery] = useState(""); // Search Query
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setUsers(res.data.data);
      setFilteredUsers(res.data.data); // Initialize filteredUsers with all users
      setTotalPages(res.data.total_pages);
    });
  }, [page]);

  // Handle search input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  };

  const handleDelete = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user.id !== id)); // Update filtered users
    });
  };

  const handleUpdate = (id) => {
    axios.put(`https://reqres.in/api/users/${id}`, editedData).then(() => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, ...editedData } : user
        )
      );
      setFilteredUsers(
        filteredUsers.map((user) =>
          user.id === id ? { ...user, ...editedData } : user
        )
      );
      setEditingUser(null);
    });
  };

  return (
    <div className="container">
      <h2 className="title">User List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        className="search-bar"
        value={searchQuery}
        onChange={handleSearch}
      />

      <div className="main-content">
        <div className="users-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="user-avatar"
                  />
                  <div className="user-details">
                    <h3>
                      {user.first_name} {user.last_name}
                    </h3>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="user-actions">
                  <button className="edit-btn" onClick={() => handleEdit(user)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>

                {/* Edit form appears below the user card */}
                {editingUser && editingUser.id === user.id && (
                  <div className="edit-form">
                    <h3>Edit User</h3>
                    <input
                      type="text"
                      value={editedData.first_name}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          first_name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      value={editedData.last_name}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          last_name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="email"
                      value={editedData.email}
                      onChange={(e) =>
                        setEditedData({ ...editedData, email: e.target.value })
                      }
                    />
                    <div className="edit-buttons">
                      <button
                        className="save-btn"
                        onClick={() => handleUpdate(editingUser.id)}
                      >
                        Save
                      </button>
                      <button
                        className="cancel-btn"
                        onClick={() => setEditingUser(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="no-users">No users found.</p>
          )}

          {/* Pagination */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="pagination-btn"
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

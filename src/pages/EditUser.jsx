import { useState } from "react";
import axios from "axios";
import "./EditUser.css";

const EditUser = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [editedData, setEditedData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleSearch = async () => {
    if (!search.trim()) return;
    try {
      const response = await axios.get(`https://reqres.in/api/users/${search}`);
      setUser(response.data.data);
      setEditedData({
        first_name: response.data.data.first_name,
        last_name: response.data.data.last_name,
        email: response.data.data.email,
      });
    } catch (error) {
      alert("User not found!");
      setUser(null);
    }
  };

  const handleUpdate = async () => {
    if (!user) return;
    try {
      await axios.put(`https://reqres.in/api/users/${user.id}`, editedData);
      alert("User updated successfully!");
    } catch (error) {
      alert("Failed to update user.");
    }
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Enter User ID to search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div className="edit-form">
          <h3>
            Editing: {user.first_name} {user.last_name}
          </h3>
          <input
            type="text"
            value={editedData.first_name}
            onChange={(e) =>
              setEditedData({ ...editedData, first_name: e.target.value })
            }
          />
          <input
            type="text"
            value={editedData.last_name}
            onChange={(e) =>
              setEditedData({ ...editedData, last_name: e.target.value })
            }
          />
          <input
            type="email"
            value={editedData.email}
            onChange={(e) =>
              setEditedData({ ...editedData, email: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      )}
    </div>
  );
};

export default EditUser;

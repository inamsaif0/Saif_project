import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adp() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://45.55.45.170:8081/items');
    setItems(response.data);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateItem = async () => {
    await axios.post('http://45.55.45.170:8081/items', formData);
    fetchItems();
    setFormData({ name: '', description: '' });
  };

  const handleStartEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setEditingItem(itemToEdit);
    setFormData({ name: itemToEdit.name, description: itemToEdit.description });
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setFormData({ name: '', description: '' });
  };

  const handleUpdateItem = async () => {
    await axios.put(`http://45.55.45.170:8081/items/${editingItem.id}`, formData);
    fetchItems();
    setEditingItem(null);
    setFormData({ name: '', description: '' });
  };

  const handleDeleteItem = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
  
    if (confirmDelete) {
      try {
        await axios.delete(`http://45.55.45.170:8081/items/${id}`);
        fetchItems();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>

      {/* Create */}
      <div>
        <h2>Create Item</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <br></br>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
        <br></br>
        <button onClick={handleCreateItem}>Create</button>
      </div>
        
      {/* Read and Update */}
      <div>
        
        <ul>
          {items.map((item) => (
            <li key={item.id}>
                <h2>Items</h2>
              {editingItem && editingItem.id === item.id ? (
                <>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <br></br>
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleUpdateItem}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  {item.name} - {item.description}
                  <button onClick={() => handleStartEdit(item.id)}>Update</button>
                  <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Adp;

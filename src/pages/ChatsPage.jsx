import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Button, List, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat"; // Importing chat icon
import AddIcon from "@mui/icons-material/Add"; // Importing Add icon for creating new chats
import DeleteIcon from "@mui/icons-material/Delete"; // Importing Delete icon for deleting a chat
import PersonAddIcon from "@mui/icons-material/PersonAdd"; // Importing Person Add icon for adding users to the chat

const ChatsPage = () => {
  // State to hold chat data
  const [chats, setChats] = useState([]);
  const [newChatName, setNewChatName] = useState(""); // For creating a new chat

  // Simulating the fetch of chat data from an API
  useEffect(() => {
    // This should be replaced with an actual API call
    const fetchedChats = [
      {
        id: 1,
        name: "Chat with John",
        messages: [
          { id: 1, text: "Hey John!", status: "delivered", read: true },
          { id: 2, text: "How are you?", status: "delivered", read: false },
        ],
      },
      {
        id: 2,
        name: "Group Chat",
        messages: [
          { id: 1, text: "Hello everyone!", status: "delivered", read: true },
          { id: 2, text: "Welcome to the group!", status: "undelivered", read: false },
        ],
      },
    ];
    setChats(fetchedChats); // Setting fetched data into state
  }, []);

  // Function to handle creating a new chat
  const handleCreateNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      name: newChatName,
      messages: [],
    };
    setChats([...chats, newChat]);
    setNewChatName(""); // Resetting the chat name after creation
  };

  // Function to delete a chat
  const handleDeleteChat = (chatId) => {
    setChats(chats.filter((chat) => chat.id !== chatId));
  };

  // Function to add a user to a chat (this would need more implementation for real use)
  const handleAddUserToChat = (chatId) => {
    alert(`Add a new user to Chat ID: ${chatId}`); // Placeholder for adding a user
  };

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center" }}>
        <ChatIcon color="primary" sx={{ fontSize: 50 }} />
        <Typography variant="h5" gutterBottom>
          Your Chats
        </Typography>

        {/* Form for creating a new chat */}
        <Box display="flex" justifyContent="center" mb={3}>
          <input
            type="text"
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
            placeholder="Enter chat name"
            style={{ padding: "9px", marginRight: "9px", width: "70%" }}
          />
          <Button variant="contained" color="primary" onClick={handleCreateNewChat} startIcon={<AddIcon />}>
            Create New Chat
          </Button>
        </Box>

        {/* Chat List */}
        <List>
          {chats.map((chat) => (
            <ListItem key={chat.id} button>
              <ListItemIcon>
                <ChatIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={chat.name} />
              {/* Button for adding users */}
              <IconButton onClick={() => handleAddUserToChat(chat.id)} title="Add User">
                <PersonAddIcon color="action" />
              </IconButton>
              {/* Button for deleting the chat */}
              <IconButton onClick={() => handleDeleteChat(chat.id)} title="Delete Chat">
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>

        {/* Displaying chat details */}
        {chats.map((chat) => (
          <Box key={chat.id} mt={2} sx={{ textAlign: "left", paddingLeft: "16px" }}>
            <Typography variant="h6">{chat.name} - Messages</Typography>
            <List>
              {chat.messages.map((message) => (
                <ListItem key={message.id}>
                  <ListItemText
                    primary={message.text}
                    secondary={`Status: ${message.status} | ${message.read ? "Read" : "Unread"}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default ChatsPage;


import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ProjectList = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "Complete Calendar project", completed: false },
    { id: 2, name: "Project 2", description: "Meeting with Romario", completed: false }
  ]);
  const [newProject, setNewProject] = useState(""); // To add a new project
  const [editingProject, setEditingProject] = useState(null); // To edit a project

  const handleAddProject = () => {
    if (newProject.trim() === "") return; // Do not add empty projects
    const newProjectObj = {
      id: projects.length + 1,
      name: newProject,
      description: "No description",
      completed: false
    };
    setProjects([...projects, newProjectObj]);
    setNewProject(""); // Clear field after adding
  };

  const handleEditProject = (projectId) => {
    const projectToEdit = projects.find(project => project.id === projectId);
    if (projectToEdit) {
      setEditingProject(projectToEdit);
    }
  };

  const handleSaveProject = () => {
    setProjects(projects.map(project => 
      project.id === editingProject.id ? editingProject : project
    ));
    setEditingProject(null); 
  };

  const handleChange = (e) => {
    if (editingProject) {
      setEditingProject({ ...editingProject, name: e.target.value });
    } else {
      setNewProject(e.target.value);
    }
  };

  const toggleCompletion = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, completed: !project.completed } : project
      )
    );
  };

  return (
    <Box mt={2}>
      <Typography variant="h6" sx={{ color: 'red' }}>Projects</Typography>
      
      {/* Form for adding a new project */}
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <TextField 
          label="New Project"
          variant="outlined"
          fullWidth
          value={newProject}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddProject}>
          Add Project
        </Button>
      </Box>

      {/* List a project */}
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={project.completed}
              onChange={() => toggleCompletion(project.id)}
            />
            {editingProject && editingProject.id === project.id ? (
              <div>
                <TextField
                  value={editingProject.name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleSaveProject}>
                  Save
                </Button>
              </div>
            ) : (
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span>{project.name} - {project.completed ? "Completed" : "Pending"}</span>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditProject(project.id)}
                  sx={{
                    marginLeft: '5px',
                    padding: '2px 6px',
                    fontSize: '12px',
                    textTransform: 'none',
                  }}
                >
                  Edit
                </Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ProjectList;
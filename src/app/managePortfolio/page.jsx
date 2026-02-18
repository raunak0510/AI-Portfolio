'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ManagePortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    title: '',
    description: '',
    techStack: '',
    projectLink: '',
    image: null,
  });
  const [uploading, setUploading] = useState(false);

  // 🔹 Fetch all projects on load
  useEffect(() => {
    axios
      .get('/api/portfolio/getAll')
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.error(err);
        toast.error('Failed to load projects');
      });
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle file upload + project save
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!project.title || !project.description || !project.image) {
      toast.error('Please fill all fields and upload an image!');
      return;
    }

    setUploading(true);

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append('file', project.image);
    formData.append('upload_preset', 'Raunak');
    formData.append('cloud_name', 'dxiq6gyb6');

    axios
      .post('https://api.cloudinary.com/v1_1/dxiq6gyb6/image/upload', formData)
      .then((res) => {
        const newProject = {
          userId: 'dummyUser123', // replace with real userId later
          title: project.title,
          description: project.description,
          techStack: project.techStack,
          projectLink: project.projectLink,
          imageUrl: res.data.secure_url,
        };

        return axios.post('/api/portfolio/add', newProject);
      })
      .then(() => {
        toast.success('Project added successfully!');
        setProject({
          title: '',
          description: '',
          techStack: '',
          projectLink: '',
          image: null,
        });
        setUploading(false);
        // Refresh list
        return axios.get('/api/portfolio/getAll');
      })
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.error(err);
        toast.error('Failed to add project');
        setUploading(false);
      });
  };

  // 🔹 Delete a project
  const deleteProject = (id) => {
    axios
      .delete(`/api/portfolio/delete/${id}`)
      .then(() => {
        toast.success('Project deleted!');
        setProjects((prev) => prev.filter((p) => p._id !== id));
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to delete project');
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col items-center">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">Manage Portfolio</h2>

        {/* Form */}
        <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="Project Title"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
          />
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows="3"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
          ></textarea>
          <input
            type="text"
            name="techStack"
            value={project.techStack}
            onChange={handleChange}
            placeholder="Tech Stack (e.g. MERN, Tailwind, etc.)"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
          />
          <input
            type="text"
            name="projectLink"
            value={project.projectLink}
            onChange={handleChange}
            placeholder="Project Link (optional)"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProject((prev) => ({ ...prev, image: e.target.files[0] }))
            }
            className="file:bg-gray-700 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-2 cursor-pointer border border-gray-700 rounded-lg p-2 focus:outline-none"
          />

          <button
            type="submit"
            disabled={uploading}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              uploading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploading ? 'Uploading...' : 'Add Project'}
          </button>
        </form>

        {/* Display Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Projects</h3>
          {projects.length === 0 ? (
            <p className="text-gray-400 text-center">No projects added yet.</p>
          ) : (
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p._id}
                  className="bg-gray-700 p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-bold text-lg">{p.title}</h4>
                    <p className="text-gray-300 text-sm">{p.description}</p>
                    <p className="text-gray-400 text-sm">
                      <b>Tech:</b> {p.techStack}
                    </p>
                    {p.projectLink && (
                      <a
                        href={p.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm underline"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => deleteProject(p._id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePortfolio;

import React, { useState } from 'react';

const Aform = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    course: '',
    address: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert('Admission form submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">College Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Course</label>
          <select
            name="course"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Course</option>
            <option>Delpoma in Plant Science</option>
            <option>Delpoma in Animal Science</option>
            <option>Delpoma in Information technology</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            name="address"
            onChange={handleChange}
            rows={3}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Photo or Document</label>
          <input
            type="file"
            name="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            className="w-full mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 p-4 rounded-full hover:bg-pink-400 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Aform 

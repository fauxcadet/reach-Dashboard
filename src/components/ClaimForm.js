import React, { useState } from 'react';

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    contractValue: '',
    place: '',
    language: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.contractValue) formErrors.contractValue = "Contract Value is required!";
    if (!formData.place) formErrors.place = "Place is required!";
    if (!formData.language) formErrors.language = "Language is required!";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Contract Value</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={formData.contractValue}
          onChange={(e) => setFormData({ ...formData, contractValue: e.target.value })}
        />
        {errors.contractValue && <p className="text-red-500">{errors.contractValue}</p>}
      </div>
      
      {/* Place Input */}
      <div>
        <label>Place</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={formData.place}
          onChange={(e) => setFormData({ ...formData, place: e.target.value })}
        />
        {errors.place && <p className="text-red-500">{errors.place}</p>}
      </div>

      {/* Language Input */}
      <div>
        <label>Language</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={formData.language}
          onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        />
        {errors.language && <p className="text-red-500">{errors.language}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default ClaimForm;

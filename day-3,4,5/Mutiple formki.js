import React from "react";
import { useFormik } from "formik";

const MultiFieldForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Multi-Field Form</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiFieldForm;

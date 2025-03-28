import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MultiFieldForm = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
      address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .required("Address is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      setSubmittedData([...submittedData, values]);
      resetForm();
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
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-2 border rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 border rounded"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-2 border rounded"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="w-full p-2 border rounded"
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm">{formik.errors.address}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">Submitted Data</h3>
      <ul className="mt-2 space-y-2">
        {submittedData.map((data, index) => (
          <li key={index} className="p-2 border rounded">
            <strong>{data.name}</strong> - {data.email}, {data.phone}, {data.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiFieldForm;
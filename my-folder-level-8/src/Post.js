import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successmessage, setsuccessmessage] = useState("");
  const [error, seterror] = useState("");

  const hendlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const hendlesummit = async (e) => {
    e.prventDefault();
    setsuccessmessage("");
    seterror("");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formdata
      );
      if (response.status == 201) {
        setsuccessmessage("message submitted successfully");
        setformdata({ name: "", email: "", message: "" });
      }
    } catch (error) {
      seterror("error submitting message");
    }
  };
  return (
    <div>
      <div id="one">
        <form onSubmit={hendlesummit}>
          <div id="two">
            <label>NAME:</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={hendlechange}
              required
            />
          </div>
          <div id="three">
            <label> EMAIL:</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={hendlechange}
              required
            />
          </div>
          <div id="four">
            <label>MESSAGE:</label>
            <textarea name="message" value={formdata.message} onChange={hendlechange} required></textarea>
          </div>
          <div id="five">
            <button type="submit" >
              SUBMIT
            </button>
          </div>
        {setsuccessmessage && <p className="text-success">{successmessage}</p>}
        {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default Post;

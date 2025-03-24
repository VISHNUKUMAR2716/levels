import { useEffect, useState } from "react";

export default function Todo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [todos, settodos] = useState([]);
  const apiurl = "http://localhost:8001";
  const [error, seterror] = useState("");
  const [editid, seteditid] = useState("-1");
  const [message, setmessage] = useState("");
  //edit
  const [edittitle, setedittitle] = useState("");
  const [editdescription, seteditdescription] = useState("");

  const handlesubmit = () => {
    seterror("");
    if (title.trim() !== "" && description.trim() !== "") {
      fetch(apiurl + "/list", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((res) => {
          if (res.ok) {
            //add item todo list
            settodos([...todos, { title, description }]);
            setmessage("item added successfully");
            setTimeout(() => {
              setmessage("");
            }, 3000);
          } else {
            //set error
            seterror("unable to set todo list");
          }
        })
        .catch(() => {
          seterror("unable to create todos");
        });
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    fetch(apiurl + "/list")
      .then((res) => res.json())
      .then((res) => {
        settodos(res);
      });
  };
  const handeledit = (item) => {
    seteditid(item._id);
    setedittitle(item.title);
    seteditdescription(item.description);
  };
  const handeleditcancal = () => {
    seteditid(-1);
  };
  const handledelete = (id) => {
    if (window.confirm("are you sure want to delete the datas")) {
      fetch(apiurl + "/list/" + id, {
        method: "DELETE",
      }).then(() => {
        const updatedtodos = todos.filter((item) => item._id !== id);
        settodos(updatedtodos);
      });
    }
  };
  const handleupdated = () => {
    seterror("");
    if (edittitle.trim() !== "" && editdescription.trim() !== "") {
      fetch(apiurl + "/list/"+editid, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: edittitle,
          description: editdescription,
        }),
      })
        .then((res) => {
          if (res.ok) {
            const updatedtodos = todos.map((item) => {
              if (item._id == editid) {
                item.title = edittitle;
                item.description = editdescription;
              }
              return item;
            });
            //update item todo list
            settodos(updatedtodos);
            setmessage("item updated successfully");
            setTimeout(() => {
              setmessage("");
            }, 3000);

            seteditid(-1);
          } else {
            //set error
            seterror("unable to set todo list");
          }
        })
        .catch(() => {
          seterror("unable to create todos");
        });
    }
  };

  return (
    <>
      <div className="row p-3 bg-success text-light">
        <h1>Todo project with MERN Stack</h1>
      </div>
      <div className="row">
        <h3>Add item</h3>
        {message && <p className="text-success">{message}</p>}
        <div className="form-group d-flex gap-2">
          <input
            placeholder="title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
            className="form-control"
            type="text"
          />
          <input
            placeholder="descrition"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            className="form-control"
            type="text"
          />
          <button className=" btn btn-dark" onClick={handlesubmit}>
            submit
          </button>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </div>
      <div className="row mt-3">
        <h3>Task Item</h3>
        <ul className="list-group">
          {todos.map((item) => (
            <li className="list-group-item bg-info d-flex justify-content-between align-items-center my-2">
              <div className="d-flex flex-column me-2">
                {editid == -1 || editid !== item._id ? (
                  <>
                    <span className="fw-bold">{item.title}</span>
                    <span className="fw-bold">{item.description}</span>
                  </>
                ) : (
                  <>
                    {message && <p className="text-success">{message}</p>}
                    <div className="form-group d-flex gap-2">
                      <input
                        placeholder="title"
                        onChange={(e) => setedittitle(e.target.value)}
                        value={edittitle}
                        className="form-control"
                        type="text"
                      />
                      <input
                        placeholder="descrition"
                        onChange={(e) => seteditdescription(e.target.value)}
                        value={editdescription}
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="d-flex gap-2">
                {editid == -1 || editid !== item._id ? (
                  <button
                    className="btn btn-warning"
                    onClick={() => handeledit(item)}
                  >
                    Edit
                  </button>
                ) : (
                  <button className="btn btn-warning" onClick={handleupdated}>
                    update
                  </button>
                )}
                {editid == -1 || editid !== item._id ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => handledelete(item._id)}
                  >
                    Delete
                  </button>
                ) : (
                  <button className="btn btn-danger" onClick={handeleditcancal}>
                    cancal
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import React, { useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date();
  const handelSubmit = () => {
    firebase
      .storage()
      .ref(`/images/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          firebase.firestore().collection("products").add({
            name: fname,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
          navigate("/");
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <button onClick={handelSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </>
  );
};

export default Create;

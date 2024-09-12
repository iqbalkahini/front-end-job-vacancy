import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("name", id);
    data.append("age", pwd);

    axios
      .post("http://localhost:3000/api/v1/auth/login", {
        data,
      })
      .then((response) => {
        // Simpan respons dari server
        alert("Data berhasil dikirim!");
      })
      .catch((error) => {
        // Tampilkan pesan error jika ada masalah
        console.error("Error:", error);
        setResponseMessage("There was an error submitting the form.");
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="id-card">
          <label htmlFor="id">ID Card</label> <br />
          <input
            type="text"
            id="id"
            name="id_card"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="pwd">
          <label htmlFor="pwd">Password</label> <br />
          <input
            type="password"
            id="pwd"
            name="password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button className="submit" onClick={() => handleSubmit()}>
          Login
        </button>
      </form>
    </div>
  );
}

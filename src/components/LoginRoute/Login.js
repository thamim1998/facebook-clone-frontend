import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import styles from "./Login.module.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const loginSubmit = (event) => {
    event.preventDefault();
    const verified = { username, password };
    axios
      .post("http://localhost:5000/api/user/login", verified)
      .then((response) => {
        console.log(response);
        alert('login successful');
       window.location.href = '/homepage'
      })
      .catch((error) => {
        alert("please your check username and password")
      });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    const registration = { name, username, password };
    console.log(registration, "registration");
    axios.post("http://localhost:5000/api/user/register", registration)
    .then((response) => {
      console.log(response);
      alert("successful created your account")
    }) .catch((error) =>{
      console.log(error);
    })
    setShow(false);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="login-route" style={{ backgroundColor: "#f0f2f5" }}>
      <div className={styles.container}>
        <div className="row">
          <div className="col-6">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Picture of the author"
              className={styles.logo}
            />

            <h4>Recent Logins</h4>
            <p>Click your image or add an account </p>
          </div>
          <div className="col-6">
            <div>
              <div className={styles.inputForm}>
                <form onSubmit={(event) => loginSubmit(event)}>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    className={styles.formControl}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                    <button className={styles.buttonLogin}>Log In</button>
                  </div>
                </form>

                <div className={styles.forgotPassword}>
                  <Link href="/">
                    <a>Forgetten Password?</a>
                  </Link>
                </div>

                <hr />
                <div>
                  <Button
                    className={styles.buttonRegister}
                    onClick={handleShow}
                  >
                    Create a new account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(event) => registerSubmit(event)}>           
              <input
                type="text"
                className={styles.formControl}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               <input
                type="text"
                className={styles.formControl}
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className={styles.formControl}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>{name}</p>
              <p>{username} </p>
              <p>{password} </p>

              <div>
                <button className={styles.buttonLogin}>Sign up</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Login;

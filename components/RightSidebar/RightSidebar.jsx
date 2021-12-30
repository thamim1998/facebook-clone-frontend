import styles from "./RightSidebar.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RightSidebar() {
  const [data, setData] = useState([]);



  return (
    <div className={styles.RightSidebar}>
      <div className={styles.header}>
        <div>
          <h4>Contacts</h4>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
      </div>
      <div className={styles.activeMembers}>
      <div>
        <img src="/assets/img/pic.jpeg" alt="username" />
        <p>Thamim</p>
      </div> <div>
        <img src="/assets/img/pic.jpeg" alt="username" />
        <p>Thamim</p>
      </div> <div>
        <img src="/assets/img/pic.jpeg" alt="username" />
        <p>Thamim</p>
      </div> <div>
        <img src="/assets/img/pic.jpeg" alt="username" />
        <p>Thamim</p>
      </div> <div>
        <img src="/assets/img/pic.jpeg" alt="username" />
        <p>Thamim</p>
      </div>
      </div>
    </div>
  );
}

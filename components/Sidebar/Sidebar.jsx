import styles from "./Sidebar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className={styles.Sidebar}>
      <div>
        <img src="/assets/img/pic.jpeg" alt="username" />
        <p>Thamim</p>
      </div>
      <div>
        <img src="/assets/img/friend.png" alt="username" />
        <p>Friends</p>
      </div>
      <div>
        <img src="/assets/img/Group.png" alt="username" />
        <p>Group</p>
      </div>
      <div>
        <img src="/assets/img/youtube.png" alt="username" />
        <p>Youtube player</p>
      </div>
      <div onClick={() => setSeeMore(!seeMore)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
        <p>See more</p>
      </div>
      {seeMore ? (
        <div style={{ display: "contents" }}>
          <div>
            <img src="/assets/img/messenger.png" alt="username" />
            <p>Messenger</p>
          </div>
          <Link href="https://www.twitch.tv/">
            <div>
              <img src="/assets/img/gaming.png" alt="username" />
              <p>Gaming Video</p>
            </div>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

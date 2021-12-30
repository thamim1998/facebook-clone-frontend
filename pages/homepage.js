import styles from "./../src/components/Homepage.module.css"
import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../src/components/FeedRoute/Feed";

function homepage() {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
      <Sidebar/>
      <Feed/>
      <RightSidebar/>
      </div>
    </div>
  );
}

export default homepage;

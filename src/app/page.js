import PostList from "@/components/PostList";
import styles from "./homepage.module.css";
function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      <PostList />
    </div>
  );
}

export default Home;

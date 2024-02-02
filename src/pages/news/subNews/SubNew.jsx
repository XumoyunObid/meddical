import "./subnew.css";
import SearchIcon from "./../../../assets/icons/SearchIcon";
import Post from "./Post";

import post1 from "../../../assets/news/post1.png";
import post2 from "../../../assets/news/post2.png";
import post3 from "../../../assets/news/post3.png";
import post4 from "../../../assets/news/post4.png";
import post5 from "../../../assets/news/post5.png";
import post6 from "../../../assets/news/post6.png";
const SubNew = () => {
  return (
    <div className="subNews">
      <div className="subnewsInputWrapper">
        <input className="subnewsInput" type="text" placeholder="Search" />
        <SearchIcon />
      </div>
      <div className="posts">
        <h1 className="posts-title">Recent Posts</h1>
        <div className="recentPosts">
          <Post img={post1} />
          <Post img={post2} />
          <Post img={post3} />
          <Post img={post4} />
          <Post img={post5} />
          <Post img={post6} />
        </div>
      </div>
    </div>
  );
};

export default SubNew;

import "./subnew.css";
const Post = ({ img }) => {
  return (
    <div className="post">
      <img src={img} alt="" />
      <div className="post-titles">
        <p className="post-title1">Monday 05, September 2021</p>
        <p className="post-title2">
          This Article’s Title goes Here, but not too long.
        </p>
      </div>
    </div>
  );
};

export default Post;

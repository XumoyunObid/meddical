import "./banner.css";
import newsBg from '../../../assets/news/newsBg.png'
import newsSubBg from '../../../assets/news/newsSubBg.png'

const Banner = () => {
  return (
    <section className="showcase">
      <img src={newsBg} alt="" className="newsBg" />
      <img src={newsSubBg} alt="" className="subBg" />
        <div className="showcase-wrapper">
          <h2 className="showcase-text">Home / News</h2>
          <h1 className="showcase-title">Blog Posts</h1>
        </div>
    </section>
  );
};

export default Banner;

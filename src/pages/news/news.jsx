import React from "react";
import Banner from "./banner/Banner";
import New from "./New";
import "./news.css";

import new1 from "../../assets/news/firstNew.png";
import new2 from "../../assets/news/secondNew.png";
import new3 from "../../assets/news/thirdNew.png";
import new4 from "../../assets/news/fourthNew.png";
import SubNew from "./subNews/SubNew";
import Categories from "./categories/Categories";
import Pagination from "./paagination/Pagination";

export const News = () => {
  return (
    <div>
      <Banner />
      <div className="container news-wrapper">
        <div className="left">
          <New img={new1} />
          <New img={new2} />
          <New img={new3} />
          <New img={new4} />
          <Pagination />
        </div>
        <div className="right">
          <SubNew />
          <Categories />
        </div>
      </div>
    </div>
  );
};

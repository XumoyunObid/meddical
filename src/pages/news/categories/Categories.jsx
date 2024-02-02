import "./categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-wrapper">
        <h1 className="categories-title">Categories</h1>
        <ul className="categories-list">
          <li>
            <p className="categories-list-items">
              Surgery <span className="category-number">3</span>
            </p>
          </li>
          <li>
            <p className="categories-list-items">
              Health Care <span className="category-number">5</span>
            </p>
          </li>
          <li>
            <p className="categories-list-items">
              Medical <span className="category-number">8</span>
            </p>
          </li>
          <li>
            <p className="categories-list-items">
              Professional <span className="category-number">10</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;

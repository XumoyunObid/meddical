import ChevronRightIcon from "../../../assets/icons/ChevronRightIcon";
import ChevronLeftIcon from "./../../../assets/icons/ChevronLeftIcon";
import "./pagination.css"
const Pagination = () => {
  return (
    <div className="pagination container">
      <ul className="pagination-list">
        <li className="pagination-list-item">
          <ChevronLeftIcon /> Previous Page
        </li>
        <li className="pagination-list-item">1 - 2 - 3 - 4 - 5</li>
        <li className="pagination-list-item">
          Next Page <ChevronRightIcon/>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

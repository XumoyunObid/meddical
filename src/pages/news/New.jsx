import StatusList from "./StatusList";
import Button from './Button';

const New = ({ img }) => {
  return (
    <div className="newWrapper">
      <img src={img} alt="" />
      <StatusList />
      <h1 className="new-title">A passion for putting patients first</h1>
      <p className="new-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</p>
      <Button/>
    </div>
  );
};

export default New;

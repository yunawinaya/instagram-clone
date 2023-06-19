import { Button } from "react-bootstrap";

export default function IconButton({ isTop, isBottom, className, onClick }) {
  let margin;

  if (isTop) {
    margin = "light mt-4 mb-4";
  } else if (isBottom) {
    margin = "light mt-auto mb-3";
  } else {
    margin = "light";
  }

  return (
    <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
      <i className={className} style={{ fontSize: "24px" }}></i>
    </Button>
  );
}

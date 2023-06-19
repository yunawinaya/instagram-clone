import { Col, Row } from "react-bootstrap";
import IconButton from "./components/IconButton";

export default function App() {
  return (
    <Row>
      <Col
        sm={1}
        className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
        style={{ position: "sticky", top: 0 }}
      >
        <IconButton isTop={true} className="bi bi-instagram" />
        <IconButton className="bi bi-house" />
        <IconButton className="bi bi-search" />
        <IconButton className="bi bi-compass" />
        <IconButton className="bi bi-film" />
        <IconButton className="bi bi-chat" />
        <IconButton className="bi bi-heart" />
        <IconButton className="bi bi-plus-square" />
        <IconButton className="bi bi-person-circle" />
        <IconButton isBottom={true} className="bi bi-list" />
      </Col>
      <Col sm={11}>Main</Col>
    </Row>
  );
}

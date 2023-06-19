import { Col, Image, Row } from "react-bootstrap";
import { ProfileContext } from "../App";
import { useContext } from "react";

export default function ProfileHeader() {
  const { image } = useContext(ProfileContext);

  return (
    <Row className="p-5">
      <Col md={3} className="d-flex align-items-center justify-content-center">
        <Image src={image} style={{ height: "150px" }} roundedCircle />
      </Col>
      <Col md={9}>Profile Description</Col>
    </Row>
  );
}

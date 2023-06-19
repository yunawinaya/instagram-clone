import { useContext } from "react";
import { ProfileContext } from "../App";
import { Col, Image, Row } from "react-bootstrap";

export default function ImageGrid() {
  const images = useContext(ProfileContext).posts.map((post) => post.image);

  const renderImage = () => {
    return images.map((imageUrl, index) => (
      <Col md={4} key={index} className="mb-4">
        <Image src={imageUrl} fluid />
      </Col>
    ));
  };

  return <Row>{renderImage()}</Row>;
}

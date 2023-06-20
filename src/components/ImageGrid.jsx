import { useSelector } from "react-redux";
import { Col, Image, Row } from "react-bootstrap";

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);

  const renderImage = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image src={post.image} fluid />
      </Col>
    ));
  };

  return <Row>{renderImage()}</Row>;
}

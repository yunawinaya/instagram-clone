import { useState } from "react";
import { useContext } from "react";
import { ProfileContext } from "../App";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postsSlice";

export default function AddPostModal({ show, handleClose }) {
  const { image, name } = useContext(ProfileContext);
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl) {
      dispatch(createPost({ image: imageUrl, caption }));
      setImageUrl("");
      setCaption("");
      handleClose();
    } else {
      setInvalidUrl(false);
    }
  };

  const handleImageError = () => {
    setInvalidUrl(true);
  };

  const handleImageLoad = () => {
    setInvalidUrl(false);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header>
        <Modal.Title>Create new post</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col sm={7} style={{ margin: `0px` }}>
              <Image
                src={imageUrl ? imageUrl : "https://sig1.co/img-placeholder-1"}
                alt="uploaded content"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ width: `100%` }}
              />
            </Col>
            <Col sm={5}>
              <Image
                src={image}
                roundedCircle
                alt="uploader"
                style={{ width: `32px` }}
              />
              <span className="ms-3">{name}</span>
              <Form.Control
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="my-3"
                placeholder="Add image url"
              />
              {invalidUrl && (
                <div className="text-danger">
                  Invalid URL or failed to load image
                </div>
              )}
              <Form.Control
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="my-3"
                as="textarea"
                rows={3}
                placeholder="Write a caption..."
              />
              <Button type="submit" style={{ width: `100%` }}>
                Share
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

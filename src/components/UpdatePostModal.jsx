import { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../App";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../features/posts/postsSlice";

export default function UpdatePostModal({ show, handleClose, postId }) {
  const { image, name } = useContext(ProfileContext);
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);

  useEffect(() => {
    if (post) {
      setImageUrl(post.image);
      setDescription(post.caption);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl) {
      dispatch(updatePost({ id: postId, image: imageUrl, description }));
      setImageUrl("");
      setDescription("");
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
        <Modal.Title>Edit post</Modal.Title>
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
                alt="uploader"
                style={{ width: `32px` }}
                roundedCircle
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

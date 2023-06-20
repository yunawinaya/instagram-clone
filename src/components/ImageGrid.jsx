import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Image, Row } from "react-bootstrap";
import UpdatePostModal from "./UpdatePostModal";
import { deletePost, likePost } from "../features/posts/postsSlice";

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  };

  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  };

  const handleDelete = (post) => {
    dispatch(deletePost(post));
    handleClose();
  };

  const handleLike = (post) => {
    dispatch(likePost(post));
    handleClose();
  };

  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image src={post.image} fluid className="mb-2" />
        <p className="mb-2">{post.description}</p>
        <p className="mb-2">
          <strong>{post.likes} likes</strong>
        </p>
        <Button
          onClick={() => handleShow(post)}
          variant="outline-primary"
          className="me-2"
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button
          onClick={() => handleDelete(post)}
          variant="outline-danger"
          className="me-2"
        >
          <i className="bi bi-trash"></i>
        </Button>
        <Button
          onClick={() => handleLike(post)}
          variant="outline-success"
          className="me-2"
        >
          <i className="bi bi-heart"></i>
        </Button>
      </Col>
    ));
  };

  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && (
        <UpdatePostModal
          show={show}
          handleClose={handleClose}
          postId={currentPost.id}
        />
      )}
    </>
  );
}

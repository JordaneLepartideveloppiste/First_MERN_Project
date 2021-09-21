import NewPostForm from "../Post/NewPostForm"


const ModalNewPost = ({setModalNewPost, actualWidth}) => {
    return (
      <div className="modal-new-post">
        <NewPostForm
          setModalNewPost={setModalNewPost}
          actualWidth={actualWidth}
        />
      </div>
    );
};

export default ModalNewPost;
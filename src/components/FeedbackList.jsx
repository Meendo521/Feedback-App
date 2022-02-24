import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, deleteHandler }) => {
  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet!</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  // feedback: PropTypes.array.isRequired
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ),
};

export default FeedbackList;

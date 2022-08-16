import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onLeaveFeedback, options, output }) => {
  return (
    <>
      {options.map(opt => (
        <Button key={opt} name={opt} onClick={onLeaveFeedback}>
          {output[opt]}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

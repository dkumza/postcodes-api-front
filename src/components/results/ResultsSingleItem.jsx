import PropTypes from 'prop-types';

export const ResultsSingleItem = ({ text, info }) => {
  return (
    <ul>
      <li className='font-semibold'>
        {text} <span className='font-normal'>{info}</span>
      </li>
    </ul>
  );
};

ResultsSingleItem.propTypes = {
  text: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

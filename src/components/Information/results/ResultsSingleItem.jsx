import PropTypes from 'prop-types';

export const ResultsSingleItem = ({ text, info }) => {
  return (
    <ul>
      <li className='font-normal text-sm'>
        {text} <i>{info}</i>
      </li>
    </ul>
  );
};

ResultsSingleItem.propTypes = {
  text: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

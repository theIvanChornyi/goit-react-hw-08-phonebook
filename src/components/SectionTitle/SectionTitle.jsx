import { StyledTitle } from './SectionTitle.styled';
import PropTypes from 'prop-types';

export default function SectionTitle({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};

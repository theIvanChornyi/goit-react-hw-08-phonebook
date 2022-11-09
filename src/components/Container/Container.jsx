import PropTypes from 'prop-types';
import { PageWrapper } from './Container.styled';

export default function Container({ children }) {
  return <PageWrapper>{children}</PageWrapper>;
}

Container.propTypes = {
  children: PropTypes.node,
};

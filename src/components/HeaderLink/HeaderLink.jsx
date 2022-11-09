import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function HeaderLink({ children, to }) {
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? 'black' : '',
        fontWeight: 'black',
      })}
      to={to}
    >
      {children}
    </NavLink>
  );
}

HeaderLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

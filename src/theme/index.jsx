import {useContext} from 'react';
import {oneOfType, node, arrayOf} from 'prop-types';
import {ThemeProvider as Provider, ThemeContext} from 'styled-components';

import {styledComponentTheme} from './Theme';

const status = false;

const {fonts, DEFAULT_MODE_COLORS, DARK_MODE_COLORS} = styledComponentTheme;

export const colors = status ? DARK_MODE_COLORS : DEFAULT_MODE_COLORS;

const ThemeProvider = ({children}) => {
  return <Provider theme={{fonts, colors}}>{children}</Provider>;
};

export const useAppTheme = () => useContext(ThemeContext);

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

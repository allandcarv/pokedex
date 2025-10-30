import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  width: ['100vw', '100dvw'],
  height: '100%',
  minHeight: ['100vh', '100dvh'],
});

globalStyle('#root', {
  minHeight: '100%',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: 'inherit',
  font: 'inherit',
});

globalStyle('input, textarea, select', {
  color: 'inherit',
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

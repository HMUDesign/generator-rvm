import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/);

configure(function loadStories() {
  req.keys().forEach((filename) => req(filename));
}, module);

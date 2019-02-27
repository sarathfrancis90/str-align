'use strict';

const validAlignments = ['center', 'left', 'right'];
const align = (string, maxWidth, alignment, padValue) => {
  string = (string || '').toString();
  maxWidth = Number(maxWidth || 0);
  alignment = (alignment || '').toString();
  if (!validAlignments.includes(alignment)) {
    alignment = 'center';
  }
  padValue = (padValue || ' ').toString();
  let padBlock = '';
  for (let i = 0; i < (maxWidth - string.length); i++) {
    padBlock += padValue;
  }
  switch (alignment) {
    case 'center':
      return padBlock.slice(0, padBlock.length / 2) + string + padBlock.slice((padBlock.length / 2));
    case 'left':
      return string + padBlock;
    case 'right':
      return padBlock + string;
    default:
      return padBlock.slice(0, padBlock.length / 2) + string + padBlock.slice((padBlock.length / 2));
      break;
  }
};
module.exports = align;
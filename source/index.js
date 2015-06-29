import fn from './fn';

export const displayFlex = {
  display: 'flex; display: -webkit-flex'
};
export const flexCenter = {
    displayFlex,
    justifyContent: fn.justifyContent('center'),
    alignItems: fn.alignItems('center')
};

export default {
  displayFlex,
  flexCenter,
  fn
};


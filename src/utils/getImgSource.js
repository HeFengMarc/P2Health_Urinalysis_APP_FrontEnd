export default function getImgSource(src) {
  let imgSource;

  if (typeof src === 'string') {
    // network image
    imgSource = { uri: src };
  }
  if (typeof src === 'number') {
    // static image
    imgSource = src;
  }

  return imgSource;
}

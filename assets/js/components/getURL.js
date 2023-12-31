export default function getURL(path) {
  // remove leading "./", "../", "." and "/"
  path = path.replace(/^(\.\/|(\.\.\/)|\.|\/)/, '');
  // forward-slash is required in this case 
  return new URL(`/${path}`, import.meta.url).href;
}
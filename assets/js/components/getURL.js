export default function getURL(path) {
  // Remove leading "./", "../", "." and "/"
  path = path.replace(/^(\.\/|(\.\.\/)|\.|\/)/, '');
  // forward-slash is required in this situation
  return new URL(`/${path}`, import.meta.url).href;
}
export default function normalizeUrl(url) {
    if ((url.split(''))[url.length - 1] === '/')
        return (url.slice(0, -1));
    return (url);
}
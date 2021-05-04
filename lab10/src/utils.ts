export default function normalizeUrl(url: string): string {
    if ((url.split(''))[url.length - 1] === '/')
        return (url.slice(0, -1));
    return (url);
}
export default function isMobilePt() {
    return (window.innerWidth <= 500 || window.innerHeight <= 500) && window.innerWidth <= window.innerHeight;
}

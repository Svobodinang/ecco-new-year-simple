export default function isMobilePt() {
    return (window.innerWidth <= 650 || window.innerHeight <= 650) && window.innerWidth <= window.innerHeight;
}

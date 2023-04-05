function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer__copyright">Trade Broadcast {year} &copy;</p>
        </footer>
    )
}

export default Footer;

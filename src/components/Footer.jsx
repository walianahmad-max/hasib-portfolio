import { Link } from 'react-router-dom';
import portrait from '../assets/hasib-profile.jpg';
export default function Footer(){return (<footer className="site-footer">
<div className="container footer-grid">
<div>
<p className="eyebrow">{"Let’s build something useful"}</p>
<h2 className="footer-title">{"Have an idea?"}<br />{"Let’s talk."}</h2>
<div className="footer-contact">
<a className="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=hasibwalian5550@gmail.com" target="_blank" rel="noopener noreferrer">{"Email me ↗"}</a>
<a className="btn btn-whatsapp" href="https://wa.me/93787748978" target="_blank" rel="noopener noreferrer">{"WhatsApp me ↗"}</a>
</div>
</div>
<div className="footer-col">
<h4>{"Links"}</h4>
<Link to="/">{"Work"}</Link>
<Link to="/experiments">{"Experiments"}</Link>
<Link to="/about">{"About"}</Link>
<Link to="/resume">{"Resume"}</Link>
</div>
<div className="footer-col">
<h4>{"Social"}</h4>
<div className="social-links"><a className="social-link" href="https://www.instagram.com/hasib_walian?igsi=Z3p0dGE1M3NuYno3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><span className="social-icon"><img src={new URL("../assets/social-0.svg", import.meta.url).href} alt="" /></span></a><a className="social-link" href="https://www.linkedin.com/in/hasib-waliyan-778862426?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><span className="social-icon"><img src={new URL("../assets/social-1.svg", import.meta.url).href} alt="" /></span></a><a className="social-link" href="https://github.com/walianahmad-max?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><span className="social-icon"><img src={new URL("../assets/social-2.svg", import.meta.url).href} alt="" /></span></a><a className="social-link" href="https://x.com/hasibahmad2025?t=jcSCqimpuY6Q7506VTdv7A&s=09" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" title="X / Twitter"><span className="social-icon"><img src={new URL("../assets/social-3.svg", import.meta.url).href} alt="" /></span></a></div>
</div>
</div>
<div className="container footer-bottom">
<span>{"© "}<span>{new Date().getFullYear()}</span>{" Hasib Waliyan"}</span>
<span>{"Designed & coded with HTML, CSS and JavaScript."}</span>
</div>
</footer>);}

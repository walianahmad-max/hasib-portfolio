import { Link } from 'react-router-dom';
import portrait from '../assets/hasib-profile.jpg';
export default function Resume(){return (<main className="section">
<div className="container resume-layout">

<aside className="resume-sidebar reveal">
<div className="portrait-wrap">
<img src={portrait} alt="Hasib Waliyan" />
</div>
<h1 style={{"fontSize": "3rem", "lineHeight": "0.95", "letterSpacing": "-0.05em", "marginBottom": "12px"}}>{"\n            Hasib Waliyan\n          "}</h1>
<p style={{"color": "var(--muted)"}}>{"\n            Web Development Student"}<br />{"Designer · Writer · Tech Enthusiast\n          "}</p>
<a className="btn btn-dark" href="https://mail.google.com/mail/?view=cm&fs=1&to=hasibwalian5550@gmail.com" target="_blank" rel="noopener noreferrer">{"Contact me ↗"}</a>
</aside>

<div className="resume-content">
<section className="reveal">
<span className="eyebrow">{"Profile"}</span>
<h2>{"About"}</h2>
<p>{"\n              I’m a German Language & Literature graduate from Kabul University\n              who is now focused on web development. I bring together\n              communication, writing, design thinking and technology, with a\n              long-term interest in entrepreneurship and international\n              education.\n            "}</p>
</section>
<section className="reveal">
<span className="eyebrow">{"Current path"}</span>
<h2>{"Learning"}</h2>
<div className="resume-row">
<div>
<h3>{"Web Development"}</h3>
<p>{"Current studies"}</p>
</div>
<div>
<p>{"\n                  Building practical skills in HTML, CSS, JavaScript, responsive\n                  design, front-end structure, UI design and modern web tools.\n                "}</p>
</div>
</div>
</section>
<section className="reveal">
<span className="eyebrow">{"Education"}</span>
<h2>{"Education"}</h2>
<div className="resume-row">
<div>
<h3>{"German Language & Literature"}</h3>
<p>{"Kabul University"}</p>
</div>
<div>
<p>{"\n                  Bachelor-level university education focused on German\n                  language, literature, communication and cultural studies.\n                "}</p>
</div>
</div>
<div className="resume-row">
<div>
<h3>{"High School Graduate"}</h3>
<p>{"Ghazi High School"}</p>
</div>
<div>
<p>{"\n                  Completed secondary education before continuing to Kabul\n                  University.\n                "}</p>
</div>
</div>
</section>
<section className="reveal">
<span className="eyebrow">{"Capabilities"}</span>
<h2>{"Skills"}</h2>
<div className="chips">
<span className="chip">{"HTML"}</span><span className="chip">{"CSS"}</span><span className="chip">{"JavaScript"}</span><span className="chip">{"Responsive Web Design"}</span><span className="chip">{"Computer Skills"}</span><span className="chip">{"Technology"}</span><span className="chip">{"Digital Design"}</span><span className="chip">{"Writing"}</span><span className="chip">{"Communication"}</span><span className="chip">{"Creative Thinking"}</span>
</div>
</section>
<section className="reveal">
<span className="eyebrow">{"Toolkit"}</span>
<h2>{"Tools I’m learning & using"}</h2>
<div className="chips">
<span className="chip">{"VS Code"}</span><span className="chip">{"Figma"}</span><span className="chip">{"GitHub"}</span><span className="chip">{"Browser DevTools"}</span><span className="chip">{"Canva"}</span><span className="chip">{"AI Tools"}</span>
</div>
</section>
<section className="reveal">
<span className="eyebrow">{"Direction"}</span>
<h2>{"Goals"}</h2>
<p>{"\n              Continue developing my web and technology skills, pursue future\n              study opportunities in Germany, gain international experience, and\n              eventually build a strong career as an entrepreneur and\n              businessman.\n            "}</p>
</section>
</div>
</div>
</main>);}

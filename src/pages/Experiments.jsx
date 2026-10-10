import { Link } from 'react-router-dom';
import portrait from '../assets/hasib-profile.jpg';
export default function Experiments(){return (<main>

<section className="section-sm"><div className="container"><span className="eyebrow">{"Playground"}</span><h1 className="page-title reveal">{"Experiments,"}<br />{"ideas & practice."}</h1></div></section>

<section className="section-sm"><div className="container experiments-grid">
<article className="experiment-card reveal"><div className="exp-art exp-a tall"><span>{"TYPE"}</span></div><div className="exp-label">{"Movement through typography"}</div></article>
<article className="experiment-card reveal"><div className="exp-art exp-b short"><span>{"01"}</span></div><div className="exp-label">{"Minimal interface study"}</div></article>
<article className="experiment-card reveal"><div className="exp-art exp-c"><span>{"GRID"}</span></div><div className="exp-label">{"Layout and spacing systems"}</div></article>
<article className="experiment-card reveal"><div className="exp-art exp-d tall"><span>{"IDEA"}</span></div><div className="exp-label">{"Poster and visual direction"}</div></article>
<article className="experiment-card reveal"><div className="exp-art exp-e"><span>{"WEB"}</span></div><div className="exp-label">{"Landing page composition"}</div></article>
<article className="experiment-card reveal"><div className="exp-art exp-f short"><span>{"CODE"}</span></div><div className="exp-label">{"JavaScript interaction test"}</div></article>
</div></section>
</main>);}

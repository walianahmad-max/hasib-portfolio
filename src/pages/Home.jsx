import { Link } from 'react-router-dom';
import portrait from '../assets/hasib-profile.jpg';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
export default function Home(){return (<main>

<section className="hero">
<div className="container hero-grid">
<div className="reveal">
<span className="eyebrow">{"Portfolio / 2026"}</span>
<h1>{"Hasib"}<br />{"Waliyan"}</h1>
</div>
<div className="hero-copy reveal">
<h2>{"\n              Web developer building clean, useful and thoughtful digital\n              experiences.\n            "}</h2>
<p>{"\n              I’m a graduate of German Language & Literature from Kabul\n              University and currently studying web development. I enjoy\n              combining technology, design and writing to turn ideas into clear,\n              engaging websites.\n            "}</p>
<div className="hero-actions">
<a className="btn btn-dark" href="#work">{"My latest work ↓"}</a>
<Link className="btn" to="/about">{"About me ↗"}</Link>
</div>
</div>
</div>
</section>

<section className="section" id="work">
<div className="container">
<div className="section-head reveal">
<div>
<span className="eyebrow">{"Selected projects"}</span>
<h2>{"Things I’m"}<br />{"building."}</h2>
</div>
<p>{"\n              These are course projects I built while learning web development,\n              focused on responsive layouts, visual design and practical HTML/CSS skills.\n            "}</p>
</div>
<div className="projects-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div>
</div>
</section>
</main>);}

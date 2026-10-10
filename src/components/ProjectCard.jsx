import { Fragment } from 'react';
export default function ProjectCard({project}) {
 return <article className="project-card reveal"><a href={project.live} target="_blank" rel="noopener noreferrer"><div className={project.visual}><span>{project.lines.map((line,index)=><Fragment key={line}>{index>0&&<br/>}{line}</Fragment>)}</span></div></a><div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div><span>{project.year}</span></div><div className="project-links"><a href={project.live} target="_blank" rel="noopener noreferrer">View Live ↗</a><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></article>;
}

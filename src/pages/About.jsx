import { Link } from 'react-router-dom';
import portrait from '../assets/hasib-profile.jpg';
export default function About(){return (<main>

<section className="section">
<div className="container about-hero">
<div className="portrait-wrap reveal"><img src={portrait} alt="Portrait of Hasib Waliyan" /></div>
<div className="about-copy reveal">
<span className="eyebrow">{"About me"}</span>
<h1>{"Hi, I’m"}<br />{"Hasib."}</h1>
<p>{"I’m a graduate of German Language and Literature from Kabul University and a graduate of Ghazi High School. Today, I’m studying web development and building my skills in front-end development, digital design and modern technology."}</p>
<p>{"My background in language and literature taught me how to communicate ideas clearly, while web development gives me the tools to turn those ideas into useful digital experiences. I enjoy learning, experimenting and improving one project at a time."}</p>
<p>{"In the future, I hope to continue my education in Germany, grow internationally, and combine technology with entrepreneurship. My long-term goal is to become a successful businessman who creates valuable products, opportunities and meaningful work."}</p>
<Link className="btn btn-dark" to="/resume">{"View resume ↗"}</Link>
</div>
</div>
</section>

<section className="section">
<div className="container">
<div className="section-head reveal"><div><span className="eyebrow">{"Life outside code"}</span><h2>{"What I’m"}<br />{"into."}</h2></div><p>{"The interests that keep me curious, creative and open to new ideas."}</p></div>
<div className="interests-grid">
<div className="interest reveal"><span className="icon">{"♫"}</span><div><h3>{"Music"}</h3><p>{"Discovering new sounds and finding inspiration in different styles."}</p></div></div>
<div className="interest reveal"><span className="icon">{"⌁"}</span><div><h3>{"Reading"}</h3><p>{"Books about ideas, people, business, stories and personal growth."}</p></div></div>
<div className="interest reveal"><span className="icon">{"✈"}</span><div><h3>{"Travel"}</h3><p>{"Exploring new places, cultures and ways of thinking."}</p></div></div>
<div className="interest reveal"><span className="icon">{"DE"}</span><div><h3>{"Germany"}</h3><p>{"A future study destination and a culture I want to experience more deeply."}</p></div></div>
</div>
</div>
</section>

<section className="section">
<div className="container">
<div className="section-head reveal"><div><span className="eyebrow">{"My mindset"}</span><h2>{"Values behind"}<br />{"my work."}</h2></div></div>
<div className="values-grid">
<div className="value reveal"><h3>{"Curiosity"}</h3><p>{"I enjoy learning new tools, ideas and technologies instead of staying in one comfort zone."}</p></div>
<div className="value reveal"><h3>{"Discipline"}</h3><p>{"I believe real progress comes from consistent practice and improving small details over time."}</p></div>
<div className="value reveal"><h3>{"Creativity"}</h3><p>{"I like combining writing, design and technology to find original solutions."}</p></div>
<div className="value reveal"><h3>{"Ambition"}</h3><p>{"I’m building skills today with a bigger goal: creating a strong future in business and technology."}</p></div>
</div>
</div>
</section>
</main>);}

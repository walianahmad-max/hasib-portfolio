import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import portrait from '../assets/hasib-profile.jpg';
export default function Header() {
 const [open,setOpen]=useState(false), [scrolled,setScrolled]=useState(false);
 const location=useLocation();
 useEffect(()=>{setOpen(false)},[location.pathname]);
 useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open')},[open]);
 useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>12);scroll();window.addEventListener('scroll',scroll);return()=>window.removeEventListener('scroll',scroll)},[]);
 return <header className={`site-header${scrolled?' scrolled':''}`}><div className="container nav"><Link className="brand" to="/"><img className="brand-avatar" src={portrait} alt="Hasib Waliyan"/><span>Hasib Waliyan</span></Link><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button><nav className={`nav-links${open?' open':''}`} aria-label="Main navigation">{[['/','Projects'],['/experiments','Experiments'],['/about','About'],['/resume','Resume']].map(([to,label])=><NavLink end key={to} to={to} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</nav></div></header>;
}

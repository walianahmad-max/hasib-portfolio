import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experiments from './pages/Experiments';
import Resume from './pages/Resume';
function PageEffects(){
 const {pathname}=useLocation();
 useEffect(()=>{
  window.scrollTo(0,0);
  document.title=(pathname==='/'?'':pathname.slice(1)[0].toUpperCase()+pathname.slice(2)+' — ')+'Hasib Waliyan — Web Developer';
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}}),{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  return()=>observer.disconnect();
 },[pathname]);
 return null;
}
export default function App(){return <BrowserRouter><PageEffects/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/index.html" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/about.html" element={<About/>}/><Route path="/experiments" element={<Experiments/>}/><Route path="/experiments.html" element={<Experiments/>}/><Route path="/resume" element={<Resume/>}/><Route path="/resume.html" element={<Resume/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></BrowserRouter>}

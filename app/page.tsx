"use client";
import { useState, useEffect } from "react";
export default function Home(){
const [tab,setTab]=useState("home");
const [showPay,setShowPay]=useState(false);
const [showAdd,setShowAdd]=useState(false);
const [phone,setPhone]=useState("");
const [plan,setPlan]=useState({name:"Premium",price:"35K"});
const [playing,setPlaying]=useState(null);
const [title,setTitle]=useState("");
const [type,setType]=useState("movie");
const [img,setImg]=useState("");
const [video,setVideo]=useState("");
const MTN="0761388814";const AIRTEL="0741094332";const WA="256761388814";
const [movies,setMovies]=useState([]);
useEffect(()=>{const s=localStorage.getItem("quraish_movies");if(s){try{setMovies(JSON.parse(s))}catch(e){}}},[]);
function save(list){setMovies(list);localStorage.setItem("quraish_movies",JSON.stringify(list));}
function addMovie(){if(!title){alert("Enter title");return;}const m={id:Date.now(),title:title,cat:type.toUpperCase(),type:type,img:img"https://picsum.photos/seed/"+Date.now()+"/600/900",video:video"https://www.w3schools.com/html/mov_bbb.mp4",desc:"Posted by Quraishmino"};save([m].concat(movies));setShowAdd(false);setTitle("");setImg("");setVideo("");alert(title+" POSTED ✅");}
function openPay(n,p){setPlan({name:n,price:p});setShowPay(true);}
function payNow(){if(phone.length<9){alert("Enter number");return;}window.open("https://wa.me/"+WA+"?text=PAYMENT "+plan.name+" "+plan.price+" Phone:"+phone,"_blank");setShowPay(false);}
const homeMovies=movies.filter(function(m){return m.type==="movie";});
const liveMovies=movies.filter(function(m){return m.type==="live";});
const seriesMovies=movies.filter(function(m){return m.type==="series";});
return(
<div className="min-h-screen bg-[#070A14] text-white pb-[80px]">
<div className="flex justify-between p-4 bg-[#070A14] border-b border-white/10 sticky top-0 z-30"><span className="text-[#FFC91A] font-black">👑 QURAISHMINO</span><button onClick={()=>setTab("profile")} className="w-8 h-8 bg-blue-500 rounded-full font-bold">Q</button></div>
{playing && (<div className="fixed inset-0 bg-black z-[100] flex flex-col"><div className="flex justify-between p-4 bg-[#0B1120]"><span>{playing.title}</span><button onClick={()=>setPlaying(null)} className="bg-white/10 w-8 h-8 rounded-full">✕</button></div><video controls autoPlay src={playing.video} poster={playing.img} className="w-full flex-1 bg-black"></video><div className="p-4"><button onClick={()=>setPlaying(null)} className="bg-white/10 px-4 py-2 rounded-full text-sm">Back</button></div></div>)}
{showAdd && (<div className="fixed inset-0 bg-black/90 z-[101] flex items-center justify-center p-4"><div className="bg-[#11182D] w-full max-w-[360px] rounded-2xl p-5"><h2 className="text-[#FFC91A] font-black">Post Your Movie / Live</h2><p className="text-white/40 text-xs mt-1">It will appear instantly on your channel</p><div className="mt-4 space-y-3"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title e.g My Uganda Movie" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none"/><select value={type} onChange={e=>setType(e.target.value)} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3"><option value="movie">🎬 Movie</option><option value="live">🔴 Live TV</option><option value="series">📺 Series</option></select><input value={img} onChange={e=>setImg(e.target.value)} placeholder="Poster Image Link (optional)" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"/><input value={video} onChange={e=>setVideo(e.target.value)} placeholder="Video Link MP4/m3u8 (optional)" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"/><button onClick={addMovie} className="w-full bg-[#FFC91A] text-black font-black py-3 rounded-xl">POST NOW LIVE ✅</button><button onClick={()=>setShowAdd(false)} className="w-full text-white/30 text-sm py-2">Cancel</button></div></div></div>)}
{showPay && (<div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"><div className="bg-[#11182D] w-full max-w-[320px] rounded-2xl p-5"><h2 className="text-[#FFC91A] font-black">Pay {plan.price}</h2><div className="bg-black rounded-xl p-3 mt-3"><div className="text-xs text-white/40">MTN</div><div className="text-[#FFC91A] font-bold text-xl">{MTN}</div><div className="text-xs text-white/40 mt-2">Airtel</div><div className="font-bold text-xl">{AIRTEL}</div></div><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="07XXXXXXXX" className="w-full mt-3 bg-[#1A2338] border border-white/10 rounded-xl px-4 py-3 outline-none"/><button onClick={payNow} className="w-full mt-3 bg-[#FFC91A] text-black font-black py-3 rounded-xl">CONFIRM {plan.price}</button><button onClick={()=>setShowPay(false)} className="w-full mt-2 text-white/30 text-sm">Cancel</button></div></div>)}
{tab==="home" && (<div>
{movies.length===0? (
<div className="p-10 text-center mt-10

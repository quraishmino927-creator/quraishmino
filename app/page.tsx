text-center">After pay, WhatsApp screenshot to {WA}</div><button onClick={()=>setPay(false)} className="w-full mt-2 text-white/30 text-sm">Cancel</button></div></div>)}

{showPost && (<div className="fixed inset-0 bg-black/90 z-[101] flex items-center justify-center p-4"><div className="bg-[#11182D] w-[320px] rounded-2xl p-5"><h3 className="font-bold text-[#FFC91A]">Post Movie / Live</h3><input value={mtitle} onChange={e=>setMtitle(e.target.value)} placeholder="Title" className="w-full mt-4 bg-black border border-white/10 rounded-xl px-3 py-3"/><button onClick={add} className="w-full mt-3 bg-[#FFC91A] text-black font-bold py-3 rounded-xl">POST LIVE</button><button onClick={()=>setShowPost(false)} className="w-full mt-2 text-white/30 text-sm">Cancel</button></div></div>)}

{tab==="home" && (
<div>
<div className="h-[380px] flex items-end p-5" style={{background:"linear-gradient(to top,#070A14,transparent),url("+movies[0]?.img+")",backgroundSize:"cover"}}>
<div><span className="bg-[#FFC91A] text-black text-[10px] font-bold px-3 py-1 rounded-full">{movies[0]?.cat}</span><h1 className="text-3xl font-black mt-2">{movies[0]?.title}</h1><div className="flex gap-2 mt-3"><button onClick={()=>movies[0] && setPlay(movies[0])} className="bg-[#FFC91A] text-black font-bold px-5 py-2 rounded-full">▶ Watch</button><button onClick={()=>setSub(true)} className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm">Subscribe {plan.p}</button></div></div>
</div>
<div className="px-4 mt-4">
<div className="flex justify-between"><b className="border-l-2 border-[#FFC91A] pl-2">🔴 Live TV Platforms</b><button onClick={()=>setTab("live")} className="text-xs text-[#FFC91A]">See all</button></div>
<div className="flex gap-3 mt-3 overflow-x-auto">{liv.map(m=><div key={m.id} onClick={()=>setPlay(m)} className="min-w-[140px]"><div className="h-[80px] rounded-xl bg-cover" style={{backgroundImage:"url("+m.img+")"}}></div><div className="text-xs mt-1 font-bold">{m.title}</div></div>)}</div>
</div>
<div className="px-4 mt-5">
<div className="flex justify-between"><b className="border-l-2 border-[#FFC91A] pl-2">🎬 Movies</b><button onClick={()=>setTab("movies")} className="text-xs text-[#FFC91A]">See all</button></div>
<div className="flex gap-3 mt-3 overflow-x-auto">{mov.map(m=><div key={m.id} onClick={()=>setPlay(m)} className="min-w-[110px]"><div className="h-[150px] rounded-xl bg-cover" style={{backgroundImage:"url("+m.img+")"}}></div><div className="text-xs mt-1 truncate font-bold">{m.title}</div></div>)}</div>
</div>
<div className="px-4 mt-5">
<div className="flex justify-between"><b className="border-l-2 border-[#FFC91A] pl-2">📺 Series</b><button onClick={()=>setTab("series")} className="text-xs text-[#FFC91A]">See all</button></div>
<div className="flex gap-3 mt-3 overflow-x-auto">{ser.map(m=><div key={m.id} onClick={()=>setPlay(m)} className="min-w-[110px]"><div className="h-[150px] rounded-xl bg-cover" style={{backgroundImage:"url("+m.img+")"}}></div><div className="text-xs mt-1 truncate font-bold">{m.title}</div></div>)}</div>
</div>
</div>
)}

{tab==="movies" && (<div className="p-4"><h1 className="text-xl font-black">🎬 Movies ({mov.length})</h1><div className="grid grid-cols-3 gap-3 mt-4">{mov.map(m=><div key={m.id} onClick={()=>setPlay(m)} className="bg-[#11182D] rounded-xl overflow-hidden"><div className="h-[130px] bg-cover" style={{backgroundImage:"url("+m.img+")"}}></div><div className="p-2 text-xs font-bold truncate">{m.title}</div></div>)}</div></div>)}
{tab==="series" && (<div className="p-4"><h1 className="text-xl font-black">📺 Series ({ser.length})</h1><div className="grid grid-cols-3 gap-3 mt-4">{ser.map(m=><div key={m.id} onClick={()=>setPlay(m)} className="bg-[#11182D] rounded-xl overflow-hidden"><div className="h-[130px] bg-cover" style={{backgroundImage:"url("+m.img+")"}}></div><div className="p-2 text-xs font-bold truncate">{m.title}</div></div>)}</div></div>)}
{tab==="live" && (<div className="p-4"><h1 className="text-xl font-black">🔴 Live TV ({liv.length})</h1><div className="grid grid-cols-2 gap-3 mt-4">{liv.map(m=><div key={m.id} onClick={()=>setPlay(m)} className="bg-[#11182D] rounded-xl overflow-hidden border border-red-500/20"><div className="h-[100px] bg-cover" style={{backgroundImage:"url("+m.img+")"}}></div><div className="p-2 text-xs font-bold">{m.title} ● LIVE</div></div>)}</div></div>)}

{tab==="profile" && (<div className="p-4"><div className="bg-[#11182D] rounded-2xl p-5 text-center border border-[#FFC91A]/20"><div className="w-16 h-16 bg-[#FFC91A] rounded-full mx-auto flex items-center justify-center text-black font-black text-xl">{logged? name[0] : "Q"}</div><div className="font-bold mt-2">{logged? name : "Quraish Mino 👑 Owner"}</div><div className="text-xs text-white/30">{logged? "Signed In" : "Not signed in"}</div>
{!logged? <button onClick={()=>setAuth(true)} className="w-full mt-4 bg-white text-black font-bold py-3 rounded-full">🔐 Sign In / Sign Up Button</button> : <button onClick={()=>{localStorage.removeItem("qmuser");setLogged(false);setName("");}} className="w-full mt-4 bg-white/10 py-3 rounded-full text-sm">Sign Out</button>}
<button onClick={()=>setSub(true)} className="w-full mt-3 bg-[#FFC91A] text-black font-bold py-3 rounded-full">💎 Subscription Button - {plan.p}</button>
<button onClick={()=>setShowPost(true)} className="w-full mt-3 bg-white/10 border border-white/20 py-3 rounded-full text-sm">+ Post Movie / Live TV</button>
</div><div className="bg-[#11182D] rounded-xl p-4 mt-4"><div className="text-xs text-white/40">REAL PAYMENTS</div><div className="font-bold text-[#FFC91A]">MTN {MTN}</div><div className="font-bold">Airtel {AIRTEL}</div><div className="text-xs text-white/20 mt-1">WhatsApp {WA}</div></div></div>)}

<div className="fixed bottom-0 left-0 right-0 bg-[#0B1120] border-t border-white/10 flex justify-around py-2">
<button onClick={()=>setTab("home")} className={px-3 py-1 rounded-full ${tab==="home"?"bg-[#FFC91A]/20 text-[#FFC91A]":"text-white/30"}}><div className="text-center"><div>🏠</div><div className="text-[9px]">Home</div></div></button>
<button onClick={()=>setTab("movies")} className={px-3 py-1 rounded-full ${tab==="movies"?"bg-[#FFC91A]/20 text-[#FFC91A]":"text-white/30"}}><div className="text-center"><div>🎬</div><div className="text-[9px]">Movies</div></div></button>
<button onClick={()=>setTab("series")} className={px-3 py-1 rounded-full ${tab==="series"?"bg-[#FFC91A]/20 text-[#FFC91A]":"text-white/30"}}><div className="text-center"><div>📺</div><div className="text-[9px]">Series</div></div></button>
<button onClick={()=>setTab("live")} className={px-3 py-1 rounded-full ${tab==="live"?"bg-red-500/20 text-red-400":"text-white/30"}}><div className="text-center"><div>🔴</div><div className="text-[9px]">Live</div></div></button>
<button onClick={()=>setTab("profile")} className={px-3 py-1 rounded-full ${tab==="profile"?"bg-[#FFC91A]/20 text-[#FFC91A]":"text-white/30"}}><div className="text-center"><div>👤</div><div className="text-[9px]">Profile</div></div></button>
</div>
</div>
);
}

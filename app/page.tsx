style={{backgroundImage:"url("+m.img+")"}}><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">▶</div>{m.owner && <span className="absolute top-1 left-1 bg-[#FFC91A] text-black text-[7px] px-1.5 py-0.5 rounded-full font-black">YOU</span>}</div><div className="text-[11px] mt-1 truncate font-bold">{m.title}</div><div className="text-[9px] text-white/30">{m.cat}</div></div>)}</div></div>

<div className="px-4 mt-8 bg-[#11182D] border border-white/5 rounded-[20px] p-5"><div className="flex justify-between items-center"><div><div className="font-black">Owner Earnings</div><div className="text-xs text-white/40">MTN {MTN} • Airtel {AIRTEL}</div></div><div className="text-right"><div className="text-[#FFC91A] font-black text-xl">35K UGX</div><div className="text-[10px] text-white/30">per sub</div></div></div></div>
</div>
)}

{tab==="profile" && (<div className="p-4"><div className="bg-gradient-to-br from-[#11182D] to-[#0B1120] rounded-[24px] p-6 text-center border border-[#FFC91A]/20"><div className="w-20 h-20 bg-gradient-to-br from-[#FFC91A] to-yellow-600 rounded-full mx-auto flex items-center justify-center text-2xl font-black text-black">Q</div><div className="font-black text-xl mt-3">Quraish Mino 👑</div><div className="text-[#FFC91A] text-xs font-bold tracking-widest">CHANNEL OWNER • VERIFIED</div><div className="text-white/30 text-xs mt-1">quraishmino927@gmail.com</div><div className="grid grid-cols-3 gap-2 mt-6"><div className="bg-[#070A14] rounded-xl py-3"><div className="font-black text-[#FFC91A]">{movies.length}</div><div className="text-[9px] text-white/40">TOTAL</div></div><div className="bg-[#070A14] rounded-xl py-3"><div className="font-black">{yours.length}</div><div className="text-[9px] text-white/40">YOUR POSTS</div></div><div className="bg-[#070A14] rounded-xl py-3"><div className="font-black">{live.length}</div><div className="text-[9px] text-white/40">LIVE</div></div></div><button onClick={()=>setShow(true)} className="w-full mt-6 bg-[#FFC91A] text-black font-black py-4 rounded-full">+ POST NEW MOVIE / LIVE AS OWNER</button></div></div>)}

<div className="fixed bottom-0 left-0 right-0 bg-[#0B1120] border-t border-white/5 flex justify-around py-2 z-30">
<button onClick={()=>setTab("home")} className={flex flex-col items-center px-6 py-1 rounded-full ${tab==="home"?"bg-[#FFC91A]/10 text-[#FFC91A]":"text-white/30"}}><span className="text-lg">⌂</span><span className="text-[10px]">Home</span></button>
<button onClick={()=>setTab("profile")} className={flex flex-col items-center px-6 py-1 rounded-full ${tab==="profile"?"bg-[#FFC91A]/10 text-[#FFC91A]":"text-white/30"}}><span className="text-lg">👑</span><span className="text-[10px]">Owner</span></button>
</div>
<a href={"https://wa.me/"+WA} target="_blank" className="fixed bottom-[85px] right-4 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl z-30">💬</a>
</div>
);
}

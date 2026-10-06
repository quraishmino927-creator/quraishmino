<div className="bg-[#11182D] rounded-2xl mt-4 p-4 border border-white/5 flex justify-between items-center"><div><div className="font-bold">💰 MTN: {MTN}</div><div className="text-xs text-white/40">Airtel: {AIRTEL} - Collect payments here</div></div><button onClick={()=>openPay('Premium','35K UGX')} className="bg-[#FFC91A] text-black text-xs font-bold px-4 py-2 rounded-full">Test Pay</button></div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-[#0B1120] border-t border-white/5 flex justify-around py-2 z-30">
        <button onClick={()=>setTab("home")} className={flex flex-col items-center px-4 py-1 rounded-full ${tab==="home"?"bg-[#FFC91A]/10 text-[#FFC91A]":"text-white/40"}}><span>⌂</span><span className="text-[10px]">Home</span></button>
        <button onClick={()=>setTab("movies")} className={flex flex-col items-center px-4 py-1 rounded-full ${tab==="movies"?"bg-[#FFC91A]/10 text-[#FFC91A]":"text-white/40"}}><span>🎬</span><span className="text-[10px]">Movies</span></button>
        <button onClick={()=>setTab("series")} className={flex flex-col items-center px-4 py-1 rounded-full ${tab==="series"?"bg-[#FFC91A]/10 text-[#FFC91A]":"text-white/40"}}><span>📺</span><span className="text-[10px]">Series</span></button>
        <button onClick={()=>setTab("live")} className={flex flex-col items-center px-4 py-1 rounded-full ${tab==="live"?"bg-red-500/20 text-red-400":"text-white/40"}}><span>🔴</span><span className="text-[10px]">Live</span></button>
        <button onClick={()=>setTab("profile")} className={flex flex-col items-center px-4 py-1 rounded-full ${tab==="profile"?"bg-[#FFC91A]/10 text-[#FFC91A]":"text-white/40"}}><span>👤</span><span className="text-[10px]">Profile</span></button>
      </div>

      <a href={https://wa.me/${WA}} target="_blank" className="fixed bottom-[90px] right-4 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl z-30">💬</a>
    </div>
  );
}

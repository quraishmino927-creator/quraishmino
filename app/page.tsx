"use client";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("home");
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [plan, setPlan] = useState("35K");
  const MTN = "0761388814";
  const AIRTEL = "0741094332";

  const all = [
    { id: 1, title: "Mayday", type: "movie", live: false },
    { id: 2, title: "Moana 2", type: "movie", live: false },
    { id: 3, title: "Fast X", type: "movie", live: false },
    { id: 4, title: "NTV Uganda", type: "live", live: true },
    { id: 5, title: "Bukedde TV", type: "live", live: true },
    { id: 6, title: "Money Heist", type: "series", live: false },
    { id: 7, title: "Kampala Love", type: "series", live: false },
  ];

  const filtered = all.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()));

  function payNow() {
    const msg = Hello Quraishmino, I want to pay ${plan} for subscription. MTN ${MTN};
    window.open("https://wa.me/256761388814?text=" + encodeURIComponent(msg), "_blank");
    setShowPay(false);
    setShowSub(false);
  }

  return (
    <div className="min-h-screen bg-[#070A14] text-white pb-20">
      {/* HEADER + SEARCH BAR */}
      <div className="sticky top-0 z-20 bg-[#070A14] border-b border-white/10 p-3 flex items-center gap-2">
        <button onClick={() => setMenu(true)} className="text-xl px-2">☰</button>
        <b className="text-[#FFC91A]">QURAISHMINO</b>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="flex-1 bg-[#11182D] border border-white/10 rounded-full px-4 py-2 text-sm outline-none"
        />
        <button onClick={() => setTab("profile")} className="w-8 h-8 bg-blue-500 rounded-full text-xs font-bold">P</button>
      </div>

      {/* MENU BUTTON CONTENT */}
      {menu && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-[#0B1120] p-4">
            <div className="flex justify-between items-center">
              <b className="text-[#FFC91A]">MENU</b>
              <button onClick={()

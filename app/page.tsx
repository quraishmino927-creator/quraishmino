"use client";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({name:"", price:"", ugx:0});
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const MTN_NUMBER = "0761388814";
  const AIRTEL_NUMBER = "0741094332";
  const WHATSAPP = "256761388814";

  const openPay = (name:string, price:string, ugx:number) => {
    if(!user){ alert("Please Sign In First!"); setShowLogin(true); return; }
    setSelectedPlan({name, price, ugx});
    setShowPay(true);
  };

  const handlePay = () => {
    if(!phone) return alert("Enter your MTN/Airtel number!");
    const msg = NEW PAYMENT - QURAISHMINO%0A%0APlan: ${selectedPlan.name} - ${selectedPlan.price}%0ACustomer: ${user} (${email})%0ACustomer Phone: ${phone}%0AAmount: ${selectedPlan.price}%0A%0APlease check MoMo and activate!;
    const waLink = https://wa.me/${WHATSAPP}?text=${msg};
    window.open(waLink, "_blank");
    alert(Pay ${selectedPlan.price} to MTN ${MTN_NUMBER} or Airtel ${AIRTEL_NUMBER}, then send proof on WhatsApp!);
    setShowPay(false);
  };

  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', fontFamily:'Arial'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px', borderBottom:'1px solid #222'}}>
        <h1 style={{color:'gold', fontWeight:'bold'}}>QURAISHMINO 🇺🇬</h1>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
          {user? <span style={{fontSize:'13px', color:'#aaa'}}>Hi {user}</span> : null}
          <button onClick={()=>setShowLogin(true)} style={{background:user?'#222':'gold', color:user?'white':'black', padding:'8px 16px', borderRadius:'20px', fontWeight:'bold', border:'none'}}>{user? user : 'Sign In'}</button>
        </div>
      </div>

      {showLogin && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.95)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100}}>
          <div style={{background:'#111', padding:'25px', borderRadius:'15px', width:'300px', border:'1px solid #333'}}>
            <h3 style={{fontWeight:'bold', marginBottom:'15px'}}>Sign In</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#222', border:'1px solid #444', color:'white', marginBottom:'10px'}}/>
            <input type="password" placeholder="Password" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#222', border:'1px solid #444', color:'white', marginBottom:'15px'}}/>
            <button onClick={()=>{setUser(email.split("@")[0]||"User"); setShowLogin(false);}} style={{width:'100%', padding:'12px', background:'gold', color:'black', fontWeight:'bold', borderRadius:'8px', border:'none'}}>Sign In</button>
            <button onClick={()=>setShowLogin(false)} style={{width:'100%', marginTop:'10px', background:'transparent', color:'#666', border:'none

"use client";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', fontFamily:'Arial', padding:'0'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px', borderBottom:'1px solid #222'}}>
        <h1 style={{color:'gold', fontWeight:'bold'}}>QURAISHMINO 🇺🇬</h1>
        <button onClick={()=>{alert("Button works!"); setShow(true);}} style={{background:'gold', color:'black', padding:'10px 20px', borderRadius:'20px', fontWeight:'bold', border:'none'}}>Sign In</button>
      </div>

      {user && <div style={{background:'gold', color:'black', padding:'10px', textAlign:'center', fontWeight:'bold'}}>Welcome {user}! You are signed in ✅</div>}

      {show && (
        <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(0,0,0,0.95)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:99}}>
          <div style={{background:'#222', padding:'25px', borderRadius:'15px', width:'300px'}}>
            <h3 style={{marginBottom:'15px', fontWeight:'bold'}}>Sign In - Quraishmino</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#111', border:'1px solid #444', color:'white', marginBottom:'10px'}}/>
            <input type="password" placeholder="Password" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#111', border:'1px solid #444', color:'white', marginBottom:'15px'}}/>
            <button onClick={()=>{setUser(email.split("@")[0]); setShow(false); alert("Signed in as " + email);}} style={{width:'100%', padding:'12px', background:'gold', color:'black', fontWeight:'bold', borderRadius:'8px', border:'none'}}>Sign In Now</button>
            <button onClick={()=>setShow(false)} style={{width:'100%', marginTop:'10px', background:'transparent', color:'#888', border:'none'}}>Close</button>
          </div>
        </div>
      )}

      <div style={{textAlign:'center', padding:'50px 20px'}}>
        <h2 style={{fontSize:'36px', fontWeight:'bold'}}>Unlimited Movies<br/><span style={{color:'gold'}}>20,000 UGX</span></h2>
        <p style={{color:'#aaa', marginTop:'10px'}}>MTN MoMo | Airtel Money</p>
      </div>

      <div style={{display:'flex', gap:'10px', justifyContent:'center', padding:'20px'}}>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'150px', textAlign:'center', border:'1px solid #333'}}><h3>Basic</h3><div style={{color:'gold', fontWeight:'bold', margin:'8px 0'}}>20K UGX</div></div>
        <div style={{background:'gold', padding:'20px', borderRadius:'12px', width:'150px', textAlign:'center', color:'black'}}><h3>Premium</h3><div style={{fontWeight:'bold', margin:'8px 0'}}>35K UGX</div></div>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'150px', textAlign:'center', border:'1px solid #333'}}><h3>VIP</h3><div style={{color:'gold', fontWeight:'bold', margin:'8px 0'}}>70K UGX</div></div>
      </div>
    </div>
  );
}

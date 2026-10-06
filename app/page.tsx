"use client";
import { useState } from "react";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div style={{background:'#000', color:'white', minHeight:'100vh', fontFamily:'sans-serif'}}>
      {/* HEADER */}
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px 40px', alignItems:'center', borderBottom:'1px solid #222'}}>
        <h1 style={{color:'#FFD700', fontWeight:'bold', fontSize:'26px'}}>QURAISHMINO 🔥</h1>
        <div style={{display:'flex', gap:'12px'}}>
          <button style={{background:'#FFD700', color:'black', padding:'8px 18px', borderRadius:'20px', fontWeight:'bold', border:'none', cursor:'pointer'}} onClick={()=>setSignedIn(!signedIn)}>{signedIn ? 'Quraishmino ✓' : 'Sign In'}</button>
          <button style={{background:'#222', color:'white', padding:'8px 18px', borderRadius:'20px', border:'1px solid #444', cursor:'pointer'}}>Subscribe - $5/mo</button>
        </div>
      </div>

      {/* HERO */}
      <div style={{textAlign:'center', padding:'60px 20px'}}>
        <h2 style={{fontSize:'48px', fontWeight:'bold'}}>Unlimited Movies.<br/><span style={{color:'#FFD700'}}>From Your Hard Disk.</span></h2>
        <p style={{color:'#aaa', marginTop:'15px', fontSize:'18px'}}>Stream your 1TB collection anywhere. No ads. No limits.</p>
        <div style={{marginTop:'25px', display:'flex', gap:'12px', justifyContent:'center'}}>
          <button style={{background:'#FFD700', color:'black', padding:'14px 32px', borderRadius:'30px', fontWeight:'bold', fontSize:'16px', border:'none', cursor:'pointer'}}>Start Watching Free</button>
          <button style={{background:'#222', color:'white', padding:'14px 32px', borderRadius:'30px', fontSize:'16px', border:'1px solid #333', cursor:'pointer'}}>View Plans</button>
        </div>
      </div>

      {/* PLANS */}
      <div style={{display:'flex', gap:'16px', justifyContent:'center', padding:'20px', flexWrap:'wrap'}}>
        {[
          {name:'Basic', price:'$5', movies:'100 Movies'},
          {name:'Premium', price:'$10', movies:'500 Movies', best:true},
          {name:'VIP', price:'$20', movies:'All Movies + Download'}
        ].map(plan=>(
          <div key={plan.name} style={{background: plan.best ? '#FFD700' : '#111', color: plan.best ? 'black' : 'white', padding:'20px', borderRadius:'16px', width:'200px', border: plan.best ? '2px solid #FFD700' : '1px solid #333', textAlign:'center'}}>
            {plan.best && <div style={{fontSize:'12px', fontWeight:'bold', marginBottom:'8px'}}>MOST POPULAR</div>}
            <h3 style={{fontWeight:'bold'}}>{plan.name}</h3>
            <div style={{fontSize:'32px', fontWeight:'bold', margin:'10px 0'}}>{plan.price}<span style={{fontSize:'14px'}}>/mo</span></div>
            <div style={{fontSize:'13px', opacity:0.8}}>{plan.movies}</div>
            <button style={{marginTop:'15px', width:'100%', padding:'10px', borderRadius:'20px', border:'none', background: plan.best ? 'black' : '#FFD700', color: plan.best ? '#FFD700' : 'black', fontWeight:'bold', cursor:'pointer'}}>Subscribe</button>
          </div>
        ))}
      </div>

      {/* MOVIES */}
      <div style={{padding:'40px'}}>
        <h3 style={{fontSize:'22px', fontWeight:'bold', marginBottom:'15px'}}>Trending Now 🔥</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(150px, 1fr))', gap:'15px'}}>
          {[1,2,3,4,5,6,7,8].map(i=>(
            <div key={i} style={{background:'#111', height:'220px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid #222', color:'#555'}}>
              Movie {i}
            </div>
          ))}
        </div>
        <p style={{textAlign:'center', color:'#666', marginTop:'30px', fontSize:'14px'}}>Connect your Hard Disk next → We will show your real movies here</p>
      </div>
    </div>
  )
}

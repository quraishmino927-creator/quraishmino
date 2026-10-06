"use client";
import { useState } from "react";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div style={{background:'#000', color:'white', minHeight:'100vh', fontFamily:'Arial'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px', borderBottom:'1px solid #222'}}>
        <h1 style={{color:'#FFD700', fontWeight:'bold'}}>QURAISHMINO</h1>
        <div>
          <button onClick={()=>setSignedIn(!signedIn)} style={{background:'#FFD700', color:'black', padding:'8px 16px', borderRadius:'20px', fontWeight:'bold', border:'none', marginRight:'8px'}}>{signedIn ? 'Hi Quraish!' : 'Sign In'}</button>
          <button style={{background:'#222', color:'white', padding:'8px 16px', borderRadius:'20px', border:'1px solid #444'}}>Subscribe $5</button>
        </div>
      </div>

      <div style={{textAlign:'center', padding:'50px 20px'}}>
        <h2 style={{fontSize:'40px', fontWeight:'bold'}}>Unlimited Movies.<br/><span style={{color:'#FFD700'}}>From Your Hard Disk.</span></h2>
        <p style={{color:'#aaa', marginTop:'10px'}}>Stream your collection anywhere</p>
        <button style={{background:'#FFD700', color:'black', padding:'12px 28px', borderRadius:'30px', fontWeight:'bold', marginTop:'20px', border:'none'}}>Start Watching</button>
      </div>

      <div style={{display:'flex', gap:'12px', justifyContent:'center', padding:'20px', flexWrap:'wrap'}}>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', border:'1px solid #333'}}>
          <h3>Basic</h3><div style={{fontSize:'24px', fontWeight:'bold'}}>$5/mo</div>
          <button style={{marginTop:'10px', width:'100%', padding:'8px', borderRadius:'20px', background:'#FFD700', border:'none', fontWeight:'bold'}}>Subscribe</button>
        </div>
        <div style={{background:'#FFD700', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', color:'black'}}>
          <div style={{fontSize:'10px', fontWeight:'bold'}}>MOST POPULAR</div>
          <h3>Premium</h3><div style={{fontSize:'24px', fontWeight:'bold'}}>$10/mo</div>
          <button style={{marginTop:'10px', width:'100%', padding:'8px', borderRadius:'20px', background:'black', color:'#FFD700', border:'none', fontWeight:'bold'}}>Subscribe</button>
        </div>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', border:'1px solid #333'}}>
          <h3>VIP</h3><div style={{fontSize:'24px', fontWeight:'bold'}}>$20/mo</div>
          <button style={{marginTop:'10px', width:'100%', padding:'8px', borderRadius:'20px', background:'#FFD700', border:'none', fontWeight:'bold'}}>Subscribe</button>
        </div>
      </div>

      <div style={{padding:'20px'}}>
        <h3>Trending Now</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px', marginTop:'10px'}}>
          <div style={{background:'#111', height:'150px', borderRadius:'10px', border:'1px solid #222', display:'flex', alignItems:'center', justifyContent:'center', color:'#555'}}>Movie 1</div>
          <div style={{background:'#111', height:'150px', borderRadius:'10px', border:'1px solid #222', display:'flex', alignItems:'center', justifyContent:'center', color:'#555'}}>Movie 2</div>
          <div style={{background:'#111', height:'150px', borderRadius:'10px', border:'1px solid #222', display:'flex', alignItems:'center', justifyContent:'center', color:'#555'}}>Movie 3</div>
          <div style={{background:'#111', height:'150px', borderRadius:'10px', border:'1px solid #222', display:'flex', alignItems:'center', justifyContent:'center', color:'#555'}}>Movie 4</div>
        </div>
      </div>
    </div>
  );
}

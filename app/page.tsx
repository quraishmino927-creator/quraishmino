"use client";
import { useState } from "react";
export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', fontFamily:'Arial'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
        <h1 style={{color:'gold', fontWeight:'bold'}}>QURAISHMINO</h1>
        <div>
          <button onClick={()=>setSignedIn(!signedIn)} style={{background:'gold', color:'black', padding:'8px 16px', borderRadius:'20px', border:'none', fontWeight:'bold', marginRight:'8px'}}>{signedIn ? 'Hi Quraish!' : 'Sign In'}</button>
          <button style={{background:'#222', color:'white', padding:'8px 16px', borderRadius:'20px', border:'1px solid #444'}}>Subscribe 20K</button>
        </div>
      </div>
      <div style={{textAlign:'center', padding:'50px'}}>
        <h2 style={{fontSize:'40px', fontWeight:'bold'}}>Unlimited Movies<br/><span style={{color:'gold'}}>20,000 UGX Only</span></h2>
        <p style={{color:'#aaa', marginTop:'10px'}}>For Uganda - Pay with MTN / Airtel Money</p>
        <button style={{background:'gold', color:'black', padding:'12px 28px', borderRadius:'30px', fontWeight:'bold', marginTop:'20px', border:'none'}}>Start Watching - 20K UGX</button>
      </div>
      <div style={{display:'flex', gap:'12px', justifyContent:'center', padding:'20px', flexWrap:'wrap'}}>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', border:'1px solid #333'}}>
          <h3>Basic</h3>
          <div style={{fontSize:'22px', fontWeight:'bold', color:'gold', margin:'8px 0'}}>20,000 UGX</div>
          <div style={{fontSize:'12px', color:'#aaa'}}>/month - 100 Movies</div>
          <button style={{marginTop:'12px', width:'100%', padding:'10px', borderRadius:'20px', background:'gold', border:'none', fontWeight:'bold'}}>Lipa 20K</button>
        </div>
        <div style={{background:'gold', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', color:'black'}}>
          <div style={{fontSize:'10px', fontWeight:'bold'}}>MOST POPULAR</div>
          <h3>Premium</h3>
          <div style={{fontSize:'22px', fontWeight:'bold', margin:'8px 0'}}>35,000 UGX</div>
          <div style={{fontSize:'12px'}}>/month - 500 Movies</div>
          <button style={{marginTop:'12px', width:'100%', padding:'10px', borderRadius:'20px', background:'black', color:'gold', border:'none', fontWeight:'bold'}}>Lipa 35K</button>
        </div>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', border:'1px solid #333'}}>
          <h3>VIP</h3>
          <div style={{fontSize:'22px', fontWeight:'bold', color:'gold', margin:'8px 0'}}>70,000 UGX</div>
          <div style={{fontSize:'12px', color:'#aaa'}}>/month - All + Download</div>
          <button style={{marginTop:'12px', width:'100%', padding:'10px', borderRadius:'20px', background:'gold', border:'none', fontWeight:'bold'}}>Lipa 70K</button>
        </div>
      </div>
      <div style={{textAlign:'center', padding:'10px', color:'#666', fontSize:'13px'}}>Pay with MTN MoMo | Airtel Money | Cash | All Uganda</div>
      <div style={{padding:'20px', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10px'}}>
        <div style={{background:'#111', height:'150px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>Movie 1</div>
        <div style={{background:'#111', height:'150px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>Movie 2</div>
        <div style={{background:'#111', height:'150px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>Movie 3</div>
        <div style={{background:'#111', height:'150px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>Movie 4</div>
      </div>
    </div>
  );
}

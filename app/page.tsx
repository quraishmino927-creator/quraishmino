"use client";
import { useState } from "react";

export default function Home() {
  const [showPay, setShowPay] = useState(false);
  const [planName, setPlanName] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [myPhone, setMyPhone] = useState("");

  const MTN = "0761388814";
  const AIRTEL = "0741094332";
  const WA = "256761388814";

  function openPay(name, price) {
    setPlanName(name);
    setPlanPrice(price);
    setShowPay(true);
  }

  function payNow() {
    if(myPhone.length < 9){
      alert("Enter your number!");
      return;
    }
    var msg = "NEW PAYMENT QURAISHMINO%0APlan: " + planName + " - " + planPrice + "%0APhone: " + myPhone + "%0ACheck MoMo 0761388814";
    window.open("https://wa.me/" + WA + "?text=" + msg, "_blank");
    alert("Pay " + planPrice + " to MTN " + MTN + " or Airtel " + AIRTEL);
    setShowPay(false);
  }

  return (
    <div style={{background:'black', color:'white', minHeight:'100vh'}}>
      <div style={{padding:'15px', display:'flex', justifyContent:'space-between', borderBottom:'1px solid #222'}}>
        <h1 style={{color:'gold', margin:0}}>QURAISHMINO 🇺🇬</h1>
        <div style={{background:'gold', color:'black', padding:'6px 12px', borderRadius:'20px', fontWeight:'bold', fontSize:'12px'}}>quraishmino927 ✅</div>
      </div>

      {showPay && (
        <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(0,0,0,0.95)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:99, padding:'20px'}}>
          <div style={{background:'#111', padding:'20px', borderRadius:'15px', width:'320px', border:'2px solid gold'}}>
            <h2 style={{color:'gold'}}>Pay {planPrice}</h2>
            <p>{planName} Plan</p>
            <div style={{background:'black', padding:'12px', borderRadius:'8px', margin:'15px 0', border:'1px solid #333'}}>
              <div style={{fontSize:'12px', color:'#888'}}>MTN MoMo</div>
              <div style={{fontSize:'20px', fontWeight:'bold', color:'gold'}}>{MTN}</div>
              <div style={{fontSize:'12px', color:'#888', marginTop:'8px'}}>Airtel Money</div>
              <div style={{fontSize:'20px', fontWeight:'bold'}}>{AIRTEL}</div>
            </div>
            <input value={myPhone} onChange={(e)=>setMyPhone(e.target.value)} placeholder="Your number" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#222', border:'1px solid #444', color:'white', marginBottom:'15px', boxSizing:'border-box'}}/>
            <button onClick={payNow} style={{width:'100%', padding:'14px', background:'gold', color:'black', fontWeight:'bold', borderRadius:'8px', border:'none'}}>I HAVE PAID {planPrice}</button>
            <button onClick={()=>setShowPay(false)} style={{width:'100%', marginTop:'10px', background:'none', color:'#666', border:'none', padding:'8px'}}>Cancel</button>
          </div>
        </div>
      )}

      <div style={{textAlign:'center', padding:'40px 20px'}}>
        <h1 style={{fontSize:'32px'}}>Unlimited Movies<br/><span style={{color:'gold'}}>20,000 UGX</span></h1>
        <p style={{color:'#aaa'}}>MTN: {MTN} | Airtel: {AIRTEL}</p>
      </div>

      <div style={{display:'flex', gap:'10px', padding:'15px', justifyContent:'center'}}>
        <div style={{background:'#111', padding:'15px', borderRadius:'12px', textAlign:'center', width:'100px', border:'1px solid #222'}}>
          <div>Basic</div>
          <div style={{color:'gold', fontWeight:'bold', margin:'8px 0'}}>20K</div>
          <button onClick={()=>openPay('Basic','20K UGX')} style={{width:'100%', padding:'8px', background:'gold', border:'none', borderRadius:'20px', fontWeight:'bold'}}>Lipa 20K</button>
        </div>
        <div style={{background:'gold', padding:'15px', borderRadius:'12px', textAlign:'center', width:'100px', color:'black'}}>
          <div style={{fontSize:'10px', background:'black', color:'gold', padding:'2px 6px', borderRadius:'10px'}}>POPULAR</div>
          <div style={{fontWeight:'bold', marginTop:'5px'}}>Premium</div>
          <div style={{fontWeight:'bold', margin:'8px 0'}}>35K</div>
          <button onClick={()=>openPay('Premium','35K UGX')} style={{width:'100%', padding:'8px', background:'black', color:'gold', border:'none', borderRadius:'20px', fontWeight:'bold'}}>Lipa 35K</button>
        </div>
        <div style={{background:'#111', padding:'15px', borderRadius:'12px', textAlign:'center', width:'100px', border:'1px solid #222'}}>
          <div>VIP</div>
          <div style={{color:'gold', fontWeight:'bold', margin:'8px 0'}}>70K</div>
          <button onClick={()=>openPay('VIP','70K UGX')} style={{width:'100%', padding:'8px', background:'gold', border:'none', borderRadius:'20px', fontWeight:'bold'}}>Lipa 70K</button>
        </div>
      </div>
    </div>
  );
}

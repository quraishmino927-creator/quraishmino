"use client";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("quraishmino927");
  const [showPay, setShowPay] = useState(false);
  const [plan, setPlan] = useState({name:"", price:""});
  const [phone, setPhone] = useState("");

  const MTN = "0761388814";
  const AIRTEL = "0741094332";
  const WA = "256761388814";

  const openPay = (name:string, price:string) => {
    setPlan({name, price});
    setShowPay(true);
  };

  const confirmPay = () => {
    if(!phone) return alert("Enter your number!");
    const msg = NEW PAYMENT QURAISHMINO%0APlan: ${plan.name} - ${plan.price}%0AUser: ${user}%0APhone: ${phone}%0ACheck MoMo!;
    window.open(https://wa.me/${WA}?text=${msg}, "_blank");
    alert(Pay ${plan.price} to MTN ${MTN} or Airtel ${AIRTEL} then send proof on WhatsApp!);
    setShowPay(false);
  };

  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', fontFamily:'Arial'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'15px', alignItems:'center'}}>
        <div><h1 style={{color:'gold', fontWeight:'bold', margin:0}}>QURAISHMINO</h1><div style={{fontSize:'12px'}}>🇺🇬</div></div>
        <div style={{background:'gold', color:'black', padding:'8px 16px', borderRadius:'20px', fontWeight:'bold', fontSize:'13px'}}>{user} ✅</div>
      </div>

      <div style={{background:'gold', color:'black', padding:'8px', textAlign:'center', fontWeight:'bold', fontSize:'14px'}}>
        Welcome {user}! You are signed in ✅
      </div>

      {showPay && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.96)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100, padding:'20px'}}>
          <div style={{background:'#111', padding:'22px', borderRadius:'16px', width:'100%', maxWidth:'350px', border:'2px solid gold'}}>
            <h3 style={{color:'gold', fontWeight:'bold', marginBottom:'5px'}}>Pay {plan.price}</h3>
            <p style={{fontSize:'13px', color:'#aaa', marginBottom:'15px'}}>{plan.name} Plan</p>
            
            <div style={{background:'black', padding:'14px', borderRadius:'10px', border:'1px solid #333', marginBottom:'15px'}}>
              <div style={{fontSize:'11px', color:'#888'}}>MTN MoMo</div>
              <div style={{fontSize:'20px', fontWeight:'bold', color:'gold'}}>{MTN}</div>
              <div style={{height:'1px', background:'#222', margin:'10px 0'}}></div>
              <div style={{fontSize:'11px', color:'#888'}}>Airtel Money</div>
              <div style={{fontSize:'20px', fontWeight:'bold'}}>{AIRTEL}</div>
              <div style={{fontSize:'11px', color:'#aaa', marginTop:'8px'}}>Name: QURAISHMINO</div>
            </div>

            <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Your number e.g 076XXXXXXX" style={{width:'100%', padding:'13px', borderRadius:'8px', background:'#222', border:'1px solid #444', color:'white', marginBottom:'15px'}}/>
            
            <button onClick={confirmPay} style={{width:'100%', padding:'14px', background:'gold', color:'black', fontWeight:'bold', borderRadius:'10px', border:'none', fontSize:'16px'}}>✅ I Have Paid {plan.price}</button>
            <button onClick={()=>setShowPay(false)} style={{width:'100%', marginTop:'10px', padding:'10px', background:'transparent', color:'#666', border:'none'}}>Cancel</button>
          </div>
        </div>
      )}

      <div style={{textAlign:'center', padding:'40px 20px 20px'}}>
        <h2 style={{fontSize:'32px', fontWeight:'bold', lineHeight:'1.1'}}>Unlimited Movies<br/><span style={{color:'gold'}}>20,000 UGX</span></h2>
        <p style={{color:'#888', marginTop:'8px', fontSize:'14px'}}>MTN: {MTN} | Airtel: {AIRTEL}</p>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', padding:'15px'}}>
        <div style={{background:'#111', borderRadius:'14px', padding:'15px', textAlign:'center', border:'1px solid #222'}}>
          <div style={{fontWeight:'bold', fontSize:'15px'}}>Basic</div>
          <div style={{color:'gold', fontWeight:'bold', margin:'10px 0', fontSize:'16px'}}>20K UGX</div>
          <button onClick={()=>openPay("Basic","20K UGX")} style={{width:'100%', padding:'10px', background:'white', color:'black', border:'none', borderRadius:'20px', fontWeight:'bold', fontSize:'13px'}}>Lipa 20K</button>
        </div>

        <div style={{background:'gold', borderRadius:'14px', padding:'15px', textAlign:'center', color:'black'}}>
          <div style={{fontSize:'10px', fontWeight:'bold', background:'black', color:'gold', display:'inline-block', padding:'2px 6px', borderRadius:'10px', marginBottom:'5px'}}>POPULAR</div>
          <div style={{fontWeight:'bold', fontSize:'15px'}}>Premium</div>
          <div style={{fontWeight:'bold', margin:'10px 0', fontSize:'16px'}}>35K UGX</div>
          <button onClick={()=>openPay("Premium","35K UGX")} style={{width:'100%', padding:'10px', background:'black', color:'gold', border:'none', borderRadius:'20px', fontWeight:'bold', fontSize:'13px'}}>Lipa 35K</button>
        </div>

        <div style={{background:'#111', borderRadius:'14px', padding:'15px', textAlign:'center', border:'1px solid #222'}}>
          <div style={{fontWeight:'bold', fontSize:'15px'}}>VIP</div>
          <div style={{color:'gold', fontWeight:'bold', margin:'10px 0', fontSize:'16px'}}>70K UGX</div>
          <button onClick={()=>openPay("VIP","70K UGX")} style={{width:'100%', padding:'10px', background:'white', color:'black', border:'none', borderRadius:'20px', fontWeight:'bold', fontSize:'13px'}}>Lipa 70K</button>
        </div>
      </div>

      <div style={{textAlign:'center', padding:'20px', color:'#555', fontSize:'11px'}}>
        Click Lipa button → Pay to {MTN} or {AIRTEL} → WhatsApp confirmation
      </div>
    </div>
  );
}

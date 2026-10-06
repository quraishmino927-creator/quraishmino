"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  useEffect(()=>{
    const saved = localStorage.getItem("quraish_user");
    if(saved) setUser(JSON.parse(saved));
  },[]);

  const handleAuth = () => {
    if(!email ||!pass) return alert("Fill all fields!");
    if(isSignup &&!name) return alert("Enter name!");

    const userData = { email, name: isSignup? name : email.split("@")[0], plan: "Free" };
    localStorage.setItem("quraish_user", JSON.stringify(userData));
    localStorage.setItem("quraish_pass_"+email, pass); // simple storage for demo
    setUser(userData);
    setShowLogin(false);
    setEmail(""); setPass(""); setName("");
  };

  const handleLogin = () => {
    const savedPass = localStorage.getItem("quraish_pass_"+email);
    if(savedPass && savedPass === pass) {
      const savedUser = { email, name: email.split("@")[0], plan: "Free" };
      localStorage.setItem("quraish_user", JSON.stringify(savedUser));
      setUser(savedUser);
      setShowLogin(false);
    } else if(!savedPass) {
      alert("No account found. Click Sign Up first!");
      setIsSignup(true);
    } else {
      alert("Wrong password!");
    }
  };

  const logout = () => {
    localStorage.removeItem("quraish_user");
    setUser(null);
  };

  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', fontFamily:'Arial'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'20px', borderBottom:'1px solid #222'}}>
        <h1 style={{color:'gold', fontWeight:'bold', fontSize:'22px'}}>QURAISHMINO 🇺🇬</h1>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
          {user? (
            <>
              <span style={{color:'#aaa', fontSize:'14px'}}>Hi, {user.name} 👋</span>
              <button onClick={logout} style={{background:'#222', color:'white', padding:'8px 16px', borderRadius:'20px', border:'1px solid #444'}}>Logout</button>
            </>
          ) : (
            <button onClick={()=>setShowLogin(true)} style={{background:'gold', color:'black', padding:'8px 18px', borderRadius:'20px', fontWeight:'bold', border:'none'}}>Sign In</button>
          )}
          <button style={{background:'#222', color:'white', padding:'8px 16px', borderRadius:'20px', border:'1px solid #444'}}>20K UGX</button>
        </div>
      </div>

      {showLogin && (
        <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(0,0,0,0.9)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100}}>
          <div style={{background:'#111', padding:'30px', borderRadius:'16px', width:'320px', border:'1px solid #333'}}>
            <h2 style={{fontWeight:'bold', fontSize:'20px', marginBottom:'16px'}}>{isSignup? 'Create Account' : 'Welcome Back'}</h2>
            {isSignup && <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#222', border:'1px solid #333', color:'white', marginBottom:'10px'}}/>}
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#222', border:'1px solid #333', color:'white', marginBottom:'10px'}}/>
            <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" style={{width:'100%', padding:'12px', borderRadius:'8px', background:'#222', border:'1px solid #333', color:'white', marginBottom:'16px'}}/>
            <button onClick={isSignup? handleAuth : handleLogin} style={{width:'100%', padding:'12px', background:'gold', color:'black', fontWeight:'bold', borderRadius:'8px', border:'none', marginBottom:'10px'}}>{isSignup? 'Sign Up' : 'Sign In'}</button>
            <div style={{textAlign:'center', fontSize:'13px', color:'#aaa'}}>
              {isSignup? 'Already have account? ' : "Don't have account? "}
              <span onClick={()=>setIsSignup(!isSignup)} style={{color:'gold', cursor:'pointer'}}>{isSignup? 'Sign In' : 'Sign Up'}</span>
            </div>
            <button onClick={()=>setShowLogin(false)} style={{width:'100%', marginTop:'12px', background:'transparent', color:'#666', border:'none'}}>Cancel</button>
          </div>
        </div>
      )}

      <div style={{textAlign:'center', padding:'50px 20px'}}>
        <h2 style={{fontSize:'38px', fontWeight:'bold'}}>Unlimited Movies<br/><span style={{color:'gold'}}>20,000 UGX Only</span></h2>
        <p style={{color:'#aaa', marginTop:'10px'}}>{user? Welcome ${user.name}, enjoy! : 'MTN MoMo • Airtel Money • All Uganda'}</p>
        <button onClick={()=>!user && setShowLogin(true)} style={{background:'gold', color:'black', padding:'12px 28px', borderRadius:'30px', fontWeight:'bold', marginTop:'20px', border:'none'}}>{user? 'Start Watching' : 'Sign Up to Watch - 20K'}</button>
      </div>

      <div style={{display:'flex', gap:'12px', justifyContent:'center', padding:'20px', flexWrap:'wrap'}}>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', border:'1px solid #333'}}><h3>Basic</h3><div style={{color:'gold', fontWeight:'bold', fontSize:'20px', margin:'8px 0'}}>20,000 UGX</div><button style={{width:'100%', padding:'10px', borderRadius:'20px', background:'gold', border:'none', fontWeight:'bold'}}>Lipa 20K</button></div>
        <div style={{background:'gold', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', color:'black'}}><div style={{fontSize:'10px', fontWeight:'bold'}}>MOST POPULAR</div><h3>Premium</h3><div style={{fontWeight:'bold', fontSize:'20px', margin:'8px 0'}}>35,000 UGX</div><button style={{width:'100%', padding:'10px', borderRadius:'20px', background:'black', color:'gold', border:'none', fontWeight:'bold'}}>Lipa 35K</button></div>
        <div style={{background:'#111', padding:'20px', borderRadius:'12px', width:'160px', textAlign:'center', border:'1px solid #333'}}><h3>VIP</h3><div style={{color:'gold', fontWeight:'bold', fontSize:'20px', margin:'8px 0'}}>70,000 UGX</div><button style={{width:'100%', padding:'10px', borderRadius:'20px', background:'gold', border:'none', fontWeight:'bold'}}>Lipa 70K</button></div>
      </div>
    </div>
  );
}

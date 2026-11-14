// ===== קבצים פלוס – דף הנחיתה =====
// הדף נטען מ-index.html כשנכנסים לכתובת עם #kvatzim-plus בסוף.
// לשינוי טקסט: מחפשים את המילה בקובץ (Ctrl+F), משנים אותה, ושומרים. רק לא למחוק את התווים ` בתחילת הדף ובסופו.
// הקובץ נבנה מ-kvatzim-plus/src (ראו README שם).
window.KP_SHELL = String.raw`<!doctype html>
<html lang="he" dir="rtl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>קבצים פלוס</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Secular+One&family=Assistant:wght@400;600;700;800&display=swap">
<style>
:root{--night:#050816;--blue:#2f6bff;--cyan:#38d6ff;--sun:#ffc93d;--pink:#ff5fa2;--white:#f4f7ff;--soft:#a6b5dc;--glass:rgba(255,255,255,.07);--edge:rgba(255,255,255,.16);
--fd:"Secular One","Assistant",system-ui,sans-serif;--fb:"Assistant",system-ui,"Segoe UI",Arial,sans-serif;color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;background:var(--night);color:var(--white);font-family:var(--fb);font-size:18px;line-height:1.55;overflow-x:hidden}
body::before{content:"";position:fixed;inset:-10%;z-index:-2;pointer-events:none;
 background:radial-gradient(40% 30% at 90% 5%,rgba(47,107,255,.6),transparent 70%),radial-gradient(35% 30% at 0% 50%,rgba(56,214,255,.22),transparent 70%),radial-gradient(35% 25% at 85% 100%,rgba(255,95,162,.22),transparent 70%)}
body::after{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:.1;
 background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:54px 54px}
.wrap{max-width:1160px;margin:0 auto;padding-inline:max(16px,env(safe-area-inset-left,0px)) max(16px,env(safe-area-inset-right,0px));display:grid;gap:var(--g,100px);padding-block:18px 120px}
.wrap>*{min-width:0}
h1,h2,h3{font-family:var(--fd);font-weight:400;margin:0;line-height:1.05;text-wrap:balance}
h1{font-size:clamp(40px,5vw,64px)}
h2{font-size:clamp(34px,5vw,58px)}
.hl{white-space:nowrap;color:var(--night);background:var(--sun);padding:0 .18em;border-radius:.12em;display:inline-block;transform:rotate(-2deg);box-shadow:0 0 50px rgba(255,201,61,.45)}
.grad{background:linear-gradient(90deg,var(--cyan),#9db8ff 55%,var(--pink));-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{font-size:clamp(19px,2.3vw,24px);color:var(--soft);margin:0;max-width:36ch}
.sec{display:grid;gap:28px}
.sec-head{display:flex;align-items:end;justify-content:space-between;gap:16px;flex-wrap:wrap}
.sec-head p{margin:0;color:var(--soft)}
/* note + header */
.note{display:flex;align-items:center;gap:10px;font-size:15px;background:rgba(255,201,61,.09);border:1px solid rgba(255,201,61,.4);border-radius:14px;padding:9px 16px;margin:0 0 calc(14px - var(--g,100px))}
.note svg{width:20px;height:20px;flex:none;stroke:var(--sun);fill:none;stroke-width:2;stroke-linecap:round}
.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:calc(30px - var(--g,100px))}
.brand{display:flex;align-items:center;gap:14px}
.mark{width:54px;height:54px;border-radius:16px;background:linear-gradient(145deg,var(--cyan),var(--blue));display:grid;place-items:center;box-shadow:0 0 30px rgba(47,107,255,.8)}
.mark svg{width:32px;height:32px}
.brand b{font-family:var(--fd);font-weight:400;font-size:30px;line-height:1}
.brand small{display:block;color:var(--soft);font-size:15px;letter-spacing:.06em}
/* buttons */
.btn{font:800 19px var(--fb);border:0;border-radius:999px;padding:14px 28px;cursor:pointer;display:inline-flex;align-items:center;gap:10px;transition:transform .15s,box-shadow .2s}
.btn:hover{transform:translateY(-2px)}
.btn:focus-visible,.mail:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid var(--white);outline-offset:3px}
.btn-sun{color:var(--night);background:linear-gradient(90deg,var(--sun),#ffe08a);box-shadow:0 0 40px rgba(255,201,61,.5)}
.btn-glass{color:var(--white);background:var(--glass);border:1px solid var(--edge)}
.mail{direction:ltr;font:800 clamp(18px,2.4vw,24px) var(--fb);color:var(--white);background:var(--glass);border:1px dashed rgba(255,201,61,.6);border-radius:999px;padding:12px 22px;cursor:pointer}
.copied{font-size:15px;color:var(--cyan);min-height:1.3em}
.fee{display:inline-flex;align-items:center;gap:10px;font-size:17px;font-weight:700;background:rgba(255,95,162,.14);border:1px solid rgba(255,95,162,.55);border-radius:999px;padding:8px 18px}
.fee b{color:var(--pink);white-space:nowrap}
.daily{display:inline-flex;align-items:center;gap:10px;font-weight:800;font-size:17px;color:var(--night);background:var(--cyan);border-radius:999px;padding:7px 16px;box-shadow:0 0 30px rgba(56,214,255,.5)}
.daily i{width:10px;height:10px;border-radius:50%;background:var(--night);animation:blink 1.4s ease-in-out infinite}
@keyframes blink{50%{opacity:.25}}
/* hero */
.hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1.2fr);gap:44px;align-items:center}
.hero .txt{display:grid;gap:22px;justify-items:start}
.ctas{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.stage{perspective:1800px}
.shot{border-radius:16px;overflow:hidden;border:2px solid rgba(143,176,255,.6);box-shadow:0 0 0 7px rgba(47,107,255,.12),0 40px 80px -20px rgba(0,0,0,.85),0 0 80px rgba(47,107,255,.45);background:#fff}
.hero .shot{transform:rotateY(14deg) rotateX(6deg) rotateZ(2deg);animation:float 7s ease-in-out infinite}
@keyframes float{50%{transform:rotateY(10deg) rotateX(4deg) rotateZ(1deg) translateY(-14px)}}
/* ticker */
.ticker{overflow:hidden;border-block:1px solid var(--edge);background:rgba(47,107,255,.08);margin-inline:-16px;padding-block:12px;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.ticker div{display:flex;gap:44px;width:max-content;animation:tick 40s linear infinite;font-weight:700;font-size:19px;white-space:nowrap}
.ticker span::before{content:"●";color:var(--pink);margin-inline-end:10px;font-size:12px;vertical-align:middle}
.ticker b{color:var(--cyan)}
@keyframes tick{to{transform:translateX(50%)}}
/* stats */
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.stat{border-radius:22px;padding:22px;background:linear-gradient(160deg,rgba(255,255,255,.1),rgba(255,255,255,.03));border:1px solid var(--edge);display:grid;gap:2px}
.stat b{font-family:var(--fd);font-weight:400;font-size:clamp(30px,3.6vw,44px);line-height:1.1}
.stat span{color:var(--soft)}
/* posters */
.rail{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding-block:6px 16px;scrollbar-width:thin}
.poster{flex:0 0 200px;aspect-ratio:2/3;max-width:100%;scroll-snap-align:start;border-radius:18px;padding:16px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;background:var(--bg);box-shadow:0 20px 40px -18px rgba(0,0,0,.8);transition:transform .25s}
.poster:hover{transform:translateY(-6px) rotate(-1deg)}
.poster::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 50% at 70% 25%,rgba(255,255,255,.35),transparent 60%),linear-gradient(transparent 45%,rgba(0,0,0,.7));pointer-events:none}
.poster>*{position:relative}
.poster .tags{display:flex;gap:6px;flex-wrap:wrap}
.poster .tags span{font-size:13px;font-weight:800;background:rgba(0,0,0,.35);border-radius:999px;padding:3px 10px}
.poster .tags .new{background:var(--sun);color:var(--night)}
.poster h3{font-size:27px;line-height:1.05;text-shadow:0 2px 12px rgba(0,0,0,.5)}
.poster small{display:block;font-size:14px;color:rgba(255,255,255,.8);margin-top:6px}
/* songs */
.songs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.song{display:flex;align-items:center;gap:14px;padding:12px 16px;border-radius:16px;background:var(--glass);border:1px solid var(--edge)}
.song .play{width:44px;height:44px;border-radius:50%;flex:none;display:grid;place-items:center;background:linear-gradient(145deg,var(--pink),#7b3fe4);box-shadow:0 0 20px rgba(255,95,162,.45)}
.song .play svg{width:18px;height:18px;fill:#fff;margin-inline-start:3px}
.song .t{flex:1;min-width:0}
.song .t b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.song .t span{color:var(--soft);font-size:15px}
.song .d{color:var(--soft);font-size:15px;direction:ltr}
.eq{display:flex;align-items:end;gap:3px;height:22px}
.eq i{width:4px;background:var(--cyan);border-radius:2px;animation:eq 1s ease-in-out infinite}
.eq i:nth-child(2){animation-delay:-.3s}.eq i:nth-child(3){animation-delay:-.6s}.eq i:nth-child(4){animation-delay:-.15s}
@keyframes eq{0%,100%{height:5px}50%{height:22px}}
/* click demo */
.click{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:40px;align-items:center}
.demo{display:grid;justify-items:center;gap:36px}
.bigbtn{display:inline-flex;align-items:center;gap:14px;background:#0b57d0;color:#fff;font-weight:800;font-size:44px;border-radius:999px;padding:20px 48px;box-shadow:0 0 0 12px rgba(47,107,255,.25),0 0 80px rgba(47,107,255,.9);animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{50%{box-shadow:0 0 0 20px rgba(47,107,255,.12),0 0 110px rgba(47,107,255,1)}}
.bigbtn svg{width:40px;height:40px}
.toast{display:flex;align-items:center;gap:14px;background:#fff;color:#141b2d;border-radius:18px;padding:18px 24px;font-size:24px;font-weight:700;box-shadow:0 30px 60px -10px rgba(0,0,0,.7)}
.toast .ok{width:44px;height:44px;border-radius:50%;background:#1e9e5a;display:grid;place-items:center;flex:none}
.toast small{display:block;font-size:17px;font-weight:600;color:#5d667a}
/* features + gallery */
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.card{border-radius:22px;padding:24px;background:linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.03));border:1px solid var(--edge);display:grid;gap:8px;align-content:start;transition:transform .25s,border-color .25s}
.card:hover{transform:translateY(-6px);border-color:rgba(56,214,255,.6)}
.card svg{width:38px;height:38px;stroke:var(--cyan);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 8px rgba(56,214,255,.7))}
.card b{font-family:var(--fd);font-weight:400;font-size:26px;line-height:1.15}
.card span{color:var(--soft)}
.gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.gallery figure{margin:0;display:grid;gap:10px}
.gallery figcaption{color:var(--soft);font-size:17px}
.gallery figcaption b{color:var(--white)}
/* price + contact */
.price{border-radius:30px;padding:clamp(26px,5vw,56px);background:linear-gradient(150deg,rgba(47,107,255,.35),rgba(255,95,162,.18));border:1px solid var(--edge);display:grid;gap:20px;justify-items:start}
.price .tag{font-weight:800;color:var(--pink);letter-spacing:.04em;font-size:20px}
.price ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 26px;width:100%}
.price li{display:flex;align-items:center;gap:10px;font-weight:700;font-size:19px}
.price li::before{content:"✓";display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:rgba(56,214,255,.18);color:var(--cyan);flex:none}
.contact{position:relative;border-radius:30px;padding:clamp(24px,5vw,52px);background:linear-gradient(var(--night),var(--night)) padding-box,linear-gradient(120deg,var(--cyan),var(--blue),var(--pink),var(--sun)) border-box;border:2px solid transparent;display:grid;gap:36px;box-shadow:0 0 80px rgba(47,107,255,.35)}
.contact .info{display:grid;gap:18px;justify-items:center;text-align:center}.contact .mail{font-size:clamp(22px,4vw,40px);padding:16px 34px;color:var(--night);background:linear-gradient(90deg,var(--sun),#ffe08a);border:0;box-shadow:0 0 50px rgba(255,201,61,.55)}
form{display:grid;gap:14px}
label{display:grid;gap:6px;font-weight:700;font-size:16px}
input,textarea{font:500 18px var(--fb);color:var(--white);background:rgba(255,255,255,.06);border:1px solid var(--edge);border-radius:14px;padding:13px 16px;width:100%}
input::placeholder,textarea::placeholder{color:#7f8db3}
textarea{min-height:110px;resize:vertical}
.status{min-height:1.4em;font-weight:700}
.status.ok{color:#4ee08f}.status.err{color:#ff8a8a}
.foot{text-align:center;color:var(--soft);font-size:15px}
/* floating CTA (phone) */
.float{position:fixed;inset:auto 0 0 0;z-index:20;display:none;justify-content:center;padding:10px max(16px,env(safe-area-inset-right,0px)) calc(12px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));background:linear-gradient(transparent,rgba(5,8,22,.92) 40%)}
@media (max-width:860px){
  .hero,.click,.contact{grid-template-columns:minmax(0,1fr)}
  .grid3,.gallery,.songs,.price ul{grid-template-columns:minmax(0,1fr)}
  .stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .wrap{--g:76px}
  .bigbtn{font-size:34px}
  .top .btn{display:none}
  .float{display:flex}
  .poster{flex-basis:160px}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
/* ===== מסכי התוסף, בנויים ב-HTML ===== */
.ui{container-type:inline-size;width:100%;background:#f3f6fc;color:#1f1f1f;font-family:"Assistant",system-ui,sans-serif;display:grid;grid-template-columns:18% 1fr;grid-template-rows:auto 1fr;overflow:hidden;text-align:right;direction:rtl}
.ui *{box-sizing:border-box}
.ui svg.i{width:1.9cqw;height:1.9cqw;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.ui .side{grid-row:1/3;padding:1.6cqw 1.2cqw;display:flex;flex-direction:column;gap:.5cqw;font-size:1.55cqw}
.ui .logo{display:flex;align-items:center;gap:.9cqw;margin-bottom:1.4cqw}
.ui .logo i{width:3.6cqw;height:3.6cqw;border-radius:.9cqw;background:#1f4fd6;display:grid;place-items:center;color:#fff}
.ui .logo i svg{width:2.2cqw;height:2.2cqw;stroke:#fff;fill:none;stroke-width:2.2}
.ui .logo b{font-size:2cqw;line-height:1;display:block}
.ui .logo small{font-size:1.1cqw;color:#5f6368}
.ui .nav{display:flex;align-items:center;gap:1cqw;padding:.75cqw 1.1cqw;border-radius:99cqw;color:#1f1f1f}
.ui .nav.on{background:#d3e3fd;font-weight:700}
.ui .nav em{margin-inline-start:auto;font-style:normal;color:#1f4fd6;font-weight:700;font-size:1.2cqw}
.ui .top{display:flex;align-items:center;gap:1.4cqw;padding:1.3cqw 1.6cqw 1cqw}
.ui .search{flex:1;display:flex;align-items:center;gap:1cqw;background:#e9eef6;border-radius:99cqw;padding:1.1cqw 1.6cqw;font-size:1.5cqw;color:#5f6368}
.ui .avatar{width:3.2cqw;height:3.2cqw;border-radius:50%;background:#1f4fd6;color:#fff;display:grid;place-items:center;font-size:1.5cqw;font-weight:700}
.ui .main{background:#fff;border-radius:1.6cqw 0 0 0;padding:2cqw 2.2cqw;display:flex;flex-direction:column;gap:1.6cqw;overflow:hidden}
.ui h3{margin:0;font-weight:400;font-size:2.9cqw;line-height:1.1}
.ui .crumbs{display:flex;align-items:center;gap:.8cqw;font-size:2.3cqw}
.ui .crumbs span{color:#5f6368}
.ui .tools{display:flex;gap:.8cqw;font-size:1.3cqw}
.ui .pill{border:1px solid #c4c7c5;border-radius:.8cqw;padding:.55cqw 1.2cqw;display:flex;align-items:center;gap:.6cqw}
.ui .pill.on{background:#c2e7ff;border-color:#c2e7ff;font-weight:700}
.ui .cards2{display:grid;grid-template-columns:1fr 1fr;gap:1.4cqw}
.ui .box{border:1px solid #e0e3e7;border-radius:1.4cqw;padding:1.4cqw 1.6cqw;display:grid;gap:.6cqw;font-size:1.4cqw;align-content:start}
.ui .box b{display:flex;align-items:center;gap:.7cqw;font-size:1.6cqw}
.ui .box span{color:#5f6368}
.ui .rows{border:1px solid #e0e3e7;border-radius:1.4cqw;padding:1.2cqw 1.6cqw;display:grid;gap:.2cqw}
.ui .rows b{display:flex;align-items:center;gap:.7cqw;font-size:1.6cqw;margin-bottom:.6cqw}
.ui .row{display:flex;align-items:center;gap:1.1cqw;padding:.55cqw 0;font-size:1.45cqw}
.ui .row .vid{color:#d93025}
.ui .row .nm{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ui .row .sz{color:#5f6368;font-size:1.25cqw;direction:ltr}
.ui .cp{display:inline-flex;align-items:center;gap:.5cqw;background:#0b57d0;color:#fff;border-radius:99cqw;padding:.55cqw 1.4cqw;font-weight:700;font-size:1.3cqw}
.ui .cp svg.i{width:1.4cqw;height:1.4cqw}
.ui .lbl{font-size:1.5cqw;font-weight:700}
.ui .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1cqw}
.ui .g3{grid-template-columns:repeat(3,1fr)}
.ui .tile{background:#f0f4f9;border-radius:1.2cqw;padding:1.2cqw 1.3cqw;display:flex;align-items:center;gap:.9cqw;font-size:1.45cqw;min-width:0}
.ui .tile .t{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ui .tile small{display:block;color:#5f6368;font-size:1.1cqw}
.ui .tile .dots{color:#5f6368;letter-spacing:-.2cqw}
.ui .fcard{background:#f0f4f9;border-radius:1.2cqw;padding:1.2cqw 1.3cqw;display:grid;gap:1cqw;font-size:1.4cqw;min-width:0}
.ui .fcard .h{display:flex;align-items:center;gap:.8cqw;min-width:0}
.ui .fcard .h span{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600}
.ui .fcard .m{color:#5f6368;font-size:1.05cqw;display:flex;gap:.6cqw;white-space:nowrap;overflow:hidden}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="ui-home" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></symbol>
<symbol id="ui-drive" viewBox="0 0 24 24"><path d="M3 15h18l-3-9H6z"/><rect x="3" y="15" width="18" height="5" rx="1.5"/><path d="M7 17.5h.01"/></symbol>
<symbol id="ui-bell" viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21h4"/></symbol>
<symbol id="ui-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></symbol>
<symbol id="ui-layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></symbol>
<symbol id="ui-list" viewBox="0 0 24 24"><path d="M3 6h13M3 12h9M3 18h9M18 14v8M14 18h8"/></symbol>
<symbol id="ui-help" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4M12 17h.01"/></symbol>
<symbol id="ui-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></symbol>
<symbol id="ui-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></symbol>
<symbol id="ui-video" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/></symbol>
<symbol id="ui-music" viewBox="0 0 24 24"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></symbol>
<symbol id="ui-folder" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></symbol>
<symbol id="ui-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
<symbol id="ui-check" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></symbol>
<symbol id="ui-gate" viewBox="0 0 24 24"><path d="M5 20V10a7 7 0 0 1 14 0v10"/><path d="M9 20v-9a3 3 0 0 1 6 0v9"/></symbol>
</defs></svg>
<div class="wrap">
  
<p class="note" role="note"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>כל שמות הקבצים, הסרטים והשירים שמופיעים בדף בדויים ונועדו להמחשה בלבד, מטעמי זכויות יוצרים.</p>
  
<div class="top">
    
<div class="brand">
<div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M5 20V10a7 7 0 0 1 14 0v10"/><path d="M9 20v-9a3 3 0 0 1 6 0v9"/></svg></div>
<div><b>קבצים פלוס</b><small>DriveGate · תוסף לכרום</small></div></div>
    
<button class="btn btn-sun" type="button" data-go="contact">לפרטים</button>
  </div>
  
<section class="hero">
    
<div class="txt">
      <span class="daily"><i></i>כל יום עולים תכנים חדשים</span>
      
<h1>סרטים, סדרות ושירים.<br><span class="hl">הכל במקום אחד.</span></h1>
      
<p class="lead">כל התיקיות המשותפות בתוסף אחד לכרום. בוחרים, לוחצים, והעותק <span class="grad">משותף איתך תוך שניות</span>.</p>
      
<div class="ctas">
<button class="btn btn-sun" type="button" data-go="contact">לפרטים ולהצטרפות ←</button>
<button class="mail" type="button" data-copy>menaka05567@gmail.com</button></div>
      <span class="copied" aria-live="polite"></span>
      <span class="fee"><svg width="20" height="20" viewBox="0 0 24 24" fill="#ff5fa2"><path d="M6 3h12l4 6-10 12L2 9z"/></svg><b>בתשלום סמלי</b> לכיסוי עלויות פיתוח ותחזוקה</span>
    </div>
    
<div class="stage">
<div class="shot">
<div class="ui" role="img" aria-label="מסך מתוך התוסף">
<div class="side">
<div class="logo"><i><svg viewBox="0 0 24 24"><use href="#ui-gate"/></svg></i>
<div><b>DriveGate</b><small>קבצים פלוס</small></div></div>
<div class="nav on"><svg class="i"><use href="#ui-home"/></svg>דף הבית</div>
<div class="nav"><svg class="i"><use href="#ui-drive"/></svg>אחסונים</div>
<div class="nav"><svg class="i"><use href="#ui-bell"/></svg>חדש בדרייב<em>+99</em></div>
<div class="nav"><svg class="i"><use href="#ui-mail"/></svg>הודעות</div>
<div class="nav"><svg class="i"><use href="#ui-layers"/></svg>העותקים שלי</div>
<div class="nav"><svg class="i"><use href="#ui-list"/></svg>הרשימות שלי</div>
<div class="nav"><svg class="i"><use href="#ui-help"/></svg>עזרה</div></div>
<div class="top">
<div class="search"><svg class="i"><use href="#ui-search"/></svg>חיפוש בכל האחסונים</div>
<div class="avatar">מ</div></div>
<div class="main">
<h3>ערב טוב</h3>
<div class="cards2">
<div class="box"><b><svg class="i"><use href="#ui-bell"/></svg>עדכון אחרון מהמנהל</b><span>עלו 40 סרטים ושירים חדשים השבוע!</span></div>
<div class="box"><b><svg class="i"><use href="#ui-mail"/></svg>הודעות</b><span>3 הודעות חדשות בצ׳אט הכללי</span></div></div>
<div class="rows"><b><svg class="i"><use href="#ui-clock"/></svg>חדש היום בדרייב</b>
<div class="row"><span class="vid"><svg class="i"><use href="#ui-video"/></svg></span><span class="nm">משמרת לילה - עונה 2 פרק 5.mp4</span><span class="sz">612 MB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid"><svg class="i"><use href="#ui-video"/></svg></span><span class="nm">הנהג מהלילה האחרון (2026).mp4</span><span class="sz">2.1 GB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid" style="color:#7b3fe4"><svg class="i"><use href="#ui-music"/></svg></span><span class="nm">עידן שלו - כמו פעם.mp3</span><span class="sz">8.4 MB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid"><svg class="i"><use href="#ui-video"/></svg></span><span class="nm">שלושה ימים בחולון.mp4</span><span class="sz">1.8 GB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div></div></div></div></div></div>
  </section>
  
<div class="ticker" aria-hidden="true">
<div><span><b>חדש היום:</b> משמרת לילה – פרק 6</span><span><b>חדש היום:</b> הנהג מהלילה האחרון</span><span><b>חדש היום:</b> עידן שלו – כמו פעם</span><span><b>חדש היום:</b> השכן מקומה 4</span><span><b>חדש היום:</b> רחוב התאנה – פרק 3</span><span><b>חדש היום:</b> הלהקה מהשכונה – אלבום חדש</span><span><b>חדש היום:</b> אחי הקטן – הסרט</span><span><b>חדש היום:</b> משמרת לילה – פרק 6</span><span><b>חדש היום:</b> הנהג מהלילה האחרון</span><span><b>חדש היום:</b> עידן שלו – כמו פעם</span><span><b>חדש היום:</b> השכן מקומה 4</span><span><b>חדש היום:</b> רחוב התאנה – פרק 3</span><span><b>חדש היום:</b> הלהקה מהשכונה – אלבום חדש</span><span><b>חדש היום:</b> אחי הקטן – הסרט</span></div></div>
  
<section class="stats">
    
<div class="stat"><b>מאות</b><span>סרטים וסדרות</span></div>
    
<div class="stat"><b>אלפי</b><span>שירים</span></div>
    
<div class="stat"><b>כל יום</b><span>עולים תכנים חדשים</span></div>
    
<div class="stat"><b>שניות</b><span>עד שהעותק אצלך</span></div>
  </section>
  
<section class="click">
    
<div class="sec">
      
<h2>לוחצים.<br><span class="grad">וזה אצלך.</span></h2>
      
<p class="lead">בוחרים קובץ, לוחצים "עותק", והעותק מחכה ב"העותקים שלי" ומשותף איתך מיד. גם סרטים של כמה ג׳יגה.</p>
    </div>
    
<div class="demo">
      
<div class="bigbtn"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>עותק</div>
      
<div class="toast">
<div class="ok"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></div>
<div>העותק מוכן!<small>משותף איתך · מחכה ב"העותקים שלי"</small></div></div>
    </div>
  </section>
  
<section class="sec">
    
<h2>מה <span class="grad">בפנים?</span></h2>
    
<div class="grid3">
      
<div class="card"><svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg><b>עותק בלחיצה</b><span>עותק אישי שמשותף איתך תוך שניות.</span></div>
      
<div class="card"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><b>חיפוש חכם</b><span>מילה אחת, בכל האחסונים בבת אחת.</span></div>
      
<div class="card"><svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21h4"/></svg><b>חדש בדרייב</b><span>כל יום עולים תכנים חדשים, וכאן רואים הכל, מסודר לפי אחסון.</span></div>
      
<div class="card"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><b>צ׳אט והודעות</b><span>עדכונים, ערוצי נושא, סקרים והודעות פרטיות.</span></div>
      
<div class="card"><svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg><b>סל הורדות</b><span>אוספים מכמה תיקיות, ועותק לכולם בבת אחת.</span></div>
      
<div class="card"><svg viewBox="0 0 24 24"><path d="M3 6h13M3 12h9M3 18h9"/><path d="M18 14v8M14 18h8"/></svg><b>רשימות ומעקב</b><span>שומרים לרשימות ומקבלים סימון כשתיקייה מתעדכנת.</span></div>
    </div>
  </section>
  
<section class="sec">
    
<h2>ככה זה <span class="grad">נראה</span></h2>
    
<div class="gallery">
      
<figure>
<div class="shot">
<div class="ui" role="img" aria-label="מסך מתוך התוסף">
<div class="side">
<div class="logo"><i><svg viewBox="0 0 24 24"><use href="#ui-gate"/></svg></i>
<div><b>DriveGate</b><small>קבצים פלוס</small></div></div>
<div class="nav"><svg class="i"><use href="#ui-home"/></svg>דף הבית</div>
<div class="nav on"><svg class="i"><use href="#ui-drive"/></svg>אחסונים</div>
<div class="nav"><svg class="i"><use href="#ui-bell"/></svg>חדש בדרייב<em>+99</em></div>
<div class="nav"><svg class="i"><use href="#ui-mail"/></svg>הודעות</div>
<div class="nav"><svg class="i"><use href="#ui-layers"/></svg>העותקים שלי</div>
<div class="nav"><svg class="i"><use href="#ui-list"/></svg>הרשימות שלי</div>
<div class="nav"><svg class="i"><use href="#ui-help"/></svg>עזרה</div></div>
<div class="top">
<div class="search"><svg class="i"><use href="#ui-search"/></svg>חיפוש בכל האחסונים</div>
<div class="avatar">מ</div></div>
<div class="main">
<h3>אחסונים</h3>
<div class="tools"><span class="pill on"><svg class="i"><use href="#ui-check"/></svg>אחסונים שיתופיים</span><span class="pill">שותף איתי</span></div>
<div class="grid">
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">סרטים<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">סרטים חדשים<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">סדרות<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">שירים<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">שירים חדשים<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">הופעות<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">ילדים<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-drive"/></svg>
<div class="t">קומדיה<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div></div></div></div></div>
<figcaption><b>אחסונים.</b> סרטים, סדרות, שירים ועוד, מסודרים.</figcaption></figure>
      
<figure>
<div class="shot">
<div class="ui" role="img" aria-label="מסך מתוך התוסף">
<div class="side">
<div class="logo"><i><svg viewBox="0 0 24 24"><use href="#ui-gate"/></svg></i>
<div><b>DriveGate</b><small>קבצים פלוס</small></div></div>
<div class="nav"><svg class="i"><use href="#ui-home"/></svg>דף הבית</div>
<div class="nav on"><svg class="i"><use href="#ui-drive"/></svg>אחסונים</div>
<div class="nav"><svg class="i"><use href="#ui-bell"/></svg>חדש בדרייב<em>+99</em></div>
<div class="nav"><svg class="i"><use href="#ui-mail"/></svg>הודעות</div>
<div class="nav"><svg class="i"><use href="#ui-layers"/></svg>העותקים שלי</div>
<div class="nav"><svg class="i"><use href="#ui-list"/></svg>הרשימות שלי</div>
<div class="nav"><svg class="i"><use href="#ui-help"/></svg>עזרה</div></div>
<div class="top">
<div class="search"><svg class="i"><use href="#ui-search"/></svg>חיפוש בכל האחסונים</div>
<div class="avatar">מ</div></div>
<div class="main">
<div class="crumbs">אחסונים <span>›</span> סרטים חדשים <span>›</span> תיקייה ראשית</div>
<div class="tools"><span class="pill on"><svg class="i"><use href="#ui-check"/></svg>חדש קודם</span><span class="pill">שם</span><span class="pill">גודל</span></div>
<div class="lbl">תיקיות</div>
<div class="grid">
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">קומדיות</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">אקשן</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">דרמה</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">ישראלי</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">משפחה</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">דוקו</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">מותחנים</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">קלאסיקות</div><span class="dots">⋮</span></div></div>
<div class="lbl">קבצים</div>
<div class="grid">
<div class="fcard">
<div class="h"><span class="vid" style="color:#d93025"><svg class="i"><use href="#ui-video"/></svg></span><span>המבצע בנמל</span></div>
<div class="m"><span>12 באוג׳ 2026</span>·<span dir="ltr">1.9 GB</span>·<span dir="ltr">1:41:20</span></div></div>
<div class="fcard">
<div class="h"><span class="vid" style="color:#d93025"><svg class="i"><use href="#ui-video"/></svg></span><span>השכן מקומה 4</span></div>
<div class="m"><span>30 באוג׳ 2026</span>·<span dir="ltr">1.4 GB</span>·<span dir="ltr">1:28:05</span></div></div>
<div class="fcard">
<div class="h"><span class="vid" style="color:#d93025"><svg class="i"><use href="#ui-video"/></svg></span><span>הקיץ של רוני</span></div>
<div class="m"><span>17 בספט׳ 2026</span>·<span dir="ltr">1.6 GB</span>·<span dir="ltr">1:35:44</span></div></div>
<div class="fcard">
<div class="h"><span class="vid" style="color:#d93025"><svg class="i"><use href="#ui-video"/></svg></span><span>בין העננים</span></div>
<div class="m"><span>9 באוג׳ 2026</span>·<span dir="ltr">2.2 GB</span>·<span dir="ltr">1:52:10</span></div></div></div></div></div></div>
<figcaption><b>תיקייה.</b> גודל, תאריך ומשך ליד כל סרט.</figcaption></figure>
      
<figure>
<div class="shot">
<div class="ui" role="img" aria-label="מסך מתוך התוסף">
<div class="side">
<div class="logo"><i><svg viewBox="0 0 24 24"><use href="#ui-gate"/></svg></i>
<div><b>DriveGate</b><small>קבצים פלוס</small></div></div>
<div class="nav"><svg class="i"><use href="#ui-home"/></svg>דף הבית</div>
<div class="nav"><svg class="i"><use href="#ui-drive"/></svg>אחסונים</div>
<div class="nav on"><svg class="i"><use href="#ui-bell"/></svg>חדש בדרייב<em>+99</em></div>
<div class="nav"><svg class="i"><use href="#ui-mail"/></svg>הודעות</div>
<div class="nav"><svg class="i"><use href="#ui-layers"/></svg>העותקים שלי</div>
<div class="nav"><svg class="i"><use href="#ui-list"/></svg>הרשימות שלי</div>
<div class="nav"><svg class="i"><use href="#ui-help"/></svg>עזרה</div></div>
<div class="top">
<div class="search"><svg class="i"><use href="#ui-search"/></svg>חיפוש בכל האחסונים</div>
<div class="avatar">מ</div></div>
<div class="main">
<h3>חדש בדרייב</h3>
<div class="tools"><span class="pill on">הכל</span><span class="pill">סרטונים</span><span class="pill">שירים</span></div>
<div class="rows"><b><svg class="i"><use href="#ui-clock"/></svg>היום</b>
<div class="row"><span class="vid"><svg class="i"><use href="#ui-video"/></svg></span><span class="nm">משמרת לילה - עונה 2 פרק 5.mp4</span><span class="sz">612 MB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid"><svg class="i"><use href="#ui-video"/></svg></span><span class="nm">הנהג מהלילה האחרון (2026).mp4</span><span class="sz">2.1 GB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid" style="color:#7b3fe4"><svg class="i"><use href="#ui-music"/></svg></span><span class="nm">עידן שלו - כמו פעם.mp3</span><span class="sz">8.4 MB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid"><svg class="i"><use href="#ui-video"/></svg></span><span class="nm">שלושה ימים בחולון.mp4</span><span class="sz">1.8 GB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div>
<div class="row"><span class="vid" style="color:#7b3fe4"><svg class="i"><use href="#ui-music"/></svg></span><span class="nm">הלהקה מהשכונה - רוקדים עד הבוקר.mp3</span><span class="sz">9.1 MB</span><span class="cp"><svg class="i"><use href="#ui-copy"/></svg>עותק</span></div></div></div></div></div>
<figcaption><b>חדש היום.</b> כפתור עותק ליד כל קובץ.</figcaption></figure>
      
<figure>
<div class="shot">
<div class="ui" role="img" aria-label="מסך מתוך התוסף">
<div class="side">
<div class="logo"><i><svg viewBox="0 0 24 24"><use href="#ui-gate"/></svg></i>
<div><b>DriveGate</b><small>קבצים פלוס</small></div></div>
<div class="nav"><svg class="i"><use href="#ui-home"/></svg>דף הבית</div>
<div class="nav on"><svg class="i"><use href="#ui-drive"/></svg>אחסונים</div>
<div class="nav"><svg class="i"><use href="#ui-bell"/></svg>חדש בדרייב<em>+99</em></div>
<div class="nav"><svg class="i"><use href="#ui-mail"/></svg>הודעות</div>
<div class="nav"><svg class="i"><use href="#ui-layers"/></svg>העותקים שלי</div>
<div class="nav"><svg class="i"><use href="#ui-list"/></svg>הרשימות שלי</div>
<div class="nav"><svg class="i"><use href="#ui-help"/></svg>עזרה</div></div>
<div class="top">
<div class="search"><svg class="i"><use href="#ui-search"/></svg>חיפוש בכל האחסונים</div>
<div class="avatar">מ</div></div>
<div class="main">
<div class="crumbs">אחסונים <span>›</span> שירים <span>›</span> כל האמנים</div>
<div class="tools"><span class="pill">חדש קודם</span><span class="pill on"><svg class="i"><use href="#ui-check"/></svg>שם</span><span class="pill">גודל</span></div>
<div class="lbl">תיקיות</div>
<div class="grid">
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">עידן שלו</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">נועם בר</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">הלהקה מהשכונה</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">אביב רון</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">דני מור</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">להקת גשר</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">איתי לוי</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">רועי אדם</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">שחר בן נון</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">להקת הצפון</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">מסיבת קיץ 2026</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">להיטי השנה</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">שקטים לנסיעה</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">מזרחית חדשה</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">ילדים שרים</div><span class="dots">⋮</span></div>
<div class="tile"><svg class="i"><use href="#ui-folder"/></svg>
<div class="t">הופעות חיות</div><span class="dots">⋮</span></div></div></div></div></div>
<figcaption><b>שירים לפי אמנים.</b> רשת או רשימה, מיון לפי חדש, שם או גודל.</figcaption></figure>
    </div>
  </section>
  
<section class="price">
    <span class="tag">כמה זה עולה?</span>
    
<h2><span class="hl">תשלום סמלי.</span></h2>
    
<p class="lead">רק כדי לכסות את עלויות הפיתוח והתחזוקה, ושהכל ימשיך לעבוד חלק.</p>
    
<ul>
<li>כל האחסונים</li>
<li>עותק בלחיצה</li>
<li>עדכוני גרסה</li>
<li>צ׳אט והודעות</li>
<li>חדש בדרייב</li>
<li>תמיכה אישית</li></ul>
    
<button class="btn btn-sun" type="button" data-go="contact">אני רוצה להצטרף ←</button>
  </section>
  
<section class="contact" id="contact">
    
<div class="info">
      
<h2>רוצים <span class="grad">פרטים?</span></h2>
      
<p class="lead">לפרטים שלחו מייל לכתובת שלי:</p>
      
<button class="mail" type="button" data-copy>menaka05567@gmail.com</button>
      <span class="copied" aria-live="polite"></span>
      <span class="fee"><svg width="20" height="20" viewBox="0 0 24 24" fill="#ff5fa2"><path d="M6 3h12l4 6-10 12L2 9z"/></svg><b>בתשלום סמלי</b> לכיסוי עלויות פיתוח ותחזוקה</span>
    </div>
  </section>
  
<p class="foot">קבצים פלוס · DriveGate · לחיצה על כתובת המייל מעתיקה אותה</p>
</div>
<div class="float">
<button class="btn btn-sun" type="button" data-go="contact">לפרטים ולהצטרפות</button></div>
<script>
(function () {
  var TO = "menaka05567@gmail.com";
  // מעבר לטופס בלי לשנות את ה-# בכתובת (שינוי ה-# מחזיר לאתר הראשי)
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () {
      var el = document.getElementById(b.getAttribute("data-go"));
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var note = b.nextElementSibling;
      var done = function () { note.textContent = "המייל הועתק ✓"; };
      try { navigator.clipboard.writeText(TO).then(done, function () { note.textContent = TO; }); } catch (e) { note.textContent = TO; }
    });
  });
})();
</script>
<script>addEventListener("hashchange",function(){if(location.hash!=="#kvatzim-plus")location.reload()});</script>
</body></html>
`;

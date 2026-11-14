# מסכי התוסף בדף, בנויים ב-HTML/CSS (בלי קבצי תמונה): העיצוב, האייקונים והשמות המומצאים
import re
CSS = r'''
/* ===== מסכי התוסף, בנויים ב-HTML ===== */
.ui{container-type:inline-size;width:100%;aspect-ratio:var(--ar,16/8.6);background:#f3f6fc;color:#1f1f1f;font-family:"Assistant",system-ui,sans-serif;display:grid;grid-template-columns:18% 1fr;grid-template-rows:auto 1fr;overflow:hidden;text-align:right;direction:rtl}
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
'''
SPRITE = '''<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
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
</defs></svg>'''
def ic(n, cls='i'): return f'<svg class="{cls}"><use href="#ui-{n}"/></svg>'
NAV = [('home','דף הבית'),('drive','אחסונים'),('bell','חדש בדרייב'),('mail','הודעות'),('layers','העותקים שלי'),('list','הרשימות שלי'),('help','עזרה')]
def frame(active, main, ar='16/8.6'):
    side = '<div class="side"><div class="logo"><i>'+'<svg viewBox="0 0 24 24"><use href="#ui-gate"/></svg>'+'</i><div><b>DriveGate</b><small>קבצים פלוס</small></div></div>' + ''.join(
        f'<div class="nav{" on" if k==active else ""}">{ic(k)}{t}{"<em>+99</em>" if k=="bell" else ""}</div>' for k,t in NAV) + '</div>'
    top = f'<div class="top"><div class="search">{ic("search")}חיפוש בכל האחסונים</div><div class="avatar">מ</div></div>'
    return f'<div class="ui" style="--ar:{ar}" role="img" aria-label="מסך מתוך התוסף">{side}{top}<div class="main">{main}</div></div>'
def rows(items):
    return ''.join(f'<div class="row"><span class="vid"{" style=\"color:#7b3fe4\"" if n.endswith(".mp3") else ""}>{ic("music" if n.endswith(".mp3") else "video")}</span><span class="nm">{n}</span><span class="sz">{s}</span><span class="cp">{ic("copy")}עותק</span></div>' for n,s in items)
NEW = [('משמרת לילה - עונה 2 פרק 5.mp4','612 MB'),('הנהג מהלילה האחרון (2026).mp4','2.1 GB'),('עידן שלו - כמו פעם.mp3','8.4 MB'),('שלושה ימים בחולון.mp4','1.8 GB'),('הלהקה מהשכונה - רוקדים עד הבוקר.mp3','9.1 MB')]
HOME = frame('home', '<h3>ערב טוב</h3><div class="cards2"><div class="box"><b>'+ic('bell')+'עדכון אחרון מהמנהל</b><span>עלו 40 סרטים ושירים חדשים השבוע!</span></div><div class="box"><b>'+ic('mail')+'הודעות</b><span>3 הודעות חדשות בצ׳אט הכללי</span></div></div><div class="rows"><b>'+ic('clock')+'חדש היום בדרייב</b>'+rows(NEW[:4])+'</div>')
DRV = ['סרטים','סרטים חדשים','סדרות','שירים','שירים חדשים','הופעות','ילדים','קומדיה']
DRIVES = frame('drive', '<h3>אחסונים</h3><div class="tools"><span class="pill on">'+ic('check')+'אחסונים שיתופיים</span><span class="pill">שותף איתי</span></div><div class="grid">'+''.join(f'<div class="tile">{ic("drive")}<div class="t">{d}<small>אחסון שיתופי</small></div><span class="dots">⋮</span></div>' for d in DRV)+'</div>', '16/7')
FOLD = ['קומדיות','אקשן','דרמה','ישראלי','משפחה','דוקו','מותחנים','קלאסיקות']
FILES = [('המבצע בנמל','12 באוג׳ 2026','1.9 GB','1:41:20'),('השכן מקומה 4','30 באוג׳ 2026','1.4 GB','1:28:05'),('הקיץ של רוני','17 בספט׳ 2026','1.6 GB','1:35:44'),('בין העננים','9 באוג׳ 2026','2.2 GB','1:52:10')]
FOLDER = frame('drive', '<div class="crumbs">אחסונים <span>›</span> סרטים חדשים <span>›</span> תיקייה ראשית</div><div class="tools"><span class="pill on">'+ic('check')+'חדש קודם</span><span class="pill">שם</span><span class="pill">גודל</span></div><div class="lbl">תיקיות</div><div class="grid">'+''.join(f'<div class="tile">{ic("folder")}<div class="t">{f}</div><span class="dots">⋮</span></div>' for f in FOLD)+'</div><div class="lbl">קבצים</div><div class="grid">'+''.join(f'<div class="fcard"><div class="h"><span class="vid" style="color:#d93025">{ic("video")}</span><span>{n}</span></div><div class="m"><span>{d}</span>·<span dir="ltr">{s}</span>·<span dir="ltr">{t}</span></div></div>' for n,d,s,t in FILES)+'</div>', '16/9.4')
LIST = frame('bell', '<h3>חדש בדרייב</h3><div class="tools"><span class="pill on">הכל</span><span class="pill">סרטונים</span><span class="pill">שירים</span></div><div class="rows"><b>'+ic('clock')+'היום</b>'+rows(NEW)+'</div>', '16/8.6')
GRIDV = frame('drive', '<div class="crumbs">אחסונים <span>›</span> שירים <span>›</span> כל האמנים</div><div class="tools"><span class="pill">חדש קודם</span><span class="pill on">'+ic('check')+'שם</span><span class="pill">גודל</span></div><div class="lbl">תיקיות</div><div class="grid">'+''.join(f'<div class="tile">{ic("folder")}<div class="t">{f}</div><span class="dots">⋮</span></div>' for f in ['עידן שלו','נועם בר','הלהקה מהשכונה','אביב רון','דני מור','להקת גשר','איתי לוי','רועי אדם','שחר בן נון','להקת הצפון','מסיבת קיץ 2026','להיטי השנה','שקטים לנסיעה','מזרחית חדשה','ילדים שרים','הופעות חיות'])+'</div>', '16/8.2')


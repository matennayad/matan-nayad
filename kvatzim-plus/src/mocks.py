# מסכי התוסף בדף, בנויים ב-HTML/CSS (בלי קבצי תמונה): העיצוב, האייקונים והשמות המומצאים
import re
CSS = r'''
/* ===== מסכי התוסף, בנויים ב-HTML ===== */
.ui{container-type:inline-size;width:100%;aspect-ratio:var(--ar,16/8.6);background:#f3f6fc;color:#1f1f1f;font-family:"Assistant",system-ui,sans-serif;display:grid;grid-template-columns:16% 1fr;grid-template-rows:auto 1fr;overflow:hidden;text-align:right;direction:rtl}
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
.ui .g5{grid-template-columns:repeat(5,1fr)}
/* שמות מטושטשים: מתחת לטשטוש יש טקסט כללי, לא השם האמיתי */
.ui .bl{filter:blur(.32cqw);user-select:none;opacity:.85}
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
    top = f'<div class="top"><div class="search">{ic("search")}חיפוש בכל האחסונים ( / )</div><div class="avatar">T</div></div>'
    return f'<div class="ui" style="--ar:{ar}" role="img" aria-label="מסך מתוך התוסף">{side}{top}<div class="main">{main}</div></div>'
def rows(items):
    return ''.join(f'<div class="row"><span class="vid"{" style=\"color:#7b3fe4\"" if n.endswith(".mp3") else ""}>{ic("music" if n.endswith(".mp3") else "video")}</span><span class="nm">{n}</span><span class="sz">{s}</span><span class="cp">{ic("copy")}עותק</span></div>' for n,s in items)

# ===== התוכן: לפי צילומי המסך המקוריים. שמות של תוכניות/סדרות מוחלפים בטקסט כללי ומטושטשים (bl) =====
def nm(t, blur=False):
    return f'<span class="bl" aria-hidden="true">{t}</span>' if blur else t
HID = ['שם הקובץ מוסתר - עונה 1 פרק 21.mp4', 'שם הקובץ מוסתר - עונה 1 פרק 22.mp4', 'שם הקובץ מוסתר - עונה 1 פרק 23.mp4',
       'שם הקובץ מוסתר - עונה 1 פרק 24.mp4', 'שם מוסתר.mp4', 'שם הקובץ מוסתר כאן בגלל זכויות יוצרים.mp4']
def rows(items):
    return ''.join(f'<div class="row"><span class="vid">{ic("video")}</span><span class="nm">{nm(n, True)}</span><span class="sz">{s}</span><span class="cp">{ic("copy")}עותק</span></div>' for n, s in items)
HOME = frame('home', '<h3>לילה טוב</h3><div class="cards2"><div class="box"><b>' + ic('bell') + 'עדכון אחרון מהמנהל</b><span>אין עדיין עדכונים.</span></div>'
             '<div class="box"><b>' + ic('mail') + 'הודעות</b><span style="font-size:2.6cqw;color:#1f1f1f">✓</span><span>קראת הכל</span><b style="font-size:1.4cqw">פתיחת ההודעות</b></div></div>'
             '<div class="rows"><b>' + ic('clock') + 'חדש היום בדרייב</b>' + rows(list(zip(HID, ['557 MB', '604 MB', '650 MB', '819 MB', '2.2 GB', '2.1 GB']))) + '</div>')

def tiles(items, icon):
    out = ''
    for t in items:
        name, blur, sub = (t + (None,) * 3)[:3] if isinstance(t, tuple) else (t, False, None)
        out += f'<div class="tile">{ic(icon)}<div class="t">{nm(name, blur)}{f"<small>{sub}</small>" if sub else ""}</div><span class="dots">⋮</span></div>'
    return out

DRIVES = frame('drive', '<h3>אחסונים</h3><div class="tools"><span class="pill on">' + ic('check') + 'אחסונים שיתופיים</span><span class="pill">שותף איתי</span></div>'
               '<div class="grid g5">' + tiles([(d, False, 'אחסון שיתופי') for d in ['בדיקות', 'בדיקות 2', 'היסטוריה', 'מהדורות', 'סרטים', 'סרטים חדש', 'שירים']], 'drive') + '</div>')

FOLD = [('מערכונים כשרים',), ('שם מוסתר', True), ('שם התוכנית מוסתר', True), ('שם מוסתר', True), ('סטנדאפ',),
        ('**סרטים**',), ('**סדרות**',), ('תקצירים מונדיאל',), ('סרטי שואה',), ('סרטים חדשים',),
        ('שם התוכנית מוסתר', True), ('שירים',), ('רסלינג ישראל',), ('בקשות מיוחדות',)]
FILES = [('17 בספט׳ 2026', '77.1 MB', '1:48'), ('17 בספט׳ 2026', '1.6 GB', ''), ('30 באוג׳ 2026', '398 MB', '24:13'),
         ('12 באוג׳ 2026', '1.1 GB', '1:33:56'), ('9 באוג׳ 2026', '1.1 GB', '16:46'), ('3 באוג׳ 2026', '1.5 GB', '2:05:19')]
def fcards(items):
    return ''.join(f'<div class="fcard"><div class="h"><span class="vid" style="color:#d93025">{ic("video")}</span><span>{nm("שם הקובץ מוסתר", True)}</span></div>'
                   f'<div class="m"><span>{d}</span>·<span dir="ltr">{s}</span>{"·<span dir=ltr>" + t + "</span>" if t else ""}</div></div>' for d, s, t in items)
CRUMB = 'אחסונים <span>›</span> זמן קיץ/אלול תשפ״ו <span>›</span> תיקיה ראשית'
FOLDER = frame('drive', f'<div class="crumbs">{CRUMB}</div><div class="tools"><span class="pill on">' + ic('check') + 'חדש קודם</span><span class="pill">שם</span><span class="pill">גודל</span></div>'
               '<div class="lbl">תיקיות</div><div class="grid g5">' + tiles(FOLD, 'folder') + '</div>'
               '<div class="lbl">קבצים</div><div class="grid g5">' + fcards(FILES) + '</div>')

SER = ['שם מוסתר', 'שם הסדרה מוסתר', 'שם מוסתר כאן', 'שם הסדרה', 'שם מוסתר לגמרי']
GRID_ITEMS = [(SER[i % 5], True) for i in range(40)]
GRID_ITEMS[25] = ('שם הסדרה', True, '7 קבצים · 2.7 GB')
GRIDV = frame('drive', f'<div class="crumbs">{CRUMB} <span>›</span> **סדרות**</div><div class="tools"><span class="pill">חדש קודם</span><span class="pill on">' + ic('check') + 'שם</span><span class="pill">גודל</span></div>'
              '<div class="lbl">תיקיות</div><div class="grid g5">' + tiles(GRID_ITEMS, 'folder') + '</div>')
LIST = HOME

CSS += """
.ui .g5{gap:.8cqw}
.ui .nav{white-space:nowrap;font-size:1.4cqw;gap:.8cqw;padding:.7cqw .9cqw}
.ui .g5 .tile{padding:1cqw 1cqw;gap:.6cqw;font-size:1.3cqw}
.ui .g5 .tile svg.i{width:1.6cqw;height:1.6cqw}
.ui .g5 .tile .dots{font-size:1.1cqw}
.ui .g5 .fcard{padding:1cqw;font-size:1.25cqw}
.ui .g5 .fcard .m{font-size:.95cqw;flex-wrap:wrap;white-space:normal;gap:.3cqw .5cqw}
"""

# ===== "חדש בדרייב" – תצוגת הצ׳אט, לפי צילומי המסך. שמות התכנים מטושטשים =====
CSS += """
.ui .fd{display:grid;grid-template-columns:31% 1fr;flex:1;min-height:0;margin:-2cqw -2.2cqw;}
.ui .convs{border-left:1px solid #e0e3e7;padding:1.8cqw 1.2cqw;display:grid;gap:.5cqw;align-content:start}
.ui .convs h4{margin:0 0 .8cqw;font-size:1.9cqw;font-weight:700}
.ui .conv{display:flex;align-items:center;gap:1cqw;padding:.9cqw 1cqw;border-radius:1.4cqw}
.ui .conv.on{background:#d3e3fd}
.ui .av{width:3.4cqw;height:3.4cqw;border-radius:50%;display:grid;place-items:center;color:#fff;font-weight:700;font-size:1.5cqw;flex:none}
.ui .av svg.i{width:1.7cqw;height:1.7cqw}
.ui .conv .t{flex:1;min-width:0;font-size:1.4cqw}
.ui .conv .t small{display:block;color:#5f6368;font-size:1.15cqw;white-space:nowrap;overflow:hidden}
.ui .conv time{align-self:flex-start;color:#5f6368;font-size:1.1cqw}
.ui .feed{padding:1.8cqw 2cqw;display:grid;gap:1cqw;align-content:start;min-width:0}
.ui .fh{display:flex;align-items:center;gap:1cqw}
.ui .fh b{font-size:2cqw;display:block}
.ui .fh small{color:#5f6368;font-size:1.15cqw}
.ui .flt{display:flex;gap:.7cqw;flex-wrap:wrap;font-size:1.2cqw;padding-bottom:1cqw;border-bottom:1px solid #e0e3e7}
.ui .flt .pill.scan{color:#0b57d0;border-color:#a8c7fa}
.ui .day{justify-self:center;border:1px solid #e0e3e7;border-radius:99cqw;padding:.4cqw 1.4cqw;font-size:1.15cqw;font-weight:700;background:#fff}
.ui .post{display:grid;grid-template-columns:3.4cqw 1fr;gap:.4cqw 1cqw}
.ui .post .who{font-size:1.4cqw;font-weight:700;align-self:center}
.ui .post .who time{font-weight:400;color:#5f6368;font-size:1.1cqw;margin-inline-start:.8cqw}
.ui .fc{grid-column:2;display:flex;align-items:center;gap:1.1cqw;background:#f0f4f9;border-radius:1.2cqw;padding:1cqw 1.2cqw}
.ui .fc .ico{width:3cqw;height:3cqw;border-radius:.8cqw;background:#fff;display:grid;place-items:center;color:#d93025;flex:none}
.ui .fc .ico.au{color:#7b3fe4}
.ui .fc .n{flex:1;min-width:0;font-size:1.35cqw}
.ui .fc .n small{display:block;color:#5f6368;font-size:1.1cqw}
"""
NAV_AV = {'ס': '#7b3fe4', 'מ': '#0f766e', 'ש': '#1f56d6', 'ב': '#0f766e', 'ק': '#b45309'}
CONVS = [('all', 'כל העדכונים', 'כל האחסונים יחד', ''), ('ס', 'סרטים חדש', 'תוכנית מוסתרת', '00:15'),
         ('מ', 'מהדורות', 'שם מוסתר.mp4', '00:05'), ('ש', 'שירים', 'זמר - שיר מוסתר.mp3', '13 בנוב׳'),
         ('ב', 'בדיקות', 'שם מוסתר', '9 בנוב׳')]
def convs(active):
    out = '<div class="convs"><h4>שיחות</h4>'
    for k, n, prev, tm in CONVS:
        av = f'<span class="av" style="background:#0b57d0">{ic("bell")}</span>' if k == 'all' else f'<span class="av" style="background:{NAV_AV[k]}">{k}</span>'
        pv = prev if k == 'all' else nm(prev, True)
        out += f'<div class="conv{" on" if k == active else ""}">{av}<div class="t">{n}<small>{pv}</small></div>{f"<time>{tm}</time>" if tm else ""}</div>'
    return out + '</div>'
def card(size, kind):
    au = kind == 'au'
    return (f'<div class="fc"><span class="ico{" au" if au else ""}">{ic("music" if au else "video")}</span>'
            f'<div class="n">{nm("שם הקובץ מוסתר - זכויות יוצרים" + (".mp3" if au else ".mp4"), True)}<small><bdi dir="ltr">{size}</bdi> · {"MP3" if au else "MP4"} · {"שמע" if au else "וידאו"}</small></div></div>')
def post(letter, who, tm, cards):
    return (f'<div class="post"><span class="av" style="background:{NAV_AV[letter]}">{letter}</span><div class="who">{who}<time>{tm}</time></div>'
            + ''.join(cards) + '</div>')
def feed_head(icon_html, title, sub, audio_on=False):
    return (f'<div class="fh">{icon_html}<div><b>{title}</b><small>{sub}</small></div></div>'
            '<div class="flt"><span class="pill on">' + ic('check') + 'הכל</span><span class="pill">' + ic('video') + 'וידאו</span>'
            '<span class="pill">' + ic('music') + 'אודיו</span><span class="pill scan">' + ic('search') + 'סרוק עכשיו</span></div>')
FEED_ALL = frame('bell', '<div class="fd">' + convs('all') + '<div class="feed">'
    + feed_head('<span class="av" style="background:#0b57d0">' + ic('bell') + '</span>', 'כל העדכונים', 'קבצים חדשים מכל האחסונים · נסרק לפני 5 דק׳')
    + '<span class="day">אתמול</span>'
    + post('ק', 'סרטים חדש › קבצים פלוס', '23:34', [card('1.3 GB', 'v')])
    + post('מ', 'מהדורות › מהדורות ותוכניות', '23:43', [card('682 MB', 'v')])
    + '<span class="day">היום</span>'
    + post('מ', 'מהדורות › מהדורות ותוכניות', '00:05', [card('1.0 GB', 'v')])
    + post('ק', 'סרטים חדש › קבצים פלוס', '00:07', [card('1.2 GB', 'v'), card('765 MB', 'v')])
    + '</div></div>')
FEED_SONGS = frame('bell', '<div class="fd">' + convs('ש') + '<div class="feed">'
    + feed_head('<span class="av" style="background:#1f56d6">ש</span>', 'שירים', '82 קבצים בשבוע האחרון · נסרק לפני 6 דק׳')
    + post('ש', 'שירים חדשים', '21:10', [card('7.8 MB', 'au')])
    + '<span class="day">יום חמישי, 12 בנובמבר</span>'
    + post('ש', 'שירים חדשים', '09:53', [card('7.1 MB', 'au')])
    + '<span class="day">יום שישי, 13 בנובמבר</span>'
    + post('ש', 'שירים חדשים', '07:02', [card('6.6 MB', 'au'), card('7.6 MB', 'au'), card('6.8 MB', 'au')])
    + '</div></div>')

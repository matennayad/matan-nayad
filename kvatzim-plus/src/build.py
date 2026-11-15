# בונה את kvatzim-plus/shell.js מתוך page.tpl.html ו-mocks.py
# הרצה מתיקיית הריפו:  python3 kvatzim-plus/src/build.py
import os, re, runpy
here = os.path.dirname(os.path.abspath(__file__))
ns = runpy.run_path(os.path.join(here, 'mocks.py'))
t = open(os.path.join(here, 'page.tpl.html'), encoding='utf8').read()

gem = '<svg width="20" height="20" viewBox="0 0 24 24" fill="#ff5fa2"><path d="M6 3h12l4 6-10 12L2 9z"/></svg>'
tick = ''.join(f'<span><b>חדש היום:</b> {x}</span>' for x in [
    'משמרת לילה – פרק 6', 'הנהג מהלילה האחרון', 'עידן שלו – כמו פעם', 'השכן מקומה 4',
    'רחוב התאנה – פרק 3', 'הלהקה מהשכונה – אלבום חדש', 'אחי הקטן – הסרט'])
rep = {'{{UI_CSS}}': ns['CSS'].replace('aspect-ratio:var(--ar,16/8.6);', ''), '{{SPRITE}}': ns['SPRITE'], '{{GEM}}': gem,
       '{{TICKER}}': tick, '{{HOME}}': ns['HOME'], '{{DRIVES}}': ns['DRIVES'], '{{FOLDER}}': ns['FOLDER'],
       '{{LIST}}': ns['LIST'], '{{GRIDV}}': ns['GRIDV'], '{{FEED_ALL}}': ns['FEED_ALL'], '{{FEED_SONGS}}': ns['FEED_SONGS']}
for k, v in rep.items():
    t = t.replace(k, v)
t = re.sub(r' style="--ar:[^"]*"', '', t)
assert '{{' not in t

# כשמשנים את ה-# בכתובת – חוזרים לאתר הראשי
t = t.replace('</body>', '<script>addEventListener("hashchange",function(){if(location.hash!=="#kvatzim-plus")location.reload()});</script>\n</body>')

# שורה חדשה לפני כל אלמנט "גדול", כדי שיהיה קל למצוא ולערוך טקסט
t = re.sub(r'(?<!\n)(<(?:section|div|p|h1|h2|h3|ul|li|figure|figcaption|header|style|script|span class="(?:daily|fee|copied)"|button)\b)', r'\n\1', t)
t = re.sub(r'\n{2,}', '\n', t)
assert '`' not in t and '${' not in t, 'אסור שיהיו בדף התווים ` או ${'

head = ('// ===== קבצים פלוס – דף הנחיתה =====\n'
        '// הדף נטען מ-index.html כשנכנסים לכתובת עם #kvatzim-plus בסוף.\n'
        '// לשינוי טקסט: מחפשים את המילה בקובץ (Ctrl+F), משנים אותה, ושומרים. רק לא למחוק את התווים ` בתחילת הדף ובסופו.\n'
        '// הקובץ נבנה מ-kvatzim-plus/src (ראו README שם).\n')
out = os.path.join(here, '..', 'shell.js')
open(out, 'w', encoding='utf8').write(head + 'window.KP_SHELL = String.raw`' + t + '`;\n')
print('נבנה:', os.path.normpath(out), t.count('\n'), 'שורות')

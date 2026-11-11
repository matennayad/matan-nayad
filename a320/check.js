/* Connection check for #a320: downloads the model files and verifies they arrive complete. */
(function () {
  var FILES = [
    { path: 'a320/ck.bin', name: 'דגם תא הטייס', size: 5641873, sha: '67fbf9be2f6a24e3401195a5276e8819755b8f1c0652642dca44de1d47271d19' },
    { path: 'a320/ext.bin', name: 'דגם המטוס מבחוץ', size: 1721409, sha: 'aefd32664edf573fbba6fa5ef83bc606ea88a950ad491c8cbb831b05588cc4db' },
    { path: 'a320/probe-big.js', name: 'קוד התלת-ממד', size: 715330, sha: 'b9abfbf8194b3ea4b44977671e7d0f5854a92fae96b8a2a0664f0f2c5413a2e7' }
  ];
  var host = document.getElementById('a320View');
  host.innerHTML = '<div class="a3-card"><h1>בדיקת חיבור למטוס</h1><p>מוריד את קבצי הדגם ובודק שהם הגיעו שלמים…</p><ul id="a3list"></ul><p id="a3sum"></p><p><a href="#" id="a3back">→ חזרה לאתר</a></p></div>';
  document.getElementById('a3back').onclick = function (e) { e.preventDefault(); history.replaceState(null, '', location.pathname); dispatchEvent(new HashChangeEvent('hashchange')); };
  var list = document.getElementById('a3list'), ok = 0, done = 0;
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }
  FILES.forEach(function (f) {
    var li = document.createElement('li'); li.textContent = f.name + ': מוריד…'; list.appendChild(li);
    var t0 = performance.now();
    fetch(f.path + '?v=' + Date.now(), { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('שגיאת שרת ' + r.status);
      return r.arrayBuffer();
    }).then(function (buf) {
      return crypto.subtle.digest('SHA-256', buf).then(function (d) {
        var good = buf.byteLength === f.size && hex(d) === f.sha;
        var sec = ((performance.now() - t0) / 1000).toFixed(1);
        li.textContent = f.name + ': ' + (good ? '✓ תקין' : '✗ פגום') + ' (' + buf.byteLength.toLocaleString() + ' מתוך ' + f.size.toLocaleString() + ' בתים, ' + sec + ' שניות)';
        li.className = good ? 'ok' : 'bad'; if (good) ok++;
      });
    }).catch(function (e) { li.textContent = f.name + ': ✗ לא הגיע (' + e.message + ')'; li.className = 'bad'; })
      .then(function () { if (++done === FILES.length) { var s = document.getElementById('a3sum'); s.textContent = ok === FILES.length ? 'הכל הגיע שלם! אפשר לבנות את המטוס.' : 'חלק מהקבצים לא הגיעו שלמים. צלם את המסך ושלח לי.'; s.className = ok === FILES.length ? 'ok' : 'bad'; } });
  });
})();

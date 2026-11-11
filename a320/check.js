/* Connection check for #a320: downloads the model files and verifies they arrive complete. */
(function () {
  var FILES = [{"path": "a320/m_ck_0.js", "name": "תא הטייס – חלק 1", "size": 1000042, "sha": "2beb3d9a567a75843605c5dca631bf59d1f2c9f76a6f19ef3d65e094ccdac289"}, {"path": "a320/m_ck_1.js", "name": "תא הטייס – חלק 2", "size": 1000042, "sha": "edae2f9fb02ff9785d716a4f300aadf9a1d39e4730408acef8a521ab2288e709"}, {"path": "a320/m_ck_2.js", "name": "תא הטייס – חלק 3", "size": 1000042, "sha": "546fba222883dd5cc4ddac1c79241d6e330bc861874febf70c167eb733a866c6"}, {"path": "a320/m_ck_3.js", "name": "תא הטייס – חלק 4", "size": 1000042, "sha": "9f31e0fda1de37e8fd0224c8c69b8eff678032302ad121e0671cb5a7ee3de3ee"}, {"path": "a320/m_ck_4.js", "name": "תא הטייס – חלק 5", "size": 1000042, "sha": "d7709c4fb67106e76f6b7179a4948bc9b73e7ca80a4e63c737931949c9702fe3"}, {"path": "a320/m_ck_5.js", "name": "תא הטייס – חלק 6", "size": 1000042, "sha": "e29978ee02b51927e5013482cff5784cc70be9a08addebc1e6fb553b806df8d8"}, {"path": "a320/m_ck_6.js", "name": "תא הטייס – חלק 7", "size": 1000042, "sha": "53f9f06d29c2ba323d3f373b8b172ab11683473f81018078108af3dce19a7e44"}, {"path": "a320/m_ck_7.js", "name": "תא הטייס – חלק 8", "size": 498942, "sha": "c51de278f168740a40a7a0cb6c9ee676723c519bd4501eb6da0f8e6c30071c29"}, {"path": "a320/m_ext_0.js", "name": "מטוס מבחוץ – חלק 1", "size": 1000043, "sha": "164c4d998faa502f86527ab151e77d7e39db3ac89ce03e64f8466fd80c6bbd30"}, {"path": "a320/m_ext_1.js", "name": "מטוס מבחוץ – חלק 2", "size": 1000043, "sha": "e5f8ab8801a67ab52b7f51cafbcfd83dd1e577682ce326831f98b7c954ca968b"}, {"path": "a320/m_ext_2.js", "name": "מטוס מבחוץ – חלק 3", "size": 295255, "sha": "018a3929d83714354e97a5f0cdffe59c9aa746da2b9879bf5a9960e543395ec0"}].concat([{ path: 'a320/probe-big.js', name: 'קוד התלת-ממד', size: 715330, sha: 'b9abfbf8194b3ea4b44977671e7d0f5854a92fae96b8a2a0664f0f2c5413a2e7' }]);
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

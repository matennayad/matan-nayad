/* Connection check for #a320: downloads the model files and verifies they arrive complete. */
(function () {
  var FILES = [{"path": "a320/m_ck_0.js", "name": "תא הטייס – חלק 1", "size": 1000042, "sha": "1ccb6327f7398a2bbe4f9fbdec3ed3be4069a20e5a8e2e26bacd1f886f0e5ad9"}, {"path": "a320/m_ck_1.js", "name": "תא הטייס – חלק 2", "size": 1000042, "sha": "6fea495a9350cef7e4f67d87229013ea6b99d2b2640a9264c16736653220f1e4"}, {"path": "a320/m_ck_2.js", "name": "תא הטייס – חלק 3", "size": 1000042, "sha": "ffdc49ec89eb847ae173b1f238db70645c289645fbda567602ee16e229111c8e"}, {"path": "a320/m_ck_3.js", "name": "תא הטייס – חלק 4", "size": 1000042, "sha": "e6eac647a970d149eff03104a9791747fcb5a25b0becfee5b41d42077ad769ae"}, {"path": "a320/m_ck_4.js", "name": "תא הטייס – חלק 5", "size": 1000042, "sha": "c6074308122c16e92e37b28bf2144da0c9a928034b5da859365b8393476e1920"}, {"path": "a320/m_ck_5.js", "name": "תא הטייס – חלק 6", "size": 1000042, "sha": "cb62ffd06e13b74a3633afcef2c5fcab408178ba26fd303ff444a293d066060e"}, {"path": "a320/m_ck_6.js", "name": "תא הטייס – חלק 7", "size": 1000042, "sha": "64ad0b1937efb81fec8e6cfc47eb2a9bb2c5ad97d45a8fce18c898d347bc81c6"}, {"path": "a320/m_ck_7.js", "name": "תא הטייס – חלק 8", "size": 522542, "sha": "583c6dbcaec026012c464371731d4dc4eea7893c1029d6db0a8161c7594afb28"}, {"path": "a320/m_ext_0.js", "name": "מטוס מבחוץ – חלק 1", "size": 1000043, "sha": "164c4d998faa502f86527ab151e77d7e39db3ac89ce03e64f8466fd80c6bbd30"}, {"path": "a320/m_ext_1.js", "name": "מטוס מבחוץ – חלק 2", "size": 1000043, "sha": "e5f8ab8801a67ab52b7f51cafbcfd83dd1e577682ce326831f98b7c954ca968b"}, {"path": "a320/m_ext_2.js", "name": "מטוס מבחוץ – חלק 3", "size": 295255, "sha": "018a3929d83714354e97a5f0cdffe59c9aa746da2b9879bf5a9960e543395ec0"}].concat([{ path: 'a320/probe-big.js', name: 'קוד התלת-ממד', size: 715330, sha: 'b9abfbf8194b3ea4b44977671e7d0f5854a92fae96b8a2a0664f0f2c5413a2e7' }]);
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

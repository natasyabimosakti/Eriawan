// ==UserScript==
// @name         ORI 2 ERI1
// @namespace    http://tampermonkey.net/
// @version      3.02
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/natasyabimosakti/Eriawan/main/ori/eri2/eri1.js
// @downloadURL  https://raw.githubusercontent.com/natasyabimosakti/Eriawan/main/ori/eri2/eri1.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        window.close
// @grant        GM_xmlhttpRequest
// @connect      api.telegram.org
// @connect      raw.githubusercontent.com
// ==/UserScript==

var namagroup1 = 'MELATI188';
var Comment1 = '*MELATI188 (TOMATOES288) : 52*38 *BETTING ';

var namagroup2 = 'BUKU';
var Comment2 = 'IYATOTO TUNDER18 48*16*34'; 

var namagroup3 = 'TIKTAKTOGEL';
var Comment3 = 'Tiktaktogel / THANKYOU99 / 64 , 44 , 24'; 

var namagroup4 = 'PAPUAT0T0';
var Comment4 =  '#PAPUATOTO=(TANGGO10)=77-81';

var namagroup5 = 'KEITOGEL';
var Comment5 = '#keitogel = (TAHUTOK50) = 48*16*34'; 

var namagroup6 = 'PEDRO';
var Comment6 = '#PEDRO4D (TIRAMISU37*22*71*42)';

var namagroup7 = '453P VIP';
var Comment7 = 'ASEPTOGEL TALKLESS100 14*76*70'; 

var namagroup8 = 'MENARA';
var Comment8 = '#MENARA4D=TASTY89= 22*71';

var namagroup9 = 'TREX';
var Comment9 = '#HATORIBET*TIKTOK2024*52*38*32';

var namagroup10 = 'ANGKA';
var Comment10 = '#JNETOTO(TOPIKU777)*14*76*70'; 

var namagroup11 = 'VESPA7093L';
var Comment11 = 'VESPATOGEL (TONGKOL65) 30*13*87';

var namagroup12 = 'MASTER KUY';
var Comment12 = 'TOGELKUY TERANG93 77*81*33'; 

var namagroup13 = 'PASAR';
var Comment13 = 'DAGELAN4D(TRAIN19) : 22*71*42';

var namagroup14 = 'STREMING';
var Comment14 = 'SAHARA888 ( TENTREM20 ) 30*13*87';

var namagroup15 = 'Hoho';
var Comment15 = 'TALKLESS100 : 83*08*25 #HOHOTOGEL';

var namagroup16 = 'NEMO4D';
var Comment16 = 'NEMO4D (TAS99) : 45*83*08';

var namagroup17 = 'Jawatengah';
var Comment17 = 'Grup C1'; 

var namagroup18 = 'BELUMMMMM';
var Comment18 = 'Grup C1'; 


var SCRIPT_NAME = Comment18
var refresh = 40;
var URLADMIN = "https://raw.githubusercontent.com/natasyabimosakti/ADMIN/main/adminer1.json"
var keyword = ["ROOM","🎱ROOM","𝗥𝗢𝗢𝗠","LOMBA","𝗟𝗢𝗠𝗕𝗔","𝐋𝐎𝐌𝐁𝐀","LIMBA","ROM","R00M","login","𝐑𝐎𝐎𝐌","HONGKONG","SINGAPUR","SINGAPORE","nemo"]
var Backlist =["pemenang lomba","rekap","natidulu","room lomba freebet","prediksi","result","juara lomba","r3k4p","TTM","r3kap","rek4p"]
var isCommenting = false;
var EXPIRATION_MS = 8 * 60 * 1000; // 5 minutes
var now = Date.now();
// ✅ Daftar grup dan nilai default
const groupNames = [
    normalizeToBasicLatin(namagroup1).toLowerCase(), normalizeToBasicLatin(namagroup2).toLowerCase(), normalizeToBasicLatin(namagroup3).toLowerCase(), normalizeToBasicLatin(namagroup4).toLowerCase(), normalizeToBasicLatin(namagroup5).toLowerCase(), normalizeToBasicLatin(namagroup6).toLowerCase(),
    normalizeToBasicLatin(namagroup7).toLowerCase(), normalizeToBasicLatin(namagroup8).toLowerCase(), normalizeToBasicLatin(namagroup9).toLowerCase(), normalizeToBasicLatin(namagroup10).toLowerCase(), normalizeToBasicLatin(namagroup11).toLowerCase(), normalizeToBasicLatin(namagroup12).toLowerCase(),
    normalizeToBasicLatin(namagroup13).toLowerCase(), normalizeToBasicLatin(namagroup14).toLowerCase(), normalizeToBasicLatin(namagroup15).toLowerCase(), normalizeToBasicLatin(namagroup16).toLowerCase(), normalizeToBasicLatin(namagroup17).toLowerCase(), normalizeToBasicLatin(namagroup18).toLowerCase()
];
var commentToPost = '';
var grouptToPost = '';
let myObserver = null;
var forceOffRefresh = false;
var cekTombolUrutkan = true;
let adminList = [];
let adminListReady = false;
let kondisiStop;
const LOCAL_KEY = "cachedAdminList";
const VERSION_KEY = "cachedAdminVersion";
var janganclose = false
let sedangScroll = false;
let scrollUlang = false;
let scrollPerCycle = 5;

function scrollLoop5x() {
    if (document.location.href.includes("group")) {
        if (sedangScroll) return;
        sedangScroll = true;
        let count = 0;
        function scrollNext() {
            if (count >= scrollPerCycle) {
                sedangScroll = false;
                return;
            }
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            count++;
            setTimeout(scrollNext, 2000);
        }
        scrollNext();
    }
}
setInterval(() => {
    if (window.scrollY <5000 && !sedangScroll) {
        scrollLoop5x();
    }
}, 2000);

function isAdmin(name) {
    if (!adminListReady || !name) return false;
    return adminList.some(admin => name.toLowerCase().includes(admin.toLowerCase()));
}

function loadLocalAdmin() {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
        try {
            adminList = JSON.parse(stored);
            adminListReady = true;
            console.log("✅ Admin list loaded from localStorage:", adminList.length, "names");
        } catch (e) {
            console.error("❌ Failed to parse local admin list:", e);
        }
    }
}
var groups = groupNames.map(groupId => ({ groupId, defaultValue: false }));
const datakomenArray = await Promise.all(
    groupNames.map(name => GM.getValue(`group_${name}`))
);
function fetchAdminListFromGitHub() {
    GM_xmlhttpRequest({
        method: "GET",
        url: URLADMIN,
        onload: function(response) {
            try {
                const data = JSON.parse(response.responseText);
                const latestVersion = data.version;
                const admins = data.admins;

                const currentVersion = localStorage.getItem(VERSION_KEY);
                if (currentVersion !== latestVersion) {
                    console.log("⬆️ New admin version found:", latestVersion);
                    localStorage.setItem(LOCAL_KEY, JSON.stringify(admins));
                    localStorage.setItem(VERSION_KEY, latestVersion);
                    adminList = admins;
                    adminListReady = true;
                } else {
                    console.log("⏩ Admin list is up-to-date (version:", currentVersion + ")");
                }
            } catch (e) {
                console.error("❌ Failed to parse remote admin list:", e);
            }
        },
        onerror: function(err) {
            console.error("❌ Failed to load admin list from GitHub:", err);
        }
    });
}
loadLocalAdmin();
fetchAdminListFromGitHub();

function getCommentForGroup() {
    let commentMap = {
        [normalizeToBasicLatin(namagroup1).toLowerCase()]: Comment1,
        [normalizeToBasicLatin(namagroup2).toLowerCase()]: Comment2,
        [normalizeToBasicLatin(namagroup3).toLowerCase()]: Comment3,
        [normalizeToBasicLatin(namagroup4).toLowerCase()]: Comment4,
        [normalizeToBasicLatin(namagroup5).toLowerCase()]: Comment5,
        [normalizeToBasicLatin(namagroup6).toLowerCase()]: Comment6,
        [normalizeToBasicLatin(namagroup7).toLowerCase()]: Comment7,
        [normalizeToBasicLatin(namagroup8).toLowerCase()]: Comment8,
        [normalizeToBasicLatin(namagroup9).toLowerCase()]: Comment9,
        [normalizeToBasicLatin(namagroup10).toLowerCase()]: Comment10,
        [normalizeToBasicLatin(namagroup11).toLowerCase()]: Comment11,
        [normalizeToBasicLatin(namagroup12).toLowerCase()]: Comment12,
        [normalizeToBasicLatin(namagroup13).toLowerCase()]: Comment13,
        [normalizeToBasicLatin(namagroup14).toLowerCase()]: Comment14,
        [normalizeToBasicLatin(namagroup15).toLowerCase()]: Comment15,
        [normalizeToBasicLatin(namagroup16).toLowerCase()]: Comment16,
        [normalizeToBasicLatin(namagroup17).toLowerCase()]: Comment17,
        [normalizeToBasicLatin(namagroup18).toLowerCase()]: Comment18
    };
    var ceknamagroup = document.getElementsByClassName("fixed-container")[0]?.textContent || '';
    var ceknamagroup1 = document.getElementsByClassName('native-text')[5]?.textContent || '';
    var ceknamagroup2 = document.getElementsByClassName('native-text')[6]?.textContent || '';
    var ceknamagroup3 = document.getElementsByClassName('native-text')[7]?.textContent || '';
    var ceknamagroup4 = document.getElementsByClassName('native-text')[8]?.textContent || '';
    const allGroups = [
        normalizeToBasicLatin(ceknamagroup).toLowerCase(),
        normalizeToBasicLatin(ceknamagroup1).toLowerCase(),
        normalizeToBasicLatin(ceknamagroup2).toLowerCase(),
        normalizeToBasicLatin(ceknamagroup3).toLowerCase(),
        normalizeToBasicLatin(ceknamagroup4).toLowerCase()
    ];

    for (let groupName in commentMap) {
        if (allGroups.some(text => text.includes(groupName))) {
            return { groupName, comment: commentMap[groupName] };
        }
    }
    return null;
}

function tungguGroup() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;
                const container = node.querySelector?.('.fixed-container');
                if (container) {
                    const result = getCommentForGroup();
                    if (result) {
                        commentToPost = Random(result.comment)
                        grouptToPost = normalizeToBasicLatin(result.groupName)
                        console.log("✅ Nama grup : " + grouptToPost + " | Comment : " +commentToPost );
                        manageGroups();
                    }
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
tungguGroup()
let countA = 0;
if(document.location.href.includes("group")){
    myObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue; // Bukan elemen
                const text = node.textContent || "";
                if (text.includes("Aktivitas terbaru")) {
                    const tombol = node.querySelectorAll("[role='button']");
                    if (tombol.length >= 2) {
                        cekTombolUrutkan = false;
                        tombol.forEach(btn => {
                            if (countA < 3) {
                                if (btn.textContent.includes("Postingan baru")) {
                                    btn.click();
                                    countA++;
                                }
                            } else {
                                setTimeout(() => {
                                    if (btn.textContent.includes("Aktivitas terbaru")) {
                                        btn.click();
                                        countA = 0;
                                    }
                                }, 100);
                            }
                        });
                    }
                }
            }
        }
    });
    myObserver.observe(document.body, { childList: true, subtree: true });
}

var sudahDiPanggil = false
async function manageGroups() {
    if(grouptToPost.length <= 1){
        return;
    }

    for (const { groupId, defaultValue } of groups) {
        const key = `group_${groupId}`;
        const expireKey = `${key}_expire`;
        const expireAt = await GM.getValue(expireKey, 0);

        if (now > expireAt) {
            await GM.setValue(key, defaultValue);
            await GM.setValue(expireKey, now + EXPIRATION_MS);
        }
    }
    const groupKey = `group_${grouptToPost}`;
    const sudahKomentar = await GM.getValue(groupKey,false);
    if (sudahKomentar) {
        console.log(`❌ Diblok Grup ${grouptToPost} sudah DIKOMENTARI`);
        kondisiStop =true;
        sudahDiPanggil = true
        if (janganclose) return;
        location.href = "about:blank";
        return;

    }else{
        if(sudahDiPanggil)return;
        sudahDiPanggil = true
        botArticle(savedMutations1)
        botKoment(savedMutations2);
    }
}

let sedangKlikTextbox = false;
function CekBacklist(postinganBL) {
    for (const DataBacklist of Backlist) {
        const kata = DataBacklist.toLowerCase()
        if (postinganBL.toLowerCase().includes(kata)) {
            console.log(`❌ Diblok karena mengandung: "${kata}"`);
            return true;
        }
    }
    return false;
}

function CekKeyword(postingan) {
    console.log("🔍 CekKeyword untuk:", postingan);
    for (const DataKeyword of keyword) {
        const kata = DataKeyword.toLowerCase()
        if (postingan.toLowerCase().includes(kata)) {
            console.log(`✅ Keyword ditemukan: "${kata}"`);
            return true;
        }
    }
    return false;
}
var observercontetn;
var observercomment
let savedMutations1 = []
let savedMutations2 = []


async function cekArticle() {
    if (document.location.href.includes("group")) {
        observercontetn = new MutationObserver((mutationsList) => {

            savedMutations1 = mutationsList;
            if(sudahDiPanggil){
                botArticle(mutationsList)
            }

        });

        observercontetn.observe(document.body, { childList: true, subtree: true });
        console.log('cekArticle Aktif')
    }
}

function tungguMentionsContainer() {

    observercomment = new MutationObserver((mutationsList) => {

        savedMutations2 = mutationsList;
        if(sudahDiPanggil){
            botKoment(mutationsList)
        }

    });
    observercomment.observe(document.body, {
        childList: true,
        subtree: true
    });
    console.log('tungguMentionsContainer Aktif')
}


async function botKoment(mutatin) {

    for (const mutation of mutatin) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType !== 1&&!kondisiStop) continue; // Skip jika bukan elemen
            const container = node.querySelector?.('.mentions-shadow-container');
            if (container) {
                console.log("TextBox Untuk komentar Telah Muncul");

                if (isCommenting) return;

                console.log("Cex");
                const textarea = document.querySelector(".multi-line-floating-textbox");
                const sendBtn = document.querySelector(".textbox-submit-button");
                if (textarea && sendBtn) {
                    textarea.focus();
                    textarea.value = commentToPost;
                    sendBtn.disabled = false;
                    const clickEvent = document.createEvent("MouseEvents");
                    clickEvent.initEvent("mousedown", true, true);
                    sendBtn.dispatchEvent(clickEvent);

                    GM.setValue("group_" + grouptToPost, true);
                    GM.setValue("group_"+grouptToPost+"_expire", Date.now() + EXPIRATION_MS);
                    console.log("✅ Komentar DIKIRIM (via dispatch):", commentToPost);
                    showNotification("Komentar Sudah Terkirim : " + commentToPost);
                    isCommenting = true;

                    kondisiStop = true
                    observercomment.disconnect();
                    startAutoTask();
                    break;
                } else {
                    showNotification("❌ Textarea atau tombol kirim tidak ditemukan");
                    isCommenting = false;
                    kondisiStop = false
                }

                return;
            }
        }
    }

}

async function botArticle(mutatin) {
    if(kondisiStop)return;
    for (const mutation of mutatin) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType !== 1) continue;
            // Lewati jika ada role dialog
            if (node.closest?.('[role="dialog"]')) continue;
            const artikelBaruSet = new Set();
            if (node.matches?.('[data-tracking-duration-id]')) {
                artikelBaruSet.add(node);
            }
            const descendants = node.querySelectorAll?.('[data-tracking-duration-id]');
            if (descendants) {
                descendants.forEach(el => artikelBaruSet.add(el));
            }
            artikelBaruSet.forEach((artikel) => {
                const text = artikel.textContent || "";
                if (/(\bBaru saja\b|\b[1-5] menit\b)/.test(text)) {
                    const namafb = artikel.getElementsByTagName("span")[0];
                    const isadminer = artikel.querySelector("[data-focusable]");
                    const ThePost = artikel;
                    const commentbox = artikel.getElementsByClassName('native-text');
                    if (CekBacklist(ThePost.textContent.toLowerCase())) return;
                    if (!CekKeyword(ThePost.textContent.toLowerCase())) return;
                    const author = namafb?.textContent?.toLowerCase() || "";

                    if (isAdmin(author) || isadminer?.textContent?.toLowerCase().includes("admin") || isadminer?.textContent?.toLowerCase().includes("moderator")) {
                        const tombolKirim = Array.from(commentbox).find(el => {
                            const t = el.textContent.toLowerCase();
                            return t.includes("jawab") || t.includes("tulis") || t.includes("komentari") || t.includes("postingan") || t.includes("beri");
                        });
                        console.log(`✅ "Admin Di Temukan`);
                        if (tombolKirim ) {
                            console.log("TextBox komentar ditemukan:", tombolKirim);
                            function klikTextboxJikaSiap() {
                                stopRefresh()
                                tombolKirim.click();
                                const textbox = document.querySelector(".multi-line-floating-textbox");
                                if (textbox) {
                                    myObserver.disconnect();
                                    observercontetn.disconnect();
                                    console.log("✅ TextBox komentar Telah DI Klik & Muncul");
                                    forceOffRefresh = true;
                                    return;
                                }
                                requestAnimationFrame(klikTextboxJikaSiap);
                            }
                            klikTextboxJikaSiap();
                        }
                    }
                }
            });
        }
    }
}
cekArticle()
tungguMentionsContainer()

function stopRefresh() {
    if (myrefresh !== null) {
        clearInterval(myrefresh);
        myrefresh = null;
    }
}

let myrefresh = null;
function mulaiRefresh() {
    if (myrefresh !== null) return; // Hindari duplikat interval

    myrefresh = setInterval(function () {
        var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
        var waktupost = document.getElementsByClassName("native-text");

        if (!document.querySelectorAll("[role='presentation']")[0]) {
            if (document.readyState === "complete") {
                for (var cok = 0; cok < urutkan.length; cok++) {
                    if (urutkan[cok].textContent.includes("URUTKAN")) {
                        cekTombolUrutkan = true;
                        if (forceOffRefresh === true) {
                            clearInterval(myrefresh);
                            myrefresh = null;
                            return;
                        }
                        urutkan[cok].click();
                    }
                }
            }
        }
    }, refresh * 10);
}

function showNotification(message) {
    const notif = document.createElement("div");
    notif.textContent = message;
    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.right = "20px";
    notif.style.padding = "10px 20px";
    notif.style.backgroundColor = "#4caf50";
    notif.style.color = "white";
    notif.style.borderRadius = "5px";
    notif.style.zIndex = 9999;
    notif.style.fontSize = "16px";
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 15000);
}

setTimeout(() => {
    mulaiRefresh()
}, 5000);

function startAutoTask() {
    let myObservere = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue; // Bukan elemen
                if (node.nodeType === 1 && node.textContent.toLowerCase().includes('diposting')||node.textContent.toLowerCase().includes('berhasil')) {
                    if (janganclose) return;
                    location.href = "about:blank";
                }
            }
        }
    });
    myObservere.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => {
        if (janganclose) return;
        location.href = "about:blank";

    }, 10000);
}


var TELEGRAM_TOKEN = '7479985104:AAF-ISIxbf18g_mOasLoubBwBKgkfSFzzAw'; // GANTI
var TELEGRAM_CHAT_ID = '-1002717306025'; // GANTI

let lastMessageSent = ""; // lokal per tab/browser
var sudahkirim = false
function normalizeText(text) {
    return text
        .trim()
        .replace(/\s+/g, ' ') // ubah tab/newline menjadi satu spasi
        .toLowerCase(); // biar lebih toleran
}

function levenshtein(a, b) {
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitusi
                    matrix[i][j - 1] + 1,// tambah
                    matrix[i - 1][j] + 1 // hapus
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Kirim ke Telegram, dengan deteksi spam berbasis kemiripan
async function sendToTelegram(message) {
    if (sudahkirim) return;
    sudahkirim = true
    const fullMessage = `? [${SCRIPT_NAME}]\n${message}`;
    const normalizedMessage = normalizeText(fullMessage);

    const lastSent = await GM.getValue("lastTelegramMessage", "");
    const normalizedLast = normalizeText(lastSent);

    const lastTime = await GM.getValue("lastTelegramTime", 0);
    const now = Date.now();
    const COOLDOWN = 5 * 60 * 1000; // 5 menit

    const distance = levenshtein(normalizedMessage, normalizedLast);
    const similarity = 1 - distance / Math.max(normalizedMessage.length, normalizedLast.length);

    const SIMILARITY_THRESHOLD = 0.95; // 95% mirip ? dianggap sama

    if (similarity >= SIMILARITY_THRESHOLD && (now - lastTime < COOLDOWN)) {
        console.log("?? Duplikat dicegah (mirip & <5 menit):", similarity);
        return;
    }

    GM_xmlhttpRequest({
        method: "GET",
        url: `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(fullMessage)}`,
        onload: function (res) {

            console.log("? Telegram terkirim:", res.responseText);
            GM.setValue("lastTelegramMessage", fullMessage);
            GM.setValue("lastTelegramTime", now);
            GM.setValue("lastTelegramSame", now);
        },
        onerror: function (err) {
            console.error("? Gagal kirim ke Telegram:", err);
        }
    });
}

async function cekLogout() {
    try {

        setTimeout(() => {
            if (document.getElementsByTagName("div").length < 10) {
                sendToTelegram("?? Facebook BLANK.");
            }
        }, 2000)
    } catch (e) {
        console.warn("? Error saat cek logout:", e);
    }
}
async function cekMasalah() {
    try {
        if (sudahkirim) return;
        const now = Date.now();
        const COOLDOWNPostingan = 60 * 60 * 1000; // 5 menit
        const lastTimepost = await GM.getValue("lastTelegramSame", 0);

        if ((now - lastTimepost < COOLDOWNPostingan)) {
            console.log("?? sudah dikirim sse jam yang lalu");
            return;
        }else{
            GM.setValue("lastTelegramSame", 0);
        }

        const elem = document.querySelectorAll("[data-screen-key-action-ids]")[1];
        if (!elem) return;

        const dialog = elem.getElementsByClassName("dialog-vscroller")[0];
        if (!dialog) return;

        const isi = dialog.textContent.toLowerCase();
        if (isi.includes("masalah")) {
            const cleanText = dialog.textContent.trim();
            janganclose = true;
            MsgError(SCRIPT_NAME)
            await sendToTelegram(`? Ada "masalah":\n\n${cleanText}`);

        }
    } catch (e) {
        console.warn("? Error saat cek masalah:", e);
    }
}
function MsgError(message) {
    const notif = document.createElement("div");
    notif.textContent = message;
    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.left = "20px";
    notif.style.padding = "10px 20px";
    notif.style.backgroundColor = "black";
    notif.style.color = "white";
    notif.style.borderRadius = "5px";
    notif.style.zIndex = 9999;
    notif.style.fontSize = "16px";
    document.body.appendChild(notif);
    ;
}

const observers = new MutationObserver(() => {
    cekMasalah();
    cekLogout()
});

observers.observe(document.body, { childList: true, subtree: true });

function normalizeToBasicLatin(str) {
    return str.replace(/[\u{1D400}-\u{1D7FF}]/gu, (ch) => {
        const boldA = 0x1D400;
        const normalA = 0x41; // ASCII A
        let code = ch.codePointAt(0);
        if (code >= boldA && code <= boldA + 25) {
            return String.fromCharCode(normalA + (code - boldA));
        }
        return ch;
    });
}

function Random(comment) {
    const numberRegex = /\d{2}/g;
    const rawNumbers = [...comment.matchAll(numberRegex)];

    // Saring hanya angka yang tidak melekat dengan huruf di kiri atau kanan
    const validNumbers = rawNumbers.filter(match => {
        const i = match.index;
        const before = comment[i - 1] || '';
        const after = comment[i + 2] || '';
        return !(/[a-z0-9]/i.test(before)) && !(/[a-z]/i.test(after));
    });

    if (validNumbers.length < 2) return comment;

    const lastCount = Math.min(3, validNumbers.length);
    const lastNums = validNumbers.slice(-lastCount);
    const separators = [];
    for (let i = 0; i < lastCount - 1; i++) {
        separators.push(comment.slice(lastNums[i].index + 2, lastNums[i + 1].index));
    }

    const angka = lastNums.map(x => x[0]);

    function shuffleArray(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    const rotated = lastCount === 2
        ? [angka[1], angka[0]]
        : shuffleArray(angka);

    const start = comment.slice(0, lastNums[0].index);
    const end = comment.slice(lastNums[lastCount - 1].index + 2);

    let result = start;
    for (let i = 0; i < lastCount; i++) {
        result += rotated[i];
        if (i < lastCount - 1) result += separators[i];
    }
    result += end;

    return result;
}

// ==UserScript==
// @name         ORI 2 SHANTI4
// @namespace    http://tampermonkey.net/
// @version      1.96
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/natasyabimosakti/Eriawan/main/ori/shanti2/shanti4.js
// @downloadURL  https://raw.githubusercontent.com/natasyabimosakti/Eriawan/main/ori/shanti2/shanti4.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        window.close
// ==/UserScript==

var namagroup1 = 'VESPA7093L';
var Comment1 = 'VESPATOGEL (SHINY111) 36*32*39';

var namagroup2 = 'K86';
var Comment2 = 'K86TOTO ( SUNRISE33 ) : 41*67*14';

var namagroup3 = 'KIKOTOTO';
var Comment3 = '#KIKOTOTO (SUMMER84) = 62*09';

var namagroup4 = 'MAYAPADA';
var Comment4 = 'BETT*Mayapada4D(BO)*SOS999*51*48*16';

var namagroup5 = 'TAFSIR';
var Comment5 = 'SIJITOGEL SOSWEET87 70*92*38';

var namagroup6 = 'KASTOTO';
var Comment6 = '#KASTOTO(SEALION99) = 83*12*80 #AGENTOGELTERPERCAYA';

var namagroup7 = 'RIATOTO';
var Comment7 = '#RIATOTO SQUASH387 = 54*33*13';

var namagroup8 = 'VIP';
var Comment8 = 'Tok99Toto ( SOMERSET34 ) : 54*33*13';

var namagroup9 = 'TARUNG';
var Comment9 = '#TARUNGTOTO (SEALION99)=69_07';

var namagroup10 = 'ANGKER';
var Comment10 = 'ANGKER4D=SOMERSET34=83*12*80';

var namagroup11 = 'DIVA4D';
var Comment11 = '#DIVA4D (SEMBILAN8) = 69*07*81';

var namagroup12 = 'OPUNG';
var Comment12 = 'OPUNG4D ( SAPPHIR3 ) : 70*92*11';

var namagroup13 = 'GOHT0G3L';
var Comment13 = 'GOHTOGEL=SODA168=51*48*16';

var namagroup14 = '(WARTO)';
var Comment14 = '#(WARUNGTOTO) = (SOS999) 62*09*56';

var namagroup15 = 'NONGKRONG';
var Comment15 = '#AMAVI5D ( SHINY111 ) : 41*67*14';

var namagroup16 = 'UJI';
var Comment16 = 'CITA4D*SOURSALLY77*11*38*39';

var namagroup17 = 'LING';
var Comment17 = 'LING77 (SHINY111) 36*32';

var namagroup18 = 'KOSONG';
var Comment18 = 'KOSONG';


var d = new Date();
var hour = d.getHours();
var tm = await GM.getValue("time");
var id1 = await GM.getValue(1);
var id2 = await GM.getValue(2);
var id3 = await GM.getValue(3);
var id4 = await GM.getValue(4);
var id5 = await GM.getValue(5);
var id6 = await GM.getValue(6);
var id7 = await GM.getValue(7);
var id8 = await GM.getValue(8);
var id9 = await GM.getValue(9);
var id10 = await GM.getValue(10);
var id11 = await GM.getValue(11);
var id12 = await GM.getValue(12);
var id13 = await GM.getValue(13);
var id14 = await GM.getValue(14);
var id15 = await GM.getValue(15);
var id16 = await GM.getValue(16);
var id17 = await GM.getValue(17);
var id18 = await GM.getValue(18);

var refresh = 40;

var admin = ["angeline","ardiyanti","astrina","andinincy","asyati","alika","ayesha","azahra",
             "adelya","ayunda","aurel","ardiansyah","angga","aldo","angelica","angka","aurora","arabelle","anggel",
             "boboho","bogard","boss","bungaps","bawah","botack",
             "catherine","cristina","claura","cindy","chinostia","chandra","cincai",
             "damara","done","dani","dina","dewa","dewi","desi","deva","denis","depan","dika","debby",
             "evelyn","erwin","elisa","eryna","echa",
             "fira","felicia","fillea",
             "gebby","gita","gacor",
             "hilda","haruka","hokii","hoki","hartono","hefi",
             "irine","ishaura","ichaa","indah","iman","ikan","inem","inisial",
             "javeline","jovanka","junior","jasmine","jati",
             "kimberly","kasino","kembar","kumbara","keluarga",
             "laura","lidya","leon","lomba","lopez","lehman",
             "mad","mas har","michelle","marimarshell","monicha","manu","mayangsari","marcia","megan","mirana","monica",
             "new9eneration","nurlena","nasharu",
             "ozawa","otong","oscar","ouschan",
             "pencari","putri","pricilia","putra","putu",
             "queen",
             "riatoto","ruang","rani","rohmanu","rinx","rambo","rio","ratuliu",
             "sasa","sintia","syaqeena","susannah","sundawa","sanz","suzanawati","satria","setiawan",
             "shell","sutanti","salsabila","saya","simaremare","sanchez","sydney","sandiego","safitri",
             "toto","thonex",
             "vero",
             "wulan","wei","wawan",
             "xabiru",
             "yoky"];

var keyword1 = "ROOM"
var keyword2 = "𝗥𝗢𝗢𝗠"
var keyword3 = "LOMBA"
var keyword4 = "▇"
var keyword5 = "𝐋𝐎𝐌𝐁𝐀"
var keyword6 = "Lomba"
var keyword7 = "ROM"
var keyword8 = "R00M"
var keyword9 = "R0M"
var keyword10 = "𝐑𝐎𝐎𝐌"
var keyword11 = "Ro0M"
var keyword12 = "L0MB4"
var keyword13 = "Room"
var keyword14 = "ℝ𝕆𝕆𝕄"


var Backlist1 = "pemenang lomba";
var Backlist2 = "rekap";
var Backlist3 = "hasil";
var Backlist4 = "room lomba freebet";
var Backlist5 = "prediksi";
var Backlist6 = "result";
var Backlist7 = "totomacau";


var jitter = 0
var Cutter = 0
var myrefresh = setInterval(function(){
    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }
    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") == true||hour == undefined||hour == null){
        for (var kr = 1; kr < 19; kr++) {
            GM.setValue( kr,0);
        }
        GM.setValue("time", hour);
    }
    if(document.location.href.includes("group")){
    window.scroll(0,200)
    }
    if(Cutter == 1){
        location.href = "about:blank"
    }
    if(jitter == 1){
        return;
    }

    for (let ntv = 0; ntv < document.querySelectorAll('[data-tracking-duration-id').length; ntv++) {
        if(jitter == 1){
        return;
        }
        if(Cutter == 1){
            location.href = "about:blank"
        }
        if (document.querySelectorAll('[data-tracking-duration-id')[ntv]){
            // Nama FB
            var namafb = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByTagName("span")[0];
        //Jam
        var jamposting1 = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByTagName("span")[1].textContent;
        var jamposting2 = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByTagName("span")[2].textContent;
        //Postingan
        var postingan =document.querySelectorAll('[data-tracking-duration-id')[ntv]
        //Comment Box
        var commentbox = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')
        // Cek Jam

        if (jamposting1.includes("Baru")||jamposting1.slice(0,7).includes("1 men")||jamposting1.slice(0,7).includes("2 men")||jamposting1.slice(0,7).includes("3 men")||jamposting1.slice(0,7).includes("4 men")||jamposting1.slice(0,7).includes("5 men")||jamposting2.includes("Baru")||jamposting2.slice(0,7).includes("1 men")||jamposting2.slice(0,7).includes("2 men")||jamposting2.slice(0,7).includes("3 men")||jamposting2.slice(0,7).includes("4 men")||jamposting2.slice(0,7).includes("5 men")){
            console.log("Jam Ditemukan " + jamposting1)
                if(postingan.textContent.toLowerCase().includes(Backlist1.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(Backlist2.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(Backlist3.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(Backlist4.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(Backlist5.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(Backlist6.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(Backlist7.toLowerCase())){
                    console.log("Terdaftar Backlist...!  ");
                   break;
                }
                console.log("Proses dilanjutkan tidak ada Backlist");
                if(postingan.textContent.toLowerCase().includes(keyword1.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword2.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword3.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword4.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword5.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword6.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword7.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword8.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword9.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword10.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword11.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword12.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword13.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword14.toLowerCase())){
                    console.log("Keyword Ditemukan " + postingan.textContent);
                    // Cek Backlist

                    // Cek Admin
                    for (var adm in admin){
                        if(jitter == 1){
                            return;
                        }
                        if(namafb.textContent.toLowerCase().includes(admin[adm].toLowerCase())||jamposting2.toLowerCase().includes("admin")||jamposting2.toLowerCase().includes("moderator")){
                            // Tampilkan Siapa Yang Memposting
                            if(jamposting2.toLowerCase().includes("admin")||jamposting2.toLowerCase().includes("moderator")){
                                console.log("Admin yang Memosting = Admin/Moderator");
                            }else{
                                console.log("Admin yang Memosting = " + admin[adm]);
                            }

                            // Click Comment Box
                            for (var clk = 0; clk < commentbox.length; clk++) {
                                if(commentbox[clk]){
                                    if(commentbox[clk].textContent.toLowerCase().includes("jawab")|| commentbox[clk].textContent.toLowerCase().includes("tulis")){

                                        clearInterval(myrefresh);
                                        console.log("Click Posting box")
                                        jitter = 0
                                        commentbox[clk].click()
                                        game.start()
                                        break;
                                        return;
                                    }
                                }
                            }
                            return;
                        }
                    }
                }
            }
        }
    }


    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var waktupost = document.getElementsByClassName("native-text");
    if(!document.querySelectorAll("[role='presentation']")[0]){
        if (document.readyState === "complete") {
            for (var cok = 0; cok < urutkan.length; cok++) {
                if(urutkan[cok].textContent.includes("URUTKAN")) {
                    urutkan[cok].click()
                }
            }
        }
    }
    if(document.getElementsByClassName("loading-overlay").length == 0 ){

        if(document.querySelectorAll("[role='presentation']")[0]){
            if (document.readyState === "complete") {
                for (var coki = 0; coki < waktupost.length; coki++) {
                    if(waktupost[coki].textContent.includes("Aktivitas")) {
                        if(jitter == 1){
                            return;
                        }
                        if(document.getElementsByClassName("prevent-scrolling")[0]){
                            waktupost[coki].click()
                        }

                    }
                }
            }
        }
    }


}, refresh * 10)


function gameClosure() {
    function game() {
        console.log('The game is Start')
        if(jitter == 1){
            return;
        }
        if(Cutter == 1){
            location.href = "about:blank"
        }
        console.log('The game is running')
        /* This is just an example, replace this with the body of gameInit() */
        if(document.getElementsByClassName("multi-line-floating-textbox").length > 0 ){
            var ceknamagroup
            var ceknamagroup1
            var ceknamagroup2
            var ceknamagroup3
            var ceknamagroup4
            'use strict';
            if( document.getElementsByClassName("fixed-container")[0]){
                ceknamagroup = document.getElementsByClassName("fixed-container")[0].textContent;
            }
            if( document.getElementsByClassName('native-text')[5]){
                ceknamagroup1 = document.getElementsByClassName('native-text')[5].textContent;
            }
            if( document.getElementsByClassName('native-text')[6]){
                ceknamagroup2 = document.getElementsByClassName('native-text')[6].textContent;
            }
            if( document.getElementsByClassName('native-text')[7]){
                ceknamagroup3 = document.getElementsByClassName('native-text')[7].textContent;
            }
            if( document.getElementsByClassName('native-text')[8]){
                ceknamagroup4 = document.getElementsByClassName('native-text')[8].textContent;
            }

            if (document.getElementsByClassName("multi-line-floating-textbox")[0]){
                if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true||ceknamagroup3.includes(namagroup1) == true||ceknamagroup4.includes(namagroup1) == true) {
                  if (id1 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                  /*cek nama group dan tulis commntar*/
                    GM.setValue( 1,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true||ceknamagroup2.includes(namagroup2) == true||ceknamagroup3.includes(namagroup2) == true||ceknamagroup4.includes(namagroup2) == true) {
                     if (id2 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 2,1);
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true||ceknamagroup3.includes(namagroup3) == true||ceknamagroup4.includes(namagroup3) == true) {
                    if (id3 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 3,1);
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;

                }
                if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true||ceknamagroup2.includes(namagroup4) == true||ceknamagroup3.includes(namagroup4) == true||ceknamagroup4.includes(namagroup4) == true) {
                    if (id4 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 4,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true||ceknamagroup2.includes(namagroup5) == true||ceknamagroup3.includes(namagroup5) == true||ceknamagroup4.includes(namagroup5) == true) {
                    if (id5 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 5,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true||ceknamagroup2.includes(namagroup6) == true||ceknamagroup3.includes(namagroup6) == true||ceknamagroup4.includes(namagroup6) == true) {
                    if (id6 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 6,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true||ceknamagroup2.includes(namagroup7) == true||ceknamagroup3.includes(namagroup7) == true||ceknamagroup4.includes(namagroup7) == true) {
                    if (id7 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 7,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true||ceknamagroup2.includes(namagroup8) == true||ceknamagroup3.includes(namagroup8) == true||ceknamagroup4.includes(namagroup8) == true) {
                    if (id8 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 8,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true||ceknamagroup2.includes(namagroup9) == true||ceknamagroup3.includes(namagroup9) == true||ceknamagroup4.includes(namagroup9) == true) {
                    if (id9 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 9,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true||ceknamagroup2.includes(namagroup10) == true||ceknamagroup3.includes(namagroup10) == true||ceknamagroup4.includes(namagroup10) == true) {
                    if (id10 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 10,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1;
                    return;
                }
                if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true||ceknamagroup2.includes(namagroup11) == true||ceknamagroup3.includes(namagroup11) == true||ceknamagroup4.includes(namagroup11) == true) {
                    if (id11 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 11,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1;
                    return;
                }
                if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true||ceknamagroup2.includes(namagroup12) == true||ceknamagroup3.includes(namagroup12) == true||ceknamagroup4.includes(namagroup12) == true) {
                     if (id12 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 12,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true||ceknamagroup2.includes(namagroup13) == true||ceknamagroup3.includes(namagroup13) == true||ceknamagroup4.includes(namagroup13) == true) {
                     if (id13 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 13,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                }
                if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true||ceknamagroup2.includes(namagroup14) == true||ceknamagroup3.includes(namagroup14) == true||ceknamagroup4.includes(namagroup14) == true) {
                    if (id14 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 14,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }

                if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true||ceknamagroup2.includes(namagroup15) == true||ceknamagroup3.includes(namagroup15) == true||ceknamagroup4.includes(namagroup15) == true) {
                    if (id15 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 15,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }

                if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true||ceknamagroup2.includes(namagroup16) == true||ceknamagroup3.includes(namagroup16) == true||ceknamagroup4.includes(namagroup16) == true) {
                    if (id16 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 16,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup17) == true||ceknamagroup1.includes(namagroup17) == true||ceknamagroup2.includes(namagroup17) == true||ceknamagroup3.includes(namagroup17) == true||ceknamagroup4.includes(namagroup17) == true) {
                    if (id17 == "1") {
                       jitter = 1
                       Cutter = 1
                       location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 17,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment17;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup18) == true||ceknamagroup1.includes(namagroup18) == true||ceknamagroup2.includes(namagroup18) == true||ceknamagroup3.includes(namagroup18) == true||ceknamagroup4.includes(namagroup18) == true) {
                    if (id18 == "1") {
                       jitter = 1
                       Cutter = 1
                        location.href = "about:blank"
                     }
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 18,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment18;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
            }
        }
    }
    var currentGame;
    return {
        start() {
            currentGame = setInterval(game, 20)
        },
        stop() {
            clearInterval(currentGame)
        }
    }
}
var game = gameClosure()

function clicksend() {
    if(jitter == 1){
        return;
    }
    if(Cutter == 1){
        location.href = "about:blank"
    }
    game.stop()
    jitter = 1

    /*Tampilkan TOMBOL SEND*/
    if(document.getElementsByClassName("textbox-submit-button")[0] && document.getElementsByClassName("multi-line-floating-textbox")[0].value.length >= 1){
        Cutter =1
        document.getElementsByClassName("textbox multi-line-floating-textbox")[0].dispatchEvent(
            new Event("input", { bubbles: true, cancelable: true })
        );
        document.getElementsByClassName("textbox-submit-button")[0].style.display=""

        /*Tekan TOMBOL SEND*/
        var clicksendcoment = document.getElementsByClassName("textbox-submit-button")[0];
        clicksendcoment.disabled = false;
        var clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent ("mousedown", true, true);
        clicksendcoment.dispatchEvent (clickEvent);
        console.log("Comment Terkirim");



        setTimeout(function(){location.href = "about:blank"},500)
        setTimeout(function(){location.href = "about:blank"},1000)





        /*Tekan TOMBOL SEND*/
    }
}

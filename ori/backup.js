var refresh = 50;

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

var admin = ["angeline","ardiyanti","astrina","andinincy","asyati","alika","ayesha","alicia",
             "adelya","ayunda","aurel","ardiansyah","angga","aldo","angelica","angka",
             "boboho","bogard","boss","bungaps","bawah",
             "catherine","cristina","claura","cindy","chinostia","chandra",
             "damara","done","dani","dina","dewa","dewi","desi","deva","denis","depan","dika",
             "evelyn","erwin","elisa","eryna","echa",
             "fira","felicia","fillea",
             "gebby","gita",
             "hilda","haruka","hokii","hoki","hartono","hefi",
             "irine","ishaura","ichaa","indah","iman","ikan","inem",
             "javeline","junior","jasmine",
             "kimberly","kasino","kembar","kumbara",
             "laura","lidya","leon","lomba",
             "mad","mas har","michelle","marimarshell","monicha","manu","mayangsari","marcia","megan","mirana",
             "new9eneration","nurlena","nasharu",
             "ozawa","otong","oscar","ouschan",
             "pencari","putri","pricilia","putra","putu",
             "queen",
             "riatoto","ruang","rani","rohmanu","rinx","rambo","rio",
             "sasa","sintia","syaqeena","susannah","sundawa","sanz","suzanawati","satria","setiawan",
             "shell","sutanti","salsabila","saya","simaremare","sanchez","sydney","sandiego",
             "toto","thonex",
             "vero",
             "wulan","wei",
             "xabiru",
             "yoky"];

var keyword1 = "ROOM"
var keyword2 = "𝗥𝗢𝗢𝗠"
var keyword3 = "LOMBA"
var keyword4 = "𝗟𝗢𝗠𝗕𝗔"
var keyword5 = "𝐋𝐎𝐌𝐁𝐀"
var keyword6 = "Lomba"
var keyword7 = "ROM"
var keyword8 = "R00M"
var keyword9 = "R0M"
var keyword10 = "𝐑𝐎𝐎𝐌"
var keyword11 = "Ro0M"
var keyword12 = "LOMBA"
var keyword13 = "Room"
var keyword14 = "ℝ𝕆𝕆𝕄"

var Backlist1 = "pemenang lomba";
var Backlist2 = "rekap";
var Backlist3 = "hasil";
var Backlist4 = "room lomba freebet";
var Backlist5 = "prediksi";
var Backlist6 = "result";
var Backlist7 = "commen";

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
    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var waktupost = document.getElementsByClassName("native-text");
    window.scrollTo(0, 2000);
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
                        waktupost[coki].click()

                    }
                }
            }
        }
    }

}, refresh * 10)


setTimeout
var myInterval = setInterval(function(){




    for (let ntv = 0; ntv < document.querySelectorAll('[data-tracking-duration-id').length; ntv++) {
        if (document.querySelectorAll('[data-tracking-duration-id')[ntv]){
            // Nama FB
            var namafb = document.querySelectorAll('[data-tracking-duration-id]')[ntv].getElementsByClassName('native-text')[0];
            //Jam
            var jamposting = document.querySelectorAll('[data-tracking-duration-id]')[ntv].getElementsByClassName('native-text')[1];
            //Postingan
            var postingan =document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')[3];
            //Comment Box
            var datacommentbox = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text').length -3
            var commentbox = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')

            // Cek Jam
            var ret = jamposting.textContent.replace(/  Admin   |  Moderator   /g, "");
            if (ret.includes("Baru")||ret.slice(0,7).includes("1 menit")||ret.slice(0,7).includes("2 menit")||ret.slice(0,7).includes("3 menit")||ret.slice(0,7).includes("4 menit")||ret.slice(0,7).includes("4 menit")){
                console.log("Jam Ditemukan " + ret)
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
                    if(postingan.textContent.toLowerCase().includes(Backlist1.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist2.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist3.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist4.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist5.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist6.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist7.toLowerCase())){
                        console.log("Terdaftar Backlist...!  ");
                        return;
                    }
                    console.log("Proses dilanjutkan tidak ada Backlist");
                    // Cek Admin
                    for (var adm in admin){
                        if(namafb.textContent.toLowerCase().includes(admin[adm].toLowerCase())||jamposting.textContent.toLowerCase().includes("admin")||jamposting.textContent.toLowerCase().includes("moderator")){
                            // Tampilkan Siapa Yang Memposting
                            if(jamposting.textContent.toLowerCase().includes("admin")||jamposting.textContent.toLowerCase().includes("moderator")){
                                console.log("Admin yang Memosting = Admin/Moderator");
                            }else{
                                console.log("Admin yang Memosting = " + admin[adm]);
                            }
                            // Click Comment Box
                            for (var clk = datacommentbox; clk < datacommentbox+11; clk++) {
                                if(commentbox[clk]){
                                    if(commentbox[clk].textContent.toLowerCase().includes("jawab")|| commentbox[clk].textContent.toLowerCase().includes("tulis")){
                                        commentbox[clk].click()

                                    }

                                }
                            }
                            var ceknamagroup
                            'use strict';
                            ceknamagroup = document.getElementsByClassName("fixed-container top")[0]
                            if(ceknamagroup){

                                if (ceknamagroup.textContent.includes(namagroup1) ) {
                                    if (id1 == "" || id1 == undefined || id1 == null ||id1 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 1,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup2) ) {
                                    if (id2 == "" || id2 == undefined || id2 == null ||id2 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 2,1);
                                        /*cek nama group dan tulis commntar*/
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }
                                if (ceknamagroup.textContent.includes(namagroup3) ) {
                                    if (id3 == "" || id3 == undefined || id3 == null ||id3 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 3,1);
                                        /*cek nama group dan tulis commntar*/
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup4) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id4 == "" || id4 == undefined || id4 == null ||id4 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 4,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup5) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id5 == "" || id5 == undefined || id5 == null ||id5 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 5,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup6) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id6 == "" || id6 == undefined || id6 == null ||id6 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 6,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup7) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id7 == "" || id7 == undefined || id7 == null ||id7 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 7,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup8) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id8 == "" || id8 == undefined || id8 == null ||id8 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 8,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup9) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id9 == "" || id9 == undefined || id9 == null ||id9 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 9,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup10) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id10 == "" || id10 == undefined || id10 == null ||id10 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 10,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup11) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id11 == "" || id11 == undefined || id11 == null ||id11 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 11,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }


                                if (ceknamagroup.textContent.includes(namagroup12) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id12 == "" || id12 == undefined || id12 == null ||id12 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 12,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup13) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id13 == "" || id13 == undefined || id13 == null ||id13 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 13,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup14) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id14 == "" || id14 == undefined || id14 == null ||id14 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 14,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup15) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id15 == "" || id15 == undefined || id15 == null ||id15 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 15,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup16) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id16 == "" || id16 == undefined || id16 == null ||id16 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 16,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup17) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id17 == "" || id17 == undefined || id17 == null ||id17 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 17,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment17;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

                                    }
                                }

                                if (ceknamagroup.textContent.includes(namagroup18) ) {
                                    /*cek nama group dan tulis commntar*/
                                    if (id18 == "" || id18 == undefined || id18 == null ||id18 == "0") {
                                        /*cek nama group dan tulis commntar*/
                                        GM.setValue( 18,1);
                                        document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment18;

                                        clearInterval(myInterval);
                                        clearInterval(myrefresh);
                                        console.log("Sudah Comment")
                                        clicksend();
                                        return;
                                    } else {
                                        location.href = "about:blank"

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

}, 10)





function clicksend() {
    /*Tampilkan TOMBOL SEND*/
    if(document.getElementsByClassName("textbox-submit-button")[0]){
        document.getElementsByClassName("textbox-submit-button")[0].style.display=""

        /*Tekan TOMBOL SEND*/
        var clicksendcoment = document.getElementsByClassName("textbox-submit-button")[0];
        clicksendcoment.disabled = false;
        var clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent ("mousedown", true, true);
        clicksendcoment.dispatchEvent (clickEvent);
        console.log("Comment Terkirim");
        closer()
        /*Tekan TOMBOL SEND*/
    }
}

function closer() {
    setTimeout(function(){location.href = "about:blank"},5)


}
var lasturlku
var jar = setInterval(function(){

    if(location.href.includes("group")){
        lasturlku = location.href;
       
    }
    if(location.href.length <= 40 ){
        location.href = lasturlku
    }

},1000)

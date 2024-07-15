// ==UserScript==
// @name         Polos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @updateURL   https://raw.githubusercontent.com/natasyabimosakti/Eriawan/main/ori/eri2/eri1.js
// @downloadURL https://raw.githubusercontent.com/natasyabimosakti/Eriawan/main/ori/eri2/eri1.js
// @author       You
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==


var namagroup1 = 'SHIOKELINCI';
var Comment1 = '#shiokelinci4d*TOMATOES288*22*71'; 

var namagroup2 = 'BUKU';
var Comment2 = 'IYATOTO TUNDER18 48*16*34'; 

var namagroup3 = 'TIKTAKTOGEL';
var Comment3 = '#Tiktaktogel / THANKYOU99 / 64 , 44 , 24'; 

var namagroup4 = 'GAIB';
var Comment4 = 'GAIB4D=TANGGO10=77*81*33'; 

var namagroup5 = 'KEITOGEL';
var Comment5 = '#keitogel = (TAHUTOK50) = 48*16*34'; 

var namagroup6 = 'KIOST0T0';
var Comment6 = 'KIOSTOTO=TIRAMISU37=14*76*70';

var namagroup7 = '453P';
var Comment7 = 'ASEPTOGEL TALKLESS100 14*76*70'; 

var namagroup8 = 'ANGKER';
var Comment8 = 'ANGKER4D=TASTY89=52*38*32'; 

var namagroup9 = 'GILA';
var Comment9 = 'GILA4D=TIKTOK2024=52*38*32'; 

var namagroup10 = 'JNE';
var Comment10 = '#JNETOTO(TOPIKU777)*64*44*24'; 

var namagroup11 = 'T_O_T_O_A_K_U_R_A_T';
var Comment11 = '#TA*TUNA123*52*38*32*'; 

var namagroup12 = 'MASTER KUY';
var Comment12 = 'TOGELKUY TERANG93 77*81*33'; 

var namagroup13 = 'TOYIBSLOT';
var Comment13 = '#TOYIBSLOT ( TRUST898 ) : 30*13*87'; 

var namagroup14 = 'DENTOTO';
var Comment14 = '#DENTOTO 30*13*87 ( TORNADO13 )'; 

var namagroup15 = 'HATRICK';
var Comment15 = 'VESPATOGEL (TONGKOL65)  83*08*25'; 

var namagroup16 = '';
var Comment17 = ''; 

var namagroup17 = '';
var Comment17 = ''; 

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











var refresh = 40;



var admin = ["angeline","ayesha","andy","aurel","anya","artha","ajosultan87","aldi","adelia","abditogel","aditia","andri","ananda","adm","ayesha","audi","alde","aldo","amoy","anissa","alexs","bella","boboho","bastian","bobby","base","bonar","brian","bala","celsia","chika","chandra","cinta","calvin","celine","conny","dea","dika","dollar","dewa","dewi","dinda","dinanti","denis","diana","dave","desi","dina","echa","erika","elly","erwin","febrian","fiana","farah","farid","gretha","garda","ghifa","hefi","habib","hana","hartono","hanna","intanbarbar","icha","inisial","indra","intan","jengat","john","jhone","jihan","jengat","je pe","jesika","jovanka","jess","kiky","kayla","kemonmusuh","kayla","kakakemon","katty","kumala","key","kendri","kumbara","kembar","karina","kautsar","kapten","lina","lianda","larissa","leksa","larashati","lehman","lidya","lusiana","leon","laura","maes","maha","mad","manu","miranda","mesa","manu","mahendra","multi","mariana","minions","melati","mimi","megan","mayor","mong","megaways","mardia","nathaya","nadya","naura","neng","neman","nayra","nayla","nadila","nella","nasution","novi","oun","oscar","otong","priyan","primus","plat","prediksi","petir","rizal","resti","rano","rm","ratu","riko","ruto","richatun","ria","roy","rendy","robby","sintia","sanchez","san","sejitu","sanjaya","siska","safar","sakura","sintia","shela","slooter","supriati","suhaidatul","slooter","sabrina","syaqeena","sloter","sandiego","sabrina","salsabila","sutanti","sinta","tink","tag","tiara","tania","thonex","wndt","wiena","jhone","herfizah","vonny","wahid","ujen","wahzo","wak","wijaya","fahresa","viona","virna","puput","yoky","yohana","yasmine","zurro","wok","hoihai","hefi","jenifer","kotna"];


var keyword1 = "ROOM"
var keyword2 = "𝗥𝗢𝗢𝗠"
var keyword3 = "LOMBA"
var keyword4 = "𝗟𝗢𝗠𝗕𝗔"
var keyword5 = "𝐋𝐎𝐌𝐁𝐀"
var keyword6 = "LIMBA"
var keyword7 = "ROM"
var keyword8 = "R00M"
var keyword9 = "R0M"
var keyword10 = "𝐑𝐎𝐎𝐌"

var Backlist1 = "pemenang lomba";
var Backlist2 = "rekap";
var Backlist3 = "hasil";
var Backlist4 = "room lomba freebet";
var Backlist5 = "prediksi";
var Backlist6 = "result";
var Backlist7 = "result";

var myrefresh = setInterval(function(){
    var ceknamagroup
    'use strict';
    if( document.querySelectorAll("[data-mcomponent='ServerTextArea']")[4]){
        ceknamagroup = document.querySelectorAll("[data-mcomponent='ServerTextArea']")[4].textContent;
    }
    console.log(" ");

    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }


    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") == true||hour == undefined||hour == null){
        for (var kr = 1; kr < 18; kr++) {
            GM.setValue( kr,0);
        }
        GM.setValue("time", hour);

    }
    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var urutkan2 = document.querySelectorAll("[data-mcomponent='TextArea']");
    var waktupost = document.getElementsByClassName("native-text");
    window.scrollTo(0, 2000);
    if (document.readyState === "complete") {
        for (var coke = 0; coke < urutkan2.length; coke++) {
            if (urutkan2[coke].textContent.includes("URUTKAN")) {

                urutkan2[coke].click()


            }
        }

    }
    if (document.readyState === "complete") {
        for (var cok = 0; cok < urutkan.length; cok++) {
            if(urutkan[cok].textContent.includes("URUTKAN")) {
                urutkan[cok].click()

            }
        }

    }


    if (document.readyState === "complete") {
        for (var coki = 0; coki < waktupost.length; coki++) {
            if(waktupost[coki].textContent.includes("Aktivitas")) {
                waktupost[coki].click()

            }
        }

    }
}, refresh * 10)

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
            var datacommentbox = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text').length -1
            var clickboot = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')[0]
            var commentbox = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')[datacommentbox];

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
                   ||postingan.textContent.toLowerCase().includes(keyword10.toLowerCase())){
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
                            for (let atv = 0; atv < document.querySelectorAll('[data-tracking-duration-id]')[ntv].querySelectorAll("[role='button']").length; atv++) {
                                if (document.querySelectorAll('[data-tracking-duration-id]')[ntv].querySelectorAll("[role='button']")[atv].textContent.includes("󰍹")){
                                    console.log("ada")
                                    document.querySelectorAll('[data-tracking-duration-id]')[ntv].querySelectorAll("[role='button']")[atv].click()
                                    clearInterval(myInterval);
                                    clearInterval(myrefresh);








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


var commentanku = setInterval(function(){

    try {

        var ceknamagroup
        'use strict';

        ceknamagroup = [document.querySelectorAll("[data-mcomponent='ServerTextArea']")[3],document.querySelectorAll("[data-mcomponent='ServerTextArea']")[4] ,document.querySelectorAll("[data-mcomponent='ServerTextArea']")[5],document.querySelectorAll("[data-mcomponent='ServerTextArea']")[6] ]

        for (var namag in ceknamagroup){
            if(!ceknamagroup[namag].textContent == "" && ceknamagroup[namag] ){

                if (ceknamagroup[namag].textContent.includes(namagroup1) ) {

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 1,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment1;

                        console.log("Sudah Comment")
                        clicksend();

                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup2) ) {

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 2,1);
                        /*cek nama group dan tulis commntar*/
                        document.getElementsByClassName("internal-input")[0].value = Comment2;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }
                if (ceknamagroup[namag].textContent.includes(namagroup3) ) {

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 3,1);
                        /*cek nama group dan tulis commntar*/
                        document.getElementsByClassName("internal-input")[0].value = Comment3;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup4) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 4,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment4;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup5) ) {
                    /*cek nama group dan tulis commntar*/
                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 5,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment5;

                        console.log("Sudah Comment")
                        clicksend();
                        return;
                    }
                }

                if (ceknamagroup[namag].textContent.includes(namagroup6) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 6,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment6;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup7) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 7,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment7;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup8) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 8,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment8;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup9) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 9,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment9;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup10) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 10,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment10;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup11) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 11,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment11;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }


                if (ceknamagroup[namag].textContent.includes(namagroup12) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 12,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment12;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup13) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 13,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment13;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup14) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 14,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment14;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup15) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 15,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment15;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }

                if (ceknamagroup[namag].textContent.includes(namagroup16) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 16,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment16;

                        console.log("Sudah Comment")
                        clicksend();
                    }

                }
                if (ceknamagroup[namag].textContent.includes(namagroup17) ) {
                    /*cek nama group dan tulis commntar*/

                    if( document.getElementsByClassName("internal-input")[0] ){
                        /*cek nama group dan tulis commntar*/
                        GM.setValue( 17,1);
                        document.getElementsByClassName("internal-input")[0].value = Comment17;

                        console.log("Sudah Comment")
                        clicksend();
                    }
                }

            }
        }
    }catch(err) {
        console.log("erorr " + err)
    }

},240)

function clicksend() {
    /*Tampilkan TOMBOL SEND*/
    /*Tekan TOMBOL SEND*/
    if( document.getElementsByClassName("internal-input")[0].value.length > 1){
        document.querySelectorAll("[aria-label='Posting komentar']")[0].click()
        console.log("Comment Terkirim");
         clearInterval(commentanku);

        closer()
    }
    /*Tekan TOMBOL SEND*/

}


function closer() {
    setTimeout(function(){location.href = "about:blank"},5)


}

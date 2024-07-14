// ==UserScript==
// @name         Polos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==

//var restart = res();




var namagroup1 = 'RITOGEL';
var Comment1 = '#RITOGEL(HUHUK202)00*99*37';

var namagroup2 = 'K86';
var Comment2 = 'K86TOTO ( HUJAN749 ) : 50*38*94'; 

var namagroup3 = 'RNR303';
var Comment3 = '‌#RNR303(HIYAS680) : 93*70*95'; 

var namagroup4 = 'SEJ1TU';
var Comment4 = '#SEJITU (HIYAS680) : 88*20*68'; 

var namagroup5 = 'OTU';
var Comment5 = '#OTUSLOT*HIWER313*08*56*24*BETTING'; 

var namagroup6 = 'DIVA4D';
var Comment6 = '#DIVA4D (HOMBRENG898) = 91*54*05'; 

var namagroup7 = 'Hoho';
var Comment7 = 'HUSUR009 : 49*11*92 #HOHOTOGEL'; 

var namagroup8 = 'TOK99T0T0';
var Comment8 = 'Tok99Toto ( HAIBER757 ) : 83*04*44'; 

var namagroup9 = 'BLITAR4D';
var Comment9 = '#BLITAR4D ( HOMBRENG898 ) : 83*04*44';

var namagroup10 = 'SLOTOGEL';
var Comment10 = '#SLOTOGEL (HIWER313) : 49*11*92'; 

var namagroup11 = 'KEBAYA4D';
var Comment11 = '(KEBAYA4D) = (HAUNG555) 85*93*70'; 

var namagroup12 = 'BESTOTO88';
var Comment12 = 'HOTANG444 : 08*56*24 #BESTOTO88'; 

var namagroup13 = 'GOHT0G3L';
var Comment13 = 'GOHTOGEL=HEHEHE000=88*20*68'; 


var namagroup14 = 'WARUNGTOTO';
var Comment14 = '#(WARUNGTOTO) = (HINA738) 91*54*05'; 


var namagroup15 = 'XX1';
var Comment15 = '#XX1TOTO (HOPENG596) 50*38*94 BETTING'; 

var namagroup16 = 'UJI';
var Comment16 = 'CITA4D*HANTUPA909*00*99*85';

var namagroup17 = 'MANGSA';
var Comment17 = '#MANGSATOTO (HARIINI009) 37*95';

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

(function() {
    if (tm == "" || tm == undefined || tm == null) {
        GM.setValue("time", hour);
    }


    if ( hour > tm + 2 || hour < tm||document.URL.includes("google") == true){
        for (var kr = 1; kr < 18; kr++) {
            GM.setValue( kr,0);
        }
        GM.setValue("time", hour);

    }

    var ia = document.getElementById('m_group_stories_container');
    if (ia) {
        var g = ia.getElementsByTagName("article")[0];
        var postingan = g.getElementsByTagName('span')[2].textContent;
        var postingan1 = postingan.toLowerCase();
        if (postingan1) {

            return;
        }
    }
    if(document.querySelector("[value='Komentari']")){
        'use strict';
        const myHeaders = new Headers();
        myHeaders.append("dpr", "1");
        myHeaders.append("viewport-width", "400");
        myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"");
        myHeaders.append("sec-ch-ua-mobile", "?1");
        myHeaders.append("sec-ch-ua-platform", "\"Android\"");
        myHeaders.append("sec-ch-ua-platform-version", "\"6.0\"");
        myHeaders.append("sec-ch-ua-model", "\"Nexus 5\"");
        myHeaders.append("sec-ch-ua-full-version-list", "\"Not/A)Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"126.0.6478.127\", \"Google Chrome\";v=\"126.0.6478.127\"");
        myHeaders.append("sec-ch-prefers-color-scheme", "dark");
        myHeaders.append("Upgrade-Insecure-Requests", "1");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36");
        myHeaders.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
        myHeaders.append("Sec-Fetch-Site", "same-origin");
        myHeaders.append("Sec-Fetch-Mode", "navigate");
        myHeaders.append("Sec-Fetch-User", "?1");
        myHeaders.append("Sec-Fetch-Dest", "document");
        myHeaders.append("host", "mbasic.facebook.com");

        const urlencoded = new URLSearchParams();

        if(document.title.toLocaleUpperCase().includes(namagroup1.toLocaleUpperCase())){
            if (id1 == "" || id1 == undefined || id1 == null ||id1 == "0") {
                GM.setValue( 1,1);
                urlencoded.append("comment_text", Comment1);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup2.toLocaleUpperCase())){
            if (id2 == "" || id2 == undefined || id2 == null ||id2 == "0") {
                GM.setValue( 2,1);
                urlencoded.append("comment_text", Comment2);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup3.toLocaleUpperCase())){
            if (id3 == "" || id3 == undefined || id3 == null ||id3 == "0") {
                GM.setValue( 3,1);
                urlencoded.append("comment_text", Comment3);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup4.toLocaleUpperCase())){
            if (id4 == "" || id4 == undefined || id4 == null ||id4 == "0") {
                GM.setValue( 4,1);
                urlencoded.append("comment_text", Comment4);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup5.toLocaleUpperCase())){
            if (id5 == "" || id5 == undefined || id5 == null ||id5 == "0") {
                GM.setValue( 5,1);
                urlencoded.append("comment_text", Comment5);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup6.toLocaleUpperCase())){
            if (id6 == "" || id6 == undefined || id6 == null ||id6 == "0") {
                GM.setValue( 6,1);
                urlencoded.append("comment_text", Comment6);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup7.toLocaleUpperCase())){
            if (id7 == "" || id7 == undefined || id7 == null ||id7 == "0") {
                GM.setValue( 7,1);
                urlencoded.append("comment_text", Comment7);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup8.toLocaleUpperCase())){
            if (id8 == "" || id8 == undefined || id8 == null ||id8 == "0") {
                GM.setValue( 8,1);
                urlencoded.append("comment_text", Comment8);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup9.toLocaleUpperCase())){
            if (id9 == "" || id9 == undefined || id9 == null ||id9 == "0") {
                GM.setValue( 9,1);
                urlencoded.append("comment_text", Comment9);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup10.toLocaleUpperCase())){
            if (id10 == "" || id10 == undefined || id10 == null ||id10 == "0") {
                GM.setValue( 10,1);
                urlencoded.append("comment_text", Comment10);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup11.toLocaleUpperCase())){
            if (id11 == "" || id11 == undefined || id11 == null ||id11 == "0") {
                GM.setValue(11,1);
                urlencoded.append("comment_text", Comment11);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup12.toLocaleUpperCase())){
            if (id12 == "" || id12 == undefined || id12 == null ||id12 == "0") {
                GM.setValue(12,1);
                urlencoded.append("comment_text", Comment12);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup13.toLocaleUpperCase())){
            if (id13 == "" || id13 == undefined || id13 == null ||id13 == "0") {
                GM.setValue(13,1);
                urlencoded.append("comment_text", Comment13);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }


        if(document.title.toLocaleUpperCase().includes(namagroup14.toLocaleUpperCase())){
            if (id14 == "" || id14 == undefined || id14 == null ||id14 == "0") {
                GM.setValue(14,1);
                urlencoded.append("comment_text", Comment14);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup15.toLocaleUpperCase())){
            if (id15 == "" || id15 == undefined || id15 == null ||id15 == "0") {
                urlencoded.append("comment_text", Comment15);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup16.toLocaleUpperCase())){
            if (id16 == "" || id16 == undefined || id16 == null ||id16 == "0") {
                GM.setValue(16,1);
                urlencoded.append("comment_text", Comment16);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));
            }
        }



        if(document.title.toLocaleUpperCase().includes(namagroup17.toLocaleUpperCase())){
            if (id17 == "" || id17 == undefined || id17 == null ||id17 == "0") {
                GM.setValue(17,1);
                urlencoded.append("comment_text", Comment17);
                urlencoded.append("fb_dtsg", document.querySelector("[name='fb_dtsg']").value);
                urlencoded.append("jazoest", document.querySelector("[name='jazoest']").value);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: "follow"
                };

                fetch(document.querySelector("[method='post']").action, requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));

            }
        }


    }
    // Your code here...
})();

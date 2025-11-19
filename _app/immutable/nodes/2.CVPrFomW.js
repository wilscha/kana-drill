import{f as H,a as T,t as ga,c as Oa}from"../chunks/CQMoTmql.js";import{d as ba,h as L,g as oe,c as Aa,q as se,b as he,z as y,B as le,t as ue,v as de,w as La,s as qa,e as da,C as ge,aw as ce,ah as Ha,f as ea,j as Sa,k as me,aE as za,au as Fa,aF as fe,aG as Ka,aH as Ba,aA as ye,a7 as Ja,aI as pe,r as Ya,p as ke,aJ as Ia,aa as Va,aK as xe,a as ve,aL as je,aM as we,at as be,i as qe,aN as Ie,aO as Te,aP as _e,aQ as Me,aR as We,aS as Ua,o as Qa,a8 as Xa,aC as Ae,aT as Se,a0 as ya,a3 as c,a4 as u,a5 as q,a1 as Q,a2 as pa,aD as sa,D as ca,Q as Za,aB as Ta,ay as Pe,aU as Ce,ai as Z,F as aa}from"../chunks/CQEMnsmq.js";import{d as $a,s as O}from"../chunks/DjNwhTY4.js";import{p as U,i as X}from"../chunks/B4zuRiOz.js";import{h as Ee}from"../chunks/jorfiXDx.js";function ma(a,e){return e}function Ne(a,e,n){for(var r=[],t=e.length,i=0;i<t;i++)je(e[i].e,r,!0);we(r,()=>{var o=r.length===0&&n!==null;if(o){var g=n,s=g.parentNode;be(s),s.append(g),a.items.clear(),K(a,e[0].prev,e[t-1].next)}for(var f=0;f<t;f++){var v=e[f];o||(a.items.delete(v.k),K(a,v.prev,v.next)),qe(v.e,!o)}a.first===e[0]&&(a.first=e[0].prev)})}function fa(a,e,n,r,t,i=null){var o=a,g=new Map,s=null,f=(e&za)!==0,v=(e&Ka)!==0,N=(e&Ba)!==0;if(f){var I=a;o=L?ba(oe(I)):I.appendChild(Aa())}L&&se();var w=null,J=le(()=>{var h=n();return fe(h)?h:h==null?[]:Fa(h)}),S,l=!0;function b(){Le(z,S,o,e,r),w!==null&&(S.length===0?(w.fragment?(o.before(w.fragment),w.fragment=null):Ya(w.effect),B.first=w.effect):ke(w.effect,()=>{w=null}))}var B=he(()=>{S=y(J);var h=S.length;let m=!1;if(L){var p=ue(o)===de;p!==(h===0)&&(o=La(),ba(o),qa(!1),m=!0)}for(var d=new Set,k=ea,x=null,W=me(),_=0;_<h;_+=1){L&&da.nodeType===ge&&da.data===ce&&(o=da,m=!0,qa(!1));var D=S[_],F=r(D,_),j=l?null:g.get(F);j?(v&&Ha(j.v,D),N?Ha(j.i,_):j.i=_,W&&k.skipped_effects.delete(j.e)):(j=He(l?o:null,x,D,F,_,t,e,n),l&&(j.o=!0,x===null?s=j:x.next=j,x=j),g.set(F,j)),d.add(F)}if(h===0&&i&&!w)if(l)w={fragment:null,effect:Sa(()=>i(o))};else{var A=document.createDocumentFragment(),P=Aa();A.append(P),w={fragment:A,effect:Sa(()=>i(P))}}if(L&&h>0&&ba(La()),!l)if(W){for(const[R,G]of g)d.has(R)||k.skipped_effects.add(G.e);k.oncommit(b),k.ondiscard(()=>{})}else b();m&&qa(!0),y(J)}),z={effect:B,items:g,first:s};l=!1,L&&(o=da)}function Le(a,e,n,r,t){var i=(r&xe)!==0,o=e.length,g=a.items,s=a.first,f,v=null,N,I=[],w=[],J,S,l,b;if(i)for(b=0;b<o;b+=1)J=e[b],S=t(J,b),l=g.get(S),l.a?.measure(),(N??=new Set).add(l);for(b=0;b<o;b+=1){if(J=e[b],S=t(J,b),l=g.get(S),a.first??=l,!l.o){l.o=!0;var B=v?v.next:s;K(a,v,l),K(a,l,B),_a(l,B,n),v=l,I=[],w=[],s=v.next;continue}if((l.e.f&Ia)!==0&&(Ya(l.e),i&&(l.a?.unfix(),(N??=new Set).delete(l))),l!==s){if(f!==void 0&&f.has(l)){if(I.length<w.length){var z=w[0],h;v=z.prev;var m=I[0],p=I[I.length-1];for(h=0;h<I.length;h+=1)_a(I[h],z,n);for(h=0;h<w.length;h+=1)f.delete(w[h]);K(a,m.prev,p.next),K(a,v,m),K(a,p,z),s=z,v=p,b-=1,I=[],w=[]}else f.delete(l),_a(l,s,n),K(a,l.prev,l.next),K(a,l,v===null?a.first:v.next),K(a,v,l),v=l;continue}for(I=[],w=[];s!==null&&s.k!==S;)(s.e.f&Ia)===0&&(f??=new Set).add(s),w.push(s),s=s.next;if(s===null)continue;l=s}I.push(l),v=l,s=l.next}if(s!==null||f!==void 0){for(var d=f===void 0?[]:Fa(f);s!==null;)(s.e.f&Ia)===0&&d.push(s),s=s.next;var k=d.length;if(k>0){var x=(r&za)!==0&&o===0?n:null;if(i){for(b=0;b<k;b+=1)d[b].a?.measure();for(b=0;b<k;b+=1)d[b].a?.fix()}Ne(a,d,x)}}i&&Va(()=>{if(N!==void 0)for(l of N)l.a?.apply()})}function He(a,e,n,r,t,i,o,g){var s=(o&Ka)!==0,f=(o&pe)===0,v=s?f?ye(n,!1,!1):Ja(n):n,N=(o&Ba)===0?t:Ja(t),I={i:N,v,k:r,a:null,e:null,o:!1,prev:e,next:null};try{if(a===null){var w=document.createDocumentFragment();w.append(a=Aa())}return I.e=Sa(()=>i(a,v,N,g)),e!==null&&(e.next=I),I}finally{}}function _a(a,e,n){for(var r=a.next?a.next.e.nodes_start:n,t=e?e.e.nodes_start:n,i=a.e.nodes_start;i!==null&&i!==r;){var o=ve(i);t.before(i),i=o}}function K(a,e,n){e===null?(a.first=n,a.effect.first=n&&n.e):(e.e.next&&(e.e.next.prev=null),e.next=n,e.e.next=n&&n.e),n===null?a.effect.last=e&&e.e:(n.e.prev&&(n.e.prev.next=null),n.prev=e,n.e.prev=e&&e.e)}const Da=[...` 	
\r\f \v\uFEFF`];function Je(a,e,n){var r=a==null?"":""+a;if(n){for(var t in n)if(n[t])r=r?r+" "+t:t;else if(r.length)for(var i=t.length,o=0;(o=r.indexOf(t,o))>=0;){var g=o+i;(o===0||Da.includes(r[o-1]))&&(g===r.length||Da.includes(r[g]))?r=(o===0?"":r.substring(0,o))+r.substring(g+1):o=g}}return r===""?null:r}function De(a,e){return a==null?null:String(a)}function na(a,e,n,r,t,i){var o=a.__className;if(L||o!==n||o===void 0){var g=Je(n,r,i);(!L||g!==a.getAttribute("class"))&&(g==null?a.removeAttribute("class"):a.className=g),a.__className=n}else if(i&&t!==i)for(var s in i){var f=!!i[s];(t==null||f!==!!t[s])&&a.classList.toggle(s,f)}return i}function Re(a,e,n,r){var t=a.__style;if(L||t!==e){var i=De(e);(!L||i!==a.getAttribute("style"))&&(i==null?a.removeAttribute("style"):a.style.cssText=i),a.__style=e}return r}const Ge=Symbol("is custom element"),Oe=Symbol("is html");function ae(a){if(L){var e=!1,n=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var r=a.value;ha(a,"value",null),a.value=r}if(a.hasAttribute("checked")){var t=a.checked;ha(a,"checked",null),a.checked=t}}};a.__on_r=n,Va(n),Ie()}}function ha(a,e,n,r){var t=ze(a);L&&(t[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||t[e]!==(t[e]=n)&&(e==="loading"&&(a[Te]=n),n==null?a.removeAttribute(e):typeof n!="string"&&Fe(a).includes(e)?a[e]=n:a.setAttribute(e,n))}function ze(a){return a.__attributes??={[Ge]:a.nodeName.includes("-"),[Oe]:a.namespaceURI===_e}}var Ra=new Map;function Fe(a){var e=a.getAttribute("is")||a.nodeName,n=Ra.get(e);if(n)return n;Ra.set(e,n=[]);for(var r,t=a,i=Element.prototype;i!==t;){r=We(t);for(var o in r)r[o].set&&n.push(o);t=Me(t)}return n}function Ke(a,e,n=e){var r=new WeakSet;Ua(a,"input",async t=>{var i=t?a.defaultValue:a.value;if(i=Ma(a)?Wa(i):i,n(i),ea!==null&&r.add(ea),await Ae(),i!==(i=e())){var o=a.selectionStart,g=a.selectionEnd,s=a.value.length;if(a.value=i??"",g!==null){var f=a.value.length;o===g&&g===s&&f>s?(a.selectionStart=f,a.selectionEnd=f):(a.selectionStart=o,a.selectionEnd=Math.min(g,f))}}}),(L&&a.defaultValue!==a.value||Qa(e)==null&&a.value)&&(n(Ma(a)?Wa(a.value):a.value),ea!==null&&r.add(ea)),Xa(()=>{var t=e();if(a===document.activeElement){var i=Se??ea;if(r.has(i))return}Ma(a)&&t===Wa(a.value)||a.type==="date"&&!t&&!a.value||t!==a.value&&(a.value=t??"")})}function Be(a,e,n=e){Ua(a,"change",r=>{var t=r?a.defaultChecked:a.checked;n(t)}),(L&&a.defaultChecked!==a.checked||Qa(e)==null)&&n(a.checked),Xa(()=>{var r=e();a.checked=!!r})}function Ma(a){var e=a.type;return e==="number"||e==="range"}function Wa(a){return a===""?null:+a}var Ye=H('<div class="symbol svelte-qjhq1u"></div>'),Ve=H('<div><span class="custom-checkmark svelte-qjhq1u"><!></span> <input type="checkbox" class="svelte-qjhq1u"/></div>');function oa(a,e){ya(e,!0);let n=U(e,"checked",15,!1),r=U(e,"disabled",3,!1);var t=Ve();let i;var o=c(t),g=c(o);{var s=v=>{var N=Ye();T(v,N)};X(g,v=>{n()&&v(s)})}u(o);var f=q(o,2);ae(f),u(t),Q(()=>{i=na(t,1,"custom-checkbox svelte-qjhq1u",null,i,{checked:n()}),f.disabled=r()}),Be(f,n),T(a,t),pa()}var Ue=H('<input class="custom-slider svelte-svxfze" type="range"/>');function Qe(a,e){ya(e,!0);let n=U(e,"value",15,1),r=U(e,"min",3,1),t=U(e,"max",3,100),i=U(e,"step",3,1),o=U(e,"disabled",3,!1),g=sa(()=>Math.floor((n()-r())/(t()-r())*100));var s=Ue();ae(s),Q(()=>{Re(s,`--fill-percentage: ${y(g)??""}%`),ha(s,"min",r()),ha(s,"max",t()),ha(s,"step",i()),s.disabled=o()}),Ke(s,n),T(a,s),pa()}var Xe=H('<td class="svelte-ae4swr"><button class="svelte-ae4swr"> </button></td>'),Ze=H('<button><span class="character"> </span> <span class="romaji-reading svelte-ae4swr"> </span></button>'),$e=H('<td class="svelte-ae4swr"><!></td>'),an=H('<tr class="svelte-ae4swr"><td class="svelte-ae4swr"><button class="svelte-ae4swr"><!></button></td><!></tr>'),en=H('<div class="gojuuon-table svelte-ae4swr"><table class="svelte-ae4swr"><thead><tr><td class="svelte-ae4swr"><button class="svelte-ae4swr">All</button></td><!></tr></thead><tbody class="svelte-ae4swr"></tbody></table></div>');function nn(a,e){ya(e,!0);const n={a:"あ",i:"い",u:"う",e:"え",o:"お",ka:"か",ki:"き",ku:"く",ke:"け",ko:"こ",sa:"さ",shi:"し",su:"す",se:"せ",so:"そ",ta:"た",chi:"ち",tsu:"つ",te:"て",to:"と",na:"な",ni:"に",nu:"ぬ",ne:"ね",no:"の",ha:"は",hi:"ひ",fu:"ふ",he:"へ",ho:"ほ",ma:"ま",mi:"み",mu:"む",me:"め",mo:"も",ya:"や",yu:"ゆ",yo:"よ",ra:"ら",ri:"り",ru:"る",re:"れ",ro:"ろ",wa:"わ",wo:"を",n:"ん"},r={a:"ア",i:"イ",u:"ウ",e:"エ",o:"オ",ka:"カ",ki:"キ",ku:"ク",ke:"ケ",ko:"コ",sa:"サ",shi:"シ",su:"ス",se:"セ",so:"ソ",ta:"タ",chi:"チ",tsu:"ツ",te:"テ",to:"ト",na:"ナ",ni:"ニ",nu:"ヌ",ne:"ネ",no:"ノ",ha:"ハ",hi:"ヒ",fu:"フ",he:"ヘ",ho:"ホ",ma:"マ",mi:"ミ",mu:"ム",me:"メ",mo:"モ",ya:"ヤ",yu:"ユ",yo:"ヨ",ra:"ラ",ri:"リ",ru:"ル",re:"レ",ro:"ロ",wa:"ワ",wo:"ヲ",n:"ン"},t={a:"a",i:"i",u:"u",e:"e",o:"o",ka:"ka",ki:"ki",ku:"ku",ke:"ke",ko:"ko",sa:"sa",shi:"shi",su:"su",se:"se",so:"so",ta:"ta",chi:"chi",tsu:"tsu",te:"te",to:"to",na:"na",ni:"ni",nu:"nu",ne:"ne",no:"no",ha:"ha",hi:"hi",fu:"fu",he:"he",ho:"ho",ma:"ma",mi:"mi",mu:"mu",me:"me",mo:"mo",ya:"ya",yu:"yu",yo:"yo",ra:"ra",ri:"ri",ru:"ru",re:"re",ro:"ro",wa:"wa",wo:"wo",n:"n"},i=[["a","i","u","e","o"],["ka","ki","ku","ke","ko"],["sa","shi","su","se","so"],["ta","chi","tsu","te","to"],["na","ni","nu","ne","no"],["ha","hi","fu","he","ho"],["ma","mi","mu","me","mo"],["ya","","yu","","yo"],["ra","ri","ru","re","ro"],["wa","","","","wo"],["n","","","",""]],o=["a","i","u","e","o"];let g=U(e,"selectedGojuuon",31,()=>ca(new Set)),s=U(e,"showKatakana",3,!1);function f(m){g().isDisjointFrom(m)?g(g().union(m)):g(g().difference(m))}function v(){f(new Set(i.flat().filter(m=>m!=="")))}function N(m){f(new Set(i.flat().filter(p=>p!==""&&p.includes(m))))}function I(m){f(new Set(m))}var w=en(),J=c(w),S=c(J),l=c(S),b=c(l),B=c(b);B.__click=v,u(b);var z=q(b);fa(z,17,()=>o,ma,(m,p)=>{var d=Xe(),k=c(d);k.__click=()=>N(y(p));var x=c(k);u(k),u(d),Q(()=>O(x,`-${y(p)??""}`)),T(m,d)}),u(l),u(S);var h=q(S);fa(h,21,()=>i,ma,(m,p)=>{var d=an(),k=c(d),x=c(k);x.__click=()=>I(y(p).filter(j=>j!==""));var W=c(x);{var _=j=>{var A=ga("∅");T(j,A)},D=j=>{var A=Oa(),P=Za(A);{var R=C=>{var E=ga("*");T(C,E)},G=C=>{var E=ga();Q(Y=>O(E,`${Y??""}-`),[()=>y(p)[0].charAt(0)]),T(C,E)};X(P,C=>{y(p)[0]==="n"?C(R):C(G,!1)},!0)}T(j,A)};X(W,j=>{y(p)[0]==="a"?j(_):j(D,!1)})}u(x),u(k);var F=q(k);fa(F,17,()=>y(p),ma,(j,A)=>{var P=$e(),R=c(P);{var G=C=>{var E=Ze();E.__click=()=>f(new Set([y(A)]));let Y;var V=c(E),la=c(V,!0);u(V);var ra=q(V,2),ua=c(ra,!0);u(ra),u(E),Q(ka=>{Y=na(E,1,"gojuuon svelte-ae4swr",null,Y,ka),O(la,(s()?r:n)[y(A)]),O(ua,t[y(A)])},[()=>({selected:g().has(y(A))})]),T(C,E)};X(R,C=>{y(A)!==""&&C(G)})}u(P),T(j,P)}),u(d),T(m,d)}),u(h),u(J),u(w),T(a,w),pa()}$a(["click"]);const rn=[{id:1,hiragana:"～えき",kanji:"～駅",examples:`... station
めぐろ駅から あるいて ３ぷんぐらいです。It's about 3 minutes walk from Meguro station.`,frequency:1},{id:2,hiragana:"～えん",kanji:"～円",examples:`... yen
これは 10,000円です。This is 10,000 yen.`,frequency:3},{id:3,hiragana:"～かい",examples:`... floor
わたしの へやは 2かいです。My room is on the second floor.`,frequency:2},{id:4,hiragana:"～かい",examples:`... times
このえいがを 2かい みました。I watched this movie twice.`,frequency:1},{id:5,hiragana:"～かかん",kanji:"～日間",examples:`for ... day(s)
いちに、ふつか(かん)、みっかかん・・・  One, two, three days`,frequency:1},{id:6,hiragana:"～かげつ",kanji:"～か月",examples:`(for) ... month(s)
いっか月、にか月、さんか月・・・ One month, two months, three months ...`,frequency:1},{id:7,hiragana:"～かた",examples:`how to ...
つかいかたを おしえてください。Please teach me how to use it.`,frequency:2},{id:8,hiragana:"～がつ",kanji:"～月",examples:`... month
1月、2月、3月・・・  January, February, March ...`,frequency:3},{id:9,hiragana:"～がります",examples:`(third person) wants to ...  [「〜たい」のstem]＋[てform of がります]＋ います
こどもたちは ディズニーランドにいきたがっています。Children want to go to Disneyland.`},{id:10,hiragana:"～がわ",examples:`... side
ひだりがわを あるきます。Walk on the left side.`},{id:11,hiragana:"～キロ",examples:`... kg =
1キロ、2キロ、3キロ・・・  1 kg, 2 kg, 3 kg ...`},{id:12,hiragana:"～キロ",examples:`... km = キロメートル
10キロぐらい はしりました。I ran about 10 km.`},{id:13,hiragana:"～くらい/ぐらい",examples:`about ...
2じかんぐらい べんきょうしました。I studied for about 2 hours.`,frequency:3},{id:14,hiragana:"～グラム",examples:`... gram
1グラム、2グラム、3グラム・・・  1 gram, 2 gram, 3 gram ...`,frequency:1},{id:15,hiragana:"～こ",examples:`counter for small object
いっこ、にこ、さんこ・・・  1, 2, 3 (small objects) ...`},{id:16,hiragana:"～ご",kanji:"～語",examples:`... language
にほん語、えい語、ちゅうごく語・・・ Japanese, English, Chinese ...`},{id:17,hiragana:"～ごろ",examples:`around ... (for time)
2じごろに そちらに いきます。I will go there around 2 o'clock.`,frequency:1},{id:18,hiragana:"～さい",examples:`... year(s) old
いっさい、にさい、さんさい・・・ 1 year old, 2 years old, 3 years old ...`,frequency:18},{id:19,hiragana:"～さつ",examples:`counter for book
いっさつ、にさつ、さんさつ・・・ 1 book, 2 books, 3 books ...`},{id:20,hiragana:"～さん",examples:`Mr., Mrs., Miss
すずきさん、さとうさん・・・  Mr. Suzuki, Ms. Sato`},{id:21,hiragana:"～じ",kanji:"～時",examples:`... o'clock
いま 3時です。It's 3 o'clock now.`,frequency:7},{id:22,hiragana:"～じかん",kanji:"～時間",examples:`... hour(s)
1時間、2時間、3時間・・・1 hour, 2 hours, 3 hours ...`,frequency:1},{id:23,hiragana:"～しゅうかん",kanji:"～週間",examples:`(for) ... week(s)
1週間、2週間、3週間・・・  1 week, 2 weeks, 3 weeks ...`,frequency:1},{id:24,hiragana:"～じん",kanji:"～人",examples:`...an, ...ese
にほん人、アメリカ人、ドイツ人・・・ Japanese, American, German ...`},{id:25,hiragana:"～すぎ",examples:`past, over
2じすぎに とうきょうに つきます。I will arrive in Tokyo after 2 o'clock.`},{id:26,hiragana:"～ずつ",examples:`... each
これと これを ２つずつ ください。Please give me two of this and two of this.`},{id:27,hiragana:"～せんせい",kanji:"～先生",examples:`teacher
すずき先生は どこに いますか。Where is Teacher Suzuki?`,frequency:2},{id:28,hiragana:"～だい",examples:`counter for machine
いちだい、にだい、さんだい・・・ one, two three (machines)`},{id:29,hiragana:"～たち",examples:`...s, ... and others
わたしたち、こどもたち、あのひとたち。We, Children, Those people`},{id:30,hiragana:"～ちゅう",kanji:"～中",examples:`be in middle of ..., (during) in ...
いま かいぎ中です。I'm in a meeting now.`},{id:31,hiragana:"～つ",examples:`counter for object
コーヒーを 3つ ください。Please give me three coffees.`,frequency:3},{id:32,hiragana:"～ど",examples:`... time(s)
もういちど いってください。Please say that again.`,frequency:2},{id:33,hiragana:"～にち",kanji:"～日",examples:`...st, ...nd, ...th
きょうは 12日です。Today is the 12th.`,frequency:4},{id:34,hiragana:"～にん",kanji:"～人",examples:`counter for person
ひとり、ふたり、さん人、よ人、ご人・・・  one, two three, four, five (person)`,frequency:2},{id:35,hiragana:"～ねん",kanji:"～年",examples:`... years
2030年, 2040年, 2050年`,frequency:1},{id:36,hiragana:"～はい/ばい/ぱい",examples:`cups of ...
いっぱい、にはい、さんばい・・・ one, two three (cup of ...)`},{id:37,hiragana:"～はん",kanji:"～半",examples:`half
いま 9じ半です。It's 9:30 now.`,frequency:1},{id:38,hiragana:"～ばん",examples:`No. ...
１ばん、２ばん、３ばん・・・  No.1, No.2, No.3 ...`,frequency:17},{id:39,hiragana:"～ひき/びき/ぴき",examples:`counter for animal
いっぴき、にひき、さんびき・・・ one (animal), two (animals), three (animals)`,frequency:1},{id:40,hiragana:"～ふん/ぷん",kanji:"～分",examples:`... minute(s)
いっぷん、にふん、さんぷん・・・ 1 minute, 2 minutes, 3 minutes`,frequency:1},{id:41,hiragana:"～ページ",examples:`... page
13ページを みてください。Please look at page 13.`,frequency:3},{id:42,hiragana:"～ほん/ぼん/ぽん",kanji:"～本",examples:`counter for long object
かさが 3本 あります。I have three umbrellas.`,frequency:2},{id:43,hiragana:"～まい",examples:`counter for thin object
かみを １まい ください。Please give me a piece of paper.`},{id:44,hiragana:"～まえ",kanji:"～前",examples:`... ago
2ねん前に にほんに きました。I came to Japan two years ago. before ...
レッスンの 前に トイレに いきます。Go to the bathroom before the lesson.`,frequency:2},{id:45,hiragana:"～メートル",examples:`... meter
１メートル、1.5メートル、２メートル  1 meter, 1.5 meters, 2 meters`,frequency:1},{id:46,hiragana:"～や",examples:`... store, ... shop
すしや、さかなや、にくや、ケーキや...  Sushi shop, Fish shop, Butcher shop, Cake shop ...`,frequency:4},{id:47,hiragana:"あいます",kanji:"会います",examples:`see (a person), meet
ともだちに/と 会います。I will see my friend.`,frequency:1},{id:48,hiragana:"あおい",examples:`blue [i-adj.]
あおいボールペン。Blue ballpoint pen`},{id:49,hiragana:"あか",kanji:"赤",examples:`red [noun]
赤で かきます。Write in red.`,frequency:1},{id:50,hiragana:"あかい",kanji:"赤い",examples:`red [i-adj.]
赤いボールペン  Red ballpoint pen`},{id:51,hiragana:"あがります",examples:`go up
エレベーターで 15かいに あがります。Take the elevator to the 15th floor.`,frequency:1},{id:52,hiragana:"あかるい",examples:`bright, light [i-adj.]
このへやは あかるいです。The room is bright.`,frequency:1},{id:53,hiragana:"あき",examples:`autumn, fall
あきが すきです。I like autumn.`},{id:54,hiragana:"あきます",examples:`open
ドアが あきます。The door opens.`},{id:55,hiragana:"あけます",examples:`open
わたしは ドアをあけます。I open the door.`,frequency:1},{id:56,hiragana:"あげます",examples:`give
ははの たんじょうびに プレゼントを あげました。I gave a present on my mother's birthday.`,frequency:1},{id:57,hiragana:"あさ",kanji:"朝",examples:`morning
あしたの 朝は 6じに おきます。 I will get up at 6 o'clock tomorrow morning.`,frequency:4},{id:58,hiragana:"あさごはん",kanji:"朝ごはん",examples:`breakfast
もう 朝ごはんを たべましたか。 Have you eaten breakfast yet?`},{id:59,hiragana:"あさって",examples:`the day after tomorrow
あさっては にほんごの テストです。The day after tomorrow will be a Japanese test.`},{id:60,hiragana:"あし",kanji:"足",examples:`leg, foot
かのじょは足が ながいです。 She has long legs.`},{id:61,hiragana:"あした",examples:`tomorrow
では、また あした。See you tomorrow.`,frequency:6},{id:62,hiragana:"あそこ",examples:`over there
あそこで バスに のります。Get on the bus over there.`,frequency:2},{id:63,hiragana:"あそびます",examples:`play
こどもは よく こうえんで あそびます。Children often play in the park.`,frequency:1},{id:64,hiragana:"あたたかい",examples:`warm [i-adj.]
きょうは きのうより あたたかいです。Today is warmer than yesterday.`},{id:65,hiragana:"あたま",examples:`head
かれは とても あたまが いいです。He is very smart.`},{id:66,hiragana:"あたらしい",kanji:"新しい",examples:`new [i-adj.]
新しい コンピュータを かいました。I bought a new computer.`,frequency:1},{id:67,hiragana:"あちら",examples:`over there 「あそこ」の more polite
いりぐちは あちらです。The entrance is over there.`,frequency:2},{id:68,hiragana:"あつい",examples:`hot [i-adj.]
きょうは あついですね。It's hot today.`},{id:69,hiragana:"あつい",examples:`thick [i-adj.]
このほんは あついです。This book is thick.`},{id:70,hiragana:"あと(で)",kanji:"後(で)",examples:`after
あさごはんの 後で さんぽをします。I will take a walk after breakfast.`,frequency:7},{id:71,hiragana:"あに",examples:`(my) older brother
あには イギリスに います。My brother is in England.`,frequency:1},{id:72,hiragana:"あね",examples:`(my) older sister
あねは フランスに います。My sister is in France.`,frequency:3},{id:73,hiragana:"あの～",examples:`that ...
あのひとは だれですか。Who is that person?`,frequency:2},{id:74,hiragana:"アパート",examples:`apartment
わたしは ふるいアパートにすんでいます。I live in an old apartment.`,frequency:1},{id:75,hiragana:"あびます",examples:`take (a shower)
あさ シャワーを あびます。 Take a shower in the morning.`,frequency:1},{id:76,hiragana:"あぶない",examples:`dangerous [i-adj.]
ここは あぶないですよ。It's dangerous here.`},{id:77,hiragana:"あまい",examples:`sweet [i-adj.]
このケーキは とても あまいです。This cake is very sweet.`},{id:78,hiragana:"あまり",examples:`not much ...
あまり ほんを よみません。I don't read many books.`,frequency:1},{id:79,hiragana:"あめ",kanji:"雨",examples:`rain
ごごは たぶん 雨が ふります。It will probably rain in the afternoon.`,frequency:1},{id:80,hiragana:"アメリカ",examples:`The United States of America
あには アメリカに いきました。My brother went to America.`,frequency:1},{id:81,hiragana:"あらいます",examples:`wash
ここで てを あらいます。 Wash your hands here.`,frequency:2},{id:82,hiragana:"あります",examples:`be [existence]
はこの なかに りんごが ななつ あります。There are seven apples in the box.`,frequency:23},{id:83,hiragana:"あります",examples:`have [possession]
わたしは きょう じかんが あります。I have time today.`},{id:84,hiragana:"あるきます",kanji:"歩きます",examples:`walk
きのうは オフィスから うちまで あるきました。I walked from the office to my house yesterday.`,frequency:1},{id:85,hiragana:"あれ",examples:`that (one)
あれは なんですか。What is that?`,frequency:1},{id:86,hiragana:"いい",examples:`good [i-adj.]
この アプリは とても いいです。This app is very nice.`,frequency:19},{id:87,hiragana:"いいます",kanji:"言います",examples:`say, tell
もういちど 言います。I will say it again.`,frequency:9},{id:88,hiragana:"いえ",kanji:"家",examples:`house
家の なかは あたたかいです。The inside of the house is warm.`,frequency:5},{id:89,hiragana:"いきます",kanji:"行きます",examples:`go
じてんしゃで がっこうに 行きます。I go to school by bicycle.`,frequency:14},{id:90,hiragana:"いくつ",examples:`how many, how old
れいぞうこの なかに たまごが いくつ ありますか。How many eggs are there in the fridge?`},{id:91,hiragana:"いくら",examples:`how much
これは いくらですか。How much is this?`,frequency:1},{id:92,hiragana:"いけ",examples:`pond
いけの なかに きれいな さかなが います。There are beautiful fish in the pond.`,frequency:1},{id:93,hiragana:"いしゃ",examples:`doctor = おいしゃさん。
ちちは いしゃです。My father is a doctor.`,frequency:1},{id:94,hiragana:"いす",examples:`chair
このいすは たかかったです。This chair was expensive.`,frequency:1},{id:95,hiragana:"いそがしい",examples:`busy [i-adj.]
このごろ まいにち いそがしいです。I'm busy these days.`},{id:96,hiragana:"いたい",examples:`be painful [i-adj.]
きょうは すこし あたまが いたいです。I have a slight headache today.`},{id:97,hiragana:"いち",kanji:"一",examples:`one
いち、に、さん、し、ご・・・one, two, three, four, five...`,frequency:1},{id:98,hiragana:"いちど",kanji:"一ど",examples:`once
もう一ど いってください。Say that once more please.`,frequency:1},{id:99,hiragana:"いちにち",kanji:"一日",examples:`one day
きのうは 一日 うちに いました。I was at home all day yesterday.`,frequency:1},{id:100,hiragana:"いちばん",kanji:"一ばん",examples:`the best
一ばん いいものを えらびます。Choose the best one.`,frequency:13},{id:101,hiragana:"いつ",examples:`when
いつ とうきょうに いきますか。When are you going to Tokyo?`,frequency:1},{id:102,hiragana:"いつか",kanji:"五日",examples:`the fifth day of the month, five days
きょうは 五日です。Today is the 5th.`},{id:103,hiragana:"いっしょ(に)",examples:`together
ともだちと いっしょに がっこうに いきます。I will go to school with my friends.`,frequency:5},{id:104,hiragana:"いつつ",kanji:"五つ",examples:`five
りんごは 五つ 400えんです。Five apples cost 400 yen.`,frequency:1},{id:105,hiragana:"いつも",examples:`always
いつも けいたいでんわをもっています。I always have a mobile phone.`,frequency:3},{id:106,hiragana:"いま",kanji:"今",examples:`now
今 なんじですか。What time is it now?`,frequency:6},{id:107,hiragana:"います",examples:`be (existence)
わたしは いま いえに います。I'm at home now. have (family)
わたしは きょうだいが います。I have a sibling.`,frequency:5},{id:108,hiragana:"いみ",examples:`meaning
おなじ いみのぶんは どれですか。Which sentences have the same meaning?`,frequency:2},{id:109,hiragana:"いもうと",examples:`(my) younger sister
いもうとは いま いえに いません。My sister isn't at home right now.`,frequency:3},{id:110,hiragana:"いもうとさん",examples:`(someone's) younger sister
いもうとさんは どこに いますか。Where is your sister?`},{id:111,hiragana:"いや",examples:`hateful, not likable, unpleasant [na-adj.]
いやな しごとも あります。There are also unpleasant jobs.`},{id:112,hiragana:"いりぐち",kanji:"入口",examples:`entrance
入口は どこですか。Where is the entrance?`,frequency:1},{id:113,hiragana:"いります",examples:`be necessary, must have, need
ふくろは  いりません。I do not need a bag.`,frequency:1},{id:114,hiragana:"いれます",kanji:"入れます",examples:`put in
コーヒーに クリームを 入れますか。Would you like to add cream to your coffee?`,frequency:5},{id:115,hiragana:"いろ",examples:`color
どんな いろが すきですか。What kind of color do you like?`},{id:116,hiragana:"いろいろ",examples:`various [na-adj.]
この ビルの なかには いろいろな みせが あります。There are various shops in this building.`,frequency:1},{id:117,hiragana:"うえ",kanji:"上",examples:`on, above, top
めがねは つくえの 上に あります。The glasses are on the desk.`,frequency:5},{id:118,hiragana:"うしろ",kanji:"後ろ",examples:`back, behind
モニターの 後ろに スイッチが あります。There is a switch on the back of the monitor.`,frequency:1},{id:119,hiragana:"うすい",examples:`thin [i-adj.]
このほんは うすいです。This book is thin.`},{id:120,hiragana:"うた",examples:`song
これは いい うたですね。 This is a good song.`},{id:121,hiragana:"うたいます",examples:`sing
カラオケで にほんごの うたを うたいました。I sang a Japanese song at karaoke.`,frequency:1},{id:122,hiragana:"うち",examples:`home
うちは どこですか。Where is your home?`,frequency:3},{id:123,hiragana:"うまれます",kanji:"生まれます",examples:`be born
せんげつ あかちゃんが 生まれました。Last month, a baby was born.`,frequency:1},{id:124,hiragana:"うみ",examples:`sea
やまより うみが すきです。I like the sea better than the mountains.`,frequency:2},{id:125,hiragana:"うります",examples:`sell
Amazonで うっています。It is sold on Amazon.`,frequency:2},{id:126,hiragana:"うるさい",examples:`loud [i-adj.]
ちかてつの なかは うるさいです。It's noisy in the subway.`,frequency:1},{id:127,hiragana:"うれしい",examples:`happy, pleased [i-adj.]
とても うれしいです。I am very happy.`,frequency:1},{id:128,hiragana:"うわぎ",examples:`coat, jacket, outerwear
みせに うわぎを わすれました。I forgot my jacket at the store.`},{id:129,hiragana:"え",examples:`drawing, picture, painting
かのじょは えが じょうずです。She is good at painting.`,frequency:3},{id:130,hiragana:"エアコン",examples:`air conditioner
わたしの うちには エアコンが ５だい あります。There are 5 air conditioners in my house.`,frequency:1},{id:131,hiragana:"えいが",examples:`movie
きのう ともだちと えいがを みました。I watched a movie with my friends yesterday.`,frequency:4},{id:132,hiragana:"えいがかん",examples:`movie theater
あたらしい えいがかんに いきました。I went to a new movie theater.`},{id:133,hiragana:"えいご",examples:`English
えいごで はなしても いいですか。May I speak in English?`},{id:134,hiragana:"えき",kanji:"駅",examples:`station
うちから 駅まで 5ふんぐらいです。It takes about 5 minutes from our house to the station.`,frequency:8},{id:135,hiragana:"えらびます",examples:`choose
いちばん いいものを えらびます。Choose the best one.`,frequency:13},{id:136,hiragana:"エレベーター",examples:`elevator, lift
エレベーターは どこに ありますか。Where is the elevator?`,frequency:1},{id:137,hiragana:"えんぴつ",examples:`pencil
えんぴつで かいても いいですか。Can I write it in pencil?`,frequency:5},{id:138,hiragana:"お～",examples:`[polite prefix]
おくに。おかね。おしごと。おでんわ。Country. Money. Job. Phone.`},{id:139,hiragana:"おいしい",examples:`delicious, good, tasty [i-adj.]
このみせの ラーメンは おいしいです。The ramen in this shop is delicious.`,frequency:2},{id:140,hiragana:"おいでになります",examples:`come, go, be [respect]
あしたは なんじに おいでになりますか。What time will you come tomorrow?`},{id:141,hiragana:"おおい",kanji:"多い",examples:`a lot of [i-adj.]
このホテルは へやが 多いです。This hotel has many rooms.`,frequency:3},{id:142,hiragana:"おおきい",kanji:"大きい",examples:`big [i-adj.]
大きい くるまを かいたいです。I want to buy a big car.`,frequency:3},{id:143,hiragana:"おおきな",kanji:"大きな",examples:`big 大きな[noun] = 大きい[noun]
大きな ショッピングモールにいきました。I went to a big shopping mall.`,frequency:1},{id:144,hiragana:"おおぜい",examples:`many (people), a great number of (people)
えきの まえに ひとが おおぜい います。There are a lot of people in front of the station.`},{id:145,hiragana:"おかあさん",kanji:"お母さん",examples:`(someone's) mother
かれの お母さんは にほんじんです。His mom is Japanese.`,frequency:1},{id:146,hiragana:"おかし",examples:`confectionery, cake, candy, sweets
にほんの おかしが すきです。I like Japanese sweets.`,frequency:1},{id:147,hiragana:"おかね",kanji:"お金",examples:`money
お金は たいせつです。Money is important.`,frequency:2},{id:148,hiragana:"おきます",examples:`put (Group 1 verb)
バッグを テーブルの したに おきます。Place the bag under the table.`,frequency:3},{id:149,hiragana:"おきます",examples:`get up (Group 2 verb)
まいにち 7じに おきます。It wakes up at 7 o'clock every day.`},{id:150,hiragana:"おくさん",examples:`(someone's) wife
かれの おくさんは とても きれいです。His wife is very pretty.`},{id:151,hiragana:"おくに",kanji:"お国",examples:`country = くに。
お国は どちらですか。Where is your country?`,frequency:1},{id:152,hiragana:"おくります",examples:`send
メールで データを おくります。We will send you the data by email.`},{id:153,hiragana:"おさけ",examples:`liquor, (alcoholic) drink, sake
ときどき おさけを のみます。I drink alcohol sometimes.`},{id:154,hiragana:"おさら",examples:`plate = さら。
おおきい おさらを 5まい かいました。I bought 5 large plates.`,frequency:1},{id:155,hiragana:"おじさん",examples:`uncle
おじさんは いつ にほんに きますか。When will your uncle come to Japan?`},{id:156,hiragana:"おじいさん",examples:`grandfather
かれの おじいさんは いま カナダに います。His grandfather is now in Canada.`},{id:157,hiragana:"おしえます",examples:`teach, tell
ともだちに えいごを おしえます。I will teach English to my friends.`},{id:158,hiragana:"おそい",examples:`late [i-adj.]
きょうは おそいですね。You are late today, aren't you?`,frequency:1},{id:159,hiragana:"おそく",examples:`late [noun]
きのうは おそくまで しごとを しました。I worked late yesterday.`,frequency:1},{id:160,hiragana:"おちゃ",examples:`tea
おちゃを のみませんか。Would you like to have a cup of tea?`,frequency:1},{id:161,hiragana:"おてあらい",examples:`lavatory, toilet
おてあらいは どこですか。Where is the restroom?`},{id:162,hiragana:"おとうさん",kanji:"お父さん",examples:`(someone's) father
お父さんは なんさいですか。How old is your father?`,frequency:1},{id:163,hiragana:"おとうと",examples:`(my) younger brother
おとうとは がくせいです。My younger brother is a student.`,frequency:2},{id:164,hiragana:"おとうとさん",examples:`(someone's) younger brother
おとうとさんは なんさいですか。How old is your younger brother?`},{id:165,hiragana:"おとこ",kanji:"男",examples:`male
男のひとが 5にん います。 There are 5 men.`,frequency:7},{id:166,hiragana:"おとこのこ",kanji:"男の子",examples:`boy
男の子が 3にん います。There are 3 boys.`},{id:167,hiragana:"おととい",examples:`the day before yesterday
おととい ともだちに あいました。I met my friend the day before yesterday.`,frequency:2},{id:168,hiragana:"おととし",examples:`the year before last
おととし にほんに きました。I came here two years ago.`,frequency:1},{id:169,hiragana:"おとな",kanji:"大人",examples:`adult
大人は 1,000えん、こどもは 500えんです。Adults are 1,000 yen and children are 500 yen.`},{id:170,hiragana:"おなか",examples:`stomach
おなかが すきました。I'm hungry.`},{id:171,hiragana:"おなじ",examples:`same
おなじ いみの ぶんは どれですか。Which sentences have the same meaning?`,frequency:3},{id:172,hiragana:"おにいさん",examples:`(someone's) older brother
おにいさんは にほんに いますか。Is your brother in Japan?`},{id:173,hiragana:"おにぎり",examples:`rice ball
コンビニで おにぎりを ふたつ かいました。I bought two rice balls at a convenience store.`,frequency:1},{id:174,hiragana:"おねえさん",examples:`(someone's) older sister
おねえさんは なにを していますか。What is your sister doing?`},{id:175,hiragana:"おばさん",examples:`aunt
おばさんは いつ にほんに きますか。When will your aunt come to Japan?`},{id:176,hiragana:"おばあさん",examples:`grandmother
おばあさんは なんさいですか。How old is your grandmother?`},{id:177,hiragana:"おべんとう",examples:`lunch box
おべんとうを つくります。I will make a lunch box.`},{id:178,hiragana:"おぼえます",examples:`memorize
アプリで あたらしい ことばを おぼえます。Learn new words in the app.`},{id:179,hiragana:"おみせ",kanji:"お店",examples:`shop = みせ。
えきの なかの お店で かいました。I bought it at a shop inside the station.`,frequency:2},{id:180,hiragana:"おもい",examples:`heavy [i-adj.]
このノートパソコンはおもいです。This laptop is heavy.`,frequency:2},{id:181,hiragana:"おもしろい",examples:`fun, funny, interesting [i-adj.]
おもしろいえいがをみました。I watched an interesting movie.`,frequency:1},{id:182,hiragana:"およぎます",examples:`swim
まいしゅうまつ 500メートル およぎます。I swim 500 meters every weekend.`,frequency:2},{id:183,hiragana:"おります",examples:`get off
つぎの えきで でんしゃを おります。Get off the train at the next station.`,frequency:2},{id:184,hiragana:"おわります",examples:`end, finish
かいぎは 3じに おわります。The meeting ends at 3 o'clock.`,frequency:3},{id:185,hiragana:"おんがく",examples:`music
おんがくが だいすきです。I love music.`},{id:186,hiragana:"おんな",kanji:"女",examples:`female
わたしのオフィスには女のひとが 6にん います。There are 6 women in my office.`,frequency:12},{id:187,hiragana:"おんなのこ",kanji:"女の子",examples:`girl
女の子が 3にん います。There are 3 girls.`},{id:188,hiragana:"か",kanji:"火",examples:`Tuesday = かようび。
3がつ15にち（火）  March 15th (Tuesday)`,frequency:2},{id:189,hiragana:"がいこく",kanji:"外国",examples:`foreign country
外国に いきたいです。I want to go abroad.`,frequency:1},{id:190,hiragana:"がいこくじん",kanji:"外国人",examples:`foreigner
うちの かいしゃには外国人が おおぜい います。There are many foreigners in my company.`},{id:191,hiragana:"かいしゃ",kanji:"会社",examples:`company
うちから 会社まで 40ぷんぐらいです。It's about 40 from our house to the company.`,frequency:1},{id:192,hiragana:"かいだん",examples:`stairs
かいだんで いきましょう。Let's go up the stairs.`},{id:193,hiragana:"かいとうようし",examples:`answer sheet
これは テストの かいとうようしです。This is the test answer sheet.`,frequency:6},{id:194,hiragana:"かいます",kanji:"買います",examples:`buy
おいしい パンを 買いました。I bought some delicious bread.`,frequency:13},{id:195,hiragana:"かいもの",kanji:"買いもの",examples:`shopping
くるまで 買いものに いきます。I'm going shopping by car.`,frequency:4},{id:196,hiragana:"かえします",examples:`return (object)
としょかんに ほんを かえします。Return the book to the library.`,frequency:3},{id:197,hiragana:"かえります",examples:`return, go back
タクシーで うちに かえります。I'll take a taxi home.`,frequency:3},{id:198,hiragana:"かお",examples:`face
あのひとの かおを おぼえていますか。Do you remember that person's face?`},{id:199,hiragana:"かかります",examples:`take (time, money)
えきまで あるいて 10ぷん かかります。It takes 10 minutes on foot to the station.`},{id:200,hiragana:"かぎ",examples:`key
うちに くるまの かぎを わすれました。I forgot my car key at home.`},{id:201,hiragana:"かきます",kanji:"書きます",examples:`write
えきまでの ちずを 書きましょうか。Shall I write a map to the station?`,frequency:5},{id:202,hiragana:"がくせい",kanji:"学生",examples:`student
いもうとは まだ 学生です。My sister is still a student.`,frequency:9},{id:203,hiragana:"かけます",examples:`wear
めがねを かけます。I wear glasses.`},{id:204,hiragana:"かけます",examples:`call
あとで かいしゃに でんわを かけます。I'll call the company later.`},{id:205,hiragana:"かさ",examples:`umbrella
かさが ありますか。Do you have an umbrella?`,frequency:4},{id:206,hiragana:"かします",examples:`lend
ペンを かしてください。Please lend a pen.`,frequency:1},{id:207,hiragana:"かぜ",examples:`wind
きょうは とても かぜが つよいです。It's very windy today.`,frequency:1},{id:208,hiragana:"かぜ",examples:`cold
かぜを ひきました。I caught a cold.`},{id:209,hiragana:"かぞく",examples:`family
わたしの かぞくも とうきょうに すんでいます。My family also lives in Tokyo.`,frequency:1},{id:210,hiragana:"かた",examples:`person (respect)
かいしゃのかたと はなしました。I talked to a person from the company.`},{id:211,hiragana:"カタカナ",examples:`katakana
カタカナは むずかしくないです。Katakana is not difficult.`},{id:212,hiragana:"がっこう",kanji:"学校",examples:`school
あるいて 学校に いきます。I will walk to school.`,frequency:4},{id:213,hiragana:"かど",examples:`corner
つぎの かどを みぎに まがります。Turn right at the next corner.`,frequency:1},{id:214,hiragana:"かない",examples:`(my) wife
かないは いま うちに います。My wife is at home now.`},{id:215,hiragana:"かばん",examples:`bag
かばんの なかに PCが あります。There is a PC in the bag.`,frequency:2},{id:216,hiragana:"かびん",examples:`vase
テーブルの うえに かびんが あります。There is a vase on the table.`},{id:217,hiragana:"かぶります",examples:`put on
ぼうしを かぶります。Put on a hat.`},{id:218,hiragana:"かみ",kanji:"紙",examples:`paper
紙を 1まい ください。Please give me a piece of paper.`,frequency:1},{id:219,hiragana:"カメラ",examples:`camera
あたらしい カメラを かいたいです。I want to buy a new camera.`,frequency:2},{id:220,hiragana:"かようび",kanji:"火よう日",examples:`Tuesday
きょうは 火よう日です。 Today is Tuesday.`},{id:221,hiragana:"からい",examples:`hot, spicy [i-adj.]
からい たべものは だいじょうぶですか。Is spicy food okay?`},{id:222,hiragana:"からだ",examples:`body
スポーツは からだに いいです。Sports are good for you.`},{id:223,hiragana:"かります",examples:`borrow
ともだちに かさを かりました。I borrowed an umbrella from my friend.`,frequency:4},{id:224,hiragana:"かるい",examples:`light, not heavy [i-adj.]
このバッグは かるいです。This bag is light.`,frequency:1},{id:225,hiragana:"カレンダー",examples:`calendar
これは きょねんの カレンダーです。This is last year's calendar.`},{id:226,hiragana:"かわ",kanji:"川",examples:`river
おおきい川が あります。There is a big river.`,frequency:2},{id:227,hiragana:"かわいい",examples:`pretty, sweet, cute [i-adj.]
こどもは かわいいです。Children are cute.`},{id:228,hiragana:"かんがえます",examples:`consider, think
いいアイデアを かんがえました。I came up with a good idea.`,frequency:1},{id:229,hiragana:"かんじ",examples:`kanji
かんじの べんきょうを しています。I'm studying kanji.`},{id:230,hiragana:"かんたん",examples:`easy [na-adj.]
このもんだいは かんたんです。This question is easy.`,frequency:2},{id:231,hiragana:"き",kanji:"木",examples:`tree
にわに おおきい 木が あります。There is a big tree in the garden.`},{id:232,hiragana:"きいろい",examples:`yellow [i-adj.]
きいろい マーカーで チェックします。Check with the yellow marker.`},{id:233,hiragana:"きえます",examples:`go out, go off
でんきが きえました。The electricity has gone out.`},{id:234,hiragana:"ききます",kanji:"聞きます",examples:`ask, hear, listen
イヤホンで おんがくを 聞きます。Listen to music with earphones.`,frequency:6},{id:235,hiragana:"きた",kanji:"北",examples:`north
北は どちらですか。Which direction is north?`},{id:236,hiragana:"ギター",examples:`guitar
ギターの れんしゅうを しています。I'm practicing the guitar.`,frequency:2},{id:237,hiragana:"きたない",examples:`dirty [i-adj.]
このビルの トイレは きたないです。The toilet in this building is dirty.`,frequency:1},{id:238,hiragana:"きっさてん",examples:`coffee shop
えきのまえに ふるい きっさてんが あります。There is an old coffee shop in front of the station.`,frequency:2},{id:239,hiragana:"きって",examples:`stamp
ゆうびんきょくで きってを かいました。I bought a stamp at the post office.`,frequency:1},{id:240,hiragana:"きっぷ",examples:`ticket
これは しんかんせんの きっぷです。This is a Shinkansen ticket.`,frequency:1},{id:241,hiragana:"きのう",examples:`yesterday
きのう たくさん にほんごの べんきょうをしました。I studied a lot of Japanese yesterday.`,frequency:6},{id:242,hiragana:"きます",kanji:"来ます",examples:`come
らいしゅう りょうしんが とうきょうに 来ます。Next week, my parents will come to Tokyo.`,frequency:4},{id:243,hiragana:"きます",examples:`put on, wear
さむいですから、セーターをきます。It's cold, so I'll wear a sweater.`},{id:244,hiragana:"きゅう",kanji:"九",examples:`nine
ほんを 九さつ かりました。I borrowed nine books.`},{id:245,hiragana:"ぎゅうにく",examples:`beef
にほんで ぎゅうにくは たかいです。Beef is expensive in Japan.`},{id:246,hiragana:"ぎゅうにゅう",examples:`milk
まいあさ ぎゅうにゅうを のみます。I drink milk every morning.`,frequency:1},{id:247,hiragana:"きょう",kanji:"今日",examples:`today
今日は いい てんきですね。It's nice weather today, isn't it?`,frequency:13},{id:248,hiragana:"きょうしつ",examples:`classroom
せんせいは きょうしつに います。The teacher is in the classroom.`,frequency:3},{id:249,hiragana:"きょうだい",examples:`brothers and sisters; siblings
きょうだいが いますか。Do you have any siblings?`,frequency:2},{id:250,hiragana:"きょうと",examples:`Kyoto [name of city]
おととし きょうとに いきました。I went to Kyoto two years ago.`,frequency:1},{id:251,hiragana:"きょねん",examples:`last year
きょねん にほんごの べんきょうをはじめました。Last year, I started studying Japanese.`,frequency:2},{id:252,hiragana:"きらい",examples:`hateful, unpleasant, not likable [na-adj.]
なっとうが きらいです。I hate natto.`},{id:253,hiragana:"きります",examples:`cut
やさいを きります。 Cut the vegetables.`,frequency:1},{id:254,hiragana:"きれい",examples:`beautiful, clean [na-adj.]
このへやは きれいです。This room is clean.`,frequency:1},{id:255,hiragana:"きん",kanji:"金",examples:`Friday = きんようび。
2がつ26にち（金）  February 26th (Friday)`,frequency:2},{id:256,hiragana:"ぎんこう",kanji:"銀行",examples:`bank
あとで 銀行に いきます。I will go to the bank later.`},{id:257,hiragana:"きんようび",kanji:"金よう日",examples:`Friday
金よう日に あいましょう。Let's meet on Friday.`},{id:258,hiragana:"く",kanji:"九",examples:`nine
いま 九じです。It's nine o'clock now.`},{id:259,hiragana:"くすり",examples:`medicine
しょくじの あとで くすりを のみます。Take medicine after meals.`,frequency:1},{id:260,hiragana:"くだもの",examples:`fruit
よく くだものを たべます。I often eat fruits.`,frequency:3},{id:261,hiragana:"くち",kanji:"口",examples:`mouth
かれは 口が おおきいです。He has a big mouth.`},{id:262,hiragana:"くつ",examples:`shoes
くつの サイズは いくつですか。What is the size of your shoes?`},{id:263,hiragana:"くつした",kanji:"くつ下",examples:`socks
しろい くつ下を かいました。I bought white socks.`,frequency:1},{id:264,hiragana:"くに",kanji:"国",examples:`country
あした 国に かえります。Tomorrow, I will return to my country.`,frequency:4},{id:265,hiragana:"くもり",examples:`cloudy weather
きょうは くもりです。It's cloudy today.`,frequency:1},{id:266,hiragana:"くらい",examples:`dark [i-adj.]
このへやは くらいです。This room is dark.`,frequency:1},{id:267,hiragana:"クラス",examples:`class
しゅうまつは ヨガの クラスに いきます。I go to yoga classes on weekends.`,frequency:4},{id:268,hiragana:"くるま",kanji:"車",examples:`car
きょうは 車が おおいですね。There are many cars today.`,frequency:1},{id:269,hiragana:"くろ",examples:`black [noun]
くろで かきます。Write in black.`,frequency:1},{id:270,hiragana:"くろい",examples:`black [i-adj.]
くろい バッグが 3つ あります。There are three black bags.`,frequency:1},{id:271,hiragana:"くろく",examples:`black [adv.]
くろく なりました。 It turned black.`,frequency:1},{id:272,hiragana:"ケーキ",examples:`cake
このケーキを 4つ ください。Please give me four of these cakes.`,frequency:1},{id:273,hiragana:"けさ",kanji:"今朝",examples:`this morning
今朝は ６じに おきました。I got up at 6 o'clock this morning.`,frequency:2},{id:274,hiragana:"けしゴム",examples:`eraser
けしゴムを かしてください。Please lend me an eraser.`,frequency:1},{id:275,hiragana:"けします",examples:`switch off, turn off, erase
でんきを けします。Turn off the light.`,frequency:1},{id:276,hiragana:"げつ",kanji:"月",examples:`Monday = げつようび。
4がつ22にち（月）  April 22nd (Monday)`,frequency:2},{id:277,hiragana:"けっこんします",examples:`get married
2がつ15にちに けっこんしました。I got married on February 15th.`,frequency:1},{id:278,hiragana:"げつようび",kanji:"月よう日",examples:`Monday
月よう日は いつも いそがしいです。I'm always busy on Mondays.`},{id:279,hiragana:"げんかん",examples:`front door, front entrance
げんかんで くつを ぬぎます。Take off your shoes at the entrance.`},{id:280,hiragana:"げんき",examples:`fine [na-adj.]
おげんきですか。How are you?`,frequency:1},{id:281,hiragana:"ご",kanji:"五",examples:`five
ふじさんに五かい のぼりました。I climbed Mt. Fuji five times.`},{id:282,hiragana:"こうえん",examples:`park
うちの ちかくに こうえんが あります。There is a park near my house.`,frequency:2},{id:283,hiragana:"こうばん",examples:`police box
えきの まえに こうばんが あります。There is a police box in front of the station.`},{id:284,hiragana:"こえ",examples:`voice
いい こえですね。You have a good voice.`},{id:285,hiragana:"コート",examples:`coat
さむいから、コートをきます。It's cold, so I'll wear a coat.`},{id:286,hiragana:"コーヒー",examples:`coffee
コーヒーを 2はい のみました。I drank two cups of coffee.`,frequency:1},{id:287,hiragana:"ここ",examples:`here
ここは あついです。It's hot here.`,frequency:3},{id:288,hiragana:"ごご",kanji:"午後",examples:`afternoon, p.m.
あしたの 午後は うちに います。I'll be at home tomorrow afternoon.`},{id:289,hiragana:"ここのか",kanji:"九日",examples:`ninth day of the month, nine days
きょうは 九日です。Today is the 9th.`},{id:290,hiragana:"ここのつ",kanji:"九つ",examples:`nine
ふくろの なかに りんごが 九つ あります。There are nine apples in the bag.`},{id:291,hiragana:"ごしゅじん",examples:`(someone's) husband
ごしゅじんは いま どこに いますか。Where is your husband now?`},{id:292,hiragana:"ごぜん",kanji:"午前",examples:`a.m.
いま 午前 11じです。It's 11am now.`},{id:293,hiragana:"こたえ",examples:`answer
ここに こたえを かいてください。Please write your answer here.`,frequency:3},{id:294,hiragana:"こたえかた",examples:`how to answer
こたえかたが わかりません。I don't know how to answer.`,frequency:1},{id:295,hiragana:"こたえます",examples:`answer
もんだいに こたえてください。Please answer the question.`,frequency:3},{id:296,hiragana:"こちら",examples:`this side, this place, this one
こちらは どなたですか。Who is this?`,frequency:1},{id:297,hiragana:"コップ",examples:`glass, drinking cup
テーブルの うえに コップが たくさん あります。There are many cups on the table.`},{id:298,hiragana:"ことし",kanji:"今年",examples:`this year
今年は くにに かえりません。I will not return to the country this year.`},{id:299,hiragana:"ことば",examples:`word, language, phrase
たくさん ことばを おぼえました。I learned a lot of words.`,frequency:2},{id:300,hiragana:"こども",kanji:"子ども",examples:`child
わたしは 子どもが 3にん います。I have 3 children.`,frequency:3},{id:301,hiragana:"この～",examples:`this ...
このカメラは とても かるいです。This camera is very light.`,frequency:12},{id:302,hiragana:"ごはん",examples:`rice, meal
あさ 8じに ごはんを たべました。I ate at 8 am.`,frequency:3},{id:303,hiragana:"コピー",examples:`copy
コピーをもらってもいいですか。May I get a copy?`,frequency:2},{id:304,hiragana:"コピーします",examples:`make a copy
5ページから10ページまで コピーしてください。Please copy pages 5 to 10.`,frequency:1},{id:305,hiragana:"こまります",examples:`be in trouble
スマホを わすれましたから、こまりました。I was in trouble because I forgot my smartphone.`,frequency:2},{id:306,hiragana:"これ",examples:`this (one)
これを ２つと、それを ３つ ください。Please give me two of these and three of them.`,frequency:2},{id:307,hiragana:"こんげつ",kanji:"今月",examples:`this month
今月は とても いそがしいです。This month is very busy.`,frequency:1},{id:308,hiragana:"こんしゅう",kanji:"今週",examples:`this week
今週は あまり いそがしくないです。I'm not very busy this week.`},{id:309,hiragana:"こんな",examples:`this sort of, like this [na-adj.]
こんな りょうりが すきです。I like this kind of food.`},{id:310,hiragana:"こんばん",examples:`tonight
こんばん 9じに うちに かえります。 I'll be back home tonight at 9 o'clock.`},{id:311,hiragana:"さいご",examples:`end, last time
レッスンの さいごに しゅくだいを あげます。I will give you homework at the end of the lesson.`,frequency:1},{id:312,hiragana:"さかな",kanji:"魚",examples:`fish
にくより 魚のりょうりが すきです。I like fish dishes better than meat.`,frequency:2},{id:313,hiragana:"さき",kanji:"先",examples:`former, earlier
お先に どうぞ。After you.`},{id:314,hiragana:"さきます",examples:`bloom
はるには いろいろなはながさきます。Various flowers bloom in spring.`},{id:315,hiragana:"さくぶん",examples:`composition
さくぶんは いい れんしゅうです。Writing is a good practice.`},{id:316,hiragana:"さします",examples:`put up (umbrella)
あめでしたが、かさをさしませんでした。It was raining, but I didn't hold my umbrella.`},{id:317,hiragana:"サッカー",examples:`soccer, football
あしたは サッカーの しあいが あります。Tomorrow there is a soccer game.`,frequency:1},{id:318,hiragana:"ざっし",examples:`magazine
このざっしの しゃしんは きれいです。The photos in this magazine are beautiful.`},{id:319,hiragana:"さとう",examples:`sugar
コーヒーに さとうを いれますか。Would you like to add sugar to your coffee?`,frequency:1},{id:320,hiragana:"さむい",examples:`cold (weather) [i-adj.]
きょうは きのうより さむいです。It's colder today than yesterday.`},{id:321,hiragana:"さらいねん",examples:`the year after next
たぶん さらいねん にほに いきます。Maybe I will go to Japan the year after next.`},{id:322,hiragana:"さん",kanji:"三",examples:`three
でんちを さんこ いれます。Insert three batteries.`},{id:323,hiragana:"さんぽ",examples:`walk
ちちと ははは さんぽが すきです。My father and mother like walking.`},{id:324,hiragana:"さんぽ(を)します",examples:`take a walk
けさ ははと さんぽをしました。I took a walk with my mother this morning.`,frequency:1},{id:325,hiragana:"し",kanji:"四",examples:`four = よん。
いち、に、さん、四、ご…  one, two, three, four, five ...`},{id:326,hiragana:"しお",examples:`salt
しおを すこし いれてください。Please add a little salt.`},{id:327,hiragana:"しかし",examples:`but, however (formal, written language)
べんきょうしました。しかし、わすれました。I studied. But I forgot.`},{id:328,hiragana:"じかん",kanji:"時間",examples:`time
あしたは 時間が あります。I have time tomorrow.`,frequency:2},{id:329,hiragana:"しごと",examples:`work
どんな しごとを していますか。What kind of work do you do?`,frequency:3},{id:330,hiragana:"じしょ",examples:`dictionary
じしょで しらべました。I looked it up in the dictionary.`,frequency:1},{id:331,hiragana:"しずか",examples:`quiet [na-adj.]
このカフェは しずかです。This cafe is quiet.`},{id:332,hiragana:"した",kanji:"下",examples:`under, below
テーブルの 下に コンセントが あります。There is an outlet under the table.`,frequency:2},{id:333,hiragana:"しつもん",examples:`question
しつもんが あります。I have a question.`,frequency:6},{id:334,hiragana:"じてんしゃ",examples:`bicycle
じてんしゃで がっこうに いきます。I go to school by bicycle.`},{id:335,hiragana:"じどうしゃ",examples:`car
じどうしゃが 5だい あります。There are 5 cars.`},{id:336,hiragana:"しにます",examples:`die
ペットが しにました。The pet has died.`},{id:337,hiragana:"じびき",examples:`dictionary = じしょ
じしょと じびきは おなじです。"Jisho" and "Jibiki" are the same.`},{id:338,hiragana:"じぶん",examples:`oneself
じぶんで つくりました。I made it myself.`},{id:339,hiragana:"します",examples:`do
あしたは なにを しますか。What are you going to do tomorrow?`,frequency:14},{id:340,hiragana:"しまります",examples:`close (intransitive verb)
ドアが しまります。The door closes.`},{id:341,hiragana:"しめます",examples:`close (transitive verb)
わたしは ドアを しめます。I close the door.`,frequency:1},{id:342,hiragana:"しゃしん",examples:`photograph, photo, picture
いっしょに しゃしんを とりましょう。Let's take a picture together.`,frequency:1},{id:343,hiragana:"シャツ",examples:`shirt
しろい シャツを かいました。I bought a white shirt.`},{id:344,hiragana:"シャワー",examples:`shower
まいあさ シャワーを あびます。I take a shower every morning.`,frequency:1},{id:345,hiragana:"しゅう",kanji:"週",examples:`week
この週とこの週はとうきょうに います。This week and this week I'm in Tokyo.`,frequency:1},{id:346,hiragana:"じゅう",kanji:"十",examples:`ten
おとこの ひとが 十にん います。There are ten men.`},{id:347,hiragana:"ジュース",examples:`juice
オレンジジュースをください。Please give me orange juice.`,frequency:1},{id:348,hiragana:"じゅぎょう",examples:`class, lesson
きょうは にほんごの じゅぎょうが あります。I have a Japanese class today.`},{id:349,hiragana:"しゅくだい",examples:`homework
しゅくだいが たくさん あります。I have a lot of homework.`,frequency:3},{id:350,hiragana:"じょうず",kanji:"上手",examples:`good, skillful [na-adj.]
かのじょは にほんごが じょうずです。She is good at Japanese.`,frequency:1},{id:351,hiragana:"じょうずに",kanji:"上手に",examples:`well [adv.]
とても 上手に できましたね。You did it very well.`,frequency:1},{id:352,hiragana:"じょうぶ",examples:`healthy, strong, firm, durable [na-adj.]
このスーツケースはじょうぶです。 This suitcase is durable.`},{id:353,hiragana:"しょうゆ",examples:`soy sauce
しょうゆを すこし いれます。Add a little soy sauce.`,frequency:1},{id:354,hiragana:"しょくどう",examples:`dining room
10かいに しょくどうが あります。There is a dining room on the 10th floor.`,frequency:1},{id:355,hiragana:"しります",kanji:"知ります",examples:`know
「はい、知っています」「いいえ、知りません」"Yes, I know" "No, I don't know"`},{id:356,hiragana:"しろい",kanji:"白い",examples:`white [i-adj.]
白い はなを かいました。I bought a white flower.`},{id:357,hiragana:"しんぶん",kanji:"新聞",examples:`newspaper
うちで 新聞を よみます。I read the newspaper at home.`,frequency:1},{id:358,hiragana:"すい",kanji:"水",examples:`Wednesday = すいようび。
げつと水は やすみです。 Monday and Wednesday are closed.`,frequency:2},{id:359,hiragana:"すいます",examples:`breath in, smoke
たばこを すいますか。Do you smoke?`},{id:360,hiragana:"すいようび",kanji:"水よう日",examples:`Wednesday
水よう日は うちで しごとを します。I work at home on Wednesday.`},{id:361,hiragana:"スカート",examples:`skirt
ときどき スカートを はきます。I wear a skirt sometimes.`},{id:362,hiragana:"すき",examples:`like [na-adj.]
わたしは べんきょうが すきです。I like studying.`,frequency:4},{id:363,hiragana:"すくない",kanji:"少ない",examples:`few
きょうは しゅくだいが すくないです。I have less homework today.`,frequency:1},{id:364,hiragana:"すぐに",examples:`soon, right away
すぐに おわります。It will end soon.`,frequency:1},{id:365,hiragana:"すこし",kanji:"少し",examples:`a little
少し じかんを ください。Please give me some time.`,frequency:1},{id:366,hiragana:"すし",examples:`sushi
きのう すしを たべました。I ate sushi yesterday.`,frequency:1},{id:367,hiragana:"すしや",examples:`sushi restaurant
きのうは すしやに いきました。Yesterday I went to a sushi restaurant.`,frequency:1},{id:368,hiragana:"すずしい",examples:`cool (weather) [i-adj.]
きょうは きのうより すずしいです。Today is cooler than yesterday.`},{id:369,hiragana:"ストーブ",examples:`stove, heater
これは ふるい ストーブです。This is an old stove.`},{id:370,hiragana:"スプーン",examples:`spoon
スプーンで カレーを たべます。Eat curry with a spoon.`},{id:371,hiragana:"スポーツ",examples:`sports
なにか スポーツを していますか。Do you play any sports?`},{id:372,hiragana:"ズボン",examples:`trousers, pants
ズボンを はきます。I wear pants.`},{id:373,hiragana:"すみます",kanji:"住みます",examples:`live, inhabit
めぐろに 住んでいます。I live in Meguro.`,frequency:1},{id:374,hiragana:"スリッパ",examples:`slippers
ここで スリッパを はきます。I will put on my slippers here.`},{id:375,hiragana:"すわります",examples:`sit down
どうぞ ここに すわって ください。Please have a seat here.`},{id:376,hiragana:"せ",examples:`height
あのひとは とても せが たかいです。That person is very tall.`},{id:377,hiragana:"せいと",examples:`student
わたしは MLCの せいとです。I am a MLC student.`},{id:378,hiragana:"セーター",examples:`sweater
このセーターは とても あたたかいです。This sweater is very warm.`},{id:379,hiragana:"せっけん",examples:`soap
せっけんで よく てを あらいましょう。Wash your hands thoroughly with soap.`},{id:380,hiragana:"せびろ",examples:`jacket, suit
あのひとは いつも せびろを きています。That person is always in a suit.`},{id:381,hiragana:"せまい",examples:`narrow, not spacious [i-adj.]
わたしの へやは せまいです。My room is small.`,frequency:1},{id:382,hiragana:"ゼロ",examples:`zero
これは カロリーゼロです。This is zero calories.`},{id:383,hiragana:"せん",kanji:"千",examples:`thousand
これは 千えんです。This is a thousand yen.`,frequency:2},{id:384,hiragana:"せんげつ",kanji:"先月",examples:`last month
先月 ハワイに いきました。I went to Hawaii last month.`},{id:385,hiragana:"せんしゅう",kanji:"先週",examples:`last week
先週の きんようびに びょういんに いきました。I went to the hospital last Friday.`,frequency:1},{id:386,hiragana:"せんせい",kanji:"先生",examples:`teacher
こちらは わたしの 先生です。This is my teacher.`,frequency:3},{id:387,hiragana:"せんたく",examples:`washing, laundry
まいにち せんたくを します。I will do the laundry every day.`},{id:388,hiragana:"ぜんぶ",examples:`all
しゅくだいは ぜんぶ おわりました。I've done all my homework.`,frequency:2},{id:389,hiragana:"そうじ",examples:`cleaning
わたしは そうじが すきです。I like cleaning.`,frequency:1},{id:390,hiragana:"そうじします",examples:`clean
これから このへやを そうじします。I'm going to clean this room.`},{id:391,hiragana:"そこ",examples:`there
かぎは そこに あります。 The key is there.`},{id:392,hiragana:"そして",examples:`and, then
ともだちに あいました。そして、すしやにいきました。I met my friend. Then I went to a sushi restaurant.`,frequency:1},{id:393,hiragana:"そちら",examples:`there, your place
あした そちらに いきます。I will go there tomorrow.`},{id:394,hiragana:"そと",kanji:"外",examples:`outside
外は すごい あめです。It's raining a lot outside.`,frequency:2},{id:395,hiragana:"その～",examples:`that ...
そのひとは とても しんせつでした。The person was very kind.`,frequency:4},{id:396,hiragana:"そば",examples:`nearby
オフィスの そばの みせで かいました。I bought it at a store near my office.`,frequency:2},{id:397,hiragana:"そら",kanji:"空",examples:`sky
きょうは 空が とても きれいですね。The sky is very beautiful today.`},{id:398,hiragana:"それ",examples:`that (one)
それは なんですか。 What is it?`,frequency:1},{id:399,hiragana:"それから",examples:`and then, after that
これをください。それから、これもください。 This one, please. Also, this one, please.`,frequency:4},{id:400,hiragana:"それでは",examples:`then, well
それでは つぎの ページに いきましょう。Now let's go to the next page.`},{id:401,hiragana:"だいがく",kanji:"大学",examples:`university
大学で にほんごを べんきょうしました。I studied Japanese at university.`,frequency:1},{id:402,hiragana:"たいしかん",examples:`embassy
これから たいしかんに いきます。I will go to the embassy from now on.`,frequency:1},{id:403,hiragana:"だいじょうぶ",examples:`okay, no problem [na-adj.]
だいじょうぶですか。Are you okay?`},{id:404,hiragana:"だいすき",examples:`be very fond of, like very much [na-adj.]
チーズケーキが だいすきです。I love cheesecake.`},{id:405,hiragana:"たいせつ",examples:`important [na-adj.]
これは とても たいせつです。This is very important.`},{id:406,hiragana:"だいたい",examples:`almost
だいたい おなじ いみです。It has almost the same meaning.`,frequency:1},{id:407,hiragana:"たいてい",examples:`mostly, usually
あさごはんは たいてい パンと コーヒーです。Breakfast is usually bread and coffee.`},{id:408,hiragana:"だいどころ",examples:`kitchen
かないと むすめは だいどころに います。My wife and daughter are in the kitchen.`},{id:409,hiragana:"たいへん",examples:`very [adv.]  (formal)
きのうは たいへん いそがしかったです。It was very busy yesterday.`},{id:410,hiragana:"たいへん",examples:`serious, hard, difficult [na-adj.]
かんじの べんきょうは たいへんです。Studying kanji is hard.`},{id:411,hiragana:"たかい",kanji:"高い",examples:`expensive [i-adj.]
このカメラは 高いです。This camera is expensive.`,frequency:1},{id:412,hiragana:"たかい",kanji:"高い",examples:`tall, high [i-adj.]
あのビルは とても 高いです。That building is very tall.`},{id:413,hiragana:"だから",examples:`so, therefore
あしたは あめです。だから、うちにいます。It will rain tomorrow. So I will stay home.`,frequency:1},{id:414,hiragana:"たくさん",examples:`many, much
きょうは たくさん しゅくだいが あります。I have a lot of homework today.`,frequency:4},{id:415,hiragana:"タクシー",examples:`taxi
タクシーで 行きましょう。Let's go by taxi.`,frequency:2},{id:416,hiragana:"だします",kanji:"出します",examples:`take out
バッグの なかから スマホを 出します。Take your smartphone out of the bag.`,frequency:1},{id:417,hiragana:"ただしい",examples:`correct [i-adj.]
ただしいぶんは どれですか。Which is the correct sentence?`,frequency:1},{id:418,hiragana:"たちます",kanji:"立ちます",examples:`stand up
ここに 立ってください。Please stand here.`,frequency:1},{id:419,hiragana:"たてもの",examples:`building
たかい たてものが たくさん あります。There are many tall buildings.`,frequency:1},{id:420,hiragana:"たのしい",examples:`enjoyable, pleasant [i-adj.]
きのうの パーティーは とても たのしかったです。Yesterday's party was a lot of fun.`,frequency:1},{id:421,hiragana:"たのみます",examples:`ask, request
たなかさんに このしごとを たのみます。I will ask Mr. Tanaka for this job.`},{id:422,hiragana:"たばこ",examples:`cigarette, tobacco
わたしは たばこを すいません。I don't smoke.`},{id:423,hiragana:"たぶん",examples:`probably, perhaps
たぶん あしたは じかんが あります。Maybe I have time tomorrow.`},{id:424,hiragana:"たべもの",kanji:"食べもの",examples:`food
コンビニで 食べものとのみものをかいました。I bought food and drinks at a convenience store.`},{id:425,hiragana:"たべます",kanji:"食べます",examples:`eat
よく おすしを 食べます。I often eat sushi.`,frequency:8},{id:426,hiragana:"たまご",examples:`egg
たまごを 10こ かいました。I bought 10 eggs.`,frequency:1},{id:427,hiragana:"だれ",examples:`who
あのひとは だれですか。Who is that person.`,frequency:2},{id:428,hiragana:"たんじょうび",examples:`birthday
たんじょうびは いつですか。When is your birthday.`,frequency:1},{id:429,hiragana:"だんだん",examples:`gradually, little by little
だんだん あたたかくなりました。It's getting warmer and warmer.`},{id:430,hiragana:"ちいさい",kanji:"小さい",examples:`small
小さい さかなが います。There is a small fish.`},{id:431,hiragana:"ちいさな+[noun]",kanji:"小さな",examples:`small 小さな+[noun]
小さな さかなが います。There is a small fish.`,frequency:2},{id:432,hiragana:"ちかい",kanji:"近い",examples:`near, close [i-adj.]
わたしの うちは えきから 近いです。My house is close to the station.`},{id:433,hiragana:"ちがいます",examples:`be different, differ
N5とN4は レベルが ちがいます。N5 and N4 have different levels.`},{id:434,hiragana:"ちかく",kanji:"近く",examples:`neighborhood [noun]
近くの レストランで ばんごはんを たべました。I had dinner at a nearby restaurant`,frequency:4},{id:435,hiragana:"ちかてつ",examples:`subway
ちかてつは とても べんりです。The subway is very convenient.`},{id:436,hiragana:"ちず",examples:`map
ちずを みて チェックしましょう。Let's check by looking at the map.`,frequency:1},{id:437,hiragana:"ちち",kanji:"父",examples:`(my) father
父は エンジニアです。My father is an engineer.`,frequency:1},{id:438,hiragana:"ちゃいろ",examples:`brown
わたしの さいふは ちゃいろです。My wallet is brown.`},{id:439,hiragana:"ちゃわん",examples:`(rice) bowl
きれいな ちゃわんと おはしを かいました。I bought a beautiful bowl and chopsticks.`},{id:440,hiragana:"ちょうど",examples:`just
いま 3じ ちょうどです。It's just 3 o'clock now.`},{id:441,hiragana:"ちょっと",examples:`a little
すみません。ここでちょっと まってください。Excuse me. Please wait a moment here.`,frequency:4},{id:442,hiragana:"ついたち",kanji:"一日",examples:`the first day of the month
たんじょうびは ３がつ ついたちです。Birthday is March 1st.`},{id:443,hiragana:"つかいます",examples:`use
しごとで まいにち にほんごを つかいます。I use Japanese every day at work.`,frequency:5},{id:444,hiragana:"つかれます",examples:`get tired
きょうは とても つかれました。I'm very tired today.`,frequency:2},{id:445,hiragana:"つぎ",examples:`next
つぎの かどを みぎに まがってください。Turn right at the next corner.`,frequency:4},{id:446,hiragana:"つきます",examples:`arrive
3じはんに なりたくうこうに つきます。I will arrive at Narita Airport at 3:30.`,frequency:4},{id:447,hiragana:"つくえ",examples:`desk
つくえの うえに ほんが たくさん あります。There are many books on the desk.`,frequency:4},{id:448,hiragana:"つくりかた",examples:`how to make
このりょうりの つくりかたを しりたいです。I want to know how to make this dish.`,frequency:1},{id:449,hiragana:"つくります",examples:`make
あたらしいアプリをつくりました。I made a new app.`,frequency:2},{id:450,hiragana:"つけます",examples:`turn on
このリモコンで エアコンを つけます。Turn on the air conditioner with this remote control.`,frequency:1},{id:451,hiragana:"つとめます",examples:`work for
ちいさい ITの かいしゃに つとめています。I work for a small IT company.`},{id:452,hiragana:"つまらない",examples:`uninteresting, boring [i-adj.]
このえいがは つまらないです。This movie is boring.`,frequency:1},{id:453,hiragana:"つめたい",examples:`cold (object) [i-adj.]
つめたいのみのもはいかがですか。How about a cold drink?`},{id:454,hiragana:"つよい",examples:`strong [i-adj.]
きょうは とても かぜが つよいです。It's very windy today.`},{id:455,hiragana:"て",kanji:"手",examples:`hand
手を みせてください。Please show me your hand.`,frequency:1},{id:456,hiragana:"ティッシュペーパー",examples:`tissue
ティッシュペーパーをいちまい ください。Please give me a piece of tissue paper.`,frequency:1},{id:457,hiragana:"テープ",examples:`tape
ここに テープを はってください。Please stick the tape here.`},{id:458,hiragana:"テープレコーダー",examples:`tape recorder
テープレコーダーはいまは ありません。There is no tape recorder now.`},{id:459,hiragana:"テーブル",examples:`table
このテーブルを つかってもいいですか。Can I use this table?`,frequency:2},{id:460,hiragana:"でかけます",kanji:"出かけます",examples:`go out
きのうは どこにも でかけませんでした。I didn't go anywhere yesterday.`,frequency:1},{id:461,hiragana:"てがみ",kanji:"手紙",examples:`letter
よくメールは しますが、手紙はかきません。I often email, but I don't write letters.`,frequency:1},{id:462,hiragana:"できます",examples:`can
わたしは ちゅうごくごと かんこくごも できます。I can also speak Chinese and Korean.`},{id:463,hiragana:"でぐち",kanji:"出口",examples:`exit
出口は あちらのドアです。The exit is that door.`,frequency:1},{id:464,hiragana:"テスト",examples:`test
あしたは かんじのテストがあります。Tomorrow I have a kanji test.`,frequency:3},{id:465,hiragana:"では",examples:`then, well then = じゃ。
では、きょうの レッスンを おわりましょう。So let's finish today's lesson.`,frequency:2},{id:466,hiragana:"デパート",examples:`department store
デパートに かいものに いきました。I went shopping at a department store.`,frequency:3},{id:467,hiragana:"でます",kanji:"出ます",examples:`leave
あしたは あさ 7じに うちを 出ます。I will leave home at 7 am tomorrow.`,frequency:1},{id:468,hiragana:"でも",examples:`but
にちようびです。でも、うちでしごとを します。It's Sunday. But I do work at home.`,frequency:5},{id:469,hiragana:"テレビ",examples:`TV
テレビで そのニュースを みました。I saw the news on TV.`,frequency:2},{id:470,hiragana:"てんき",kanji:"天気",examples:`weather
きょうは とても いい天気ですね。It's a very nice weather today.`},{id:471,hiragana:"でんき",kanji:"電気",examples:`electricity
電気を つけても いいですか。Can I turn on the light?`},{id:472,hiragana:"でんしゃ",kanji:"電車",examples:`train
電車は すこし こんでいました。The train was a little crowded.`,frequency:1},{id:473,hiragana:"でんわ",kanji:"電話",examples:`telephone
きのう ははから 電話が ありました。I got a call from my mother yesterday.`,frequency:2},{id:474,hiragana:"でんわします",kanji:"電話します",examples:`call, ring
たまに かぞくに 電話します。I call my family once in a while.`,frequency:1},{id:475,hiragana:"でんわばんごう",kanji:"電話ばんごう",examples:`telephone number
ここに 電話ばんごうをかいてください。Please write your phone number here.`,frequency:1},{id:476,hiragana:"と",examples:`door
とが あいています。The door is open.`},{id:477,hiragana:"ど",examples:`Saturday = どようび。
5がつ16にち（ど）に にほんに いきます。I will go to Japan on Saturday, May 16th.`,frequency:2},{id:478,hiragana:"ドア",examples:`door
みぎがわのドアがあきます。The door on the right opens.`},{id:479,hiragana:"トイレ",examples:`toilet, lavatory
トイレを かりても いいですか。Can I use the toilet?`},{id:480,hiragana:"トイレットペーパー",examples:`toilet paper
トイレットペーパーがありません！There is no toilet paper!`,frequency:2},{id:481,hiragana:"どう",examples:`how
きのうの テストは どうでしたか。How was your test yesterday?`,frequency:6},{id:482,hiragana:"とうきょう",examples:`Tokyo
とうきょうは おもしろい ところですね。Tokyo is an interesting place, isn't it?`,frequency:1},{id:483,hiragana:"どうして",examples:`why
どうして きのう やすみましたか。Why did you take a day off yesterday?`,frequency:1},{id:484,hiragana:"とうふ",examples:`tofu
とうふ を たべたことが ありますか。Have you ever eaten tofu?`,frequency:1},{id:485,hiragana:"どうぶつ",examples:`animal
どうぶつえんに いろいろな どうぶつが います。There are various animals in the zoo.`,frequency:1},{id:486,hiragana:"とお",kanji:"十",examples:`ten
ひとつ、ふたつ、みっつ、よっつ、いつつ、むっつ、ななつ、やっつ、ここのつ、十。One, two, three, four, five, six, seven, eight, nine, ten.`},{id:487,hiragana:"とおい",examples:`far [i-adj.]
えきは ここから すこし とおいです。The station is a little far from here.`},{id:488,hiragana:"とおく",examples:`distantly, far [noun]
りょうしんは とおくに すんでいます。My parents live far away.`,frequency:1},{id:489,hiragana:"とおか",kanji:"十日",examples:`the tenth day of the month, ten days
きょうは 十日です。Today is the 10th.`},{id:490,hiragana:"ときどき",examples:`sometimes
ときどき じぶんで りょうりを つくります。Sometimes I cook myself.`,frequency:1},{id:491,hiragana:"とけい",examples:`clock, watch
ともだちに かわいい とけいを プレゼントしました。I gave my friend a cute clock as a gift.`,frequency:1},{id:492,hiragana:"どこ",examples:`where
おてあらいは どこですか。Where is the restroom?`,frequency:7},{id:493,hiragana:"どこか",examples:`somewhere
どこかで ランチを たべませんか。Would you like to have lunch somewhere?`,frequency:2},{id:494,hiragana:"ところ",examples:`place
どんな ところに すみたいですか。What kind of place do you want to live in?`},{id:495,hiragana:"としょかん",examples:`library
わたしは ほとんど としょかんに いきません。I rarely go to the library.`,frequency:2},{id:496,hiragana:"どちら",examples:`「どっち which」「どこ where」「どれ which one」のpolite
コーヒーとこうちゃ、どちがいいですか。Which would you like, coffee or tea?
どちらからですか。Where are you from?
どちらが いいですか。Which one would you like to choose?`,frequency:3},{id:497,hiragana:"とても",examples:`very
きょうは とても たのしかったです。I had a lot of fun today.`,frequency:3},{id:498,hiragana:"どなた",examples:`だれ。who のpolite
この しゃしんの ひとは どなた ですか。Who is the person in this photo?`},{id:499,hiragana:"となり",examples:`next to
となりに すわってもいいですか。Can I sit next to you?`,frequency:1},{id:500,hiragana:"どの～",examples:`which ...
どのアプリを いちばん よく つかいますか。Which app do you use the most?`,frequency:2},{id:501,hiragana:"とびます",examples:`fly
とりが たくさん とんでいます。A lot of birds are flying.`},{id:502,hiragana:"とまります",examples:`stop
このでんしゃは しぶやえきに とまりますか。Does this train stop at Shibuya Station?`},{id:503,hiragana:"ともだち",kanji:"友だち",examples:`friend
きのうは 友だちと オンラインで はなしました。I talked online with my friends yesterday.`,frequency:5},{id:504,hiragana:"どようび",kanji:"土よう日",examples:`Saturday
こんしゅうの 土よう日はやすみです。This Saturday is closed.`,frequency:1},{id:505,hiragana:"とり",examples:`bird
きの うえに ちいさいとりが たくさん います。There are many small birds on the tree.`},{id:506,hiragana:"とりにく",examples:`chicken
とりにくを よく たべます。I often eat chicken.`},{id:507,hiragana:"とります",examples:`take
すみません。こしょうをとってください。Excuse me. Could you pass the pepper?`,frequency:2},{id:508,hiragana:"とります",examples:`take (photographs)
きょうとで たくさん きれいな しゃしんを とりました。I took a lot of beautiful pictures in Kyoto.`},{id:509,hiragana:"どれ",examples:`which one
おすすめは どれですか。Which is your recommendation?`,frequency:2},{id:510,hiragana:"どんな",examples:`what kind of ...
どんな ものを たべたいですか。What kind of food do you want to eat?`,frequency:1},{id:511,hiragana:"ナイフ",examples:`knife
フォークと ナイフで ステーキを たべます。I eat steak with a fork and knife.`},{id:512,hiragana:"なか",kanji:"中",examples:`inside
ポケットの 中に ティッシュが あります。There is tissue in my pocket.`,frequency:9},{id:513,hiragana:"ながい",kanji:"長い",examples:`long [i-adj.]
このえいがは とても 長いです。This movie is very long.`,frequency:2},{id:514,hiragana:"なきます",examples:`sing, mew, moo, etc.
たくさんの とりが ないています。Many birds are singing.`},{id:515,hiragana:"なつ",examples:`summer
いちねんの なかで なつが いちばん すきです。I like summer the best of the year.`},{id:516,hiragana:"など",examples:`and so on, etc.
バッグの なかに スマホや サイフなどが あります。There are smartphones, wallets and other things in the bag.`,frequency:1},{id:517,hiragana:"ななつ",kanji:"七つ",examples:`seven
このドーナツを 七つ ください。7 of these donuts, please.`,frequency:1},{id:518,hiragana:"なに",kanji:"何",examples:`what
しゅうまつは 何を しましたか。What did you do on the weekend?`,frequency:10},{id:519,hiragana:"なにか",kanji:"何か",examples:`something
何か つめたい のみものは いかがですか。How about some cold drink?`,frequency:2},{id:520,hiragana:"なのか",kanji:"七日",examples:`the seventh day of the month
きょうは 七日です。Today is the 7th.`},{id:521,hiragana:"なまえ",kanji:"名前",examples:`name
こちらに 名前と じゅうしょを かいてください。Please write your name and address here.`,frequency:1},{id:522,hiragana:"ならいます",examples:`learn (from somebody)
ははに りょうりを ならいました。I learned cooking from my mother.`},{id:523,hiragana:"ならびます",examples:`(someone) line up
みせの そとで 30ぷん ならびました。I lined up outside the store for 30 minutes.`},{id:524,hiragana:"ならべます",examples:`line up (something)
テーブルの うえに おさらを ５まい ならべます。I line up five dishes on the table.`,frequency:1},{id:525,hiragana:"なります",examples:`become
こどもは らいげつ 5さいに なります。My child will be 5 years old next month.`},{id:526,hiragana:"なん",kanji:"何",examples:`what
このスイッチは 何ですか。What is this switch?`,frequency:14},{id:527,hiragana:"なんじ",kanji:"何時",examples:`what time
あしたは 何時にどこであいましょうか。What time and where will we meet tomorrow?`,frequency:1},{id:528,hiragana:"なんにち",kanji:"何日",examples:`which day of the month
きょうは 何日ですか。What day is it today?`,frequency:1},{id:529,hiragana:"に",kanji:"二",examples:`two
三、二、一 スタート！  Three, two, one start!`,frequency:2},{id:530,hiragana:"にぎやか",examples:`lively [na-adj.]
ここは にぎやなかな レストランですね。This is a lively restaurant, isn't it?`},{id:531,hiragana:"にく",examples:`meat
さかなと にく、どちらがいいですか。Which do you prefer, fish or meat?`,frequency:2},{id:532,hiragana:"にし",kanji:"西",examples:`west
西は こっちです。West is this direction.`},{id:533,hiragana:"にち",kanji:"日",examples:`Sunday = にちようび。
たんじょうびは  5がつ 17にちです。My birthday is May 17th.`,frequency:2},{id:534,hiragana:"にちようび",kanji:"日よう日",examples:`Sunday
こんどの 日よう日の おひるごろに あいましょうか。Shall we meet next Sunday around noon?`,frequency:3},{id:535,hiragana:"にねん",kanji:"二年",examples:`two years
わたしは にほんに きて もう 二年です。I have been in Japan for two years now.`,frequency:1},{id:536,hiragana:"にほん",kanji:"日本",examples:`Japan
１ねんまえから 日本で しごとを しています。I have been working in Japan for a year.`,frequency:3},{id:537,hiragana:"にほんご",kanji:"日本語",examples:`Japanese language
はんとしまえから日本語を べんきょうしています。I have been studying Japanese for half a year.`,frequency:1},{id:538,hiragana:"にもつ",examples:`baggage
ここに にもつを おいても いいですか。Can I put my luggage here?`,frequency:2},{id:539,hiragana:"ニュース",examples:`news
よく インターネットで ニュースを みます。I often watch the news on the internet.`},{id:540,hiragana:"にわ",examples:`garden
にわに いぬが 2ひき います。There are two dogs in the yard.`,frequency:1},{id:541,hiragana:"ぬぎます",examples:`take off
いつも ここで くつを ぬぎます。I always take off my shoes here.`},{id:542,hiragana:"ぬります",examples:`paint
テーブルを しろく ぬります。I paint the table white.`,frequency:1},{id:543,hiragana:"ネクタイ",examples:`necktie
わたしは ネクタイが 30ぽんぐらい あります。I have about 30 ties.`},{id:544,hiragana:"ねます",examples:`go to bed, sleep
いつも 12じごろに ねます。I always go to bed around 12 o'clock.`},{id:545,hiragana:"ノート",examples:`notebook
じぶんの ノートに かいてください。Write it in your notebook.`,frequency:1},{id:546,hiragana:"のぼります",examples:`go up, climb
なつに ともだちと ふじさんにのぼります。I will climb Mt. Fuji with my friends this summer.`},{id:547,hiragana:"のみます",kanji:"飲みます",examples:`drink
まいにち コーヒーを ３ばいぐらい 飲みます。I drink about 3 cups of coffee every day.`,frequency:2},{id:548,hiragana:"のみもの",kanji:"飲みもの",examples:`drinks
飲みものは なにが いいですか。What do you like for a drink?`,frequency:1},{id:549,hiragana:"のります",examples:`get on, ride, take
うちの ちかくから えきまで バスに のります。I take a bus from near my house to the station.`,frequency:2},{id:550,hiragana:"は",examples:`teeth
きょうは すこし はが いたいです。I have a slight toothache today.`},{id:551,hiragana:"パーティー",examples:`party
こんばん ともだちのうちで パーティーが あります。I have a party at my friend's house tonight.`,frequency:1},{id:552,hiragana:"はいざら",examples:`ashtray
すみません。はいざらがありますか。Excuse me. Do you have an ashtray?`},{id:553,hiragana:"はいります",kanji:"入ります",examples:`enter
いつも  このいりぐちから なかに 入ります。I always enter through this entrance.`,frequency:4},{id:554,hiragana:"はがき",examples:`postcard
ゆびんきょくで はがきを 10まい かいました。I bought 10 postcards at the post office.`},{id:555,hiragana:"はきます",examples:`put on
いつも ここで くつを はきます。I always put on shoes here.`},{id:556,hiragana:"はこ",examples:`box
はこの なかに くるまの かぎが あります。There is a car key in the box.`,frequency:3},{id:557,hiragana:"はし/おはし",examples:`chopsticks
おはしで おすしを たべます。I eat sushi with chopsticks.`,frequency:1},{id:558,hiragana:"はし",examples:`bridge
あの おおきい はしを あるいて わたります。I walk across a large bridge.`},{id:559,hiragana:"はじまります",examples:`begin, start
らいしゅうから にほんごのレッスンがはじまります。Japanese lessons will start next week.`,frequency:1},{id:560,hiragana:"はじめに",examples:`at the beginning
はじめに ひらがなと カタカナを べんきょうしました。First, I studied hiragana and katakana.`,frequency:3},{id:561,hiragana:"はじめて",examples:`for the first time
きょねん はじめて ふじさんをみました。I saw Mt. Fuji for the first time last year.`},{id:562,hiragana:"バス",examples:`bus
うちから がっこうまでバスで 20ぷんです。20 minutes by bus from my house to school.`,frequency:4},{id:563,hiragana:"バスがいしゃ",kanji:"バス会社",examples:`bus agency, bus company
いもうとは バス会社に つとめています。My sister works for a bus company.`,frequency:1},{id:564,hiragana:"バスてい",examples:`bus stop
このちかくに バスていが ありますか。Is there a bus stop near here?`,frequency:1},{id:565,hiragana:"バスりょこう",examples:`bus tour, bus trip
わたしの ちちと ははは バスりょこうが すきです。My dad and mom love bus trips.`,frequency:1},{id:566,hiragana:"バター",examples:`butter
パンに バターを ぬります。I spread butter on bread.`},{id:567,hiragana:"はたち",examples:`twenty years old
おとうとは らいげつ はたちに なります。My brother will be 20 next month.`},{id:568,hiragana:"はたらきます",examples:`work
こんしゅうは しゅうまつも はたらきます。This week I also work on weekends.`},{id:569,hiragana:"はち",kanji:"八",examples:`eight
八人で りょこうに いきました。I went on a trip with 8 people.`},{id:570,hiragana:"はつか",kanji:"二十日",examples:`the twentieth day of the month, twenty days
きょうは 二十日です。Today is the 20th.`},{id:571,hiragana:"はな",examples:`nose
わたしは はなが ひくいです。I have a low nose.`},{id:572,hiragana:"はな",kanji:"花",examples:`flower
きれいな 花を たくさん かいました。I bought a lot of beautiful flowers.`,frequency:1},{id:573,hiragana:"はなし",kanji:"話",examples:`story
せんせいから おもしろい話を ききました。I heard an interesting story from the teacher.`,frequency:2},{id:574,hiragana:"はなします",kanji:"話します",examples:`speak, talk, tell
よく ともだちと にほんごを 話します。I often speak Japanese with my friends.`,frequency:16},{id:575,hiragana:"はは",kanji:"母",examples:`(my) mother
ときどき 母に メールします。I email my mother sometimes.`,frequency:2},{id:576,hiragana:"はやい",examples:`early [i-adj.]
あさ 4じはんは はやいです。4:30 in the morning is early.`},{id:577,hiragana:"はやい",examples:`quick, fast [i-adj.]
このコンピュータははやいです。This computer is fast.`},{id:578,hiragana:"はる",examples:`spring
はなが すきですから、はるがすきです。I like spring because I like flowers.`},{id:579,hiragana:"はります",examples:`stick, put something on
ふうとうに きってを はります。I put a stamp on the envelope.`},{id:580,hiragana:"はれ",examples:`fair weather
あしたは たぶん はれです。It will probably be sunny tomorrow.`,frequency:1},{id:581,hiragana:"はれます",examples:`clear up
ごごは たぶん はれます。It will probably be sunny in the afternoon.`},{id:582,hiragana:"ばん",examples:`evening, night
あしたのばん ともだちに あいます。I'll see my friends tomorrow night.`,frequency:1},{id:583,hiragana:"パン",examples:`bread
あさは ふつう パンを たべます。I usually eat bread in the morning.`,frequency:2},{id:584,hiragana:"ハンカチ",examples:`handkerchief
ポケットの なかに ハンカチが あります。There is a handkerchief in my pocket.`},{id:585,hiragana:"ばんごう",examples:`number
でんわばんごうはなんばんですか。What is your phone number?`,frequency:1},{id:586,hiragana:"ばんごはん",examples:`dinner
こんばんは うちで ばんごはんを たべます。I'll have dinner at home tonight.`,frequency:2},{id:587,hiragana:"はんぶん",kanji:"半分",examples:`half
きのうのよる 半分だけ しゅくだいを しました。I did my homework only half last night.`,frequency:1},{id:588,hiragana:"パンや",examples:`bakery
えきの なかに おいしい パンやが あります。There is a delicious bakery inside the station.`,frequency:1},{id:589,hiragana:"ひ",kanji:"日",examples:`day
きょうは とても いい日でした。Today was a very good day.`,frequency:1},{id:590,hiragana:"ひがし",kanji:"東",examples:`east
東は あっちです。East is that direction.`},{id:591,hiragana:"ひきます",examples:`pull
おかねを いれて、レバーをひきます。Put some money and pull the lever.`},{id:592,hiragana:"ひきます",examples:`play (music instrument)
ときどき ギターを ひきます。I play the guitar sometimes.`,frequency:1},{id:593,hiragana:"ひくい",examples:`low [i-adj.]
いもうとは せが ひくいです。My sister is short.`},{id:594,hiragana:"ひこうき",examples:`airplane
ひこうきの よやくを しました。I made a reservation for an airplane.`},{id:595,hiragana:"ひだり",kanji:"左",examples:`left
つぎの しんごうを 左に まがってください。Turn left at the next traffic light.`},{id:596,hiragana:"ひと",kanji:"人",examples:`human, person
こうえんに 人が たくさん います。There are many people in the park.`,frequency:18},{id:597,hiragana:"ひとつ",kanji:"一つ",examples:`one
すみません。これを一つ ください。Excuse me. Please give me this one.`,frequency:14},{id:598,hiragana:"ひとつき",kanji:"一月",examples:`one month = いっかげつ。
にほんに きて 一月です。It's been a month since I came to Japan.`},{id:599,hiragana:"ひとり",kanji:"一人",examples:`one person
ことしの なつは 一人で りょこうに いきます。I'm going on a trip alone this summer.`,frequency:2},{id:600,hiragana:"ひま",examples:`free (time), not busy, spare time [na-adj.]
こんしゅうまつは ひまです。I'm free this weekend.`},{id:601,hiragana:"ひゃく",kanji:"百",examples:`hundred
これは どれでも ひとつ 百えんです。Each one costs 100 yen.`},{id:602,hiragana:"びょういん",examples:`hospital
つきに １かい びょういんに いきます。I go to the hospital once a month.`,frequency:1},{id:603,hiragana:"びょうき",examples:`illness, disease
ははは いま びょうきです。My mother is sick now.`},{id:604,hiragana:"ひらがな",examples:`Hiragana
ひらがなで かきます。I write in hiragana.`,frequency:1},{id:605,hiragana:"ひる",kanji:"昼",examples:`daytime, noon
あしたの 昼は うちに います。I'll be at home tomorrow noon.`,frequency:1},{id:606,hiragana:"ビル",examples:`building
たかい ビルが たくさん あります。There are many tall buildings.`,frequency:1},{id:607,hiragana:"ひるごはん",kanji:"昼ごはん",examples:`lunch
ともだちと 昼ごはんを たべました。I ate lunch with my friends.`,frequency:2},{id:608,hiragana:"ひろい",kanji:"広い",examples:`spacious, wide [i-adj.]
このへやは とても 広いです。This room is very large.`,frequency:1},{id:609,hiragana:"フィルム",examples:`film
カメラに フィルムを いれます。I put the film in the camera.`},{id:610,hiragana:"ふうとう",examples:`envelope
ふうとうの なかに チケットを いれます。I put the ticket in the envelope.`},{id:611,hiragana:"プール",examples:`swimming pool
きのう プールで 1,000メートル およぎました。I swam 1,000 meters in the pool yesterday.`,frequency:1},{id:612,hiragana:"フォーク",examples:`fork
フォークとナイフでステーキを たべます。I eat steak with a fork and knife.`},{id:613,hiragana:"ふきます",examples:`blow
そとは すごい かぜが ふいています。There is a terrible wind outside.`},{id:614,hiragana:"ふく",examples:`clothes
あたらしい ふくを たくさん かいました。I bought a lot of new clothes.`,frequency:1},{id:615,hiragana:"ふたつ",kanji:"二つ",examples:`two
このパンを 二つ ください。Please give me two of these breads.`,frequency:1},{id:616,hiragana:"ぶたにく",examples:`pork
わたしは ぶたにくを たべません。I don't eat pork.`},{id:617,hiragana:"ふたり",kanji:"二人",examples:`two people
わたしは こどもが 二人 います。I have two children.`,frequency:3},{id:618,hiragana:"ふつか",kanji:"二日",examples:`the second day of the month, two days
きょうは 二日です。Today is 2nd.`},{id:619,hiragana:"ふとい",examples:`thick, fat [i-adj.]
ふといペンで じゅうしょを かきます。I write my address with a thick pen.`},{id:620,hiragana:"ふゆ",examples:`winter
まいとし ふゆに スキーに  いきます。I go skiing every winter.`},{id:621,hiragana:"ふります",examples:`fall, come down
たぶん こんばんは あめが ふります。Maybe it will rain tonight.`,frequency:2},{id:622,hiragana:"ふるい",kanji:"古い",examples:`old [i-adj.]
これは 古いカメラです。This is an old camera.`},{id:623,hiragana:"ふろ",examples:`bath    「おふろ」more polite
まいにち おふろに はいります。I take a bath every day.`},{id:624,hiragana:"ぶん",kanji:"文",examples:`sentence
ながい 文を かいてください。Please write a long sentence.`,frequency:3},{id:625,hiragana:"ぶんしょう",examples:`text
つぎの ぶんしょうを よんで、しつもんにこたえてください。Please read the following sentences and answer the questions.`,frequency:6},{id:626,hiragana:"ページ",examples:`page
53ページを よんでください。Please read page 53.`,frequency:1},{id:627,hiragana:"へた",examples:`poor, unskillful [na-adj.]
わたしは うたが へたです。I'm not good at singing.`},{id:628,hiragana:"ベッド",examples:`bed
ベッドの したに ねこが います。There is a cat under the bed.`},{id:629,hiragana:"へや",examples:`room
この へやは ひろいですね。This room is large.`,frequency:8},{id:630,hiragana:"へん",examples:`side, part このへん。 = near here
このへんにATMが ありますか。Is there an ATM near here?`},{id:631,hiragana:"ペン",examples:`pen
ここに なまえを ペンで かいてください。Please write your name here with a pen.`},{id:632,hiragana:"べんきょうします",examples:`study
まいにち うちで にほんごを べんきょうします。I will study Japanese at home every day.`,frequency:3},{id:633,hiragana:"べんり",examples:`convenience [na-adj.]
このアプリは とても べんりです。This app is very useful.`},{id:634,hiragana:"ほう",examples:`ＡよりＢのほうが～。B is ... than A.
ふゆより なつのほうが すきです。I like summer better than winter.`},{id:635,hiragana:"ぼうし",examples:`hat, cap
さむいひは ぼうしを かぶります。I wear a hat on cold days.`,frequency:2},{id:636,hiragana:"ボールペン",examples:`ballpoint pen
ボールペンを もっていますか。Do you have a ballpoint pen?`,frequency:1},{id:637,hiragana:"ほか",examples:`another, other
ほかの ひは  どうですか。How about the other day?`},{id:638,hiragana:"ぼく",examples:`I (generally young boys, but some adult use as a style)
ぼくは 13さいです。I am 13 years old.`,frequency:2},{id:639,hiragana:"ポケット",examples:`pocket
ポケットの なかに けいたいでんわがあります。I have a mobile phone in my pocket.`},{id:640,hiragana:"ほしい",examples:`want (something) [i-adj.]
あたらしいカメラがほしいです。 I want a new camera.`,frequency:2},{id:641,hiragana:"ほそい",examples:`thin, fine [i-adj.]
ほそいペンで イラストを かきます。Draw an illustration with a thin pen.`},{id:642,hiragana:"ボタン",examples:`button
このシャツは ボタンが ひとつ ありません。This shirt doesn't have one button.`},{id:643,hiragana:"ホテル",examples:`hotel
ホテルで おいしい ひるごはんを たべました。I had a delicious lunch at the hotel.`,frequency:2},{id:644,hiragana:"ほん",kanji:"本",examples:`book
しゅうに ３さつぐらい 本を よみます。I read about 3 books a week.`,frequency:9},{id:645,hiragana:"ほんだな",examples:`bookshelf
ほんだなに本が 200さつぐらい あります。There are about 200 books on the bookshelf.`,frequency:1},{id:646,hiragana:"ほんとう",examples:`really, truth
ほんとうですか。しりませんでした。Is it true? I did not know that.`,frequency:1},{id:647,hiragana:"ほんや",examples:`bookshop
５かいに おおきい ほんやが あります。There is a large bookstore on the 5th floor.`,frequency:2},{id:648,hiragana:"まいあさ",kanji:"毎朝",examples:`every morning
毎朝 コーヒーを ２はい のみます。I drink two cups of coffee every morning.`},{id:649,hiragana:"まいげつ/まいつき",kanji:"毎月",examples:`every month
毎月 ホンコンに しゅっちょうします。I go on a business trip to Hong Kong every month.`},{id:650,hiragana:"まいしゅう",kanji:"毎週",examples:`every week
毎週 げつようびに ジムに いきます。I I go to the gym in my neighborhood every week.`,frequency:1},{id:651,hiragana:"まいにち",kanji:"毎日",examples:`every day
へいじつは毎日 7じはんに おきます。I wake up at 7:30am every weekday.`,frequency:1},{id:652,hiragana:"まいねん/まいとし",kanji:"毎年",examples:`every year
毎年 ８がつと 12がつに りょこうを します。I travel every August and December.`},{id:653,hiragana:"まいばん",kanji:"毎ばん",examples:`every night
毎ばん １じかんぐらい ゲームをします。I play games for about an hour every night.`,frequency:1},{id:654,hiragana:"まえ",kanji:"前",examples:`front
駅の前の コンビニで かいました。I bought it at a convenience store in front of the station. before
いつも しごとの前に コーヒーを のみます。I always drink coffee before work.`,frequency:5},{id:655,hiragana:"まがります",examples:`turn
２つめの かどを みぎに まがります。Turn right at the second corner.`,frequency:1},{id:656,hiragana:"まずい",examples:`nasty, bad-tasting
このりょうりは ほんとうに まずいです。This dish is really bad.`},{id:657,hiragana:"また",examples:`again
じゃ、また らいしゅう！ Then, see you next week!`,frequency:2},{id:658,hiragana:"まだ",examples:`still, yet
「もう おわりましたか」「まだです」"Have you finished yet?" "Not yet."`,frequency:1},{id:659,hiragana:"まち",examples:`town
わたしたちは このまちが すきです。We like this town.`,frequency:1},{id:660,hiragana:"まちます",examples:`wait
ここで  タクシーを まちます。I'll wait for a taxi here.`,frequency:3},{id:661,hiragana:"まっすぐ",examples:`straight [na-adj.]
このみちを 100mぐらい まっすぐ いきます。Go straight on this road for about 100m.`},{id:662,hiragana:"マッチ",examples:`match
たぶん うちに マッチは ありません。There is probably no match at home.`},{id:663,hiragana:"まど",examples:`window
このまどを あけても いいですか。Is it okay to open this window?`},{id:664,hiragana:"まるい",examples:`round [i-adj.]
まるいテーブルをかいたいです。I want to buy a round table.`},{id:665,hiragana:"まん",kanji:"万",examples:`ten thousand
このタブレットは 5万えんで かいました。I bought this tablet for 50,000 yen.`},{id:666,hiragana:"まんねんひつ",examples:`fountain pen
たかい まんねんひつを ３ぼん もっています。I have three expensive fountain pens.`},{id:667,hiragana:"みがきます",examples:`polish, brush
しょくじのあとで はを みがきます。I will brush after the meal.`},{id:668,hiragana:"みぎ",kanji:"右",examples:`right
つぎの かどを 右に まがります。Turn right at the next corner.`,frequency:2},{id:669,hiragana:"みじかい",examples:`short [i-adj.]
みじかいえいがを３ぼん みました。I watched 3 short movies.`,frequency:2},{id:670,hiragana:"みず",kanji:"水",examples:`water
つめたい水を ください。Please give me cold water.`},{id:671,hiragana:"みせ",kanji:"店",examples:`store
この店の やきとりは さいこうです。The yakitori in this shop is the best.`,frequency:5},{id:672,hiragana:"みせます",kanji:"見せます",examples:`show
いりぐちで チケットを 見せます。I will show them the ticket at the entrance.`},{id:673,hiragana:"みち",kanji:"道",examples:`way
この道を まっすぐ いってください。Please go straight on this road.`},{id:674,hiragana:"みっか",kanji:"三日",examples:`the third day of month, three days
きょうは 三日です。Today is the 3rd.`,frequency:1},{id:675,hiragana:"みっつ",kanji:"三つ",examples:`three
このふくは ポケットが 三つ あります。This cloth has three pockets.`},{id:676,hiragana:"みなさん",examples:`everyone
みなさん、こんにちは。Hello everyone.`,frequency:2},{id:677,hiragana:"みなみ",kanji:"南",examples:`south
南は こっちです。South is this direction.`},{id:678,hiragana:"みます",kanji:"見ます",examples:`look, see, watch
よく ネットで えいがを 見ます。I often watch movies online.`,frequency:9},{id:679,hiragana:"みみ",kanji:"耳",examples:`ear
わたしは 耳が ちいさいです。I have small ears.`},{id:680,hiragana:"みんな",examples:`everyone, everything
これは みんな 100えんです。This is all 100 yen.`,frequency:2},{id:681,hiragana:"むいか",kanji:"六日",examples:`the sixth day of the month
きょうは 六日です。Today is the 6th.`},{id:682,hiragana:"むこう",examples:`over there
だんせいの おてあらいは むこうです。Men's restrooms are over there.`},{id:683,hiragana:"むずかしい",examples:`difficult [i-adj.]
このもんだいは とても むずかしいです。This question is very difficult.`,frequency:1},{id:684,hiragana:"むっつ",kanji:"六つ",examples:`six
その ちいさい パンを 六つ ください。Please give me six of those little breads.`,frequency:1},{id:685,hiragana:"め",kanji:"目",examples:`eye
わたしは 目が あまり よくないです。My eyes are not very good.`},{id:686,hiragana:"メートル",examples:`meter
ここから えきまで 100メートルぐらいです。It is about 100 meters from here to Eki.`},{id:687,hiragana:"めがね",examples:`glasses
ポケットの なかに めがねが あります。I have glasses in my pocket.`,frequency:1},{id:688,hiragana:"メモ",examples:`memo
バッグの なかに メモが あります。There is a note in my bag.`,frequency:1},{id:689,hiragana:"メモします",examples:`make a note
メモしてもいいですか。Can I make a note?`,frequency:1},{id:690,hiragana:"もう",examples:`already, yet
もう おわりました。It's already over.`},{id:691,hiragana:"もう～",examples:`... more
もういちど ゆっくり いってください。Please say slowly again.`,frequency:3},{id:692,hiragana:"もく",kanji:"木",examples:`Thursday = もくようび。
5がつ13にち（木）  May 13th (Thursday).`,frequency:2},{id:693,hiragana:"もくようび",kanji:"木よう日",examples:`Thursday
木よう日に どこかで あいませんか。Would you like to meet somewhere on Thursday?`},{id:694,hiragana:"もしもし",examples:`hello (telephone)
もしもし、さとうですが、…。Hello, this is Sato ....`},{id:695,hiragana:"もちろん",examples:`of course
はい、もちろん。Yes of course.`},{id:696,hiragana:"もちます",examples:`have, hold, carry
バッグを もちましょうか。Shall I carry your bag?`,frequency:1},{id:697,hiragana:"もっていきます",examples:`take (something) （もってきます。= bring (something)）
パーティーに なにを もっていきますか。What are you going to take to the party?`,frequency:2},{id:698,hiragana:"もっと",examples:`more
もっと おおきい こえで はなしてください。Please speak louder.`,frequency:1},{id:699,hiragana:"もの",examples:`object, thing
いちばん いいものを えらんでください。Please choose the best one.`,frequency:13},{id:700,hiragana:"もらいます",examples:`receive
ともだちに プレゼントを もらいました。I got a present from my friend.`,frequency:1},{id:701,hiragana:"もん",examples:`gate
あそこの もんから はいってください。Please enter from the gate over there.`},{id:702,hiragana:"もんだい",examples:`question
これは むずかしいもんだいです。This is a difficult question.`,frequency:15},{id:703,hiragana:"もんだいようし",examples:`question sheet
まだ もんだいようしを みないでください。Don't look at the question paper yet.`,frequency:2},{id:704,hiragana:"もんだいれい",examples:`sample question
これは N5のもんだいれいです。This is an example of an N5 question.`,frequency:1},{id:705,hiragana:"やおや",examples:`vegetable store
ちかくの やおやで くだものを かいました。I bought some fruits at a nearby greengrocer.`},{id:706,hiragana:"やさい",examples:`vegetable
まいにち やさいを たべます。I eat vegetables every day.`,frequency:2},{id:707,hiragana:"やさしい",examples:`easy, kind/nice/sweet/gentle [i-adj.]
このテストは やさしいです。This test is easy.
かれは とても やさしいです。He is very kind.`},{id:708,hiragana:"やじるし",examples:`arrow
あそこに あかい やじるしが あります。There is a red arrow over there.`,frequency:1},{id:709,hiragana:"やすい",kanji:"安い",examples:`cheap, inexpensive
このみせの ランチは 安いですが、おいしいです。Lunch at this shop is cheap but delicious.`,frequency:4},{id:710,hiragana:"やすみ",kanji:"休み",examples:`holiday, vacation
あしたは 休みですから、かいものにいきます。I'm off tomorrow, so I'm going shopping.`,frequency:1},{id:711,hiragana:"やすみます",kanji:"休みます",examples:`have a day off, rest, be absent
あしたから １しゅうかん 休みます。I will take a week off from tomorrow.
つかれましたから、すこしやすみます。I'm tired, so I'll take a break.`,frequency:1},{id:712,hiragana:"やっつ",kanji:"八つ",examples:`eight
このドーナツを 八つ ください。Please give me eight of these donuts.`},{id:713,hiragana:"やま",kanji:"山",examples:`mountain
しゅうまつに たかい やまに のぼりました。I climbed a high mountain on the weekend.`,frequency:1},{id:714,hiragana:"やります",examples:`do
そのしごとは あとで わたしが やります。I will do the work later.`},{id:715,hiragana:"ゆうがた",examples:`early evening
なつでも ゆうがたは すずしいです。Even in the summer, it is cool in the evening.`,frequency:1},{id:716,hiragana:"ゆうびんきょく",examples:`post office
ゆうびんきょくにはあまり いきません。I don't go to the post office very often.`,frequency:1},{id:717,hiragana:"ゆうめい",kanji:"有名",examples:`famous [na-adj.]
これは すごく有名なアニメです。This is a very famous anime.`,frequency:1},{id:718,hiragana:"ゆき",examples:`snow
ふゆは たくさん ゆきが ふります。In winter, there are many snowfalls.`,frequency:2},{id:719,hiragana:"ゆっくり(と)",examples:`slowly
もうすこし ゆっくり はなしてください。Please speak a little more slowly.`},{id:720,hiragana:"ようか",kanji:"八日",examples:`the eight day of the month, eight days
きょうは 八日、きんようびです。Today is the 8th, Friday.`},{id:721,hiragana:"ようふく",examples:`(western) clothes
ともだちのたんじょうびにようふくを あげました。I gave clothes to my friend's birthday.`},{id:722,hiragana:"よく",examples:`often
よく カフェで しごとを します。I often work at a nearby cafe.`},{id:723,hiragana:"よこ",examples:`the side
テレビの よこに スイッチが あります。There is a switch next to the TV.`,frequency:1},{id:724,hiragana:"よっつ",kanji:"四つ",examples:`four
アイスコーヒーを 四つ ください。Please give me four iced coffees.`,frequency:1},{id:725,hiragana:"よびます",examples:`call, invite
おみせの ひとを よびましょう。Let's call the shop staff.`,frequency:1},{id:726,hiragana:"よみます",kanji:"読みます",examples:`read
むすめは よく ほんを 読みます。My daughter often reads books.`,frequency:5},{id:727,hiragana:"よる",kanji:"夜",examples:`night
あしたの夜 カフェで ともだちに あいます。I'll see my friends at the cafe tomorrow night.`,frequency:6},{id:728,hiragana:"ラーメン",examples:`ramen, noodle
ときどき ラーメンを たべます。I eat ramen sometimes.`,frequency:1},{id:729,hiragana:"らいげつ",kanji:"来月",examples:`next month
たぶん 来月 シンガポールに いきます。Maybe I'm going to Singapore next month.`,frequency:1},{id:730,hiragana:"らいしゅう",kanji:"来週",examples:`next week
来週は とても いそがしいです。I will be very busy next week.`,frequency:2},{id:731,hiragana:"らいねん",kanji:"来年",examples:`next year
来年 けっこんします。I'm getting married next year.`},{id:732,hiragana:"ラジオ",examples:`radio
いまは ほとんど ラジオを ききません。I rarely listen to the radio now.`},{id:733,hiragana:"りっぱ",examples:`good, fine, fine-looking, splendid, magnificent [na-adj.]
あのひとは とても りっぱなひとです。That person is a very good person.`},{id:734,hiragana:"りゅうがくせい",examples:`student studying abroad
リンダさんは りゅうがくせいです。Linda is an international student.`},{id:735,hiragana:"りょうしん",examples:`parents
りょうしんは ハワイに すんでいます。My parents live in Hawaii.`,frequency:1},{id:736,hiragana:"りょうり",examples:`cooking
よく りょうりを します。I cook often.`,frequency:3},{id:737,hiragana:"りょこうがいしゃ",examples:`travel agency
かれは りょこうがいしゃにつとめています。He works for a travel agency.`,frequency:1},{id:738,hiragana:"りょこうします",examples:`travel
なつやすみに ともだちと りょこうします。I travel with friends for summer vacation.`},{id:739,hiragana:"りんご",examples:`apple
ネットで りんごを たくさん かいました。I bought a lot of apples online.`,frequency:1},{id:740,hiragana:"れい",examples:`example
もうすこし れいを おしえてください。Please give me a few more examples.`,frequency:6},{id:741,hiragana:"れいぞうこ",examples:`refrigerator
れいぞうこの なかに ビールが たくさん あります。There is a lot of beer in the fridge.`},{id:742,hiragana:"レコード",examples:`record
わたしの うちに レコードは ありません。There are no records in my house.`},{id:743,hiragana:"レストラン",examples:`restaurant
このレストランは とても おいしいです。This restaurant has really good food.`,frequency:4},{id:744,hiragana:"れんしゅう",examples:`practice
れんしゅうは とても たいせつです。Practice is very important.`,frequency:1},{id:745,hiragana:"れんしゅうします",examples:`practice
うちで もっと れんしゅうしてください。Please practice more at home.`},{id:746,hiragana:"ろく",kanji:"六",examples:`six
このタブレットは 六まんえんぐらいでした。This tablet cost about 60,000 yen.`,frequency:1},{id:747,hiragana:"ろっぽん",kanji:"六本",examples:`six (long objects)
コーラを 六本 ください。Please give me six colas.`,frequency:1},{id:748,hiragana:`ワイシャツ
(Yシャツ)`,examples:`business shirt (white shirt)
ワイシャツは あまり きません。I don't wear shirts very often.`},{id:749,hiragana:"わかい",examples:`young [i-adj.]
ははは ちちより ５さい わかいです。My mother is 5 years younger than my father.`,frequency:1},{id:750,hiragana:"わかります",examples:`understand, know
にほんごが わかりますか。Do you understand Japanese?`,frequency:4},{id:751,hiragana:"わすれます",examples:`forget
また パスワードをわすれました。I forgot my password again.`},{id:752,hiragana:`わたくし
(very formal)`,kanji:"私",examples:`I
私は ABC Company の さとうです。I'm Sato from ABC Company.`},{id:753,hiragana:"わたし",kanji:"私",examples:`I
私は にほんごを べんきょうしています。I'm studying Japanese.`,frequency:20},{id:754,hiragana:"わたします",examples:`hand over
これから しゅくだいを わたします。I will give you homework from now on.`,frequency:4},{id:755,hiragana:"わたります",examples:`cross
おうだんほどうを わたりましょう。Let's cross the pedestrian crossing.`},{id:756,hiragana:"わるい",examples:`bad [i-adj.]
わたしは めが わるいです。I have bad eyesight.`},{id:757,hiragana:"あ",examples:"Ah!, Oh!",frequency:7},{id:758,hiragana:"ああ",examples:"Ah!"},{id:759,hiragana:"あの",examples:"Well, Let me see."},{id:760,hiragana:"あのう",examples:"Excuse me., Well, Let me see.",frequency:1},{id:761,hiragana:"ありがとうございます。",examples:"Thank you very much.",frequency:5},{id:762,hiragana:"いいえ。",examples:"No",frequency:5},{id:763,hiragana:"いえ。",examples:"No",frequency:1},{id:764,hiragana:"いただきます。",examples:"Let's eat! (saying this before having a meal.)",frequency:2},{id:765,hiragana:"いってきます。",examples:"I am going., I am leaving.",frequency:1},{id:766,hiragana:"いらっしゃいませ。",examples:"May I help you? (at restaurant, shop)",frequency:1},{id:767,hiragana:"うーん",examples:"Well, Let me see.",frequency:1},{id:768,hiragana:"え",examples:"Oh! = えっ。",frequency:2},{id:769,hiragana:"ええ",examples:"Yes.",frequency:2},{id:770,hiragana:"えー",examples:"Well, Let me see.",frequency:1},{id:771,hiragana:"えっ",examples:"Oh! = え。",frequency:2},{id:772,hiragana:"おげんきで。",examples:"Take care of yourself."},{id:773,hiragana:"おねがいします。",examples:"Please.",frequency:2},{id:774,hiragana:"おはようございます。",examples:"Good morning."},{id:775,hiragana:"おやすみなさい。",examples:"Good night."},{id:776,hiragana:"ください。",examples:"Please give me.",frequency:3},{id:777,hiragana:"ごちそうさまでした。",examples:"I've enjoyed my meal very much. Thank you. (saying this after having a meal.)",frequency:1},{id:778,hiragana:"こちらこそ。",examples:"It is me, not you that ..."},{id:779,hiragana:"ごめんください。",examples:"Hello!, May I come in?"},{id:780,hiragana:"ごめんなさい。",examples:"Sorry."},{id:781,hiragana:"こんにちは。",examples:"Good morning., Good afternoon., Hello."},{id:782,hiragana:"こんばんは。",examples:"Good evening."},{id:783,hiragana:"さあ…",examples:"Well ..."},{id:784,hiragana:"さようなら。",examples:"Goodbye.",frequency:1},{id:785,hiragana:"しつれいしました。",examples:"I am sorry. (I am sorry to have been rude.)"},{id:786,hiragana:"しつれいします。",examples:"Excuse me.",frequency:1},{id:787,hiragana:"じゃ",examples:"then, well, well then, if so, in the case.",frequency:4},{id:788,hiragana:"じゃあ",examples:"then, well, well then, if so, in the case.",frequency:2},{id:789,hiragana:"すみません。",examples:"Excuse me.",frequency:6},{id:790,hiragana:"そうしましょう。",examples:"Let's do it.",frequency:1},{id:791,hiragana:"そうです。",examples:"That's right.",frequency:1},{id:792,hiragana:"そうですか。",examples:"I see.",frequency:4},{id:793,hiragana:"そうですね。",examples:"Oh right., Well ...",frequency:4},{id:794,hiragana:"ただいま。",examples:"I'm home., I'm back.",frequency:1},{id:795,hiragana:"では、また。",examples:"Well then, see you again."},{id:796,hiragana:"どういたしまして。",examples:"You are welcome., Not at all.",frequency:2},{id:797,hiragana:"どうぞ。",examples:"Please.",frequency:2},{id:798,hiragana:"どうも。",examples:"Thanks."},{id:799,hiragana:"どうもありがとう。",examples:"Thanks a lot.",frequency:1},{id:800,hiragana:"はい。",examples:"Yes.",frequency:11},{id:801,hiragana:"はじめまして。",examples:"Nice to see you.",frequency:1},{id:802,hiragana:"よろしく。",examples:"(Please favor me.)"}],Ga=[{character:"あ",reading:"a",dakuten:!1,yoon:!1,gojuuon:"a",kana:"hiragana"},{character:"い",reading:"i",dakuten:!1,yoon:!1,gojuuon:"i",kana:"hiragana"},{character:"う",reading:"u",dakuten:!1,yoon:!1,gojuuon:"u",kana:"hiragana"},{character:"え",reading:"e",dakuten:!1,yoon:!1,gojuuon:"e",kana:"hiragana"},{character:"お",reading:"o",dakuten:!1,yoon:!1,gojuuon:"o",kana:"hiragana"},{character:"か",reading:"ka",dakuten:!1,yoon:!1,gojuuon:"ka",kana:"hiragana"},{character:"き",reading:"ki",dakuten:!1,yoon:!1,gojuuon:"ki",kana:"hiragana"},{character:"く",reading:"ku",dakuten:!1,yoon:!1,gojuuon:"ku",kana:"hiragana"},{character:"け",reading:"ke",dakuten:!1,yoon:!1,gojuuon:"ke",kana:"hiragana"},{character:"こ",reading:"ko",dakuten:!1,yoon:!1,gojuuon:"ko",kana:"hiragana"},{character:"さ",reading:"sa",dakuten:!1,yoon:!1,gojuuon:"sa",kana:"hiragana"},{character:"し",reading:"shi",dakuten:!1,yoon:!1,gojuuon:"shi",kana:"hiragana"},{character:"す",reading:"su",dakuten:!1,yoon:!1,gojuuon:"su",kana:"hiragana"},{character:"せ",reading:"se",dakuten:!1,yoon:!1,gojuuon:"se",kana:"hiragana"},{character:"そ",reading:"so",dakuten:!1,yoon:!1,gojuuon:"so",kana:"hiragana"},{character:"た",reading:"ta",dakuten:!1,yoon:!1,gojuuon:"ta",kana:"hiragana"},{character:"ち",reading:"chi",dakuten:!1,yoon:!1,gojuuon:"chi",kana:"hiragana"},{character:"つ",reading:"tsu",dakuten:!1,yoon:!1,gojuuon:"tsu",kana:"hiragana"},{character:"て",reading:"te",dakuten:!1,yoon:!1,gojuuon:"te",kana:"hiragana"},{character:"と",reading:"to",dakuten:!1,yoon:!1,gojuuon:"to",kana:"hiragana"},{character:"な",reading:"na",dakuten:!1,yoon:!1,gojuuon:"na",kana:"hiragana"},{character:"に",reading:"ni",dakuten:!1,yoon:!1,gojuuon:"ni",kana:"hiragana"},{character:"ぬ",reading:"nu",dakuten:!1,yoon:!1,gojuuon:"nu",kana:"hiragana"},{character:"ね",reading:"ne",dakuten:!1,yoon:!1,gojuuon:"ne",kana:"hiragana"},{character:"の",reading:"no",dakuten:!1,yoon:!1,gojuuon:"no",kana:"hiragana"},{character:"は",reading:"ha",dakuten:!1,yoon:!1,gojuuon:"ha",kana:"hiragana"},{character:"ひ",reading:"hi",dakuten:!1,yoon:!1,gojuuon:"hi",kana:"hiragana"},{character:"ふ",reading:"fu",dakuten:!1,yoon:!1,gojuuon:"fu",kana:"hiragana"},{character:"へ",reading:"he",dakuten:!1,yoon:!1,gojuuon:"he",kana:"hiragana"},{character:"ほ",reading:"ho",dakuten:!1,yoon:!1,gojuuon:"ho",kana:"hiragana"},{character:"ま",reading:"ma",dakuten:!1,yoon:!1,gojuuon:"ma",kana:"hiragana"},{character:"み",reading:"mi",dakuten:!1,yoon:!1,gojuuon:"mi",kana:"hiragana"},{character:"む",reading:"mu",dakuten:!1,yoon:!1,gojuuon:"mu",kana:"hiragana"},{character:"め",reading:"me",dakuten:!1,yoon:!1,gojuuon:"me",kana:"hiragana"},{character:"も",reading:"mo",dakuten:!1,yoon:!1,gojuuon:"mo",kana:"hiragana"},{character:"や",reading:"ya",dakuten:!1,yoon:!1,gojuuon:"ya",kana:"hiragana"},{character:"ゆ",reading:"yu",dakuten:!1,yoon:!1,gojuuon:"yu",kana:"hiragana"},{character:"よ",reading:"yo",dakuten:!1,yoon:!1,gojuuon:"yo",kana:"hiragana"},{character:"ら",reading:"ra",dakuten:!1,yoon:!1,gojuuon:"ra",kana:"hiragana"},{character:"り",reading:"ri",dakuten:!1,yoon:!1,gojuuon:"ri",kana:"hiragana"},{character:"る",reading:"ru",dakuten:!1,yoon:!1,gojuuon:"ru",kana:"hiragana"},{character:"れ",reading:"re",dakuten:!1,yoon:!1,gojuuon:"re",kana:"hiragana"},{character:"ろ",reading:"ro",dakuten:!1,yoon:!1,gojuuon:"ro",kana:"hiragana"},{character:"わ",reading:"wa",dakuten:!1,yoon:!1,gojuuon:"wa",kana:"hiragana"},{character:"を",reading:"wo",dakuten:!1,yoon:!1,gojuuon:"wo",kana:"hiragana"},{character:"ん",reading:"n",dakuten:!1,yoon:!1,gojuuon:"n",kana:"hiragana"},{character:"が",reading:"ga",dakuten:!0,yoon:!1,gojuuon:"ka",kana:"hiragana"},{character:"ぎ",reading:"gi",dakuten:!0,yoon:!1,gojuuon:"ki",kana:"hiragana"},{character:"ぐ",reading:"gu",dakuten:!0,yoon:!1,gojuuon:"ku",kana:"hiragana"},{character:"げ",reading:"ge",dakuten:!0,yoon:!1,gojuuon:"ke",kana:"hiragana"},{character:"ご",reading:"go",dakuten:!0,yoon:!1,gojuuon:"ko",kana:"hiragana"},{character:"ざ",reading:"za",dakuten:!0,yoon:!1,gojuuon:"sa",kana:"hiragana"},{character:"じ",reading:"ji",dakuten:!0,yoon:!1,gojuuon:"shi",kana:"hiragana"},{character:"ず",reading:"zu",dakuten:!0,yoon:!1,gojuuon:"su",kana:"hiragana"},{character:"ぜ",reading:"ze",dakuten:!0,yoon:!1,gojuuon:"se",kana:"hiragana"},{character:"ぞ",reading:"zo",dakuten:!0,yoon:!1,gojuuon:"so",kana:"hiragana"},{character:"だ",reading:"da",dakuten:!0,yoon:!1,gojuuon:"ta",kana:"hiragana"},{character:"で",reading:"de",dakuten:!0,yoon:!1,gojuuon:"te",kana:"hiragana"},{character:"ど",reading:"do",dakuten:!0,yoon:!1,gojuuon:"to",kana:"hiragana"},{character:"ば",reading:"ba",dakuten:!0,yoon:!1,gojuuon:"ha",kana:"hiragana"},{character:"び",reading:"bi",dakuten:!0,yoon:!1,gojuuon:"hi",kana:"hiragana"},{character:"ぶ",reading:"bu",dakuten:!0,yoon:!1,gojuuon:"fu",kana:"hiragana"},{character:"べ",reading:"be",dakuten:!0,yoon:!1,gojuuon:"he",kana:"hiragana"},{character:"ぼ",reading:"bo",dakuten:!0,yoon:!1,gojuuon:"ho",kana:"hiragana"},{character:"ぱ",reading:"pa",dakuten:!0,yoon:!1,gojuuon:"ha",kana:"hiragana"},{character:"ぴ",reading:"pi",dakuten:!0,yoon:!1,gojuuon:"hi",kana:"hiragana"},{character:"ぷ",reading:"pu",dakuten:!0,yoon:!1,gojuuon:"fu",kana:"hiragana"},{character:"ぺ",reading:"pe",dakuten:!0,yoon:!1,gojuuon:"he",kana:"hiragana"},{character:"ぽ",reading:"po",dakuten:!0,yoon:!1,gojuuon:"ho",kana:"hiragana"},{character:"きゃ",reading:"kya",dakuten:!1,yoon:!0,gojuuon:"ki",kana:"hiragana"},{character:"きゅ",reading:"kyu",dakuten:!1,yoon:!0,gojuuon:"ki",kana:"hiragana"},{character:"きょ",reading:"kyo",dakuten:!1,yoon:!0,gojuuon:"ki",kana:"hiragana"},{character:"しゃ",reading:"sha",dakuten:!1,yoon:!0,gojuuon:"shi",kana:"hiragana"},{character:"しゅ",reading:"shu",dakuten:!1,yoon:!0,gojuuon:"shi",kana:"hiragana"},{character:"しょ",reading:"sho",dakuten:!1,yoon:!0,gojuuon:"shi",kana:"hiragana"},{character:"ちゃ",reading:"cha",dakuten:!1,yoon:!0,gojuuon:"chi",kana:"hiragana"},{character:"ちゅ",reading:"chu",dakuten:!1,yoon:!0,gojuuon:"chi",kana:"hiragana"},{character:"ちょ",reading:"cho",dakuten:!1,yoon:!0,gojuuon:"chi",kana:"hiragana"},{character:"にゃ",reading:"nya",dakuten:!1,yoon:!0,gojuuon:"ni",kana:"hiragana"},{character:"にゅ",reading:"nyu",dakuten:!1,yoon:!0,gojuuon:"ni",kana:"hiragana"},{character:"にょ",reading:"nyo",dakuten:!1,yoon:!0,gojuuon:"ni",kana:"hiragana"},{character:"ひゃ",reading:"hya",dakuten:!1,yoon:!0,gojuuon:"hi",kana:"hiragana"},{character:"ひゅ",reading:"hyu",dakuten:!1,yoon:!0,gojuuon:"hi",kana:"hiragana"},{character:"ひょ",reading:"hyo",dakuten:!1,yoon:!0,gojuuon:"hi",kana:"hiragana"},{character:"みゃ",reading:"mya",dakuten:!1,yoon:!0,gojuuon:"mi",kana:"hiragana"},{character:"みゅ",reading:"myu",dakuten:!1,yoon:!0,gojuuon:"mi",kana:"hiragana"},{character:"みょ",reading:"myo",dakuten:!1,yoon:!0,gojuuon:"mi",kana:"hiragana"},{character:"りゃ",reading:"rya",dakuten:!1,yoon:!0,gojuuon:"ri",kana:"hiragana"},{character:"りゅ",reading:"ryu",dakuten:!1,yoon:!0,gojuuon:"ri",kana:"hiragana"},{character:"りょ",reading:"ryo",dakuten:!1,yoon:!0,gojuuon:"ri",kana:"hiragana"},{character:"ぎゃ",reading:"gya",dakuten:!0,yoon:!0,gojuuon:"ki",kana:"hiragana"},{character:"ぎゅ",reading:"gyu",dakuten:!0,yoon:!0,gojuuon:"ki",kana:"hiragana"},{character:"ぎょ",reading:"gyo",dakuten:!0,yoon:!0,gojuuon:"ki",kana:"hiragana"},{character:"じゃ",reading:"ja",dakuten:!0,yoon:!0,gojuuon:"shi",kana:"hiragana"},{character:"じゅ",reading:"ju",dakuten:!0,yoon:!0,gojuuon:"shi",kana:"hiragana"},{character:"じょ",reading:"jo",dakuten:!0,yoon:!0,gojuuon:"shi",kana:"hiragana"},{character:"びゃ",reading:"bya",dakuten:!0,yoon:!0,gojuuon:"bi",kana:"hiragana"},{character:"びゅ",reading:"byu",dakuten:!0,yoon:!0,gojuuon:"bi",kana:"hiragana"},{character:"びょ",reading:"byo",dakuten:!0,yoon:!0,gojuuon:"bi",kana:"hiragana"},{character:"ぴゃ",reading:"pya",dakuten:!0,yoon:!0,gojuuon:"pi",kana:"hiragana"},{character:"ぴゅ",reading:"pyu",dakuten:!0,yoon:!0,gojuuon:"pi",kana:"hiragana"},{character:"ぴょ",reading:"pyo",dakuten:!0,yoon:!0,gojuuon:"pi",kana:"hiragana"},{character:"ア",reading:"a",dakuten:!1,yoon:!1,gojuuon:"a",kana:"katakana"},{character:"イ",reading:"i",dakuten:!1,yoon:!1,gojuuon:"i",kana:"katakana"},{character:"ウ",reading:"u",dakuten:!1,yoon:!1,gojuuon:"u",kana:"katakana"},{character:"エ",reading:"e",dakuten:!1,yoon:!1,gojuuon:"e",kana:"katakana"},{character:"オ",reading:"o",dakuten:!1,yoon:!1,gojuuon:"o",kana:"katakana"},{character:"カ",reading:"ka",dakuten:!1,yoon:!1,gojuuon:"ka",kana:"katakana"},{character:"キ",reading:"ki",dakuten:!1,yoon:!1,gojuuon:"ki",kana:"katakana"},{character:"ク",reading:"ku",dakuten:!1,yoon:!1,gojuuon:"ku",kana:"katakana"},{character:"ケ",reading:"ke",dakuten:!1,yoon:!1,gojuuon:"ke",kana:"katakana"},{character:"コ",reading:"ko",dakuten:!1,yoon:!1,gojuuon:"ko",kana:"katakana"},{character:"サ",reading:"sa",dakuten:!1,yoon:!1,gojuuon:"sa",kana:"katakana"},{character:"シ",reading:"shi",dakuten:!1,yoon:!1,gojuuon:"shi",kana:"katakana"},{character:"ス",reading:"su",dakuten:!1,yoon:!1,gojuuon:"su",kana:"katakana"},{character:"セ",reading:"se",dakuten:!1,yoon:!1,gojuuon:"se",kana:"katakana"},{character:"ソ",reading:"so",dakuten:!1,yoon:!1,gojuuon:"so",kana:"katakana"},{character:"タ",reading:"ta",dakuten:!1,yoon:!1,gojuuon:"ta",kana:"katakana"},{character:"チ",reading:"chi",dakuten:!1,yoon:!1,gojuuon:"chi",kana:"katakana"},{character:"ツ",reading:"tsu",dakuten:!1,yoon:!1,gojuuon:"tsu",kana:"katakana"},{character:"テ",reading:"te",dakuten:!1,yoon:!1,gojuuon:"te",kana:"katakana"},{character:"ト",reading:"to",dakuten:!1,yoon:!1,gojuuon:"to",kana:"katakana"},{character:"ナ",reading:"na",dakuten:!1,yoon:!1,gojuuon:"na",kana:"katakana"},{character:"ニ",reading:"ni",dakuten:!1,yoon:!1,gojuuon:"ni",kana:"katakana"},{character:"ヌ",reading:"nu",dakuten:!1,yoon:!1,gojuuon:"nu",kana:"katakana"},{character:"ネ",reading:"ne",dakuten:!1,yoon:!1,gojuuon:"ne",kana:"katakana"},{character:"ノ",reading:"no",dakuten:!1,yoon:!1,gojuuon:"no",kana:"katakana"},{character:"ハ",reading:"ha",dakuten:!1,yoon:!1,gojuuon:"ha",kana:"katakana"},{character:"ヒ",reading:"hi",dakuten:!1,yoon:!1,gojuuon:"hi",kana:"katakana"},{character:"フ",reading:"fu",dakuten:!1,yoon:!1,gojuuon:"fu",kana:"katakana"},{character:"ヘ",reading:"he",dakuten:!1,yoon:!1,gojuuon:"he",kana:"katakana"},{character:"ホ",reading:"ho",dakuten:!1,yoon:!1,gojuuon:"ho",kana:"katakana"},{character:"マ",reading:"ma",dakuten:!1,yoon:!1,gojuuon:"ma",kana:"katakana"},{character:"ミ",reading:"mi",dakuten:!1,yoon:!1,gojuuon:"mi",kana:"katakana"},{character:"ム",reading:"mu",dakuten:!1,yoon:!1,gojuuon:"mu",kana:"katakana"},{character:"メ",reading:"me",dakuten:!1,yoon:!1,gojuuon:"me",kana:"katakana"},{character:"モ",reading:"mo",dakuten:!1,yoon:!1,gojuuon:"mo",kana:"katakana"},{character:"ヤ",reading:"ya",dakuten:!1,yoon:!1,gojuuon:"ya",kana:"katakana"},{character:"ユ",reading:"yu",dakuten:!1,yoon:!1,gojuuon:"yu",kana:"katakana"},{character:"ヨ",reading:"yo",dakuten:!1,yoon:!1,gojuuon:"yo",kana:"katakana"},{character:"ラ",reading:"ra",dakuten:!1,yoon:!1,gojuuon:"ra",kana:"katakana"},{character:"リ",reading:"ri",dakuten:!1,yoon:!1,gojuuon:"ri",kana:"katakana"},{character:"ル",reading:"ru",dakuten:!1,yoon:!1,gojuuon:"ru",kana:"katakana"},{character:"レ",reading:"re",dakuten:!1,yoon:!1,gojuuon:"re",kana:"katakana"},{character:"ロ",reading:"ro",dakuten:!1,yoon:!1,gojuuon:"ro",kana:"katakana"},{character:"ワ",reading:"wa",dakuten:!1,yoon:!1,gojuuon:"wa",kana:"katakana"},{character:"ヲ",reading:"wo",dakuten:!1,yoon:!1,gojuuon:"wo",kana:"katakana"},{character:"ン",reading:"n",dakuten:!1,yoon:!1,gojuuon:"n",kana:"katakana"},{character:"ガ",reading:"ga",dakuten:!0,yoon:!1,gojuuon:"ka",kana:"katakana"},{character:"ギ",reading:"gi",dakuten:!0,yoon:!1,gojuuon:"ki",kana:"katakana"},{character:"グ",reading:"gu",dakuten:!0,yoon:!1,gojuuon:"ku",kana:"katakana"},{character:"ゲ",reading:"ge",dakuten:!0,yoon:!1,gojuuon:"ke",kana:"katakana"},{character:"ゴ",reading:"go",dakuten:!0,yoon:!1,gojuuon:"ko",kana:"katakana"},{character:"ザ",reading:"za",dakuten:!0,yoon:!1,gojuuon:"sa",kana:"katakana"},{character:"ジ",reading:"ji",dakuten:!0,yoon:!1,gojuuon:"shi",kana:"katakana"},{character:"ズ",reading:"zu",dakuten:!0,yoon:!1,gojuuon:"su",kana:"katakana"},{character:"ゼ",reading:"ze",dakuten:!0,yoon:!1,gojuuon:"se",kana:"katakana"},{character:"ゾ",reading:"zo",dakuten:!0,yoon:!1,gojuuon:"so",kana:"katakana"},{character:"ダ",reading:"da",dakuten:!0,yoon:!1,gojuuon:"ta",kana:"katakana"},{character:"デ",reading:"de",dakuten:!0,yoon:!1,gojuuon:"te",kana:"katakana"},{character:"ド",reading:"do",dakuten:!0,yoon:!1,gojuuon:"to",kana:"katakana"},{character:"バ",reading:"ba",dakuten:!0,yoon:!1,gojuuon:"ha",kana:"katakana"},{character:"ビ",reading:"bi",dakuten:!0,yoon:!1,gojuuon:"hi",kana:"katakana"},{character:"ブ",reading:"bu",dakuten:!0,yoon:!1,gojuuon:"fu",kana:"katakana"},{character:"ベ",reading:"be",dakuten:!0,yoon:!1,gojuuon:"he",kana:"katakana"},{character:"ボ",reading:"bo",dakuten:!0,yoon:!1,gojuuon:"ho",kana:"katakana"},{character:"パ",reading:"pa",dakuten:!0,yoon:!1,gojuuon:"ha",kana:"katakana"},{character:"ピ",reading:"pi",dakuten:!0,yoon:!1,gojuuon:"hi",kana:"katakana"},{character:"プ",reading:"pu",dakuten:!0,yoon:!1,gojuuon:"fu",kana:"katakana"},{character:"ペ",reading:"pe",dakuten:!0,yoon:!1,gojuuon:"he",kana:"katakana"},{character:"ポ",reading:"po",dakuten:!0,yoon:!1,gojuuon:"ho",kana:"katakana"},{character:"キャ",reading:"kya",dakuten:!1,yoon:!0,gojuuon:"ki",kana:"katakana"},{character:"キュ",reading:"kyu",dakuten:!1,yoon:!0,gojuuon:"ki",kana:"katakana"},{character:"キョ",reading:"kyo",dakuten:!1,yoon:!0,gojuuon:"ki",kana:"katakana"},{character:"シャ",reading:"sha",dakuten:!1,yoon:!0,gojuuon:"shi",kana:"katakana"},{character:"シュ",reading:"shu",dakuten:!1,yoon:!0,gojuuon:"shi",kana:"katakana"},{character:"ショ",reading:"sho",dakuten:!1,yoon:!0,gojuuon:"shi",kana:"katakana"},{character:"チャ",reading:"cha",dakuten:!1,yoon:!0,gojuuon:"chi",kana:"katakana"},{character:"チュ",reading:"chu",dakuten:!1,yoon:!0,gojuuon:"chi",kana:"katakana"},{character:"チョ",reading:"cho",dakuten:!1,yoon:!0,gojuuon:"chi",kana:"katakana"},{character:"ニャ",reading:"nya",dakuten:!1,yoon:!0,gojuuon:"ni",kana:"katakana"},{character:"ニュ",reading:"nyu",dakuten:!1,yoon:!0,gojuuon:"ni",kana:"katakana"},{character:"ニョ",reading:"nyo",dakuten:!1,yoon:!0,gojuuon:"ni",kana:"katakana"},{character:"ヒャ",reading:"hya",dakuten:!1,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ヒュ",reading:"hyu",dakuten:!1,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ヒョ",reading:"hyo",dakuten:!1,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ミャ",reading:"mya",dakuten:!1,yoon:!0,gojuuon:"mi",kana:"katakana"},{character:"ミュ",reading:"myu",dakuten:!1,yoon:!0,gojuuon:"mi",kana:"katakana"},{character:"ミョ",reading:"myo",dakuten:!1,yoon:!0,gojuuon:"mi",kana:"katakana"},{character:"リャ",reading:"rya",dakuten:!1,yoon:!0,gojuuon:"ri",kana:"katakana"},{character:"リュ",reading:"ryu",dakuten:!1,yoon:!0,gojuuon:"ri",kana:"katakana"},{character:"リョ",reading:"ryo",dakuten:!1,yoon:!0,gojuuon:"ri",kana:"katakana"},{character:"ギャ",reading:"gya",dakuten:!0,yoon:!0,gojuuon:"ki",kana:"katakana"},{character:"ギュ",reading:"gyu",dakuten:!0,yoon:!0,gojuuon:"ki",kana:"katakana"},{character:"ギョ",reading:"gyo",dakuten:!0,yoon:!0,gojuuon:"ki",kana:"katakana"},{character:"ジャ",reading:"ja",dakuten:!0,yoon:!0,gojuuon:"shi",kana:"katakana"},{character:"ジュ",reading:"ju",dakuten:!0,yoon:!0,gojuuon:"shi",kana:"katakana"},{character:"ジョ",reading:"jo",dakuten:!0,yoon:!0,gojuuon:"shi",kana:"katakana"},{character:"ビャ",reading:"bya",dakuten:!0,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ビュ",reading:"byu",dakuten:!0,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ビョ",reading:"byo",dakuten:!0,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ピャ",reading:"pya",dakuten:!0,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ピュ",reading:"pyu",dakuten:!0,yoon:!0,gojuuon:"hi",kana:"katakana"},{character:"ピョ",reading:"pyo",dakuten:!0,yoon:!0,gojuuon:"hi",kana:"katakana"}];var tn=H("<span> </span>"),on=H('<div class="drill-container svelte-1uha8ag"><div class="word-container svelte-1uha8ag"><span class="word svelte-1uha8ag"> </span> <span> </span> <!></div> <div class="drill-buttons-container svelte-1uha8ag"><button class="next svelte-1uha8ag">Next word</button> <button>Reveal</button> <button class="quit svelte-1uha8ag">Quit</button></div></div>'),sn=H('<div class="character svelte-1uha8ag"> </div>'),hn=H(`No words from <a href="https://www.jlpt.jp/sp/e/about/levelsummary.html">JLPT N5</a> matched
					the selected characters.`,1),ln=H('<span class="can-not-start-info"><!></span>'),un=H('<div class="main-container svelte-1uha8ag"><h1 class="svelte-1uha8ag">Japanese Kana Drill</h1> <div class="options-grid svelte-1uha8ag"><div class="table-section svelte-1uha8ag"><!></div> <div class="options-section svelte-1uha8ag"><label class="svelte-1uha8ag"><!> <span>Katakana</span></label> <hr class="svelte-1uha8ag"/> <label class="svelte-1uha8ag"><!> <span>Dakuten/Handakuten<br/> <span class="description svelte-1uha8ag">Diacritics e. g. 「が」 or 「ぷ」</span></span></label> <label class="svelte-1uha8ag"><!> <span>Yōon<br/> <span class="description svelte-1uha8ag">Diagraphs e. g. 「きゃ」 or 「しょ」</span></span></label> <hr class="svelte-1uha8ag"/> <label><span>Word length: <b class="svelte-1uha8ag"> </b><br/> <span class="description svelte-1uha8ag">Will be ignored if "Real words" selected.</span></span> <!></label> <label class="svelte-1uha8ag"><!> <span>Real words<br/> <span class="description svelte-1uha8ag">Words included in <a href="https://www.jlpt.jp/sp/e/about/levelsummary.html">JLPT N5</a> </span></span></label> <label class="svelte-1uha8ag"><!> <span>Prompt Romaji<br/> <span class="description svelte-1uha8ag">e. g. "aki" instead of 「あき」</span></span></label></div> <div class="selected-characters-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Selected Characters</h2> <span class="character-count svelte-1uha8ag"><b class="svelte-1uha8ag"> </b> character(s) selected</span> <div class="selected-characters-container svelte-1uha8ag"></div></div></div> <button class="start-drill svelte-1uha8ag">Start</button> <!></div>');function yn(a,e){ya(e,!0);let n=ca({selectedGojuuon:new Set(["a","i","u","e","o"]),katakana:!1,dakuten:!1,yoon:!1}),r=ca({wordLength:3,realWords:!1,promptRomaji:!1}),t=Ta(!1),i=Ta(ca({word:"",alt:""})),o=Ta(!1),g=sa(()=>Ga.filter(h=>!(!n.selectedGojuuon.has(h.gojuuon)||h.kana!==(n.katakana?"katakana":"hiragana")||!n.dakuten&&h.dakuten||!n.yoon&&h.yoon)).map(h=>({character:h.character,reading:h.reading}))),s=sa(()=>y(g).map(h=>h.character)),f=sa(()=>rn.filter(h=>{const m=["(",")","っ","ー","。","～","/","ゃ","ゅ","ょ"],p=h.hiragana.split(`
`)[0];for(let d=0;d<p.length;d++){const k=p.charAt(d);if(!y(s).includes(k)&&!m.includes(k))return!1}return!0})),v=sa(()=>r.realWords&&y(f).length>0||!r.realWords&&y(s).length>0);function N(){aa(t,!0),J()}function I(){aa(t,!1)}function w(h){const m=k=>Ga.find(x=>x.character===k)?.reading,p=["ゃ","ゅ","ょ"];let d="";for(let k=0;k<h.length;k++){const x=h.charAt(k),W=h.charAt(k+1),_=m(x);p.includes(x)||x==="ー"||(x==="っ"&&W?d+=m(W)?.charAt(0):W&&W==="ー"?(d+=_,d+=_?.charAt(_?.length-1)):W&&p.includes(x)?d+=m(x+W):_&&(d+=_))}return d}function J(){let h="",m="",p="";if(r.realWords){const d=y(f)[Math.floor(Math.random()*y(f).length)];h=d.hiragana,m=w(d.hiragana),d.examples&&(p+=`Meaning: "${d.examples.split(`
`)[0]}"`)}else{let d=()=>y(g)[Math.floor(Math.random()*y(g).length)];for(let k=1;k<=r.wordLength;k++){const x=d();h+=x.character,m+=x.reading}}r.promptRomaji?aa(i,{word:m,alt:h,extra:p},!0):aa(i,{word:h,alt:m,extra:p},!0),aa(o,!1)}function S(){aa(o,!0)}var l=Oa();Ee("1uha8ag",h=>{Pe(()=>{Ce.title="Japanese Kana Drill"})});var b=Za(l);{var B=h=>{var m=on(),p=c(m),d=c(p),k=c(d,!0);u(d);var x=q(d,2);let W;var _=c(x,!0);u(x);var D=q(x,2);{var F=C=>{var E=tn();let Y;var V=c(E,!0);u(E),Q(()=>{Y=na(E,1,"extra svelte-1uha8ag",null,Y,{hidden:!y(o)}),O(V,y(i).extra)}),T(C,E)};X(D,C=>{y(i).extra&&C(F)})}u(p);var j=q(p,2),A=c(j);A.__click=J;var P=q(A,2);let R;P.__click=S;var G=q(P,2);G.__click=I,u(j),u(m),Q(()=>{O(k,y(i).word),W=na(x,1,"word-alt svelte-1uha8ag",null,W,{hidden:!y(o)}),O(_,y(i).alt),R=na(P,1,"reveal svelte-1uha8ag",null,R,{revealed:y(o)})}),T(h,m)},z=h=>{var m=un(),p=q(c(m),2),d=c(p),k=c(d);nn(k,{get showKatakana(){return n.katakana},get selectedGojuuon(){return n.selectedGojuuon},set selectedGojuuon(M){n.selectedGojuuon=M}}),u(d);var x=q(d,2),W=c(x),_=c(W);oa(_,{get checked(){return n.katakana},set checked(M){n.katakana=M}}),Z(2),u(W);var D=q(W,4),F=c(D);oa(F,{get checked(){return n.dakuten},set checked(M){n.dakuten=M}}),Z(2),u(D);var j=q(D,2),A=c(j);oa(A,{get checked(){return n.yoon},set checked(M){n.yoon=M}}),Z(2),u(j);var P=q(j,4);let R;var G=c(P),C=q(c(G)),E=c(C,!0);u(C),Z(3),u(G);var Y=q(G,2);Qe(Y,{get disabled(){return r.realWords},min:1,max:10,get value(){return r.wordLength},set value(M){r.wordLength=M}}),u(P);var V=q(P,2),la=c(V);oa(la,{get checked(){return r.realWords},set checked(M){r.realWords=M}});var ra=q(la,2),ua=q(c(ra),3),ka=q(c(ua),2);u(ua),u(ra),u(V);var Pa=q(V,2),ee=c(Pa);oa(ee,{get checked(){return r.promptRomaji},set checked(M){r.promptRomaji=M}}),Z(2),u(Pa),u(x);var Ca=q(x,2),xa=q(c(Ca),2),Ea=c(xa),ne=c(Ea,!0);u(Ea),Z(),u(xa);var Na=q(xa,2);fa(Na,21,()=>y(s),ma,(M,ia)=>{var ta=sn(),ja=c(ta,!0);u(ta),Q(()=>O(ja,y(ia))),T(M,ta)}),u(Na),u(Ca),u(p);var va=q(p,2);va.__click=N;var re=q(va,2);{var ie=M=>{var ia=ln(),ta=c(ia);{var ja=$=>{var wa=ga("Please select characters to start.");T($,wa)},te=$=>{var wa=hn();Z(2),T($,wa)};X(ta,$=>{y(s).length==0?$(ja):$(te,!1)})}u(ia),T(M,ia)};X(re,M=>{y(v)||M(ie)})}u(m),Q(()=>{R=na(P,1,"word-length svelte-1uha8ag",null,R,{disabled:r.realWords}),O(E,r.wordLength),O(ka,` (${y(f).length??""} words matched).`),O(ne,y(s).length),va.disabled=!y(v)}),T(h,m)};X(b,h=>{y(t)?h(B):h(z,!1)})}T(a,l),pa()}$a(["click"]);export{yn as component};

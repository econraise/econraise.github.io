(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4863:function(e,t,s){Promise.resolve().then(s.bind(s,6911))},6911:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var a=s(3827),l=s(703),o=s(4090);function i(){let[e,t]=(0,o.useState)(0),[s,i]=(0,o.useState)(1),[n,c]=(0,o.useState)(!0),[r,d]=(0,o.useState)();(0,o.useEffect)(()=>{var e=new Audio("coin.mp3");e.volume=.2,e.onended=()=>c(!0),d(e),window.UseHackForNoobs=()=>(t(1/0),"에휴 초보")},[]);let[u,h]=(0,o.useState)([{name:"에너지 드링크",desc:"들어오는 돈 10배",price:500,image:"https://i.namu.wiki/i/tL8pLVk7xEVO6SsiiT2TzYZUyWFRLbKx7FBY9GWG0p-6rsdXqy7Kq4wsw6nBzZ-WtB5y1tsKBdavldfGspnk0g.webp",onBuy:()=>{i(10)},bought:!1},{name:"콜라",desc:"나를 위해서 콜라를 산다 ㅋㅋ (돈 초기화 주의)",price:1e3,image:"https://media.istockphoto.com/id/458464735/ko/%EC%82%AC%EC%A7%84/coca-cola.jpg?s=612x612&w=0&k=20&c=wIWNg6KH9ZuTD8hwEbR4LT4afPsTETfHHWUIYfG94o4=",onBuy:()=>{alert("축하합니다! 당신은 돈을 모두 잃으셨습니다! 하지만 괜찮아요, 콜라는 맛있으니까요!"),location.href="https://media.istockphoto.com/id/458464735/ko/%EC%82%AC%EC%A7%84/coca-cola.jpg?s=612x612&w=0&k=20&c=wIWNg6KH9ZuTD8hwEbR4LT4afPsTETfHHWUIYfG94o4="},bought:!1},{name:"치킨",desc:"배고픈 이컨이에게\n치킨을 사주자!",price:12e3,image:"https://i.namu.wiki/i/YVm0x8WHfLBtSyejD01_GTV1ITfWOJ-XODZzVTQPr386JsiBaz6Ucl1tKKxZmHiYStf_sXZBmK7AEXkEA18Tsg.webp",onBuy:()=>{alert("클리어!"),location.href="https://www.youtube.com/watch?v=4ouHTwdvQCs"},bought:!1},{name:"살인마",desc:"이컨이를 살해한다 (???????)",price:15e3,image:"https://i.namu.wiki/i/Qulvungmt0UWg4s8ZdrV_J9DveP3dmxaPTtheStB5AvzRQgjTgyEGJD23-FXUVhbVwCg3TYsYA33_PvihYHy_A.webp",onBuy:()=>{alert("당신은 경찰에 잡혀갔습니다 (경찰엔딩)"),location.href="https://www.shutterstock.com/image-vector/realistic-prison-metal-bars-isolated-260nw-1671922612.jpg"}}]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"w-full text-center p-10 bg-red-400",children:[(0,a.jsx)("h1",{className:"text-3xl drop-shadow-xl",children:"이컨이 키우기 v2"}),(0,a.jsx)("h2",{className:"text-xl drop-shadow-xl",children:"배고픈 이컨이에게 치킨을 사주세요!"})]}),(0,a.jsxs)("main",{className:"w-full text-center p-10 drop-shadow-xl",children:[(0,a.jsx)("button",{className:"text-2xl bg-blue-500 hover:bg-blue-700 transition ease-in-out duration-100 p-2 rounded-xl",onClick:()=>{t(e+s),n&&(r.play(),c(!1))},children:"돈 벌기"}),(0,a.jsxs)("p",{className:"p-3 text-2xl",children:["현재 소유하고 있는 돈: ",(0,a.jsxs)("span",{className:"text-3xl text-green-400 drop-shadow-none bg-black p-1 rounded-xl",children:[e,"원"]})]}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"bg-blue-300 p-5 w-96 rounded-xl",children:[(0,a.jsx)("p",{className:"text-3xl",children:"상점"}),u.map((s,o)=>(0,a.jsxs)("div",{className:"bg-blue-400 p-5 mt-5 rounded-xl justify-center text-left",children:[(0,a.jsx)("p",{className:"text-2xl drop-shadow-xl",children:s.name}),(0,a.jsx)("p",{className:"text-xl drop-shadow-xl p-2 bg-gray-500 rounded-xl mt-3 mb-3",children:s.desc}),(0,a.jsxs)("p",{className:"text-xl drop-shadow-xl",children:["가격: ",s.price,"원"]}),(0,a.jsx)(l.default,{className:"drop-shadow-xl",src:s.image,alt:"치킨",width:150,height:150}),(0,a.jsx)("button",{className:"text-2xl mt-5 p-2 ".concat(s.bought||e<s.price?"bg-gray-500":"bg-blue-500 hover:bg-blue-700"," transition ease-in-out duration-100 rounded-xl drop-shadow-xl"),onClick:()=>{s.onBuy(),t(e-s.price);var a=u.map(e=>e);a[o].bought=!0,h(a)},disabled:e<s.price||s.bought,children:s.bought?"품절":e<s.price?"돈 부족":"구입"})]},o))]})})]})]})}}},function(e){e.O(0,[703,971,69,744],function(){return e(e.s=4863)}),_N_E=e.O()}]);
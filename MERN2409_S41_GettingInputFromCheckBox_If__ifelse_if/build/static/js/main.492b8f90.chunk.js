(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r);a(12),a(13);var i=function(){let e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useRef)(),c=Object(n.useRef)(),u=Object(n.useRef)(),m=Object(n.useRef)(),p=Object(n.useRef)(),d=Object(n.useRef)(),h={SSC:"false",Intermediate:"false",Graduation:"false",PostGraduation:"false",Other:"false"};return console.log(h),l.a.createElement("div",null,l.a.createElement("h1",null,"Signin"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",ref:a})),l.a.createElement("div",null,l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",ref:r})),l.a.createElement("div",null,l.a.createElement("label",null,"Age"),l.a.createElement("input",{type:"number",ref:o,onBlur:e=>{(e=Number(o.current.value))<5?console.log("Infant"):e>=5&&e<18?console.log("Teenager"):e>=18&&e<30?console.log("Adult"):e>=30&&e<50?console.log("Middle Age"):e>=50&&e<80?console.log("Senior Citizen"):e>=80&&e<100?console.log("Super Senior Citizen"):console.log("Invalid Age")}})),l.a.createElement("div",null,l.a.createElement("label",null,"Gender"),l.a.createElement("input",{type:"radio",name:"Gender",ref:u,style:{height:"15px",width:"15px"},onChange:()=>c="Male"}),l.a.createElement("span",null,"Male"),l.a.createElement("input",{type:"radio",name:"Gender",ref:m,style:{height:"15px",width:"15px"},onChange:()=>c="Female"}),l.a.createElement("span",null,"Female")),l.a.createElement("div",null,l.a.createElement("label",null,"Marital Status"),l.a.createElement("input",{type:"radio",name:"MaritalStatus",style:{height:"15px",width:"15px"},onChange:()=>d="Single"}),l.a.createElement("span",null,"Single"),l.a.createElement("input",{type:"radio",name:"MaritalStatus",style:{height:"15px",width:"15px"},ref:d,onChange:()=>d="Married"}),l.a.createElement("span",null,"Married")),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",ref:i})),l.a.createElement("div",null,l.a.createElement("label",{style:{height:"15px",width:"150px"}},"Education"),l.a.createElement("input",{type:"checkbox",style:{height:"15px",width:"15px"},onChange:e=>{h.SSC=e.target.checked}}),l.a.createElement("span",null,"SSC"),l.a.createElement("input",{type:"checkbox",style:{height:"15px",width:"15px"},onChange:e=>{h.Intermediate=e.target.checked}}),l.a.createElement("span",null,"Intermediate"),l.a.createElement("input",{type:"checkbox",style:{height:"15px",width:"15px"},onChange:e=>{h.Graduation=e.target.checked}}),l.a.createElement("span",null,"Graduation"),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",style:{marginLeft:"150px",height:"15px",width:"15px"},onChange:e=>{h.PostGraduation=e.target.checked}}),l.a.createElement("span",null,"Post Graduation"),l.a.createElement("input",{type:"checkbox",style:{height:"15px",width:"15px"},onChange:e=>{h.Other=e.target.checked}}),l.a.createElement("span",null,"Other")),l.a.createElement("div",null,l.a.createElement("label",null,"State"),l.a.createElement("select",{ref:t},l.a.createElement("option",null,"Andhra Pradesh"),l.a.createElement("option",null,"Arunachal Pradesh"),l.a.createElement("option",null,"Assam"),l.a.createElement("option",null,"Bihar"),l.a.createElement("option",null,"Chhattisgarh"),l.a.createElement("option",null,"Goa"),l.a.createElement("option",null,"Gujarat"),l.a.createElement("option",null,"Haryana"),l.a.createElement("option",null,"Himachal Pradesh"),l.a.createElement("option",null,"Jammu and Kashmir"),l.a.createElement("option",null,"Jharkhand"),l.a.createElement("option",null,"Karnataka"),l.a.createElement("option",null,"Kerala"),l.a.createElement("option",null,"Madhya Pradesh"),l.a.createElement("option",null,"Maharashtra"),l.a.createElement("option",null,"Manipur"),l.a.createElement("option",null,"Meghalaya"),l.a.createElement("option",null,"Mizoram"),l.a.createElement("option",null,"Nagaland"),l.a.createElement("option",null,"Odisha"),l.a.createElement("option",null,"Punjab"),l.a.createElement("option",null,"Rajasthan"),l.a.createElement("option",null,"Sikkim"),l.a.createElement("option",null,"Tamil Nadu"),l.a.createElement("option",null,"Telangana"),l.a.createElement("option",null,"Tripura"),l.a.createElement("option",null,"Uttar Pradesh"),l.a.createElement("option",null,"Uttarakhand"),l.a.createElement("option",null,"West Bengal"),l.a.createElement("option",null,"Andaman and Nicobar Islands"),l.a.createElement("option",null,"Chandigarh"),l.a.createElement("option",null,"Dadra and Nagar Haveli and Daman and Diu"),l.a.createElement("option",null,"Delhi"),l.a.createElement("option",null,"Lakshadweep"),l.a.createElement("option",null,"Puducherry"))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:()=>{""===a.current.value||""===r.current.value||""===i.current.value?alert("Please fill all the fields"):(p="Male"===c?"Mr.":"Married"===d?"Mrs.":"Ms.",e.current.innerHTML=`${p} ${a.current.value} ${r.current.value} had Completed his ${!0===h.SSC?"SSC":""} ${!0===h.Intermediate?", Intermediate":""}\n    ${!0===h.Graduation?", Graduation":""}\n    ${!0===h.PostGraduation?", Post Graduation":""}\n    ${!0===h.Other?", Other":""} Eduction\n    and ${"Male"===c?"he":"She"} belongs to ${t.current.value} has been successfully Registered with email ${i.current.value}`),console.log(h)}},"Sign in")),l.a.createElement("label",{ref:e,style:{width:"97%",padding:"10px",color:"Green",marginTop:"10px"}})))};var c=function(){return l.a.createElement("div",null,l.a.createElement(i,null))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(c,null)),u()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.492b8f90.chunk.js.map
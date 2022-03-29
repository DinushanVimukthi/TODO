"use strict";(self["webpackChunktodo_project"]=self["webpackChunktodo_project"]||[]).push([[230],{6230:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Zo});var l=t(9835),a=t(6970);const d=(0,l.Uk)(" ToDO Dashboard "),n=(0,l.Uk)("View Todo"),i=(0,l.Uk)("Edit Todo!"),r=(0,l.Uk)("Delete Todo!"),s={class:"flex flex-center"},c={key:0,class:"full-width full-height absolute-center",style:{"z-index":"9998",background:"rgba(255, 17, 0, 0.3)"}},u={key:1,class:"full-width full-height absolute-center",style:{"z-index":"9997",background:"rgba(137, 204, 4, 0.3)"}},p={class:"text-bold text-blue-9 text-center full-width",style:{"max-width":"100px","max-height":"30px","min-height":"30px"}},m={class:"absolute-top-right"},w={class:"text-h7 q-mt-sm q-mb-xs text-center",style:{"max-width":"100px","max-height":"150px","min-height":"150px"}},g=(0,l.Uk)("Important"),h=(0,l.Uk)("Club"),D=(0,l.Uk)("Academic"),T=(0,l.Uk)("Class"),f=(0,l.Uk)("Entertainment"),v=(0,l.Uk)("Sports"),_=(0,l.Uk)("See Description");function b(e,o,t,b,k,C){const W=(0,l.up)("q-tooltip"),x=(0,l.up)("q-btn-toggle"),q=(0,l.up)("DetailedTodo"),V=(0,l.up)("AddTodo"),U=(0,l.up)("q-btn"),y=(0,l.up)("DeleteTodo"),Z=(0,l.up)("EditTodo"),A=(0,l.up)("q-popup-edit"),S=(0,l.up)("q-toggle"),Q=(0,l.up)("q-space"),I=(0,l.up)("q-card-section"),E=(0,l.up)("q-separator"),H=(0,l.up)("q-icon"),O=(0,l.up)("q-badge"),z=(0,l.up)("q-card-actions"),j=(0,l.up)("q-card"),N=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[d,(0,l.Wm)(x,{modelValue:b.model,"onUpdate:modelValue":o[0]||(o[0]=e=>b.model=e),push:"",glossy:"",class:"float-right","toggle-color":"teal",options:[{label:"View",value:"View",slot:"view"},{label:"Edit",value:"Edit",slot:"edit"},{label:"Delete",value:"Delete",slot:"delete"}]},{view:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[n])),_:1})])),edit:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[i])),_:1})])),delete:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[r])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(q,{detail:b.tododetail,title:b.todotitle,TDtag:b.todotag},null,8,["detail","title","TDtag"]),(0,l._)("div",null,[(0,l.Wm)(V),(0,l._)("div",s,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.store.todos,(e=>((0,l.wg)(),(0,l.j4)(j,{flat:"",bordered:"",class:"my-card q-ma-md relative-position",key:e.id},{default:(0,l.w5)((()=>[b.Active_Delete?((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(U,{style:{"z-index":"9999"},animation:"",class:"absolute-center",dense:"",round:"",size:"35px",color:"red",icon:"delete_forever",onClick:o[1]||(o[1]=e=>b.Delete_Confirm=!0)})])):(0,l.kq)("",!0),(0,l.Wm)(y,{todo:e},null,8,["todo"]),b.Active_Edit?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(U,{flat:"",dense:"",round:"",style:{"z-index":"9998"},class:"bg-blue-13 absolute-center",size:"35px",color:"white",icon:"edit",onClick:o=>b.loadtoedit(e)},null,8,["onClick"])])):(0,l.kq)("",!0),(0,l.Wm)(Z),(0,l.Wm)(I,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l._)("span",p,(0,a.zw)(e.Title),1),(0,l._)("div",m,[(0,l.Wm)(S,{disable:e.Done,modelValue:e.Done,"onUpdate:modelValue":o=>e.Done=o,"checked-icon":"done_all","unchecked-icon":"radio_button_unchecked"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{modelValue:e.Done,"onUpdate:modelValue":o=>e.Done=o,title:"Mark As Completed?",persistent:""},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(U,{label:"Done",onClick:o=>b.donetodo(e)},null,8,["onClick"]),[[N]]),(0,l.wy)((0,l.Wm)(U,{label:"Cancel",onClick:o=>e.Done=!1},null,8,["onClick"]),[[N]])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["disable","modelValue","onUpdate:modelValue"]),(0,l.Wm)(Q)])])),_:2},1024),(0,l.Wm)(E),(0,l.Wm)(I,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[(0,l._)("div",w,(0,a.zw)(e.ShortDescription),1)])),_:2},1024),(0,l.Wm)(E,{vertical:""}),(0,l.Wm)(I,{class:"col-5 flex flex-center"},{default:(0,l.w5)((()=>[(0,l._)("span",null,[(0,l.Wm)(H,{name:"event"}),(0,l.Uk)(" "+(0,a.zw)(e.Date),1)])])),_:2},1024)])),_:2},1024),(0,l.Wm)(E),(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[e.Important?((0,l.wg)(),(0,l.j4)(O,{key:0,class:"q-ma-sm",rounded:"",color:"red"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-red"},{default:(0,l.w5)((()=>[g])),_:1})])),_:1})):(0,l.kq)("",!0),e.Club?((0,l.wg)(),(0,l.j4)(O,{key:1,class:"q-ma-sm",rounded:"",color:"green"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-green"},{default:(0,l.w5)((()=>[h])),_:1})])),_:1})):(0,l.kq)("",!0),e.Academic?((0,l.wg)(),(0,l.j4)(O,{key:2,class:"q-ma-sm",rounded:"",color:"yellow"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-yellow"},{default:(0,l.w5)((()=>[D])),_:1})])),_:1})):(0,l.kq)("",!0),e.Class?((0,l.wg)(),(0,l.j4)(O,{key:3,class:"q-ma-sm",rounded:"",color:"orange"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-orange"},{default:(0,l.w5)((()=>[T])),_:1})])),_:1})):(0,l.kq)("",!0),e.Entertainment?((0,l.wg)(),(0,l.j4)(O,{key:4,class:"q-ma-sm",rounded:"",color:"purple"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-purple"},{default:(0,l.w5)((()=>[f])),_:1})])),_:1})):(0,l.kq)("",!0),e.Sports?((0,l.wg)(),(0,l.j4)(O,{key:5,class:"q-ma-sm",rounded:"",color:"blue"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-blue"},{default:(0,l.w5)((()=>[v])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(U,{flat:"",dense:"",color:"blue",class:"absolute-bottom-right q-ma-sm",icon:"info",onClick:o=>b.openseemore(e)},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"bg-deep-orange-3"},{default:(0,l.w5)((()=>[_])),_:1})])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))])])],64)}var k=t(499),C=t(1653),W=t(482),x=t(8570),q=t(338),V=t(4328),U=function(e,o,t,l){function a(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,d){function n(e){try{r(l.next(e))}catch(o){d(o)}}function i(e){try{r(l["throw"](e))}catch(o){d(o)}}function r(e){e.done?t(e.value):a(e.value).then(n,i)}r((l=l.apply(e,o||[])).next())}))};const y=(0,C.z)(),Z=(0,k.iH)(!0),A=(0,k.iH)(!1),S=(0,k.iH)(""),Q=(0,k.iH)(""),I=(0,k.iH)([]),E=(0,k.iH)(!1),H=(0,k.iH)(!1),O=(0,k.iH)(!1),z=(0,k.iH)(!1),j=(0,k.iH)([]),N=(0,k.iH)({ID:"",Title:"",Description:"",ShortDescription:"",Expanded:!1,Important:!1,Tags:[],Not_Important:!1,Academic:!1,Class:!1,Club:!1,Entertainment:!1,Other:!1,Sports:!1,Done:!1,Date:""});function B(e){console.log(e),e.Done=!0;const o=(0,x.iH)(q.r,"Users/"+(0,W.L)().useruid+"/UserToDO/"+e.ID),t=(0,x.iH)(q.r,"Users/"+(0,W.L)().useruid+"/UserBin/DoneToDO/"+e.ID);(0,x.Od)(o).then((()=>{(0,x.t8)(t,e).then((()=>{V.Z.create({message:"Todo is done",color:"positive",position:"bottom",icon:"done_outline"})}))}))}function M(e){console.log("edit",e),console.log("edit tmp",N.value);const o=(0,x.iH)(q.r,"Users/"+(0,W.L)().useruid+"/UserToDO/"+e.ID);(0,x.t8)(o,N.value).then((()=>{console.log("Added Todo"),N.value={ID:"",Title:"",Tags:[],Description:"",ShortDescription:"",Expanded:!1,Important:!1,Not_Important:!1,Academic:!1,Class:!1,Club:!1,Entertainment:!1,Other:!1,Sports:!1,Done:!1,Date:""}}))}function R(e){A.value=!0,S.value=e.Description,Q.value=e.Title,I.value=e.Tags}function Y(){A.value=!1}function L(){console.log("Added Todo")}function P(e){return U(this,void 0,void 0,(function*(){const o=(0,x.iH)(q.r,"Users/"+(0,W.L)().useruid+"/UserToDO/"+e.ID),t=(0,x.iH)(q.r,"Users/"+(0,W.L)().useruid+"/UserBin/ToDOBin/"+e.ID);(0,x.Od)(o).then((()=>{(0,x.t8)(t,e).then((()=>{console.log("removed")}))})),z.value=!1,V.Z.create({message:"Todo Removed",color:"red",icon:"warning"}),console.log("remove",e)}))}y.todos.forEach((e=>{j.value.push(e)}));const K=e=>((0,l.dD)("data-v-6bf1595f"),e=e(),(0,l.Cn)(),e),$={class:"text-primary text-center"},F={key:0,class:"text-center q-ma-sm"},G=K((()=>(0,l._)("div",{class:"bg-blue-2 text-bold text-h5"}," Tags ",-1))),J={class:"q-ma-sm"},X={class:"q-ma-sm text-center",style:{"margin-top":"40px"}},ee=K((()=>(0,l._)("div",{class:"text-bold text-h5 bg-blue-2"}," Description ",-1))),oe={class:"q-ma-md text-h6"};function te(e,o,t,d,n,i){const r=(0,l.up)("q-toolbar-title"),s=(0,l.up)("q-btn"),c=(0,l.up)("q-toolbar"),u=(0,l.up)("q-separator"),p=(0,l.up)("q-chip"),m=(0,l.up)("q-card-section"),w=(0,l.up)("q-card"),g=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(g,{modelValue:d.seemorecard,"onUpdate:modelValue":o[1]||(o[1]=e=>d.seemorecard=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"absolute-center"},{default:(0,l.w5)((()=>[(0,l._)("span",$,(0,a.zw)(t.title),1)])),_:1}),(0,l.Wm)(s,{flat:"",rounded:"",dense:"",class:"absolute-top-right q-ma-sm",color:"red",icon:"close",onClick:o[0]||(o[0]=e=>d.closeseemore())})])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[t.TDtag?((0,l.wg)(),(0,l.iD)("div",F,[(0,l.Wm)(u),G,(0,l.Wm)(u),(0,l._)("div",J,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.TDtag,(e=>((0,l.wg)(),(0,l.j4)(p,{class:"q-ma-sm",key:e.Tid,style:(0,a.j5)("background-color:"+e.Color),"text-color":"white",icon:"task_alt"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.TagData),1)])),_:2},1032,["style"])))),128))])])):(0,l.kq)("",!0),(0,l.Wm)(u),(0,l._)("div",X,[(0,l.Wm)(u),ee,(0,l.Wm)(u),(0,l._)("div",oe,(0,a.zw)(t.detail),1)])])),_:1})])),_:1})])),_:1},8,["modelValue"])}const le={name:"DetailedTodo.vue",props:["detail","title","TDtag"],setup(){return{seemorecard:A,closeseemore:Y}}};var ae=t(1639),de=t(2074),ne=t(4458),ie=t(1663),re=t(1973),se=t(4455),ce=t(3190),ue=t(335),pe=t(926),me=t(7691),we=t(9984),ge=t.n(we);const he=(0,ae.Z)(le,[["render",te],["__scopeId","data-v-6bf1595f"]]),De=he;ge()(le,"components",{QDialog:de.Z,QCard:ne.Z,QToolbar:ie.Z,QToolbarTitle:re.Z,QBtn:se.Z,QCardSection:ce.Z,QImg:ue.Z,QSeparator:pe.Z,QChip:me.Z});var Te=t(1957);const fe=(0,l.Uk)(" Add Tag "),ve=(0,l.Uk)("Color"),_e={class:"q-gutter-xs q-ma-sm text-h7"},be=(0,l.Uk)(" Important "),ke=(0,l.Uk)(" Academic "),Ce=(0,l.Uk)(" Club "),We=(0,l.Uk)(" Entertainment "),xe=(0,l.Uk)(" Class "),qe=(0,l.Uk)(" Sports ");function Ve(e,o,t,d,n,i){const r=(0,l.up)("q-btn"),s=(0,l.up)("q-color"),c=(0,l.up)("q-card-actions"),u=(0,l.up)("q-card"),p=(0,l.up)("q-dialog"),m=(0,l.up)("q-icon"),w=(0,l.up)("q-input"),g=(0,l.up)("q-step"),h=(0,l.up)("q-tooltip"),D=(0,l.up)("q-chip"),T=(0,l.up)("q-stepper-navigation"),f=(0,l.up)("q-stepper"),v=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{label:"Add",onClick:o[0]||(o[0]=e=>d.card=!0)}),(0,l.Wm)(p,{modelValue:d.colorcard,"onUpdate:modelValue":o[3]||(o[3]=e=>d.colorcard=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:d.color,"onUpdate:modelValue":o[1]||(o[1]=e=>d.color=e),"format-model":"hex","default-view":"palette",style:{"max-width":"250px"}},null,8,["modelValue"]),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(r,{dense:"",flat:"",color:"green",rounded:"",icon:"check_circle",onClick:o[2]||(o[2]=e=>d.chips.Color=d.color)},null,512),[[v]]),(0,l.wy)((0,l.Wm)(r,{dense:"",flat:"",class:"absolute-bottom-right q-ma-sm",color:"red",rounded:"",icon:"cancel"},null,512),[[v]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(p,{modelValue:d.card,"onUpdate:modelValue":o[25]||(o[25]=e=>d.card=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:d.step,"onUpdate:modelValue":o[24]||(o[24]=e=>d.step=e),ref:"stepper",color:"primary",animated:""},{navigation:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{disable:1===d.step&&(d.newtodo.Title.length<4||d.newtodo.Date.length<4||d.newtodo.ShortDescription.length<4)||2===d.step&&d.newtodo.Description.length<10,onClick:o[21]||(o[21]=o=>3===d.step?d.addtodo():e.$refs.stepper.next()),color:"primary",label:3===d.step?"ADD":"Continue"},null,8,["disable","label"]),d.step>1?((0,l.wg)(),(0,l.j4)(r,{key:0,flat:"",color:"primary",onClick:o[22]||(o[22]=o=>e.$refs.stepper.previous()),label:"Back",class:"q-ml-sm"})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(r,{label:"cancel",class:"q-pa-sm float-right",color:"red",icon:"cancel",onClick:o[23]||(o[23]=e=>d.ClearAll())},null,512),[[v]])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(g,{name:1,title:"Todo Details",icon:"settings",error:d.newtodo.Title.length<5||d.newtodo.Date.length<4||d.newtodo.ShortDescription.length<5,done:d.step>1},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{rounded:"",modelValue:d.newtodo.Title,"onUpdate:modelValue":o[5]||(o[5]=e=>d.newtodo.Title=e),label:" TODO Title",rules:[e=>e.length>4||"Enter a Valid Title"]},(0,l.Nv)({_:2},[d.newtodo.Title?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[4]||(o[4]=(0,Te.iM)((e=>d.newtodo.Title=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue","rules"]),(0,l.Wm)(w,{modelValue:d.newtodo.Date,"onUpdate:modelValue":o[7]||(o[7]=e=>d.newtodo.Date=e),filled:"",type:"date",hint:"TODO Date",rules:[e=>e.length>0||"Enter a Valid Date"]},(0,l.Nv)({_:2},[d.newtodo.Date?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[6]||(o[6]=(0,Te.iM)((e=>d.newtodo.Date=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue","rules"]),(0,l.Wm)(w,{modelValue:d.newtodo.ShortDescription,"onUpdate:modelValue":o[9]||(o[9]=e=>d.newtodo.ShortDescription=e),filled:"",counter:"",autogrow:"",maxlength:"50",label:"TODO Short Description",type:"textarea",rules:[e=>e.length>5||"Enter a Valid Short Description"]},(0,l.Nv)({_:2},[d.newtodo.ShortDescription?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[8]||(o[8]=(0,Te.iM)((e=>d.newtodo.ShortDescription=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue","rules"])])),_:1},8,["error","done"]),(0,l.Wm)(g,{name:2,title:"Todo Description",icon:"settings",error:""===d.newtodo.Description,done:d.newtodo.Description.length>4&&d.step>1},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:d.newtodo.Description,"onUpdate:modelValue":o[11]||(o[11]=e=>d.newtodo.Description=e),filled:"",counter:"",maxlength:"200",label:"TODO Description",type:"textarea"},(0,l.Nv)({_:2},[d.newtodo.Description?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[10]||(o[10]=(0,Te.iM)((e=>d.newtodo.Description=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue"])])),_:1},8,["error","done"]),(0,l.Wm)(g,{name:3,title:"Make Tags for TODO",icon:"create_new_folder",done:d.step>2},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:d.chips.TagData,"onUpdate:modelValue":o[14]||(o[14]=e=>d.chips.TagData=e),label:"Add New Tags",counter:"",maxlength:"12",dense:"",rules:[e=>e.length>3||"Tag should contains more than 3 characters"]},{before:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"tag"})])),hint:(0,l.w5)((()=>[fe])),append:(0,l.w5)((()=>[(0,l.Wm)(r,{round:"",dense:"",flat:"",color:"blue",icon:"color_lens",onClick:o[12]||(o[12]=e=>d.colorcard=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"bg-teal-9"},{default:(0,l.w5)((()=>[ve])),_:1})])),_:1}),(0,l.Wm)(r,{disable:d.chips.TagData.length<3,round:"",dense:"",flat:"",icon:"add",onClick:o[13]||(o[13]=e=>d.Addchip(d.chips))},null,8,["disable"])])),_:1},8,["modelValue","rules"]),(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.chipsArray,(e=>((0,l.wg)(),(0,l.j4)(D,{removable:"",key:e.Tid,onRemove:o=>d.Removechip(e),style:(0,a.j5)("background-color:"+e.Color),"text-color":"white",icon:"verified"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.TagData),1)])),_:2},1032,["onRemove","style"])))),128))]),(0,l._)("div",_e,[(0,l.Wm)(D,{selected:d.newtodo.Important,"onUpdate:selected":o[15]||(o[15]=e=>d.newtodo.Important=e),color:d.newtodo.Important?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[be])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.newtodo.Academic,"onUpdate:selected":o[16]||(o[16]=e=>d.newtodo.Academic=e),color:d.newtodo.Academic?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[ke])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.newtodo.Club,"onUpdate:selected":o[17]||(o[17]=e=>d.newtodo.Club=e),color:d.newtodo.Club?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[Ce])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.newtodo.Entertainment,"onUpdate:selected":o[18]||(o[18]=e=>d.newtodo.Entertainment=e),color:d.newtodo.Entertainment?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[We])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.newtodo.Class,"onUpdate:selected":o[19]||(o[19]=e=>d.newtodo.Class=e),color:d.newtodo.Class?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[xe])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.newtodo.Sports,"onUpdate:selected":o[20]||(o[20]=e=>d.newtodo.Sports=e),color:d.newtodo.Sports?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[qe])),_:1},8,["selected","color"])])])),_:1},8,["done"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])],64)}const Ue=(0,k.iH)([]),ye=(0,k.iH)(!1),Ze=(0,k.iH)(!1),Ae=(0,k.iH)({ID:"",Title:"",Description:"",ShortDescription:"",Tags:[],Expanded:!1,Important:!1,Not_Important:!1,Academic:!1,Class:!1,Club:!1,Entertainment:!1,Other:!1,Sports:!1,Done:!1,Date:""});function Se(){Ae.value={ID:"",Title:"",Description:"",ShortDescription:"",Tags:[],Expanded:!1,Important:!1,Not_Important:!1,Academic:!1,Class:!1,Club:!1,Entertainment:!1,Other:!1,Sports:!1,Done:!1,Date:""}}function Qe(e){console.log(e),e.Tid="chip"+(new Date).getTime(),Ue.value.push({Tid:e.Tid,TagData:e.TagData,Color:e.Color}),e.Tid="",e.TagData=""}function Ie(e){Ue.value.splice(Ue.value.indexOf(e),1)}function Ee(){const e="TDID"+(new Date).getTime();Ae.value.ID=e,Ae.value.Tags=Ue.value;const o=(0,x.iH)(q.r,"Users/"+(0,W.L)().useruid+"/UserToDO/"+e);(0,x.t8)(o,Ae.value).then((()=>{console.log("ToDo added"),ye.value=!1,Ae.value={ID:"",Title:"",Description:"",Tags:[],ShortDescription:"",Expanded:!1,Important:!1,Not_Important:!1,Academic:!1,Class:!1,Club:!1,Entertainment:!1,Other:!1,Sports:!1,Done:!1,Date:""}})).catch((()=>{console.log("ToDo not added")})),console.log(e),console.log("Add todo",Ae.value)}const He=(0,k.iH)({Tid:" ",TagData:"",Color:"#0dbd56"}),Oe={setup(){return{color:(0,k.iH)(""),step:(0,k.iH)(1),colorcard:Ze,addtodo:Ee,newtodo:Ae,card:ye,chips:He,Addchip:Qe,chipsArray:Ue,Removechip:Ie,ClearAll:Se}}};var ze=t(778),je=t(1821),Ne=t(8225),Be=t(8335),Me=t(1647),Re=t(2857),Ye=t(6858),Le=t(1992),Pe=t(2146);const Ke=(0,ae.Z)(Oe,[["render",Ve],["__scopeId","data-v-2290cad4"]]),$e=Ke;ge()(Oe,"components",{QBtn:se.Z,QDialog:de.Z,QCard:ne.Z,QColor:ze.Z,QCardActions:je.Z,QStepper:Ne.Z,QStep:Be.Z,QInput:Me.Z,QIcon:Re.Z,QTooltip:Ye.Z,QChip:me.Z,QStepperNavigation:Le.Z}),ge()(Oe,"directives",{ClosePopup:Pe.Z});const Fe={class:"bg-dark text-center"},Ge=(0,l._)("div",{class:"q-ma-sm text-h6 text-white"},"Are You Sure Want To Delete the TODO?",-1);function Je(e,o,t,a,d,n){const i=(0,l.up)("q-btn"),r=(0,l.up)("q-dialog"),s=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(r,{modelValue:a.Delete_Confirm,"onUpdate:modelValue":o[2]||(o[2]=e=>a.Delete_Confirm=e),persistent:"",style:{"z-index":"9999"}},{default:(0,l.w5)((()=>[(0,l._)("div",Fe,[Ge,(0,l.wy)((0,l.Wm)(i,{dense:"",flat:"",class:"q-ma-sm bg-red-12",label:"Delete",style:{opacity:"1"},icon:"check_circle",onClick:o[0]||(o[0]=e=>a.removeTodo(t.todo))},null,512),[[s]]),(0,l.wy)((0,l.Wm)(i,{dense:"",flat:"",class:"q-ma-sm bg-positive",label:"Cancel",style:{opacity:"1"},icon:"check_circle",onClick:o[1]||(o[1]=e=>a.Active_Delete=!0)},null,512),[[s]])])])),_:1},8,["modelValue"])}const Xe={name:"DeleteTodoVue",props:["todo"],setup(){return{Active_Delete:E,Delete_Confirm:z,removeTodo:P}}},eo=(0,ae.Z)(Xe,[["render",Je]]),oo=eo;ge()(Xe,"components",{QDialog:de.Z,QBtn:se.Z}),ge()(Xe,"directives",{ClosePopup:Pe.Z});const to=(0,l.Uk)(" Add Tag "),lo=(0,l.Uk)("Color"),ao={class:"q-gutter-xs q-ma-sm text-h7"},no=(0,l.Uk)(" Important "),io=(0,l.Uk)(" Academic "),ro=(0,l.Uk)(" Club "),so=(0,l.Uk)(" Entertainment "),co=(0,l.Uk)(" Class "),uo=(0,l.Uk)(" Sports ");function po(e,o,t,d,n,i){const r=(0,l.up)("q-color"),s=(0,l.up)("q-btn"),c=(0,l.up)("q-card-actions"),u=(0,l.up)("q-card"),p=(0,l.up)("q-dialog"),m=(0,l.up)("q-icon"),w=(0,l.up)("q-input"),g=(0,l.up)("q-step"),h=(0,l.up)("q-tooltip"),D=(0,l.up)("q-chip"),T=(0,l.up)("q-stepper-navigation"),f=(0,l.up)("q-stepper"),v=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p,{modelValue:d.colorcard,"onUpdate:modelValue":o[2]||(o[2]=e=>d.colorcard=e),persistent:"",style:{"z-index":"10999"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{modelValue:d.chips.Color,"onUpdate:modelValue":o[0]||(o[0]=e=>d.chips.Color=e),"format-model":"hex","default-view":"palette",style:{"max-width":"250px"}},null,8,["modelValue"]),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(s,{dense:"",flat:"",color:"green",rounded:"",icon:"check_circle"},null,512),[[v]]),(0,l.wy)((0,l.Wm)(s,{dense:"",flat:"",class:"absolute-bottom-right q-ma-sm",color:"red",rounded:"",icon:"cancel",onClick:o[1]||(o[1]=e=>d.chips.Color="#0dbd56")},null,512),[[v]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(p,{modelValue:d.ActiveEdit,"onUpdate:modelValue":o[24]||(o[24]=e=>d.ActiveEdit=e),persistent:"",style:{"z-index":"9999"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:d.steps,"onUpdate:modelValue":o[23]||(o[23]=e=>d.steps=e),ref:"editstepper",color:"primary",animated:""},{navigation:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{disable:1===d.steps&&(d.loadTodo.Title.length<4||d.loadTodo.Date.length<4||d.loadTodo.ShortDescription.length<4)||2===d.steps&&d.loadTodo.Description.length<10,onClick:o[20]||(o[20]=o=>3===d.steps?d.editTodo(d.loadTodo):e.$refs.editstepper.next()),color:"primary",label:3===d.steps?"Save":"Continue"},null,8,["disable","label"]),d.steps>1?((0,l.wg)(),(0,l.j4)(s,{key:0,flat:"",color:"primary",onClick:o[21]||(o[21]=o=>e.$refs.editstepper.previous()),label:"Back",class:"q-ml-sm"})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(s,{label:"cancel",class:"q-pa-sm float-right",color:"red",icon:"cancel",onClick:o[22]||(o[22]=e=>d.ClearAll())},null,512),[[v]])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(g,{name:1,title:"Todo Details",icon:"settings",error:d.loadTodo.Title.length<5||d.loadTodo.Date.length<4||d.loadTodo.ShortDescription.length<5,done:d.steps>1},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{rounded:"",modelValue:d.loadTodo.Title,"onUpdate:modelValue":o[4]||(o[4]=e=>d.loadTodo.Title=e),label:" TODO Title",rules:[e=>e.length>4||"Enter a Valid Title"]},(0,l.Nv)({_:2},[d.loadTodo.Title?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[3]||(o[3]=(0,Te.iM)((e=>d.loadTodo.Title=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue","rules"]),(0,l.Wm)(w,{modelValue:d.loadTodo.Date,"onUpdate:modelValue":o[6]||(o[6]=e=>d.loadTodo.Date=e),filled:"",type:"date",hint:"TODO Date",rules:[e=>e.length>0||"Enter a Valid Date"]},(0,l.Nv)({_:2},[d.loadTodo.Date?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[5]||(o[5]=(0,Te.iM)((e=>d.loadTodo.Date=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue","rules"]),(0,l.Wm)(w,{modelValue:d.loadTodo.ShortDescription,"onUpdate:modelValue":o[8]||(o[8]=e=>d.loadTodo.ShortDescription=e),filled:"",counter:"",autogrow:"",maxlength:"50",label:"TODO Short Description",type:"textarea",rules:[e=>e.length>5||"Enter a Valid Short Description"]},(0,l.Nv)({_:2},[d.loadTodo.ShortDescription?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[7]||(o[7]=(0,Te.iM)((e=>d.loadTodo.ShortDescription=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue","rules"])])),_:1},8,["error","done"]),(0,l.Wm)(g,{name:2,title:"Todo Description",icon:"settings",error:""===d.loadTodo.Description,done:d.loadTodo.Description.length>4&&d.steps>1},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:d.loadTodo.Description,"onUpdate:modelValue":o[10]||(o[10]=e=>d.loadTodo.Description=e),filled:"",counter:"",maxlength:"200",label:"TODO Description",type:"textarea"},(0,l.Nv)({_:2},[d.loadTodo.Description?{name:"append",fn:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"cancel",onClick:o[9]||(o[9]=(0,Te.iM)((e=>d.loadTodo.Description=""),["stop"])),class:"cursor-pointer"})]))}:void 0]),1032,["modelValue"])])),_:1},8,["error","done"]),(0,l.Wm)(g,{name:3,title:"Make Tags for TODO",icon:"create_new_folder",done:d.steps>2},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:d.chips.TagData,"onUpdate:modelValue":o[13]||(o[13]=e=>d.chips.TagData=e),label:"Add New Tags",counter:"",maxlength:"12",dense:"",rules:[e=>e.length>3||"Tag should contains more than 3 characters"]},{before:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"tag"})])),hint:(0,l.w5)((()=>[to])),append:(0,l.w5)((()=>[(0,l.Wm)(s,{round:"",dense:"",flat:"",color:"blue",icon:"color_lens",onClick:o[11]||(o[11]=e=>d.colorcard=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"bg-teal-9"},{default:(0,l.w5)((()=>[lo])),_:1})])),_:1}),(0,l.Wm)(s,{disable:d.chips.TagData.length<3,round:"",dense:"",flat:"",icon:"add",onClick:o[12]||(o[12]=e=>d.Addchip(d.chips))},null,8,["disable"])])),_:1},8,["modelValue","rules"]),(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.chipsArray,(e=>((0,l.wg)(),(0,l.j4)(D,{removable:"",key:e.Tid,onRemove:o=>d.Removechip(e),style:(0,a.j5)("background-color:"+e.Color),"text-color":"white",icon:"verified"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.TagData),1)])),_:2},1032,["onRemove","style"])))),128))]),(0,l._)("div",ao,[(0,l.Wm)(D,{selected:d.loadTodo.Important,"onUpdate:selected":o[14]||(o[14]=e=>d.loadTodo.Important=e),color:d.loadTodo.Important?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[no])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.loadTodo.Academic,"onUpdate:selected":o[15]||(o[15]=e=>d.loadTodo.Academic=e),color:d.loadTodo.Academic?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[io])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.loadTodo.Club,"onUpdate:selected":o[16]||(o[16]=e=>d.loadTodo.Club=e),color:d.loadTodo.Club?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[ro])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.loadTodo.Entertainment,"onUpdate:selected":o[17]||(o[17]=e=>d.loadTodo.Entertainment=e),color:d.loadTodo.Entertainment?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[so])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.loadTodo.Class,"onUpdate:selected":o[18]||(o[18]=e=>d.loadTodo.Class=e),color:d.loadTodo.Class?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[co])),_:1},8,["selected","color"]),(0,l.Wm)(D,{selected:d.loadTodo.Sports,"onUpdate:selected":o[19]||(o[19]=e=>d.loadTodo.Sports=e),color:d.loadTodo.Sports?"green":"red","text-color":"white",icon:"close"},{default:(0,l.w5)((()=>[uo])),_:1},8,["selected","color"])])])),_:1},8,["done"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])],64)}const mo=(0,k.iH)(!1),wo=(0,k.iH)(!1),go=(0,k.iH)(1),ho=(0,k.iH)({ID:"",Title:"",Description:"",ShortDescription:"",Tags:[],Expanded:!1,Important:!1,Not_Important:!1,Academic:!1,Class:!1,Club:!1,Entertainment:!1,Other:!1,Sports:!1,Done:!1,Date:""});function Do(e){wo.value=!0,ho.value=e}function To(e){console.log(e);const o=(0,W.L)();e.Tags=Ue.value;const t=(0,x.iH)(q.r,"Users/"+o.useruid+"/UserToDO/"+e.ID);(0,x.t8)(t,e).then((()=>{console.log("Todo Edited")})),wo.value=!1,go.value=1,Ue.value=[]}const fo=(0,k.iH)({Tid:" ",TagData:"",Color:"#0dbd56"}),vo={name:"EditTodoVue",setup(){return{steps:go,colorcard:mo,ActiveEdit:wo,ClearAll:Se,chipsArray:Ue,loadtoedit:Do,editTodo:To,Removechip:Ie,Addchip:Qe,chips:fo,loadTodo:ho}}},_o=(0,ae.Z)(vo,[["render",po]]),bo=_o;ge()(vo,"components",{QDialog:de.Z,QCard:ne.Z,QColor:ze.Z,QCardActions:je.Z,QBtn:se.Z,QStepper:Ne.Z,QStep:Be.Z,QInput:Me.Z,QIcon:Re.Z,QTooltip:Ye.Z,QChip:me.Z,QStepperNavigation:Le.Z}),ge()(vo,"directives",{ClosePopup:Pe.Z});const ko=(0,C.z)(),Co={setup(){const e=(0,k.iH)("View");return(0,l.YP)(e,(e=>{"View"==e?(E.value=!1,O.value=!1,H.value=!0):"Delete"==e?(E.value=!0,O.value=!1,H.value=!1):"Edit"==e&&(E.value=!1,O.value=!0,H.value=!1)})),{model:e,mode:(0,k.iH)(0),Active_Delete:E,Active_Edit:O,Active_View:H,removeTodo:P,dialo:(0,k.iH)(!1),Delete_Confirm:z,store:y,todostore:ko,addTodo:L,todotag:I,editTodo:M,tododetail:S,todotitle:Q,openseemore:R,editTodoFlag:Z,tmptodos:N,loadtoedit:Do,donetodo:B,seemorecard:A,expanded:(0,k.iH)(!1)}},components:{AddTodo:$e,DetailedTodo:De,DeleteTodo:oo,EditTodo:bo}};var Wo=t(8983),xo=t(592),qo=t(9640),Vo=t(136),Uo=t(990);const yo=(0,ae.Z)(Co,[["render",b],["__scopeId","data-v-67f60806"]]),Zo=yo;ge()(Co,"components",{QBtnToggle:Wo.Z,QTooltip:Ye.Z,QCard:ne.Z,QBtn:se.Z,QCardSection:ce.Z,QToggle:xo.Z,QPopupEdit:qo.Z,QSpace:Vo.Z,QSeparator:pe.Z,QIcon:Re.Z,QCardActions:je.Z,QBadge:Uo.Z}),ge()(Co,"directives",{ClosePopup:Pe.Z})}}]);
import{_ as m,s as u,l as C}from"./index.98431395.js";import{i as b,x as y,d as f,m as D,o as d,c,a as e,u as n,b as _,y as A,w,v as k,F as v,z as T,t as o,A as S,e as i,n as h,g as p,B as U}from"./vendor.3d31fa23.js";const M={},V=b('<header class="card-header"><p class="card-header-title">Component</p><button class="card-header-icon" aria-label="more options"><span class="icon"><i class="fas fa-angle-down" aria-hidden="true"></i></span></button></header><div class="card-content"><div class="content"><a href="#">@bulmaio</a>. <a href="#">#css</a><a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div><footer class="card-footer"><a href="#" class="card-footer-item">Save</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer>',3);function x(a,s){return V}var B=m(M,[["render",x]]);const g=y("tasks",{state:()=>({isClicked:!1,currentTab:"All",text:"",date:"",target:"",allTasks:[{task:"Make Bulma great again",dueDate:"2022-4-19",creator:"@johndoe",taskee:"@obodoe",checked:!0},{task:"Add some more features",dueDate:"2022-4-8",creator:"@deborahdoe",taskee:"@johndoe",checked:!1},{task:"Make a github account",dueDate:"2022-4-3",creator:"@obodoe",taskee:"@deborahdoe",checked:!1},{task:" Learn how to use github",dueDate:"2022-4-10",creator:"@deborahdoe",taskee:"@johndoe",checked:!1},{task:"add a .gitignore file",dueDate:"2022-4-1",creator:"@obodoe",taskee:"@deborahdoe",checked:!1}],forDates:[]}),actions:{addTask(){var a;if(this.text.trim().length==0){alert("Please add a task");return}if(this.target.trim().length==0){alert("Please add who to assign to");return}if(this.date.trim().length==0){alert("Please add a date");return}this.allTasks.unshift({task:this.text,dueDate:this.date,creator:(a=u.user)==null?void 0:a.handle,taskee:this.target,checked:!1}),this.text="",this.date="",this.target=""},displayTasks(){return this.currentTab=="Completed"?this.allTasks.filter(function(a){var s,r;return a.checked&&(a.taskee==((s=u.user)==null?void 0:s.handle)||a.creator==((r=u.user)==null?void 0:r.handle))}):this.currentTab=="Current"?this.allTasks.filter(function(a){var s;return!a.checked&&a.taskee==((s=u.user)==null?void 0:s.handle)}):this.currentTab=="Created"?this.allTasks.filter(function(a){var s;return a.creator==((s=u.user)==null?void 0:s.handle)&&!a.checked}):this.currentTab=="Upcoming"?(this.forDates=this.allTasks.slice(),this.forDates.sort((a,s)=>Date.parse(a.dueDate)-Date.parse(s.dueDate)),this.forDates.filter(function(a){var s,r;return!a.checked&&(a.taskee==((s=u.user)==null?void 0:s.handle)||a.creator==((r=u.user)==null?void 0:r.handle))})):this.allTasks.filter(function(a){var s,r;return a.taskee==((s=u.user)==null?void 0:s.handle)||a.creator==((r=u.user)==null?void 0:r.handle)})},filterTasksByTaskee(){return this.allTasks.filter(function(a){var s;return a.taskee==((s=u.user)==null?void 0:s.handle)&&a.checked})},showAddTask(){this.isClicked=!0},cancelAddTask(){this.isClicked=!1},displayUsers(){return C.map(function(a){return a.handle})}}}),N={class:"has-text-centered"},P={class:"panel-block"},j={class:"field"},E={class:"control has-icons-left has-icons-right"},z=e("span",{class:"icon is-left"},[e("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),F={class:"field"},I=i(" Assign to.. "),L=e("br",null,null,-1),G={class:"select is-primary"},J=e("option",{disabled:"",value:""},"Select user",-1),Y={class:"field"},q=i(" Due date.. "),H=e("br",null,null,-1),K={class:"control has-icons-left has-icons-right"},O=e("span",{class:"icon is-left"},[e("i",{class:"fa-solid fa-calendar-check","aria-hidden":"true"})],-1),Q={class:"field"},R={class:"buttons"},W=e("div",{class:"field"},null,-1),X=f({setup(a){const s=g();return D(!1),(r,l)=>(d(),c("div",null,[e("div",N,[e("button",{class:"button is-primary",type:"button",onClick:l[0]||(l[0]=(...t)=>n(s).showAddTask&&n(s).showAddTask(...t))}," Create New Task ")]),_(e("div",P,[e("form",{onSubmit:[l[6]||(l[6]=t=>n(s).addTask()),l[7]||(l[7]=w(()=>{},["prevent"]))],class:"control has-icons-left has-icons-right is-expanded"},[e("div",j,[e("p",E,[_(e("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":l[1]||(l[1]=t=>n(s).text=t),name:"text"},null,512),[[k,n(s).text]]),z])]),e("div",F,[I,L,e("div",G,[_(e("select",{"onUpdate:modelValue":l[2]||(l[2]=t=>n(s).target=t)},[J,(d(!0),c(v,null,T(n(s).displayUsers(),t=>(d(),c("option",{key:t},o(t),1))),128))],512),[[S,n(s).target]])])]),e("div",Y,[q,H,e("p",K,[_(e("input",{class:"input is-primary",type:"date",placeholder:"Assign date mm/dd/yyyy","onUpdate:modelValue":l[3]||(l[3]=t=>n(s).date=t),name:"text"},null,512),[[k,n(s).date]]),O])]),e("div",Q,[e("div",R,[e("button",{class:"button is-primary",onClick:l[4]||(l[4]=t=>n(s).addTask()),type:"button"}," Add Task "),e("button",{class:"button is-danger",type:"button",onClick:l[5]||(l[5]=(...t)=>n(s).cancelAddTask&&n(s).cancelAddTask(...t))}," Cancel ")])]),W],32)],512),[[A,n(s).isClicked]])]))}}),Z={class:"panel"},ee={class:"tabs is-boxed"},se=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),e("span",null,"Current")],-1),te=[se],ae=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fa-solid fa-pen-clip","aria-hidden":"true"})]),e("span",null,"Created")],-1),ne=[ae],le=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),e("span",null,"Completed")],-1),ie=[le],oe=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-calendar-day","aria-hidden":"true"})]),e("span",null,"Upcoming")],-1),re=[oe],de=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-calendar","aria-hidden":"true"})]),e("span",null,"All")],-1),ce=[de],ue=["onUpdate:modelValue"],he={key:0},_e=e("br",null,null,-1),pe=e("br",null,null,-1),fe={key:1},ke=e("br",null,null,-1),me=e("br",null,null,-1),be={key:2},ve=e("br",null,null,-1),Te=e("br",null,null,-1),ge={key:3},$e=e("br",null,null,-1),Ce=e("br",null,null,-1),ye=e("br",null,null,-1),De=f({setup(a){const s=g();return(r,l)=>(d(),c("nav",Z,[e("div",ee,[e("ul",null,[e("li",{class:h({"is-active":n(s).currentTab=="Current"}),onClick:l[0]||(l[0]=t=>n(s).currentTab="Current")},te,2),e("li",{class:h({"is-active":n(s).currentTab=="Created"}),onClick:l[1]||(l[1]=t=>n(s).currentTab="Created")},ne,2),e("li",{class:h({"is-active":n(s).currentTab=="Completed"}),onClick:l[2]||(l[2]=t=>n(s).currentTab="Completed")},ie,2),e("li",{class:h({"is-active":n(s).currentTab=="Upcoming"}),onClick:l[3]||(l[3]=t=>n(s).currentTab="Upcoming")},re,2),e("li",{class:h({"is-active":n(s).currentTab=="All"}),onClick:l[4]||(l[4]=t=>n(s).currentTab="All")},ce,2)])]),p(X),(d(!0),c(v,null,T(n(s).displayTasks(),t=>(d(),c("a",{key:t.task,class:"panel-block"},[_(e("input",{type:"checkbox","onUpdate:modelValue":$=>t.checked=$},null,8,ue),[[U,t.checked]]),n(s).currentTab=="Current"?(d(),c("span",he,[i(o(t.task)+" ",1),_e,i(" Due date: "+o(t.dueDate)+" ",1),pe,i(" Created by: "+o(t.creator),1)])):n(s).currentTab=="Created"?(d(),c("span",fe,[i(o(t.task)+" ",1),ke,i(" Due date: "+o(t.dueDate)+" ",1),me,i(" Assign to: "+o(t.taskee),1)])):n(s).currentTab=="Completed"?(d(),c("span",be,[i(o(t.task)+" ",1),ve,i(" Due date: "+o(t.dueDate)+" ",1),Te,i(" Completed by: "+o(t.taskee),1)])):(d(),c("span",ge,[i(o(t.task)+" ",1),$e,i(" Due date: "+o(t.dueDate)+" ",1),Ce,i(" Created by "+o(t.creator)+" ",1),ye,i(" Assign to: "+o(t.taskee),1)]))]))),128))]))}}),Ae={},we=b('<h1 class="title">Table of contents</h1><h1 class="subtitle">Intra-page navigation</h1><aside class="menu"><p class="menu-label">General</p><ul class="menu-list"><li><a>Dashboard</a></li><li><a>Customers</a></li></ul><p class="menu-label">Administration</p><ul class="menu-list"><li><a>Team Settings</a></li><li><a class="is-active">Manage Your Team</a><ul><li><a>Members</a></li><li><a>Plugins</a></li><li><a>Add a member</a></li></ul></li><li><a>Invitations</a></li><li><a>Cloud Storage Environment Settings</a></li><li><a>Authentication</a></li></ul><p class="menu-label">Transactions</p><ul class="menu-list"><li><a>Payments</a></li><li><a>Transfers</a></li><li><a>Balance</a></li></ul></aside>',3);function Se(a,s){return we}var Ue=m(Ae,[["render",Se]]);const Me={class:"section"},Ve={class:"container"},xe={class:"columns"},Be={class:"column"},Ne={class:"card"},Pe={class:"column is-6"},je={class:"column"},Fe=f({setup(a){return(s,r)=>(d(),c("div",Me,[e("div",Ve,[e("div",xe,[e("div",Be,[e("div",Ne,[p(B)])]),e("div",Pe,[p(De)]),e("div",je,[p(Ue)])])])]))}});export{Fe as default};

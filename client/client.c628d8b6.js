function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,m=!1;function p(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:p(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:k(t,r,e[r])}function N(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,r,s=!1){I(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,e,n,r){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function C(t,e,n){return R(t,e,n,$)}function H(t,e,n){return R(t,e,n,w)}function O(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return O(t," ")}function G(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function M(t,e){const n=G(t,"HTML_TAG_START",0),r=G(t,"HTML_TAG_END",n);if(n===r)return new W(void 0,e);I(t);const s=t.splice(n,r-n+1);y(s[0]),y(s[s.length-1]);const o=s.slice(1,s.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new W(o,e)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function B(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function J(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}class W extends K{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function V(t){h=t}function F(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(t){F().$$.on_mount.push(t)}function X(t){F().$$.after_update.push(t)}function Q(t){F().$$.on_destroy.push(t)}const Z=[],tt=[],et=[],nt=[],rt=Promise.resolve();let st=!1;function ot(t){et.push(t)}const it=new Set;let at=0;function ct(){const t=h;do{for(;at<Z.length;){const t=Z[at];at++,V(t),lt(t.$$)}for(V(null),Z.length=0,at=0;tt.length;)tt.pop()();for(let t=0;t<et.length;t+=1){const e=et[t];it.has(e)||(it.add(e),e())}et.length=0}while(Z.length);for(;nt.length;)nt.pop()();st=!1,it.clear(),V(t)}function lt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}const ut=new Set;let dt;function ft(){dt={r:0,c:[],p:dt}}function ht(){dt.r||s(dt.c),dt=dt.p}function mt(t,e){t&&t.i&&(ut.delete(t),t.i(e))}function pt(t,e,n,r){if(t&&t.o){if(ut.has(t))return;ut.add(t),dt.c.push((()=>{ut.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function gt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function bt(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function yt(t,e){t&&t.l(e)}function _t(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||ot((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(ot)}function $t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){-1===t.$$.dirty[0]&&(Z.push(t),st||(st=!0,rt.then(ct)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(e,n,o,i,a,c,l,u=[-1]){const d=h;V(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&wt(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const t=N(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&mt(e.$$.fragment),_t(e,n.target,n.anchor,n.customElement),m=!1,ct()}V(d)}class St{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xt=[];function Tt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!xt.length;for(const t of s)t[1](),xt.push(t,e);if(t){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const At={};var kt={owner:"iterate-ch",repo:"upptime",sites:[{name:"iterate GmbH Website",url:"https://iterate.ch/",method:"GET"},{name:"iterate GmbH JIRA",url:"https://jira.iterate.ch/",method:"GET"},{name:"iterate GmbH Bitbucket",url:"https://g.iterate.ch/",method:"GET",expectedStatusCodes:[302]},{name:"Cyberduck Website",url:"https://cyberduck.io/",method:"GET"},{name:"Cyberduck Update Check",url:"https://version.cyberduck.io/",method:"GET"},{name:"Cyberduck CLI",url:"https://duck.sh/",method:"GET"},{name:"Cyberduck Trac",url:"https://trac.cyberduck.io/",method:"GET"},{name:"Mountain Duck",url:"https://mountainduck.io/",method:"GET"},{name:"Mountain Duck Update Check",url:"https://version.mountainduck.io/",method:"GET"},{name:"Mountain Duck Payment Gateway",url:"https://reg.mountainduck.io/payment",method:"POST",expectedStatusCodes:[400]},{name:"Cyberduck Payment Gateway",url:"https://reg.cyberduck.io/payment",method:"POST",expectedStatusCodes:[402]}],"status-website":{baseUrl:"/upptime",logoUrl:"https://iterate.ch/img/iterate.svg",name:"Upptime iterate GmbH",introTitle:"Uptime monitor and status page for iterate GmbH",introMessage:"Status for sites managed by iterate GmbH",navbar:[{title:"Status",href:"/"},{title:"iterate GmbH",href:"https://iterate.ch/"}]},path:"https://iterate-ch.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Pt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Nt(e){let n,r,s,o=kt["status-website"]&&!kt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=$("img"),this.h()},l(t){n=C(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){k(n,"alt",""),c(n.src,r=kt["status-website"].logoUrl)||k(n,"src",r),k(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}(),i=kt["status-website"]&&!kt["status-website"].hideNavTitle&&function(e){let n,r,s=kt["status-website"].name+"";return{c(){n=$("div"),r=E(s)},l(t){n=C(t,"DIV",{});var e=N(n);r=O(e,s),e.forEach(y)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("div"),r=$("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=C(t,"DIV",{});var e=N(n);r=C(e,"A",{href:!0,class:!0});var a=N(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach(y),e.forEach(y),this.h()},h(){k(r,"href",kt["status-website"].logoHref||kt.path),k(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){kt["status-website"]&&!kt["status-website"].hideNavLogo&&o.p(t,e),kt["status-website"]&&!kt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&y(n),o&&o.d(),i&&i.d()}}}function It(t){let e,n,r,s,o,i=t[1].title+"";return{c(){e=$("li"),n=$("a"),r=E(i),o=S(),this.h()},l(t){e=C(t,"LI",{});var s=N(e);n=C(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=N(n);r=O(a,i),a.forEach(y),o=U(s),s.forEach(y),this.h()},h(){k(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),k(n,"href",t[1].href.replace("$OWNER",kt.owner).replace("$REPO",kt.repo)),k(n,"target",t[1].target||"_self"),k(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&k(n,"aria-current",s)},d(t){t&&y(e)}}}function Lt(e){let n,r,s,o,i,a=kt["status-website"]&&kt["status-website"].logoUrl&&Nt(),c=kt["status-website"]&&kt["status-website"].navbar&&function(t){let e,n=kt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=It(Pt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=kt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Pt(t,n,o);r[o]?r[o].p(i,s):(r[o]=It(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),l=kt["status-website"]&&kt["status-website"].navbarGitHub&&!kt["status-website"].navbar&&function(e){let n,r,s,o=kt.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=E(o),this.h()},l(t){n=C(t,"LI",{});var e=N(n);r=C(e,"A",{href:!0,class:!0});var i=N(r);s=O(i,o),i.forEach(y),e.forEach(y),this.h()},h(){k(r,"href",`https://github.com/${kt.owner}/${kt.repo}`),k(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&y(n)}}}();return{c(){n=$("nav"),r=$("div"),a&&a.c(),s=S(),o=$("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=C(t,"NAV",{class:!0});var e=N(n);r=C(e,"DIV",{class:!0});var u=N(r);a&&a.l(u),s=U(u),o=C(u,"UL",{class:!0});var d=N(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(y),u.forEach(y),e.forEach(y),this.h()},h(){k(o,"class","svelte-a08hsz"),k(r,"class","container svelte-a08hsz"),k(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){kt["status-website"]&&kt["status-website"].logoUrl&&a.p(t,e),kt["status-website"]&&kt["status-website"].navbar&&c.p(t,e),kt["status-website"]&&kt["status-website"].navbarGitHub&&!kt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&y(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Ct extends St{constructor(t){super(),Et(this,t,Rt,Lt,i,{segment:0})}}var Ht={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ht[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ot(Ut(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Gt(Ot(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ut(s[8])+'" alt="'+Ut(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ut(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Gt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ut(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Dt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Bt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",`${kt.path}/themes/${(kt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",(kt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function zt(e){let n,r;return{c(){n=$("script"),this.h()},l(t){n=C(t,"SCRIPT",{src:!0}),N(n).forEach(y),this.h()},h(){c(n.src,r=e[8].src)||k(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Jt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){k(n,"rel",e[3].rel),k(n,"href",e[3].href),k(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Kt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=C(t,"META",{name:!0,content:!0}),this.h()},h(){k(n,"name",e[3].name),k(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Wt(e){let n,r,s,o,i,a,c,u,d,f,h,m,p,b,w,E,T,A,P=Gt(kt.i18n.footer.replace(/\$REPO/,`https://github.com/${kt.owner}/${kt.repo}`))+"",I=(kt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(kt["status-website"]||{}).customHeadHtml+"";return{c(){n=new W(!1),r=x(),this.h()},l(t){n=M(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();let L=((kt["status-website"]||{}).themeUrl?qt:Bt)(e),R=(kt["status-website"]||{}).scripts&&function(t){let e,n=(kt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(kt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Dt(t,n,o);r[o]?r[o].p(i,s):(r[o]=zt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),H=(kt["status-website"]||{}).links&&function(t){let e,n=(kt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Jt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(kt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=jt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Jt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),O=(kt["status-website"]||{}).metaTags&&function(t){let e,n=(kt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Kt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(kt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Mt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Kt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&y(e)}}}(e),G=kt["status-website"].css&&function(e){let n,r,s=`<style>${kt["status-website"].css}</style>`;return{c(){n=new W(!1),r=x(),this.h()},l(t){n=M(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),j=kt["status-website"].js&&function(e){let n,r,s=`<script>${kt["status-website"].js}<\/script>`;return{c(){n=new W(!1),r=x(),this.h()},l(t){n=M(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),D=(kt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(kt["status-website"]||{}).customBodyHtml+"";return{c(){n=new W(!1),r=x(),this.h()},l(t){n=M(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();m=new Ct({props:{segment:e[0]}});const B=e[2].default,q=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(B,e,e[1],null);return{c(){I&&I.c(),n=x(),L.c(),r=$("link"),s=$("link"),o=$("link"),R&&R.c(),i=x(),H&&H.c(),a=x(),O&&O.c(),c=x(),G&&G.c(),u=x(),j&&j.c(),d=x(),f=S(),D&&D.c(),h=S(),vt(m.$$.fragment),p=S(),b=$("main"),q&&q.c(),w=S(),E=$("footer"),T=$("p"),this.h()},l(t){const e=J('[data-svelte="svelte-fmspuk"]',document.head);I&&I.l(e),n=x(),L.l(e),r=C(e,"LINK",{rel:!0,href:!0}),s=C(e,"LINK",{rel:!0,type:!0,href:!0}),o=C(e,"LINK",{rel:!0,type:!0,href:!0}),R&&R.l(e),i=x(),H&&H.l(e),a=x(),O&&O.l(e),c=x(),G&&G.l(e),u=x(),j&&j.l(e),d=x(),e.forEach(y),f=U(t),D&&D.l(t),h=U(t),yt(m.$$.fragment,t),p=U(t),b=C(t,"MAIN",{class:!0});var l=N(b);q&&q.l(l),l.forEach(y),w=U(t),E=C(t,"FOOTER",{class:!0});var g=N(E);T=C(g,"P",{}),N(T).forEach(y),g.forEach(y),this.h()},h(){k(r,"rel","stylesheet"),k(r,"href",`${kt.path}/global.css`),k(s,"rel","icon"),k(s,"type","image/svg"),k(s,"href",(kt["status-website"]||{}).faviconSvg||(kt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),k(o,"rel","icon"),k(o,"type","image/png"),k(o,"href",(kt["status-website"]||{}).favicon||"/logo-192.png"),k(b,"class","container"),k(E,"class","svelte-jbr799")},m(t,e){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),R&&R.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,c),G&&G.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),v(t,f,e),D&&D.m(t,e),v(t,h,e),_t(m,t,e),v(t,p,e),v(t,b,e),q&&q.m(b,null),v(t,w,e),v(t,E,e),g(E,T),T.innerHTML=P,A=!0},p(t,[e]){(kt["status-website"]||{}).customHeadHtml&&I.p(t,e),L.p(t,e),(kt["status-website"]||{}).scripts&&R.p(t,e),(kt["status-website"]||{}).links&&H.p(t,e),(kt["status-website"]||{}).metaTags&&O.p(t,e),kt["status-website"].css&&G.p(t,e),kt["status-website"].js&&j.p(t,e),(kt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),q&&q.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(q,B,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(B,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(mt(m.$$.fragment,t),mt(q,t),A=!0)},o(t){pt(m.$$.fragment,t),pt(q,t),A=!1},d(t){I&&I.d(t),y(n),L.d(t),y(r),y(s),y(o),R&&R.d(t),y(i),H&&H.d(t),y(a),O&&O.d(t),y(c),G&&G.d(t),y(u),j&&j.d(t),y(d),t&&y(f),D&&D.d(t),t&&y(h),$t(m,t),t&&y(p),t&&y(b),q&&q.d(t),t&&y(w),t&&y(E)}}}function Vt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Ft extends St{constructor(t){super(),Et(this,t,Vt,Wt,i,{segment:0})}}function Yt(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=E(r)},l(t){e=C(t,"PRE",{});var s=N(e);n=O(s,r),s.forEach(y)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&j(n,r)},d(t){t&&y(e)}}}function Xt(e){let n,r,s,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Yt(e);return{c(){r=S(),s=$("h1"),o=E(e[0]),i=S(),a=$("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){J('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=U(t),s=C(t,"H1",{class:!0});var n=N(s);o=O(n,e[0]),n.forEach(y),i=U(t),a=C(t,"P",{class:!0});var h=N(a);c=O(h,d),h.forEach(y),l=U(t),f&&f.l(t),u=x(),this.h()},h(){k(s,"class","svelte-17w3omn"),k(a,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&d!==(d=t[1].message+"")&&j(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Yt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&y(r),t&&y(s),t&&y(i),t&&y(a),t&&y(l),f&&f.d(t),t&&y(u)}}}function Qt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Zt extends St{constructor(t){super(),Et(this,t,Qt,Xt,i,{status:0,error:1})}}function te(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&vt(n.$$.fragment),r=x()},l(t){n&&yt(n.$$.fragment,t),r=x()},m(t,e){n&&_t(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?gt(o,[bt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ft();const t=n;pt(t.$$.fragment,1,0,(()=>{$t(t,1)})),ht()}i?(n=new i(a()),vt(n.$$.fragment),mt(n.$$.fragment,1),_t(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&mt(n.$$.fragment,t),s=!0)},o(t){n&&pt(n.$$.fragment,t),s=!1},d(t){t&&y(r),n&&$t(n,t)}}}function ee(t){let e,n;return e=new Zt({props:{error:t[0],status:t[1]}}),{c(){vt(e.$$.fragment)},l(t){yt(e.$$.fragment,t)},m(t,r){_t(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){pt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function ne(t){let e,n,r,s;const o=[ee,te],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ft(),pt(i[c],1,1,(()=>{i[c]=null})),ht(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),mt(n,1),n.m(r.parentNode,r))},i(t){s||(mt(n),s=!0)},o(t){pt(n),s=!1},d(t){i[e].d(t),t&&y(r)}}}function re(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ne]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Ft({props:o}),{c(){vt(n.$$.fragment)},l(t){yt(n.$$.fragment,t)},m(t,e){_t(n,t,e),r=!0},p(t,[e]){const r=12&e?gt(s,[4&e&&{segment:t[2][0]},8&e&&bt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(mt(n.$$.fragment,t),r=!0)},o(t){pt(n.$$.fragment,t),r=!1},d(t){$t(n,t)}}}function se(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return X(l),u=At,d=r,F().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class oe extends St{constructor(t){super(),Et(this,t,se,re,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ie=[],ae=[{js:()=>Promise.all([import("./index.0f3260b5.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.4bde901e.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.8a2d9d9b.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.4db612ab.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.48bc00f2.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ce=(le=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:le(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:le(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var le;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ue(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function de(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let fe,he=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},pe={};let ge,be;function ve(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ye(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ge))return null;let e=t.pathname.slice(ge.length);if(""===e&&(e="/"),!ie.some((t=>t.test(e))))for(let n=0;n<ce.length;n+=1){const r=ce[n],s=r.pattern.exec(e);if(s){const n=ve(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function _e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=de(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ye(s);if(o){Ee(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),me.pushState({id:fe},"",s.href)}}function $e(){return{x:pageXOffset,y:pageYOffset}}function we(t){if(pe[fe]=$e(),t.state){const e=ye(new URL(location.href));e?Ee(e,t.state.id):location.href=location.href}else!function(t){he=t}(he+1),function(t){fe=t}(he),me.replaceState({id:fe},"",location.href)}function Ee(t,e,n,r){return ue(this,void 0,void 0,(function*(){const s=!!e;if(s)fe=e;else{const t=$e();pe[fe]=t,fe=e=++he,pe[fe]=n?t:{x:0,y:0}}if(yield be(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=pe[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),pe[fe]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Se(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let xe,Te=null;function Ae(t){const e=de(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ye(new URL(t,Se(document)));if(e)Te&&t===Te.href||(Te={href:t,promise:ze(e)}),Te.promise}(e.href)}function ke(t){clearTimeout(xe),xe=setTimeout((()=>{Ae(t)}),20)}function Pe(t,e={noscroll:!1,replaceState:!1}){const n=ye(new URL(t,Se(document)));if(n){const r=Ee(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:fe},"",t),r}return location.href=t,new Promise((()=>{}))}const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ie,Le,Re,Ce=!1,He=[],Oe="{}";const Ue={page:function(t){const e=Tt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Tt(null),session:Tt(Ne&&Ne.session)};let Ge,Me,je;function De(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Be(t){return ue(this,void 0,void 0,(function*(){Ie&&Ue.preloading.set(!0);const e=function(t){return Te&&Te.href===t.href?Te.promise:ze(t)}(t),n=Le={},r=yield e,{redirect:s}=r;if(n===Le)if(s)yield Pe(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield qe(n,e,De(e,t.page))}}))}function qe(t,e,n){return ue(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Ie?Ie.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield Re},e.notify=Ue.page.notify,Ie=new oe({target:je,props:e,hydrate:!0})),He=t,Oe=JSON.stringify(n.query),Ce=!0,Me=!1}))}function ze(t){return ue(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Re){const t=()=>({});Re=Ne.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ge)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ue(this,void 0,void 0,(function*(){const d=r[a];if(function(t,e,n,r){if(r!==Oe)return!0;const s=He[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:d};const f=c++;let h;if(Me||u||!He[a]||He[a].part!==e.i){u=!1;const{default:r,preload:s}=yield ae[e.i].js();let o;o=Ce||!Ne.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ge):{}:Ne.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:e.i}}else h=He[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Je,Ke,We;Ue.session.subscribe((t=>ue(void 0,void 0,void 0,(function*(){if(Ge=t,!Ce)return;Me=!0;const e=ye(new URL(location.href)),n=Le={},{redirect:r,props:s,branch:o}=yield ze(e);n===Le&&(r?yield Pe(r.location,{replaceState:!0}):yield qe(o,s,De(s,e.page)))})))),Je={target:document.querySelector("#sapper")},Ke=Je.target,je=Ke,We=Ne.baseUrl,ge=We,be=Be,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",_e),addEventListener("popstate",we),addEventListener("touchstart",Ae),addEventListener("mousemove",ke),Ne.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ne;Re||(Re=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Re},level1:{props:{status:o,error:i},component:Zt},segments:s},c=ve(n);qe([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:he},"",e);const n=ye(new URL(location.href));if(n)return Ee(n,he,!0,t)}));export{j as A,T as B,s as C,tt as D,M as E,c as F,d as G,W as H,B as I,J,Gt as K,w as L,H as M,Pe as N,D as O,A as P,e as Q,P as R,St as S,gt as T,X as U,Q as V,u as W,bt as X,ot as Y,z as Z,S as a,C as b,U as c,N as d,$ as e,y as f,k as g,v as h,Et as i,ft as j,ht as k,mt as l,E as m,O as n,Y as o,g as p,t as q,kt as r,i as s,pt as t,x as u,_ as v,vt as w,yt as x,_t as y,$t as z};

import __inject_styles from './inject_styles.803b7e80.js';
/* eslint-disable */
/* Source: https://platform.linkedin.com/badges/js/profile.js */
export default function linkedIn(e){e.LIRenderAll=function(){function t(e){var t,n=e.getAttribute("data-size"),a=e.getAttribute("data-locale"),o=e.getAttribute("data-type"),r=e.getAttribute("data-theme"),d=e.getAttribute("data-vanity"),i=e.getAttribute("data-version"),c=e.getAttribute("data-ei"),l=e.getAttribute("data-entity"),p=e.getAttribute("data-iscreate"),s=Math.round(1e6*Math.random());c=c?"https://badges.linkedin-ei.com/":"https://badges.linkedin.com/",a=["locale="+encodeURIComponent(a),"badgetype="+encodeURIComponent(o),"badgetheme="+encodeURIComponent(r),"uid="+encodeURIComponent(s),"version="+encodeURIComponent(i)];"v2"===i?(c+="view",a.push("badgesize="+encodeURIComponent(n)),a.push("entity="+encodeURIComponent(l)),a=a.concat((t=e,Array.prototype.slice.call(t.attributes).filter(function(e){return-1!==e.name.lastIndexOf("data-key-",0)}).map(function(e){return encodeURIComponent(e.name.replace("data-","").toLowerCase())+"="+encodeURIComponent(e.value)})))):(c+="profile",a.push("maxsize="+encodeURIComponent(n)),a.push("trk="+encodeURIComponent("profile-badge")),a.push("vanityname="+encodeURIComponent(d))),p&&a.push("fromCreate=true"),n=c+"?"+a.join("&"),e.setAttribute("data-uid",s),(e=document.createElement("script")).src=n,u.push(e),document.body.appendChild(e)}function n(e,t){if("SCRIPT"!==e.tagName||l[e.src]||t&&(!t||e.getAttribute("data-isartdeco")))for(var a=0,o=e.childNodes;a<o.length;)n(o[a++],t);else e.parentNode.replaceChild(function(e){for(var t=document.createElement("script"),n=e.attributes.length-1;0<=n;n--)t.setAttribute(e.attributes[n].name,e.attributes[n].value);return t}(e),e),l[e.src]=!0;return e}var a,o,r,d,i=0,c=0,u=[],l={},p=Array.prototype.slice.call(document.querySelectorAll(".LI-profile-badge, .LI-entity-badge"));for(a=0,o=p.length;a<o;a++)r=p[a],d=r.getAttribute("data-rendered"),d||(c++,r.setAttribute("data-rendered",!0),t(r));e.LIBadgeCallback=function(t,a){var r,d,l,s;for(i++,r=0,o=p.length;r<o;r++)d=p[r],s=d.getAttribute("data-iscreate"),l=parseInt(d.getAttribute("data-uid"),10),l===a&&(l=document.createElement("div"),l.innerHTML=t,d.appendChild(l),n(d,s));(i>=c&&0<c||i>=p.length)&&(delete e.LIBadgeCallback,u.map(function(e){document.body.removeChild(e)}))}},e.LIRenderAll()}
!function(){function e(){var c=["localhost","security-hub.vaimo.network","gate.rapidsec.net"],a=document.location.hostname+document.location.pathname,r=n();function o(e){var n=!1;return e.forEach(function(e){var t,o=e.name,t=(t=o.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i))&&t[1];t.replace(/^www\./,"")===document.location.hostname.replace(/^www\./,"")||-1<c.indexOf(t)||-1!==t.indexOf(".nr-data.net",t.length-12)||("undefined"==typeof r[a].domains[t]&&(r[a].domains[t]={}),"undefined"==typeof r[a].domains[t][o]&&(r[a].domains[t][o]=!1,r[a].done=!1,n=!0))}),n}function i(){var e,t={};return e=n(),Object.keys(e).forEach(function(o){"undefined"==typeof r[o]&&(r[o]={domains:{}});var n=e[o].domains;Object.keys(n).forEach(function(t){"undefined"==typeof r[o].domains[t]&&(r[o].domains[t]={}),Object.keys(n[t]).forEach(function(e){"undefined"==typeof r[o].domains[t][e]&&(r[o].domains[t][e]=n[t][e])})})}),Object.keys(r).forEach(function(e){var c,a,i;r[e].done||(c=!1,a=r[e].domains,i={},Object.keys(a).forEach(function(e){var t=a[e],o=!1,n=[];Object.keys(t).forEach(function(e){t[e]||(c=o=!0,n.push(e))}),o&&(i[e]=n)}),c?t[e]=i:r[e].done=!0)}),t}function n(){var e=localStorage.getItem("dbm2"),t=localStorage.getItem("dbm2time"),o={},n=new Date;if(t<n.getTime()-18e5)return localStorage.setItem("dbm2time",n.getTime()),f(),o;try{o=JSON.parse(e)}catch(c){}return o="object"!=typeof o||null===o?{}:o}function f(){var e=!1,t=JSON.stringify(r);try{localStorage.setItem("dbm2",t)}catch(o){localStorage.removeItem("dbm2"),e=!0}e&&(clearInterval(l),clearInterval(d),s())}function s(){document.cookie="dbm2=fail; SameSite=Strict"}"undefined"==typeof r[a]&&(r[a]={domains:{},done:!0}),d=setTimeout(function m(){try{for(var e=0;e<window.frames.length;e++)try{o(window.frames[e].performance.getEntriesByType("resource"))}catch(t){}o(window.performance.getEntriesByType("resource"))&&f(),d=setTimeout(m,250)}catch(t){clearTimeout(l),s()}},250),l=setTimeout(function u(){try{var e,n=i();0<Object.keys(n).length&&((e=new XMLHttpRequest).open("POST","https://security-hub.vaimo.network/api/v2.1/dbm",!0),e.setRequestHeader("Content-Type","text/plain"),e.send(JSON.stringify({src:window.location.href,resources:n}))),0<Object.keys(n).length&&(Object.keys(n).forEach(function(o){Object.keys(n[o]).forEach(function(t){n[o][t].forEach(function(e){r[o].domains[t][e]=!0})}),r[o].done=!0}),f()),l=setTimeout(u,2e3)}catch(t){clearTimeout(d),s()}},2e3)}try{var d,l;if("object"==typeof window.performance&&"function"==typeof window.performance.getEntriesByType||set_failure_cookie(),""===function(e){let t=document.cookie.match("(^|[^;]+)\\s*"+e+"\\s*=\\s*([^;]+)");return t?t.pop():""}("dbm2"))try{e()}catch(t){clearTimeout(l),clearTimeout(d),set_failure_cookie()}}catch(t){set_failure_cookie()}}();
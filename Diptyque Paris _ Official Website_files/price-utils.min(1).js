define(['jquery','underscore','mage/translate'],function($,_,$t){'use strict';var globalPriceFormat={requiredPrecision:2,integerRequired:1,decimalSymbol:',',groupSymbol:',',groupLength:','};function stringPad(string,times){return(new Array(times+1)).join(string);}
function formatPrice(amount,format,isShowSign){if(amount==0){return $t('Free');}
var s='',precision,integerRequired,decimalSymbol,groupSymbol,groupLength,pattern,i,pad,j,re,r,am;format=_.extend(globalPriceFormat,format);precision=isNaN(format.requiredPrecision=Math.abs(format.requiredPrecision))?2:format.requiredPrecision;if(amount-Math.floor(amount)==0){precision=0;}
integerRequired=isNaN(format.integerRequired=Math.abs(format.integerRequired))?1:format.integerRequired;decimalSymbol=format.decimalSymbol===undefined?',':format.decimalSymbol;groupSymbol=format.groupSymbol===undefined?'.':format.groupSymbol;groupLength=format.groupLength===undefined?3:format.groupLength;pattern=format.pattern||'%s';if(isShowSign===undefined||isShowSign===true){s=amount<0?'-':isShowSign?'+':'';}else if(isShowSign===false){s='';}
pattern=pattern.indexOf('{sign}')<0?s+pattern:pattern.replace('{sign}',s);i=parseInt(amount=Number(Math.round(Math.abs(+amount||0)+'e+'+precision)+('e-'+precision)),10)+'';pad=i.length<integerRequired?integerRequired-i.length:0;i=stringPad('0',pad)+i;j=i.length>groupLength?i.length%groupLength:0;re=new RegExp('(\\d{'+groupLength+'})(?=\\d)','g');am=Number(Math.round(Math.abs(amount-i)+'e+'+precision)+('e-'+precision));r=(j?i.substr(0,j)+groupSymbol:'')+
i.substr(j).replace(re,'$1'+groupSymbol)+
(precision?decimalSymbol+am.toFixed(2).replace(/-/,0).slice(2):'');return pattern.replace('%s',r).replace(/^\s\s*/,'').replace(/\s\s*$/,'');}
function objectDeepClone(obj){return JSON.parse(JSON.stringify(obj));}
function findOptionId(element){var re,id,name;if(!element){return id;}
name=$(element).attr('name');if(name.indexOf('[')!==-1){re=/\[([^\]]+)?\]/;}else{re=/_([^\]]+)?_/;}
id=re.exec(name)&&re.exec(name)[1];if(id){return id;}}
return{formatPrice:formatPrice,deepClone:objectDeepClone,strPad:stringPad,findOptionId:findOptionId};});
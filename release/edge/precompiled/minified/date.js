var U,Va,Wa=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],Xa="({t})?\\s*(2[0-4]|[01]?\\d(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",Ya={},Za,$a,ab,bb=[],cb=[{ba:"f{1,4}|ms|milliseconds",format:function(a){return V(a,"Milliseconds")}},{ba:"ss?|seconds",format:function(a){return V(a,"Seconds")}},{ba:"mm?|minutes",format:function(a){return V(a,
"Minutes")}},{ba:"hh?|hours|12hr",format:function(a){a=V(a,"Hours");return a===0?12:a-pa(a/13)*12}},{ba:"HH?|24hr",format:function(a){return V(a,"Hours")}},{ba:"dd?|date|day",format:function(a){return V(a,"Date")}},{ba:"dow|weekday",la:k,format:function(a,b,c){a=V(a,"Day");return b.weekdays[a+(c-1)*7]}},{ba:"MM?",format:function(a){return V(a,"Month")+1}},{ba:"mon|month",la:k,format:function(a,b,c){a=V(a,"Month");return b.months[a+(c-1)*12]}},{ba:"y{2,4}|year",format:function(a){return V(a,"FullYear")}},
{ba:"[Tt]{1,2}",format:function(a,b,c,d){if(b.ampm.length==0)return"";a=V(a,"Hours");b=b.ampm[pa(a/12)];if(d.length===1)b=b.slice(0,1);if(d.slice(0,1)==="T")b=b.toUpperCase();return b}},{ba:"z{1,4}|tz|timezone",text:k,format:function(a,b,c,d){a=a.getUTCOffset();if(d=="z"||d=="zz")a=a.replace(/(\d{2})(\d{2})/,function(e,g){return P(g,d.length)});return a}},{ba:"iso(tz|timezone)",format:function(a){return a.getUTCOffset(k)}},{ba:"ord",format:function(a){a=V(a,"Date");return a+ra(a)}}],db=[{$:"year",
method:"FullYear",ja:k,da:function(a){return(365+(a?a.isLeapYear()?1:0:0.25))*24*60*60*1E3}},{$:"month",method:"Month",ja:k,da:function(a,b){var c=30.4375,d;if(a){d=a.daysInMonth();if(b<=d.days())c=d}return c*24*60*60*1E3}},{$:"week",method:"Week",da:aa(6048E5)},{$:"day",method:"Date",ja:k,da:aa(864E5)},{$:"hour",method:"Hours",da:aa(36E5)},{$:"minute",method:"Minutes",da:aa(6E4)},{$:"second",method:"Seconds",da:aa(1E3)},{$:"millisecond",method:"Milliseconds",da:aa(1)}],eb={};
function fb(a){na(this,a);this.ga=bb.concat()}
fb.prototype={getMonth:function(a){return A(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},oa:function(a){var b;return A(a)?a:a&&(b=this.numbers.indexOf(a))!==-1?(b+1)%10:1},ta:function(a){var b=this;return a.replace(r(this.num,"g"),function(c){return b.oa(c)||""})},ra:function(a){return U.units[this.units.indexOf(a)%8]},ua:function(a){return this.na(a,a[2]>0?"future":"past")},qa:function(a){return this.na(gb(a),"duration")},va:function(a){a=a||this.code;
return a==="en"||a==="en-US"?k:this.variant},ya:function(a){return a===this.ampm[0]},za:function(a){return a&&a===this.ampm[1]},na:function(a,b){var c,d,e=a[0],g=a[1],f=a[2],j=this[b]||this.relative;if(z(j))return j.call(this,e,g,f,b);d=this.units[(this.plural&&e>1?1:0)*8+g]||this.units[g];if(this.capitalizeUnit)d=hb(d);c=this.modifiers.filter(function(i){return i.name=="sign"&&i.value==(f>0?1:-1)})[0];return j.replace(/\{(.*?)\}/g,function(i,h){switch(h){case "num":return e;case "unit":return d;
case "sign":return c.src}})},sa:function(){return this.ma?[this.ma].concat(this.ga):this.ga},addFormat:function(a,b,c,d,e){var g=c||[],f=this,j;a=a.replace(/\s+/g,"[-,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(i,h){var m,o,w,C=h.match(/\?$/);w=h.match(/^(\d+)\??$/);var J=h.match(/(\d)(?:-(\d))?/),O=h.replace(/[^a-z]+$/,"");if(w)m=f.tokens[w[1]];else if(f[O])m=f[O];else if(f[O+"s"]){m=f[O+"s"];if(J){o=[];m.forEach(function(ea,Da){var R=Da%(f.units?8:m.length);if(R>=J[1]&&R<=(J[2]||J[1]))o.push(ea)});
m=o}m=ib(m)}if(w)w="(?:"+m+")";else{c||g.push(O);w="("+m+")"}if(C)w+="?";return w});if(b){b=jb(Xa,f,e);e=["t","[\\s\\u3000]"].concat(f.timeMarker);j=a.match(/\\d\{\d,\d\}\)+\??$/);kb(f,"(?:"+b+")[,\\s\\u3000]+?"+a,Wa.concat(g),d);kb(f,a+"(?:[,\\s]*(?:"+e.join("|")+(j?"+":"*")+")"+b+")?",g.concat(Wa),d)}else kb(f,a,g,d)}};function lb(a,b){var c;B(a)||(a="");c=eb[a]||eb[a.slice(0,2)];if(b===n&&!c)throw Error("Invalid locale.");return c||Va}
function mb(a,b){function c(i){var h=f[i];if(B(h))f[i]=h.split(",");else h||(f[i]=[])}function d(i,h){i=i.split("+").map(function(m){return m.replace(/(.+):(.+)$/,function(o,w,C){return C.split("|").map(function(J){return w+J}).join("|")})}).join("|");return i.split("|").forEach(h)}function e(i,h,m){var o=[];f[i].forEach(function(w,C){if(h)w+="+"+w.slice(0,3);d(w,function(J,O){o[O*m+C]=J.toLowerCase()})});f[i]=o}function g(i,h,m){i="\\d{"+i+","+h+"}";if(m)i+="|(?:"+ib(f.numbers)+")+";return i}var f,
j;f=new fb(b);c("modifiers");"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c);j=!f.monthSuffix;e("months",j,12);e("weekdays",j,7);e("units",n,8);e("numbers",n,10);f.code=a;f.date=g(1,2,f.digitDate);f.year=g(4,4);f.num=function(){var i=["\\d+"].concat(f.articles);if(f.numbers)i=i.concat(f.numbers);return ib(i)}();(function(){var i=[];f.ha={};f.modifiers.forEach(function(h){var m=h.name;d(h.src,function(o){var w=f[m];f.ha[o]=h;i.push({name:m,
src:o,value:h.value});f[m]=w?w+"|"+o:o})});f.day+="|"+ib(f.weekdays);f.modifiers=i})();if(f.monthSuffix){f.month=g(1,2);f.months=oa(1,12).map(function(i){return i+f.monthSuffix})}f.full_month=g(1,2)+"|"+ib(f.months);f.timeSuffixes.length>0&&f.addFormat(jb(Xa,f),n,Wa);f.addFormat("{day}",k);f.addFormat("{month}"+(f.monthSuffix||""));f.addFormat("{year}"+(f.yearSuffix||""));f.timeParse.forEach(function(i){f.addFormat(i,k)});f.dateParse.forEach(function(i){f.addFormat(i)});return eb[a]=f}
function kb(a,b,c,d){a.ga.unshift({Ba:d,xa:a,Aa:r("^"+b+"$","i"),to:c})}function hb(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function ib(a){return a.filter(function(b){return!!b}).join("|")}function nb(a,b){var c;if(L(a[0]))return a;else if(A(a[0])&&!A(a[1]))return[a[0]];else if(B(a[0])&&b)return[ob(a[0]),a[1]];c={};$a.forEach(function(d,e){c[d.$]=a[e]});return[c]}
function ob(a,b){var c={};if(match=a.match(/^(\d+)?\s?(\w+?)s?$/i)){if(K(b))b=parseInt(match[1])||1;c[match[2].toLowerCase()]=b}return c}function pb(a,b){var c={},d,e;b.forEach(function(g,f){d=a[f+1];if(!(K(d)||d==="")){if(g==="year")c.Ca=d;e=parseFloat(d.replace(/,/,"."));c[g]=!isNaN(e)?e:d.toLowerCase()}});return c}function qb(a){a=a.trim().replace(/^(just )?now|\.+$/i,"");return rb(a)}
function rb(a){return a.replace(Za,function(b,c,d){var e=0,g=1,f,j;if(c)return b;d.split("").reverse().forEach(function(i){i=Ya[i];var h=i>9;if(h){if(f)e+=g;g*=i/(j||1);j=i}else{if(f===n)g*=10;e+=g*i}f=h});if(f)e+=g;return e})}
function sb(a,b,c,d){var e=new s,g=n,f,j,i,h,m,o,w,C,J;e.utc(d);if(ga(a))e=new s(a.getTime());else if(A(a))e=new s(a);else if(L(a)){e.set(a,k);h=a}else if(B(a)){f=lb(b);a=qb(a);f&&G(f.sa(),function(O,ea){var Da=a.match(ea.Aa);if(Da){i=ea;j=i.xa;h=pb(Da,i.to,j);h.utc&&e.utc();j.ma=i;if(h.timestamp){h=h.timestamp;return n}if(i.Ba&&!B(h.month)&&(B(h.date)||f.va(b))){C=h.month;h.month=h.date;h.date=C}if(h.year&&h.Ca.length===2)h.year=N(V(new s,"FullYear")/100)*100-N(h.year/100)*100+h.year;if(h.month){h.month=
j.getMonth(h.month);if(h.shift&&!h.unit)h.unit=j.units[7]}if(h.weekday&&h.date)delete h.weekday;else if(h.weekday){h.weekday=j.getWeekday(h.weekday);if(h.shift&&!h.unit)h.unit=j.units[5]}if(h.day&&(C=j.ha[h.day])){h.day=C.value;e.reset();g=k}else if(h.day&&(o=j.getWeekday(h.day))>-1){delete h.day;if(h.num&&h.month){J=function(){var R=e.getWeekday();e.setWeekday(7*(h.num-1)+(R>o?o+7:o))};h.day=1}else h.weekday=o}if(h.date&&!A(h.date))h.date=j.ta(h.date);if(j.za(h.ampm)&&h.hour<12)h.hour+=12;else if(j.ya(h.ampm)&&
h.hour===12)h.hour=0;if("offset_hours"in h||"offset_minutes"in h){e.utc();h.offset_minutes=h.offset_minutes||0;h.offset_minutes+=h.offset_hours*60;if(h.offset_sign==="-")h.offset_minutes*=-1;h.minute-=h.offset_minutes}if(h.unit){g=k;w=j.oa(h.num);m=j.ra(h.unit);if(h.shift||h.edge){w*=(C=j.ha[h.shift])?C.value:0;if(m==="month"&&I(h.date)){e.set({day:h.date},k);delete h.date}if(m==="year"&&I(h.month)){e.set({month:h.month,day:h.date},k);delete h.month;delete h.date}}if(h.sign&&(C=j.ha[h.sign]))w*=C.value;
if(I(h.weekday)){e.set({weekday:h.weekday},k);delete h.weekday}h[m]=(h[m]||0)+w}if(h.year_sign==="-")h.year*=-1;ab.slice(1,4).forEach(function(R,Ub){var zb=h[R.$],Ab=zb%1;if(Ab){h[ab[Ub].$]=N(Ab*(R.$==="second"?1E3:60));h[R.$]=pa(zb)}});return n}});if(i)if(g)e.advance(h);else{e._utc&&e.reset();tb(e,h,k,n,c)}else e=a?new s(a):new s;if(h&&h.edge){C=j.ha[h.edge];G(ab.slice(4),function(O,ea){if(I(h[ea.$])){m=ea.$;return n}});if(m==="year")h.fa="month";else if(m==="month"||m==="week")h.fa="day";e[(C.value<
0?"endOf":"beginningOf")+hb(m)]();C.value===-2&&e.reset()}J&&J()}e.utc(n);return{ea:e,set:h}}function gb(a){var b,c=v.abs(a),d=c,e=0;ab.slice(1).forEach(function(g,f){b=pa(N(c/g.da()*10)/10);if(b>=1){d=b;e=f+1}});return[d,e,a]}
function ub(a,b,c,d){var e,g=lb(d),f=r(/^[A-Z]/);if(a.isValid())if(Date[b])b=Date[b];else{if(z(b)){e=gb(a.millisecondsFromNow());b=b.apply(a,e.concat(g))}}else return"Invalid Date";if(!b&&c){e=e||gb(a.millisecondsFromNow());if(e[1]===0){e[1]=1;e[0]=1}return g.ua(e)}b=b||"long";b=g[b]||b;cb.forEach(function(j){b=b.replace(r("\\{("+j.ba+")(\\d)?\\}",j.la?"i":""),function(i,h,m){i=j.format(a,g,m||1,h);m=h.length;var o=h.match(/^(.)\1+$/);if(j.la){if(m===3)i=i.slice(0,3);if(o||h.match(f))i=hb(i)}else if(o&&
!j.text)i=(A(i)?P(i,m):i.toString()).slice(-m);return i})});return b}
function vb(a,b,c,d){var e=sb(b,l,l,d),g=0;d=b=0;var f;if(c>0){b=d=c;f=k}if(!e.ea.isValid())return n;if(e.set&&e.set.fa){db.forEach(function(i){if(i.$===e.set.fa)g=i.da(e.ea,a-e.ea)-1});c=hb(e.set.fa);if(e.set.edge||e.set.shift)e.ea["beginningOf"+c]();if(e.set.fa==="month")j=e.ea.clone()["endOf"+c]().getTime();if(!f&&e.set.sign&&e.set.fa!="millisecond"){b=50;d=-50}}f=a.getTime();c=e.ea.getTime();var j=j||c+g;return f>=c-b&&f<=j+d}
function tb(a,b,c,d,e){function g(h){return I(b[h])?b[h]:b[h+"s"]}function f(h){return I(g(h))}var j,i;if(A(b)&&d)b={milliseconds:b};else if(A(b)){a.setTime(b);return a}if(b.date)b.day=b.date;G(ab,function(h,m){var o=m.$==="day";if(f(m.$)||o&&f("weekday")){b.fa=m.$;i=+h;return n}else if(c&&m.$!=="week"&&(!o||!f("week")))W(a,m.method,o?1:0)});db.forEach(function(h){var m=h.$;h=h.method;var o;o=g(m);if(!K(o)){if(d){if(m==="week"){o=(b.day||0)+o*7;h="Date"}o=o*d+V(a,h)}else m==="month"&&f("day")&&W(a,
"Date",15);W(a,h,o);if(d&&m==="month"){m=o;if(m<0)m+=12;m%12!=V(a,"Month")&&W(a,"Date",0)}}});if(!d&&!f("day")&&f("weekday")){j=g("weekday");a.setWeekday(j)}(function(){var h=new s;return e===-1&&a>h||e===1&&a<h})()&&G(ab.slice(i+1),function(h,m){if((m.ja||m.$==="week"&&f("weekday"))&&!(f(m.$)||m.$==="day"&&f("weekday"))){a[m.ia](e);return n}});return a}function V(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function W(a,b,c){return a["set"+(a._utc?"UTC":"")+b](c)}
function jb(a,b,c){var d={h:0,m:1,s:2},e;b=b||U;return a.replace(/{([a-z])}/g,function(g,f){var j=[],i=f==="h",h=i&&!c;if(f==="t")return b.ampm.join("|");else{i&&j.push(":");if(e=b.timeSuffixes[d[f]])j.push(e+"\\s*");return j.length===0?"":"(?:"+j.join("|")+")"+(h?"":"?")}})}function X(a,b,c){var d,e;if(A(a[1]))d=nb(a)[0];else{d=a[0];e=a[1]}return sb(d,e,b,c).ea}
s.extend({create:function(){return X(arguments)},past:function(){return X(arguments,-1)},future:function(){return X(arguments,1)},addLocale:function(a,b){return mb(a,b)},setLocale:function(a){var b=lb(a,n);Va=b;if(a&&a!=b.code)b.code=a;return b},getLocale:function(a){return!a?Va:lb(a,n)},addFormat:function(a,b,c){kb(lb(c),a,b)}},n,n);
s.extend({set:function(){var a=nb(arguments);return tb(this,a[0],a[1])},setWeekday:function(a){if(!K(a))return W(this,"Date",V(this,"Date")+a-V(this,"Day"))},setWeek:function(a){if(!K(a)){V(this,"Date");W(this,"Month",0);W(this,"Date",a*7+1);return this.getTime()}},getWeek:function(){var a=this;a=a.clone();var b=V(a,"Day")||7;a.addDays(4-b).reset();return 1+pa(a.daysSince(a.clone().beginningOfYear())/7)},getUTCOffset:function(a){var b=this._utc?0:this.getTimezoneOffset(),c=a===k?":":"";if(!b&&a)return"Z";
return P(N(-b/60),2,k)+c+P(b%60,2)},utc:function(a){this._utc=a===k||arguments.length===0;return this},isUTC:function(){return!!this._utc||this.getTimezoneOffset()===0},advance:function(){var a=nb(arguments,k);return tb(this,a[0],a[1],1)},rewind:function(){var a=nb(arguments,k);return tb(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>s.create(a).getTime()-(b||0)},isBefore:function(a,b){return this.getTime()<s.create(a).getTime()+(b||
0)},isBetween:function(a,b,c){var d=this.getTime();a=s.create(a).getTime();var e=s.create(b).getTime();b=v.min(a,e);a=v.max(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=V(this,"FullYear");return a%4===0&&a%100!==0||a%400===0},daysInMonth:function(){return 32-V(new s(V(this,"FullYear"),V(this,"Month"),32),"Date")},format:function(a,b){return ub(this,a,n,b)},relative:function(a,b){if(B(a)){b=a;a=l}return ub(this,a,k,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(B(a)){a=a.trim().toLowerCase();
e=this.clone().utc(c);switch(k){case a==="future":return this.getTime()>(new s).getTime();case a==="past":return this.getTime()<(new s).getTime();case a==="weekday":return V(e,"Day")>0&&V(e,"Day")<6;case a==="weekend":return V(e,"Day")===0||V(e,"Day")===6;case (d=U.weekdays.indexOf(a)%7)>-1:return V(e,"Day")===d;case (d=U.months.indexOf(a)%12)>-1:return V(e,"Month")===d}}return vb(this,a,b,c)}},reset:function(a){var b={},c;a=a||"hours";if(a==="date")a="days";c=db.some(function(d){return a===d.$||
a===d.$+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,k):this},clone:function(){var a=new s(this.getTime());a._utc=this._utc;return a}});s.extend({iso:function(){return this.toISOString()},getWeekday:s.prototype.getDay,getUTCWeekday:s.prototype.getUTCDay});
function wb(a,b){function c(){return N(this*b)}function d(){return X(arguments)[a.ia](this)}function e(){return X(arguments)[a.ia](-this)}var g=a.$,f={};f[g]=c;f[g+"s"]=c;f[g+"Before"]=e;f[g+"sBefore"]=e;f[g+"Ago"]=e;f[g+"sAgo"]=e;f[g+"After"]=d;f[g+"sAfter"]=d;f[g+"FromNow"]=d;f[g+"sFromNow"]=d;u.extend(f)}u.extend({duration:function(a){return lb(a).qa(this)}});
U=Va=s.addLocale("en",{plural:k,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"day",src:"yesterday",value:-1},{name:"day",src:"today",value:0},{name:"day",src:"tomorrow",value:1},{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",
src:"next",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]});ab=db.concat().reverse();
$a=db.concat();$a.splice(2,1);
H(s,k,n,db,function(a,b,c){var d=b.$,e=hb(d),g=b.da(),f,j;b.ia="add"+e+"s";f=function(i,h){return N((this.getTime()-s.create(i,h).getTime())/g)};j=function(i,h){return N((s.create(i,h).getTime()-this.getTime())/g)};a[d+"sAgo"]=j;a[d+"sUntil"]=j;a[d+"sSince"]=f;a[d+"sFromNow"]=f;a[b.ia]=function(i,h){var m={};m[d]=i;return this.advance(m,h)};wb(b,g);c<3&&["Last","This","Next"].forEach(function(i){a["is"+i+e]=function(){return this.is(i+" "+d)}});if(c<4){a["beginningOf"+e]=function(){var i={};switch(d){case "year":i.year=
V(this,"FullYear");break;case "month":i.month=V(this,"Month");break;case "day":i.day=V(this,"Date");break;case "week":i.weekday=0}return this.set(i,k)};a["endOf"+e]=function(){var i={hours:23,minutes:59,seconds:59,milliseconds:999};switch(d){case "year":i.month=11;i.day=31;break;case "month":i.day=this.daysInMonth();break;case "week":i.weekday=6}return this.set(i,k)}}});U.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",k,["year_sign","year","month","date"],n,k);
U.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",k,["date","month","year"],k);U.addFormat("{full_month}[-.](\\d{4,4})",n,["month","year"]);U.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/",n,["timestamp"]);U.addFormat(jb(Xa,U),n,Wa);bb=U.ga.slice(0,7).reverse();U.ga=U.ga.slice(7).concat(bb);H(s,k,n,"short,long,full",function(a,b){a[b]=function(c){return ub(this,b,n,c)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){if(b>9)b=v.pow(10,b-9);Ya[a]=b});"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split("").forEach(function(a,b){Ya[a]=b});Za=r("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19]+)(?!\u6628)","g");
(function(){var a="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),b=U.weekdays.slice(0,7),c=U.months.slice(0,12);H(s,k,n,a.concat(b).concat(c),function(d,e){d["is"+hb(e)]=function(g){return this.is(e,0,g)}})})();(function(){s.extend({utc:{create:function(){return X(arguments,0,k)},past:function(){return X(arguments,-1,k)},future:function(){return X(arguments,1,k)}}},n,n)})();
s.extend({RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"},n,n);

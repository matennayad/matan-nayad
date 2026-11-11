(()=>{var Ul="160",ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,Wh=1,mp=2;var zf=1,Ol=2,ui=3,Kn=0,Nt=1,Ct=2;var Ni=0,Js=1,ls=2,Xh=3,Yh=4,gp=5,is=100,xp=101,_p=102,qh=103,Zh=104,vp=200,yp=201,Mp=202,Ep=203,Xc=204,Yc=205,Sp=206,bp=207,Tp=208,wp=209,Ap=210,Rp=211,Cp=212,Pp=213,Lp=214,Ip=0,Dp=1,Np=2,oa=3,Up=4,Op=5,Fp=6,Bp=7,kf=0,zp=1,kp=2,Ui=0,Hp=1,Vp=2,Gp=3,Fl=4,Wp=5,Xp=6,Kh="attached",Yp="detached",Hf=300,er=301,tr=302,qc=303,Zc=304,Ba=306,pi=1e3,En=1001,jr=1002,zt=1003,aa=1004;var Vr=1005;var dn=1006,Bl=1007;var Fi=1008;var Oi=1009,qp=1010,Zp=1011,zl=1012,Vf=1013,Ii=1014,fi=1015,Jr=1016,Gf=1017,Wf=1018,os=1020,Kp=1021,Rn=1023,jp=1024,Jp=1025,as=1026,nr=1027,$p=1028,Xf=1029,Qp=1030,Yf=1031,qf=1033,cc=33776,lc=33777,hc=33778,uc=33779,jh=35840,Jh=35841,$h=35842,Qh=35843,Zf=36196,eu=37492,tu=37496,nu=37808,iu=37809,su=37810,ru=37811,ou=37812,au=37813,cu=37814,lu=37815,hu=37816,uu=37817,fu=37818,du=37819,pu=37820,mu=37821,fc=36492,gu=36494,xu=36495,em=36283,_u=36284,vu=36285,yu=36286;var ir=2300,hs=2301,dc=2302,Mu=2400,Eu=2401,Su=2402,tm=2500;var Kf=0,za=1,mo=2,jf=3e3,cs=3001,nm=3200,im=3201,Jf=0,sm=1,Cn="",dt="srgb",Gt="srgb-linear",kl="display-p3",ka="display-p3-linear",ca="linear",bt="srgb",la="rec709",ha="p3";var As=7680;var bu=519,rm=512,om=513,am=514,$f=515,cm=516,lm=517,hm=518,um=519,Kc=35044;var Tu="300 es",jc=1035,di=2e3,ua=2001,jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=1234567,Gr=Math.PI/180,sr=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function Hl(i,e){return(i%e+e)%e}function fm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dm(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function pm(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function mm(i,e=1){return e-Math.abs(Hl(i,e*2)-e)}function gm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _m(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vm(i,e){return i+Math.random()*(e-i)}function ym(i){return i*(.5-Math.random())}function Mm(i){i!==void 0&&(wu=i);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(i){return i*Gr}function Sm(i){return i*sr}function Jc(i){return(i&i-1)===0&&i!==0}function bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct={DEG2RAD:Gr,RAD2DEG:sr,generateUUID:Pn,clamp:kt,euclideanModulo:Hl,mapLinear:fm,inverseLerp:dm,lerp:Wr,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:xm,randInt:_m,randFloat:vm,randFloatSpread:ym,seededRandom:Mm,degToRad:Em,radToDeg:Sm,isPowerOfTwo:Jc,ceilPowerOfTwo:bm,floorPowerOfTwo:fa,setQuaternionFromProperEuler:Tm,normalize:mt,denormalize:Zn},xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],S=s[1],_=s[4],v=s[7],L=s[2],C=s[5],w=s[8];return r[0]=o*x+a*S+c*L,r[3]=o*m+a*_+c*C,r[6]=o*d+a*v+c*w,r[1]=l*x+h*S+u*L,r[4]=l*m+h*_+u*C,r[7]=l*d+h*v+u*w,r[2]=f*x+p*S+g*L,r[5]=f*m+p*_+g*C,r[8]=f*d+p*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pc=new nt;function Qf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wm(){let i=$r("canvas");return i.style.display="block",i}var Au={};function Xr(i){i in Au||(Au[i]=!0,console.warn(i))}var Ru=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cu=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[Gt]:{transfer:ca,primaries:la,toReference:i=>i,fromReference:i=>i},[dt]:{transfer:bt,primaries:la,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ka]:{transfer:ca,primaries:ha,toReference:i=>i.applyMatrix3(Cu),fromReference:i=>i.applyMatrix3(Ru)},[kl]:{transfer:bt,primaries:ha,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cu),fromReference:i=>i.applyMatrix3(Ru).convertLinearToSRGB()}},Am=new Set([Gt,ka]),ut={enabled:!0,_workingColorSpace:Gt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Am.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=wo[e].toReference,s=wo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return wo[i].primaries},getTransfer:function(i){return i===Cn?ca:wo[i].transfer}};function $s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,da=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=$r("canvas")),Rs.width=e.width,Rs.height=e.height;let n=Rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rm=0,pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cm=0,Jt=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=dn,o=Fi,a=Rn,c=Oi,l=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Pn(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===cs?dt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?cs:jf}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cs?dt:Cn}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Hf;Jt.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(p+1)/2,L=(d+1)/2,C=(h+f)/4,w=(u+x)/4,G=(g+m)/4;return _>v&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=w/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=G/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=G/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cs?dt:Cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends $c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ma=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qc=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*x,S=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let L=Math.sqrt(_),C=Math.atan2(L,d*S);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let v=a*S;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xc=new R,Pu=new $t,Ut=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ro.subVectors(this.max,Ir),Cs.subVectors(e.a,Ir),Ps.subVectors(e.b,Ir),Ls.subVectors(e.c,Ir),Ai.subVectors(Ps,Cs),Ri.subVectors(Ls,Ps),$i.subVectors(Cs,Ls);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-$i.z,$i.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,$i.z,0,-$i.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-$i.y,$i.x,0];return!_c(t,Cs,Ps,Ls,Ro)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Cs,Ps,Ls,Ro))?!1:(Co.crossVectors(Ai,Ri),t=[Co.x,Co.y,Co.z],_c(t,Cs,Ps,Ls,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ri=[new R,new R,new R,new R,new R,new R,new R,new R],kn=new R,Ao=new Ut,Cs=new R,Ps=new R,Ls=new R,Ai=new R,Ri=new R,$i=new R,Ir=new R,Ro=new R,Co=new R,Qi=new R;function _c(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pm=new Ut,Dr=new R,vc=new R,Sn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(vc)),this.expandByPoint(Dr.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},oi=new R,yc=new R,Po=new R,Ci=new R,Mc=new R,Lo=new R,Ec=new R,gi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yc.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(yc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=Ci.dot(this.direction),c=-Ci.dot(Po),l=Ci.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yc).addScaledVector(Po,f),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){Mc.subVectors(t,e),Lo.subVectors(n,e),Ec.crossVectors(Mc,Lo);let o=this.direction.dot(Ec),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let c=a*this.direction.dot(Lo.crossVectors(Ci,Lo));if(c<0)return null;let l=a*this.direction.dot(Mc.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(Ec);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Im)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Pi.crossVectors(n,yn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Pi.crossVectors(n,yn)),Pi.normalize(),Io.crossVectors(yn,Pi),s[0]=Pi.x,s[4]=Io.x,s[8]=yn.x,s[1]=Pi.y,s[5]=Io.y,s[9]=yn.y,s[2]=Pi.z,s[6]=Io.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],S=n[3],_=n[7],v=n[11],L=n[15],C=s[0],w=s[4],G=s[8],T=s[12],y=s[1],F=s[5],Z=s[9],ue=s[13],U=s[2],k=s[6],Y=s[10],ee=s[14],Q=s[3],$=s[7],fe=s[11],te=s[15];return r[0]=o*C+a*y+c*U+l*Q,r[4]=o*w+a*F+c*k+l*$,r[8]=o*G+a*Z+c*Y+l*fe,r[12]=o*T+a*ue+c*ee+l*te,r[1]=h*C+u*y+f*U+p*Q,r[5]=h*w+u*F+f*k+p*$,r[9]=h*G+u*Z+f*Y+p*fe,r[13]=h*T+u*ue+f*ee+p*te,r[2]=g*C+x*y+m*U+d*Q,r[6]=g*w+x*F+m*k+d*$,r[10]=g*G+x*Z+m*Y+d*fe,r[14]=g*T+x*ue+m*ee+d*te,r[3]=S*C+_*y+v*U+L*Q,r[7]=S*w+_*F+v*k+L*$,r[11]=S*G+_*Z+v*Y+L*fe,r[15]=S*T+_*ue+v*ee+L*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],S=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,_=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,v=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,L=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,C=t*S+n*_+s*v+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=S*w,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*w,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*w,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*w,e[4]=_*w,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*w,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*w,e[8]=v*w,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*d-t*u*d)*w,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*w,e[12]=L*w,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*w,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,S=c*l,_=c*h,v=c*u,L=n.x,C=n.y,w=n.z;return s[0]=(1-(x+d))*L,s[1]=(p+v)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(f+d))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+_)*w,s[9]=(m-S)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let l=1/r,h=1/o,u=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=di){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===di)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ua)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=di){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,g,x;if(a===di)g=(o+r)*u,x=-2*u;else if(a===ua)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new R,Hn=new De,Lm=new R(0,0,0),Im=new R(1,1,1),Pi=new R,Io=new R,yn=new R,Lu=new De,Iu=new $t,rr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rr.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dm=0,Du=new R,Ds=new $t,ai=new De,Do=new R,Nr=new R,Nm=new R,Um=new $t,Nu=new R(1,0,0),Uu=new R(0,1,0),Ou=new R(0,0,1),Om={type:"added"},Fm={type:"removed"},xt=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new rr,n=new $t,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new nt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Nr,Do,this.up):ai.lookAt(Do,Nr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ai),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Om)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};xt.DEFAULT_UP=new R(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new R,ci=new R,Sc=new R,li=new R,Ns=new R,Us=new R,Fu=new R,bc=new R,Tc=new R,wc=new R,No=!1,rs=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),ci.subVectors(n,t),Sc.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(ci),c=Vn.dot(Sc),l=ci.dot(ci),h=ci.dot(Sc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,n,s,r,o,a,c){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(o,li.y),c.addScaledVector(a,li.z),c)}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),ci.subVectors(e,t),Vn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Vn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,n),Us.subVectors(r,n),bc.subVectors(e,n);let c=Ns.dot(bc),l=Us.dot(bc);if(c<=0&&l<=0)return t.copy(n);Tc.subVectors(e,s);let h=Ns.dot(Tc),u=Us.dot(Tc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ns,o);wc.subVectors(e,r);let p=Ns.dot(wc),g=Us.dot(wc);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Us,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Fu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Fu,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Hl(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ut.fromWorkingColorSpace(sn.copy(this),e),Math.round(kt(sn.r*255,0,255))*65536+Math.round(kt(sn.g*255,0,255))*256+Math.round(kt(sn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=dt){ut.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Uo);let n=Wr(Li.h,Uo.h,t),s=Wr(Li.s,Uo.s,t),r=Wr(Li.l,Uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Ne;Ne.NAMES=ed;var Bm=0,_n=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Js,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==Yc&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rt=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new R,Oo=new xe,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}};var ga=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xa=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var zm=0,An=new De,Rc=new xt,Os=new R,Mn=new Ut,Ur=new Ut,qt=new R,Ot=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?xa:ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Mn.min,Ur.min),Mn.expandByPoint(qt),qt.addVectors(Mn.max,Ur.max),Mn.expandByPoint(qt)):(Mn.expandByPoint(Ur.min),Mn.expandByPoint(Ur.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(e,l),qt.add(Os)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let y=0;y<a;y++)l[y]=new R,h[y]=new R;let u=new R,f=new R,p=new R,g=new xe,x=new xe,m=new xe,d=new R,S=new R;function _(y,F,Z){u.fromArray(s,y*3),f.fromArray(s,F*3),p.fromArray(s,Z*3),g.fromArray(o,y*2),x.fromArray(o,F*2),m.fromArray(o,Z*2),f.sub(u),p.sub(u),x.sub(g),m.sub(g);let ue=1/(x.x*m.y-m.x*x.y);isFinite(ue)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ue),S.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(ue),l[y].add(d),l[F].add(d),l[Z].add(d),h[y].add(S),h[F].add(S),h[Z].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let y=0,F=v.length;y<F;++y){let Z=v[y],ue=Z.start,U=Z.count;for(let k=ue,Y=ue+U;k<Y;k+=3)_(n[k+0],n[k+1],n[k+2])}let L=new R,C=new R,w=new R,G=new R;function T(y){w.fromArray(r,y*3),G.copy(w);let F=l[y];L.copy(F),L.sub(w.multiplyScalar(w.dot(F))).normalize(),C.crossVectors(G,F);let ue=C.dot(h[y])<0?-1:1;c[y*4]=L.x,c[y*4+1]=L.y,c[y*4+2]=L.z,c[y*4+3]=ue}for(let y=0,F=v.length;y<F;++y){let Z=v[y],ue=Z.start,U=Z.count;for(let k=ue,Y=ue+U;k<Y;k+=3)T(n[k+0]),T(n[k+1]),T(n[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bu=new De,es=new gi,Fo=new Sn,zu=new R,Fs=new R,Bs=new R,zs=new R,Cc=new R,Bo=new R,zo=new xe,ko=new xe,Ho=new xe,ku=new R,Hu=new R,Vu=new R,Vo=new R,Go=new R,ke=class extends xt{constructor(e=new Ot,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Cc.fromBufferAttribute(u,e),o?Bo.addScaledVector(Cc,h):Bo.addScaledVector(Cc.sub(t),h))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Fo.containsPoint(es.origin)===!1&&(es.intersectSphere(Fo,zu)===null||es.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Bu.copy(r).invert(),es.copy(e.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,L=_;v<L;v+=3){let C=a.getX(v),w=a.getX(v+1),G=a.getX(v+2);s=Wo(this,d,e,n,l,h,u,C,w,G),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Wo(this,o,e,n,l,h,u,S,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,L=_;v<L;v+=3){let C=v,w=v+1,G=v+2;s=Wo(this,d,e,n,l,h,u,C,w,G),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=m,_=m+1,v=m+2;s=Wo(this,o,e,n,l,h,u,S,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function km(i,e,t,n,s,r,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Kn,a),c===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Go);return l<t.near||l>t.far?null:{distance:l,point:Go.clone(),object:i}}function Wo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Fs),i.getVertexPosition(c,Bs),i.getVertexPosition(l,zs);let h=km(i,e,t,n,Fs,Bs,zs,Vo);if(h){s&&(zo.fromBufferAttribute(s,a),ko.fromBufferAttribute(s,c),Ho.fromBufferAttribute(s,l),h.uv=rs.getInterpolation(Vo,Fs,Bs,zs,zo,ko,Ho,new xe)),r&&(zo.fromBufferAttribute(r,a),ko.fromBufferAttribute(r,c),Ho.fromBufferAttribute(r,l),h.uv1=rs.getInterpolation(Vo,Fs,Bs,zs,zo,ko,Ho,new xe),h.uv2=h.uv1),o&&(ku.fromBufferAttribute(o,a),Hu.fromBufferAttribute(o,c),Vu.fromBufferAttribute(o,l),h.normal=rs.getInterpolation(Vo,Fs,Bs,zs,ku,Hu,Vu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};rs.getNormal(Fs,Bs,zs,u.normal),h.face=u}return h}var Wn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(x,m,d,S,_,v,L,C,w,G,T){let y=v/w,F=L/G,Z=v/2,ue=L/2,U=C/2,k=w+1,Y=G+1,ee=0,Q=0,$=new R;for(let fe=0;fe<Y;fe++){let te=fe*F-ue;for(let ye=0;ye<k;ye++){let B=ye*y-Z;$[x]=B*S,$[m]=te*_,$[d]=U,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[d]=C>0?1:-1,h.push($.x,$.y,$.z),u.push(ye/w),u.push(1-fe/G),ee+=1}}for(let fe=0;fe<G;fe++)for(let te=0;te<w;te++){let ye=f+te+k*fe,B=f+te+k*(fe+1),ie=f+(te+1)+k*(fe+1),me=f+(te+1)+k*fe;c.push(ye,B,me),c.push(B,ie,me),Q+=6}a.addGroup(p,Q,T),p+=Q,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=or(i[t]);for(let s in n)e[s]=n[s]}return e}function Hm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function td(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}var Vl={clone:or,merge:fn},Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_a=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Hs=1,el=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(ks,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(ks,Hs,e,t);r.layers=this.layers,this.add(r);let o=new Ht(ks,Hs,e,t);o.layers=this.layers,this.add(o);let a=new Ht(ks,Hs,e,t);a.layers=this.layers,this.add(a);let c=new Ht(ks,Hs,e,t);c.layers=this.layers,this.add(c);let l=new Ht(ks,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},va=class extends Jt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tl=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cs?dt:Cn),this.texture=new va(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Ni});r.uniforms.tEquirect.value=t;let o=new ke(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=dn),new el(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Pc=new R,Wm=new R,Xm=new nt,Gn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pc.subVectors(n,t).cross(Wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xm.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Sn,Xo=new R,eo=class{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],S=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+o,f+h,m+g,v+S).normalize(),n[3].setComponents(c-o,f-h,m-g,v-S).normalize(),n[4].setComponents(c-a,f-u,m-x,v-_).normalize(),t===di)n[5].setComponents(c+a,f+u,m+x,v+_).normalize();else if(t===ua)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ym(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let d=g[x];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var pn=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let S=d*f-o;for(let _=0;_<l;_++){let v=_*u-r;g.push(v,-S,0),x.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){let _=S+l*d,v=S+l*(d+1),L=S+1+l*(d+1),C=S+1+l*d;p.push(_,v,C),p.push(v,L,C)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,px=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:qm,alphahash_pars_fragment:Zm,alphamap_fragment:Km,alphamap_pars_fragment:jm,alphatest_fragment:Jm,alphatest_pars_fragment:$m,aomap_fragment:Qm,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:_0,displacementmap_pars_vertex:v0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:E0,colorspace_fragment:S0,colorspace_pars_fragment:b0,envmap_fragment:T0,envmap_common_pars_fragment:w0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:I0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_fragment:U0,lightmap_pars_fragment:O0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:B0,lights_pars_begin:z0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:Y0,lights_fragment_begin:q0,lights_fragment_maps:Z0,lights_fragment_end:K0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:Q0,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphcolor_vertex:og,morphnormal_vertex:ag,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:hg,normal_fragment_maps:ug,normal_pars_fragment:fg,normal_pars_vertex:dg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:vg,opaque_fragment:yg,packing:Mg,premultiplied_alpha_fragment:Eg,project_vertex:Sg,dithering_fragment:bg,dithering_pars_fragment:Tg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ig,skinning_pars_vertex:Dg,skinning_vertex:Ng,skinnormal_vertex:Ug,specularmap_fragment:Og,specularmap_pars_fragment:Fg,tonemapping_fragment:Bg,tonemapping_pars_fragment:zg,transmission_fragment:kg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:Yg,background_frag:qg,backgroundCube_vert:Zg,backgroundCube_frag:Kg,cube_vert:jg,cube_frag:Jg,depth_vert:$g,depth_frag:Qg,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:sx,linedashed_frag:rx,meshbasic_vert:ox,meshbasic_frag:ax,meshlambert_vert:cx,meshlambert_frag:lx,meshmatcap_vert:hx,meshmatcap_frag:ux,meshnormal_vert:fx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:xx,meshtoon_vert:_x,meshtoon_frag:vx,points_vert:yx,points_frag:Mx,shadow_vert:Ex,shadow_frag:Sx,sprite_vert:bx,sprite_frag:Tx},be={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},qn={basic:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:fn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:fn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:fn([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:fn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:fn([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:fn([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:fn([be.common,be.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:fn([be.lights,be.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};qn.physical={uniforms:fn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Yo={r:0,b:0,g:0};function wx(i,e,t,n,s,r,o){let a=new Ne(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let S=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),S=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ba)?(h===void 0&&(h=new ke(new Wn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:or(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ut.getTransfer(_.colorSpace)!==bt,(u!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ke(new pn(2,2),new rn({name:"BackgroundMaterial",uniforms:or(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ut.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(Yo,td(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function Ax(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(U,k,Y,ee,Q){let $=!1;if(o){let fe=x(ee,Y,k);l!==fe&&(l=fe,p(l.object)),$=d(U,ee,Y,Q),$&&S(U,ee,Y,Q)}else{let fe=k.wireframe===!0;(l.geometry!==ee.id||l.program!==Y.id||l.wireframe!==fe)&&(l.geometry=ee.id,l.program=Y.id,l.wireframe=fe,$=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,G(U,k,Y,ee),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function x(U,k,Y){let ee=Y.wireframe===!0,Q=a[U.id];Q===void 0&&(Q={},a[U.id]=Q);let $=Q[k.id];$===void 0&&($={},Q[k.id]=$);let fe=$[ee];return fe===void 0&&(fe=m(f()),$[ee]=fe),fe}function m(U){let k=[],Y=[],ee=[];for(let Q=0;Q<s;Q++)k[Q]=0,Y[Q]=0,ee[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:ee,object:U,attributes:{},index:null}}function d(U,k,Y,ee){let Q=l.attributes,$=k.attributes,fe=0,te=Y.getAttributes();for(let ye in te)if(te[ye].location>=0){let ie=Q[ye],me=$[ye];if(me===void 0&&(ye==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),ye==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;fe++}return l.attributesNum!==fe||l.index!==ee}function S(U,k,Y,ee){let Q={},$=k.attributes,fe=0,te=Y.getAttributes();for(let ye in te)if(te[ye].location>=0){let ie=$[ye];ie===void 0&&(ye==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ye==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));let me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),Q[ye]=me,fe++}l.attributes=Q,l.attributesNum=fe,l.index=ee}function _(){let U=l.newAttributes;for(let k=0,Y=U.length;k<Y;k++)U[k]=0}function v(U){L(U,0)}function L(U,k){let Y=l.newAttributes,ee=l.enabledAttributes,Q=l.attributeDivisors;Y[U]=1,ee[U]===0&&(i.enableVertexAttribArray(U),ee[U]=1),Q[U]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,k),Q[U]=k)}function C(){let U=l.newAttributes,k=l.enabledAttributes;for(let Y=0,ee=k.length;Y<ee;Y++)k[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),k[Y]=0)}function w(U,k,Y,ee,Q,$,fe){fe===!0?i.vertexAttribIPointer(U,k,Y,Q,$):i.vertexAttribPointer(U,k,Y,ee,Q,$)}function G(U,k,Y,ee){if(n.isWebGL2===!1&&(U.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Q=ee.attributes,$=Y.getAttributes(),fe=k.defaultAttributeValues;for(let te in $){let ye=$[te];if(ye.location>=0){let B=Q[te];if(B===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),B!==void 0){let ie=B.normalized,me=B.itemSize,Re=t.get(B);if(Re===void 0)continue;let Ae=Re.buffer,Ue=Re.type,We=Re.bytesPerElement,Be=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||B.gpuType===Vf);if(B.isInterleavedBufferAttribute){let je=B.data,X=je.stride,lt=B.offset;if(je.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ye.locationSize;Fe++)L(ye.location+Fe,je.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Fe=0;Fe<ye.locationSize;Fe++)v(ye.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Fe=0;Fe<ye.locationSize;Fe++)w(ye.location+Fe,me/ye.locationSize,Ue,ie,X*We,(lt+me/ye.locationSize*Fe)*We,Be)}else{if(B.isInstancedBufferAttribute){for(let je=0;je<ye.locationSize;je++)L(ye.location+je,B.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let je=0;je<ye.locationSize;je++)v(ye.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let je=0;je<ye.locationSize;je++)w(ye.location+je,me/ye.locationSize,Ue,ie,me*We,me/ye.locationSize*je*We,Be)}}else if(fe!==void 0){let ie=fe[te];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(ye.location,ie);break;case 3:i.vertexAttrib3fv(ye.location,ie);break;case 4:i.vertexAttrib4fv(ye.location,ie);break;default:i.vertexAttrib1fv(ye.location,ie)}}}}C()}function T(){Z();for(let U in a){let k=a[U];for(let Y in k){let ee=k[Y];for(let Q in ee)g(ee[Q].object),delete ee[Q];delete k[Y]}delete a[U]}}function y(U){if(a[U.id]===void 0)return;let k=a[U.id];for(let Y in k){let ee=k[Y];for(let Q in ee)g(ee[Q].object),delete ee[Q];delete k[Y]}delete a[U.id]}function F(U){for(let k in a){let Y=a[k];if(Y[U.id]===void 0)continue;let ee=Y[U.id];for(let Q in ee)g(ee[Q].object),delete ee[Q];delete Y[U.id]}}function Z(){ue(),h=!0,l!==c&&(l=c,p(l.object))}function ue(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:ue,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:v,disableUnusedAttributes:C}}function Rx(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Cx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,v=o||e.has("OES_texture_float"),L=_&&v,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:L,maxSamples:C}}function Px(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Gn,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,_=S*4,v=d.clippingState||null;c.value=v,v=h(g,f,_,p);for(let L=0;L!==_;++L)v[L]=t[L];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,v=p;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lx(i){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=er:a===Zc&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qc||a===Zc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new tl(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ar=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zs=4,Gu=[.125,.215,.35,.446,.526,.582],ss=20,Lc=new ar,Wu=new Ne,Ic=null,Dc=0,Nc=0,ns=(1+Math.sqrt(5))/2,Vs=1/ns,Xu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ns,Vs),new R(0,ns,-Vs),new R(Vs,0,ns),new R(-Vs,0,ns),new R(ns,Vs,0),new R(-ns,Vs,0)],cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Dc,Nc),e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Jr,format:Rn,colorSpace:Gt,depthBuffer:!1},s=Yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Dx(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,s){let a=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wu),h.toneMapping=Ui,h.autoClear=!1;let p=new rt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new ke(new Wn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Wu),x=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):S===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let _=this._cubeSize;qo(s,S*_,d>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;qo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xu[(s-1)%Xu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ss-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let d=[],S=0;for(let w=0;w<ss;++w){let G=w/x,T=Math.exp(-G*G/2);d.push(T),w===0?S+=T:w<m&&(S+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],L=3*v*(s>_-Zs?s-_+Zs:0),C=4*(this._cubeSize-v);qo(t,L,C,3*v,2*v),c.setRenderTarget(t),c.render(u,Lc)}};function Ix(i){let e=[],t=[],n=[],s=i,r=i-Zs+1+Gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Zs?c=Gu[o-i+Zs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,S=new Float32Array(x*g*p),_=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,G=C>2?0:-1,T=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];S.set(T,x*g*C),_.set(f,m*g*C);let y=[C,C,C,C,C,C];v.set(y,d*g*C)}let L=new Ot;L.setAttribute("position",new Vt(S,x)),L.setAttribute("uv",new Vt(_,m)),L.setAttribute("faceIndex",new Vt(v,d)),e.push(L),s>Zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yu(i,e,t){let n=new mi(i,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dx(i,e,t){let n=new Float32Array(ss),s=new R(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===qc||c===Zc,h=c===er||c===tr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new cr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new cr(i));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ux(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ox(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let _=0,v=S.length;_<v;_+=3){let L=S[_+0],C=S[_+1],w=S[_+2];f.push(L,C,C,w,w,L)}}else if(g!==void 0){let S=g.array;x=g.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let L=_+0,C=_+1,w=_+2;f.push(L,C,C,w,w,L)}}else return;let m=new(Qf(f)?xa:ga)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Fx(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,x),t.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let d=0;for(let S=0;S<x;S++)d+=g[S];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zx(i,e){return i[0]-e[0]}function kx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Hx(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let U=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",U)};x!==void 0&&x.texture.dispose();let S=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],G=0;S===!0&&(G=1),_===!0&&(G=2),v===!0&&(G=3);let T=h.attributes.position.count*G,y=1;T>e.maxTextureSize&&(y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let F=new Float32Array(T*y*4*g),Z=new ma(F,T,y,g);Z.type=fi,Z.needsUpdate=!0;let ue=G*4;for(let k=0;k<g;k++){let Y=L[k],ee=C[k],Q=w[k],$=T*y*4*k;for(let fe=0;fe<Y.count;fe++){let te=fe*ue;S===!0&&(o.fromBufferAttribute(Y,fe),F[$+te+0]=o.x,F[$+te+1]=o.y,F[$+te+2]=o.z,F[$+te+3]=0),_===!0&&(o.fromBufferAttribute(ee,fe),F[$+te+4]=o.x,F[$+te+5]=o.y,F[$+te+6]=o.z,F[$+te+7]=0),v===!0&&(o.fromBufferAttribute(Q,fe),F[$+te+8]=o.x,F[$+te+9]=o.y,F[$+te+10]=o.z,F[$+te+11]=Q.itemSize===4?o.w:1)}}x={count:g,texture:Z,size:new xe(T,y)},r.set(h,x),h.addEventListener("dispose",U)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let v=g[_];v[0]=_,v[1]=f[_]}g.sort(kx);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(zx);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let v=a[_],L=v[0],C=v[1];L!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=C,d+=C):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let S=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Vx(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ya=class extends Jt{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:as,h!==as&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Ii),n===void 0&&h===nr&&(n=os),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},id=new Jt,sd=new ya(1,1);sd.compareFunction=$f;var rd=new ma,od=new Qc,ad=new va,Ku=[],ju=[],Ju=new Float32Array(16),$u=new Float32Array(9),Qu=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Qu.set(n),i.uniformMatrix2fv(this.addr,!1,Qu),Xt(t,n)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),Xt(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),Xt(t,n)}}function jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function e_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?sd:id;t.setTexture2D(e||r,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||od,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ad,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rd,s)}function c_(i){switch(i){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return Yx;case 35674:return qx;case 35675:return Zx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Jx;case 35668:case 35672:return $x;case 35669:case 35673:return Qx;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}function l_(i,e){i.uniform1fv(this.addr,e)}function h_(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function u_(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function f_(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function d_(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p_(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m_(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g_(i,e){i.uniform1iv(this.addr,e)}function x_(i,e){i.uniform2iv(this.addr,e)}function __(i,e){i.uniform3iv(this.addr,e)}function v_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function M_(i,e){i.uniform2uiv(this.addr,e)}function E_(i,e){i.uniform3uiv(this.addr,e)}function S_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||id,r[o])}function T_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||od,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ad,r[o])}function A_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rd,r[o])}function R_(i){switch(i){case 5126:return l_;case 35664:return h_;case 35665:return u_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return M_;case 36295:return E_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}var nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c_(t.type)}},il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}},sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function ef(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),o=Uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ef(t,l===void 0?new nl(a,i,e):new il(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new sl(a),ef(t,u)),t=u}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);C_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var P_=37297,L_=0;function I_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function D_(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===ha&&t===la?n="LinearDisplayP3ToLinearSRGB":e===la&&t===ha&&(n="LinearSRGBToLinearDisplayP3"),i){case Gt:case ka:return[n,"LinearTransferOETF"];case dt:case kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I_(i.getShaderSource(e),o)}else return s}function N_(i,e){let t=D_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U_(i,e){let t;switch(e){case Hp:t="Linear";break;case Vp:t="Reinhard";break;case Gp:t="OptimizedCineon";break;case Fl:t="ACESFilmic";break;case Xp:t="AgX";break;case Wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ks).join(`
`)}function B_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ks(i){return i!==""}function sf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(k_,V_)}var H_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function V_(i,e){let t=et[e];if(t===void 0){let n=H_.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace(G_,W_)}function W_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kf:e="ENVMAP_BLENDING_MULTIPLY";break;case zp:e="ENVMAP_BLENDING_MIX";break;case kp:e="ENVMAP_BLENDING_ADD";break}return e}function K_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function j_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=X_(t),l=Y_(t),h=q_(t),u=Z_(t),f=K_(t),p=t.isWebGL2?"":O_(t),g=F_(t),x=B_(r),m=s.createProgram(),d,S,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ks).join(`
`),d.length>0&&(d+=`
`),S=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ks).join(`
`),S.length>0&&(S+=`
`)):(d=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),S=[p,af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?et.tonemapping_pars_fragment:"",t.toneMapping!==Ui?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=rl(o),o=sf(o,t),o=rf(o,t),a=rl(a),a=sf(a,t),a=rf(a,t),o=of(o),a=of(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let v=_+d+o,L=_+S+a,C=tf(s,s.VERTEX_SHADER,v),w=tf(s,s.FRAGMENT_SHADER,L);s.attachShader(m,C),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function G(Z){if(i.debug.checkShaderErrors){let ue=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(C).trim(),k=s.getShaderInfoLog(w).trim(),Y=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,C,w);else{let Q=nf(s,C,"vertex"),$=nf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+Q+`
`+$)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(U===""||k==="")&&(ee=!1);ee&&(Z.diagnostics={runnable:Y,programLog:ue,vertexShader:{log:U,prefix:d},fragmentShader:{log:k,prefix:S}})}s.deleteShader(C),s.deleteShader(w),T=new Qs(s,m),y=z_(s,m)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let y;this.getAttributes=function(){return y===void 0&&G(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,P_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=w,this}var J_=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new al(e),t.set(e,n)),n}},al=class{constructor(e){this.id=J_++,this.code=e,this.usedTimes=0}};function $_(i,e,t,n,s,r,o){let a=new Qr,c=new ol,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function m(T,y,F,Z,ue){let U=Z.fog,k=ue.geometry,Y=T.isMeshStandardMaterial?Z.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),Q=ee&&ee.mapping===Ba?ee.image.height:null,$=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let fe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=fe!==void 0?fe.length:0,ye=0;k.morphAttributes.position!==void 0&&(ye=1),k.morphAttributes.normal!==void 0&&(ye=2),k.morphAttributes.color!==void 0&&(ye=3);let B,ie,me,Re;if($){let Bt=qn[$];B=Bt.vertexShader,ie=Bt.fragmentShader}else B=T.vertexShader,ie=T.fragmentShader,c.update(T),me=c.getVertexShaderID(T),Re=c.getFragmentShaderID(T);let Ae=i.getRenderTarget(),Ue=ue.isInstancedMesh===!0,We=ue.isBatchedMesh===!0,Be=!!T.map,je=!!T.matcap,X=!!ee,lt=!!T.aoMap,Fe=!!T.lightMap,He=!!T.bumpMap,Pe=!!T.normalMap,K=!!T.displacementMap,oe=!!T.emissiveMap,b=!!T.metalnessMap,E=!!T.roughnessMap,z=T.anisotropy>0,J=T.clearcoat>0,ae=T.iridescence>0,ce=T.sheen>0,Le=T.transmission>0,Ee=z&&!!T.anisotropyMap,we=J&&!!T.clearcoatMap,Ve=J&&!!T.clearcoatNormalMap,Ye=J&&!!T.clearcoatRoughnessMap,le=ae&&!!T.iridescenceMap,Ze=ae&&!!T.iridescenceThicknessMap,P=ce&&!!T.sheenColorMap,ne=ce&&!!T.sheenRoughnessMap,he=!!T.specularMap,de=!!T.specularColorMap,Ie=!!T.specularIntensityMap,Ke=Le&&!!T.transmissionMap,Qe=Le&&!!T.thicknessMap,Xe=!!T.gradientMap,ve=!!T.alphaMap,D=T.alphaTest>0,ge=!!T.alphaHash,_e=!!T.extensions,Ge=!!k.attributes.uv1,Oe=!!k.attributes.uv2,st=!!k.attributes.uv3,ot=Ui;return T.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ot=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:B,fragmentShader:ie,defines:T.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:We,instancing:Ue,instancingColor:Ue&&ue.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Gt,map:Be,matcap:je,envMap:X,envMapMode:X&&ee.mapping,envMapCubeUVHeight:Q,aoMap:lt,lightMap:Fe,bumpMap:He,normalMap:Pe,displacementMap:f&&K,emissiveMap:oe,normalMapObjectSpace:Pe&&T.normalMapType===sm,normalMapTangentSpace:Pe&&T.normalMapType===Jf,metalnessMap:b,roughnessMap:E,anisotropy:z,anisotropyMap:Ee,clearcoat:J,clearcoatMap:we,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Ye,iridescence:ae,iridescenceMap:le,iridescenceThicknessMap:Ze,sheen:ce,sheenColorMap:P,sheenRoughnessMap:ne,specularMap:he,specularColorMap:de,specularIntensityMap:Ie,transmission:Le,transmissionMap:Ke,thicknessMap:Qe,gradientMap:Xe,opaque:T.transparent===!1&&T.blending===Js,alphaMap:ve,alphaTest:D,alphaHash:ge,combine:T.combine,mapUv:Be&&x(T.map.channel),aoMapUv:lt&&x(T.aoMap.channel),lightMapUv:Fe&&x(T.lightMap.channel),bumpMapUv:He&&x(T.bumpMap.channel),normalMapUv:Pe&&x(T.normalMap.channel),displacementMapUv:K&&x(T.displacementMap.channel),emissiveMapUv:oe&&x(T.emissiveMap.channel),metalnessMapUv:b&&x(T.metalnessMap.channel),roughnessMapUv:E&&x(T.roughnessMap.channel),anisotropyMapUv:Ee&&x(T.anisotropyMap.channel),clearcoatMapUv:we&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:P&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(T.sheenRoughnessMap.channel),specularMapUv:he&&x(T.specularMap.channel),specularColorMapUv:de&&x(T.specularColorMap.channel),specularIntensityMapUv:Ie&&x(T.specularIntensityMap.channel),transmissionMapUv:Ke&&x(T.transmissionMap.channel),thicknessMapUv:Qe&&x(T.thicknessMap.channel),alphaMapUv:ve&&x(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pe||z),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:Oe,vertexUv3s:st,pointsUvs:ue.isPoints===!0&&!!k.attributes.uv&&(Be||ve),fog:!!U,useFog:T.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ue.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ct,flipSided:T.side===Nt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:_e&&T.extensions.derivatives===!0,extensionFragDepth:_e&&T.extensions.fragDepth===!0,extensionDrawBuffers:_e&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function d(T){let y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(let F in T.defines)y.push(F),y.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(S(y,T),_(y,T),y.push(i.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function S(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function _(T,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function v(T){let y=g[T.type],F;if(y){let Z=qn[y];F=Vl.clone(Z.uniforms)}else F=T.uniforms;return F}function L(T,y){let F;for(let Z=0,ue=l.length;Z<ue;Z++){let U=l[Z];if(U.cacheKey===y){F=U,++F.usedTimes;break}}return F===void 0&&(F=new j_(i,y,T,r),l.push(F)),F}function C(T){if(--T.usedTimes===0){let y=l.indexOf(T);l[y]=l[l.length-1],l.pop(),T.destroy()}}function w(T){c.remove(T)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:G}}function Q_(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ev(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||ev),n.length>1&&n.sort(f||cf),s.length>1&&s.sort(f||cf)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function tv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new lf,i.set(n,[o])):s>=r.length?(o=new lf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ne};break;case"SpotLight":t={position:new R,direction:new R,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sv=0;function rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ov(i,e){let t=new nv,n=iv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new De,a=new De;function c(h,u){let f=0,p=0,g=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let x=0,m=0,d=0,S=0,_=0,v=0,L=0,C=0,w=0,G=0,T=0;h.sort(rv);let y=u===!0?Math.PI:1;for(let Z=0,ue=h.length;Z<ue;Z++){let U=h[Z],k=U.color,Y=U.intensity,ee=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=k.r*Y*y,p+=k.g*Y*y,g+=k.b*Y*y;else if(U.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(U.sh.coefficients[$],Y);T++}else if(U.isDirectionalLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){let fe=U.shadow,te=n.get(U);te.shadowBias=fe.bias,te.shadowNormalBias=fe.normalBias,te.shadowRadius=fe.radius,te.shadowMapSize=fe.mapSize,s.directionalShadow[x]=te,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=U.shadow.matrix,v++}s.directional[x]=$,x++}else if(U.isSpotLight){let $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(k).multiplyScalar(Y*y),$.distance=ee,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,s.spot[d]=$;let fe=U.shadow;if(U.map&&(s.spotLightMap[w]=U.map,w++,fe.updateMatrices(U),U.castShadow&&G++),s.spotLightMatrix[d]=fe.matrix,U.castShadow){let te=n.get(U);te.shadowBias=fe.bias,te.shadowNormalBias=fe.normalBias,te.shadowRadius=fe.radius,te.shadowMapSize=fe.mapSize,s.spotShadow[d]=te,s.spotShadowMap[d]=Q,C++}d++}else if(U.isRectAreaLight){let $=t.get(U);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),s.rectArea[S]=$,S++}else if(U.isPointLight){let $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*y),$.distance=U.distance,$.decay=U.decay,U.castShadow){let fe=U.shadow,te=n.get(U);te.shadowBias=fe.bias,te.shadowNormalBias=fe.normalBias,te.shadowRadius=fe.radius,te.shadowMapSize=fe.mapSize,te.shadowCameraNear=fe.camera.near,te.shadowCameraFar=fe.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=Q,s.pointShadowMatrix[m]=U.shadow.matrix,L++}s.point[m]=$,m++}else if(U.isHemisphereLight){let $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(Y*y),$.groundColor.copy(U.groundColor).multiplyScalar(Y*y),s.hemi[_]=$,_++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==d||F.rectAreaLength!==S||F.hemiLength!==_||F.numDirectionalShadows!==v||F.numPointShadows!==L||F.numSpotShadows!==C||F.numSpotMaps!==w||F.numLightProbes!==T)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=S,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+w-G,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=T,F.directionalLength=x,F.pointLength=m,F.spotLength=d,F.rectAreaLength=S,F.hemiLength=_,F.numDirectionalShadows=v,F.numPointShadows=L,F.numSpotShadows=C,F.numSpotMaps=w,F.numLightProbes=T,s.version=sv++)}function l(h,u){let f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let S=0,_=h.length;S<_;S++){let v=h[S];if(v.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(v.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(v.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),g++}else if(v.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(v.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(v.width*.5,0,0),L.halfHeight.set(0,v.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(v.matrixWorld),L.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(v.matrixWorld),L.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function hf(i,e){let t=new ov(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function av(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new hf(i,e),t.set(r,[c])):o>=a.length?(c=new hf(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var cl=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hv(i,e,t){let n=new eo,s=new xe,r=new xe,o=new gt,a=new cl({depthPacking:im}),c=new ll,l={},h=t.maxTextureSize,u={[Kn]:Nt,[Nt]:Kn,[Ct]:Ct},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:cv,fragmentShader:lv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zf;let d=this.type;this.render=function(C,w,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=i.getRenderTarget(),y=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ni),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let ue=d!==ui&&this.type===ui,U=d===ui&&this.type!==ui;for(let k=0,Y=C.length;k<Y;k++){let ee=C[k],Q=ee.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let $=Q.getFrameExtents();if(s.multiply($),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Q.mapSize.y=r.y)),Q.map===null||ue===!0||U===!0){let te=this.type!==ui?{minFilter:zt,magFilter:zt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new mi(s.x,s.y,te),Q.map.texture.name=ee.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let fe=Q.getViewportCount();for(let te=0;te<fe;te++){let ye=Q.getViewport(te);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),Z.viewport(o),Q.updateMatrices(ee,te),n=Q.getFrustum(),v(w,G,Q.camera,ee,this.type)}Q.isPointLightShadow!==!0&&this.type===ui&&S(Q,G),Q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,y,F)};function S(C,w){let G=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,G,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,G,p,x,null)}function _(C,w,G,T){let y=null,F=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)y=F;else if(y=G.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Z=y.uuid,ue=w.uuid,U=l[Z];U===void 0&&(U={},l[Z]=U);let k=U[ue];k===void 0&&(k=y.clone(),U[ue]=k,w.addEventListener("dispose",L)),y=k}if(y.visible=w.visible,y.wireframe=w.wireframe,T===ui?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let Z=i.properties.get(y);Z.light=G}return y}function v(C,w,G,T,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ui)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);let ue=e.update(C),U=C.material;if(Array.isArray(U)){let k=ue.groups;for(let Y=0,ee=k.length;Y<ee;Y++){let Q=k[Y],$=U[Q.materialIndex];if($&&$.visible){let fe=_(C,$,T,y);C.onBeforeShadow(i,C,w,G,ue,fe,Q),i.renderBufferDirect(G,null,ue,fe,C,Q),C.onAfterShadow(i,C,w,G,ue,fe,Q)}}}else if(U.visible){let k=_(C,U,T,y);C.onBeforeShadow(i,C,w,G,ue,k,null),i.renderBufferDirect(G,null,ue,k,C,null),C.onAfterShadow(i,C,w,G,ue,k,null)}}let Z=C.children;for(let ue=0,U=Z.length;ue<U;ue++)v(Z[ue],w,G,T,y)}function L(C){C.target.removeEventListener("dispose",L);for(let G in l){let T=l[G],y=C.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function uv(i,e,t){let n=t.isWebGL2;function s(){let D=!1,ge=new gt,_e=null,Ge=new gt(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!D&&(i.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){D=Oe},setClear:function(Oe,st,ot,Rt,Bt){Bt===!0&&(Oe*=Rt,st*=Rt,ot*=Rt),ge.set(Oe,st,ot,Rt),Ge.equals(ge)===!1&&(i.clearColor(Oe,st,ot,Rt),Ge.copy(ge))},reset:function(){D=!1,_e=null,Ge.set(-1,0,0,0)}}}function r(){let D=!1,ge=null,_e=null,Ge=null;return{setTest:function(Oe){Oe?We(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Oe){ge!==Oe&&!D&&(i.depthMask(Oe),ge=Oe)},setFunc:function(Oe){if(_e!==Oe){switch(Oe){case Ip:i.depthFunc(i.NEVER);break;case Dp:i.depthFunc(i.ALWAYS);break;case Np:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case Up:i.depthFunc(i.EQUAL);break;case Op:i.depthFunc(i.GEQUAL);break;case Fp:i.depthFunc(i.GREATER);break;case Bp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Oe}},setLocked:function(Oe){D=Oe},setClear:function(Oe){Ge!==Oe&&(i.clearDepth(Oe),Ge=Oe)},reset:function(){D=!1,ge=null,_e=null,Ge=null}}}function o(){let D=!1,ge=null,_e=null,Ge=null,Oe=null,st=null,ot=null,Rt=null,Bt=null;return{setTest:function(pt){D||(pt?We(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!D&&(i.stencilMask(pt),ge=pt)},setFunc:function(pt,Lt,mn){(_e!==pt||Ge!==Lt||Oe!==mn)&&(i.stencilFunc(pt,Lt,mn),_e=pt,Ge=Lt,Oe=mn)},setOp:function(pt,Lt,mn){(st!==pt||ot!==Lt||Rt!==mn)&&(i.stencilOp(pt,Lt,mn),st=pt,ot=Lt,Rt=mn)},setLocked:function(pt){D=pt},setClear:function(pt){Bt!==pt&&(i.clearStencil(pt),Bt=pt)},reset:function(){D=!1,ge=null,_e=null,Ge=null,Oe=null,st=null,ot=null,Rt=null,Bt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,S=null,_=null,v=null,L=null,C=null,w=null,G=null,T=new Ne(0,0,0),y=0,F=!1,Z=null,ue=null,U=null,k=null,Y=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,$=0,fe=i.getParameter(i.VERSION);fe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(fe)[1]),Q=$>=1):fe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),Q=$>=2);let te=null,ye={},B=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),me=new gt().fromArray(B),Re=new gt().fromArray(ie);function Ae(D,ge,_e,Ge){let Oe=new Uint8Array(4),st=i.createTexture();i.bindTexture(D,st),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<_e;ot++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ge,0,i.RGBA,1,1,Ge,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(ge+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return st}let Ue={};Ue[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),We(i.DEPTH_TEST),c.setFunc(oa),oe(!1),b(Wh),We(i.CULL_FACE),Pe(Ni);function We(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Be(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function je(D,ge){return p[D]!==ge?(i.bindFramebuffer(D,ge),p[D]=ge,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ge),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ge)),!0):!1}function X(D,ge){let _e=x,Ge=!1;if(D)if(_e=g.get(ge),_e===void 0&&(_e=[],g.set(ge,_e)),D.isWebGLMultipleRenderTargets){let Oe=D.texture;if(_e.length!==Oe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let st=0,ot=Oe.length;st<ot;st++)_e[st]=i.COLOR_ATTACHMENT0+st;_e.length=Oe.length,Ge=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,Ge=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ge=!0);Ge&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function lt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let Fe={[is]:i.FUNC_ADD,[xp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};if(n)Fe[qh]=i.MIN,Fe[Zh]=i.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(Fe[qh]=D.MIN_EXT,Fe[Zh]=D.MAX_EXT)}let He={[vp]:i.ZERO,[yp]:i.ONE,[Mp]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[Ap]:i.SRC_ALPHA_SATURATE,[Tp]:i.DST_COLOR,[Sp]:i.DST_ALPHA,[Ep]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[bp]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Cp]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(D,ge,_e,Ge,Oe,st,ot,Rt,Bt,pt){if(D===Ni){d===!0&&(Be(i.BLEND),d=!1);return}if(d===!1&&(We(i.BLEND),d=!0),D!==gp){if(D!==S||pt!==F){if((_!==is||C!==is)&&(i.blendEquation(i.FUNC_ADD),_=is,C=is),pt)switch(D){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ls:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,L=null,w=null,G=null,T.set(0,0,0),y=0,S=D,F=pt}return}Oe=Oe||ge,st=st||_e,ot=ot||Ge,(ge!==_||Oe!==C)&&(i.blendEquationSeparate(Fe[ge],Fe[Oe]),_=ge,C=Oe),(_e!==v||Ge!==L||st!==w||ot!==G)&&(i.blendFuncSeparate(He[_e],He[Ge],He[st],He[ot]),v=_e,L=Ge,w=st,G=ot),(Rt.equals(T)===!1||Bt!==y)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Bt),T.copy(Rt),y=Bt),S=D,F=!1}function K(D,ge){D.side===Ct?Be(i.CULL_FACE):We(i.CULL_FACE);let _e=D.side===Nt;ge&&(_e=!_e),oe(_e),D.blending===Js&&D.transparent===!1?Pe(Ni):Pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let Ge=D.stencilWrite;l.setTest(Ge),Ge&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?We(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(D){Z!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Z=D)}function b(D){D!==pp?(We(i.CULL_FACE),D!==ue&&(D===Wh?i.cullFace(i.BACK):D===mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),ue=D}function E(D){D!==U&&(Q&&i.lineWidth(D),U=D)}function z(D,ge,_e){D?(We(i.POLYGON_OFFSET_FILL),(k!==ge||Y!==_e)&&(i.polygonOffset(ge,_e),k=ge,Y=_e)):Be(i.POLYGON_OFFSET_FILL)}function J(D){D?We(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function ae(D){D===void 0&&(D=i.TEXTURE0+ee-1),te!==D&&(i.activeTexture(D),te=D)}function ce(D,ge,_e){_e===void 0&&(te===null?_e=i.TEXTURE0+ee-1:_e=te);let Ge=ye[_e];Ge===void 0&&(Ge={type:void 0,texture:void 0},ye[_e]=Ge),(Ge.type!==D||Ge.texture!==ge)&&(te!==_e&&(i.activeTexture(_e),te=_e),i.bindTexture(D,ge||Ue[D]),Ge.type=D,Ge.texture=ge)}function Le(){let D=ye[te];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){me.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function Ke(D){Re.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Qe(D,ge){let _e=u.get(ge);_e===void 0&&(_e=new WeakMap,u.set(ge,_e));let Ge=_e.get(D);Ge===void 0&&(Ge=i.getUniformBlockIndex(ge,D.name),_e.set(D,Ge))}function Xe(D,ge){let Ge=u.get(ge).get(D);h.get(ge)!==Ge&&(i.uniformBlockBinding(ge,Ge,D.__bindingPointIndex),h.set(ge,Ge))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,ye={},p={},g=new WeakMap,x=[],m=null,d=!1,S=null,_=null,v=null,L=null,C=null,w=null,G=null,T=new Ne(0,0,0),y=0,F=!1,Z=null,ue=null,U=null,k=null,Y=null,me.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:We,disable:Be,bindFramebuffer:je,drawBuffers:X,useProgram:lt,setBlending:Pe,setMaterial:K,setFlipSided:oe,setCullFace:b,setLineWidth:E,setPolygonOffset:z,setScissorTest:J,activeTexture:ae,bindTexture:ce,unbindTexture:Le,compressedTexImage2D:Ee,compressedTexImage3D:we,texImage2D:he,texImage3D:de,updateUBOMapping:Qe,uniformBlockBinding:Xe,texStorage2D:P,texStorage3D:ne,texSubImage2D:Ve,texSubImage3D:Ye,compressedTexSubImage2D:le,compressedTexSubImage3D:Ze,scissor:Ie,viewport:Ke,reset:ve}}function fv(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return p?new OffscreenCanvas(b,E):$r("canvas")}function x(b,E,z,J){let ae=1;if((b.width>J||b.height>J)&&(ae=J/Math.max(b.width,b.height)),ae<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ce=E?fa:Math.floor,Le=ce(ae*b.width),Ee=ce(ae*b.height);u===void 0&&(u=g(Le,Ee));let we=z?g(Le,Ee):u;return we.width=Le,we.height=Ee,we.getContext("2d").drawImage(b,0,0,Le,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Le+"x"+Ee+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Jc(b.width)&&Jc(b.height)}function d(b){return a?!1:b.wrapS!==En||b.wrapT!==En||b.minFilter!==zt&&b.minFilter!==dn}function S(b,E){return b.generateMipmaps&&E&&b.minFilter!==zt&&b.minFilter!==dn}function _(b){i.generateMipmap(b)}function v(b,E,z,J,ae=!1){if(a===!1)return E;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=E;if(E===i.RED&&(z===i.FLOAT&&(ce=i.R32F),z===i.HALF_FLOAT&&(ce=i.R16F),z===i.UNSIGNED_BYTE&&(ce=i.R8)),E===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ce=i.R8UI),z===i.UNSIGNED_SHORT&&(ce=i.R16UI),z===i.UNSIGNED_INT&&(ce=i.R32UI),z===i.BYTE&&(ce=i.R8I),z===i.SHORT&&(ce=i.R16I),z===i.INT&&(ce=i.R32I)),E===i.RG&&(z===i.FLOAT&&(ce=i.RG32F),z===i.HALF_FLOAT&&(ce=i.RG16F),z===i.UNSIGNED_BYTE&&(ce=i.RG8)),E===i.RGBA){let Le=ae?ca:ut.getTransfer(J);z===i.FLOAT&&(ce=i.RGBA32F),z===i.HALF_FLOAT&&(ce=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ce=Le===bt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(b,E,z){return S(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==zt&&b.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){return b===zt||b===aa||b===Vr?i.NEAREST:i.LINEAR}function w(b){let E=b.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E)}function G(b){let E=b.target;E.removeEventListener("dispose",G),F(E)}function T(b){let E=n.get(b);if(E.__webglInit===void 0)return;let z=b.source,J=f.get(z);if(J){let ae=J[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(b),Object.keys(J).length===0&&f.delete(z)}n.remove(b)}function y(b){let E=n.get(b);i.deleteTexture(E.__webglTexture);let z=b.source,J=f.get(z);delete J[E.__cacheKey],o.memory.textures--}function F(b){let E=b.texture,z=n.get(b),J=n.get(E);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(z.__webglFramebuffer[ae]))for(let ce=0;ce<z.__webglFramebuffer[ae].length;ce++)i.deleteFramebuffer(z.__webglFramebuffer[ae][ce]);else i.deleteFramebuffer(z.__webglFramebuffer[ae]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ae])}else{if(Array.isArray(z.__webglFramebuffer))for(let ae=0;ae<z.__webglFramebuffer.length;ae++)i.deleteFramebuffer(z.__webglFramebuffer[ae]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ae=0;ae<z.__webglColorRenderbuffer.length;ae++)z.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ae]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ae=0,ce=E.length;ae<ce;ae++){let Le=n.get(E[ae]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(E[ae])}n.remove(E),n.remove(b)}let Z=0;function ue(){Z=0}function U(){let b=Z;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),Z+=1,b}function k(b){let E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function Y(b,E){let z=n.get(b);if(b.isVideoTexture&&K(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){let J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(z,b,E);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+E)}function ee(b,E){let z=n.get(b);if(b.version>0&&z.__version!==b.version){me(z,b,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+E)}function Q(b,E){let z=n.get(b);if(b.version>0&&z.__version!==b.version){me(z,b,E);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+E)}function $(b,E){let z=n.get(b);if(b.version>0&&z.__version!==b.version){Re(z,b,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+E)}let fe={[pi]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},te={[zt]:i.NEAREST,[aa]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},ye={[rm]:i.NEVER,[um]:i.ALWAYS,[om]:i.LESS,[$f]:i.LEQUAL,[am]:i.EQUAL,[hm]:i.GEQUAL,[cm]:i.GREATER,[lm]:i.NOTEQUAL};function B(b,E,z){if(z?(i.texParameteri(b,i.TEXTURE_WRAP_S,fe[E.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,fe[E.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,fe[E.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,te[E.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==En||E.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,C(E.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==zt&&E.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===zt||E.minFilter!==Vr&&E.minFilter!==Fi||E.type===fi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Jr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ie(b,E){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",w));let J=E.source,ae=f.get(J);ae===void 0&&(ae={},f.set(J,ae));let ce=k(E);if(ce!==b.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ae[ce].usedTimes++;let Le=ae[b.__cacheKey];Le!==void 0&&(ae[b.__cacheKey].usedTimes--,Le.usedTimes===0&&y(E)),b.__cacheKey=ce,b.__webglTexture=ae[ce].texture}return z}function me(b,E,z){let J=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=i.TEXTURE_3D);let ae=ie(b,E),ce=E.source;t.bindTexture(J,b.__webglTexture,i.TEXTURE0+z);let Le=n.get(ce);if(ce.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+z);let Ee=ut.getPrimaries(ut.workingColorSpace),we=E.colorSpace===Cn?null:ut.getPrimaries(E.colorSpace),Ve=E.colorSpace===Cn||Ee===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Ye=d(E)&&m(E.image)===!1,le=x(E.image,Ye,!1,s.maxTextureSize);le=oe(E,le);let Ze=m(le)||a,P=r.convert(E.format,E.colorSpace),ne=r.convert(E.type),he=v(E.internalFormat,P,ne,E.colorSpace,E.isVideoTexture);B(J,E,Ze);let de,Ie=E.mipmaps,Ke=a&&E.isVideoTexture!==!0&&he!==Zf,Qe=Le.__version===void 0||ae===!0,Xe=L(E,le,Ze);if(E.isDepthTexture)he=i.DEPTH_COMPONENT,a?E.type===fi?he=i.DEPTH_COMPONENT32F:E.type===Ii?he=i.DEPTH_COMPONENT24:E.type===os?he=i.DEPTH24_STENCIL8:he=i.DEPTH_COMPONENT16:E.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===as&&he===i.DEPTH_COMPONENT&&E.type!==zl&&E.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ii,ne=r.convert(E.type)),E.format===nr&&he===i.DEPTH_COMPONENT&&(he=i.DEPTH_STENCIL,E.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=os,ne=r.convert(E.type))),Qe&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,he,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,P,ne,null));else if(E.isDataTexture)if(Ie.length>0&&Ze){Ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Xe,he,Ie[0].width,Ie[0].height);for(let ve=0,D=Ie.length;ve<D;ve++)de=Ie[ve],Ke?t.texSubImage2D(i.TEXTURE_2D,ve,0,0,de.width,de.height,P,ne,de.data):t.texImage2D(i.TEXTURE_2D,ve,he,de.width,de.height,0,P,ne,de.data);E.generateMipmaps=!1}else Ke?(Qe&&t.texStorage2D(i.TEXTURE_2D,Xe,he,le.width,le.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,P,ne,le.data)):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,P,ne,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,he,Ie[0].width,Ie[0].height,le.depth);for(let ve=0,D=Ie.length;ve<D;ve++)de=Ie[ve],E.format!==Rn?P!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,de.width,de.height,le.depth,P,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,he,de.width,de.height,le.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,de.width,de.height,le.depth,P,ne,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,he,de.width,de.height,le.depth,0,P,ne,de.data)}else{Ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Xe,he,Ie[0].width,Ie[0].height);for(let ve=0,D=Ie.length;ve<D;ve++)de=Ie[ve],E.format!==Rn?P!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,de.width,de.height,P,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,he,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,ve,0,0,de.width,de.height,P,ne,de.data):t.texImage2D(i.TEXTURE_2D,ve,he,de.width,de.height,0,P,ne,de.data)}else if(E.isDataArrayTexture)Ke?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,he,le.width,le.height,le.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,P,ne,le.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,le.width,le.height,le.depth,0,P,ne,le.data);else if(E.isData3DTexture)Ke?(Qe&&t.texStorage3D(i.TEXTURE_3D,Xe,he,le.width,le.height,le.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,P,ne,le.data)):t.texImage3D(i.TEXTURE_3D,0,he,le.width,le.height,le.depth,0,P,ne,le.data);else if(E.isFramebufferTexture){if(Qe)if(Ke)t.texStorage2D(i.TEXTURE_2D,Xe,he,le.width,le.height);else{let ve=le.width,D=le.height;for(let ge=0;ge<Xe;ge++)t.texImage2D(i.TEXTURE_2D,ge,he,ve,D,0,P,ne,null),ve>>=1,D>>=1}}else if(Ie.length>0&&Ze){Ke&&Qe&&t.texStorage2D(i.TEXTURE_2D,Xe,he,Ie[0].width,Ie[0].height);for(let ve=0,D=Ie.length;ve<D;ve++)de=Ie[ve],Ke?t.texSubImage2D(i.TEXTURE_2D,ve,0,0,P,ne,de):t.texImage2D(i.TEXTURE_2D,ve,he,P,ne,de);E.generateMipmaps=!1}else Ke?(Qe&&t.texStorage2D(i.TEXTURE_2D,Xe,he,le.width,le.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,P,ne,le)):t.texImage2D(i.TEXTURE_2D,0,he,P,ne,le);S(E,Ze)&&_(J),Le.__version=ce.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Re(b,E,z){if(E.image.length!==6)return;let J=ie(b,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);let ce=n.get(ae);if(ae.version!==ce.__version||J===!0){t.activeTexture(i.TEXTURE0+z);let Le=ut.getPrimaries(ut.workingColorSpace),Ee=E.colorSpace===Cn?null:ut.getPrimaries(E.colorSpace),we=E.colorSpace===Cn||Le===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,le=[];for(let ve=0;ve<6;ve++)!Ve&&!Ye?le[ve]=x(E.image[ve],!1,!0,s.maxCubemapSize):le[ve]=Ye?E.image[ve].image:E.image[ve],le[ve]=oe(E,le[ve]);let Ze=le[0],P=m(Ze)||a,ne=r.convert(E.format,E.colorSpace),he=r.convert(E.type),de=v(E.internalFormat,ne,he,E.colorSpace),Ie=a&&E.isVideoTexture!==!0,Ke=ce.__version===void 0||J===!0,Qe=L(E,Ze,P);B(i.TEXTURE_CUBE_MAP,E,P);let Xe;if(Ve){Ie&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,de,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){Xe=le[ve].mipmaps;for(let D=0;D<Xe.length;D++){let ge=Xe[D];E.format!==Rn?ne!==null?Ie?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D,0,0,ge.width,ge.height,ne,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D,de,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D,0,0,ge.width,ge.height,ne,he,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D,de,ge.width,ge.height,0,ne,he,ge.data)}}}else{Xe=E.mipmaps,Ie&&Ke&&(Xe.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,de,le[0].width,le[0].height));for(let ve=0;ve<6;ve++)if(Ye){Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,le[ve].width,le[ve].height,ne,he,le[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,le[ve].width,le[ve].height,0,ne,he,le[ve].data);for(let D=0;D<Xe.length;D++){let _e=Xe[D].image[ve].image;Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D+1,0,0,_e.width,_e.height,ne,he,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D+1,de,_e.width,_e.height,0,ne,he,_e.data)}}else{Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ne,he,le[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,ne,he,le[ve]);for(let D=0;D<Xe.length;D++){let ge=Xe[D];Ie?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D+1,0,0,ne,he,ge.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,D+1,de,ne,he,ge.image[ve])}}}S(E,P)&&_(i.TEXTURE_CUBE_MAP),ce.__version=ae.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ae(b,E,z,J,ae,ce){let Le=r.convert(z.format,z.colorSpace),Ee=r.convert(z.type),we=v(z.internalFormat,Le,Ee,z.colorSpace);if(!n.get(E).__hasExternalTextures){let Ye=Math.max(1,E.width>>ce),le=Math.max(1,E.height>>ce);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,we,Ye,le,E.depth,0,Le,Ee,null):t.texImage2D(ae,ce,we,Ye,le,0,Le,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Pe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ae,n.get(z).__webglTexture,0,He(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ae,n.get(z).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(b,E,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let J=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||Pe(E)){let ae=E.depthTexture;ae&&ae.isDepthTexture&&(ae.type===fi?J=i.DEPTH_COMPONENT32F:ae.type===Ii&&(J=i.DEPTH_COMPONENT24));let ce=He(E);Pe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,J,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,J,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){let J=He(E);z&&Pe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,E.width,E.height):Pe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let J=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ae=0;ae<J.length;ae++){let ce=J[ae],Le=r.convert(ce.format,ce.colorSpace),Ee=r.convert(ce.type),we=v(ce.internalFormat,Le,Ee,ce.colorSpace),Ve=He(E);z&&Pe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,we,E.width,E.height):Pe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,we,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let J=n.get(E.depthTexture).__webglTexture,ae=He(E);if(E.depthTexture.format===as)Pe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(E.depthTexture.format===nr)Pe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Be(b){let E=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");We(E.__webglFramebuffer,b)}else if(z){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=i.createRenderbuffer(),Ue(E.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Ue(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(b,E,z){let J=n.get(b);E!==void 0&&Ae(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Be(b)}function X(b){let E=b.texture,z=n.get(b),J=n.get(E);b.addEventListener("dispose",G),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=E.version,o.memory.textures++);let ae=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,Le=m(b)||a;if(ae){z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[Ee]=[];for(let we=0;we<E.mipmaps.length;we++)z.__webglFramebuffer[Ee][we]=i.createFramebuffer()}else z.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)z.__webglFramebuffer[Ee]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let Ee=b.texture;for(let we=0,Ve=Ee.length;we<Ve;we++){let Ye=n.get(Ee[we]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Pe(b)===!1){let Ee=ce?E:[E];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){let Ve=Ee[we];z.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[we]);let Ye=r.convert(Ve.format,Ve.colorSpace),le=r.convert(Ve.type),Ze=v(Ve.internalFormat,Ye,le,Ve.colorSpace,b.isXRRenderTarget===!0),P=He(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,P,Ze,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,z.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),B(i.TEXTURE_CUBE_MAP,E,Le);for(let Ee=0;Ee<6;Ee++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Ae(z.__webglFramebuffer[Ee][we],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,we);else Ae(z.__webglFramebuffer[Ee],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(E,Le)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let Ee=b.texture;for(let we=0,Ve=Ee.length;we<Ve;we++){let Ye=Ee[we],le=n.get(Ye);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),B(i.TEXTURE_2D,Ye,Le),Ae(z.__webglFramebuffer,b,Ye,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),S(Ye,Le)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?Ee=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,J.__webglTexture),B(Ee,E,Le),a&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Ae(z.__webglFramebuffer[we],b,E,i.COLOR_ATTACHMENT0,Ee,we);else Ae(z.__webglFramebuffer,b,E,i.COLOR_ATTACHMENT0,Ee,0);S(E,Le)&&_(Ee),t.unbindTexture()}b.depthBuffer&&Be(b)}function lt(b){let E=m(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,ae=z.length;J<ae;J++){let ce=z[J];if(S(ce,E)){let Le=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(ce).__webglTexture;t.bindTexture(Le,Ee),_(Le),t.unbindTexture()}}}function Fe(b){if(a&&b.samples>0&&Pe(b)===!1){let E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,J=b.height,ae=i.COLOR_BUFFER_BIT,ce=[],Le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(b),we=b.isWebGLMultipleRenderTargets===!0;if(we)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){ce.push(i.COLOR_ATTACHMENT0+Ve),b.depthBuffer&&ce.push(Le);let Ye=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Ye===!1&&(b.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),we&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ve]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Le]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Le])),we){let le=n.get(E[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,ae,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ve]);let Ye=n.get(E[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function He(b){return Math.min(s.maxSamples,b.samples)}function Pe(b){let E=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(b){let E=o.render.frame;h.get(b)!==E&&(h.set(b,E),b.update())}function oe(b,E){let z=b.colorSpace,J=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===jc||z!==Gt&&z!==Cn&&(ut.getTransfer(z)===bt?a===!1?e.has("EXT_sRGB")===!0&&J===Rn?(b.format=jc,b.minFilter=dn,b.generateMipmaps=!1):E=da.sRGBToLinear(E):(J!==Rn||ae!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=U,this.resetTextureUnits=ue,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=X,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Pe}function dv(i,e,t){let n=t.isWebGL2;function s(r,o=Cn){let a,c=ut.getTransfer(o);if(r===Oi)return i.UNSIGNED_BYTE;if(r===Gf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===qp)return i.BYTE;if(r===Zp)return i.SHORT;if(r===zl)return i.UNSIGNED_SHORT;if(r===Vf)return i.INT;if(r===Ii)return i.UNSIGNED_INT;if(r===fi)return i.FLOAT;if(r===Jr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Kp)return i.ALPHA;if(r===Rn)return i.RGBA;if(r===jp)return i.LUMINANCE;if(r===Jp)return i.LUMINANCE_ALPHA;if(r===as)return i.DEPTH_COMPONENT;if(r===nr)return i.DEPTH_STENCIL;if(r===jc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$p)return i.RED;if(r===Xf)return i.RED_INTEGER;if(r===Qp)return i.RG;if(r===Yf)return i.RG_INTEGER;if(r===qf)return i.RGBA_INTEGER;if(r===cc||r===lc||r===hc||r===uc)if(c===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Jh||r===$h||r===Qh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===eu||r===tu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===eu)return c===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===tu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===fu||r===du||r===pu||r===mu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===nu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===iu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===su)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ru)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ou)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===au)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===du)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fc||r===gu||r===xu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fc)return c===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===em||r===_u||r===vu||r===yu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===_u)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===os?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var hl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},at=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},pv={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ul=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=t.getContextAttributes(),m=null,d=null,S=[],_=[],v=new xe,L=null,C=new Ht;C.layers.enable(1),C.viewport=new gt;let w=new Ht;w.layers.enable(2),w.viewport=new gt;let G=[C,w],T=new hl;T.layers.enable(1),T.layers.enable(2);let y=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ie=S[B];return ie===void 0&&(ie=new Yr,S[B]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(B){let ie=S[B];return ie===void 0&&(ie=new Yr,S[B]=ie),ie.getGripSpace()},this.getHand=function(B){let ie=S[B];return ie===void 0&&(ie=new Yr,S[B]=ie),ie.getHandSpace()};function Z(B){let ie=_.indexOf(B.inputSource);if(ie===-1)return;let me=S[ie];me!==void 0&&(me.update(B.inputSource,B.frame,l||o),me.dispatchEvent({type:B.type,data:B.inputSource}))}function ue(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",U);for(let B=0;B<S.length;B++){let ie=_[B];ie!==null&&(_[B]=null,S[B].disconnect(ie))}y=null,F=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new mi(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ie=null,me=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?nr:as,me=x.stencil?os:Ii);let Ae={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new mi(f.textureWidth,f.textureHeight,{format:Rn,type:Oi,depthTexture:new ya(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ue=e.properties.get(d);Ue.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(B){for(let ie=0;ie<B.removed.length;ie++){let me=B.removed[ie],Re=_.indexOf(me);Re>=0&&(_[Re]=null,S[Re].disconnect(me))}for(let ie=0;ie<B.added.length;ie++){let me=B.added[ie],Re=_.indexOf(me);if(Re===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=_.length){_.push(me),Re=Ue;break}else if(_[Ue]===null){_[Ue]=me,Re=Ue;break}if(Re===-1)break}let Ae=S[Re];Ae&&Ae.connect(me)}}let k=new R,Y=new R;function ee(B,ie,me){k.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);let Re=k.distanceTo(Y),Ae=ie.projectionMatrix.elements,Ue=me.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],X=(Ae[9]-1)/Ae[5],lt=(Ae[8]-1)/Ae[0],Fe=(Ue[8]+1)/Ue[0],He=We*lt,Pe=We*Fe,K=Re/(-lt+Fe),oe=K*-lt;ie.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(oe),B.translateZ(K),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let b=We+K,E=Be+K,z=He-oe,J=Pe+(Re-oe),ae=je*Be/E*b,ce=X*Be/E*b;B.projectionMatrix.makePerspective(z,J,ae,ce,b,E),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function Q(B,ie){ie===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ie.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;T.near=w.near=C.near=B.near,T.far=w.far=C.far=B.far,(y!==T.near||F!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),y=T.near,F=T.far);let ie=B.parent,me=T.cameras;Q(T,ie);for(let Re=0;Re<me.length;Re++)Q(me[Re],ie);me.length===2?ee(T,C,w):T.projectionMatrix.copy(C.projectionMatrix),$(B,T,ie)};function $(B,ie,me){me===null?B.matrix.copy(ie.matrixWorld):(B.matrix.copy(me.matrixWorld),B.matrix.invert(),B.matrix.multiply(ie.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ie.projectionMatrix),B.projectionMatrixInverse.copy(ie.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=sr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let fe=null;function te(B,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Re=!1;me.length!==T.cameras.length&&(T.cameras.length=0,Re=!0);for(let Ae=0;Ae<me.length;Ae++){let Ue=me[Ae],We=null;if(p!==null)We=p.getViewport(Ue);else{let je=u.getViewSubImage(f,Ue);We=je.viewport,Ae===0&&(e.setRenderTargetTextures(d,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Be=G[Ae];Be===void 0&&(Be=new Ht,Be.layers.enable(Ae),Be.viewport=new gt,G[Ae]=Be),Be.matrix.fromArray(Ue.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ue.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(We.x,We.y,We.width,We.height),Ae===0&&(T.matrix.copy(Be.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Re===!0&&T.cameras.push(Be)}}for(let me=0;me<S.length;me++){let Re=_[me],Ae=S[me];Re!==null&&Ae!==void 0&&Ae.update(Re,ie,l||o)}fe&&fe(B,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let ye=new nd;ye.setAnimationLoop(te),this.setAnimationLoop=function(B){fe=B},this.dispose=function(){}}};function mv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,td(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Nt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Nt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,_){let v=_.program;n.uniformBlockBinding(S,v)}function l(S,_){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",m));let L=_.program;n.updateUBOMapping(S,L);let C=e.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function h(S){let _=u();S.__bindingPointIndex=_;let v=i.createBuffer(),L=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=s[S.id],v=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,w=v.length;C<w;C++){let G=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,y=G.length;T<y;T++){let F=G[T];if(p(F,C,T,L)===!0){let Z=F.__offset,ue=Array.isArray(F.value)?F.value:[F.value],U=0;for(let k=0;k<ue.length;k++){let Y=ue[k],ee=x(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,Z+U,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,U),U+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,_,v,L){let C=S.value,w=_+"_"+v;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{let G=L[w];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return L[w]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function g(S){let _=S.uniforms,v=0,L=16;for(let w=0,G=_.length;w<G;w++){let T=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,F=T.length;y<F;y++){let Z=T[y],ue=Array.isArray(Z.value)?Z.value:[Z.value];for(let U=0,k=ue.length;U<k;U++){let Y=ue[U],ee=x(Y),Q=v%L;Q!==0&&L-Q<ee.boundary&&(v+=L-Q),Z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=v,v+=ee.storage}}}let C=v%L;return C>0&&(v+=L-C),S.__size=v,S.__cache={},this}function x(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var to=class{constructor(e={}){let{canvas:t=wm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;let _=this,v=!1,L=0,C=0,w=null,G=-1,T=null,y=new gt,F=new gt,Z=null,ue=new Ne(0),U=0,k=t.width,Y=t.height,ee=1,Q=null,$=null,fe=new gt(0,0,k,Y),te=new gt(0,0,k,Y),ye=!1,B=new eo,ie=!1,me=!1,Re=null,Ae=new De,Ue=new xe,We=new R,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return w===null?ee:1}let X=n;function lt(A,V){for(let q=0;q<A.length;q++){let j=A[q],M=t.getContext(j,V);if(M!==null)return M}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ge,!1),X===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),X=lt(V,A),X===null)throw lt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Fe,He,Pe,K,oe,b,E,z,J,ae,ce,Le,Ee,we,Ve,Ye,le,Ze,P,ne,he,de,Ie,Ke;function Qe(){Fe=new Ux(X),He=new Cx(X,Fe,e),Fe.init(He),de=new dv(X,Fe,He),Pe=new uv(X,Fe,He),K=new Bx(X),oe=new Q_,b=new fv(X,Fe,Pe,oe,He,de,K),E=new Lx(_),z=new Nx(_),J=new Ym(X,He),Ie=new Ax(X,Fe,J,He),ae=new Ox(X,J,K,Ie),ce=new Vx(X,ae,J,K),P=new Hx(X,He,b),Ye=new Px(oe),Le=new $_(_,E,z,Fe,He,Ie,Ye),Ee=new mv(_,oe),we=new tv,Ve=new av(Fe,He),Ze=new wx(_,E,z,Pe,ce,f,c),le=new hv(_,ce,He),Ke=new gv(X,K,He,Pe),ne=new Rx(X,Fe,K,He),he=new Fx(X,Fe,K,He),K.programs=Le.programs,_.capabilities=He,_.extensions=Fe,_.properties=oe,_.renderLists=we,_.shadowMap=le,_.state=Pe,_.info=K}Qe();let Xe=new ul(_,X);this.xr=Xe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(k,Y,!1))},this.getSize=function(A){return A.set(k,Y)},this.setSize=function(A,V,q=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,Y=V,t.width=Math.floor(A*ee),t.height=Math.floor(V*ee),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(k*ee,Y*ee).floor()},this.setDrawingBufferSize=function(A,V,q){k=A,Y=V,ee=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(fe)},this.setViewport=function(A,V,q,j){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,V,q,j),Pe.viewport(y.copy(fe).multiplyScalar(ee).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,V,q,j){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,V,q,j),Pe.scissor(F.copy(te).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){Pe.setScissorTest(ye=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,V=!0,q=!0){let j=0;if(A){let M=!1;if(w!==null){let N=w.texture.format;M=N===qf||N===Yf||N===Xf}if(M){let N=w.texture.type,O=N===Oi||N===Ii||N===zl||N===os||N===Gf||N===Wf,H=Ze.getClearColor(),W=Ze.getClearAlpha(),re=H.r,se=H.g,Me=H.b;O?(p[0]=re,p[1]=se,p[2]=Me,p[3]=W,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=re,g[1]=se,g[2]=Me,g[3]=W,X.clearBufferiv(X.COLOR,0,g))}else j|=X.COLOR_BUFFER_BIT}V&&(j|=X.DEPTH_BUFFER_BIT),q&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),we.dispose(),Ve.dispose(),oe.dispose(),E.dispose(),z.dispose(),ce.dispose(),Ie.dispose(),Ke.dispose(),Le.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Bt),Xe.removeEventListener("sessionend",pt),Re&&(Re.dispose(),Re=null),Lt.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let A=K.autoReset,V=le.enabled,q=le.autoUpdate,j=le.needsUpdate,M=le.type;Qe(),K.autoReset=A,le.enabled=V,le.autoUpdate=q,le.needsUpdate=j,le.type=M}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let V=A.target;V.removeEventListener("dispose",_e),Ge(V)}function Ge(A){Oe(A),oe.remove(A)}function Oe(A){let V=oe.get(A).programs;V!==void 0&&(V.forEach(function(q){Le.releaseProgram(q)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,j,M,N){V===null&&(V=Be);let O=M.isMesh&&M.matrixWorld.determinant()<0,H=sc(A,V,q,j,M);Pe.setMaterial(j,O);let W=q.index,re=1;if(j.wireframe===!0){if(W=ae.getWireframeAttribute(q),W===void 0)return;re=2}let se=q.drawRange,Me=q.attributes.position,pe=se.start*re,Se=(se.start+se.count)*re;N!==null&&(pe=Math.max(pe,N.start*re),Se=Math.min(Se,(N.start+N.count)*re)),W!==null?(pe=Math.max(pe,0),Se=Math.min(Se,W.count)):Me!=null&&(pe=Math.max(pe,0),Se=Math.min(Se,Me.count));let qe=Se-pe;if(qe<0||qe===1/0)return;Ie.setup(M,j,H,q,W);let ht,Je=ne;if(W!==null&&(ht=J.get(W),Je=he,Je.setIndex(ht)),M.isMesh)j.wireframe===!0?(Pe.setLineWidth(j.wireframeLinewidth*je()),Je.setMode(X.LINES)):Je.setMode(X.TRIANGLES);else if(M.isLine){let Ce=j.linewidth;Ce===void 0&&(Ce=1),Pe.setLineWidth(Ce*je()),M.isLineSegments?Je.setMode(X.LINES):M.isLineLoop?Je.setMode(X.LINE_LOOP):Je.setMode(X.LINE_STRIP)}else M.isPoints?Je.setMode(X.POINTS):M.isSprite&&Je.setMode(X.TRIANGLES);if(M.isBatchedMesh)Je.renderMultiDraw(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount);else if(M.isInstancedMesh)Je.renderInstances(pe,qe,M.count);else if(q.isInstancedBufferGeometry){let Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_t=Math.min(q.instanceCount,Ce);Je.renderInstances(pe,qe,_t)}else Je.render(pe,qe)};function st(A,V,q){A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=Nt,A.needsUpdate=!0,wi(A,V,q),A.side=Kn,A.needsUpdate=!0,wi(A,V,q),A.side=Ct):wi(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),m=Ve.get(q),m.init(),S.push(m),q.traverseVisible(function(M){M.isLight&&M.layers.test(V.layers)&&(m.pushLight(M),M.castShadow&&m.pushShadow(M))}),A!==q&&A.traverseVisible(function(M){M.isLight&&M.layers.test(V.layers)&&(m.pushLight(M),M.castShadow&&m.pushShadow(M))}),m.setupLights(_._useLegacyLights);let j=new Set;return A.traverse(function(M){let N=M.material;if(N)if(Array.isArray(N))for(let O=0;O<N.length;O++){let H=N[O];st(H,q,M),j.add(H)}else st(N,q,M),j.add(N)}),S.pop(),m=null,j},this.compileAsync=function(A,V,q=null){let j=this.compile(A,V,q);return new Promise(M=>{function N(){if(j.forEach(function(O){oe.get(O).currentProgram.isReady()&&j.delete(O)}),j.size===0){M(A);return}setTimeout(N,10)}Fe.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let ot=null;function Rt(A){ot&&ot(A)}function Bt(){Lt.stop()}function pt(){Lt.start()}let Lt=new nd;Lt.setAnimationLoop(Rt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(A){ot=A,Xe.setAnimationLoop(A),A===null?Lt.stop():Lt.start()},Xe.addEventListener("sessionstart",Bt),Xe.addEventListener("sessionend",pt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(V),V=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,w),m=Ve.get(A,S.length),m.init(),S.push(m),Ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B.setFromProjectionMatrix(Ae),me=this.localClippingEnabled,ie=Ye.init(this.clippingPlanes,me),x=we.get(A,d.length),x.init(),d.push(x),mn(A,V,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Q,$),this.info.render.frame++,ie===!0&&Ye.beginShadows();let q=m.state.shadowsArray;if(le.render(q,A,V),ie===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,A),m.setupLights(_._useLegacyLights),V.isArrayCamera){let j=V.cameras;for(let M=0,N=j.length;M<N;M++){let O=j[M];Cr(x,A,O,O.viewport)}}else Cr(x,A,V);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,V),Ie.resetDefaultState(),G=-1,T=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function mn(A,V,q,j){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||B.intersectsSprite(A)){j&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);let O=ce.update(A),H=A.material;H.visible&&x.push(A,O,H,q,We.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||B.intersectsObject(A))){let O=ce.update(A),H=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),We.copy(O.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(H)){let W=O.groups;for(let re=0,se=W.length;re<se;re++){let Me=W[re],pe=H[Me.materialIndex];pe&&pe.visible&&x.push(A,O,pe,q,We.z,Me)}}else H.visible&&x.push(A,O,H,q,We.z,null)}}let N=A.children;for(let O=0,H=N.length;O<H;O++)mn(N[O],V,q,j)}function Cr(A,V,q,j){let M=A.opaque,N=A.transmissive,O=A.transparent;m.setupLightsView(q),ie===!0&&Ye.setGlobalState(_.clippingPlanes,q),N.length>0&&ic(M,N,V,q),j&&Pe.viewport(y.copy(j)),M.length>0&&Ti(M,V,q),N.length>0&&Ti(N,V,q),O.length>0&&Ti(O,V,q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ic(A,V,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let N=He.isWebGL2;Re===null&&(Re=new mi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Jr:Oi,minFilter:Fi,samples:N?4:0})),_.getDrawingBufferSize(Ue),N?Re.setSize(Ue.x,Ue.y):Re.setSize(fa(Ue.x),fa(Ue.y));let O=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(ue),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();let H=_.toneMapping;_.toneMapping=Ui,Ti(A,q,j),b.updateMultisampleRenderTarget(Re),b.updateRenderTargetMipmap(Re);let W=!1;for(let re=0,se=V.length;re<se;re++){let Me=V[re],pe=Me.object,Se=Me.geometry,qe=Me.material,ht=Me.group;if(qe.side===Ct&&pe.layers.test(j.layers)){let Je=qe.side;qe.side=Nt,qe.needsUpdate=!0,Ss(pe,q,j,Se,qe,ht),qe.side=Je,qe.needsUpdate=!0,W=!0}}W===!0&&(b.updateMultisampleRenderTarget(Re),b.updateRenderTargetMipmap(Re)),_.setRenderTarget(O),_.setClearColor(ue,U),_.toneMapping=H}function Ti(A,V,q){let j=V.isScene===!0?V.overrideMaterial:null;for(let M=0,N=A.length;M<N;M++){let O=A[M],H=O.object,W=O.geometry,re=j===null?O.material:j,se=O.group;H.layers.test(q.layers)&&Ss(H,V,q,W,re,se)}}function Ss(A,V,q,j,M,N){A.onBeforeRender(_,V,q,j,M,N),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),M.onBeforeRender(_,V,q,j,A,N),M.transparent===!0&&M.side===Ct&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,_.renderBufferDirect(q,V,j,M,A,N),M.side=Kn,M.needsUpdate=!0,_.renderBufferDirect(q,V,j,M,A,N),M.side=Ct):_.renderBufferDirect(q,V,j,M,A,N),A.onAfterRender(_,V,q,j,M,N)}function wi(A,V,q){V.isScene!==!0&&(V=Be);let j=oe.get(A),M=m.state.lights,N=m.state.shadowsArray,O=M.state.version,H=Le.getParameters(A,M.state,N,V,q),W=Le.getProgramCacheKey(H),re=j.programs;j.environment=A.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(A.isMeshStandardMaterial?z:E).get(A.envMap||j.environment),re===void 0&&(A.addEventListener("dispose",_e),re=new Map,j.programs=re);let se=re.get(W);if(se!==void 0){if(j.currentProgram===se&&j.lightsStateVersion===O)return To(A,H),se}else H.uniforms=Le.getUniforms(A),A.onBuild(q,H,_),A.onBeforeCompile(H,_),se=Le.acquireProgram(H,W),re.set(W,se),j.uniforms=H.uniforms;let Me=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Me.clippingPlanes=Ye.uniform),To(A,H),j.needsLights=bs(A),j.lightsStateVersion=O,j.needsLights&&(Me.ambientLightColor.value=M.state.ambient,Me.lightProbe.value=M.state.probe,Me.directionalLights.value=M.state.directional,Me.directionalLightShadows.value=M.state.directionalShadow,Me.spotLights.value=M.state.spot,Me.spotLightShadows.value=M.state.spotShadow,Me.rectAreaLights.value=M.state.rectArea,Me.ltc_1.value=M.state.rectAreaLTC1,Me.ltc_2.value=M.state.rectAreaLTC2,Me.pointLights.value=M.state.point,Me.pointLightShadows.value=M.state.pointShadow,Me.hemisphereLights.value=M.state.hemi,Me.directionalShadowMap.value=M.state.directionalShadowMap,Me.directionalShadowMatrix.value=M.state.directionalShadowMatrix,Me.spotShadowMap.value=M.state.spotShadowMap,Me.spotLightMatrix.value=M.state.spotLightMatrix,Me.spotLightMap.value=M.state.spotLightMap,Me.pointShadowMap.value=M.state.pointShadowMap,Me.pointShadowMatrix.value=M.state.pointShadowMatrix),j.currentProgram=se,j.uniformsList=null,se}function Pr(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function To(A,V){let q=oe.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function sc(A,V,q,j,M){V.isScene!==!0&&(V=Be),b.resetTextureUnits();let N=V.fog,O=j.isMeshStandardMaterial?V.environment:null,H=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Gt,W=(j.isMeshStandardMaterial?z:E).get(j.envMap||O),re=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,se=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Me=!!q.morphAttributes.position,pe=!!q.morphAttributes.normal,Se=!!q.morphAttributes.color,qe=Ui;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(qe=_.toneMapping);let ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=ht!==void 0?ht.length:0,Ce=oe.get(j),_t=m.state.lights;if(ie===!0&&(me===!0||A!==T)){let jt=A===T&&j.id===G;Ye.setState(j,A,jt)}let $e=!1;j.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==_t.state.version||Ce.outputColorSpace!==H||M.isBatchedMesh&&Ce.batching===!1||!M.isBatchedMesh&&Ce.batching===!0||M.isInstancedMesh&&Ce.instancing===!1||!M.isInstancedMesh&&Ce.instancing===!0||M.isSkinnedMesh&&Ce.skinning===!1||!M.isSkinnedMesh&&Ce.skinning===!0||M.isInstancedMesh&&Ce.instancingColor===!0&&M.instanceColor===null||M.isInstancedMesh&&Ce.instancingColor===!1&&M.instanceColor!==null||Ce.envMap!==W||j.fog===!0&&Ce.fog!==N||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ye.numPlanes||Ce.numIntersection!==Ye.numIntersection)||Ce.vertexAlphas!==re||Ce.vertexTangents!==se||Ce.morphTargets!==Me||Ce.morphNormals!==pe||Ce.morphColors!==Se||Ce.toneMapping!==qe||He.isWebGL2===!0&&Ce.morphTargetsCount!==Je)&&($e=!0):($e=!0,Ce.__version=j.version);let gn=Ce.currentProgram;$e===!0&&(gn=wi(j,V,M));let ln=!1,en=!1,hn=!1,vt=gn.getUniforms(),tn=Ce.uniforms;if(Pe.useProgram(gn.program)&&(ln=!0,en=!0,hn=!0),j.id!==G&&(G=j.id,en=!0),ln||T!==A){vt.setValue(X,"projectionMatrix",A.projectionMatrix),vt.setValue(X,"viewMatrix",A.matrixWorldInverse);let jt=vt.map.cameraPosition;jt!==void 0&&jt.setValue(X,We.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&vt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,en=!0,hn=!0)}if(M.isSkinnedMesh){vt.setOptional(X,M,"bindMatrix"),vt.setOptional(X,M,"bindMatrixInverse");let jt=M.skeleton;jt&&(He.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),vt.setValue(X,"boneTexture",jt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}M.isBatchedMesh&&(vt.setOptional(X,M,"batchingTexture"),vt.setValue(X,"batchingTexture",M._matricesTexture,b));let ii=q.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0&&He.isWebGL2===!0)&&P.update(M,q,gn),(en||Ce.receiveShadow!==M.receiveShadow)&&(Ce.receiveShadow=M.receiveShadow,vt.setValue(X,"receiveShadow",M.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(tn.envMap.value=W,tn.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),en&&(vt.setValue(X,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&Lr(tn,hn),N&&j.fog===!0&&Ee.refreshFogUniforms(tn,N),Ee.refreshMaterialUniforms(tn,j,ee,Y,Re),Qs.upload(X,Pr(Ce),tn,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Qs.upload(X,Pr(Ce),tn,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(X,"center",M.center),vt.setValue(X,"modelViewMatrix",M.modelViewMatrix),vt.setValue(X,"normalMatrix",M.normalMatrix),vt.setValue(X,"modelMatrix",M.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let jt=j.uniformsGroups;for(let Ts=0,rc=jt.length;Ts<rc;Ts++)if(He.isWebGL2){let ze=jt[Ts];Ke.update(ze,gn),Ke.bind(ze,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function Lr(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function bs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,V,q){oe.get(A.texture).__webglTexture=V,oe.get(A.depthTexture).__webglTexture=q;let j=oe.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){let q=oe.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,q=0){w=A,L=V,C=q;let j=!0,M=null,N=!1,O=!1;if(A){let W=oe.get(A);W.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(X.FRAMEBUFFER,null),j=!1):W.__webglFramebuffer===void 0?b.setupRenderTarget(A):W.__hasExternalTextures&&b.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);let re=A.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(O=!0);let se=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[V])?M=se[V][q]:M=se[V],N=!0):He.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?M=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?M=se[q]:M=se,y.copy(A.viewport),F.copy(A.scissor),Z=A.scissorTest}else y.copy(fe).multiplyScalar(ee).floor(),F.copy(te).multiplyScalar(ee).floor(),Z=ye;if(Pe.bindFramebuffer(X.FRAMEBUFFER,M)&&He.drawBuffers&&j&&Pe.drawBuffers(A,M),Pe.viewport(y),Pe.scissor(F),Pe.setScissorTest(Z),N){let W=oe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,W.__webglTexture,q)}else if(O){let W=oe.get(A.texture),re=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,W.__webglTexture,q||0,re)}G=-1},this.readRenderTargetPixels=function(A,V,q,j,M,N,O){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&O!==void 0&&(H=H[O]),H){Pe.bindFramebuffer(X.FRAMEBUFFER,H);try{let W=A.texture,re=W.format,se=W.type;if(re!==Rn&&de.convert(re)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Me=se===Jr&&(Fe.has("EXT_color_buffer_half_float")||He.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(se!==Oi&&de.convert(se)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(se===fi&&(He.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!Me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-j&&q>=0&&q<=A.height-M&&X.readPixels(V,q,j,M,de.convert(re),de.convert(se),N)}finally{let W=w!==null?oe.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(X.FRAMEBUFFER,W)}}},this.copyFramebufferToTexture=function(A,V,q=0){let j=Math.pow(2,-q),M=Math.floor(V.image.width*j),N=Math.floor(V.image.height*j);b.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,A.x,A.y,M,N),Pe.unbindTexture()},this.copyTextureToTexture=function(A,V,q,j=0){let M=V.image.width,N=V.image.height,O=de.convert(q.format),H=de.convert(q.type);b.setTexture2D(q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,A.x,A.y,M,N,O,H,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,O,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,j,A.x,A.y,O,H,V.image),j===0&&q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,V,q,j,M=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let N=A.max.x-A.min.x+1,O=A.max.y-A.min.y+1,H=A.max.z-A.min.z+1,W=de.convert(j.format),re=de.convert(j.type),se;if(j.isData3DTexture)b.setTexture3D(j,0),se=X.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)b.setTexture2DArray(j,0),se=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);let Me=X.getParameter(X.UNPACK_ROW_LENGTH),pe=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Se=X.getParameter(X.UNPACK_SKIP_PIXELS),qe=X.getParameter(X.UNPACK_SKIP_ROWS),ht=X.getParameter(X.UNPACK_SKIP_IMAGES),Je=q.isCompressedTexture?q.mipmaps[M]:q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Je.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,A.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,A.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?X.texSubImage3D(se,M,V.x,V.y,V.z,N,O,H,W,re,Je.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(se,M,V.x,V.y,V.z,N,O,H,W,Je.data)):X.texSubImage3D(se,M,V.x,V.y,V.z,N,O,H,W,re,Je),X.pixelStorei(X.UNPACK_ROW_LENGTH,Me),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pe),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Se),X.pixelStorei(X.UNPACK_SKIP_ROWS,qe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ht),M===0&&j.generateMipmaps&&X.generateMipmap(se),Pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){L=0,C=0,w=null,Pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===kl?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===ka?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?cs:jf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cs?dt:Gt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fl=class extends to{};fl.prototype.isWebGL1Renderer=!0;var no=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new R,us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},io=class extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,Or=new R,Ws=new R,Xs=new R,Ys=new xe,Fr=new xe,cd=new De,Zo=new R,Br=new R,Ko=new R,uf=new xe,Oc=new xe,ff=new xe,Ma=class extends xt{constructor(e=new io){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lr(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new us(n,3,0,!1)),Gs.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;jo(Zo.set(-.5,-.5,0),Xs,o,Ws,s,r),jo(Br.set(.5,-.5,0),Xs,o,Ws,s,r),jo(Ko.set(.5,.5,0),Xs,o,Ws,s,r),uf.set(0,0),Oc.set(1,0),ff.set(1,1);let a=e.ray.intersectTriangle(Zo,Br,Ko,!1,Or);if(a===null&&(jo(Br.set(-.5,.5,0),Xs,o,Ws,s,r),Oc.set(0,1),a=e.ray.intersectTriangle(Zo,Ko,Br,!1,Or),a===null))return;let c=e.ray.origin.distanceTo(Or);c<e.near||c>e.far||t.push({distance:c,point:Or.clone(),uv:rs.getInterpolation(Or,Zo,Br,Ko,uf,Oc,ff,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(i,e,t,n,s,r){Ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*Ys.x-s*Ys.y,Fr.y=s*Ys.x+r*Ys.y):Fr.copy(Ys),i.copy(e),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(cd)}var df=new R,pf=new gt,mf=new gt,xv=new R,gf=new De,Jo=new R,Fc=new Sn,xf=new De,Bc=new gi,Ea=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(s),e.ray.intersectsSphere(Fc)!==!1&&(xf.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(xf),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;pf.fromBufferAttribute(s.attributes.skinIndex,e),mf.fromBufferAttribute(s.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=mf.getComponent(r);if(o!==0){let a=pf.getComponent(r);gf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xv.copy(df).applyMatrix4(gf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},so=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},dl=class extends Jt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,h=zt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_f=new De,_v=new De,Sa=class i{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:_v;_f.multiplyMatrices(a,t[r]),_f.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new dl(t,e,e,Rn,fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new so),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},fs=class extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new De,vf=new De,$o=[],yf=new Ut,vv=new De,zr=new ke,kr=new Sn,Yt=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),yf.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(yf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),kr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),vf.multiplyMatrices(n,qs),zr.matrixWorld=vf,zr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let c=$o[o];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mf=new R,Ef=new R,Sf=new De,zc=new gi,Qo=new Sn,hr=class extends xt{constructor(e=new Ot,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mf.fromBufferAttribute(t,s-1),Ef.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mf.distanceTo(Ef);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Sf.copy(s).invert(),zc.copy(e.ray).applyMatrix4(Sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,f=new R,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=d,v=S-1;_<v;_+=p){let L=g.getX(_),C=g.getX(_+1);if(l.fromBufferAttribute(m,L),h.fromBufferAttribute(m,C),zc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let _=d,v=S-1;_<v;_+=p){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),zc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},bf=new R,Tf=new R,ba=class extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),Tf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(Tf);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ds=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wf=new De,pl=new gi,ea=new Sn,ta=new R,ur=class extends xt{constructor(e=new Ot,t=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;wf.copy(s).invert(),pl.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=l.getX(g);ta.fromBufferAttribute(u,m),Af(ta,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)ta.fromBufferAttribute(u,g),Af(ta,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Af(i,e,t,n,s,r,o){let a=pl.distanceSqToPoint(i);if(a<t){let c=new R;pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Jn=class extends Jt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new xe:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,s=[],r=[],o=[],a=new R,c=new De;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},oo=class extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new xe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ml=class extends oo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var na=new R,kc=new Wl,Hc=new Wl,Vc=new Wl,gl=class extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),l=na);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),kc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Hc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Vc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Hc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Vc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(kc.calc(c),Hc.calc(c),Vc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function yv(i,e){let t=1-i;return t*t*e}function Mv(i,e){return 2*(1-i)*i*e}function Ev(i,e){return i*i*e}function qr(i,e,t,n){return yv(i,e)+Mv(i,t)+Ev(i,n)}function Sv(i,e){let t=1-i;return t*t*t*e}function bv(i,e){let t=1-i;return 3*t*t*i*e}function Tv(i,e){return 3*(1-i)*i*i*e}function wv(i,e){return i*i*i*e}function Zr(i,e,t,n,s){return Sv(i,e)+bv(i,t)+Tv(i,n)+wv(i,s)}var wa=class extends Ln{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends Ln{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y),Zr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Ln{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Ln{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Ln{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(e,s.x,r.x,o.x),qr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Ln{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(e,s.x,r.x,o.x),qr(e,s.y,r.y,o.y),qr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Rf(a,c.x,l.x,h.x,u.x),Rf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},Cf=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:gl,CubicBezierCurve:wa,CubicBezierCurve3:xl,EllipseCurve:oo,LineCurve:Aa,LineCurve3:_l,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:vl,SplineCurve:Ca}),yl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Cf[s.type]().fromJSON(s))}return this}},Pa=class extends yl{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ra(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new wa(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new oo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Qt=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function S(){let v=new R,L=new R,C=0,w=(t-e)/n;for(let G=0;G<=r;G++){let T=[],y=G/r,F=y*(t-e)+e;for(let Z=0;Z<=s;Z++){let ue=Z/s,U=ue*c+a,k=Math.sin(U),Y=Math.cos(U);L.x=F*k,L.y=-y*n+m,L.z=F*Y,u.push(L.x,L.y,L.z),v.set(k,w,Y).normalize(),f.push(v.x,v.y,v.z),p.push(ue,1-y),T.push(g++)}x.push(T)}for(let G=0;G<s;G++)for(let T=0;T<r;T++){let y=x[T][G],F=x[T+1][G],Z=x[T+1][G+1],ue=x[T][G+1];h.push(y,F,ue),h.push(F,Z,ue),C+=6}l.addGroup(d,C,0),d+=C}function _(v){let L=g,C=new xe,w=new R,G=0,T=v===!0?e:t,y=v===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let F=g;for(let Z=0;Z<=s;Z++){let U=Z/s*c+a,k=Math.cos(U),Y=Math.sin(U);w.x=T*Y,w.y=m*y,w.z=T*k,u.push(w.x,w.y,w.z),f.push(0,y,0),C.x=k*.5+.5,C.y=Y*.5*y+.5,p.push(C.x,C.y),g++}for(let Z=0;Z<s;Z++){let ue=L+Z,U=F+Z;v===!0?h.push(U,U+1,ue):h.push(U+1,U,ue),G+=3}l.addGroup(d,G,v===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fr=class i extends Qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bi=class extends Pa{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Pa().fromJSON(s))}return this}},Av={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ld(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,p;if(n&&(r=Iv(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return ao(r,o,t,a,c,p,0),o}};function ld(i,e,t,n,s){let r,o;if(s===Gv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Pf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Pf(r,i[r],i[r+1],o);return o&&Va(o,o.next)&&(lo(o),o=o.next),o}function ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Va(t,t.next)||At(t.prev,t,t.next)===0)){if(lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ao(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Fv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Cv(i,n,s,r):Rv(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),lo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Pv(ps(i),e,t),ao(i,e,t,n,s,r,2)):o===2&&Lv(i,e,t,n,s,r):ao(ps(i),e,t,n,s,r,1);break}}}function Rv(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&js(s,a,r,c,o,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(At(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Ml(p,g,e,t,n),S=Ml(x,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=d&&v&&v.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&js(a,h,c,u,l,f,_.x,_.y)&&At(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,h,c,u,l,f,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&js(a,h,c,u,l,f,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,h,c,u,l,f,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Va(s,r)&&hd(s,n,n.next,r)&&co(s,r)&&co(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),lo(n),lo(n.next),n=i=r),n=n.next}while(n!==i);return ps(n)}function Lv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kv(o,a)){let c=ud(o,a);o=ps(o,o.next),c=ps(c,c.next),ao(o,e,t,n,s,r,0),ao(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Iv(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ld(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(zv(l));for(s.sort(Dv),r=0;r<s.length;r++)t=Nv(s[r],t);return t}function Dv(i,e){return i.x-e.x}function Nv(i,e){let t=Uv(i,e);if(!t)return e;let n=ud(t,i);return ps(n,n.next),ps(t,t.next)}function Uv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&js(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),co(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ov(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Ov(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function Fv(i,e,t,n){let s=i;do s.z===0&&(s.z=Ml(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bv(s)}function Bv(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Ml(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function js(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function kv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Hv(i,e)&&(co(i,e)&&co(e,i)&&Vv(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||Va(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Va(i,e){return i.x===e.x&&i.y===e.y}function hd(i,e,t,n){let s=sa(At(i,e,t)),r=sa(At(i,e,n)),o=sa(At(t,n,i)),a=sa(At(t,n,e));return!!(s!==r&&o!==a||s===0&&ia(i,t,e)||r===0&&ia(i,n,e)||o===0&&ia(t,i,n)||a===0&&ia(t,e,n))}function ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sa(i){return i>0?1:i<0?-1:0}function Hv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function co(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function Vv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ud(i,e){let t=new El(i.i,i.x,i.y),n=new El(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(i,e,t,n){let s=new El(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function El(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Lf(e),If(n,e);let o=e.length;t.forEach(Lf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,If(n,t[c]);let a=Av.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Lf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function If(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ho=class i extends Ot{constructor(e=new Bi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Mt(s,3)),this.setAttribute("normal",new Mt(r,3)),this.setAttribute("uv",new Mt(o,2));function l(h){let u=s.length/3,f=h.extractPoints(t),p=f.shape,g=f.holes;Kr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let S=g[m];Kr.isClockWise(S)===!0&&(g[m]=S.reverse())}let x=Kr.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let S=g[m];p=p.concat(S)}for(let m=0,d=p.length;m<d;m++){let S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,d=x.length;m<d;m++){let S=x[m],_=S[0]+u,v=S[1]+u,L=S[2]+u;n.push(_,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Wv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Wv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var La=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let S=[],_=d/n,v=0;d===0&&o===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){let C=L/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(C+v,1-_),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let _=h[d][S+1],v=h[d][S],L=h[d+1][S],C=h[d+1][S+1];(d!==0||o>0)&&p.push(_,v,C),(d!==n-1||c<Math.PI)&&p.push(v,L,C)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var on=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jf,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends on{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ra(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Df(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function fd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=e,a=2*t-n;break;case Su:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eu:o=e,c=2*n-t;break;case Su:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let L=0;L!==a;++L)r[L]=d*o[h+L]+S*o[l+L]+_*o[c+L]+v*o[u+L];return r}},bl=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Tl=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Xv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=hs;var ki=class extends Dn{};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ir;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Dn{};Ia.prototype.ValueTypeName="color";var xi=class extends Dn{};xi.prototype.ValueTypeName="number";var wl=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)$t.slerpFlat(r,0,o,l-a,o,l,c);return r}},$n=class extends Dn{InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};$n.prototype.ValueTypeName="quaternion";$n.prototype.DefaultInterpolation=hs;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Dn{};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ir;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends Dn{};_i.prototype.ValueTypeName="vector";var Da=class{constructor(e,t=-1,n,s=tm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Zv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Yv(c);c=Df(c,1,h),l=Df(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,x){if(p.length!==0){let m=[],d=[];fd(p,m,d,g),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let S=0;S!==f[g].morphTargets.length;++S){let _=f[g];m.push(_.time),d.push(_.morphTarget===x?1:0)}s.push(new xi(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(_i,p+".position",f,"pos",s),n($n,p+".quaternion",f,"rot",s),n(_i,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function qv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return _i;case"color":return Ia;case"quaternion":return $n;case"bool":case"boolean":return ki;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qv(i.type);if(i.times===void 0){let t=[],n=[];fd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Al=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Kv=new Al,vi=class{constructor(e){this.manager=e!==void 0?e:Kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi={},Rl=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends vi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=hi[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){S();function S(){u.read().then(({done:_,value:v})=>{if(_)d.close();else{x+=v.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let C=0,w=h.length;C<w;C++){let G=h[C];G.onProgress&&G.onProgress(L)}d.enqueue(v),S()}})}}});return new Response(m)}else throw new Rl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Di.add(e,l);let h=hi[e];delete hi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=hi[e];if(h===void 0)throw this.manager.itemError(e),l;delete hi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Cl=class extends vi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=$r("img");function c(){h(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var dr=class extends vi{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,o=new Cl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},pr=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Na=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gc=new De,Nf=new R,Uf=new R,fo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=class extends fo{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mr=class extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Of=new De,Hr=new R,Wc=new R,Ll=class extends fo{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hr),Wc.copy(n.position),Wc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wc),n.updateMatrixWorld(),s.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}},Vi=class extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ll}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Il=class extends fo{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Gi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ua=class extends vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,c),r.manager.itemStart(e)}};var Oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ff(){return(typeof performance>"u"?Date:performance).now()}var Xl="\\[\\]\\.:\\/",jv=new RegExp("["+Xl+"]","g"),Yl="[^"+Xl+"]",Jv="[^"+Xl.replace("\\.","")+"]",$v=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Qv=/(WCOD+)?/.source.replace("WCOD",Jv),ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),ny=new RegExp("^"+$v+Qv+ey+ty+"$"),iy=["material","materials","bones","map"],Dl=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jv,"")}static parseTrackName(e){let t=ny.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);iy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Dl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fM=new Float32Array(1);var Fa=class{constructor(e,t,n=0,s=1/0){this.ray=new gi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(Bf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,n,t);return n.sort(Bf),n}};function Bf(i,e){return i.distance-e.distance}function Nl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Nl(s[r],e,t,!0)}}var po=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var bn=Uint8Array,_r=Uint16Array,sy=Int32Array,dd=new bn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pd=new bn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ry=new bn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),md=function(i,e){for(var t=new _r(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new sy(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},gd=md(dd,2),xd=gd.b,oy=gd.r;xd[28]=258,oy[258]=28;var _d=md(pd,0),ay=_d.b,dM=_d.r,Kl=new _r(32768);for(ft=0;ft<32768;++ft)yi=(ft&43690)>>1|(ft&21845)<<1,yi=(yi&52428)>>2|(yi&13107)<<2,yi=(yi&61680)>>4|(yi&3855)<<4,Kl[ft]=((yi&65280)>>8|(yi&255)<<8)>>1;var yi,ft,xo=function(i,e,t){for(var n=i.length,s=0,r=new _r(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new _r(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new _r(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[Kl[u]>>c]=l}else for(a=new _r(n),s=0;s<n;++s)i[s]&&(a[s]=Kl[o[i[s]-1]++]>>15-i[s]);return a},_o=new bn(288);for(ft=0;ft<144;++ft)_o[ft]=8;var ft;for(ft=144;ft<256;++ft)_o[ft]=9;var ft;for(ft=256;ft<280;++ft)_o[ft]=7;var ft;for(ft=280;ft<288;++ft)_o[ft]=8;var ft,vd=new bn(32);for(ft=0;ft<32;++ft)vd[ft]=5;var ft;var cy=xo(_o,9,1);var ly=xo(vd,5,1),ql=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Xn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Zl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},hy=function(i){return(i+7)/8|0},uy=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new bn(i.subarray(e,t))};var fy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Yn=function(i,e,t){var n=new Error(e||fy[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Yn),!t)throw n;return n},dy=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new bn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new bn(s*3));var l=function(je){var X=t.length;if(je>X){var lt=new bn(Math.max(X*2,je));lt.set(t),t=lt}},h=e.f||0,u=e.p||0,f=e.b||0,p=e.l,g=e.d,x=e.m,m=e.n,d=s*8;do{if(!p){h=Xn(i,u,1);var S=Xn(i,u+1,3);if(u+=3,S)if(S==1)p=cy,g=ly,x=9,m=5;else if(S==2){var C=Xn(i,u,31)+257,w=Xn(i,u+10,15)+4,G=C+Xn(i,u+5,31)+1;u+=14;for(var T=new bn(G),y=new bn(19),F=0;F<w;++F)y[ry[F]]=Xn(i,u+F*3,7);u+=w*3;for(var Z=ql(y),ue=(1<<Z)-1,U=xo(y,Z,1),F=0;F<G;){var k=U[Xn(i,u,ue)];u+=k&15;var _=k>>4;if(_<16)T[F++]=_;else{var Y=0,ee=0;for(_==16?(ee=3+Xn(i,u,3),u+=2,Y=T[F-1]):_==17?(ee=3+Xn(i,u,7),u+=3):_==18&&(ee=11+Xn(i,u,127),u+=7);ee--;)T[F++]=Y}}var Q=T.subarray(0,C),$=T.subarray(C);x=ql(Q),m=ql($),p=xo(Q,x,1),g=xo($,m,1)}else Yn(1);else{var _=hy(u)+4,v=i[_-4]|i[_-3]<<8,L=_+v;if(L>s){c&&Yn(0);break}a&&l(f+v),t.set(i.subarray(_,L),f),e.b=f+=v,e.p=u=L*8,e.f=h;continue}if(u>d){c&&Yn(0);break}}a&&l(f+131072);for(var fe=(1<<x)-1,te=(1<<m)-1,ye=u;;ye=u){var Y=p[Zl(i,u)&fe],B=Y>>4;if(u+=Y&15,u>d){c&&Yn(0);break}if(Y||Yn(2),B<256)t[f++]=B;else if(B==256){ye=u,p=null;break}else{var ie=B-254;if(B>264){var F=B-257,me=dd[F];ie=Xn(i,u,(1<<me)-1)+xd[F],u+=me}var Re=g[Zl(i,u)&te],Ae=Re>>4;Re||Yn(3),u+=Re&15;var $=ay[Ae];if(Ae>3){var me=pd[Ae];$+=Zl(i,u)&(1<<me)-1,u+=me}if(u>d){c&&Yn(0);break}a&&l(f+131072);var Ue=f+ie;if(f<$){var We=r-$,Be=Math.min($,Ue);for(We+f<0&&Yn(3);f<Be;++f)t[f]=n[We+f]}for(;f<Ue;++f)t[f]=t[f-$]}}e.l=p,e.p=ye,e.b=f,e.f=h,p&&(h=1,e.m=x,e.d=g,e.n=m)}while(!h);return f!=t.length&&o?uy(t,0,f):t.subarray(0,f)};var py=new bn(0);var my=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Yn(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},gy=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function yd(i,e){var t=my(i);return t+8>i.length&&Yn(6,"invalid gzip data"),dy(i.subarray(t,-8),{i:2},e&&e.out||new bn(gy(i)),e&&e.dictionary)}var xy=typeof TextDecoder<"u"&&new TextDecoder,_y=0;try{xy.decode(py,{stream:!0}),_y=1}catch{}function Md(i){let{world:e,ext:t,extNodes:n,extModel:s,poseNode:r,S:o}=i,a={nav:!1,beacon:!1,strobe:!1,wing:!1,logo:!1,land:!1,nose:!1,turnoff:!1,doors:{DoorL1:0,DoorL4:0,DoorR1:0,DoorR4:0,Cargo1:0,Cargo2:0,Cargo3:0},apu:!1,apuRun:0,rat:!1,wipers:!1,eng:[!0,!0],night:!1},c={doors:{},apu:0,rat:0,wiper:0,wipe:0,fan:[1,1],fanAng:[0,0]};for(let K in a.doors)c.doors[K]=0;let l=new De().copy(s.matrixWorld).invert(),h=new De().copy(e.matrixWorld).invert(),u=new R,f=new De;function p(K,oe,b){K.updateMatrixWorld(!0),K.traverse(E=>{if(!E.isMesh)return;f.multiplyMatrices(oe==="model"?l:h,E.matrixWorld);let z=E.geometry.attributes.position;for(let J=0;J<z.count;J++)u.fromBufferAttribute(z,J).applyMatrix4(f),b(u)})}function g(K,oe){let b=new Ut;return p(K,oe,E=>b.expandByPoint(E)),b}function x(K,oe,b){let E=null,z=-1/0;return p(K,"frame",J=>{if(b&&!b(J))return;let ae=oe(J);ae>z&&(z=ae,E=J.clone())}),E}function m(K){let oe=Object.keys(n).filter(b=>b===K||b.startsWith(K)&&/^\.?(Inner|Placards)/.test(b.slice(K.length))).map(b=>n[b]);return oe.filter(b=>!oe.includes(b.parent))}let d={};for(let K of Object.keys(a.doors)){if(!n[K])continue;let oe=g(n[K],"model"),b=oe.getCenter(new R),E=b.x>0?1:-1;K.startsWith("Door")?d[K]={nodes:m(K),out:[.12*E,0,0],a:[E>0?oe.max.x+.32:oe.min.x-.32,b.y,oe.min.z-.05],d:[0,1,0],deg:160*E}:d[K]={nodes:m(K),out:[0,0,0],a:[E>0?oe.max.x:oe.min.x,oe.max.y,b.z],d:[0,0,1],deg:105*E}}let S=n.ApuFlap&&(()=>{let K=g(n.ApuFlap,"model");return{nodes:m("ApuFlap"),a:[K.getCenter(u).x,K.max.y,K.min.z],d:[1,0,0]}})(),_=n.Rat&&(()=>{let K=g(n.Rat,"model"),oe=K.getCenter(new R),b=["RatDoorL","RatDoorR"].filter(E=>n[E]).map(E=>{let z=g(n[E],"model"),J=z.getCenter(new R),ae=J.x>oe.x?1:-1;return{nodes:m(E),a:[ae>0?z.max.x:z.min.x,z.max.y,J.z],d:[0,0,1],s:ae}});return{nodes:[n.Rat,n.RatSpinner].filter(Boolean).filter((E,z,J)=>!J.includes(E.parent)),a:[oe.x,K.max.y,K.max.z],d:[1,0,0],doors:b}})(),v=["WindshildWiperL","WindshildWiperR"].filter(K=>n[K]).map(K=>{let oe=new R,b=1/0;return p(n[K],"model",E=>{E.y<b&&(b=E.y,oe.copy(E))}),{node:n[K],a:oe.toArray(),d:[0,.55,-.83],s:K.endsWith("L")?1:-1}}),L=(()=>{let K=document.createElement("canvas");K.width=K.height=128;let oe=K.getContext("2d"),b=oe.createRadialGradient(64,64,0,64,64,64);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.18,"rgba(255,255,255,.85)"),b.addColorStop(.45,"rgba(255,255,255,.18)"),b.addColorStop(1,"rgba(255,255,255,0)"),oe.fillStyle=b,oe.fillRect(0,0,128,128);let E=new Jn(K);return E.colorSpace=dt,E})(),C=new at;e.add(C);function w(K,oe,b){let E=new io({map:L,color:oe,transparent:!0,blending:ls,depthWrite:!1,opacity:0}),z=new Ma(E);return z.position.copy(K),z.scale.setScalar(b),z.renderOrder=5,z.userData.size=b,C.add(z),z}function G(K,oe,b,E,z){let J=new mr(b,0,z,E,.45,1.2);return J.position.copy(K),J.target.position.copy(oe),C.add(J,J.target),J}function T(K,oe,b,E,z){let J=new fr(E,b,24,1,!0);J.translate(0,-b/2,0);let ae=new rn({transparent:!0,depthWrite:!1,blending:ls,side:Ct,uniforms:{uColor:{value:new Ne(z)},uOp:{value:0},uLen:{value:b}},vertexShader:"varying float vY; void main(){ vY=-position.y; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 uColor; uniform float uOp, uLen; varying float vY; void main(){ float f=1.-smoothstep(0.,uLen,vY); gl_FragColor=vec4(uColor*f*f*uOp,1.); }"}),ce=new ke(J,ae);return ce.position.copy(K),ce.quaternion.setFromUnitVectors(new R(0,-1,0),oe.clone().normalize()),ce.renderOrder=4,C.add(ce),ce}let y=n.Wings,F=n.Fuselage,Z=x(y,K=>-K.z),ue=x(y,K=>K.z),U=x(F,K=>-K.x,K=>K.y<1.5),k=y?g(y,"frame").getCenter(new R).x:0,Y=x(F,K=>K.y,K=>Math.abs(K.x-k-2)<.6&&Math.abs(K.z)<.5),ee=x(F,K=>-K.y,K=>Math.abs(K.x-k-1)<.6&&Math.abs(K.z)<.5),Q=x(y,K=>K.x,K=>Math.abs(K.z+3.4)<.25),$=x(y,K=>K.x,K=>Math.abs(K.z-3.4)<.25),fe=n.Rudder?g(n.Rudder,"frame").getCenter(new R):new R(-17,4,0),te=n.Hstabs?g(n.Hstabs,"frame"):null,ye=n.NLGFitting?g(n.NLGFitting,"frame"):null,B={};if(Z&&ue&&(B.navL=w(Z.clone().add(new R(.2,0,-.05)),16722458,1.1),B.navR=w(ue.clone().add(new R(.2,0,.05)),2293606,1.1),B.strL=w(Z.clone().add(new R(-.2,0,-.05)),16777215,4.5),B.strR=w(ue.clone().add(new R(-.2,0,.05)),16777215,4.5)),U&&(B.navT=w(U.clone().add(new R(-.15,0,0)),16777215,.9),B.strT=w(U.clone().add(new R(-.3,.1,0)),16777215,3.5)),Y&&(B.beaconT=w(Y.clone().add(new R(0,.08,0)),16720384,1.6)),ee&&(B.beaconB=w(ee.clone().add(new R(0,-.08,0)),16720384,1.6)),Q&&$){let K=new R(1,-.08,0);for(let[oe,b,E]of[["L",Q,-1],["R",$,1]]){let z=b.clone().add(new R(-.6,-.35,0));B["land"+oe]=w(z,16774364,2.2),B["landS"+oe]=G(z,z.clone().add(K.clone().multiplyScalar(60)),16773848,.2,400),B["landB"+oe]=T(z,K,70,7,16773328);let J=new R(b.x+3.5,b.y+1.6,1.95*E);B["wing"+oe]=w(J,16777215,.8),B["wingS"+oe]=G(J,new R(b.x-2,b.y+.3,9*E),16777215,.35,30)}}if(te)for(let K of[-1,1]){let oe=new R(te.max.x-.8,te.max.y+.05,4.2*K);B["logo"+K]=w(oe,16777215,.6),B["logoS"+K]=G(oe,fe,16777215,.45,18)}if(ye){let K=new R(ye.max.x+.15,ye.min.y+.6,0);B.nose=w(K,16774364,1.6),B.noseS=G(K,K.clone().add(new R(40,-4,0)),16773848,.3,120),B.noseB=T(K,new R(1,-.1,0),30,4,16773328),B.toL=w(K.clone().add(new R(0,.1,-.25)),16774364,1),B.toR=w(K.clone().add(new R(0,.1,.25)),16774364,1),B.toSL=G(B.toL.position,B.toL.position.clone().add(new R(10,-4,-20)),16777215,.5,60),B.toSR=G(B.toR.position,B.toR.position.clone().add(new R(10,-4,20)),16777215,.5,60)}let ie=(K,oe)=>{K&&(K.material.opacity=oe,K.visible=oe>.003)},me=(K,oe)=>{K&&(K.intensity=oe)},Re=(K,oe)=>{K&&(K.material.uniforms.uOp.value=oe,K.visible=oe>.003)},Ae={exp:i.renderer.toneMappingExposure,hemi:i.hemi.intensity,sun:i.sunLight.intensity,env:1},Ue=0,We=-1,Be=new Ne,je=new Ne(12111328),X=new Map;i.scene.traverse(K=>{K.isMesh&&K.material&&[].concat(K.material).forEach(oe=>{oe.isMeshStandardMaterial&&!X.has(oe)&&X.set(oe,oe.envMapIntensity??1)})});let lt=new Vi(16769720,0,4,1);lt.position.set(13.75,1.25,0),e.add(lt);function Fe(K){Ue+=((a.night?1:0)-Ue)*(1-Math.exp(-K/.35)),Math.abs(Ue-(a.night?1:0))<.01&&(Ue=a.night?1:0);let oe=Ue;if(i.hemi.intensity=Ae.hemi*(1-.88*oe),i.sunLight.intensity=Ae.sun*(1-.97*oe),i.renderer.toneMappingExposure=Ae.exp,i.sky.visible=oe<.5,oe>.01?(Be.setHex(395794).lerp(je,Math.max(0,1-oe*1.6)),i.scene.background=Be):i.scene.background=null,oe!==We){for(let[b,E]of X)b.envMapIntensity=E*(1-.93*oe);We=oe}lt.intensity=(a.dome?2.5:0)+1.6*oe,i.groundMat.uniforms.uDim&&(i.groundMat.uniforms.uDim.value=1-.9*oe),i.cloudMat.uniforms.uDim&&(i.cloudMat.uniforms.uDim.value=1-.85*oe)}let He=0;function Pe(K,oe){He+=K;let b=(P,ne,he)=>P+Math.sign(ne-P)*Math.min(Math.abs(ne-P),K/he);for(let P in d){c.doors[P]=b(c.doors[P],a.doors[P],P.startsWith("Door")?4:6);let ne=c.doors[P],he=d[P],de=Math.min(1,ne*4),Ie=Math.max(0,(ne-.2)/.8),Ke=Ie*Ie*(3-2*Ie),Qe=[{type:"tr",v:he.out.map(Xe=>Xe*de)},{type:"rot",a:he.a.map((Xe,ve)=>Xe+he.out[ve]*de),d:he.d,deg:he.deg*Ke}];he.nodes.forEach(Xe=>r(Xe,Qe,s))}if(c.apu=b(c.apu,a.apu?1:0,2.5),S&&S.nodes.forEach(P=>r(P,[{type:"rot",a:S.a,d:S.d,deg:35*c.apu}],s)),c.rat=b(c.rat,a.rat?1:0,3),_){let P=Math.min(1,c.rat*2),ne=Math.max(0,c.rat*2-1);_.doors.forEach(he=>he.nodes.forEach(de=>r(de,[{type:"rot",a:he.a,d:he.d,deg:80*he.s*P}],s))),_.nodes.forEach(he=>r(he,[{type:"rot",a:_.a,d:_.d,deg:-95*ne}],s))}(a.wipers||c.wiper>.001)&&(c.wipe+=K*2.6);let E=a.wipers?1:0;c.wiper=b(c.wiper,E,.3);let z=(.5-.5*Math.cos(c.wipe))*(a.wipers?1:Math.cos(c.wipe)>.98?0:1);!a.wipers&&Math.cos(c.wipe)>.98&&(c.wipe=0),v.forEach(P=>r(P.node,[{type:"rot",a:P.a,d:P.d,deg:62*P.s*z}],s)),["FanSpinningCFM56L","FanSpinningCFM56R"].forEach((P,ne)=>{let he=i.surf[P];if(!he)return;let de=a.eng[ne]?.3+2.4*o.n1/100:.18*Math.min(1,o.v/120);c.fan[ne]+=(de-c.fan[ne])*(1-Math.exp(-K/(a.eng[ne]?1.5:4))),c.fanAng[ne]+=K*Math.PI*2*c.fan[ne],r(he.node,[{type:"rot",a:he.c,d:[0,0,1],deg:ct.radToDeg(c.fanAng[ne])}],s)});let J=.35+.65*Ue,ae=a.nav?.95:0;["navL","navR","navT"].forEach(P=>ie(B[P],ae*J+(a.nav?.1:0)));let ce=He%1,Le=a.strobe&&(ce<.05||ce>.12&&ce<.17)?1:0;["strL","strR","strT"].forEach(P=>ie(B[P],Le));let Ee=He*1.1%1,we=a.beacon?Math.max(0,1-Math.abs(Ee-.15)/.12):0;ie(B.beaconT,we),ie(B.beaconB,a.beacon?Math.max(0,1-Math.abs((Ee+.5)%1-.15)/.12):0);let Ve=a.land?1:0;["landL","landR"].forEach(P=>ie(B[P],Ve*J)),["landSL","landSR"].forEach(P=>me(B[P],Ve*900)),["landBL","landBR"].forEach(P=>Re(B[P],Ve*(.05+.25*Ue))),["wingL","wingR"].forEach(P=>ie(B[P],a.wing?.8*J:0)),["wingSL","wingSR"].forEach(P=>me(B[P],a.wing?120:0)),["logo-1","logo1"].forEach(P=>ie(B[P],a.logo?.7*J:0)),["logoS-1","logoS1"].forEach(P=>me(B[P],a.logo?160:0));let Ye=o.gearPos>.97?1:0,le=a.nose&&Ye;ie(B.nose,le?J:0),me(B.noseS,le?500:0),Re(B.noseB,le?.04+.2*Ue:0);let Ze=a.turnoff&&Ye;ie(B.toL,Ze?.8*J:0),ie(B.toR,Ze?.8*J:0),me(B.toSL,Ze?200:0),me(B.toSR,Ze?200:0),Fe(K),a.apuRun=a.apu&&a.apuStart?Math.min(1,a.apuRun+K/8):Math.max(0,a.apuRun-K/12)}return{SYS:a,update:Pe,anim:c,nightK:()=>Ue}}function Ed({table:i,ckNodes:e,ckModel:t,poseNode:n,axisOp:s,skip:r}){let o=new Map,a=[],c=new Map;for(let m of i.ctrls){if(r.test(m.raw))continue;let d={...m,s:0,b:!1,press:0};d.kind==="cycle"&&!(d.vals&&d.vals.length>1)&&(d.kind="toggle"),d.kind==="cycle"&&(d.s=d.vals[0]),d.sel&&(d.sel.some(S=>/-off$/.test(S.c))&&(d.b=!0),d.sel.forEach(S=>{let _=e[S.obj];_&&_.traverse(v=>{if(!v.isMesh||c.has(v))return;let L=v.material,C=new rt({map:L.map||null,color:L.map?16777215:L.color||16777215,transparent:!0,toneMapped:!1,depthWrite:L.depthWrite});!L.map&&L.emissive&&C.color.copy(L.emissive.getHex()?L.emissive:L.color),v.material=C,c.set(v,C)})})),a.push(d),d.objs.forEach(S=>o.set(S,d))}["Lcutoff","Rcutoff"].forEach(m=>{let d=a.find(S=>S.raw===m);d&&(d.b=!0)});function l(m,d){let S=d.c;return/fault|fire|smoke|disch|agent|test|fail/.test(S)?!1:/-off$|-off-/.test(S)?!m.b:/avail/.test(S)?!!m.avail:m.b}function h(m){if(m.rot){let d=m.kind==="cycle"?m.s:/cutoff/i.test(m.raw)?m.b?0:1:m.b?1:0;for(let S of m.rot){let _=s(S.axis,d*S.f+S.o);_&&S.objs.forEach(v=>{let L=e[v];L&&n(L,[_],t)})}}if(m.tr&&!m.rot){let d=/firebtn/.test(m.raw)?m.b?-.0175:0:.0035*m.press;for(let S of m.tr)S.objs.forEach(_=>{let v=e[_];v&&n(v,[{type:"tr",v:S.dir.map(L=>L*d)}],t)})}m.sel&&m.sel.forEach(d=>{let S=e[d.obj];S&&(S.visible=l(m,d))})}a.forEach(h);let u=new Set;function f(m){let d=o.get(m);if(!d)return null;if(d.kind==="cycle"){let S=d.vals.indexOf(d.s);d.dir=d.dir||1;let _=S+d.dir;(_>=d.vals.length||_<0)&&(d.dir=-d.dir,_=S+d.dir),d.s=d.vals[Math.max(0,Math.min(d.vals.length-1,_))]}else d.b=!d.b,/^ecam_(eng|apu|bleed|cond|press|door|elec|wheel|hyd|fctl|fuel)$/.test(d.raw)&&a.forEach(S=>{S!==d&&/^ecam_(eng|apu|bleed|cond|press|door|elec|wheel|hyd|fctl|fuel)$/.test(S.raw)&&(S.b=!1,h(S))});return d.press=1,u.add(d),h(d),d}function p(m){for(let d of u)d.press=Math.max(0,d.press-m/.18),h(d),d.press||u.delete(d)}let g=m=>a.find(d=>d.raw===m);function x(m,d){let S=g(m);S&&(Object.assign(S,d),h(S))}return{click:f,update:p,get:g,set:x,list:a,byObj:o}}var vo=new R;function Nn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;vo.copy(e),vo[n]=0,vo.normalize();let l=.5*o/(o+a),h=1-vo.angleTo(i)/c;return Math.sign(vo[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Ga=class extends Wn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new R,x=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=Nn(g,c,"z","y",r,n),f[d+1]=1-Nn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[d+0]=1-Nn(g,c,"z","y",r,n),f[d+1]=1-Nn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[d+0]=1-Nn(g,c,"x","z",r,e),f[d+1]=Nn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-Nn(g,c,"x","z",r,e),f[d+1]=1-Nn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-Nn(g,c,"x","y",r,e),f[d+1]=1-Nn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[d+0]=Nn(g,c,"x","y",r,e),f[d+1]=1-Nn(g,c,"y","x",r,t);break}}};function Sd({world:i,extNodes:e,S:t}){let c=(M,N,O)=>M+(N-M)*Math.min(1,Math.max(0,O)),l=M=>M>-10.3?1.9:M>-12.5?c(1.9,1.66,(-10.3-M)/2.2):c(1.66,1.5,(-12.5-M)/.8),h=M=>M>-10.3?.05:M>-12.5?c(.05,.33,(-10.3-M)/2.2):c(.33,.5,(-12.5-M)/.8),u=new at;u.name="cabin",i.add(u);let f={belts:!1,nosmoke:!0,masks:0,light:0,exitLt:!0,armed:{DoorL1:!0,DoorR1:!0,DoorL4:!0,DoorR4:!0},slides:{},jump:{}},p=[],g=[],x=[];function m(M,N={}){let O=new on({color:M,roughness:.75,metalness:0,envMapIntensity:.3,...N});return O.userData.base=new Ne(M),x.push(O),O}function d(M,N,O,H){let W=document.createElement("canvas");W.width=M,W.height=N,O(W.getContext("2d"),M,N);let re=new Jn(W);return re.colorSpace=dt,re.anisotropy=4,H&&(re.wrapS=re.wrapT=pi,re.repeat.set(H[0],H[1])),re}let S=d(128,128,(M,N,O)=>{M.fillStyle="#26365c",M.fillRect(0,0,N,O);for(let H=0;H<1400;H++)M.fillStyle=Math.random()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.12)",M.fillRect(Math.random()*N,Math.random()*O,2,2);M.strokeStyle="rgba(120,150,210,.25)",M.lineWidth=2;for(let H=8;H<O;H+=16)M.beginPath(),M.moveTo(0,H),M.lineTo(N,H),M.stroke()},[2,2]),_=d(256,256,(M,N,O)=>{M.fillStyle="#3b4250",M.fillRect(0,0,N,O);for(let H=0;H<4e3;H++)M.fillStyle=`rgba(${150+Math.random()*60},${150+Math.random()*60},${170+Math.random()*60},.06)`,M.fillRect(Math.random()*N,Math.random()*O,2,2);M.strokeStyle="rgba(160,180,220,.12)",M.lineWidth=3;for(let H=0;H<6;H++)M.beginPath(),M.arc(Math.random()*N,Math.random()*O,20+Math.random()*30,0,7),M.stroke()},[6,30]),v={binM:m(13225170,{roughness:.35,side:Ct}),psu:m(9343899,{roughness:.5}),lining:m(15329249,{side:Nt,roughness:.9}),panel:m(15724265,{roughness:.6,side:Ct}),panelD:m(14013388,{roughness:.6,side:Ct}),grey:m(9212055,{roughness:.5}),dark:m(2764083,{roughness:.6}),metal:m(12106946,{metalness:.75,roughness:.32}),fabric:m(16777215,{map:S,roughness:.95}),leather:m(8003371,{roughness:.55}),cloth:m(16053488,{roughness:.95}),carpet:m(16777215,{map:_,roughness:1}),runner:m(2501432,{roughness:1}),yellow:m(15909376,{roughness:.5}),red:m(12787744,{roughness:.5}),black:m(1052948,{roughness:.35}),belt:m(3159100,{roughness:.8})},L=M=>new rt({color:M,toneMapped:!1}),C=(M,N,O,H,W,re=0,se=0,Me=0,pe=u)=>{let Se=new ke(M,N);return Se.position.set(O,H,W),Se.rotation.set(re,se,Me),pe.add(Se),Se},w=(M,N,O)=>new Wn(M,N,O),G=(M,N,O,H=.02)=>new Ga(M,N,O,2,H),T=M=>Math.sqrt(Math.max(0,1.9*1.9-(M-.05)*(M-.05)));function y(M,N,O){return M.userData.cab={type:N,...O},p.push(M),M}{let M=Math.asin(-.19473684210526315),N=new Qt(1.9,1.9,12.72- -12.98,64,1,!0,-Math.PI/2-(Math.PI/2+M)+Math.PI,2*(Math.PI/2-M)+Math.PI-Math.PI),O=[],H=64,W=-Math.PI/2-M+Math.PI,re=Math.PI+2*M,se=[];for(let ze=0;ze<=H;ze++){let zn=-(Math.PI/2+M)+ze/H*(Math.PI+2*M)*-1}N.dispose();let Me=new Bi,pe=Math.asin((-.32-.05)/1.9),Se=[];for(let ze=0;ze<=H;ze++){let zn=Math.PI-pe-ze/H*(Math.PI-2*pe);Se.push([Math.cos(zn)*1.9,.05+Math.sin(zn)*1.9])}let qe=[],ht=[],Je=[],Ce=[];for(let ze=12.72;ze>-10.3;ze-=1.5)Ce.push(ze);for(let ze=-10.3;ze>=-12.98-.001;ze-=.15)Ce.push(ze);Ce[Ce.length-1]>-12.98&&Ce.push(-12.98),Ce.forEach((ze,zn)=>{let xn=l(ze),wn=h(ze),ws=Math.asin((-.32-wn)/xn);for(let si=0;si<=H;si++){let oc=Math.PI-ws-si/H*(Math.PI-2*ws);qe.push(ze,wn+Math.sin(oc)*xn,Math.cos(oc)*xn),ht.push(si/H,zn)}});for(let ze=0;ze<Ce.length-1;ze++)for(let zn=0;zn<H;zn++){let xn=ze*(H+1)+zn,wn=xn+H+1;Je.push(xn,wn,xn+1,xn+1,wn,wn+1)}let _t=new Ot;_t.setAttribute("position",new Mt(qe,3)),_t.setAttribute("uv",new Mt(ht,2)),_t.setIndex(Je),_t.computeVertexNormals();let $e=C(_t,new on({color:15329249,roughness:.9,side:Ct}),0,0,0);x.push($e.material),$e.material.userData.base=new Ne(15329249),y($e,"lining");let gn=T(-.32)*2,ln=new Bi,en=ze=>Math.sqrt(Math.max(0,l(ze)**2-(-.32-h(ze))**2)),hn=[];for(let ze=12.72;ze>=-12.98-.001;ze-=.25)hn.push(ze);hn.push(-12.98),ln.moveTo(hn[0],-en(hn[0])),hn.forEach(ze=>ln.lineTo(ze,-en(ze))),hn.slice().reverse().forEach(ze=>ln.lineTo(ze,en(ze)));let vt=new ho(ln);vt.rotateX(Math.PI/2),vt.computeVertexNormals();let tn=vt.attributes.uv;for(let ze=0;ze<tn.count;ze++)tn.setXY(ze,tn.getX(ze)/4,tn.getY(ze)/.6);let ii=C(vt,v.carpet,0,-.32,0);ii.material.side=Ct,y(ii,"carpet"),C(new pn(12.72- -12.98-2,.62),v.runner,(12.72+-12.98)/2,-.32+.003,0,-Math.PI/2),[-1.37,-.55,.55,1.37].forEach(ze=>C(w(20.6,.012,.035),v.metal,.1,-.32+.006,ze)),C(w(12.72- -12.98-1.2,.03,1.1),v.panel,(12.72+-12.98)/2,1.86,0);let jt=L(14543103);f.coveMat=jt,[-.8,.8].forEach(ze=>C(w(20.6,.012,.05),jt,.5,1.672,ze));for(let ze=10.5;ze>-12;ze-=1.52)C(w(.9,.012,.22),L(16774886),ze,1.842,0);let Ts=(ze,zn)=>{let xn=new Bi;xn.moveTo(-T(-.32),-.32);for(let Ji=0;Ji<=32;Ji++){let ac=Math.PI+Math.asin(-.19473684210526315)*-1-Ji/32*(Math.PI+2*Math.asin(-.19473684210526315))*-1}let wn=l(ze),ws=h(ze),si=Math.asin((-.32-ws)/wn);xn.moveTo(Math.cos(Math.PI-si)*wn,ws+Math.sin(Math.PI-si)*wn);for(let Ji=1;Ji<=40;Ji++){let ac=Math.PI-si-Ji/40*(Math.PI-2*si);xn.lineTo(Math.cos(ac)*wn,ws+Math.sin(ac)*wn)}return xn.closePath(),C(new ho(xn,8),v.panelD,ze,0,0,0,zn>0?-Math.PI/2:Math.PI/2)};y(Ts(12.72,1),"bulkhead"),y(Ts(-12.98,-1),"bulkheadAft");let rc=C(G(.04,1.95,.72,.01),v.panelD,12.72-.03,-.32+.99,0);y(rc,"ckdoor"),C(new Qt(.012,.012,.01,12),v.black,12.72-.055,-.32+1.55,0,0,0,Math.PI/2),C(w(.02,.12,.08),v.dark,12.72-.06,-.32+1.1,.25),C(w(.03,.03,.16),v.metal,12.72-.07,-.32+1,-.22)}let F=[];[8.5,2.5,-3.5,-9.5].forEach(M=>{let N=new Vi(16774114,3,10,1.1);N.position.set(M,1.75,0),u.add(N),F.push(N)});let Z=27,ue=.76,U=10.05,k=[-1.38,-.92,-.46,.46,.92,1.38],Y=[];{let M=U;for(let N=1;N<=Z;N++)Y.push(M),M-=ue+(N===13||N===14?.16:0)}let ee=[];Y.forEach((M,N)=>k.forEach((O,H)=>ee.push({x:M,z:O,row:N+1,col:"ABCDEF"[H],tray:0,trayT:0}))),f.seats=ee;let Q=ee.length,$={cushion:[G(.48,.12,.43,.04),v.fabric,[-.24,.47,0]],back:[G(.11,.7,.43,.04),v.fabric,[-.6,.86,0],.2],head:[G(.115,.24,.38,.04),v.cloth,[-.64,1.12,0],.2],shell:[G(.03,.7,.44,.012),v.grey,[-.665,.86,0],.2],pocket:[w(.02,.22,.36),v.dark,[-.64,.66,0],.2],legF:[w(.04,.42,.04),v.metal,[-.12,.2,-.14]],legR:[w(.04,.42,.04),v.metal,[-.45,.2,-.14]],frame:[w(.42,.04,.4),v.metal,[-.28,.4,0]],arm:[G(.4,.05,.05,.02),v.grey,[-.3,.66,-.235]],belt:[w(.3,.008,.05),v.belt,[-.18,.535,0]],buckle:[w(.06,.012,.06),v.metal,[-.18,.54,0]]},fe={},te=new De,ye=new $t,B=new rr,ie=new R,me=new R(1,1,1);for(let[M,[N,O,H,W]]of Object.entries($)){let re=new Yt(N,O,Q);re.name="seat_"+M,ee.forEach((se,Me)=>{B.set(0,0,W||0),ye.setFromEuler(B),ie.set(se.x+H[0],-.32+H[1],se.z+H[2]),te.compose(ie,ye,me),re.setMatrixAt(Me,te)}),u.add(re),fe[M]=re,y(re,"seat")}{let M=new Yt($.arm[0],v.grey,Y.length*2),N=0;Y.forEach(O=>[-1.38+.47*2+.235,1.38+.235].forEach(H=>{te.makeTranslation(O-.3,-.32+.66,H-(H>0,0)),M.setMatrixAt(N++,te)})),u.add(M),y(M,"seat")}let Re=G(.02,.3,.38,.008);Re.translate(0,-.15,0);let Ae=new Yt(Re,v.panelD,Q);Ae.name="trays";function Ue(M){let N=ee[M],O=N.trayT;B.set(0,0,.2-O*(Math.PI/2+.2)),ye.setFromEuler(B),ie.set(N.x-.75-O*.04+0,-.32+1.12-O*.38,N.z),te.compose(ie,ye,me),Ae.setMatrixAt(M,te)}ee.forEach((M,N)=>Ue(N)),u.add(Ae),y(Ae,"tray");let We=M=>{let N=new Bi,O=1.3,H=1.66;N.moveTo(.9,O),N.lineTo(T(O)-.03,O);for(let W=1;W<=8;W++){let re=O+(H-O)*W/8;N.lineTo(T(re)-.03,re)}return N.lineTo(.8,H),N.lineTo(.9,O),N};[-1,1].forEach(M=>{let N=C(w(20.6,.38,.56),v.binM,.5,1.48,M*1.13);y(N,"bin"),C(w(20.6,.02,.5),v.psu,.5,1.285,M*1.16),C(w(20.6,.03,.03),v.dark,.5,1.29,M*.88),C(w(20.6,.3,.02),v.binM,.5,1.81,M*.86)});let Be=[];{let M=G(1.48,.4,.035,.012);M.translate(0,-.2,0);for(let N=10.8;N>-9;N-=1.52)[-1,1].forEach(O=>{let H=N-.76,W=new at;W.position.set(H,1.68,O*.84),W.rotation.x=O*.2,u.add(W);let re=new ke(M,v.binM);W.add(re);let se=new ke(w(.14,.035,.02),v.grey);se.position.set(0,-.36,-O*.025),W.add(se);let Me={pivot:W,side:O,open:0,t:0};Be.push(Me),y(re,"binDoor",{bd:Me})})}let je=d(256,64,(M,N,O)=>{M.fillStyle="#111",M.fillRect(0,0,N,O),M.strokeStyle="#fff",M.fillStyle="#fff",M.lineWidth=5,M.beginPath(),M.moveTo(30,40),M.lineTo(98,40),M.stroke(),M.fillRect(56,32,16,16),M.beginPath(),M.moveTo(30,22),M.lineTo(98,22),M.stroke(),M.beginPath(),M.arc(192,32,22,0,7),M.stroke(),M.fillRect(172,28,34,8),M.beginPath(),M.moveTo(176,16),M.lineTo(208,48),M.stroke()}),X={belt:[],smoke:[]},lt=new Yt(new Qt(.03,.03,.01,16),new rt({toneMapped:!1}),Q),Fe=new Yt(new Qt(.022,.026,.035,12),v.grey,Q),He=new Yt(new Qt(.014,.014,.01,12),new rt({toneMapped:!1}),Q);f.reading=new Array(Q).fill(!1),f.call=new Array(Q).fill(!1);let Pe=new Ne(5987940),K=new Ne(16773836),oe=new Ne(3824778),b=new Ne(5222655);ee.forEach((M,N)=>{let O=Math.sign(M.z),H=O*(1+(Math.abs(M.z)-.46)*.38);te.makeTranslation(M.x-.05,1.274,H),lt.setMatrixAt(N,te),lt.setColorAt(N,Pe),te.makeTranslation(M.x-.05,1.262,H+O*.09),Fe.setMatrixAt(N,te),te.makeTranslation(M.x+.06,1.275,H),He.setMatrixAt(N,te),He.setColorAt(N,oe)}),[lt,Fe,He].forEach(M=>u.add(M)),y(lt,"reading"),y(Fe,"gasper"),y(He,"callBtn");let E=new rt({map:je,toneMapped:!1,color:3355443});f.signMat=E,Y.forEach(M=>[-1,1].forEach(N=>{let O=C(w(.16,.012,.06),E,M+.2,1.272,N*1.2);y(O,"sign")}));let z=new fr(.045,.06,14,1,!0);z.translate(0,-.03,0);let J=new Yt(z,v.yellow,Q),ae=new Yt(new Qt(.004,.004,1,6),v.cloth,Q);J.visible=ae.visible=!1,u.add(J,ae),y(J,"mask");function ce(M){ee.forEach((N,O)=>{let H=Math.sign(N.z),W=H*(1+(Math.abs(N.z)-.46)*.38)-H*.05,re=.75*M;te.makeTranslation(N.x-.12,1.27-re,W),J.setMatrixAt(O,te),te.compose(ie.set(N.x-.12,1.27-re/2,W),ye.identity(),new R(1,Math.max(.001,re),1)),ae.setMatrixAt(O,te)}),J.instanceMatrix.needsUpdate=ae.instanceMatrix.needsUpdate=!0,J.visible=ae.visible=M>.01}let Le=[];for(let M=10.75;M>-10.2;M-=.535)M<.95&&M>-.75||Le.push(M);let Ee=Le.length*2,we=.75,Ve=T(we)-.035,Ye=Math.asin((we-.05)/1.9),le=new Yt(G(.34,.46,.03,.012),v.panel,Ee),Ze=new rt({color:12375792,toneMapped:!1});f.paneMat=Ze;let P=new Yt(G(.23,.34,.01,.004),Ze,Ee),ne=new Yt(w(.235,.345,.008),v.panelD,Ee),he=[],de=0;Le.forEach(M=>[-1,1].forEach(N=>{let O={x:M,side:N,open:Math.random()<.8?1:.3+Math.random()*.4,t:0};O.t=O.open,he.push(O);let H=new $t().setFromAxisAngle(new R(1,0,0),-N*Ye),W=new R(0,-(we-.05),-N*Ve).normalize(),re=new R(0,Math.cos(Ye),-N*Math.sin(Ye)),se=new R(M,we,N*Ve);te.compose(se,H,me),le.setMatrixAt(de,te),te.compose(se.clone().addScaledVector(W,.012),H,me),P.setMatrixAt(de,te),O.Q=H,O.i=de,O.base=se.clone().addScaledVector(W,.022),O.up=re,de++}));function Ie(M){te.compose(ie.copy(M.base).addScaledVector(M.up,M.t*.33),M.Q,me),ne.setMatrixAt(M.i,te)}he.forEach(Ie),[le,P,ne].forEach(M=>u.add(M)),y(ne,"shade"),y(P,"window"),y(le,"window"),[-1,1].forEach(M=>{C(w(20.6,.24,.02),v.panelD,.1,-.32+.14,M*(T(-.32+.14)-.03))});let Ke=new rt({color:2763296,toneMapped:!1});f.pathMat=Ke;let Qe=120,Xe=new Yt(w(.06,.008,.02),Ke,Qe);for(let M=0;M<Qe;M++){let N=10.2-(M>>1)*.36;te.makeTranslation(N,-.32+.005,M&1?.33:-.33),Xe.setMatrixAt(M,te)}u.add(Xe),y(Xe,"pathLight");let ve=d(256,96,(M,N,O)=>{M.fillStyle="#0a7a3a",M.fillRect(0,0,N,O),M.fillStyle="#fff",M.font="bold 44px Arial",M.textAlign="center",M.fillText("EXIT",80,64),M.font="bold 40px Arial",M.fillText("\u05D9\u05E6\u05D9\u05D0\u05D4",190,62)}),D=new rt({map:ve,toneMapped:!1});f.exitMat=D;let ge=(M,N,O,H)=>y(C(w(.32,.12,.04),[v.panel,v.panel,v.panel,v.panel,D,D],M,N,O,0,H),"exitSign");ge(11.2,1.78,-.45,Math.PI/2),ge(11.2,1.78,.45,Math.PI/2),ge(-12.4,1.85,-.4,-Math.PI/2),ge(-12.4,1.85,.4,-Math.PI/2),ge(.2,1.78,0,Math.PI/2);function _e(M,N,O,H,W,re=2.05){let se=new at;u.add(se);let Me=Math.abs(N-M),pe=H-O,Se=W>0?Math.max(M,N):Math.min(M,N),qe=(M+N)/2,ht=(O+H)/2;y(C(w(Me,re,pe),v.panelD,qe,-.32+re/2,ht,0,0,0,se),"galley"),y(C(w(.08,.04,pe),v.metal,Se+W*.04,-.32+1,ht,0,0,0,se),"galley");let Je=Math.max(1,Math.floor(pe/.32));for(let Ce=0;Ce<Je;Ce++){let _t=O+.16+Ce*(pe-.32)/Math.max(1,Je-1),$e=new at;$e.position.set(Se-W*.42,-.32+.5,_t),se.add($e);let gn=new ke(G(.8,.98,.3,.015),v.metal);$e.add(gn);let ln=new ke(w(.02,.03,.22),v.dark);ln.position.set(W*.41,.42,0),$e.add(ln);let en=new ke(w(.02,.03,.08),v.red);en.position.set(W*.405,-.47,0),$e.add(en);let hn={pivot:$e,out:0,t:0,facing:W,x0:$e.position.x};y(gn,"cart",{ct:hn})}for(let Ce=0;Ce<2;Ce++){let _t=O+pe*(.25+Ce*.5);y(C(w(.02,.32,Math.min(.42,pe*.4)),v.black,Se+W*.012,-.32+1.55,_t,0,0,0,se),"oven"),C(w(.01,.04,.12),L(3407752),Se+W*.025,-.32+1.75,_t,0,0,0,se),y(C(w(.12,.26,.18),v.metal,Se+W*.06,-.32+1.16,_t,0,0,0,se),"coffee"),C(new Qt(.06,.06,.14,16),v.black,Se+W*.12,-.32+1.1,_t,0,0,0,se)}for(let Ce=0;Ce<4;Ce++){let _t=O+pe*(.125+Ce*.25);C(w(.015,.2,pe*.22),v.panel,Se+W*.01,-.32+re-.17,_t,0,0,0,se),C(w(.02,.03,.03),v.red,Se+W*.02,-.32+re-.25,_t,0,0,0,se)}return C(w(.05,.02,pe*.9),L(16774365),Se+W*.05,-.32+1.4,ht,0,0,0,se),se}_e(10.62,11.52,.38,1.62,1),_e(-12.95,-12.55,-.95,.95,1,1.82);function Ge(M,N,O,H,W,re=2.05){let se=(M+N)/2,Me=(O+H)/2,pe=Math.abs(H-O),Se=Math.abs(N-M);y(C(w(Se,re,pe),v.panel,se,-.32+re/2,Me),"lav");let qe=W>0?Math.max(O,H):Math.min(O,H),ht=C(w(Se*.7,1.85,.02),v.panelD,se,-.32+.95,qe+W*.012);y(ht,"lavDoor"),C(w(.12,.05,.01),L(3126090),se+Se*.2,-.32+1.45,qe+W*.024),C(w(.03,.08,.02),v.metal,se-Se*.25,-.32+1,qe+W*.03)}Ge(10.62,11.52,-1.62,-.38,1),Ge(-10.75,-11.7,-1.25,-.42,1,1.6),Ge(-10.75,-11.7,.42,1.25,-1,1.6);function Oe(M,N,O,H){let W=new at;W.position.set(M,-.32,N),u.add(W);let re=new ke(G(.06,.62,.44,.02),v.leather);re.position.set(O*.03,1.05,0),W.add(re),y(re,"jumpseat",{id:H});let se=new ke(G(.07,.2,.32,.03),v.leather);se.position.set(O*.035,1.5,0),W.add(se);let Me=new at;Me.position.set(O*.06,.62,0),W.add(Me);let pe=new ke(G(.4,.07,.44,.025),v.leather);pe.position.set(O*.2,0,0),Me.add(pe),y(pe,"jumpseat",{id:H}),[-.12,.12].forEach(_t=>{let $e=new ke(w(.012,.55,.045),v.belt);$e.position.set(O*.065,1.08,_t),W.add($e)});let Se=new ke(w(.014,.07,.07),v.metal);Se.position.set(O*.07,.84,0),W.add(Se);let qe=new ke(G(.04,.2,.06,.015),v.dark);qe.position.set(O*.03,1.2,.3),W.add(qe),y(qe,"handset");let ht=new ke(new Qt(.022,.022,.2,12),v.dark);ht.position.set(O*.04,.95,-.3),W.add(ht),y(ht,"flashlight");let Je=new ke(w(.01,.012,.012),L(16724e3));Je.position.set(O*.06,1.06,-.3),W.add(Je),f.leds=(f.leds||[]).concat(Je);let Ce={pv:Me,facing:O,open:0,t:0};return f.jump[H]=Ce,W}Oe(12.7,-.68,-1,"L1"),Oe(12.7,.68,-1,"R1"),Oe(-11.72,-.75,-1,"L4"),Oe(-11.72,.75,-1,"R4");let st=d(256,160,(M,N,O)=>{M.fillStyle="#0d1a2b",M.fillRect(0,0,N,O),M.fillStyle="#7fc4ff",M.font="bold 20px Arial",M.fillText("CABIN LIGHTS",14,28),["BRIGHT","DIM","NIGHT"].forEach((H,W)=>{M.strokeStyle="#7fc4ff",M.strokeRect(14+W*80,60,70,50),M.fillText(H,18+W*80,92)}),M.fillStyle="#9f9",M.font="16px Arial",M.fillText("DOORS  SLIDES  WATER  LAV",14,145)}),ot=C(w(.32,.2,.02),[v.dark,v.dark,v.dark,v.dark,new rt({map:st,toneMapped:!1}),v.dark],11.535,-.32+1.55,-.75,0,Math.PI/2);y(ot,"fap");let Rt=(M,N,O)=>d(256,64,(H,W,re)=>{H.fillStyle=N,H.fillRect(0,0,W,re),H.fillStyle=O,H.font="bold 34px Arial",H.textAlign="center",H.fillText(M,W/2,45)}),Bt=Rt("ARMED","#f2c200","#111"),pt=Rt("DISARMED","#2e7d32","#fff"),Lt={};["DoorL1","DoorR1","DoorL4","DoorR4"].forEach(M=>{let N=e[M];if(!N)return;let O=new Ut;N.updateMatrixWorld(!0);let H=new De().copy(i.matrixWorld).invert();N.traverse(tn=>{if(tn.isMesh){let ii=tn.geometry;ii.computeBoundingBox();let jt=ii.boundingBox.clone().applyMatrix4(new De().multiplyMatrices(H,tn.matrixWorld));O.union(jt)}});let W=M[4]==="L"?-1:1,re=(O.min.x+O.max.x)/2,se=W>0?O.min.z:O.max.z,Me=new at,pe=new De().copy(N.matrixWorld).invert().multiply(i.matrixWorld),Se=new at;Se.position.set(re,-.32,se-W*.02);let qe=new at;qe.position.set(0,1.12,0),Se.add(qe);let ht=new ke(G(.06,.06,.05,.02),v.metal);ht.position.set(0,0,0),qe.add(ht);let Je=new ke(G(.36,.045,.04,.015),v.metal);Je.position.set(-.18,0,-W*.02),qe.add(Je),y(Je,"doorHandle",{door:M}),y(ht,"doorHandle",{door:M});let Ce=new ke(w(.2,.05,.005),new rt({map:Rt("LIFT TO OPEN","#fff","#c00"),toneMapped:!1}));Ce.position.set(-.18,.08,-W*.006),Ce.rotation.y=W>0?Math.PI:0,Se.add(Ce),Ce.position.y+=1.12;let _t=new at;_t.position.set(.28,.92,-W*.01),Se.add(_t);let $e=new ke(G(.04,.16,.04,.012),v.red);$e.position.y=.08,_t.add($e),y($e,"armLever",{door:M});let gn=new rt({map:Bt,toneMapped:!1}),ln=new ke(w(.2,.05,.005),gn);ln.position.set(.28,.82,-W*.006),ln.rotation.y=W>0?Math.PI:0,Se.add(ln),y(ln,"armLever",{door:M});let en=new ke(G(.7,.32,.12,.03),v.panelD);en.position.set(0,.22,-W*.06),Se.add(en),y(en,"bustle",{door:M});let hn=new ke(w(.7,.025,.02),v.yellow);hn.position.set(0,.06,-W*.12),Se.add(hn);let vt=new ke(new Qt(.05,.05,.01,20),new rt({color:12375792,toneMapped:!1}));vt.rotation.x=Math.PI/2,vt.position.set(0,1.5,-W*.005),Se.add(vt),y(vt,"viewport"),Se.updateMatrix(),Me.applyMatrix4(new De().multiplyMatrices(pe,Se.matrix)),Me.add(...Se.children.slice()),N.add(Me),y(C(new Qt(.018,.018,.4,10),v.yellow,(W>0,O.max.x+.08),-.32+1.25,W*(T(-.32+1.25)-.1)),"assist"),Lt[M]={handleP:qe,armP:_t,flagMat:gn,side:W,b:O}}),f.armedTex=Bt,f.disarmTex=pt;let mn=new on({color:16106496,roughness:.55}),Cr={};Object.entries(Lt).forEach(([M,N])=>{let O=new at,H=N.side,W=N.b;O.position.set((W.min.x+W.max.x)/2,-.32,H*(T(-.32)+.1)),u.add(O);let re=6.2,se=-.6,Me=new at;Me.rotation.x=H*-se,O.add(Me),[-.55,.55].forEach(ht=>{let Je=new ke(new Qt(.17,.17,re,14),mn);Je.rotation.x=Math.PI/2,Je.position.set(ht,.12,H*re/2),Me.add(Je)});let pe=new ke(w(.96,.05,re),mn);pe.position.set(0,0,H*re/2),Me.add(pe);let Se=new ke(w(.9,.052,re-.4),new on({color:14198784,roughness:.7}));Se.position.set(0,.002,H*re/2),Me.add(Se);let qe=new ke(new Qt(.17,.17,1.3,14),mn);qe.rotation.z=Math.PI/2,qe.position.set(0,.12,H*re),Me.add(qe),O.scale.set(1,1,.001),O.visible=!1,Cr[M]={g:O,t:0}});let ic=d(512,96,(M,N,O)=>{M.fillStyle="#111",M.fillRect(0,0,N,O),M.fillStyle="#fff",M.font="bold 36px Arial",M.textAlign="center",M.fillText("FASTEN SEAT BELT",N/2,40),M.font="bold 34px Arial",M.fillText("\u05D4\u05D3\u05E7\u05D5 \u05D7\u05D2\u05D5\u05E8\u05D5\u05EA",N/2,82)}),Ti=new rt({map:ic,toneMapped:!1,color:3355443});f.fsbMat=Ti,[10.3,2,-6].forEach(M=>y(C(w(.5,.1,.02),[v.panel,v.panel,v.panel,v.panel,Ti,Ti],M,1.79,0,0,Math.PI/2),"sign"));let Ss=new Yt(w(.004,.18,.12),new on({color:3108785}),Q),wi=new Yt(w(.12,.05,.2),new on({color:13214247}),Q);ee.forEach((M,N)=>{te.makeTranslation(M.x-.61,-.32+.72,M.z+.08),Ss.setMatrixAt(N,te),te.makeTranslation(M.x-.25,-.32+.33,M.z),wi.setMatrixAt(N,te)}),u.add(Ss,wi),y(Ss,"safetyCard"),y(wi,"lifeVest");{let M=new pn(.14,1.6,6,1),N=M.attributes.position;for(let O=0;O<N.count;O++)N.setZ(O,Math.sin(N.getX(O)*40)*.02);M.computeVertexNormals(),[-.62,.62].forEach(O=>y(C(M,new on({color:2703470,side:Ct,roughness:.9}),Y[2]-.62,1.05,O,0,Math.PI/2),"curtain"))}let Pr=(Y[12]+Y[13])/2+.1;[-1,1].forEach(M=>[Pr,Pr-.86].forEach(N=>{let O=M*(T(.6)-.05);y(C(G(.06,.95,.52,.06),v.panelD,N,.62,O,0,M>0?Math.PI/2:-Math.PI/2),"overwing"),C(w(.18,.05,.03),v.red,N,1,O-M*.04),C(new Qt(.11,.11,.015,20),new rt({color:12375792,toneMapped:!1}),N,.75,O-M*.035,Math.PI/2,0,Math.PI/2)}));let To=[{k:.2,cove:14543103,name:"BRIGHT"},{k:.1,cove:16769712,name:"DIM"},{k:.03,cove:3824895,name:"NIGHT"}];function sc(M){let N=To[f.light],O=N.k*(.5+.5*M)+.02;F.forEach(H=>H.intensity=[1,.45,.12][f.light]*6);for(let H of x)H.emissive&&(H.emissive.copy(H.userData.base||H.color).multiplyScalar(O),H.map&&(H.emissiveMap=H.map));f.coveMat.color.setHex(N.cove)}let Lr={seat:'\u05DE\u05D5\u05E9\u05D1 \u05E0\u05D5\u05E1\u05E2 \u05D1\u05DE\u05D7\u05DC\u05E7\u05EA \u05EA\u05D9\u05D9\u05E8\u05D9\u05DD: \u05E8\u05D9\u05E4\u05D5\u05D3 \u05D1\u05D3, \u05DE\u05E9\u05E2\u05E0\u05EA \u05D9\u05D3, \u05D7\u05D2\u05D5\u05E8\u05EA \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA, \u05DB\u05D9\u05E1 \u05DC\u05E2\u05DC\u05D5\u05DF \u05D4\u05D1\u05D8\u05D9\u05D7\u05D5\u05EA \u05D5\u05DE\u05EA\u05D7\u05EA \u05DC\u05DE\u05D5\u05E9\u05D1 \u05D7\u05D2\u05D5\u05E8\u05EA \u05D4\u05E6\u05DC\u05D4. \u05D4\u05DE\u05E8\u05D5\u05D5\u05D7 \u05D1\u05D9\u05DF \u05D4\u05E9\u05D5\u05E8\u05D5\u05EA \u05DB-76 \u05E1"\u05DE.',tray:"\u05E9\u05D5\u05DC\u05D7\u05DF \u05DE\u05EA\u05E7\u05E4\u05DC \u05D1\u05D2\u05D1 \u05D4\u05DE\u05D5\u05E9\u05D1 \u05E9\u05DC\u05E4\u05E0\u05D9\u05DA. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05D5\u05E8\u05D9\u05D3\u05D4 \u05D0\u05D5 \u05DE\u05E7\u05E4\u05DC\u05EA \u05D0\u05D5\u05EA\u05D5. \u05D1\u05D4\u05DE\u05E8\u05D0\u05D4 \u05D5\u05D1\u05E0\u05D7\u05D9\u05EA\u05D4 \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E7\u05E4\u05DC \u05D0\u05D5\u05EA\u05D5.",bin:"\u05EA\u05D0 \u05DE\u05D8\u05E2\u05DF \u05E2\u05DC\u05D9\u05D5\u05DF \u05DC\u05EA\u05D9\u05E7\u05D9 \u05D9\u05D3. \u05D1\u05EA\u05D5\u05DB\u05D5 \u05DE\u05E9\u05D8\u05D7, \u05D5\u05D1\u05D3\u05DC\u05EA \u05EA\u05E4\u05E1 \u05E9\u05E0\u05E0\u05E2\u05DC \u05DB\u05D3\u05D9 \u05E9\u05D4\u05EA\u05D0 \u05DC\u05D0 \u05D9\u05D9\u05E4\u05EA\u05D7 \u05D1\u05D8\u05DC\u05D8\u05DC\u05D5\u05EA.",binDoor:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05DE\u05D8\u05E2\u05DF \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05E4\u05D5\u05EA\u05D7\u05EA \u05D5\u05E1\u05D5\u05D2\u05E8\u05EA. \u05D4\u05D3\u05DC\u05EA \u05E0\u05E4\u05EA\u05D7\u05EA \u05DB\u05DC\u05E4\u05D9 \u05DE\u05E2\u05DC\u05D4 \u05E2\u05DC \u05E6\u05D9\u05E8 \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF.",reading:"\u05DE\u05E0\u05D5\u05E8\u05EA \u05E7\u05E8\u05D9\u05D0\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05D3\u05DC\u05D9\u05E7\u05D4 \u05D0\u05D5 \u05DE\u05DB\u05D1\u05D4. \u05D9\u05E9 \u05D0\u05D7\u05EA \u05DC\u05DB\u05DC \u05DE\u05D5\u05E9\u05D1, \u05D1\u05E4\u05D0\u05E0\u05DC \u05E9\u05DE\u05E2\u05DC \u05D4\u05E9\u05D5\u05E8\u05D4.",gasper:"\u05E4\u05EA\u05D7 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D0\u05D9\u05E9\u05D9. \u05DE\u05E1\u05D5\u05D1\u05D1\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05DB\u05D5\u05D5\u05DF \u05D0\u05EA \u05D6\u05E8\u05DD \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D5\u05E0\u05DF.",callBtn:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E7\u05E8\u05D9\u05D0\u05D4 \u05DC\u05E6\u05D5\u05D5\u05EA. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05D3\u05DC\u05D9\u05E7\u05D4 \u05E0\u05D5\u05E8\u05D4 \u05DB\u05D7\u05D5\u05DC\u05D4 \u05D5\u05DE\u05E9\u05DE\u05D9\u05E2\u05D4 \u05E6\u05DC\u05D9\u05DC \u05D0\u05E6\u05DC \u05D4\u05E6\u05D5\u05D5\u05EA. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA \u05DE\u05DB\u05D1\u05D4.",sign:'\u05E9\u05DC\u05D8\u05D9 "\u05D4\u05D3\u05E7\u05D5 \u05D7\u05D2\u05D5\u05E8\u05D5\u05EA" \u05D5"\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E2\u05E9\u05DF". \u05D4\u05DD \u05E0\u05D3\u05DC\u05E7\u05D9\u05DD \u05DE\u05D4\u05DE\u05EA\u05D2\u05D9\u05DD SEAT BELTS \u05D5-NO SMOKING \u05D1\u05DC\u05D5\u05D7 \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF \u05D1\u05EA\u05D0 \u05D4\u05D8\u05D9\u05D9\u05E1.',mask:"\u05DE\u05E1\u05DB\u05D5\u05EA \u05D7\u05DE\u05E6\u05DF \u05E9\u05E0\u05E4\u05DC\u05D5 \u05DE\u05D4\u05E4\u05D0\u05E0\u05DC. \u05D1\u05D9\u05E8\u05D9\u05D3\u05EA \u05DC\u05D7\u05E5 \u05D4\u05DF \u05E0\u05D5\u05E4\u05DC\u05D5\u05EA \u05DC\u05D1\u05D3, \u05D0\u05D5 \u05D9\u05D3\u05E0\u05D9\u05EA \u05DE\u05DB\u05E4\u05EA\u05D5\u05E8 MASK MAN ON \u05D1\u05EA\u05D0 \u05D4\u05D8\u05D9\u05D9\u05E1. \u05DE\u05E9\u05D9\u05DB\u05EA \u05D4\u05DE\u05E1\u05DB\u05D4 \u05DE\u05E4\u05E2\u05D9\u05DC\u05D4 \u05D0\u05EA \u05D6\u05E8\u05D9\u05DE\u05EA \u05D4\u05D7\u05DE\u05E6\u05DF.",shade:"\u05D5\u05D9\u05DC\u05D5\u05DF \u05D7\u05DC\u05D5\u05DF. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05E2\u05DC\u05D4 \u05D0\u05D5 \u05DE\u05D5\u05E8\u05D9\u05D3\u05D4 \u05D0\u05D5\u05EA\u05D5. \u05D1\u05D4\u05DE\u05E8\u05D0\u05D4 \u05D5\u05D1\u05E0\u05D7\u05D9\u05EA\u05D4 \u05E4\u05D5\u05EA\u05D7\u05D9\u05DD \u05D0\u05EA \u05DB\u05DC \u05D4\u05D5\u05D5\u05D9\u05DC\u05D5\u05E0\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E8\u05D0\u05D5\u05EA \u05D4\u05D7\u05D5\u05E6\u05D4.",window:"\u05D7\u05DC\u05D5\u05DF \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD \u05D1\u05E9\u05DC\u05D5\u05E9 \u05E9\u05DB\u05D1\u05D5\u05EA. \u05D1\u05E9\u05DB\u05D1\u05D4 \u05D4\u05D0\u05DE\u05E6\u05E2\u05D9\u05EA \u05D7\u05D5\u05E8 \u05E7\u05D8\u05DF \u05E9\u05DE\u05E9\u05D5\u05D5\u05D4 \u05DC\u05D7\u05E5 \u05D1\u05D9\u05DF \u05D4\u05E9\u05DB\u05D1\u05D5\u05EA.",carpet:"\u05E9\u05D8\u05D9\u05D7 \u05D4\u05EA\u05D0, \u05E2\u05DD \u05DE\u05E1\u05D9\u05DC\u05D5\u05EA \u05DE\u05D5\u05E9\u05D1\u05D9\u05DD \u05DE\u05D0\u05DC\u05D5\u05DE\u05D9\u05E0\u05D9\u05D5\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D6\u05D9\u05D6 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E9\u05D1\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05DE\u05E1\u05D9\u05DC\u05D5\u05EA \u05D5\u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E9\u05D5\u05E8\u05D5\u05EA.",lining:"\u05D3\u05E4\u05E0\u05D5\u05EA \u05D4\u05EA\u05D0: \u05E4\u05D0\u05E0\u05DC\u05D9\u05DD \u05DE\u05D7\u05D5\u05DE\u05E8 \u05DE\u05E8\u05D5\u05DB\u05D1 \u05E7\u05DC \u05E9\u05DE\u05DB\u05E1\u05D9\u05DD \u05D0\u05EA \u05D4\u05D1\u05D9\u05D3\u05D5\u05D3 \u05D5\u05D0\u05EA \u05DE\u05D1\u05E0\u05D4 \u05D4\u05D2\u05D5\u05E3.",bulkhead:"\u05DE\u05D7\u05D9\u05E6\u05D4 \u05E7\u05D3\u05DE\u05D9\u05EA \u05D5\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05D8\u05D9\u05D9\u05E1. \u05D4\u05D3\u05DC\u05EA \u05DE\u05E9\u05D5\u05E8\u05D9\u05D9\u05E0\u05EA \u05D5\u05E0\u05E2\u05D5\u05DC\u05D4, \u05D5\u05E0\u05E4\u05EA\u05D7\u05EA \u05E8\u05E7 \u05D1\u05E7\u05D5\u05D3 \u05DE\u05D4\u05E6\u05D5\u05D5\u05EA \u05D5\u05D1\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D8\u05D9\u05D9\u05E1\u05D9\u05DD.",bulkheadAft:"\u05D4\u05DE\u05D7\u05D9\u05E6\u05D4 \u05D4\u05D0\u05D7\u05D5\u05E8\u05D9\u05EA. \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9\u05D4 \u05E0\u05DE\u05E6\u05D0\u05EA \u05DE\u05D7\u05D9\u05E6\u05EA \u05D4\u05DC\u05D7\u05E5, \u05D5\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D4 \u05D4\u05D6\u05E0\u05D1 \u05D5\u05DE\u05E0\u05D5\u05E2 \u05D4\u05E2\u05D6\u05E8.",ckdoor:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05D8\u05D9\u05D9\u05E1: \u05DE\u05E9\u05D5\u05E8\u05D9\u05D9\u05E0\u05EA, \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05EA \u05D5\u05DC\u05D5\u05D7 \u05DE\u05E7\u05E9\u05D9\u05DD. \u05D1\u05E7\u05E9\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4 \u05D1\u05E7\u05D5\u05D3 \u05DE\u05E6\u05D9\u05D2\u05D4 \u05DC\u05D8\u05D9\u05D9\u05E1\u05D9\u05DD \u05EA\u05DE\u05D5\u05E0\u05D4 \u05DE\u05DE\u05E6\u05DC\u05DE\u05D4, \u05D5\u05D4\u05DD \u05DE\u05D0\u05E9\u05E8\u05D9\u05DD \u05D0\u05D5 \u05D3\u05D5\u05D7\u05D9\u05DD.",galley:"\u05DE\u05D8\u05D1\u05D7\u05D5\u05DF: \u05DE\u05E9\u05D8\u05D7 \u05E2\u05D1\u05D5\u05D3\u05D4, \u05E2\u05D2\u05DC\u05D5\u05EA \u05DE\u05EA\u05D7\u05EA, \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05D5\u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E7\u05E4\u05D4 \u05DE\u05E2\u05DC, \u05D5\u05EA\u05D0\u05D9 \u05D0\u05D7\u05E1\u05D5\u05DF \u05E2\u05DD \u05EA\u05E4\u05E1\u05D9\u05DD \u05D0\u05D3\u05D5\u05DE\u05D9\u05DD.",cart:"\u05E2\u05D2\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05D5\u05E6\u05D9\u05D0\u05D4 \u05D0\u05D5\u05EA\u05D4 \u05DE\u05D4\u05DE\u05D8\u05D1\u05D7\u05D5\u05DF \u05D0\u05D5 \u05DE\u05D7\u05D6\u05D9\u05E8\u05D4 \u05D0\u05D5\u05EA\u05D4. \u05D4\u05D3\u05D5\u05D5\u05E9\u05D4 \u05D4\u05D0\u05D3\u05D5\u05DE\u05D4 \u05DC\u05DE\u05D8\u05D4 \u05D4\u05D9\u05D0 \u05D1\u05DC\u05DD \u05D4\u05E2\u05D2\u05DC\u05D4.",oven:"\u05EA\u05E0\u05D5\u05E8 \u05DC\u05D7\u05D9\u05DE\u05D5\u05DD \u05D0\u05E8\u05D5\u05D7\u05D5\u05EA, \u05E2\u05DD \u05EA\u05E6\u05D5\u05D2\u05D4 \u05D5\u05E9\u05E2\u05D5\u05DF \u05D6\u05DE\u05DF.",coffee:"\u05DE\u05DB\u05D5\u05E0\u05EA \u05E7\u05E4\u05D4 \u05D5\u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD, \u05DE\u05D7\u05D5\u05D1\u05E8\u05EA \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05DD \u05E9\u05DC \u05D4\u05DE\u05D8\u05D5\u05E1.",lav:"\u05EA\u05D0 \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D5\u05D0\u05E7\u05D5\u05DD \u05DE\u05E2\u05D1\u05D9\u05E8\u05D4 \u05D0\u05EA \u05D4\u05E4\u05E1\u05D5\u05DC\u05EA \u05DC\u05DE\u05DB\u05DC \u05D1\u05D7\u05DC\u05E7 \u05D4\u05D0\u05D7\u05D5\u05E8\u05D9 \u05E9\u05DC \u05D4\u05DE\u05D8\u05D5\u05E1.",lavDoor:"\u05D3\u05DC\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD. \u05D4\u05E0\u05D5\u05E8\u05D4 \u05D4\u05D9\u05E8\u05D5\u05E7\u05D4 \u05DE\u05E1\u05DE\u05E0\u05EA \u05E9\u05D4\u05EA\u05D0 \u05E4\u05E0\u05D5\u05D9.",jumpseat:"\u05DE\u05D5\u05E9\u05D1 \u05D3\u05D9\u05D9\u05DC. \u05D4\u05DE\u05D5\u05E9\u05D1 \u05DE\u05EA\u05E7\u05E4\u05DC \u05DC\u05D1\u05D3 \u05DC\u05DE\u05E2\u05DC\u05D4 \u05DB\u05E9\u05E7\u05DE\u05D9\u05DD, \u05DB\u05D3\u05D9 \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D3\u05DC\u05EA. \u05D9\u05E9 \u05D1\u05D5 \u05E8\u05EA\u05DE\u05D4 \u05E9\u05DC \u05D0\u05E8\u05D1\u05E2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05E7\u05E4\u05DC\u05EA \u05D0\u05D5 \u05E4\u05D5\u05EA\u05D7\u05EA.",handset:"\u05E9\u05E4\u05D5\u05E4\u05E8\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E7\u05D5\u05DD: \u05E9\u05D9\u05D7\u05D4 \u05E2\u05DD \u05D4\u05D8\u05D9\u05D9\u05E1\u05D9\u05DD \u05D5\u05E2\u05DD \u05E9\u05D0\u05E8 \u05D4\u05D3\u05D9\u05D9\u05DC\u05D9\u05DD, \u05D5\u05D2\u05DD \u05DB\u05E8\u05D9\u05D6\u05D4 \u05DC\u05E0\u05D5\u05E1\u05E2\u05D9\u05DD.",flashlight:"\u05E4\u05E0\u05E1 \u05D7\u05D9\u05E8\u05D5\u05DD. \u05D4\u05E0\u05D5\u05E8\u05D4 \u05D4\u05D0\u05D3\u05D5\u05DE\u05D4 \u05D4\u05DE\u05D4\u05D1\u05D4\u05D1\u05EA \u05DE\u05E8\u05D0\u05D4 \u05E9\u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D8\u05E2\u05D5\u05E0\u05D4.",fap:"\u05DC\u05D5\u05D7 \u05D4\u05D3\u05D9\u05D9\u05DC\u05D9\u05DD (FAP): \u05DE\u05E1\u05DA \u05DE\u05D2\u05E2 \u05E9\u05DE\u05E4\u05E2\u05D9\u05DC \u05D0\u05EA \u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05EA\u05D0 \u05D5\u05DE\u05E8\u05D0\u05D4 \u05D0\u05EA \u05DE\u05E6\u05D1 \u05D4\u05D3\u05DC\u05EA\u05D5\u05EA, \u05D4\u05DE\u05D2\u05DC\u05E9\u05D5\u05EA, \u05D4\u05DE\u05D9\u05DD \u05D5\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD. \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05D7\u05DC\u05D9\u05E4\u05D4 \u05D0\u05EA \u05D4\u05EA\u05D0\u05D5\u05E8\u05D4: \u05D1\u05D4\u05D9\u05E8, \u05E2\u05DE\u05D5\u05DD, \u05DC\u05D9\u05DC\u05D4.",doorHandle:"\u05D9\u05D3\u05D9\u05EA \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D3\u05DC\u05EA. \u05DE\u05E8\u05D9\u05DE\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4, \u05D5\u05D4\u05D3\u05DC\u05EA \u05D6\u05D6\u05D4 \u05D4\u05D7\u05D5\u05E6\u05D4 \u05D5\u05DE\u05E1\u05EA\u05D5\u05D1\u05D1\u05EA \u05E7\u05D3\u05D9\u05DE\u05D4. \u05D0\u05DD \u05D4\u05DE\u05D2\u05DC\u05E9\u05D4 \u05D3\u05E8\u05D5\u05DB\u05D4, \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D3\u05DC\u05EA \u05DE\u05E0\u05E4\u05D7\u05EA \u05D0\u05EA \u05DE\u05D2\u05DC\u05E9\u05EA \u05D4\u05D7\u05D9\u05E8\u05D5\u05DD.",armLever:"\u05DE\u05E0\u05D5\u05E3 \u05D3\u05E8\u05D9\u05DB\u05EA \u05D4\u05DE\u05D2\u05DC\u05E9\u05D4. ARMED (\u05E6\u05D4\u05D5\u05D1) \u05E4\u05D9\u05E8\u05D5\u05E9\u05D5 \u05E9\u05D4\u05DE\u05D2\u05DC\u05E9\u05D4 \u05DE\u05D7\u05D5\u05D1\u05E8\u05EA \u05DC\u05E8\u05E6\u05E4\u05D4 \u05D5\u05EA\u05EA\u05E0\u05E4\u05D7 \u05D1\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D3\u05DC\u05EA. \u05DC\u05E4\u05E0\u05D9 \u05E4\u05EA\u05D9\u05D7\u05D4 \u05E8\u05D2\u05D9\u05DC\u05D4 \u05D1\u05E9\u05D3\u05D4 \u05DE\u05E2\u05D1\u05D9\u05E8\u05D9\u05DD \u05DC-DISARMED (\u05D9\u05E8\u05D5\u05E7). \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05D7\u05DC\u05D9\u05E4\u05D4 \u05DE\u05E6\u05D1.",bustle:"\u05DB\u05D9\u05E1\u05D5\u05D9 \u05DE\u05D2\u05DC\u05E9\u05EA \u05D4\u05D7\u05D9\u05E8\u05D5\u05DD. \u05D1\u05EA\u05D5\u05DB\u05D5 \u05DE\u05D2\u05DC\u05E9\u05D4 \u05DE\u05E7\u05D5\u05E4\u05DC\u05EA \u05E9\u05DE\u05EA\u05E0\u05E4\u05D7\u05EA \u05D1\u05E9\u05E9 \u05E9\u05E0\u05D9\u05D5\u05EA.",viewport:"\u05E2\u05D9\u05E0\u05D9\u05EA \u05D1\u05D3\u05DC\u05EA: \u05DE\u05E1\u05EA\u05DB\u05DC\u05D9\u05DD \u05D3\u05E8\u05DB\u05D4 \u05D4\u05D7\u05D5\u05E6\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05E4\u05EA\u05D9\u05D7\u05D4, \u05DB\u05D3\u05D9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D0\u05D9\u05DF \u05D0\u05E9 \u05D0\u05D5 \u05DE\u05D9\u05DD.",assist:"\u05D9\u05D3\u05D9\u05EA \u05D0\u05D7\u05D9\u05D6\u05D4 \u05E6\u05D4\u05D5\u05D1\u05D4 \u05DC\u05D9\u05D3 \u05D4\u05D3\u05DC\u05EA, \u05E9\u05D4\u05D3\u05D9\u05D9\u05DC \u05DE\u05D7\u05D6\u05D9\u05E7 \u05D1\u05D4 \u05D1\u05D6\u05DE\u05DF \u05E4\u05D9\u05E0\u05D5\u05D9.",pathLight:"\u05E4\u05E1 \u05EA\u05D0\u05D5\u05E8\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD \u05D1\u05E8\u05E6\u05E4\u05D4. \u05D1\u05D7\u05D5\u05E9\u05DA \u05D0\u05D5 \u05D1\u05E2\u05E9\u05DF \u05D4\u05D5\u05D0 \u05DE\u05D5\u05D1\u05D9\u05DC \u05DC\u05D9\u05E6\u05D9\u05D0\u05D5\u05EA.",exitSign:"\u05E9\u05DC\u05D8 \u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05D5\u05D0\u05E8. \u05D9\u05E9 \u05DC\u05D5 \u05E1\u05D5\u05DC\u05DC\u05D4 \u05DE\u05E9\u05DC\u05D5, \u05D5\u05D4\u05D5\u05D0 \u05D3\u05D5\u05DC\u05E7 \u05D2\u05DD \u05DB\u05E9\u05D4\u05D7\u05E9\u05DE\u05DC \u05E0\u05D5\u05E4\u05DC.",safetyCard:"\u05E2\u05DC\u05D5\u05DF \u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D4\u05D1\u05D8\u05D9\u05D7\u05D5\u05EA \u05D1\u05DB\u05D9\u05E1 \u05D4\u05DE\u05D5\u05E9\u05D1.",lifeVest:"\u05D7\u05D2\u05D5\u05E8\u05EA \u05D4\u05E6\u05DC\u05D4 \u05D1\u05DB\u05D9\u05E1 \u05DE\u05EA\u05D7\u05EA \u05DC\u05DE\u05D5\u05E9\u05D1. \u05DE\u05E0\u05E4\u05D7\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4 \u05E8\u05E7 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05D4\u05DE\u05D8\u05D5\u05E1.",curtain:"\u05D5\u05D9\u05DC\u05D5\u05DF \u05E9\u05DE\u05E4\u05E8\u05D9\u05D3 \u05D1\u05D9\u05DF \u05D4\u05DE\u05D7\u05DC\u05E7\u05D4 \u05D4\u05E7\u05D3\u05DE\u05D9\u05EA \u05DC\u05E9\u05D0\u05E8 \u05D4\u05EA\u05D0.",overwing:"\u05D9\u05E6\u05D9\u05D0\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD \u05DE\u05E2\u05DC \u05D4\u05DB\u05E0\u05E3. \u05DE\u05D5\u05E9\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D3\u05D9\u05EA \u05D4\u05D0\u05D3\u05D5\u05DE\u05D4, \u05DE\u05E8\u05D9\u05DE\u05D9\u05DD \u05D0\u05EA \u05D4\u05E4\u05EA\u05D7 \u05D4\u05D7\u05D5\u05E6\u05D4 \u05D5\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05D0\u05DC \u05D4\u05DB\u05E0\u05E3."},bs={seat:"\u05DE\u05D5\u05E9\u05D1 \u05E0\u05D5\u05E1\u05E2",tray:"\u05E9\u05D5\u05DC\u05D7\u05DF \u05DE\u05EA\u05E7\u05E4\u05DC",bin:"\u05EA\u05D0 \u05DE\u05D8\u05E2\u05DF \u05E2\u05DC\u05D9\u05D5\u05DF",binDoor:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05DE\u05D8\u05E2\u05DF \u05E2\u05DC\u05D9\u05D5\u05DF",reading:"\u05DE\u05E0\u05D5\u05E8\u05EA \u05E7\u05E8\u05D9\u05D0\u05D4",gasper:"\u05E4\u05EA\u05D7 \u05D0\u05D5\u05D5\u05D9\u05E8",callBtn:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E7\u05E8\u05D9\u05D0\u05D4 \u05DC\u05E6\u05D5\u05D5\u05EA",sign:"\u05E9\u05DC\u05D8 \u05D7\u05D2\u05D9\u05E8\u05EA \u05D7\u05D2\u05D5\u05E8\u05D5\u05EA",mask:"\u05DE\u05E1\u05DB\u05D5\u05EA \u05D7\u05DE\u05E6\u05DF",shade:"\u05D5\u05D9\u05DC\u05D5\u05DF \u05D7\u05DC\u05D5\u05DF",window:"\u05D7\u05DC\u05D5\u05DF",carpet:"\u05E8\u05E6\u05E4\u05D4 \u05D5\u05DE\u05E1\u05D9\u05DC\u05D5\u05EA",lining:"\u05D3\u05D5\u05E4\u05DF \u05D4\u05EA\u05D0",bulkhead:"\u05DE\u05D7\u05D9\u05E6\u05D4 \u05E7\u05D3\u05DE\u05D9\u05EA",bulkheadAft:"\u05DE\u05D7\u05D9\u05E6\u05D4 \u05D0\u05D7\u05D5\u05E8\u05D9\u05EA",ckdoor:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05D8\u05D9\u05D9\u05E1",galley:"\u05DE\u05D8\u05D1\u05D7\u05D5\u05DF",cart:"\u05E2\u05D2\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA",oven:"\u05EA\u05E0\u05D5\u05E8",coffee:"\u05DE\u05DB\u05D5\u05E0\u05EA \u05E7\u05E4\u05D4",lav:"\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",lavDoor:"\u05D3\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",jumpseat:"\u05DE\u05D5\u05E9\u05D1 \u05D3\u05D9\u05D9\u05DC",handset:"\u05E9\u05E4\u05D5\u05E4\u05E8\u05EA \u05D0\u05D9\u05E0\u05D8\u05E8\u05E7\u05D5\u05DD",flashlight:"\u05E4\u05E0\u05E1 \u05D7\u05D9\u05E8\u05D5\u05DD",fap:"\u05DC\u05D5\u05D7 \u05D4\u05D3\u05D9\u05D9\u05DC\u05D9\u05DD (FAP)",doorHandle:"\u05D9\u05D3\u05D9\u05EA \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D3\u05DC\u05EA",armLever:"\u05DE\u05E0\u05D5\u05E3 \u05D3\u05E8\u05D9\u05DB\u05EA \u05D4\u05DE\u05D2\u05DC\u05E9\u05D4",bustle:"\u05DE\u05D2\u05DC\u05E9\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD \u05DE\u05E7\u05D5\u05E4\u05DC\u05EA",viewport:"\u05E2\u05D9\u05E0\u05D9\u05EA",assist:"\u05D9\u05D3\u05D9\u05EA \u05D0\u05D7\u05D9\u05D6\u05D4",pathLight:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD \u05D1\u05E8\u05E6\u05E4\u05D4",exitSign:"\u05E9\u05DC\u05D8 \u05D9\u05E6\u05D9\u05D0\u05D4",safetyCard:"\u05E2\u05DC\u05D5\u05DF \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA",lifeVest:"\u05D7\u05D2\u05D5\u05E8\u05EA \u05D4\u05E6\u05DC\u05D4",curtain:"\u05D5\u05D9\u05DC\u05D5\u05DF \u05DE\u05D7\u05DC\u05E7\u05D5\u05EA",overwing:"\u05D9\u05E6\u05D9\u05D0\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD \u05DE\u05E2\u05DC \u05D4\u05DB\u05E0\u05E3"},A={DoorL1:"L1",DoorR1:"R1",DoorL4:"L4",DoorR4:"R4"};function V(M,N){let O=M.object,H=O.userData.cab;if(!H)return null;let W={name:bs[H.type]||"",text:Lr[H.type]||"",panel:"\u05EA\u05D0 \u05D4\u05E0\u05D5\u05E1\u05E2\u05D9\u05DD",state:""},re=M.instanceId;switch(H.type){case"tray":if(re!=null){let se=ee[re];se.tray=se.tray?0:1,W.state=se.tray?"\u05D4\u05E9\u05D5\u05DC\u05D7\u05DF \u05E4\u05EA\u05D5\u05D7":"\u05D4\u05E9\u05D5\u05DC\u05D7\u05DF \u05DE\u05E7\u05D5\u05E4\u05DC",W.name+=" \u2013 \u05E9\u05D5\u05E8\u05D4 "+se.row+se.col}break;case"seat":re!=null&&ee[re]&&(W.name+=" "+ee[re].row+ee[re].col);break;case"reading":re!=null&&(f.reading[re]=!f.reading[re],lt.setColorAt(re,f.reading[re]?K:Pe),lt.instanceColor.needsUpdate=!0,W.state=f.reading[re]?"\u05D4\u05DE\u05E0\u05D5\u05E8\u05D4 \u05D3\u05D5\u05DC\u05E7\u05EA":"\u05D4\u05DE\u05E0\u05D5\u05E8\u05D4 \u05DB\u05D1\u05D5\u05D9\u05D4");break;case"callBtn":re!=null&&(f.call[re]=!f.call[re],He.setColorAt(re,f.call[re]?b:oe),He.instanceColor.needsUpdate=!0,W.state=f.call[re]?"\u05D4\u05E7\u05E8\u05D9\u05D0\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4 \u05DC\u05E6\u05D5\u05D5\u05EA":"\u05D4\u05E7\u05E8\u05D9\u05D0\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4");break;case"shade":case"window":{let se=re??-1,Me=he.find(pe=>pe.i===se);Me&&(Me.open=Me.open>.5?0:1,W.state=Me.open?"\u05D4\u05D5\u05D5\u05D9\u05DC\u05D5\u05DF \u05E4\u05EA\u05D5\u05D7":"\u05D4\u05D5\u05D5\u05D9\u05DC\u05D5\u05DF \u05E1\u05D2\u05D5\u05E8",W.name=bs.shade,W.text=Lr.shade);break}case"binDoor":{let se=H.bd;se.open=se.open?0:1,W.state=se.open?"\u05D4\u05EA\u05D0 \u05E4\u05EA\u05D5\u05D7":"\u05D4\u05EA\u05D0 \u05E1\u05D2\u05D5\u05E8";break}case"cart":{let se=H.ct;se.out=se.out?0:1,W.state=se.out?"\u05D4\u05E2\u05D2\u05DC\u05D4 \u05D1\u05D7\u05D5\u05E5":"\u05D4\u05E2\u05D2\u05DC\u05D4 \u05D1\u05DE\u05E7\u05D5\u05DE\u05D4";break}case"jumpseat":{let se=f.jump[H.id];se.open=se.open?0:1,W.name+=" "+H.id,W.state=se.open?"\u05D4\u05DE\u05D5\u05E9\u05D1 \u05E4\u05EA\u05D5\u05D7":"\u05D4\u05DE\u05D5\u05E9\u05D1 \u05DE\u05E7\u05D5\u05E4\u05DC";break}case"fap":f.light=(f.light+1)%3,W.state="\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05EA\u05D0: "+["\u05D1\u05D4\u05D9\u05E8\u05D4","\u05E2\u05DE\u05D5\u05DE\u05D4","\u05DC\u05D9\u05DC\u05D4"][f.light];break;case"armLever":{let se=H.door;f.armed[se]=!f.armed[se],Lt[se].flagMat.map=f.armed[se]?Bt:pt,Lt[se].flagMat.needsUpdate=!0,W.name+=" \u2013 \u05D3\u05DC\u05EA "+A[se],W.state=f.armed[se]?"\u05D4\u05DE\u05D2\u05DC\u05E9\u05D4 \u05D3\u05E8\u05D5\u05DB\u05D4 (ARMED)":"\u05D4\u05DE\u05D2\u05DC\u05E9\u05D4 \u05DC\u05D0 \u05D3\u05E8\u05D5\u05DB\u05D4 (DISARMED)";break}case"doorHandle":case"bustle":{let se=H.door;if(W.name=bs.doorHandle+" \u2013 \u05D3\u05DC\u05EA "+A[se],H.type==="doorHandle"){let Me=!N.doors[se];N.doors[se]=Me?1:0,Me&&f.armed[se]?(f.slides[se]=1,W.state="\u05D4\u05D3\u05DC\u05EA \u05E0\u05E4\u05EA\u05D7\u05D4 \u05D5\u05D4\u05DE\u05D2\u05DC\u05E9\u05D4 \u05D3\u05E8\u05D5\u05DB\u05D4: \u05DE\u05D2\u05DC\u05E9\u05EA \u05D4\u05D7\u05D9\u05E8\u05D5\u05DD \u05DE\u05EA\u05E0\u05E4\u05D7\u05EA!"):W.state=Me?"\u05D4\u05D3\u05DC\u05EA \u05E0\u05E4\u05EA\u05D7\u05EA":"\u05D4\u05D3\u05DC\u05EA \u05E0\u05E1\u05D2\u05E8\u05EA",Me||(f.slides[se]=0)}break}}return!W.state&&["sign"].includes(H.type)&&(W.state=f.belts?"\u05D4\u05E9\u05DC\u05D8 \u05D3\u05D5\u05DC\u05E7":"\u05D4\u05E9\u05DC\u05D8 \u05DB\u05D1\u05D5\u05D9"),W}let q=0;function j(M,N,O,H){q+=M;let W=(pe,Se,qe)=>pe+Math.sign(Se-pe)*Math.min(Math.abs(Se-pe),M/qe);f.belts=H.belts,f.nosmoke=H.smoke,f.signMat.color.setHex(f.belts||f.nosmoke?16777215:3355443),f.fsbMat.color.setHex(f.belts?16777215:2763306),f.pathMat.color.setHex(H.emer?16771488:2763296),f.paneMat.color.setRGB(.74*(1-O)+.03,.84*(1-O)+.04,.94*(1-O)+.08);let re=W(f.masks,H.masks?1:0,.8);(re!==f.masks||re>0&&!J.visible)&&(f.masks=re,ce(re));let se=!1;ee.forEach((pe,Se)=>{pe.trayT!==pe.tray&&(pe.trayT=W(pe.trayT,pe.tray,.5),Ue(Se),se=!0)}),se&&(Ae.instanceMatrix.needsUpdate=!0);let Me=!1;he.forEach(pe=>{pe.t!==pe.open&&(pe.t=W(pe.t,pe.open,.7),Ie(pe),Me=!0)}),Me&&(ne.instanceMatrix.needsUpdate=!0),Be.forEach(pe=>{pe.t!==pe.open&&(pe.t=W(pe.t,pe.open,.6),pe.pivot.rotation.x=pe.side*(.2+pe.t*1.25))}),p.forEach(pe=>{let Se=pe.userData.cab&&pe.userData.cab.ct;Se&&Se.t!==Se.out&&(Se.t=W(Se.t,Se.out,.8),Se.pivot.position.x=Se.x0+Se.facing*.7*Se.t)}),Object.values(f.jump).forEach(pe=>{pe.t!==pe.open&&(pe.t=W(pe.t,pe.open,.4),pe.pv.rotation.z=pe.facing*(1-pe.t)*Math.PI/2)}),(f.leds||[]).forEach(pe=>pe.visible=q%2<.15),Object.entries(Lt).forEach(([pe,Se])=>{Se.handleP.rotation.x=0,Se.handleP.rotation.z=(N.doors[pe]?1:0)*.6,Se.armP.rotation.z=f.armed[pe]?.5:-.5}),Object.entries(Cr).forEach(([pe,Se])=>{let qe=f.slides[pe]&&N.doors[pe]?1:0;Se.t=W(Se.t,qe,qe?5:1.5);let ht=Math.max(0,(Se.t-.15)/.85);Se.g.visible=ht>.002,Se.g.scale.set(1,.4+.6*ht,Math.max(.001,ht))}),sc(O)}return ce(0),{root:u,clickables:p,click:V,update:j,STATE:f,rowX:Y,FL:-.32,NAMES:bs,TXT:Lr}}function bd({runway:i,S:e,FLAPS:t}){let o=new at;i.add(o);let a=(()=>{let y=document.createElement("canvas");y.width=y.height=64;let F=y.getContext("2d"),Z=F.createRadialGradient(32,32,0,32,32,32);return Z.addColorStop(0,"rgba(255,255,255,1)"),Z.addColorStop(.25,"rgba(255,255,255,.8)"),Z.addColorStop(1,"rgba(255,255,255,0)"),F.fillStyle=Z,F.fillRect(0,0,64,64),new Jn(y)})();function c(y,F,Z){let ue=new Ot;ue.setAttribute("position",new Mt(y.flat(),3));let U=new ds({color:F,size:Z,map:a,transparent:!0,depthWrite:!1,blending:ls,sizeAttenuation:!0,toneMapped:!1}),k=new ur(ue,U);return k.renderOrder=6,o.add(k),k}let l=[],h=[],u=[],f=[],p=[],g=[],x=[];for(let y=-1500;y<=1500;y+=60)[-1,1].forEach(F=>l.push([y,.3,F*(45/2+1)]));for(let y=-1470;y<1500;y+=15)h.push([y,.1,0]);for(let y=-1440;y<-600;y+=30)[-1,1].forEach(F=>[4,6,8].forEach(Z=>u.push([y,.1,F*Z])));for(let y=-45/2-4;y<=45/2+4;y+=3)f.push([-1500,.3,y]),p.push([1500,.3,y]);for(let y=-2400;y<-1530;y+=30)g.push([y,.6,0]);for(let y=-2400;y<-1530;y+=150)for(let F=-15;F<=15;F+=3)x.push([y,.6,F]);c(l,16773840,6),c(h,16777215,3),c(u,16777215,3),c(f,3211104,7),c(p,16722464,7),c(g,16773840,6),c(x,16773840,5);let m=c([[0,1,0]],16777215,26),S=[0,1,2,3].map(y=>[-1200,1,-(45/2+15+y*9)]).map(y=>c([y],16777215,10)),_=new rt({color:9079430});for(let y=0;y<8;y++)[-1,1].forEach(F=>{let Z=new ke(new pn(45,1.8),_);Z.rotation.x=-Math.PI/2,Z.position.set(-1470,.03,F*(3+y*2.6)),i.add(Z)});[-1,1].forEach(y=>{let F=new ke(new pn(60,9),_);F.rotation.x=-Math.PI/2,F.position.set(-1100,.03,y*9),i.add(F)}),o.visible=!1;let v={on:!1,x:0,phase:"",t:0,msg:""},L=-1150,C=ct.degToRad(3);function w(){v.on=!0,v.x=-7100,v.phase="approach",v.t=0,e.alt=(L-v.x)*Math.tan(C)+2,e.v=72,e.gamma=-C,e.phi=0,e.psi=0,e.onGround=!1,e.flapIdx=4,e.gearDown=!0,e.gearPos=1,e.spoilerT=0,e.spoiler=0,e.thr=.42,e.n1=52,e.n1e=[52,52],o.visible=!0}function G(){v.on=!1,o.visible=!1}function T(y){if(!v.on)return!1;v.t+=y;let F=e.alt,Z=L-v.x;if(v.phase==="approach"){let k=Math.max(0,Z*Math.tan(C)),Y=-C+ct.clamp((k-F)*.01,-.03,.03);e.v+=(70-e.v)*y*.4,e.thr=.42,e.alpha=.07,F<14&&(v.phase="flare"),e.gamma+=(Y-e.gamma)*(1-Math.exp(-y/1.2))}else if(v.phase==="flare"){e.thr=Math.max(0,e.thr-y*.25),e.alpha=Math.min(.11,e.alpha+y*.02);let k=-.045+.03*ct.clamp((14-F)/14,0,1);e.gamma+=(k-e.gamma)*(1-Math.exp(-y/.8)),e.v-=y*.8,F<=.05&&(v.phase="roll",e.alt=0,e.onGround=!0,e.gamma=0,e.spoilerT=1,v.msg="\u05E0\u05D2\u05D9\u05E2\u05D4!")}else if(v.phase==="roll"){e.thr=0,e.alpha=Math.max(0,e.alpha-y*.05);let k=e.v>35?1:0;v.rev=k,e.v=Math.max(0,e.v-y*(2.4+k*.8)),e.v<.5&&(e.v=0,v.phase="stopped",e.spoilerT=0,v.rev=0)}e.n1+=((v.phase==="roll"&&v.rev?70:21+80*e.thr)-e.n1)*(1-Math.exp(-y/1.5)),e.thrust=2*120600*Math.pow(Math.max(0,(e.n1-19)/82),2.15),e.vs=e.v*Math.sin(e.gamma),e.alt=Math.max(0,e.alt+e.vs*y),e.theta=e.gamma+e.alpha,e.phi*=Math.exp(-y/.5),v.x+=e.v*Math.cos(e.gamma)*y,e.posX+=e.v*y,i.position.x=-v.x;let ue=v.t*2%1;m.geometry.attributes.position.setXYZ(0,-2400+ue*870,1,0),m.geometry.attributes.position.needsUpdate=!0;let U=ct.radToDeg(Math.atan2(F+3,Math.max(1,-1200-v.x)));return[3.5,3.17,2.83,2.5].forEach((k,Y)=>S[Y].material.color.setHex(U>k?16777215:16719904)),!0}return{start:w,stop:G,step:T,L:v}}function jl(i,e){if(e===Kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===mo||e===za){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===mo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Wa=class extends vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ih(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Gi.extractUrlBase(e);o=Gi.resolveURL(l,this.path)}else o=Gi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new uo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cd){try{o[it.KHR_BINARY_GLTF]=new xh(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new th;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new _h(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new vh;break;case it.KHR_MESH_QUANTIZATION:o[u]=new yh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function vy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},eh=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Gt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vi(h),l.distance=u;break;case"spot":l=new mr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},th=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){let s=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},nh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ih=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},rh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ah=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Gt),Promise.all(r)}},ch=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},lh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Gt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}},hh=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},uh=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},dh=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ph=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mh=class{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},gh=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let x=new De,m=new R,d=new $t,S=new R(1,1,1),_=new Yt(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,x.compose(m,d,S));for(let v in c)if(v==="_COLOR_0"){let L=c[v];_.instanceColor=new fs(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);xt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Cd="glTF",yo=12,Td={JSON:1313821514,BIN:5130562},xh=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-yo,r=new DataView(e,yo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Td.JSON){let l=new Uint8Array(e,yo+o,a);this.content=n.decode(l)}else if(c===Td.BIN){let l=yo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Eh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Eh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=vr[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(p)},a,l,Gt,f)})})}},vh=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},yh=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Xa=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*l,x=g-l,m=-2*p+3*f,d=p-f,S=1-m,_=d-f+u;for(let v=0;v!==a;v++){let L=o[x+v+a],C=o[x+v+c]*h,w=o[g+v+a],G=o[g+v]*h;r[v]=S*L+_*C+m*w+d*G}return r}},yy=new $t,Mh=class extends Xa{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return yy.fromArray(r).normalize().toArray(r),r}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wd={9728:zt,9729:dn,9984:aa,9985:Bl,9986:Vr,9987:Fi},Ad={33071:En,33648:jr,10497:pi},Jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},My={CUBICSPLINE:void 0,LINEAR:hs,STEP:ir},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ey(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new on({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function xs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function by(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ty(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ql(t.attributes):e=i.indices+":"+Ql(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ql(i.targets[n]);return e}function Ql(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ay=new De,bh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new dr(this.options.manager):this.textureLoader=new Ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xs(r,a,s),Xi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Gi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Jl[s.type],a=vr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Vt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Jl[s.type],l=vr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,_=t.cache.get(S);_||(x=new l(a,d*p,s.count*p/h),_=new lr(x,p/h),t.cache.add(S,_)),m=new us(_,c,f%p/h,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new Vt(x,c,g);if(s.sparse!==void 0){let d=Jl.SCALAR,S=vr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,L=new S(o[1],_,s.sparse.count*d),C=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,G=L.length;w<G;w++){let T=L[w];if(m.setX(T,C[w*c]),c>=2&&m.setY(T,C[w*c+1]),c>=3&&m.setZ(T,C[w*c+2]),c>=4&&m.setW(T,C[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=wd[f.magFilter]||dn,h.minFilter=wd[f.minFilter]||Fi,h.wrapS=Ad[f.wrapS]||pi,h.wrapT=Ad[f.wrapT]||pi,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Jt(x);m.needsUpdate=!0,f(m)}),t.load(Gi.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||wy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ds,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ro,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return on}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Gt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let h=r.alphaMode||$l.OPAQUE;if(h===$l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$l.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==rt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rt){let u=r.emissiveFactor;a.emissive=new Ne().setRGB(u[0],u[1],u[2],Gt)}return r.emissiveTexture!==void 0&&o!==rt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&xs(s,u,r),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Ty(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Rd(new Ot,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Ey(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=o[p],d,S=l[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Ea(x,S):new ke(x,S),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?d.geometry=jl(d.geometry,za):m.mode===Un.TRIANGLE_FAN&&(d.geometry=jl(d.geometry,mo));else if(m.mode===Un.LINES)d=new ba(x,S);else if(m.mode===Un.LINE_STRIP)d=new hr(x,S);else if(m.mode===Un.LINE_LOOP)d=new Ta(x,S);else if(m.mode===Un.POINTS)d=new ur(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&by(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Xi(d,r),m.extensions&&xs(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&xs(s,u[0],r),u[0];let f=new at;r.extensions&&xs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(ct.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ar(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new De;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Sa(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],x=u[3],m=u[4],d=[];for(let S=0,_=f.length;S<_;S++){let v=f[S],L=p[S],C=g[S],w=x[S],G=m[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let T=n._createAnimationTracks(v,L,C,w,G);if(T)for(let y=0;y<T.length;y++)d.push(T[y])}return new Da(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Ay)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new so:l.length>1?h=new at:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Xi(h,r),r.extensions&&xs(n,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new at;n.name&&(r.name=s.createUniqueName(n.name)),Xi(r,n),n.extensions&&xs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof _n||f instanceof Jt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Wi[r.path]===Wi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Wi[r.path]){case Wi.weights:l=xi;break;case Wi.rotation:l=$n;break;case Wi.position:case Wi.scale:l=_i;break;default:switch(n.itemSize){case 1:l=xi;break;case 2:case 3:default:l=_i;break}break}let h=s.interpolation!==void 0?My[s.interpolation]:hs,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Wi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof $n?Mh:Xa;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ry(i,e,t){let n=e.attributes,s=new Ut;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let h=Sh(vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=Sh(vr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Sn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rd(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Eh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Xi(i,e),Ry(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sy(i,e.targets,t):i})}var Pd={type:"change"},Th={type:"start"},Ld={type:"end"},Ya=new gi,Id=new Gn,Cy=Math.cos(70*ct.DEG2RAD),qa=class extends jn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",ce),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pd),n.update(),r=s.NONE},this.update=function(){let P=new R,ne=new $t().setFromUnitVectors(e.up,new R(0,1,0)),he=ne.clone().invert(),de=new R,Ie=new $t,Ke=new R,Qe=2*Math.PI;return function(ve=null){let D=n.object.position;P.copy(D).sub(n.target),P.applyQuaternion(ne),a.setFromVector3(P),n.autoRotate&&r===s.NONE&&F(T(ve)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ge=n.minAzimuthAngle,_e=n.maxAzimuthAngle;isFinite(ge)&&isFinite(_e)&&(ge<-Math.PI?ge+=Qe:ge>Math.PI&&(ge-=Qe),_e<-Math.PI?_e+=Qe:_e>Math.PI&&(_e-=Qe),ge<=_e?a.theta=Math.max(ge,Math.min(_e,a.theta)):a.theta=a.theta>(ge+_e)/2?Math.max(ge,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*l),P.setFromSpherical(a),P.applyQuaternion(he),D.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ge=!1;if(n.zoomToCursor&&C){let Oe=null;if(n.object.isPerspectiveCamera){let st=P.length();Oe=$(st*l);let ot=st-Oe;n.object.position.addScaledVector(v,ot),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let st=new R(L.x,L.y,0);st.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ge=!0;let ot=new R(L.x,L.y,0);ot.unproject(n.object),n.object.position.sub(ot).add(st),n.object.updateMatrixWorld(),Oe=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Oe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Oe).add(n.object.position):(Ya.origin.copy(n.object.position),Ya.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ya.direction))<Cy?e.lookAt(n.target):(Id.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ya.intersectPlane(Id,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ge=!0);return l=1,C=!1,Ge||de.distanceToSquared(n.object.position)>o||8*(1-Ie.dot(n.object.quaternion))>o||Ke.distanceToSquared(n.target)>0?(n.dispatchEvent(Pd),de.copy(n.object.position),Ie.copy(n.object.quaternion),Ke.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",we),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ce),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new po,c=new po,l=1,h=new R,u=new xe,f=new xe,p=new xe,g=new xe,x=new xe,m=new xe,d=new xe,S=new xe,_=new xe,v=new R,L=new xe,C=!1,w=[],G={};function T(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function y(P){let ne=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ne)}function F(P){c.theta-=P}function Z(P){c.phi-=P}let ue=function(){let P=new R;return function(he,de){P.setFromMatrixColumn(de,0),P.multiplyScalar(-he),h.add(P)}}(),U=function(){let P=new R;return function(he,de){n.screenSpacePanning===!0?P.setFromMatrixColumn(de,1):(P.setFromMatrixColumn(de,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(he),h.add(P)}}(),k=function(){let P=new R;return function(he,de){let Ie=n.domElement;if(n.object.isPerspectiveCamera){let Ke=n.object.position;P.copy(Ke).sub(n.target);let Qe=P.length();Qe*=Math.tan(n.object.fov/2*Math.PI/180),ue(2*he*Qe/Ie.clientHeight,n.object.matrix),U(2*de*Qe/Ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ue(he*(n.object.right-n.object.left)/n.object.zoom/Ie.clientWidth,n.object.matrix),U(de*(n.object.top-n.object.bottom)/n.object.zoom/Ie.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(P,ne){if(!n.zoomToCursor)return;C=!0;let he=n.domElement.getBoundingClientRect(),de=P-he.left,Ie=ne-he.top,Ke=he.width,Qe=he.height;L.x=de/Ke*2-1,L.y=-(Ie/Qe)*2+1,v.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function fe(P){u.set(P.clientX,P.clientY)}function te(P){Q(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function ye(P){g.set(P.clientX,P.clientY)}function B(P){f.set(P.clientX,P.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let ne=n.domElement;F(2*Math.PI*p.x/ne.clientHeight),Z(2*Math.PI*p.y/ne.clientHeight),u.copy(f),n.update()}function ie(P){S.set(P.clientX,P.clientY),_.subVectors(S,d),_.y>0?Y(y(_.y)):_.y<0&&ee(y(_.y)),d.copy(S),n.update()}function me(P){x.set(P.clientX,P.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x),n.update()}function Re(P){Q(P.clientX,P.clientY),P.deltaY<0?ee(y(P.deltaY)):P.deltaY>0&&Y(y(P.deltaY)),n.update()}function Ae(P){let ne=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),ne=!0;break}ne&&(P.preventDefault(),n.update())}function Ue(P){if(w.length===1)u.set(P.pageX,P.pageY);else{let ne=Ze(P),he=.5*(P.pageX+ne.x),de=.5*(P.pageY+ne.y);u.set(he,de)}}function We(P){if(w.length===1)g.set(P.pageX,P.pageY);else{let ne=Ze(P),he=.5*(P.pageX+ne.x),de=.5*(P.pageY+ne.y);g.set(he,de)}}function Be(P){let ne=Ze(P),he=P.pageX-ne.x,de=P.pageY-ne.y,Ie=Math.sqrt(he*he+de*de);d.set(0,Ie)}function je(P){n.enableZoom&&Be(P),n.enablePan&&We(P)}function X(P){n.enableZoom&&Be(P),n.enableRotate&&Ue(P)}function lt(P){if(w.length==1)f.set(P.pageX,P.pageY);else{let he=Ze(P),de=.5*(P.pageX+he.x),Ie=.5*(P.pageY+he.y);f.set(de,Ie)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let ne=n.domElement;F(2*Math.PI*p.x/ne.clientHeight),Z(2*Math.PI*p.y/ne.clientHeight),u.copy(f)}function Fe(P){if(w.length===1)x.set(P.pageX,P.pageY);else{let ne=Ze(P),he=.5*(P.pageX+ne.x),de=.5*(P.pageY+ne.y);x.set(he,de)}m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x)}function He(P){let ne=Ze(P),he=P.pageX-ne.x,de=P.pageY-ne.y,Ie=Math.sqrt(he*he+de*de);S.set(0,Ie),_.set(0,Math.pow(S.y/d.y,n.zoomSpeed)),Y(_.y),d.copy(S);let Ke=(P.pageX+ne.x)*.5,Qe=(P.pageY+ne.y)*.5;Q(Ke,Qe)}function Pe(P){n.enableZoom&&He(P),n.enablePan&&Fe(P)}function K(P){n.enableZoom&&He(P),n.enableRotate&&lt(P)}function oe(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",E)),Ve(P),P.pointerType==="touch"?Le(P):z(P))}function b(P){n.enabled!==!1&&(P.pointerType==="touch"?Ee(P):J(P))}function E(P){Ye(P),w.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Ld),r=s.NONE}function z(P){let ne;switch(P.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case ms.DOLLY:if(n.enableZoom===!1)return;te(P),r=s.DOLLY;break;case ms.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ye(P),r=s.PAN}else{if(n.enableRotate===!1)return;fe(P),r=s.ROTATE}break;case ms.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;fe(P),r=s.ROTATE}else{if(n.enablePan===!1)return;ye(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function J(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;B(P);break;case s.DOLLY:if(n.enableZoom===!1)return;ie(P);break;case s.PAN:if(n.enablePan===!1)return;me(P);break}}function ae(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(Th),Re(P),n.dispatchEvent(Ld))}function ce(P){n.enabled===!1||n.enablePan===!1||Ae(P)}function Le(P){switch(le(P),w.length){case 1:switch(n.touches.ONE){case gs.ROTATE:if(n.enableRotate===!1)return;Ue(P),r=s.TOUCH_ROTATE;break;case gs.PAN:if(n.enablePan===!1)return;We(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case gs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;je(P),r=s.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;X(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function Ee(P){switch(le(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;lt(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Fe(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;K(P),n.update();break;default:r=s.NONE}}function we(P){n.enabled!==!1&&P.preventDefault()}function Ve(P){w.push(P.pointerId)}function Ye(P){delete G[P.pointerId];for(let ne=0;ne<w.length;ne++)if(w[ne]==P.pointerId){w.splice(ne,1);return}}function le(P){let ne=G[P.pointerId];ne===void 0&&(ne=new xe,G[P.pointerId]=ne),ne.set(P.pageX,P.pageY)}function Ze(P){let ne=P.pointerId===w[0]?w[1]:w[0];return G[ne]}n.domElement.addEventListener("contextmenu",we),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}};var yr=class i extends ke{constructor(){let e=i.SkyShader,t=new rn({name:e.name,uniforms:Vl.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Nt,depthWrite:!1});super(new Wn(1,1,1),t),this.isSky=!0}};yr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Py=window.FG_AXES,Dd=window.FG_GEAR,Ly=window.CK_INFO,Iy=window.EX_INFO,Ft=document.getElementById("scene"),Fn;try{Fn=new to({canvas:Ft,antialias:!0,powerPreference:"high-performance"})}catch(i){throw window.__noGL=!0,window.__fail&&window.__fail("\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05DC\u05D0 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05EA\u05E6\u05D5\u05D2\u05EA \u05EA\u05DC\u05EA-\u05DE\u05DE\u05D3 (WebGL)",'Chrome: Settings > System > "Use graphics acceleration when available" > Relaunch'),i}Fn.setPixelRatio(Math.min(window.devicePixelRatio,1.75));Fn.outputColorSpace=dt;Fn.toneMapping=Fl;Fn.toneMappingExposure=.6;Fn.shadowMap.enabled=!0;Fn.shadowMap.type=Ol;var Bn=new no,Et=new Ht(40,1,.02,6e4),$a=new yr;$a.scale.setScalar(45e3);Bn.add($a);var Nh=new R().setFromSphericalCoords(1,ct.degToRad(50),ct.degToRad(150)),Rr=$a.material.uniforms;Object.assign(Rr.turbidity,{value:2.2});Rr.rayleigh.value=1.9;Rr.mieCoefficient.value=.003;Rr.mieDirectionalG.value=.8;Rr.sunPosition.value.copy(Nh);var Dy=new cr(Fn);{let i=new no,e=new yr;e.scale.setScalar(1e3),e.material.uniforms.sunPosition.value.copy(Nh),["turbidity","rayleigh","mieCoefficient","mieDirectionalG"].forEach(t=>e.material.uniforms[t].value=Rr[t].value),i.add(e),i.add(new ke(new La(500,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),new rt({color:5595755,side:Nt}))),Bn.environment=Dy.fromScene(i,.02).texture}var Gd=new Na(14083839,6119784,.6);Bn.add(Gd);var bi=new gr(16773596,3);bi.position.copy(Nh).multiplyScalar(60);bi.castShadow=!0;bi.shadow.mapSize.set(2048,2048);Object.assign(bi.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:10,far:140});bi.shadow.bias=-4e-4;bi.shadow.normalBias=.03;Bn.add(bi,bi.target);var Wd=`
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<6;i++){s+=a*vn(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return s;}`,Xd="varying vec2 vW; varying vec3 vP; void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xz; vP=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }",Uh=new rn({transparent:!0,depthWrite:!1,side:Ct,uniforms:{uOff:{value:new xe},uCover:{value:.6},uDim:{value:1}},vertexShader:Xd,fragmentShader:`${Wd} uniform vec2 uOff; uniform float uCover; uniform float uDim; varying vec2 vW; varying vec3 vP;
   void main(){ float vD=length(vP-cameraPosition); vec2 p=(vW+uOff)/3800.; float n=fbm(p); float d=fbm(p*3.1+3.);
     float c=smoothstep(uCover,uCover+.22,n*.8+d*.3); float shade=mix(.9,1.18,smoothstep(.0,.6,d));
     float fade=1.-smoothstep(9000.,26000.,vD);
     gl_FragColor=vec4(vec3(shade)*vec3(1.,.99,.97)*uDim,c*fade*.96);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
   }`}),Er=new ke(new pn(6e4,6e4),Uh);Er.rotation.x=-Math.PI/2;Er.renderOrder=-2;Bn.add(Er);var Oh=new rn({uniforms:{uOff:{value:new xe},uHaze:{value:new Ne(12176864)},uDim:{value:1}},vertexShader:Xd,fragmentShader:`${Wd} uniform vec2 uOff; uniform vec3 uHaze; uniform float uDim; varying vec2 vW; varying vec3 vP;
   void main(){ float vD=length(vP-cameraPosition); vec2 p=(vW+uOff); float a=fbm(p/5200.), b=fbm(p/900.+7.), f=vn(p/240.);
     vec3 fields=mix(vec3(.36,.42,.25),vec3(.55,.52,.36),step(.55,f));
     vec3 col=mix(vec3(.30,.37,.22),fields,smoothstep(.35,.6,b));
     col=mix(col,vec3(.62,.58,.48),smoothstep(.62,.75,a)*.6);
     float haze=1.-exp(-vD/22000.);
     gl_FragColor=vec4(mix(col*.85,uHaze,haze)*uDim,1.);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
   }`}),Eo=new ke(new pn(9e4,9e4),Oh);Eo.rotation.x=-Math.PI/2;Eo.renderOrder=-3;Bn.add(Eo);var Ki=new at;{let i=new ke(new pn(3e3,45),new on({color:3816511,roughness:.92}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,Ki.add(i);let e=new rt({color:15329764});for(let t=-1480;t<1480;t+=50){let n=new ke(new pn(30,.9),e);n.rotation.x=-Math.PI/2,n.position.set(t,.02,0),Ki.add(n)}[-21,21].forEach(t=>{let n=new ke(new pn(3e3,.9),e);n.rotation.x=-Math.PI/2,n.position.set(0,.02,t),Ki.add(n)})}Bn.add(Ki);var Zt=new at;Bn.add(Zt);var ja=new at;Zt.add(ja);var bo=new at;Zt.add(bo);ja.rotation.y=-Math.PI/2;bo.rotation.y=-Math.PI/2;bo.position.set(14.17,.24,0);var zM=new R(0,0,0),Yd=new Wa;Yd.register(i=>(i.textureLoader=new dr(i.options.manager),{name:"img_textures"}));var Ny=document.getElementById("loading"),wh=document.getElementById("load-bar");function Nd(i,e,t){return new Promise((n,s)=>{let r=(c,l)=>s(new Error(e+" / "+c+": "+(l&&l.message||l)+" [b64 "+(i?i.length:"none")+"/"+t.b64+"]")),o;try{if(!i||i.length!==t.b64)throw new Error("data length mismatch");let c=atob(i);o=new Uint8Array(c.length);for(let l=0;l<c.length;l++)o[l]=c.charCodeAt(l)}catch(c){return r("base64",c)}let a;try{a=yd(o)}catch(c){return r("gunzip",c)}if(a.length!==t.raw)return r("size",a.length+"\u2260"+t.raw);try{Yd.parse(a.buffer,"",n,c=>r("parse",c))}catch(c){r("parse",c)}})}var wt=null,cn=null,Te=null,Tt=null,ni=null,Uy=window.CK_CTRL&&window.CK_CTRL.names||{},qd=i=>Uy[i]||i,Pt={},Kt={},Zd=new rt({color:16758087,transparent:!0,opacity:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ph=[],Lh=0;function Fh(){Ph.forEach(i=>i.parent&&i.parent.remove(i)),Ph=[]}function Kd(i){if(Fh(),!i)return;let e=[];i.traverse(t=>{t.isMesh&&t.visible&&!t.userData.overlay&&e.push(t)});for(let t of e){let n=new ke(t.geometry,Zd);n.renderOrder=10,n.userData.overlay=!0,n.raycast=()=>{},t.add(n),Ph.push(n)}Lh=0}function Oy(i){return i.userData.m0||(i.userData.m0=i.matrix.clone()),i.userData.m0}var Ud=new De,Od=new De,Fd=new De;function Ei(i,e,t){let n=Oy(i),s=i.parent,r=new De().copy(s.matrixWorld).invert().multiply(t.matrixWorld),o=new De;for(let a of e)if(a.type==="rot"){let c=new R(...a.a).applyMatrix4(r),h=new R(...a.a).add(new R(...a.d)).applyMatrix4(r).sub(c).normalize();Od.makeTranslation(c.x,c.y,c.z),Fd.makeRotationAxis(h,ct.degToRad(a.deg)),Ud.makeTranslation(-c.x,-c.y,-c.z),o=new De().multiplyMatrices(Od,Fd).multiply(Ud).multiply(o)}else{let c=new R(0,0,0).applyMatrix4(r),l=new R(...a.v).applyMatrix4(r).sub(c);o=new De().makeTranslation(l.x,l.y,l.z).multiply(o)}i.matrix.multiplyMatrices(o,n),i.matrix.decompose(i.position,i.quaternion,i.scale)}function _s(i,e){let t=Py[i];if(!t)return null;let n=[t[1][0]-t[0][0],t[1][1]-t[0][1],t[1][2]-t[0][2]];return{type:"rot",a:t[0],d:n,deg:e}}function Fy(i,e){if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,o]=i[t];return s+(o-s)*(e-n)/(r-n)}return i[i.length-1][1]}var vs={};function Bd(i,e){let t=[];i.updateWorldMatrix(!0,!0);let n=new De().copy(By().matrixWorld).invert();i.traverse(g=>{if(!g.isMesh)return;let x=g.geometry.attributes.position,m=new De().multiplyMatrices(n,g.matrixWorld),d=new R;for(let S=0;S<x.count;S+=1)d.fromBufferAttribute(x,S).applyMatrix4(m),t.push(d.clone())});let s=e,r=t.map(g=>Math.abs(g[s])),o=Math.min(...r),a=Math.max(...r),c=(a-o)*.08,l=t.filter(g=>Math.abs(g[s])<o+c),h=t.filter(g=>Math.abs(g[s])>a-c),u=g=>{let x=Math.min(...g.map(d=>d.z)),m=g.filter(d=>d.z<x+.06);return m.reduce((d,S)=>d.add(S),new R).multiplyScalar(1/m.length)},f=u(l),p=u(h);return{a:f.toArray(),d:p.clone().sub(f).normalize().toArray()}}var So=null;function By(){return So}var vn={};function zy(i,e=512,t=512){let n=document.createElement("canvas");n.width=e,n.height=t;let s=new Jn(n);return s.colorSpace=dt,s.anisotropy=4,s.flipY=!1,vn[i]={c:n,ctx:n.getContext("2d"),t:s,w:e,h:t},s}["pfd","nd","ewd","sd","mcdu","isis"].forEach(i=>zy(i));var I={thr:.62,n1:70,alt:3048,v:128.6,gamma:0,phi:0,theta:0,alpha:0,psi:0,flapIdx:0,flapPos:0,slatPos:0,gearDown:!1,gearPos:0,spoiler:0,n1e:[70,70],apAlt:3048,sdPage:"wheel",caution:"",stick:{x:0,y:0},stickVis:{x:0,y:0},thrust:0,vs:0,posX:0,posZ:0,onGround:!1},Ms=[{label:"0",slat:0,flap:0,cl0:.22,clmax:1.5,cd:0},{label:"1",slat:18,flap:10,cl0:.42,clmax:2,cd:.012},{label:"2",slat:22,flap:15,cl0:.6,clmax:2.25,cd:.022},{label:"3",slat:22,flap:20,cl0:.72,clmax:2.45,cd:.035},{label:"\u05DE\u05DC\u05D0",slat:27,flap:35,cl0:.95,clmax:2.75,cd:.062}],zd=64e3,kd=122.6,Ah=9.81,ky=120600,Hy=5e3,Vy=i=>1.225*Math.pow(Math.max(.05,1-22558e-9*i),4.2559);function Gy(i){let e=Ms[I.flapIdx],t=Te&&!Te.SYS.eng[0]&&!Te.SYS.eng[1]?0:21+80*I.thr;I.n1+=(t-I.n1)*(1-Math.exp(-i/(t>I.n1?1.6:1.1)));let n=Vy(I.alt),s=n/1.225,r=I.v/(340.3-.0039*I.alt),o=ky*Math.pow(Math.max(0,(I.n1-19)/82),2.15)*Math.pow(s,.75)*(1-.32*r);I.thrust=(Te?Te.SYS.eng.filter(Boolean).length:2)*Math.max(0,o);let a=6+14*Math.min(1,I.v/150);for(let d=0;d<2;d++){let S=!Te||Te.SYS.eng[d],_=S?I.n1:a;I.n1e[d]+=(_-I.n1e[d])*(1-Math.exp(-i/(S?I.n1e[d]<19?9:1.4:3.5)))}let c=.5*n*I.v*I.v,l=zd*Ah,h=l*Math.cos(I.gamma)/Math.max(c*kd,1)/Math.max(.35,Math.cos(I.phi)),u=ct.degToRad(I.stickVis.y*12);Te&&Te.SYS.ap&&(Math.abs(I.stickVis.y)>.05?I.apAlt=I.alt:u=ct.clamp((I.apAlt-I.alt)*.0012,-.08,.08)),h>e.clmax*.9&&(u=Math.min(u,I.gamma-.05)),I.onGround&&I.v<72&&(u=0),I.gamma+=(u-I.gamma)*(1-Math.exp(-i/1.8)),h=Math.min(h,e.clmax),I.alpha=Math.max(-.05,(h-e.cl0)/5.6);let p=.024+e.cd+I.gearPos*.02+I.spoiler*.03+.042*h*h,g=c*kd*p+(I.onGround?.02*l:0);I.v=Math.max(0,Math.min(I.v+((I.thrust-g)/zd-Ah*Math.sin(I.gamma))*i,255)),I.vs=I.v*Math.sin(I.gamma),I.alt+=I.vs*i,I.alt<=0?(I.alt=0,I.onGround=!0,I.gamma<0&&(I.gamma=0)):I.alt>.5&&(I.onGround=!1),I.alt=Math.min(I.alt,12500),I.phi+=I.stickVis.x*ct.degToRad(15)*i,Math.abs(I.stickVis.x)<.05&&(I.phi*=Math.exp(-i/5)),I.phi=ct.clamp(I.phi,-.58,.58),I.onGround&&(I.phi*=Math.exp(-i/.3)),I.theta=I.gamma+I.alpha,I.onGround&&(I.theta=Math.max(0,I.theta)*(I.v>70?1:0));let x=I.v>30?Ah*Math.tan(I.phi)/I.v:0;I.psi+=x*i,I.posX+=Math.cos(I.psi)*I.v*Math.cos(I.gamma)*i,I.posZ+=Math.sin(I.psi)*I.v*Math.cos(I.gamma)*i,I.flapPos+=(e.flap/35-I.flapPos)*(1-Math.exp(-i/1.6)),I.slatPos+=(e.slat/27-I.slatPos)*(1-Math.exp(-i/1.2));let m=I.gearDown?1:0;I.gearPos+=Math.sign(m-I.gearPos)*Math.min(Math.abs(m-I.gearPos),i/8)}function Wy(i){if(!wt)return;let e=I.stickVis.x,t=I.stickVis.y,n=(h,u,f=[])=>{let p=vs[h];p&&Ei(p.node,[{type:"rot",a:p.h.a,d:p.h.d,deg:u*p.sign},...f],So)};n("AileronL",e*20),n("AileronR",-e*20),n("ElevatorL",-t*25),n("ElevatorR",-t*25),n("Rudder",e*6);let s=I.flapPos,r=I.slatPos;["FlapL1","FlapL2","FlapR1","FlapR2"].forEach(h=>n(h,s*35,[{type:"tr",v:[0,-.12*s,.7*Math.min(1,s*1.6)]}])),["SlatL1","SlatL2","SlatR1","SlatR2"].forEach(h=>n(h,-r*22,[{type:"tr",v:[0,-.1*r,-.28*r]}]));for(let h=1;h<=5;h++){let u=h>=2?Math.max(0,-e)*25:0,f=h>=2?Math.max(0,e)*25:0;n("SpoilerL"+h,-(u+I.spoiler*40)),n("SpoilerR"+h,-(f+I.spoiler*40))}let o=I.gearPos,a=o>.001&&o<.999?1:0;wt.userData.doorMain=(wt.userData.doorMain??0)+(a-(wt.userData.doorMain??0))*Math.min(1,i*1.5);let c=h=>h.includes("position-norm")?o:h.includes("door")?wt.userData.doorMain:0,l=new Map;for(let h of Dd.anims){if(h.type!=="rotate"&&h.type!=="translate")continue;let u=Fy(h.interp,c(h.prop||""));for(let f of h.objs){let p=Pt[f]?f:f.replace(/\./g,"");if(Pt[p])if(l.has(p)||l.set(p,[]),h.type==="rotate")l.get(p).push({type:"rot",a:h.center,d:h.axis,deg:u});else{let g=Math.hypot(...h.axis);l.get(p).push({type:"tr",v:h.axis.map(x=>x/g*u)})}}}l.forEach((h,u)=>Ei(Pt[u],h,So));for(let h of Dd.anims)h.type==="locked-track"&&[...h.objs,h.slave].filter(Boolean).forEach(u=>{let f=Pt[u]||Pt[u.replace(/\./g,"")];f&&(f.visible=o>.985)})}function Xy(){if(!cn)return;let i=I.stickVis.x,e=I.stickVis.y;((r,o,a,c)=>{let l=Kt[r];if(!l)return;let h=[],u=_s(o,i*16*c),f=_s(a,-e*16);f&&h.push(f),u&&h.push(u),Ei(l,h,Mr)})("sidestick_1","sidestick_1.x.axis","sidestick_1.y.axis",1),["thr_l_body","thr_r_body","thr_l_button","thr_r_button"].forEach(r=>{let o=Kt[r];if(!o)return;let a=_s("trim.axis",-I.thr*45);a&&Ei(o,[a],Mr)});let n=Kt.FlapsLever,s=Kt.FlapsLever_low;if([n,s].forEach(r=>{if(!r)return;let o=_s("FlapsLever.axis",I.flapIdx*14);o&&Ei(r,[o],Mr)}),Kt.gear_lever){let r=_s("gear_lever.axis",I.gearDown?0:-50);r&&Ei(Kt.gear_lever,[r],Mr)}if(Kt.SpdBrk){let r=_s("SpdBrk.axis",I.spoiler*45);r&&Ei(Kt.SpdBrk,[r],Mr)}}var Mr=null;function Yy(){{let e=vn.pfd.ctx;e.fillStyle="#000",e.fillRect(0,0,512,512),e.save(),e.beginPath(),e.rect(110,80,290,300),e.clip(),e.translate(255,230),e.rotate(-I.phi);let t=ct.radToDeg(I.theta)*8;e.fillStyle="#2a8ad8",e.fillRect(-400,-800+t,800,800),e.fillStyle="#8a5222",e.fillRect(-400,t,800,800),e.strokeStyle="#fff",e.lineWidth=3,e.beginPath(),e.moveTo(-400,t),e.lineTo(400,t),e.stroke(),e.lineWidth=2,e.fillStyle="#fff",e.font="18px monospace",e.textAlign="center";for(let o=-30;o<=30;o+=2.5){if(!o)continue;let a=o%10===0?70:o%5===0?40:20;e.beginPath(),e.moveTo(-a/2,t-o*8),e.lineTo(a/2,t-o*8),e.stroke(),o%10===0&&(e.fillText(Math.abs(o),-a/2-22,t-o*8+6),e.fillText(Math.abs(o),a/2+22,t-o*8+6))}e.restore(),e.strokeStyle="#ffe000",e.lineWidth=7,e.beginPath(),e.moveTo(160,230),e.lineTo(225,230),e.lineTo(225,248),e.moveTo(350,230),e.lineTo(285,230),e.lineTo(285,248),e.stroke(),e.fillStyle="#ffe000",e.fillRect(249,224,12,12),e.fillStyle="#4a4f57",e.fillRect(8,80,82,300),e.fillRect(420,80,70,300),e.strokeStyle="#fff",e.lineWidth=2,e.fillStyle="#fff",e.font="22px monospace",e.textAlign="right";let n=I.v*1.944;for(let o=Math.floor(n/10)*10-30;o<=n+40;o+=10){let a=230-(o-n)*4;a<85||a>375||(e.beginPath(),e.moveTo(78,a),e.lineTo(90,a),e.stroke(),o%20===0&&e.fillText(o,74,a+8))}e.fillStyle="#ffe000",e.fillRect(70,226,40,8),e.textAlign="center",e.fillStyle="#fff";let s=I.alt*3.281;for(let o=Math.floor(s/100)*100-400;o<=s+500;o+=100){let a=230-(o-s)*.6;a<85||a>375||(e.beginPath(),e.moveTo(420,a),e.lineTo(432,a),e.stroke(),o%500===0&&e.fillText(Math.round(o/100),462,a+8))}e.fillStyle="#000",e.fillRect(424,212,80,36),e.strokeStyle="#ffe000",e.strokeRect(424,212,80,36),e.fillStyle="#18e05a",e.font="bold 24px monospace",e.fillText(Math.round(s/10)*10,464,239),e.fillStyle="#18e05a",e.font="22px monospace",e.fillText("SPEED",150,40),e.fillText("ALT",290,40),e.fillStyle="#fff",Te&&Te.SYS.ap&&e.fillText("AP1",440,40),Te&&Te.SYS.athr&&e.fillText("A/THR",440,66),e.fillStyle=(Te&&Te.SYS.ap,"#18e05a"),e.fillText((Te&&Te.SYS.ap,"ALT"),290,40);let r=(ct.radToDeg(I.psi)%360+360)%360;e.fillStyle="#4a4f57",e.fillRect(150,420,210,50),e.fillStyle="#fff",e.font="22px monospace";for(let o=Math.floor(r/10)*10-20;o<=r+20;o+=10){let a=255+(o-r)*4.5;a<155||a>355||e.fillText(((o+360)%360/10).toFixed(0),a,455)}e.fillStyle="#ffe000",e.fillRect(253,420,4,18),vn.pfd.t.needsUpdate=!0}{let e=vn.nd.ctx;e.fillStyle="#000",e.fillRect(0,0,512,512),e.save(),e.translate(256,380);let t=(ct.radToDeg(I.psi)%360+360)%360;e.strokeStyle="#fff",e.lineWidth=2.5,e.beginPath(),e.arc(0,0,300,Math.PI*1.17,Math.PI*1.83),e.stroke(),e.fillStyle="#fff",e.font="22px monospace",e.textAlign="center";for(let n=0;n<360;n+=5){let s=ct.degToRad(n-t)-Math.PI/2;if(Math.cos(s+Math.PI/2)<.5)continue;let r=n%10?10:20;e.beginPath(),e.moveTo(Math.cos(s)*300,Math.sin(s)*300),e.lineTo(Math.cos(s)*(300-r),Math.sin(s)*(300-r)),e.stroke(),n%30===0&&e.fillText(String(n/10),Math.cos(s)*262,Math.sin(s)*262+8)}e.strokeStyle="#18e05a",e.lineWidth=3,e.beginPath(),e.moveTo(0,0),e.lineTo(40,-150),e.lineTo(60,-300),e.stroke(),e.fillStyle="#18e05a",e.beginPath(),e.arc(40,-150,7,0,7),e.fill(),e.fillText("LLBG",100,-150),e.fillStyle="#ffe000",e.beginPath(),e.moveTo(0,-12),e.lineTo(-18,14),e.lineTo(18,14),e.fill(),e.restore(),e.fillStyle="#fff",e.font="22px monospace",e.textAlign="left",e.fillText("GS"+Math.round(I.v*1.944*Math.cos(I.gamma))+" TAS"+Math.round(I.v*1.944*1.15),12,30),vn.nd.t.needsUpdate=!0}{let e=vn.ewd.ctx;e.fillStyle="#000",e.fillRect(0,0,512,512),[130,382].forEach(s=>{e.save(),e.translate(s,120),e.strokeStyle="#fff",e.lineWidth=3,e.beginPath(),e.arc(0,0,80,Math.PI*.8,Math.PI*2.1),e.stroke(),e.strokeStyle="#ff3b30",e.beginPath(),e.arc(0,0,80,Math.PI*2.03,Math.PI*2.1),e.stroke();let r=I.n1e[s<256?0:1],o=Math.PI*.8+Math.PI*1.3*r/104;e.strokeStyle="#18e05a",e.lineWidth=5,e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(o)*74,Math.sin(o)*74),e.stroke(),e.fillStyle="#18e05a",e.font="bold 30px monospace",e.textAlign="center",e.fillText(r.toFixed(1),10,60),e.restore()}),e.fillStyle="#36c6ff",e.font="22px monospace",e.textAlign="center",e.fillText("N1 %",256,130);let t=Math.round(420+480*Math.pow(I.n1/100,2));e.fillStyle="#18e05a",e.font="bold 26px monospace",e.fillText(t,130,270),e.fillText(t+4,382,270),e.fillStyle="#36c6ff",e.font="22px monospace",e.fillText("EGT \xB0C",256,270);let n=Math.round(250+2900*Math.pow(I.n1/100,3));if(e.fillStyle="#18e05a",e.font="bold 26px monospace",e.fillText(n,130,330),e.fillText(n,382,330),e.fillStyle="#36c6ff",e.font="22px monospace",e.fillText("FF KG/H",256,330),e.fillStyle="#fff",e.textAlign="left",e.fillText("FLAP "+(I.flapIdx===4?"FULL":Ms[I.flapIdx].label),300,420),e.fillStyle="#18e05a",e.fillText(I.gearPos>.99?"LDG GEAR DN":I.gearPos<.01?"":"LDG GEAR ...",30,420),Te){let s=455,r=[];Te.SYS.eng.forEach((o,a)=>{o||r.push(["ENG "+(a+1)+" SHUT DOWN","#ffa000"])}),Te.SYS.apu&&r.push([Te.SYS.apuRun>=1?"APU AVAIL":"APU STARTING","#18e05a"]),Te.SYS.rat&&r.push(["RAT OUT","#18e05a"]),Object.values(Te.SYS.doors).some(Boolean)&&r.push(["DOOR OPEN","#ffa000"]),I.spoilerT&&r.push(["SPEED BRK","#18e05a"]),Te.SYS.ap&&r.push(["AP1 ON","#18e05a"]),r.slice(0,2).forEach(([o,a])=>{e.fillStyle=a,e.fillText(o,30,s),s+=28})}vn.ewd.t.needsUpdate=!0}{let e=vn.sd.ctx;e.fillStyle="#000",e.fillRect(0,0,512,512),Zy(e),vn.sd.t.needsUpdate=!0}{let e=vn.mcdu.ctx;e.fillStyle="#000",e.fillRect(0,0,512,512),e.font="28px monospace",e.textAlign="center",e.fillStyle="#fff",e.fillText("LLBG-LCLK",256,50),e.textAlign="left",[["FROM","#fff"],["LLBG    08L","#18e05a"],["DOREN","#18e05a"],["VELOX","#18e05a"],["LCLK    22","#18e05a"],["DEST  UTC  DIST EFOB","#fff"],["LCLK  0412  198  4.1","#fff"]].forEach(([n,s],r)=>{e.fillStyle=s,e.fillText(n,20,110+r*54)}),vn.mcdu.t.needsUpdate=!0}{let e=vn.isis.ctx;e.fillStyle="#000",e.fillRect(0,0,512,512),e.save(),e.translate(256,256),e.rotate(-I.phi);let t=ct.radToDeg(I.theta)*8;e.fillStyle="#2a8ad8",e.fillRect(-400,-800+t,800,800),e.fillStyle="#8a5222",e.fillRect(-400,t,800,800),e.restore(),e.fillStyle="#ffe000",e.fillRect(200,250,112,10),e.fillStyle="#fff",e.font="bold 30px monospace",e.textAlign="center",e.fillText(Math.round(I.v*1.944),60,270),e.fillText(Math.round(I.alt*3.281/10)*10,450,270),vn.isis.t.needsUpdate=!0}}function qy(i){return new rt({map:i,toneMapped:!1})}(async()=>{try{wh.style.width="15%";let[i,e]=await Promise.all([Nd(window.GLB_EXT,"exterior",window.GLB_META.ext),Nd(window.GLB_CK,"cockpit",window.GLB_META.ck)]);wh.style.width="85%",wt=i.scene,So=wt,wt.traverse(n=>{n.name&&(Pt[n.name]=n),n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.userData.ext=!0,n.material&&(n.material.envMapIntensity=.8))}),ja.add(wt);{let n=Zt.rotation.clone();Zt.rotation.set(0,0,0),Zt.updateMatrixWorld(!0);let s=new Ut().setFromObject(Pt.Wings||wt).getCenter(new R);ja.position.set(-s.x,-s.y-.4,0),Zt.rotation.copy(n)}wt.updateMatrixWorld(!0),wt.traverse(n=>{n.matrixAutoUpdate=!0});for(let n of["AileronL","AileronR","ElevatorL","ElevatorR","FlapL1","FlapL2","FlapR1","FlapR2","SlatL1","SlatL2","SlatR1","SlatR2",...[1,2,3,4,5].flatMap(s=>["SpoilerL"+s,"SpoilerR"+s])])Pt[n]&&(vs[n]={node:Pt[n],h:Bd(Pt[n],"x"),sign:(n.includes("L")&&!n.startsWith("Slat"),1)});for(let[n,s]of Object.entries(vs)){let o=/L\d?$/.test(n)?-1:1;s.h.d[0]>0!=o>0&&(s.h.d=s.h.d.map(a=>-a)),s.sign=1}Pt.Rudder&&(vs.Rudder={node:Pt.Rudder,h:Bd(Pt.Rudder,"y"),sign:1}),["FanSpinningCFM56L","FanSpinningCFM56R"].forEach(n=>{let s=Pt[n];if(!s)return;let r=new Ut;s.updateWorldMatrix(!0,!0);let o=new De().copy(wt.matrixWorld).invert();s.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),r.union(a.geometry.boundingBox.clone().applyMatrix4(new De().multiplyMatrices(o,a.matrixWorld))))}),vs[n]={node:s,c:r.getCenter(new R).toArray()}}),cn=e.scene,Mr=cn,bo.add(cn),cn.traverse(n=>{n.name&&(Kt[n.name]=n),n.isMesh&&(n.userData.ck=!0,n.receiveShadow=!1,n.castShadow=!1)});let t={scr_PFD1:"pfd",scr_PFD2:"pfd",scr_ND1:"nd",scr_ND2:"nd",scr_EWD:"ewd",scr_SD:"sd",scr_MCDU_L:"mcdu",scr_MCDU_R:"mcdu",scr_ISIS:"isis",PFD1:"pfd",PFD2:"pfd",ND1:"nd",ND2:"nd",UECAM:"ewd",LECAM:"sd","mcdu1.screen":"mcdu","mcdu2.screen":"mcdu",MCDU1:"mcdu",MCDU2:"mcdu",IESI:"isis"};for(let[n,s]of Object.entries(t)){let r=Kt[n];r&&r.traverse(o=>{o.isMesh&&(o.material=qy(vn[s].t))})}Object.keys(Kt).filter(n=>/^hud/.test(n)).forEach(n=>Kt[n].visible=!1),["dcduScreenL","dcduScreenR"].forEach(n=>Kt[n]&&Kt[n].traverse(s=>{s.isMesh&&(s.material=new rt({color:658704}))})),cn.updateMatrixWorld(!0),window.__ckBox=new Ut().setFromObject(cn),wh.style.width="100%",Ny.hidden=!0,Tr("cockpit",!0);{let n=Zt.rotation.clone();Zt.rotation.set(0,0,0),Zt.updateMatrixWorld(!0),Te=Md({world:Zt,ext:wt,extNodes:Pt,extModel:So,poseNode:Ei,S:I,renderer:Fn,hemi:Gd,sunLight:bi,sky:$a,scene:Bn,groundMat:Oh,cloudMat:Uh,surf:vs});try{ni=Sd({world:Zt,extNodes:Pt,S:I}),window.__cab=ni}catch(s){console.error("cabin",s)}Zt.rotation.copy(n),window.__sys=Te}try{Tt=Ed({table:window.CK_CTRL,ckNodes:Kt,ckModel:cn,poseNode:Ei,axisOp:_s,skip:/^(gear_lever|FlapsLever|SpdBrk|thr_|sidestick|trim_1|tiller|rev_)/}),window.__ctl=Tt}catch(n){console.error("controls",n)}window.__ready=!0}catch(i){console.error(i),window.__fail&&window.__fail("\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05D3\u05D2\u05DE\u05D9 \u05D4\u05DE\u05D8\u05D5\u05E1",String(i&&i.message||i))}})();function Zy(i){let e="#18e05a",t="#ffa000",n="#fff",s="#36c6ff",r="#ff3b30",o=(h,u,f,p=n,g="22px",x="center")=>{i.fillStyle=p,i.font=g+" monospace",i.textAlign=x,i.fillText(h,u,f)},a=Te?Te.SYS:{eng:[!0,!0],doors:{},apuRun:0},c=I.sdPage,l={wheel:"WHEEL",eng:"ENGINE",apu:"APU",bleed:"BLEED",cond:"COND",press:"CAB PRESS",door:"DOOR/OXY",elec:"ELEC",hyd:"HYD",fctl:"F/CTL",fuel:"FUEL"}[c]||"WHEEL";if(o(l,256,44,n,"26px"),i.strokeStyle=n,i.lineWidth=2,i.beginPath(),i.moveTo(256-l.length*9,52),i.lineTo(256+l.length*9,52),i.stroke(),c==="eng")[0,1].forEach(h=>{let u=h?382:130,f=a.eng[h];o("ENG "+(h+1),u,100),o("OIL PSI",u,150,s),o(f?Math.round(30+I.n1e[h]*.4):0,u,180,f?e:t,"bold 26px"),o("OIL \xB0C",u,230,s),o(f?Math.round(70+I.n1e[h]*.3):25,u,260,e,"bold 26px"),o("VIB N1",u,310,s),o((f?.6+I.n1e[h]/200:0).toFixed(1),u,340,e,"bold 26px"),o("N2 %",u,390,s),o(f?(55+I.n1e[h]*.4).toFixed(1):(I.n1e[h]*.5).toFixed(1),u,420,f?e:t,"bold 26px")});else if(c==="apu"){let h=Math.round((a.apuRun||0)*100);o("APU",256,110),o(a.apuRun>=1?"AVAIL":a.apu?"STARTING":"OFF",256,150,a.apuRun>=1?e:n,"bold 26px"),o("N %",140,240,s),o(h,140,280,e,"bold 30px"),o("EGT \xB0C",372,240,s),o(Math.round(25+(a.apuRun||0)*560),372,280,e,"bold 30px"),o("FLAP "+(a.apu?"OPEN":"CLOSED"),256,360,a.apu?e:n),o("GEN "+(a.apuRun>=1?"115 V  400 HZ":"0 V"),256,410,a.apuRun>=1?e:t)}else if(c==="door"){let h=[["DoorL1","CABIN L1",120,120],["DoorR1","CABIN R1",392,120],["Cargo1","FWD CARGO",392,220],["Cargo2","AFT CARGO",392,320],["Cargo3","BULK",392,380],["DoorL4","CABIN L4",120,420],["DoorR4","CABIN R4",392,440]];i.strokeStyle=n,i.lineWidth=2,i.beginPath(),i.roundRect(206,80,100,400,50),i.stroke(),h.forEach(([u,f,p,g])=>{let x=a.doors[u];i.fillStyle=x?t:e,i.fillRect(u.startsWith("Door")?p<256?200:300:296,g-18,12,30),o(f,p,g+6,x?t:e,"20px")}),o("CKPT OXY 1850 PSI",256,500,e,"20px")}else if(c==="elec")[0,1].forEach(h=>{let u=h?400:112,f=a.eng[h];i.strokeStyle=f?e:t,i.strokeRect(u-60,300,120,90),o("GEN "+(h+1),u,330,f?n:t),o(f?"115 V":"0 V",u,360,f?e:t),o(f?"400 HZ":"",u,385,e)}),i.strokeStyle=a.apuRun>=1?e:"#666",i.strokeRect(196,300,120,90),o("APU GEN",256,330,a.apuRun>=1?n:"#888"),o(a.apuRun>=1?"115 V":"-",256,360,e),["AC 1","AC ESS","AC 2"].forEach((h,u)=>{let f=u===1||a.eng[u?1:0]||a.apuRun>=1;o(h,112+u*144,230,f?e:t,"bold 24px")}),["BAT 1  28 V","BAT 2  28 V"].forEach((h,u)=>o(h,140+u*232,110,e));else if(c==="hyd")[["GREEN",a.eng[0]||a.eng[1]?3e3:0,112],["BLUE",a.eng[0]||a.eng[1]?3e3:a.rat?2500:0,256],["YELLOW",a.eng[1]||a.eng[0]?3e3:0,400]].forEach(([h,u,f])=>{o(h,f,110,u>1450?n:t,"bold 24px"),o(u,f,160,u>1450?e:t,"bold 30px"),i.strokeStyle=u>1450?e:t,i.lineWidth=4,i.beginPath(),i.moveTo(f,180),i.lineTo(f,420),i.stroke()}),a.rat&&o("RAT",256,460,e),o(a.eng[0]&&a.eng[1]?"":"PTU",256,300,e);else if(c==="fuel")o("FOB : 6400 KG",256,110,e,"bold 24px"),[["L",1700,100],["CTR",3e3,256],["R",1700,412]].forEach(([u,f,p])=>{i.strokeStyle=n,i.strokeRect(p-60,200,120,70),o(f,p,245,e,"bold 26px"),o(u,p,300,n)}),[0,1].forEach(u=>o("ENG "+(u+1)+(a.eng[u]?"  "+Math.round(250+2900*Math.pow(I.n1e[u]/100,3))+" KG/H":"  SHUT"),u?380:132,400,a.eng[u]?e:t,"20px"));else if(c==="fctl"){let h=I.stickVis.x*20,u=-I.stickVis.y*25;o("AIL",256,110),[[-1,100],[1,412]].forEach(([f,p])=>{i.fillStyle=e,i.beginPath(),i.arc(p,180+f*h*3,10,0,7),i.fill(),i.strokeStyle=n,i.beginPath(),i.moveTo(p,120),i.lineTo(p,240),i.stroke()}),o("SPD BRK",256,200,n,"20px");for(let f=0;f<5;f++){let p=10+I.spoiler*30+(I.stickVis.x>.1?15:0);i.fillStyle=e,i.fillRect(150+f*46,260-p,14,p)}o("ELEV",256,360),[100,412].forEach(f=>{i.fillStyle=e,i.beginPath(),i.arc(f,420-u*3,10,0,7),i.fill(),i.strokeStyle=n,i.beginPath(),i.moveTo(f,360),i.lineTo(f,480),i.stroke()}),o("RUD",256,470)}else if(c==="press"||c==="cond"||c==="bleed"){let h=Math.round(Math.min(8e3,I.alt*3.281*.22));o("CAB ALT  "+h+" FT",256,140,e,"bold 24px"),o("\u0394P  "+Math.min(8.1,I.alt*3.281/4500).toFixed(1)+" PSI",256,200,e,"bold 24px"),o("CKPT 22\xB0C   FWD 23\xB0C   AFT 23\xB0C",256,290,e,"20px"),[0,1].forEach(u=>o("PACK "+(u+1)+(a.eng[u]||a.apuRun>=1?"  ON":"  OFF"),u?382:130,380,a.eng[u]||a.apuRun>=1?e:t)),o("BLEED "+(a.eng[0]?"ENG1 ":"")+(a.eng[1]?"ENG2 ":"")+(a.apuRun>=1?"APU":""),256,440,e,"20px")}else{let h=I.gearPos>.99?e:I.gearPos<.01?"#3a3f46":r;[[256,150],[130,330],[382,330]].forEach(([u,f])=>{i.strokeStyle=h,i.lineWidth=5,i.beginPath(),i.moveTo(u-34,f-26),i.lineTo(u+34,f-26),i.lineTo(u,f+26),i.closePath(),i.stroke()}),o(I.gearPos>.99?"PARK BRK "+(a.park?"ON":"OFF"):"",256,440,a.park?e:"#666")}o("TAT "+Math.round(15-I.alt*.0065+8)+"\xB0C",90,500,e,"20px"),o("GW 64000 KG",400,500,e,"20px")}var St="cockpit",On=new qa(Et,Ft);On.enableDamping=!0;On.dampingFactor=.08;On.minDistance=3;On.maxDistance=140;var Ky={forward:{eye:[-.55,.62,.36],yaw:-4,pitch:-9,fov:66},overhead:{eye:[-.42,.58,.42],yaw:22,pitch:58,fov:62},lights:{eye:[-.3,.6,.25],yaw:12,pitch:38,fov:48},glare:{eye:[-.25,.62,.15],yaw:24,pitch:-16,fov:46},main:{eye:[-.3,.62,.3],yaw:3,pitch:-23,fov:56},pedestal:{eye:[-.2,.66,.42],yaw:26,pitch:-52,fov:56},side:{eye:[-.55,.62,.36],yaw:-30,pitch:-40,fov:62}},tt={yaw:0,pitch:-6,fov:62,eye:new R(-.55,.62,.36),anim:null},Bh=new xt;bo.add(Bh);var zh=new at;zh.rotation.y=-Math.PI/2;Zt.add(zh);var kh=new xt;zh.add(kh);var Yi=(i,e,t)=>[t,e,-i],jy={aisleF:{eye:Yi(9.6,1.28,0),yaw:180,pitch:-7,fov:72},aisleB:{eye:Yi(-10.2,1.28,0),yaw:0,pitch:-7,fov:72},door:{eye:Yi(12.05,1.28,.45),yaw:-90,pitch:-14,fov:70},galley:{eye:Yi(12.35,1.28,-.2),yaw:150,pitch:-14,fov:70},seat:{eye:Yi(4.95,.95,-.95),yaw:-75,pitch:-4,fov:62},exit:{eye:Yi(1.9,1.15,-.4),yaw:-125,pitch:-12,fov:70},aft:{eye:Yi(-9.4,1.28,0),yaw:180,pitch:-10,fov:72},up:{eye:Yi(4,1,0),yaw:180,pitch:32,fov:75}};function Qa(i,e){let t=jy[i];if(!t)return;let n={yaw:t.yaw,pitch:t.pitch,fov:t.fov,eye:new R(...t.eye)};tt.anim={from:{yaw:tt.yaw,pitch:tt.pitch,fov:tt.fov,eye:tt.eye.clone()},to:n,k:e?1:0},document.querySelectorAll("[data-cab]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.cab===i))}function jd(i){tt.anim=null;let e=ct.clamp(tt.eye.z-i,-12.2,10.6);tt.eye.set(Math.abs(tt.eye.x)>.6?0:tt.eye.x,1.28,Math.min(e,12.3))}function Jy(){let i=s=>Tt&&Tt.get(s),e=i("SeatBeltSwtch"),t=i("NoSmokingSwtch"),n=i("EmerExtLtSwtch");return{belts:e?e.s>0:!1,smoke:t?t.s>0:!0,emer:Te&&Te.nightK()>.5||n&&n.s>=1,masks:!!(Te&&Te.SYS.masks)}}function ec(i,e){let t=Ky[i];if(!t)return;let n={yaw:t.yaw,pitch:t.pitch,fov:t.fov,eye:new R(...t.eye)};tt.anim={from:{yaw:tt.yaw,pitch:tt.pitch,fov:tt.fov,eye:tt.eye.clone()},to:n,k:e?1:0},document.querySelectorAll("[data-eye]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.eye===i))}var $y={overview:{pos:[24,10,32],tgt:[-2,0,0]},front:{pos:[30,1,-14],tgt:[6,0,0]},under:{pos:[8,-12,20],tgt:[-1,-2,0]},wing:{pos:[-11,8,19],tgt:[-1,-.5,8.5]},tail:{pos:[-34,7,16],tgt:[-17,2,0]},engine:{pos:[15,-1,13],tgt:[4.5,-1.8,5.6]},cargo:{pos:[6,-2,16],tgt:[2,-1.8,1]},rat:{pos:[9,-7,-12],tgt:[1,-2.4,-1.5]},apu:{pos:[-28,-5,-9],tgt:[-17,-.8,0]}},Tn=null;function br(i,e){let t=$y[i];if(!t)return;let n=new R(...t.pos),s=new R(...t.tgt);Zt.localToWorld(n),Zt.localToWorld(s),Et.aspect<.8&&n.sub(s).multiplyScalar(i==="overview"?1.9:1.3).add(s),Tn={p0:Et.position.clone(),t0:On.target.clone(),p1:n,t1:s,k:e?.999:0},document.querySelectorAll("[data-ext]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.ext===i))}function Tr(i,e){St=i,document.body.dataset.mode=i,document.querySelectorAll("[data-mode]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.mode===i)),Ja(),i==="cabin"?(wt&&(wt.visible=!0),cn&&(cn.visible=!1),On.enabled=!1,kh.add(Et),Et.position.set(0,0,0),Et.quaternion.identity(),Qa("aisleF",e)):i==="cockpit"?(wt&&(wt.visible=!0),cn&&(cn.visible=!0),Pt.Windsheild&&(Pt.Windsheild.visible=!1),On.enabled=!1,Bh.add(Et),Et.position.set(0,0,0),Et.quaternion.identity(),ec("forward",e)):(cn&&(cn.visible=!0),wt&&(wt.visible=!0),Pt.Windsheild&&(Pt.Windsheild.visible=!0),Bn.add(Et),On.enabled=!0,Et.fov=window.innerWidth<640?50:38,Et.updateProjectionMatrix(),Et.position.set(26,12,34),On.target.set(0,0,0),br("overview",!0))}var Qn=null;Ft.addEventListener("pointerdown",i=>{Za=[i.clientX,i.clientY],!(St!=="cockpit"&&St!=="cabin")&&(Qn={x:i.clientX,y:i.clientY,yaw:tt.yaw,pitch:tt.pitch,id:i.pointerId},tt.anim=null)});Ft.addEventListener("pointermove",i=>{if((St==="cockpit"||St==="cabin")&&Qn&&i.pointerId===Qn.id){let e=tt.fov/Ft.clientHeight;tt.yaw=Qn.yaw+(i.clientX-Qn.x)*e,tt.pitch=ct.clamp(Qn.pitch+(i.clientY-Qn.y)*e,-75,80)}(St==="cockpit"||St==="cabin")&&!Qn&&eM(i)});window.addEventListener("pointerup",()=>{Qn=null});Ft.addEventListener("wheel",i=>{St!=="cockpit"&&St!=="cabin"||(i.preventDefault(),tt.fov=ct.clamp(tt.fov*(1+i.deltaY*.0012),18,80),tt.anim=null)},{passive:!1});var Si=new Map,Mo=null;Ft.addEventListener("pointerdown",i=>{if(i.pointerType==="touch"&&Si.set(i.pointerId,[i.clientX,i.clientY]),Si.size===2){let[e,t]=[...Si.values()];Mo={d:Math.hypot(e[0]-t[0],e[1]-t[1]),fov:tt.fov},Qn=null}});Ft.addEventListener("pointermove",i=>{if(Si.has(i.pointerId)&&(Si.set(i.pointerId,[i.clientX,i.clientY]),Si.size===2&&Mo&&St!=="exterior")){let[e,t]=[...Si.values()];tt.fov=ct.clamp(Mo.fov*Mo.d/Math.max(20,Math.hypot(e[0]-t[0],e[1]-t[1])),18,80)}});var Jd=i=>{Si.delete(i.pointerId),Si.size<2&&(Mo=null)};Ft.addEventListener("pointerup",Jd);Ft.addEventListener("pointercancel",Jd);function Qy(i){if(tt.anim){let s=tt.anim;s.k=Math.min(1,s.k+i/1.1);let r=s.k<.5?4*s.k**3:1-Math.pow(-2*s.k+2,3)/2;tt.yaw=s.from.yaw+(s.to.yaw-s.from.yaw)*r,tt.pitch=s.from.pitch+(s.to.pitch-s.from.pitch)*r,tt.fov=s.from.fov+(s.to.fov-s.from.fov)*r,tt.eye.lerpVectors(s.from.eye,s.to.eye,r),s.k>=1&&(tt.anim=null)}let e=St==="cabin"?kh:Bh;e.position.copy(tt.eye);let t=Et.aspect<.8;e.rotation.set(ct.degToRad(tt.pitch+(t?-11:0)),ct.degToRad(-tt.yaw),0,"YXZ");let n=Et.aspect<.8?Math.min(90,tt.fov*1.35):tt.fov;Math.abs(Et.fov-n)>.01&&(Et.fov=n,Et.updateProjectionMatrix())}var Zi=new Fa,wr=new xe,Za=null,It=document.getElementById("info");function Hh(i){let e=i;for(;e&&e!==cn;){let t=Ly.lookup(qd(e.name));if(t)return{node:e,info:t};e=e.parent}return null}function $d(i){let e=i;for(;e&&e!==wt;){let t=Iy.lookup(e.name);if(t)return{node:e,info:t};e=e.parent}return null}function Ka(i){let e=Ft.getBoundingClientRect();wr.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Zi.setFromCamera(wr,Et),Zi.near=.05;let t=Zi.intersectObjects([ni.root,wt],!0).filter(n=>!n.object.userData.overlay&&ep(n.object));Zi.near=0;for(let n of t){if(n.object.userData.cab)return n;if(n.object.isMesh)return null}return null}function Qd(i){let e=Ft.getBoundingClientRect();wr.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Zi.setFromCamera(wr,Et);let t=St==="cockpit"?cn:wt;if(!t)return null;let n=Zi.intersectObject(t,!0).filter(s=>!s.object.userData.overlay&&ep(s.object));for(let s of n){let r=St==="cockpit"?Hh(s.object):$d(s.object);if(r)return r;if(St==="cockpit")return null}return null}function ep(i){for(;i;){if(!i.visible)return!1;i=i.parent}return!0}var Hd=0;function eM(i){let e=performance.now();if(e-Hd<60)return;Hd=e;let t=St==="cabin"?ni&&Ka(i)&&Ka(i).object.userData.cab.type!=="lining"&&Ka(i).object.userData.cab.type!=="carpet":Qd(i);Ft.style.cursor=t?"pointer":"grab"}Ft.addEventListener("pointerup",i=>{if(!Za||Math.hypot(i.clientX-Za[0],i.clientY-Za[1])>6)return;if(St==="cabin"){let t=ni&&Ka(i);if(!t){Ja();return}let n=ni.click(t,Te.SYS);if(!n)return;ip(t,n);return}let e=Qd(i);if(e){let t=St==="cockpit"?np(e.node.name):null;tc(e,t)}else Ja()});var tM=[[/^NavLogoLtSwtch/,{k:["nav","logo"],on:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D5\u05D4\u05DC\u05D5\u05D2\u05D5 \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD",off:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D5\u05D4\u05DC\u05D5\u05D2\u05D5 \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD",view:"tail"}],[/^StrobeLtSwtch/,{k:["strobe"],on:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05D4\u05D1\u05D6\u05E7 \u05DE\u05D4\u05D1\u05D4\u05D1\u05D9\u05DD",off:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05D4\u05D1\u05D6\u05E7 \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD",view:"overview"}],[/^BeaconLtSwtch/,{k:["beacon"],on:"\u05D0\u05D5\u05E8 \u05D4\u05D0\u05D6\u05D4\u05E8\u05D4 \u05D4\u05D0\u05D3\u05D5\u05DD \u05DE\u05D4\u05D1\u05D4\u05D1",off:"\u05D0\u05D5\u05E8 \u05D4\u05D0\u05D6\u05D4\u05E8\u05D4 \u05DB\u05D1\u05D5\u05D9",view:"overview"}],[/^WingLtSwtch/,{k:["wing"],on:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05DB\u05E0\u05E4\u05D9\u05D9\u05DD \u05D3\u05D5\u05DC\u05E7\u05EA",off:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05DB\u05E0\u05E4\u05D9\u05D9\u05DD \u05DB\u05D1\u05D5\u05D9\u05D4",view:"wing"}],[/^LandingLt/,{k:["land"],on:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E0\u05D7\u05D9\u05EA\u05D4 \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD",off:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E0\u05D7\u05D9\u05EA\u05D4 \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD",view:"front"}],[/^NoseLtSwtch/,{k:["nose"],on:"\u05D0\u05D5\u05E8 \u05D4\u05D0\u05E3 \u05D3\u05D5\u05DC\u05E7 (\u05E0\u05E8\u05D0\u05D4 \u05DB\u05E9\u05DB\u05DF \u05D4\u05E0\u05E1\u05D4 \u05DC\u05DE\u05D8\u05D4)",off:"\u05D0\u05D5\u05E8 \u05D4\u05D0\u05E3 \u05DB\u05D1\u05D5\u05D9",view:"front"}],[/^TurnoffLtSwtch/,{k:["turnoff"],on:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD (\u05E0\u05E8\u05D0\u05D9\u05DD \u05DB\u05E9\u05DB\u05DF \u05D4\u05E0\u05E1\u05D4 \u05DC\u05DE\u05D8\u05D4)",off:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD",view:"front"}],[/^APUMasterBtn/,{k:["apu"],on:"\u05DE\u05E0\u05D5\u05E2 \u05D4\u05E2\u05D6\u05E8 \u05DE\u05D5\u05E4\u05E2\u05DC: \u05E4\u05EA\u05D7 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E9\u05DC\u05D5 \u05D1\u05D6\u05E0\u05D1 \u05E0\u05E4\u05EA\u05D7",off:"\u05DE\u05E0\u05D5\u05E2 \u05D4\u05E2\u05D6\u05E8 \u05DB\u05D1\u05D5\u05D9",view:"apu"}],[/^APUStartBtn/,{k:["apuStart"],on:"\u05DE\u05E0\u05D5\u05E2 \u05D4\u05E2\u05D6\u05E8 \u05DE\u05D5\u05EA\u05E0\u05E2",off:"\u05D4\u05EA\u05E0\u05E2\u05EA \u05DE\u05E0\u05D5\u05E2 \u05D4\u05E2\u05D6\u05E8 \u05D1\u05D5\u05D8\u05DC\u05D4",view:"apu"}],[/^RATMan/,{k:["rat"],on:"\u05D8\u05D5\u05E8\u05D1\u05D9\u05E0\u05EA \u05D4\u05E8\u05D5\u05D7 \u05D9\u05E6\u05D0\u05D4 \u05DE\u05D1\u05D8\u05DF \u05D4\u05DE\u05D8\u05D5\u05E1",off:"\u05D8\u05D5\u05E8\u05D1\u05D9\u05E0\u05EA \u05D4\u05E8\u05D5\u05D7 \u05D4\u05D5\u05D7\u05D6\u05E8\u05D4 (\u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3, \u05D1\u05DE\u05D8\u05D5\u05E1 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05E8\u05E7 \u05E2\u05DC \u05D4\u05E7\u05E8\u05E7\u05E2)",view:"rat"}],[/^(eng1firebtnbase|firebtn1|eng1\.firebtnbase)$/,{eng:0,inv:!0,on:"\u05D9\u05D3\u05D9\u05EA \u05D4\u05D0\u05E9 \u05E9\u05DC \u05DE\u05E0\u05D5\u05E2 1 \u05E0\u05DE\u05E9\u05DB\u05D4: \u05D4\u05D3\u05DC\u05E7 \u05E0\u05E1\u05D2\u05E8 \u05D5\u05D4\u05DE\u05E0\u05D5\u05E2 \u05DB\u05D1\u05D4",off:"\u05D9\u05D3\u05D9\u05EA \u05D4\u05D0\u05E9 \u05D4\u05D5\u05D7\u05D6\u05E8\u05D4",view:"engine"}],[/^(eng2firebtnbase|firebtn2|eng2\.firebtnbase)$/,{eng:1,inv:!0,on:"\u05D9\u05D3\u05D9\u05EA \u05D4\u05D0\u05E9 \u05E9\u05DC \u05DE\u05E0\u05D5\u05E2 2 \u05E0\u05DE\u05E9\u05DB\u05D4: \u05D4\u05D3\u05DC\u05E7 \u05E0\u05E1\u05D2\u05E8 \u05D5\u05D4\u05DE\u05E0\u05D5\u05E2 \u05DB\u05D1\u05D4",off:"\u05D9\u05D3\u05D9\u05EA \u05D4\u05D0\u05E9 \u05D4\u05D5\u05D7\u05D6\u05E8\u05D4",view:"wing"}],[/^SeatBeltSwtch$/,{k:["belts"],on:'\u05E9\u05DC\u05D8\u05D9 "\u05D4\u05D3\u05E7\u05D5 \u05D7\u05D2\u05D5\u05E8\u05D5\u05EA" \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD \u05D1\u05DB\u05DC \u05EA\u05D0 \u05D4\u05E0\u05D5\u05E1\u05E2\u05D9\u05DD',off:"\u05E9\u05DC\u05D8\u05D9 \u05D4\u05D7\u05D2\u05D5\u05E8\u05D5\u05EA \u05D1\u05EA\u05D0 \u05D4\u05E0\u05D5\u05E1\u05E2\u05D9\u05DD \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD",view:"cabin"}],[/^NoSmokingSwtch$/,{k:["nosmoke"],on:'\u05E9\u05DC\u05D8\u05D9 "\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E2\u05E9\u05DF" \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD \u05D1\u05EA\u05D0 \u05D4\u05E0\u05D5\u05E1\u05E2\u05D9\u05DD',off:'\u05E9\u05DC\u05D8\u05D9 "\u05D0\u05E1\u05D5\u05E8 \u05DC\u05E2\u05E9\u05DF" \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD',view:"cabin"}],[/^MaskManOn(Btn|Guard)$/,{fn:()=>Te.SYS.masks=!Te.SYS.masks,on:"\u05DE\u05E1\u05DB\u05D5\u05EA \u05D4\u05D7\u05DE\u05E6\u05DF \u05E0\u05E4\u05DC\u05D5 \u05DE\u05E2\u05DC \u05DB\u05DC \u05D4\u05DE\u05D5\u05E9\u05D1\u05D9\u05DD \u05D1\u05EA\u05D0 \u05D4\u05E0\u05D5\u05E1\u05E2\u05D9\u05DD",off:"\u05D4\u05DE\u05E1\u05DB\u05D5\u05EA \u05D4\u05D5\u05D7\u05D6\u05E8\u05D5 (\u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3)",view:"cabin"}],[/^EmerExtLtSwtch$/,{k:["emerLt"],on:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05D7\u05D9\u05E8\u05D5\u05DD \u05D5\u05E4\u05E1\u05D9 \u05D4\u05D0\u05D5\u05E8 \u05D1\u05E8\u05E6\u05E4\u05D4 \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD",off:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05D7\u05D9\u05E8\u05D5\u05DD \u05DB\u05D1\u05D5\u05D9\u05D4",view:"cabin"}],[/^ap[12]$/,{on:"\u05D4\u05D8\u05D9\u05D9\u05E1 \u05D4\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05DE\u05D7\u05D5\u05D1\u05E8: \u05D4\u05DE\u05D8\u05D5\u05E1 \u05E9\u05D5\u05DE\u05E8 \u05E2\u05DC \u05D4\u05D2\u05D5\u05D1\u05D4. \u05D4\u05D6\u05D6\u05EA \u05D4\u05E1\u05D8\u05D9\u05E7 \u05DE\u05E9\u05E0\u05D4 \u05D0\u05EA \u05D4\u05D2\u05D5\u05D1\u05D4 \u05E9\u05E0\u05E9\u05DE\u05E8",off:"\u05D4\u05D8\u05D9\u05D9\u05E1 \u05D4\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05DE\u05E0\u05D5\u05EA\u05E7"}],[/^a-thr$/,{k:["athr"],on:"\u05D4\u05DE\u05E6\u05E2\u05E8\u05EA \u05D4\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DE\u05D7\u05D5\u05D1\u05E8\u05EA",off:"\u05D4\u05DE\u05E6\u05E2\u05E8\u05EA \u05D4\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DE\u05E0\u05D5\u05EA\u05E7\u05EA"}],[/^ParkBrk$/,{k:["park"],on:"\u05D1\u05DC\u05DD \u05D4\u05D7\u05E0\u05D9\u05D4 \u05DE\u05D5\u05E4\u05E2\u05DC",off:"\u05D1\u05DC\u05DD \u05D4\u05D7\u05E0\u05D9\u05D4 \u05DE\u05E9\u05D5\u05D7\u05E8\u05E8"}],[/^DomeLtSwtch$/,{k:["dome"],on:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05EA\u05E7\u05E8\u05D4 \u05D1\u05EA\u05D0 \u05D3\u05D5\u05DC\u05E7\u05EA",off:"\u05EA\u05D0\u05D5\u05E8\u05EA \u05D4\u05EA\u05E7\u05E8\u05D4 \u05DB\u05D1\u05D5\u05D9\u05D4"}],[/^ecam_(eng|apu|bleed|cond|press|door|elec|wheel|hyd|fctl|fuel)$/,{on:"\u05D4\u05E2\u05DE\u05D5\u05D3 \u05DE\u05D5\u05E6\u05D2 \u05D1\u05DE\u05E1\u05DA \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05EA\u05D7\u05EA\u05D5\u05DF",off:"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D2\u05DC\u05D2\u05DC\u05D9\u05DD"}],[/^(Left|Right)WiperKnb/,{k:["wipers"],on:"\u05D4\u05DE\u05D2\u05D1\u05D9\u05DD \u05E4\u05D5\u05E2\u05DC\u05D9\u05DD",off:"\u05D4\u05DE\u05D2\u05D1\u05D9\u05DD \u05DB\u05D1\u05D5\u05D9\u05D9\u05DD",view:"front"}],[/^Lcutoff$/,{eng:0,on:"\u05DE\u05E0\u05D5\u05E2 1 (\u05E9\u05DE\u05D0\u05DC\u05D9) \u05E4\u05D5\u05E2\u05DC",off:"\u05DE\u05E0\u05D5\u05E2 1 (\u05E9\u05DE\u05D0\u05DC\u05D9) \u05DB\u05D5\u05D1\u05D4: \u05D4\u05D3\u05DC\u05E7 \u05E0\u05E1\u05D2\u05E8 \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05DE\u05D0\u05D8",view:"engine"}],[/^Rcutoff$/,{eng:1,on:"\u05DE\u05E0\u05D5\u05E2 2 (\u05D9\u05DE\u05E0\u05D9) \u05E4\u05D5\u05E2\u05DC",off:"\u05DE\u05E0\u05D5\u05E2 2 (\u05D9\u05DE\u05E0\u05D9) \u05DB\u05D5\u05D1\u05D4: \u05D4\u05D3\u05DC\u05E7 \u05E0\u05E1\u05D2\u05E8 \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05DE\u05D0\u05D8",view:"wing"}],[/^gear_lever/,{fn:()=>(Gh(),I.gearDown),on:"\u05DB\u05DF \u05D4\u05E0\u05E1\u05D4 \u05D9\u05D5\u05E8\u05D3",off:"\u05DB\u05DF \u05D4\u05E0\u05E1\u05D4 \u05E2\u05D5\u05DC\u05D4",view:"under"}],[/^FlapsLever/,{fn:()=>(Ar(1),I.flapIdx>0),on:()=>"\u05DE\u05D3\u05E4\u05D9\u05DD \u05D1\u05DE\u05E6\u05D1 "+Ms[I.flapIdx].label,off:"\u05DE\u05D3\u05E4\u05D9\u05DD \u05D1\u05DE\u05E6\u05D1 0 (\u05E1\u05D2\u05D5\u05E8\u05D9\u05DD)",view:"wing"}],[/^SpdBrk/,{fn:()=>(lp(),!!I.spoilerT),on:"\u05D1\u05DC\u05DE\u05D9 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E4\u05EA\u05D5\u05D7\u05D9\u05DD",off:"\u05D1\u05DC\u05DE\u05D9 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E1\u05D2\u05D5\u05E8\u05D9\u05DD",view:"wing"}]],tp={StrobeLtSwtch:["\u05DB\u05D1\u05D5\u05D9","\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9","\u05D3\u05D5\u05DC\u05E7"],LandingLtSwtch:["\u05DE\u05E7\u05D5\u05E4\u05DC","\u05DB\u05D1\u05D5\u05D9","\u05D3\u05D5\u05DC\u05E7"],LandingLtRSwtch:["\u05DE\u05E7\u05D5\u05E4\u05DC","\u05DB\u05D1\u05D5\u05D9","\u05D3\u05D5\u05DC\u05E7"],NoseLtSwtch:["\u05DB\u05D1\u05D5\u05D9","\u05D4\u05E1\u05E2\u05D4","\u05D4\u05DE\u05E8\u05D0\u05D4"],NavLogoLtSwtch:["\u05DB\u05D1\u05D5\u05D9","\u05D3\u05D5\u05DC\u05E7 1","\u05D3\u05D5\u05DC\u05E7 2"],DomeLtSwtch:["\u05DB\u05D1\u05D5\u05D9","\u05E2\u05DE\u05D5\u05DD","\u05D1\u05D4\u05D9\u05E8"],SeatBeltSwtch:["\u05DB\u05D1\u05D5\u05D9","\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9","\u05D3\u05D5\u05DC\u05E7"],NoSmokingSwtch:["\u05DB\u05D1\u05D5\u05D9","\u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9","\u05D3\u05D5\u05DC\u05E7"],eng_mode:["CRANK","NORM","IGN/START"],LeftWiperKnb:["\u05DB\u05D1\u05D5\u05D9","\u05D0\u05D9\u05D8\u05D9","\u05DE\u05D4\u05D9\u05E8"],RightWiperKnb:["\u05DB\u05D1\u05D5\u05D9","\u05D0\u05D9\u05D8\u05D9","\u05DE\u05D4\u05D9\u05E8"],ParkBrk:["\u05DE\u05E9\u05D5\u05D7\u05E8\u05E8","\u05DE\u05D5\u05E4\u05E2\u05DC"]};function Vd(i){if(i.kind==="cycle"){let e=i.vals.indexOf(i.s),t=tp[i.raw];return"\u05DE\u05E6\u05D1: "+(t?t[e]:e+1+" \u05DE\u05EA\u05D5\u05DA "+i.vals.length)}return/^ecam_/.test(i.raw)?i.b?"\u05D4\u05E2\u05DE\u05D5\u05D3 \u05DE\u05D5\u05E6\u05D2 \u05D1\u05DE\u05E1\u05DA \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA":"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E8\u05D2\u05D9\u05DC":i.sel&&i.sel.some(e=>/-off$/.test(e.c))?i.b?"\u05DE\u05D5\u05E4\u05E2\u05DC (\u05E0\u05D5\u05E8\u05EA OFF \u05DB\u05D1\u05D5\u05D9\u05D4)":"\u05DE\u05E0\u05D5\u05EA\u05E7 \u2013 \u05E0\u05D5\u05E8\u05EA OFF \u05D3\u05D5\u05DC\u05E7\u05EA":i.b?"\u05DE\u05D5\u05E4\u05E2\u05DC":"\u05DB\u05D1\u05D5\u05D9"}function np(i){if(!Te||!Tt)return null;let e=Tt.click(i),t=e?e.raw:qd(i),n=tM.find(([a])=>a.test(t));if(!n)return e?{state:Vd(e),on:e.kind==="cycle"?e.s>0:e.b}:null;let s=n[1],r;if(s.fn)r=s.fn();else{if(r=e?/^LandingLt/.test(t)?e.s>=1:e.kind==="cycle"?e.s>0:e.b:!1,/^LandingLt/.test(t)){let a=Tt.get("LandingLtSwtch"),c=Tt.get("LandingLtRSwtch");r=a&&a.s>=1||c&&c.s>=1}if(s.eng!==void 0&&(Te.SYS.eng[s.eng]=s.inv?!r:r,!Te.SYS.eng[s.eng]&&!I.onGround&&Tt.set("master_caution",{b:!0}),s.inv&&e&&Tt.set(s.eng?"Rcutoff":"Lcutoff",{b:!r})),s.k&&s.k.forEach(a=>Te.SYS[a]=r),t==="APUStartBtn"&&(Te.SYS.apuStart=r&&Te.SYS.apu,r&&!Te.SYS.apu&&(Tt.set("APUMasterBtn",{b:!0}),Te.SYS.apu=!0,Te.SYS.apuStart=!0)),t==="APUMasterBtn"&&!r&&(Te.SYS.apuStart=!1,Tt.set("APUStartBtn",{b:!1,avail:!1})),/^ecam_/.test(t)&&(I.sdPage=r?t.slice(5):"wheel"),/^ap[12]$/.test(t)){let a=Tt.get("ap1"),c=Tt.get("ap2");Te.SYS.ap=a&&a.b||c&&c.b,Te.SYS.ap&&(I.apAlt=I.alt),r=Te.SYS.ap}}return{state:(e&&e.kind==="cycle"&&tp[t]?Vd(e)+" \u2013 ":"")+(r?typeof s.on=="function"?s.on():s.on:s.off),on:r,view:s.view}}function nM(){if(!Te||!Tt)return;let i=Tt.get("APUStartBtn");if(i){let e=Te.SYS.apuRun>=1;!!i.avail!==e&&Tt.set("APUStartBtn",{avail:e,b:e?!1:i.b})}}var iM={DoorL1:"\u05D3\u05DC\u05EA \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD \u05E7\u05D3\u05DE\u05D9\u05EA \u05E9\u05DE\u05D0\u05DC\u05D9\u05EA",DoorL4:"\u05D3\u05DC\u05EA \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD \u05D0\u05D7\u05D5\u05E8\u05D9\u05EA \u05E9\u05DE\u05D0\u05DC\u05D9\u05EA",DoorR1:"\u05D3\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05E7\u05D3\u05DE\u05D9\u05EA \u05D9\u05DE\u05E0\u05D9\u05EA",DoorR4:"\u05D3\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D7\u05D5\u05E8\u05D9\u05EA \u05D9\u05DE\u05E0\u05D9\u05EA",Cargo1:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05DE\u05D8\u05E2\u05DF \u05D4\u05E7\u05D3\u05DE\u05D9",Cargo2:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05DE\u05D8\u05E2\u05DF \u05D4\u05D0\u05D7\u05D5\u05E8\u05D9",Cargo3:"\u05D3\u05DC\u05EA \u05EA\u05D0 \u05D4\u05DE\u05D8\u05E2\u05DF \u05D1\u05EA\u05E4\u05D6\u05D5\u05E8\u05EA"};function sM(i){let e=/^(Door[LR][14]|Cargo[123])/.exec(i);if(!e||!Te)return null;let t=e[1],n=!!Te.SYS.doors[t];return{state:iM[t]+(n?" \u05E4\u05EA\u05D5\u05D7\u05D4":" \u05E1\u05D2\u05D5\u05E8\u05D4"),button:n?"\u05E1\u05D2\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D3\u05DC\u05EA":"\u05E4\u05EA\u05D7 \u05D0\u05EA \u05D4\u05D3\u05DC\u05EA",run:()=>{Te.SYS.doors[t]=Te.SYS.doors[t]?0:1}}}var ei=null;function tc(i,e){!e&&St==="exterior"&&(e=sM(i.node.name)),ei={res:i,act:e};let t=It.querySelector(".info-state"),n=It.querySelector(".info-act"),s=It.querySelector(".info-look");t.textContent=e?e.state:"",t.hidden=!e,e&&(t.dataset.on=e.on===!1?"0":"1"),n.hidden=!(e&&e.button),e&&e.button&&(n.textContent=e.button),s.hidden=!(e&&e.view&&St==="cockpit"),Kd(i.node),It.querySelector(".info-group").textContent=i.info.panel||"",It.querySelector(".info-name").textContent=i.info.name,It.querySelector(".info-code").textContent=i.info.code||"",It.querySelector(".info-text").textContent=i.info.text,It.hidden=!1}function ip(i,e){Fh(),i.object.isInstancedMesh||Kd(i.object),ei=null,It.querySelector(".info-group").textContent=e.panel,It.querySelector(".info-name").textContent=e.name,It.querySelector(".info-code").textContent="",It.querySelector(".info-text").textContent=e.text;let t=It.querySelector(".info-state");t.textContent=e.state,t.hidden=!e.state,t.dataset.on="1",It.querySelector(".info-act").hidden=!0,It.querySelector(".info-look").hidden=!0,It.hidden=!1}function Ja(){It.hidden=!0,Fh()}It.querySelector(".info-close").addEventListener("click",Ja);It.querySelector(".info-act").addEventListener("click",()=>{ei&&ei.act&&ei.act.run&&(ei.act.run(),tc(ei.res))});It.querySelector(".info-look").addEventListener("click",()=>{let i=ei&&ei.act&&ei.act.view;if(i){if(i==="cabin"){Tr("cabin"),Qa("aisleF");return}Tr("exterior"),br(i)}});var an=i=>document.querySelector(i),qi={thrust:an("#r-thrust"),speed:an("#r-speed"),alt:an("#r-alt"),rpm:an("#r-rpm"),n1:an("#r-n1"),vs:an("#r-vs"),bank:an("#r-bank"),pitch:an("#r-pitch")},Mi=(i,e=0)=>i.toLocaleString("he-IL",{maximumFractionDigits:e,minimumFractionDigits:e}),Es=an("#thr-track"),rM=an("#thr-handle"),oM=an("#thr-val");function sp(){qi.thrust.textContent=Mi(I.thrust/1e3),qi.speed.textContent=Mi(I.v*1.944),qi.alt.textContent=Mi(Math.round(I.alt*3.281/10)*10),qi.rpm.textContent=Mi(Math.round(I.n1/100*Hy/10)*10),qi.n1.textContent=Mi(I.n1,1);let i=I.vs*196.85;qi.vs.textContent=(i>50?"+":"")+Mi(Math.round(i/50)*50),qi.bank.textContent=Mi(Math.abs(ct.radToDeg(I.phi)))+"\xB0"+(Math.abs(I.phi)>.02?I.phi>0?" \u05D9\u05DE\u05D9\u05E0\u05D4":" \u05E9\u05DE\u05D0\u05DC\u05D4":""),qi.pitch.textContent=Mi(ct.radToDeg(I.theta),1)+"\xB0",oM.textContent=I.thr<.04?"\u05E1\u05E8\u05E7":I.thr>.97?"\u05D4\u05DE\u05E8\u05D0\u05D4":I.thr>.84&&I.thr<.9?"\u05D8\u05D9\u05E4\u05D5\u05E1":Mi(I.thr*100)+"%"}function Vh(i){for(let e of[0,.87,1])Math.abs(i-e)<.025&&(i=e);I.thr=ct.clamp(i,0,1),rM.style.bottom=`calc(${I.thr*100}% - ${I.thr*22}px)`,Es.setAttribute("aria-valuenow",Math.round(I.thr*100))}function rp(i){let e=Es.getBoundingClientRect();Vh(1-(i.clientY-e.top-11)/(e.height-22))}Es.addEventListener("pointerdown",i=>{Es.setPointerCapture(i.pointerId),rp(i)});Es.addEventListener("pointermove",i=>{Es.hasPointerCapture(i.pointerId)&&rp(i)});Es.addEventListener("keydown",i=>{let e={ArrowUp:.05,ArrowRight:.05,ArrowDown:-.05,ArrowLeft:-.05,PageUp:.2,PageDown:-.2}[i.key];e!==void 0&&(Vh(I.thr+e),i.preventDefault())});Vh(I.thr);var ji=an("#stick-pad"),aM=an("#stick-knob"),nc=!1;function op(i){let e=ji.getBoundingClientRect(),t=e.width/2-18,n=(i.clientX-e.left-e.width/2)/t,s=(i.clientY-e.top-e.height/2)/t,r=Math.hypot(n,s);r>1&&(n/=r,s/=r),I.stick.x=n,I.stick.y=s}ji.addEventListener("pointerdown",i=>{ji.setPointerCapture(i.pointerId),nc=!0,op(i)});ji.addEventListener("pointermove",i=>{nc&&op(i)});var ap=()=>{nc=!1,I.stick.x=0,I.stick.y=0};ji.addEventListener("pointerup",ap);ji.addEventListener("pointercancel",ap);var ys=new Set;window.addEventListener("keydown",i=>{i.target.closest&&i.target.closest("#thr-track")||(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)&&(i.target===document.body||i.target===ji||i.target===Ft)&&(ys.add(i.key),i.preventDefault()),(i.key==="g"||i.key==="G"||i.key==="\u05E2")&&Gh(),(i.key==="f"||i.key==="F"||i.key==="\u05DB")&&Ar(1))});window.addEventListener("keyup",i=>ys.delete(i.key));function cM(i){let e=I.stick.x,t=I.stick.y;!nc&&ys.size&&(e=(ys.has("ArrowRight")?1:0)-(ys.has("ArrowLeft")?1:0),t=(ys.has("ArrowDown")?1:0)-(ys.has("ArrowUp")?1:0));let n=1-Math.exp(-i/.12);I.stickVis.x+=(e-I.stickVis.x)*n,I.stickVis.y+=(t-I.stickVis.y)*n;let s=ji.clientWidth/2-18;aM.style.transform=`translate(${I.stickVis.x*s}px, ${I.stickVis.y*s}px)`}var cp=an("#btn-flaps"),Sr=an("#btn-gear"),Ih=an("#btn-spoiler");function Ar(i){I.flapIdx=(I.flapIdx+i+Ms.length)%Ms.length,cp.querySelector("b").textContent=Ms[I.flapIdx].label}cp.addEventListener("click",()=>Ar(1));function Gh(){I.gearDown=!I.gearDown,Sr.querySelector("b").textContent=I.gearDown?"\u05DC\u05DE\u05D8\u05D4":"\u05DC\u05DE\u05E2\u05DC\u05D4",Sr.setAttribute("aria-pressed",I.gearDown)}Sr.addEventListener("click",Gh);function lp(){I.spoilerT=I.spoilerT?0:1,Ih.querySelector("b").textContent=I.spoilerT?"\u05E4\u05EA\u05D5\u05D7\u05D9\u05DD":"\u05E1\u05D2\u05D5\u05E8\u05D9\u05DD",Ih.setAttribute("aria-pressed",!!I.spoilerT)}Ih.addEventListener("click",lp);document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>Tr(i.dataset.mode)));document.querySelectorAll("[data-eye]").forEach(i=>i.addEventListener("click",()=>ec(i.dataset.eye)));document.querySelectorAll("[data-ext]").forEach(i=>i.addEventListener("click",()=>br(i.dataset.ext)));document.querySelectorAll("[data-cab]").forEach(i=>i.addEventListener("click",()=>Qa(i.dataset.cab)));document.querySelectorAll("[data-walk]").forEach(i=>i.addEventListener("click",()=>jd(+i.dataset.walk)));var hp={night:()=>Te.SYS.night=!Te.SYS.night,lights:()=>{let i=!(Te.SYS.nav&&Te.SYS.beacon);return["nav","logo","beacon","strobe","land","wing","nose"].forEach(e=>Te.SYS[e]=i),i},pdoors:()=>{let i=!Te.SYS.doors.DoorL1;return["DoorL1","DoorL4","DoorR1","DoorR4"].forEach(e=>Te.SYS.doors[e]=i?1:0),i&&br("overview"),i},cdoors:()=>{let i=!Te.SYS.doors.Cargo1;return["Cargo1","Cargo2","Cargo3"].forEach(e=>Te.SYS.doors[e]=i?1:0),i&&St==="exterior"&&br("cargo"),i}};document.querySelectorAll("[data-act]").forEach(i=>i.addEventListener("click",()=>{if(!Te)return;let e=hp[i.dataset.act]();i.setAttribute("aria-pressed",!!e)}));function up(){let i=Ft.clientWidth,e=Ft.clientHeight,t=Fn.getPixelRatio();(Ft.width!==Math.round(i*t)||Ft.height!==Math.round(e*t))&&(Fn.setSize(i,e,!1),Et.aspect=i/e,Et.updateProjectionMatrix())}var lM=new Oa,Rh=0,Ch=0;function fp(){let i=Math.min(lM.getDelta(),.05);up(),cM(i),I.spoiler+=((I.spoilerT||0)-I.spoiler)*(1-Math.exp(-i/.6));let e=ti&&ti.step(i);if(e||Gy(i),Zt.rotation.set(I.phi,0,I.theta,"ZXY"),Zt.updateMatrixWorld(!0),Wy(i),Te&&Te.update(i,St),Tt&&Tt.update(i),nM(i),ni&&Te&&ni.update(i,Te.SYS,Te.nightK(),Jy()),St==="cockpit"&&Xy(),Eo.position.y=-I.alt-3.35,Ki.position.y=-I.alt-3.3,Ki.visible=I.alt<2500,Er.position.y=1400-I.alt,Er.visible=Math.abs(1400-I.alt)>25,Uh.uniforms.uOff.value.set(I.posX,I.posZ),Oh.uniforms.uOff.value.set(I.posX,I.posZ),Er.rotation.z=-I.psi,Eo.rotation.z=-I.psi,e||(Ki.position.x=-(I.posX%3e3)),e&&ti.L.phase!==Dh&&(Dh=ti.L.phase,dp()),St==="cockpit"||St==="cabin")Qy(i);else{if(Tn){Tn.k=Math.min(1,Tn.k+i/1.4);let t=Tn.k<.5?4*Tn.k**3:1-Math.pow(-2*Tn.k+2,3)/2;Et.position.lerpVectors(Tn.p0,Tn.p1,t),On.target.lerpVectors(Tn.t0,Tn.t1,t),Tn.k>=1&&(Tn=null)}On.update()}Lh+=i,Zd.opacity=.3+.2*Math.sin(Lh*5),Rh+=i,Rh>.1&&(Rh=0,Yy()),Ch+=i,Ch>.12&&(Ch=0,sp()),Fn.render(Bn,Et),requestAnimationFrame(fp)}var ti=bd({runway:Ki,S:I,FLAPS:Ms});window.__land=ti;var Dh="",hM={approach:"\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E0\u05D7\u05D9\u05EA\u05D4: \u05D4\u05DE\u05D8\u05D5\u05E1 \u05D9\u05D5\u05E8\u05D3 \u05D1\u05D6\u05D5\u05D5\u05D9\u05EA \u05E9\u05DC 3 \u05DE\u05E2\u05DC\u05D5\u05EA \u05DC\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05DE\u05E1\u05DC\u05D5\u05DC. \u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05D2\u05D9\u05E9\u05D4 \u05D4\u05DE\u05D4\u05D1\u05D4\u05D1\u05D9\u05DD \u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05D0\u05DC \u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05DE\u05E1\u05DC\u05D5\u05DC, \u05D5\u05D0\u05E8\u05D1\u05E2\u05EA \u05D0\u05D5\u05E8\u05D5\u05EA \u05D4-PAPI \u05DE\u05E9\u05DE\u05D0\u05DC \u05DE\u05E8\u05D0\u05D9\u05DD \u05D0\u05DD \u05D4\u05D6\u05D5\u05D5\u05D9\u05EA \u05E0\u05DB\u05D5\u05E0\u05D4: \u05E9\u05E0\u05D9\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9\u05DD \u05D5\u05E9\u05E0\u05D9\u05D9\u05DD \u05D0\u05D3\u05D5\u05DE\u05D9\u05DD.",flare:"\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05E0\u05D2\u05D9\u05E2\u05D4: \u05D1\u05D2\u05D5\u05D1\u05D4 \u05E9\u05DC \u05DB-15 \u05DE\u05D8\u05E8 \u05D4\u05D0\u05E3 \u05E2\u05D5\u05DC\u05D4 \u05DE\u05E2\u05D8, \u05D5\u05D4\u05DE\u05E0\u05D5\u05E2\u05D9\u05DD \u05D9\u05D5\u05E8\u05D3\u05D9\u05DD \u05DC\u05E1\u05E8\u05E7.",roll:"\u05E0\u05D2\u05D9\u05E2\u05D4! \u05D1\u05DC\u05DE\u05D9 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E4\u05EA\u05D7\u05D9\u05DD \u05E2\u05DC \u05D4\u05DB\u05E0\u05E4\u05D9\u05D9\u05DD, \u05D3\u05D7\u05E3 \u05D4\u05E4\u05D5\u05DA \u05D5\u05D1\u05DC\u05DE\u05D9\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD \u05DE\u05D0\u05D8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05D8\u05D5\u05E1.",stopped:'\u05D4\u05DE\u05D8\u05D5\u05E1 \u05E2\u05E6\u05E8 \u05E2\u05DC \u05D4\u05DE\u05E1\u05DC\u05D5\u05DC. \u05DC\u05D7\u05E6\u05D5 \u05E9\u05D5\u05D1 \u05E2\u05DC "\u05E0\u05D7\u05D9\u05EA\u05D4 \u05D1\u05DC\u05D9\u05DC\u05D4" \u05DB\u05D3\u05D9 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D8\u05D9\u05E1\u05D4.'};function dp(){let i=document.getElementById("land-msg");i&&(i.textContent=hM[ti.L.phase]||"",i.hidden=!ti.L.on)}function uM(){return ti.L.on?(ti.stop(),I.alt=3048,I.v=128.6,I.onGround=!1,I.gamma=0,I.flapIdx=0,I.gearDown=!1,Ar(0),Sr.querySelector("b").textContent="\u05DC\u05DE\u05E2\u05DC\u05D4",dp(),!1):(ti.start(),Ar(0),Sr.querySelector("b").textContent="\u05DC\u05DE\u05D8\u05D4",Sr.setAttribute("aria-pressed",!0),Te&&(Te.SYS.night=!0,["nav","logo","beacon","strobe","land","nose","turnoff"].forEach(i=>Te.SYS[i]=!0)),Tt&&(Tt.set("LandingLtSwtch",{s:1}),Tt.set("LandingLtRSwtch",{s:1}),Tt.set("SeatBeltSwtch",{s:1}),Tt.set("NoseLtSwtch",{s:1})),document.querySelectorAll("[data-act=night],[data-act=lights]").forEach(i=>i.setAttribute("aria-pressed",!0)),St!=="cockpit"&&Tr("cockpit"),ec("forward"),Dh="",!0)}hp.land=uM;Ar(0);sp();up();requestAnimationFrame(fp);window.__S=I;window.__setMode=Tr;window.__setEye=ec;window.__setExtView=br;window.__look=tt;window.__camera=Et;window.__orbit=On;window.__showInfoNode=i=>{let e=Kt[i]||Pt[i];if(!e)return"none";let t=(St==="cockpit"?Hh:$d)(e);return t&&tc(t),t?t.info.name:"noinfo"};window.__dbg={ckNodes:Kt,extNodes:Pt,surf:vs,scene:Bn};window.__pickRaw=(i,e)=>{let t=Ft.getBoundingClientRect();return wr.set((i-t.left)/t.width*2-1,-(e-t.top)/t.height*2+1),Zi.setFromCamera(wr,Et),Zi.intersectObject(wt,!0).slice(0,3).map(n=>n.object.name+"<"+(n.object.parent&&n.object.parent.name))};window.__setCabEye=(i,e)=>Qa(i,e);window.__walk=jd;window.__ckClick=i=>{let e=Kt[i];if(!e)return"none";let t=Hh(e);return t?(tc(t,np(e.name)),It.querySelector(".info-state").textContent):"noinfo"};window.__cabClickType=(i,e)=>{let t=ni.clickables.find(s=>s.userData.cab.type===i&&(!e||s.userData.cab.door===e));if(!t)return"none";let n=ni.click({object:t,instanceId:0},Te.SYS);return ip({object:t},n),n.state};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

function o(n){return o.ok()&&o.$?(o.options=o.$.mergeOpts(o,{prev:o.options,next:n}),o.options):n}o.options={},o.ok=function(){return o.online()&&!o.options.disabled},o.online=function(){return!!o.$},o.wait=function(n){return void 0===n&&(n={timeoutMs:5e3}),o.ok()&&o.$?o.$.wait(o,n):{data:"",props:{},resolve:function(){}}},o.onion=function(){return o.$&&o.$.onion(o)},o.$api="1.1",o.$=window["oy@o/o-ren"],window.$oren=o;export{o as $oren};
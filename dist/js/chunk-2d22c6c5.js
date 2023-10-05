(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c6c5"],{f2be:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Cooperate plugin beta")]),e("blockquote",[e("p",[t._v("v0.7.3+")])]),e("p",[t._v("This plugin is used to achieve collaborative editing.")]),e("h2",[t._v("Introduce")]),e("p",[t._v("This plugin implements collaborative editing through "),e("a",{attrs:{href:"https://github.com/yjs/yjs"}},[t._v("Yjs")]),t._v(". The basic principle is to convert the tree data of the mind map into flat object data, and then collaborate through shared data of type "),e("a",{attrs:{href:"https://docs.yjs.dev/api/shared-types/y.map"}},[t._v("Y.Map")]),t._v(". That is, when certain operations are performed on the canvas, the 'y.map' object will be updated, and other collaborative clients will receive the updated data, convert it back to tree structure data, and update the canvas to achieve real-time updates.")]),e("p",[t._v("To achieve collaboration, the backend is indispensable, and 'Yjs' provides some "),e("a",{attrs:{href:"https://docs.yjs.dev/ecosystem/connection-provider"}},[t._v("Connection Providers")]),t._v(". At the same time, it also provides examples of the backend, but it is only the simplest implementation. In actual projects, you should need to rewrite or improve it.")]),e("p",[t._v("You can choose the 'Provider' that suits you, and the default is "),e("a",{attrs:{href:"https://github.com/yjs/y-webrtc"}},[t._v("y-webrtc")]),t._v(".")]),e("h2",[t._v("demo")]),e("p",[t._v("If you want to try it through demo, you can do the following steps:")]),e("ol",[e("li",[t._v("Clone project and installation dependencies:")])]),e("pre",{staticClass:"hljs"},[e("code",[t._v("git "),e("span",{staticClass:"hljs-built_in"},[t._v("clone")]),t._v(" https://github.com/wanglin2/mind-map.git\n"),e("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" mind-map\n"),e("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" simple-mind-map\nnpm i\nnpm link\n"),e("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" ..\n"),e("span",{staticClass:"hljs-built_in"},[t._v("cd")]),t._v(" web\nnpm i\nnpm link simple-mind-map\n")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Modify "),e("code",[t._v("web/src/pages/Edit/components/Edit.vue")]),t._v(" file, To register Cooperate plugin, uncomment the line:")])]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-comment"},[t._v("// .usePlugin(Cooperate)// Cooperate plugin")]),t._v("\n")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("To register a collaborative plugin, uncomment the line:")])]),e("pre",{staticClass:"hljs"},[e("code",[t._v("// Execute under web path\nnpm run serve\n")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Start signaling server:")])]),e("pre",{staticClass:"hljs"},[e("code",[t._v("// Execute under simple-mind-map path\nnpm run wsServe\n")])]),e("p",[t._v("The command executes the 'simple mind map/bin/wsServer.mjs' file, which is directly copied from the "),e("a",{attrs:{href:"https://github.com/yjs/y-webrtc"}},[t._v("y webrtc")]),t._v(" repository and may not be complete. Please be cautious when using it for actual projects.")]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Access the service address in two browsers:")])]),e("pre",{staticClass:"hljs"},[e("code",[t._v("http://【your ip】:8080/#/?userName=userName\n")])]),e("p",[t._v("You can set different userNames on different browsers. Then you can edit in one browser and see the automatic update in another browser.")]),e("h2",[t._v("Register")]),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" MindMap "),e("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"hljs-string"},[t._v("'simple-mind-map'")]),t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" Cooperate "),e("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"hljs-string"},[t._v("'simple-mind-map/src/plugins/Cooperate.js'")]),t._v("\nMindMap.usePlugin(Cooperate)\n")])]),e("p",[t._v("After registration and instantiation of "),e("code",[t._v("MindMap")]),t._v(", the instance can be obtained through "),e("code",[t._v("mindMap.cooperate")]),t._v(".")]),e("h2",[t._v("Methods")]),e("h3",[t._v("getDoc()")]),e("p",[t._v("Obtain Yjs doc instance.")]),e("h3",[t._v("setProvider(provider, webrtcProviderConfig)")]),e("ul",[e("li",[e("p",[e("code",[t._v("provider")]),t._v(": The connection provider for Yjs can refer to the "),e("a",{attrs:{href:"https://docs.yjs.dev/ecosystem/connection-provider"}},[t._v("Connection Provider")]),t._v(", default is "),e("code",[t._v("null")])])]),e("li",[e("p",[e("code",[t._v("webrtcProviderConfig")]),t._v(": the options of webrtc provider, An object needs to be passed in the following format:")])])]),e("pre",{staticClass:"hljs"},[e("code",[t._v("{ \n    "),e("span",{staticClass:"hljs-attr"},[t._v("roomName")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(", "),e("span",{staticClass:"hljs-comment"},[t._v("// Mandatory, room name")]),t._v("\n    "),e("span",{staticClass:"hljs-attr"},[t._v("signalingList")]),t._v(": ["),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("],"),e("span",{staticClass:"hljs-comment"},[t._v("// Mandatory, specify signaling server")]),t._v("\n    ..."),e("span",{staticClass:"hljs-comment"},[t._v("// The other config of webrtc provider")]),t._v("\n}\n")])]),e("p",[t._v("For detailed configuration, please refer to "),e("a",{attrs:{href:"https://github.com/yjs/y-webrtc"}},[t._v("y-webrtc")]),t._v("。")]),e("p",[t._v("Set the connection provider for Yjs. If 'provider' is not transmitted, 'y webrtc' will be used by default. You can also use other 'providers'.")]),e("p",[t._v("If the default 'y webrtc' is used, the necessary configuration needs to be passed in through the second parameter.")]),e("p",[e("code",[t._v("simple-mind-map/bin/wsServer.mjs")]),t._v(" file provides a simple signaling server code for testing and reference.")]),e("h3",[t._v("setUserInfo(userInfo)")]),e("ul",[e("li",[e("code",[t._v("userInfo")]),t._v(": User information. The format is as follows:")])]),e("pre",{staticClass:"hljs"},[e("code",[t._v("{\n   "),e("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",     "),e("span",{staticClass:"hljs-comment"},[t._v("// Mandatory, user's unique ID")]),t._v("\n   "),e("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",   "),e("span",{staticClass:"hljs-comment"},[t._v("// User name. Only one name and avatar can be transmitted. If both are transmitted, avatar will be displayed")]),t._v("\n   "),e("span",{staticClass:"hljs-attr"},[t._v("avatar")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(", "),e("span",{staticClass:"hljs-comment"},[t._v("// User profile")]),t._v("\n   "),e("span",{staticClass:"hljs-attr"},[t._v("color")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("   "),e("span",{staticClass:"hljs-comment"},[t._v("// If there is no avatar, the first character of the name will be displayed as a circle, and the color of the text will be white. The color of the circle can be set through this field")]),t._v("\n}\n")])]),e("p",[t._v("Set the current user's information for synchronization and display of perceptual data. If other collaborators activate a node, their avatar will be displayed above that node in your current canvas.")])])}],i={},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=l.exports}}]);
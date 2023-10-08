(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab10b"],{"144f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Utility Methods")]),t("h2",[e._v("Base utility Methods")]),t("p",[e._v("Reference:")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" {walk, ...} "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/utils'")]),e._v("\n")])]),t("h3",[e._v("Methods")]),t("h4",[e._v("resizeImgSizeByOriginRatio(width, height, newWidth, newHeight)")]),t("blockquote",[t("p",[e._v("v0.6.5+")])]),t("p",[t("code",[e._v("width")]),e._v(": The original width of the image")]),t("p",[t("code",[e._v("height")]),e._v("：The original height of the image")]),t("p",[t("code",[e._v("newWidth")]),e._v("：Width to zoom in to")]),t("p",[t("code",[e._v("newHeight")]),e._v("：Height to zoom in to")]),t("p",[e._v("Scale the image proportionally. Zoom to the specified size of "),t("code",[e._v("newWidth")]),e._v(" and "),t("code",[e._v("newHeight")]),e._v(" while maintaining the original aspect ratio of the image.")]),t("h4",[e._v("walk(root, parent, beforeCallback, afterCallback, isRoot, layerIndex = 0, index = 0)")]),t("p",[e._v("Depth-first traversal of a tree")]),t("p",[t("code",[e._v("root")]),e._v(": the root node of the tree to be traversed")]),t("p",[t("code",[e._v("parent")]),e._v(": parent node")]),t("p",[t("code",[e._v("beforeCallback")]),e._v(": preorder traversal callback function, callback parameters are: root, parent, isRoot, layerIndex, index")]),t("p",[t("code",[e._v("afterCallback")]),e._v(": postorder traversal callback function, callback parameters are: root, parent, isRoot, layerIndex, index")]),t("p",[t("code",[e._v("isRoot")]),e._v(": whether it is the root node")]),t("p",[t("code",[e._v("layerIndex")]),e._v(": node level")]),t("p",[t("code",[e._v("index")]),e._v(": index of the node among its siblings")]),t("p",[e._v("Example:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("walk(tree, "),t("span",{staticClass:"hljs-literal"},[e._v("null")]),e._v(", "),t("span",{staticClass:"hljs-function"},[e._v("() =>")]),e._v(" {}, "),t("span",{staticClass:"hljs-function"},[e._v("() =>")]),e._v(" {}, "),t("span",{staticClass:"hljs-literal"},[e._v("false")]),e._v(", "),t("span",{staticClass:"hljs-number"},[e._v("0")]),e._v(", "),t("span",{staticClass:"hljs-number"},[e._v("0")]),e._v(");\n")])]),t("h4",[e._v("bfsWalk(root, callback)")]),t("p",[e._v("Breadth-first traversal of a tree")]),t("h4",[e._v("resizeImgSize(width, height, maxWidth, maxHeight)")]),t("p",[e._v("Resize image size")]),t("p",[t("code",[e._v("width")]),e._v(": original width of the image")]),t("p",[t("code",[e._v("height")]),e._v(": original height of the image")]),t("p",[t("code",[e._v("maxWidth")]),e._v(": the width to resize to")]),t("p",[t("code",[e._v("maxHeight")]),e._v(": the height to resize to")]),t("p",[t("code",[e._v("maxWidth")]),e._v(" and "),t("code",[e._v("maxHeight")]),e._v(" can both be passed, or only one of them can be passed")]),t("h4",[e._v("resizeImg(imgUrl, maxWidth, maxHeight)")]),t("p",[e._v("Resize image, internally loads the image first, then calls the "),t("code",[e._v("resizeImgSize")]),e._v(" method, and returns a "),t("code",[e._v("promise")])]),t("h4",[e._v("simpleDeepClone(data)")]),t("p",[e._v("Extremely simple deep copy method, can only be used for objects that are all basic data, otherwise it will throw an error")]),t("h4",[e._v("copyRenderTree(tree, root)")]),t("p",[e._v("Copy render tree data, example:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("copyRenderTree({}, "),t("span",{staticClass:"hljs-built_in"},[e._v("this")]),e._v(".mindMap.renderer.renderTree);\n")])]),t("h4",[e._v("copyNodeTree(tree, root, removeActiveState, keepId)")]),t("ul",[t("li",[t("p",[t("code",[e._v("removeActiveState")]),e._v(": "),t("code",[e._v("Boolean")]),e._v(", default is "),t("code",[e._v("false")]),e._v(", Whether to remove the active state of the node")])]),t("li",[t("p",[t("code",[e._v("removeId")]),e._v("：v0.7.3-fix.1+, Is remove the uid from the node data, default is "),t("code",[e._v("true")])])])]),t("blockquote",[t("ul",[t("li",[t("code",[e._v("keepId")]),e._v(": (Original fourth parameter) v0.4.6+, "),t("code",[e._v("Boolean")]),e._v(", default is "),t("code",[e._v("false")]),e._v(", Whether to retain the "),t("code",[e._v("id")]),e._v(" of the replicated node will be deleted by default to prevent duplicate node "),t("code",[e._v("id")]),e._v(". However, for mobile node scenarios, the original "),t("code",[e._v("id")]),e._v(" of the node needs to be retained")])])]),t("p",[e._v("Copy node tree data, mainly eliminating the reference "),t("code",[e._v("node")]),e._v(" instance "),t("code",[e._v("_node")]),e._v(" and copying the "),t("code",[e._v("data")]),e._v(" of the data object, example:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("copyNodeTree({}, node);\n")])]),t("h4",[e._v("imgToDataUrl(src)")]),t("p",[e._v("Convert image to dataURL")]),t("h4",[e._v("downloadFile(file, fileName)")]),t("p",[e._v("Download file")]),t("h4",[e._v("throttle(fn, time = 300, ctx)")]),t("p",[e._v("Throttle function")]),t("h4",[e._v("asyncRun(taskList, callback = () => {})")]),t("p",[e._v("Run tasks in task list asynchronously, tasks are run synchronously without order")]),t("h4",[e._v("degToRad(deg)")]),t("blockquote",[t("p",[e._v("v0.2.24+")])]),t("p",[e._v("Angle to radian")]),t("h4",[e._v("camelCaseToHyphen(str)")]),t("blockquote",[t("p",[e._v("v0.2.24+")])]),t("p",[e._v("CamelCase to hyphen")]),t("h4",[e._v("joinFontStr({ italic, bold, fontSize, fontFamily })")]),t("blockquote",[t("p",[e._v("v0.3.4+")])]),t("p",[e._v("Join the "),t("code",[e._v("font")]),e._v(" attribute value of the "),t("code",[e._v("css")]),e._v(" font")]),t("h4",[e._v("measureText(text, { italic, bold, fontSize, fontFamily })")]),t("blockquote",[t("p",[e._v("v0.3.4+")])]),t("p",[e._v("Measure the width and height of the text, return value:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{ width, height }\n")])]),t("h4",[e._v("getTextFromHtml(html)")]),t("p",[e._v("Extract plain text content from an HTML string.")]),t("h4",[e._v("readBlob(blob)")]),t("blockquote",[t("p",[e._v("v0.5.9+")])]),t("p",[e._v("Convert "),t("code",[e._v("blob")]),e._v(" data to "),t("code",[e._v("data:url")]),e._v(" data.")]),t("h4",[e._v("parseDataUrl(data)")]),t("blockquote",[t("p",[e._v("v0.6.6+")])]),t("p",[e._v("Parse "),t("code",[e._v("data:url")]),e._v(" data, return:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{\n  type,"),t("span",{staticClass:"hljs-comment"},[e._v("// file type of data")]),e._v("\n  base64"),t("span",{staticClass:"hljs-comment"},[e._v("// base64 data")]),e._v("\n}\n")])]),t("h4",[e._v("getImageSize(src)")]),t("blockquote",[t("p",[e._v("v0.6.6+")])]),t("ul",[t("li",[t("code",[e._v("src")]),e._v(": The url of img")])]),t("p",[e._v("Get the size of image, return:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{\n  width,\n  height\n}\n")])]),t("h4",[e._v("loadImage(imgFile)")]),t("blockquote",[t("p",[e._v("v0.6.8+")])]),t("ul",[t("li",[t("code",[e._v("imgFile")]),e._v(": File object of image type")])]),t("p",[e._v("Load image, return:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{\n  url,"),t("span",{staticClass:"hljs-comment"},[e._v("// DataUrl")]),e._v("\n  size"),t("span",{staticClass:"hljs-comment"},[e._v("// { width, height } width and height of image")]),e._v("\n}\n")])]),t("h4",[e._v("getType(data)")]),t("blockquote",[t("p",[e._v("v0.6.9+")])]),t("p",[e._v("Get the type of a data, such as "),t("code",[e._v("Boolean")]),e._v("、"),t("code",[e._v("Array")]),e._v(".")]),t("h4",[e._v("removeHtmlStyle(html)")]),t("blockquote",[t("p",[e._v("v0.6.10+")])]),t("p",[e._v("Remove the inline style of nodes in the HTML string.")]),t("h4",[e._v("addHtmlStyle(html, tag, style)")]),t("blockquote",[t("p",[e._v("v0.6.10+")])]),t("p",[e._v("Add inline styles to the specified tags in the HTML tag.")]),t("h4",[e._v("checkIsRichText(str)")]),t("blockquote",[t("p",[e._v("v0.6.10+")])]),t("p",[e._v("Check if a string is a rich text character.")]),t("h4",[e._v("isWhite(color)")]),t("blockquote",[t("p",[e._v("v0.6.11+")])]),t("p",[e._v("Determine whether a color is white.")]),t("h4",[e._v("isTransparent(color)")]),t("blockquote",[t("p",[e._v("v0.6.11+")])]),t("p",[e._v("Determine whether a color is transparent.")]),t("h4",[e._v("nodeRichTextToTextWithWrap(html)")]),t("blockquote",[t("p",[e._v("v0.6.12+")])]),t("p",[e._v("Convert the rich text content of nodes in the form of "),t("code",[e._v("<p><span></span><p>")]),e._v(" into text wrapped in "),t("code",[e._v("\\n")]),e._v(".")]),t("h4",[e._v("textToNodeRichTextWithWrap(html)")]),t("blockquote",[t("p",[e._v("v0.6.12+")])]),t("p",[e._v("Convert the wrapped text of "),t("code",[e._v("<br>")]),e._v(" into node rich text content in the form of "),t("code",[e._v("<p><span></span><p>")]),e._v(".")]),t("h4",[e._v("isMobile()")]),t("blockquote",[t("p",[e._v("v0.6.13+")])]),t("p",[e._v("Determine if it is a mobile environment.")]),t("h4",[e._v("getTopAncestorsFomNodeList(list)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("list")]),e._v(": Arrray, Node instance list.")])]),t("p",[e._v("Find the top-level node list from the node instance list.")]),t("h4",[e._v("checkTwoRectIsOverlap(minx1, maxx1, miny1, maxy1, minx2, maxx2, miny2, maxy2)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("p",[e._v("The parameter is the position of two rectangles.")]),t("p",[e._v("Determine if two rectangles overlap.")]),t("h4",[e._v("focusInput(el)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("el")]),e._v(": DOM nodes, elements that can be focused, typically input box elements.")])]),t("p",[e._v("Focus on the specified input box.")]),t("h4",[e._v("selectAllInput(el)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("el")]),e._v(": DOM nodes, elements that can be focused, typically input box elements.")])]),t("p",[e._v("Focus and select all specified input boxes.")]),t("h4",[e._v("addDataToAppointNodes(appointNodes, data = {})")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("p",[t("code",[e._v("appointNodes")]),e._v("：Node instance list, array type.")])]),t("li",[t("p",[t("code",[e._v("data")]),e._v("：The data to be attached to all nodes in the specified node instance list tree.")])])]),t("p",[e._v("Adding additional data to the specified node list tree data will modify the original data.")]),t("h4",[e._v("createUidForAppointNodes(appointNodes, createNewId)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("p",[t("code",[e._v("appointNodes")]),e._v("：Node instance list, array type.")])]),t("li",[t("p",[t("code",[e._v("createNewId")]),e._v("：v0.7.3-fix.1+, "),t("code",[e._v("Boolean")]),e._v(", default is "),t("code",[e._v("false")]),e._v(", If the node does not have a 'uid', a new 'uid' will be created. If 'true' is passed, a new 'uid' will be created regardless of whether the node data originally exists or not`")])])]),t("p",[e._v("Adding a uid to the specified node list tree data (if the uid does not exist) will modify the original data.")]),t("h4",[e._v("getNodeIndex(node)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("node")]),e._v("：Node instance.")])]),t("p",[e._v("Gets the position index of a node within its peers.")]),t("h4",[e._v("mergerIconList(list)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("list")]),e._v("：The array of node icons to be merged into the library.")])]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-comment"},[e._v("// const data = [")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("//   { type: 'priority', name: '优先级图标', list: [{ name: '1', icon: 'a' }, { name: 2, icon: 'b' }] },")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("//   { type: 'priority', name: '优先级图标', list: [{ name: '2', icon: 'c' }, { name: 3, icon: 'd' }] },")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("// ];")]),e._v("\n\n"),t("span",{staticClass:"hljs-comment"},[e._v("// mergerIconList(data)  result:")]),e._v("\n\n"),t("span",{staticClass:"hljs-comment"},[e._v("// [")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("//   { type: 'priority', name: '优先级图标', list: [{ name: '1', icon: 'a' }, { name: 2, icon: 'c' }, { name: 3, icon: 'd' }] },")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("// ]")]),e._v("\n")])]),t("p",[e._v("Merge icon arrays.")]),t("h4",[e._v("htmlEscape(str)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("str")]),e._v("：String.")])]),t("p",[e._v("Escape the incoming string, currently escaping the following three characters:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("& -> &amp;\n< -> &lt;\n> -> &gt;\n")])]),t("h4",[e._v("generateColorByContent(str)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("str")]),e._v("：String.")])]),t("p",[e._v("Generate colors based on incoming content, and the same content will generate the same color.")]),t("h4",[e._v("isSameObject(a, b)")]),t("blockquote",[t("p",[e._v("v0.7.3+")])]),t("ul",[t("li",[t("code",[e._v("a")]),e._v("、"),t("code",[e._v("b")]),e._v(": Object | Array, Two objects to compare")])]),t("p",[e._v("Determine whether two objects are the same, only handling objects or arrays.")]),t("h2",[e._v("Simulate CSS background in Canvas")]),t("p",[e._v("Import:")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" drawBackgroundImageToCanvas "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/utils/simulateCSSBackgroundInCanvas'")]),e._v("\n")])]),t("p",[e._v("Usage：")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" width = "),t("span",{staticClass:"hljs-number"},[e._v("500")]),e._v("\n"),t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" height = "),t("span",{staticClass:"hljs-number"},[e._v("500")]),e._v("\n"),t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" img = "),t("span",{staticClass:"hljs-string"},[e._v("'/1.jpg'")]),e._v("\n"),t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" canvas = "),t("span",{staticClass:"hljs-built_in"},[e._v("document")]),e._v(".createElement("),t("span",{staticClass:"hljs-string"},[e._v("'canvas'")]),e._v(")\ncanvas.width = width\ncanvas.height = height\ndrawBackgroundImageToCanvas(ctx, width, height, img, {\n  "),t("span",{staticClass:"hljs-attr"},[e._v("backgroundRepeat")]),e._v(": "),t("span",{staticClass:"hljs-string"},[e._v("'repeat-y'")]),e._v(",\n  "),t("span",{staticClass:"hljs-attr"},[e._v("backgroundSize")]),e._v(": "),t("span",{staticClass:"hljs-string"},[e._v("'60%'")]),e._v(",\n  "),t("span",{staticClass:"hljs-attr"},[e._v("backgroundPosition")]),e._v(": "),t("span",{staticClass:"hljs-string"},[e._v("'center center'")]),e._v("\n}, "),t("span",{staticClass:"hljs-function"},[e._v("("),t("span",{staticClass:"hljs-params"},[e._v("err")]),e._v(") =>")]),e._v(" {\n  "),t("span",{staticClass:"hljs-keyword"},[e._v("if")]),e._v(" (err) {\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// fail")]),e._v("\n  } "),t("span",{staticClass:"hljs-keyword"},[e._v("else")]),e._v(" {\n    "),t("span",{staticClass:"hljs-comment"},[e._v("// success")]),e._v("\n  }\n})\n")])]),t("h2",[e._v("LRU cache class")]),t("blockquote",[t("p",[e._v("v0.5.10+")])]),t("p",[e._v("Import:")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" Lru "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/utils/Lru.js'")]),e._v("\n")])]),t("h3",[e._v("Constructor")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" lru = "),t("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" Lru(max)\n")])]),t("p",[t("code",[e._v("max")]),e._v(": Specify the maximum number of caches.")]),t("h3",[e._v("Instance properties")]),t("h4",[e._v("size")]),t("p",[e._v("The current number of caches.")]),t("h4",[e._v("pool")]),t("p",[e._v("Get cache pool.")]),t("h3",[e._v("Instance methods")]),t("h4",[e._v("add(key, value)")]),t("p",[e._v("Add cache.")]),t("h4",[e._v("delete(key)")]),t("p",[e._v("Delete cache.")]),t("h4",[e._v("has(key)")]),t("p",[e._v("Check if a cache exists.")]),t("h4",[e._v("get(key)")]),t("p",[e._v("Gets the value of a cache.")])])}],i={},n=i,v=a("2877"),l=Object(v["a"])(n,s,o,!1,null,null,null);t["default"]=l.exports}}]);
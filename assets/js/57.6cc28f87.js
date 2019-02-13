(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{361:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"tensorflow学习之基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow学习之基础语法","aria-hidden":"true"}},[t._v("#")]),t._v(" tensorflow学习之基础语法")]),t._v(" "),a("h3",{attrs:{id:"模块的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 模块的引入")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\n")])])]),a("h3",{attrs:{id:"常量的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量的定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 常量的定义")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("data1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constant"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"变量的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量的定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量的定义")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("data2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Variable"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"var"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"session的定义和执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session的定义和执行","aria-hidden":"true"}},[t._v("#")]),t._v(" session的定义和执行")]),t._v(" "),a("p",[t._v("tensorflow中所有的操作都在session中进行")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("sess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Session"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("//")]),t._v("变量需要初始化，不然会报异常\ninit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_variables_initializer"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("init"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("//")]),t._v("关闭session\nsess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"tensorflow实质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow实质","aria-hidden":"true"}},[t._v("#")]),t._v(" tensorflow实质")]),t._v(" "),a("ol",[a("li",[t._v("张量tensor和计算图grahps，张量表示的是数据，op代表操作，grahps代表运算图。\n"),a("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNbRwgy1fugc3q63uyj30vm0gq0vi.jpg",alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"常量、变量的四则运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量、变量的四则运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 常量、变量的四则运算")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\ndata1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constant"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constant"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("24")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndataadd "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatamul "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiply"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatasub"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtract"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatadiv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("div"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("with")]),t._v(" tf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Session"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataadd"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datamul"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datasub"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datadiv"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"numpy模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numpy模块","aria-hidden":"true"}},[t._v("#")]),t._v(" numpy模块")]),t._v(" "),a("h3",{attrs:{id:"matplotlib模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matplotlib模块","aria-hidden":"true"}},[t._v("#")]),t._v(" matplotlib模块")]),t._v(" "),a("h4",{attrs:{id:"折线图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#折线图","aria-hidden":"true"}},[t._v("#")]),t._v(" 折线图")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\nx "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v("'r'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNbRwgy1fujmyco7wfj30z80mktbq.jpg",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"柱状图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柱状图","aria-hidden":"true"}},[t._v("#")]),t._v(" 柱状图")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),a("span",{attrs:{class:"token comment"}},[t._v("# x = np.array([1,2,3,4,5,6,7,8])")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# y = np.array([3,5,7,6,2,6,10,15])")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# plt.plot(x,y,'r')")]),t._v("\nx "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("alpha"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("color"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNbRwgy1fujnihwyfrj30ty0lognv.jpg",alt:""}})])])}],!1,null,null,null);o.options.__file="tensorflow1.md";s.default=o.exports}}]);
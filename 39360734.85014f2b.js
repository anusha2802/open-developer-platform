(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(11),o=(n(0),n(185)),c=n(187),i={id:"csharp",title:"C#"},s={id:"development-infrastructure/continuous-integration/csharp",title:"C#",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/continuous-integration/csharp.mdx",permalink:"/docs/development-infrastructure/continuous-integration/csharp",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/csharp.mdx",sidebar:"mainSidebar",previous:{title:"Clojure",permalink:"/docs/development-infrastructure/continuous-integration/clojure"},next:{title:"Java",permalink:"/docs/development-infrastructure/continuous-integration/java"}},u=[{value:"Build",id:"build",children:[]},{value:"Release on NuGet",id:"release-on-nuget",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/z1zx9t92.aspx"}),Object(o.a)("strong",{parentName:"a"},"C#"))," is an object-oriented language that runs on the .NET Framework; feel free to browse the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://finos.github.com/"}),"Foundation hosted projects written in C#"),"."),Object(o.a)("h2",{id:"build"},"Build"),Object(o.a)("p",null,"The easiest way to locally build a C# project is to ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/5tdasz7h.aspx"}),"use Visual Studio"),", although it's also possible to use the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/dd393574.aspx"}),"MSBuild")," command-line tool; you can find more info on ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/cyz1h6zd.aspx"}),"Microsoft Developer Network"),"."),Object(o.a)("p",null,"There is an open source, cross-platform alternative to the .NET Framework implementation called ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://www.mono-project.com/"}),"Mono"),", based on the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://www.mono-project.com/docs/about-mono/languages/ecma/"}),"ECMA")," standards for C# and the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://www.mono-project.com/docs/advanced/runtime/"}),"Common Language Runtime"),", however not all .NET applications can run on this platform, therefore it's safer to run all builds on a Windows environment that is configured with the .NET Framework installed."),Object(o.a)("h2",{id:"release-on-nuget"},"Release on NuGet"),Object(o.a)("p",null,Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://nuget.org/"}),"NuGet")," is the package manager for the Microsoft development platform including .NET. The ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://docs.nuget.org/ndocs/guides/install-nuget"}),"NuGet client tools")," provide the ability to produce and consume packages. The NuGet Gallery is the central package repository used by all package authors and consumers."),Object(o.a)("p",null,"To release a project on NuGet, it is currently required to run the build process from a .NET (Windows) environment, as there are some known issues for NuGet to run with Mono on Linux and OSX; please refer to ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NuGet/Home/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+mono"}),"Mono issues")," on GitHub for more info."),Object(o.a)("p",null,"From command-line, you can invoke the following command:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{}),"nuget pack project.csproj -IncludeReferencedProjects -Prop Configuration=Release\n")),Object(o.a)("p",null,"A badge can be added at the top of the project's root-level README.md file, using the following Markdown syntax:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{}),"[![NuGet Packages Status](https://img.shields.io/nuget/v/<package name>.svg?maxAge=2592000)](https://www.nuget.org/packages/<package name>/)\n")),Object(o.a)("p",null,"You can also run this process continuously on each commit and publish pre-releases by ",Object(o.a)("a",{href:"intro#myget"},"integrating with MyGet"),"."),Object(o.a)("img",{alt:"openshift-console",src:Object(c.a)("img/vendors/openshift-console.png")}))}l.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return n?a.a.createElement(f,i({ref:t},u,{components:n})):a.a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},186:function(e,t,n){"use strict";var r=n(0),a=n(56);t.a=function(){return Object(r.useContext)(a.a)}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(188);var r=n(186);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},188:function(e,t,n){"use strict";var r=n(5),a=n(15),o=n(189),c="".startsWith;r(r.P+r.F*n(190)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},189:function(e,t,n){var r=n(80),a=n(22);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},190:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);
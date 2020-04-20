(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var i=a(1),n=a(11),o=(a(0),a(185)),r=a(187),c={id:"whitesource",title:"Whitesource"},s={id:"development-infrastructure/code-validation/whitesource",title:"Whitesource",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/code-validation/whitesource.mdx",permalink:"/docs/development-infrastructure/code-validation/whitesource",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/whitesource.mdx",sidebar:"mainSidebar",previous:{title:"Sonar Cloud",permalink:"/docs/development-infrastructure/code-validation/sonarcloud"},next:{title:"Project Documentation",permalink:"/docs/development-infrastructure/project-documentation"}},l=[{value:"Glossary",id:"glossary",children:[]},{value:"Features",id:"features",children:[]},{value:"WhiteSource Policies",id:"whitesource-policies",children:[]},{value:"Integration with GitHub.com",id:"integration-with-githubcom",children:[{value:"FINOS default configurations",id:"finos-default-configurations",children:[]},{value:"Enable WhiteSource scanning",id:"enable-whitesource-scanning",children:[]},{value:"Testing WhiteSource scanning",id:"testing-whitesource-scanning",children:[]},{value:"Configuring WhiteSource scanning",id:"configuring-whitesource-scanning",children:[]}]},{value:"Build integration",id:"build-integration",children:[]},{value:"Request access",id:"request-access",children:[]}],u={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(i.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("img",{height:"150px",alt:"whitesource-logo",src:Object(r.a)("img/vendors/whitesource-logo.png")}),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(i.a)({parentName:"tr"},{align:null})),Object(o.a)("th",Object(i.a)({parentName:"tr"},{align:"left"})))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Name")),Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Whitesource")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Status")),Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Delivered")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Link")),Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(o.a)("a",Object(i.a)({parentName:"td"},{href:"whitesourcesoftware.com"}),"whitesourcesoftware.com"))),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Topics")),Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Legal, Security, Quality")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.a)("strong",{parentName:"td"},"Languages")),Object(o.a)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Javascript")))),Object(o.a)("p",null,Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://www.whitesourcesoftware.com/"}),"WhiteSource")," automatically identi\ufb01es all the open source components and dependencies in your build by constant and automatic cross-referencing of your open source components against WhiteSource\u2019s de\ufb01nitive database of open source repositories.\nWhiteSource provides a dedicated instance to validate and enforce security and legal compliance for all Symphony Software Foundation hosted projects."),Object(o.a)("p",null,"Below are listed the main WhiteSource features that have been adopted by Foundation projects."),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Check libraries for outdated versions"),Object(o.a)("li",{parentName:"ol"},"Check libraries for security vulnerabilities"),Object(o.a)("li",{parentName:"ol"},"Check libraries for bugs"),Object(o.a)("li",{parentName:"ol"},"Check libraries for problematic/undefined licenses"),Object(o.a)("li",{parentName:"ol"},"Check libraries for release activity"),Object(o.a)("li",{parentName:"ol"},"Integration with CI environments")),Object(o.a)("h2",{id:"glossary"},"Glossary"),Object(o.a)("p",null,"To avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"A ",Object(o.a)("strong",{parentName:"li"},"FINOS repository")," is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project"),Object(o.a)("li",{parentName:"ol"},"A ",Object(o.a)("strong",{parentName:"li"},"FINOS Project")," is a logical entity that includes\na. one or more project leaders\nb. a project team\nc. one or more Foundation repositories; if one, project and repository will have the same name.\nd. In WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each ",Object(o.a)("strong",{parentName:"li"},"WhiteSource Product")," will list below the projects included."),Object(o.a)("li",{parentName:"ol"},Object(o.a)("strong",{parentName:"li"},"Foundation WhiteSoure dashboard")," - WhiteSource provides a dedicated instance for the Foundation projects that can be accessed\na. by all project leaders, to check and export project metrics\nb. by Foundation Staff, to configure Foundation WhiteSource policies"),Object(o.a)("li",{parentName:"ol"},Object(o.a)("strong",{parentName:"li"},"Foundation WhiteSource policies")," - A collection of rules and workflows implemented in the WhiteSource dashboard by the Foundation team to enforce security and legal compliance; below are reported the details."),Object(o.a)("li",{parentName:"ol"},Object(o.a)("strong",{parentName:"li"},"Alert")," - The visual notification that WhiteSource shows in the main dashboard when a policy violation is found")),Object(o.a)("h2",{id:"features"},"Features"),Object(o.a)("img",{height:"150px",alt:"whitesource-dashboard",src:Object(r.a)("img/vendors/whitesource-dashboard.png")}),Object(o.a)("p",null,"WhiteSource provides the following features to Foundation project leads/committers that have been granted access:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Access the WhiteSource dashboard for one or more projects\na. Access WhiteSource Due Diligence and Risk reports\nb. Browse (and drill down) through project libraries\nc. Browse (and drill down) through licenses found in the project\nd. Check alerts and warnings triggered by policy violations"),Object(o.a)("li",{parentName:"ol"},"Configure WhiteSource build plugins to upload project metrics"),Object(o.a)("li",{parentName:"ol"},"Configure Travis CI (or other CI environments) to continuously\na. validate code against Foundation policies enforced by WhiteSource\nb. fail the build, if any policy violation is found\nc. upload project metrics to the WhiteSource Foundation dashboard")),Object(o.a)("h2",{id:"whitesource-policies"},"WhiteSource Policies"),Object(o.a)("p",null,"Below are the WhiteSource policies that have been configured by the Foundation and are enforced across all integrated projects; all libraries that are scanned in a project are matched against the following policies, in the order reported below, until a policy is matched."),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Severity - any library that contains high level CVEs is marked as Rejected,"),Object(o.a)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Score - any library that contains CVEs with score higher than 7 is marked as Rejected,"),Object(o.a)("li",{parentName:"ol"},"[QUALITY]"," Reject High Bug Rating - any library ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.whitesourcesoftware.com/open-source-bug-tracking/"}),"high bug rating")," is marked as Rejected,"),Object(o.a)("li",{parentName:"ol"},"[LEGAL]"," Licenses that require review - any library with unknown license is marked as Rejected,"),Object(o.a)("li",{parentName:"ol"},"[QUALITY]"," Reassign Low Version Activity - any library with a low amount of versions released is Reassigned to the project lead for validation,"),Object(o.a)("li",{parentName:"ol"},"[QUALITY]"," Reassign Stale (5 years) Library - any library without a release for more than 5 years is Reassigned to the project lead for validation,"),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"[LEGAL] Reject Problematic (Category X license) libraries - any library using a Category X license, as indicated in our contribution legal requirements, are marked as Rejected."))),Object(o.a)("p",null,"Note that legal policies are currently disabled due to the large amount of false positive generated by dual-licensed libraries. We are working to improve things."),Object(o.a)("h2",{id:"integration-with-githubcom"},"Integration with GitHub.com"),Object(o.a)("p",null,"FINOS have rolled out the ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"}),"WhiteSource integration for Github.com"),", which enables:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all commits on the default branch (commonly master) and Pull Requests"),Object(o.a)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all Pull Requests against the default branch (commonly master)"),Object(o.a)("li",{parentName:"ol"},"Support for most of languages and build tools currently used in FINOS projects"),Object(o.a)("li",{parentName:"ol"},"Creation of GitHub issues with CVE description and meta; please find the issue details on the ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com#WhiteSourceforGitHub.com-ViewingDetailsofanIssue"}),"WhiteSource docs page"))),Object(o.a)("img",{alt:"whitesource-issue",src:Object(r.a)("img/vendors/whitesource-issue.png")}),Object(o.a)("h3",{id:"finos-default-configurations"},"FINOS default configurations"),Object(o.a)("p",null,"There are 2 configuration files to define at repository level, in order to enable the WhiteSource integration with GitHub.com: .whitesource file configures the bot and whitesource.config configures the WhiteSource agent."),Object(o.a)("h4",{id:"whitesource"},".whitesource"),Object(o.a)("p",null,"Specifies whether to use GitHub Issues or not and points to the WhiteSource agent configuration. You can copy this file definition from ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"https://github.com/finos/project-blueprint")),Object(o.a)("pre",null,Object(o.a)("code",Object(i.a)({parentName:"pre"},{}),'.whitesource\n{\n  "scanSettings": {\n    "configMode": "LOCAL"\n  },\n  "checkRunSettings": {\n    "vulnerableCheckRunConclusionLevel": "failure"\n  },\n  "issueSettings": {\n    "minSeverityLevel": "LOW"\n  }\n}\n')),Object(o.a)("h4",{id:"whitesourceconfig"},"whitesource.config"),Object(o.a)("p",null,"Specifies build-time configurations, including language-specific settings, file inclusions/exclusions and more. You can copy the default configuration from ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"FINOS project blueprint"),". More info can be found on ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/489160834/Unified+Agent+Configuration+File+Parameters"}),"parameters docs page")),Object(o.a)("h3",{id:"enable-whitesource-scanning"},"Enable WhiteSource scanning"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Read the ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"}),"WhiteSource for Github.com integration")," documentation, to know what it does and how"),Object(o.a)("li",{parentName:"ol"},"Email ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"mailto:help@finos.org"}),"help@finos.org")," to request the activation of WhiteSource integration on a FINOS hosted project\na. When enabled, the app will create a Pull Request to add a .whitesource file in the codebase root"),Object(o.a)("li",{parentName:"ol"},"Merge the Pull Request raised on point #2")),Object(o.a)("h3",{id:"testing-whitesource-scanning"},"Testing WhiteSource scanning"),Object(o.a)("p",null,"The easiest and less invasive way to test is to create a new branch, add a dependency with security vulnerabilities and commit the change; few minutes later (time depends on build complexity), the app will have created one GitHub Issue for each CVE found."),Object(o.a)("img",{alt:"whitesource-pr-check",src:Object(r.a)("img/vendors/whitesource-pr-check.png")}),Object(o.a)("p",null,"If no issues are created, and want to know if the scan was performed, email ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org")," and FINOS team will help you debugging bot's execution."),Object(o.a)("h3",{id:"configuring-whitesource-scanning"},"Configuring WhiteSource scanning"),Object(o.a)("p",null,"False positives are expected, when enabling the WhiteSource integration, because of a long list of factors related with the (sometimes low) quality of the downstream library that you're consuming; being able to fine-tune the WhiteSource agent is very important, in particular excluding files and folders that should not be scanned, which is necessary most of the times."),Object(o.a)("p",null,"To have the ability to exclude files and folders, you must:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"Copy the FINOS blueprint ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/.whitesource"}),Object(o.a)("strong",{parentName:"a"},".whitesource"))," into your GitHub repository."),Object(o.a)("li",{parentName:"ol"},"Copy the FINOS blueprint ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"whitesource.config"}),Object(o.a)("strong",{parentName:"a"},"whitesource.config"))," into your GitHub repository."),Object(o.a)("li",{parentName:"ol"},"Configure your project ",Object(o.a)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/whitesource.config#L11"}),"excludes")," in ",Object(o.a)("inlineCode",{parentName:"li"},"whitesource.config"),"."),Object(o.a)("li",{parentName:"ol"},"Send a Pull Request to your project which includes a change to your dependencies, and see the WhiteSource scanning in action.")),Object(o.a)("p",null,"Please note that there may be additional configurations to apply, based on your build requirements and tools; build-specific configurations can be viewed  on ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/804814917/Unified+Agent+Configuration+File+and+Parameters#UnifiedAgentConfigurationFileandParameters-PackageManagerDependencyResolvers"}),"WhiteSource Agent docs"),", and see what applies to your project configuration."),Object(o.a)("h2",{id:"build-integration"},"Build integration"),Object(o.a)("p",null,"As alternative to the GitHub.com integration, WhiteSource also provides an agent (CLI tool) that can be downloaded and executed from any environment; this may be necessary in case the project's build tool or language are not supported by WhiteSource and some custom build logic must be performed to prepare for the scanning."),Object(o.a)("p",null,"Many build servers are supported, including Travis CI, the most used tool used by FINOS hosted projects"),Object(o.a)("p",null,"Glossary\nTo avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),Object(o.a)("p",null,"A Foundation repository is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project\nA Foundation project is a logical entity that includes\none or more project leaders\na project team\none or more Foundation repositories; if one, project and repository will have the same name.\nIn WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each WhiteSource product will list below the projects included."),Object(o.a)("h2",{id:"request-access"},"Request access"),Object(o.a)("p",null,"You can request access to the FINOS WhiteSource dashboard if you're part of a FINOS project team; please send an email to ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org")," that specifies:"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"the email address you'd like to use to login"),Object(o.a)("li",{parentName:"ol"},"the Foundation project you would like to scan with WhiteSource")),Object(o.a)("p",null,"If you login for the first time in WhiteSource and no project have been registered yet, the dashboard will look empty; ",Object(o.a)("a",Object(i.a)({parentName:"p"},{href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75530409"}),"check how to configure your build")," in order to upload metrics for the first time."))}d.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=i,b=h["".concat(r,".").concat(p)]||h[p]||d[p]||o;return a?n.a.createElement(b,c({ref:t},l,{components:a})):n.a.createElement(b,c({ref:t},l))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},186:function(e,t,a){"use strict";var i=a(0),n=a(56);t.a=function(){return Object(i.useContext)(n.a)}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(188);var i=a(186);function n(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},188:function(e,t,a){"use strict";var i=a(5),n=a(15),o=a(189),r="".startsWith;i(i.P+i.F*a(190)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return r?r.call(t,i,a):t.slice(a,a+i.length)===i}})},189:function(e,t,a){var i=a(80),n=a(22);e.exports=function(e,t,a){if(i(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(e))}},190:function(e,t,a){var i=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[i]=!1,!"/./"[e](t)}catch(n){}}return!0}}}]);
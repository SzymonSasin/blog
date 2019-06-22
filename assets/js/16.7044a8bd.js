(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{132:function(t,e,a){"use strict";a.r(e);var s=a(4),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"a-simple-solution-to-automaticaly-push-static-generated-blog-to-github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-solution-to-automaticaly-push-static-generated-blog-to-github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" A simple solution to automaticaly push static generated blog to Github pages")]),t._v(" "),a("p",[t._v("I do like to use VueJS so when the VuePress reached version 1.0 with a functional blog theme I had to made a switch. The only problem is that the GitHUb Pages supports only "),a("a",{attrs:{href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jekyll"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution","aria-hidden":"true"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),a("p",[t._v("As I am alsm using Azure DevOps to handle all myt  build the solution is obvious. Hoost my Blog in GiHub Pages and buidl and depoloy it on Azure.")]),t._v(" "),a("h2",{attrs:{id:"step-1-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-deploy","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 1: Deploy")]),t._v(" "),a("p",[t._v("This is preaty simple("),a("a",{attrs:{href:"https://github.com/Assassyn/blog/blob/master/azure-pipelines.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("check it here"),a("OutboundLink")],1),t._v("), just add the yml file with a four task:")]),t._v(" "),a("ul",[a("li",[t._v("install yarn")]),t._v(" "),a("li",[t._v("install dependencies")]),t._v(" "),a("li",[t._v("build vuepress")]),t._v(" "),a("li",[t._v("gather results as an artifact")])]),t._v(" "),a("h2",{attrs:{id:"step-2-publish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-publish","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 2: Publish")]),t._v(" "),a("p",[t._v("Next step is to get the published artifact and push it to GitHub gh-pages branch of repo.")]),t._v(" "),a("p",[t._v("I did divide it into 5 tasks, this is required to make a few step simpler as they could be executed from different directory so the cd command does not have to be used.")]),t._v(" "),a("h3",{attrs:{id:"configure-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-git","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure git")]),t._v(" "),a("p",[t._v("This is required to avoid any possible error during push later")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' git config --global user.email "assassyn@dev.azure.com"\n git config --global user.name "Assasssyn"\n')])])]),a("h3",{attrs:{id:"download-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-repository","aria-hidden":"true"}},[t._v("#")]),t._v(" Download repository")]),t._v(" "),a("p",[t._v("Added a varaible to store the git token, just to make it lottle bit more secure.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$path = "https://$(git_token)@github.com/Assassyn/blog.git"\ngit clone $path\n')])])]),a("h3",{attrs:{id:"change-repo-to-gh-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-repo-to-gh-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Change repo to gh-pages")]),t._v(" "),a("p",[t._v("This step has an additional requirementes to set up the working directyory:\n"),a("img",{attrs:{src:"/iamges/2019-06-21/step3.png",alt:"working directory setup"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout gh-pages\nrm -R *\n")])])]),a("h3",{attrs:{id:"deploy-new-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-new-version","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy new version")]),t._v(" "),a("p",[t._v("Copy the files for a artifact downlaod directory, usually the name selected when creating the  trigger")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mv _Assassyn.blog\\blog_site\\*  blog\\\n")])])]),a("h3",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[t._v("#")]),t._v(" Push")]),t._v(" "),a("p",[t._v("Push code to selected branch and wait for github pages to update")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add * \ngit commit -m "Github Pages deployment $(Build.BuildNumber)"\ngit push\n')])])])])},[],!1,null,null,null);e.default=r.exports}}]);
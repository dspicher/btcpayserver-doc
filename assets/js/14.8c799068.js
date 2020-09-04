(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{446:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup1.c48bfb0b.jpg"},447:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup2.50b4bc2b.jpg"},448:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup3.ab5efa41.jpg"},449:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup4.7b6d391c.jpg"},450:function(t,e,n){t.exports=n.p+"assets/img/RideTheLightning.b51de51a.png"},451:function(t,e,n){t.exports=n.p+"assets/img/RideTheLightningServices.bdcf7e22.png"},452:function(t,e,n){t.exports=n.p+"assets/img/SparkConnect.c32564ac.jpg"},453:function(t,e,n){t.exports=n.p+"assets/img/SparkConnect2.jpg.38b90d2b.png"},607:function(t,e,n){"use strict";n.r(e);var a=n(26),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lightning-network-and-btcpay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-and-btcpay"}},[t._v("#")]),t._v(" Lightning Network and BTCPay")]),t._v(" "),a("p",[t._v("After deploying BTCPay Server, you may want to experiment with an innovative second-layer payment system built on top of Bitcoin protocol - the "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Lightning_Network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lightning Network"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This guide will show you how to set up your Lightning Network node in BTCPay and guide you through the basics.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("Before you proceed, please understand that Lightning Network is still in the experimental stage. Do not put the money you can't afford to lose. There is a high risk of you losing the money.")])])]),t._v(" "),a("p",[t._v("Take time to familiarize yourself with the risk.\n"),a("strong",[t._v("There's no backup for LND or c-lightning keys in BTCPay. Your keys are in a hot-wallet")]),t._v(". This means :")]),t._v(" "),a("ol",[a("li",[t._v("If you erase your BTCPay Server or your machine crashes - you lose all the funds.")]),t._v(" "),a("li",[t._v("If your server gets hacked - a hacker can take all of your funds by accessing your keys.")])]),t._v(" "),a("p",[t._v("While the keys from your Lightning Network don't have a backup and someone can steal them theoretically, your on-chain Bitcoin funds are safe and are never uploaded on the server.")]),t._v(" "),a("p",[t._v("As the technology matures and develops, things like a proper backup will be easier to implement in BTCPay.")]),t._v(" "),a("p",[t._v("BTCPay currently offers two implementations of the Lightning Network:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/lightningnetwork/lnd",target:"_blank",rel:"noopener noreferrer"}},[t._v("LND"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ElementsProject/lightning",target:"_blank",rel:"noopener noreferrer"}},[t._v("c-lightning"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"choosing-the-lightning-network-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choosing-the-lightning-network-implementation"}},[t._v("#")]),t._v(" Choosing the Lightning Network implementation")]),t._v(" "),a("p",[t._v("On the installation, you'll have the option to choose the implementation. For "),a("RouterLink",{attrs:{to:"/LunaNodeWebDeployment/"}},[t._v("web-interface installations")]),t._v(", you can simply select the implementation from the drop-down menu. For "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker"),a("OutboundLink")],1),t._v(" you need to :")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_LIGHTNING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"implementationgoeshere"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ./btcpay-setup.sh -i\n")])])]),a("p",[t._v("For c-lightning use "),a("code",[t._v('export BTCPAYGEN_LIGHTNING="clightning"')]),t._v("\nFor LND use "),a("code",[t._v('export BTCPAYGEN_LIGHTNING="lnd"')])]),t._v(" "),a("p",[t._v("To begin using Lightning, your blockchain needs to be fully synced.")]),t._v(" "),a("h2",{attrs:{id:"connecting-your-internal-lightning-node-in-btcpay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-your-internal-lightning-node-in-btcpay"}},[t._v("#")]),t._v(" Connecting your internal Lightning Node in BTCPay")]),t._v(" "),a("p",[t._v("Regardless of the implementation (c-lightning or LND) you've decided to use, the process of connecting your internal Lightning Node in BTCPay Server is the same.")]),t._v(" "),a("ol",[a("li",[t._v("If you do not have a store, create one.")]),t._v(" "),a("li",[t._v("Store Settings > General Settings > Lightning Network Experimental (located at the bottom of the page, scroll)")]),t._v(" "),a("li",[t._v("Under Crypto tab, select cryptocurrency > Modify.")]),t._v(" "),a("li",[t._v('At the next page, at the bottom under "connection string", click on the "click here" link. Your node information will be automatically added.')]),t._v(" "),a("li",[t._v("Enable. Submit.")]),t._v(" "),a("li",[t._v("Test Connection.")])]),t._v(" "),a("p",[a("strong",[t._v("Your blockchain needs to be fully synced before you try to connect your Lightning Node, otherwise the connection will fail.")])]),t._v(" "),a("figure",[a("img",{attrs:{src:n(446),alt:"LightningNetworkSettup1"}})]),t._v(" "),a("figure",[a("img",{attrs:{src:n(447),alt:"LightningNetworkSettup2"}})]),t._v(" "),a("figure",[a("img",{attrs:{src:n(448),alt:"LightningNetworkSettup3"}})]),t._v(" "),a("figure",[a("img",{attrs:{src:n(449),alt:"LightningNetworkSettup4"}})]),t._v(" "),a("h2",{attrs:{id:"getting-started-with-btcpay-and-lnd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-and-lnd"}},[t._v("#")]),t._v(" Getting Started with BTCPay and LND")]),t._v(" "),a("p",[t._v("The easiest way to use LND implementation with BTCPay is to use "),a("a",{attrs:{href:"https://github.com/ShahanaFarooqui/RTL",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ride The Lightning"),a("OutboundLink")],1),t._v(" (RTL).")]),t._v(" "),a("figure",[a("img",{attrs:{src:n(450),alt:"RideTheLightningServices"}})]),t._v(" "),a("p",[t._v("RTL is a device agnostic web user interface for Lightning Network that allows you to operate your node without leaving BTCPay, from your browser.")]),t._v(" "),a("figure",[a("img",{attrs:{src:n(451),alt:"RideTheLightningServices"}})]),t._v(" "),a("p",[t._v("To initiate RTL in BTCPay, Go to "),a("strong",[t._v("Server Settings > Services > RTL > See information")]),t._v(".")]),t._v(" "),a("p",[t._v("Read the "),a("a",{attrs:{href:"https://medium.com/@suheb.khan/how-to-ride-the-lightning-447af999dcd2",target:"_blank",rel:"noopener noreferrer"}},[t._v("RTL Getting Started Guide"),a("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),a("p",[t._v("For remote use of your LND node on iOS or PC, you can use "),a("a",{attrs:{href:"https://github.com/LN-Zap/zap-tutorials/blob/master/docs/desktop/btcpay-server.mdx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zap wallet integration"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/CWhTOunTb2Q/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=CWhTOunTb2Q","data-id":"CWhTOunTb2Q"}},[a("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/CWhTOunTb2Q?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("Besides Zap, there are a few more wallets that allow remote control of the LND node, "),a("a",{attrs:{href:"https://nayuta.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Nayuta wallet"),a("OutboundLink")],1),t._v(" and the "),a("a",{attrs:{href:"https://github.com/ZeusLN/zeus",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZeusLN"),a("OutboundLink")],1),t._v(". Both of which have not yet extensively been tested by the community.")]),t._v(" "),a("p",[t._v("To remotely control your LND node via web browser, you can use Lightning Joule.")]),t._v(" "),a("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/a9_uHJhnKR4/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=a9_uHJhnKR4","data-id":"a9_uHJhnKR4"}},[a("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/a9_uHJhnKR4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("h3",{attrs:{id:"lnd-commands-lncli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lnd-commands-lncli"}},[t._v("#")]),t._v(" LND Commands lncli")]),t._v(" "),a("p",[t._v("You can use lncli commands like described in their "),a("a",{attrs:{href:"https://api.lightning.community/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),a("OutboundLink")],1),t._v(" but instead of using lncli you use the shell script in of the btcpayserver-docker repository calles bitcoin-lncli.sh.")]),t._v(" "),a("p",[t._v("If you're on Docker make sure you're in docker directory.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n./bitcoin-lncli.sh\n")])])]),a("p",[t._v("So instead of running lncli getinfo you would run "),a("code",[t._v("./bitcoin-lncli.sh getinfo")])]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./bitcoin-lncli.sh --help")]),t._v(" to see a full list of commands or check above mentioned API docs.")]),t._v(" "),a("h2",{attrs:{id:"getting-started-with-btcpay-and-c-lightning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-and-c-lightning"}},[t._v("#")]),t._v(" Getting Started with BTCPay and c-lightning")]),t._v(" "),a("p",[t._v("The most straightforward way to start using the c-lightning implementation in BTCPay is to use "),a("a",{attrs:{href:"https://github.com/shesek/spark-wallet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spark Wallet"),a("OutboundLink")],1),t._v(" integration. Just like Zap for LND, Spark is a graphical interface of your internal c-lightning node.")]),t._v(" "),a("p",[t._v("You can use Spark as an internal or external wallet. Internal wallet allows users to use Spark via the web-browser inside their BTCPay Server. You can also connect externally to a Spark mobile or desktop app just by scanning a QR code.")]),t._v(" "),a("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/uV1R6IQpmg8/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=uV1R6IQpmg8","data-id":"uV1R6IQpmg8"}},[a("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/uV1R6IQpmg8?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("p",[t._v("Go to "),a("strong",[t._v("Server Settings > Services > Spark Server > See information")])]),t._v(" "),a("figure",[a("img",{attrs:{src:n(452),alt:"Accessing Spark wallet"}})]),t._v(" "),a("figure",[a("img",{attrs:{src:n(453),alt:"Accessing Spark wallet"}})]),t._v(" "),a("h3",{attrs:{id:"c-lightning-commands-lightning-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-lightning-commands-lightning-cli"}},[t._v("#")]),t._v(" c-lightning Commands lightning-cli")]),t._v(" "),a("p",[t._v("To use clightning CLI it is the same like above for "),a("code",[t._v("lncli")]),t._v(" but instead you use the shell script "),a("code",[t._v("bitcoin-lightning-cli.sh")])]),t._v(" "),a("p",[t._v("If you're on Docker make sure you're in docker directory.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n./bitcoin-lightning-cli.sh\n")])])]),a("p",[t._v("E.g. to list all commands: "),a("code",[t._v("./bitcoin-lightning-cli.sh help")]),t._v("\nor show info about the node "),a("code",[t._v("./bitcoin-lightning-cli.sh getinfo")])]),t._v(" "),a("h3",{attrs:{id:"lapps-lightning-network-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lapps-lightning-network-apps"}},[t._v("#")]),t._v(" Lapps (Lightning Network Apps)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blockstream.com/2018/03/29/blockstreams-week-of-lapps-ends/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lapps"),a("OutboundLink")],1),t._v(" are applications built on top of the "),a("a",{attrs:{href:"https://blockstream.com/2018/01/16/lightning-charge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lightning Charge"),a("OutboundLink")],1),t._v(", a complimentary package that allows users and developers to easier use and develop on top of c-lightning. If you decided to use c-lightning, you can easily connect your BTCPay to any of the Lapps.")]),t._v(" "),a("p",[t._v("BTCPay exposes all the necessary information required to connect your internal BTCPay c-lightning node to a Lightning Network App.  Go to Server Settings > Services > Lightning charge server > See information > Credentials.")]),t._v(" "),a("p",[t._v("Below are videos that showcase how to connect some of the lapps to your BTCPay.")]),t._v(" "),a("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/6EHNq1anD1k/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=6EHNq1anD1k","data-id":"6EHNq1anD1k"}},[a("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/6EHNq1anD1k?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/ZbM3jcxau0o/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=ZbM3jcxau0o","data-id":"ZbM3jcxau0o"}},[a("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/ZbM3jcxau0o?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),a("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/EYrsU3LGpbI/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=EYrsU3LGpbI","data-id":"EYrsU3LGpbI"}},[a("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/EYrsU3LGpbI?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);e.default=o.exports}}]);
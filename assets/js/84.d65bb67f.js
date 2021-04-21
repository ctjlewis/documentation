(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{487:function(t,a,s){"use strict";s.r(a);var n=s(41),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"multipool-autoswap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multipool-autoswap"}},[t._v("#")]),t._v(" Multipool Autoswap")]),t._v(" "),s("Zoe-Version"),t._v(" "),s("h5",{attrs:{id:"view-the-code-on-github-last-updated-2020-09-14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-the-code-on-github-last-updated-2020-09-14"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/2a8b0fc2ece7344604bcc23b295367cd871f6995/packages/zoe/src/contracts/multipoolAutoswap/multipoolAutoswap.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("View the code on Github"),s("OutboundLink")],1),t._v(" (Last updated: 2020-09-14)")]),t._v(" "),s("h5",{attrs:{id:"view-all-contracts-on-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-all-contracts-on-github"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/tree/master/packages/zoe/src/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("View all contracts on Github"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Multipool Autoswap is an automated market maker (AMM) that supports\nmultiple liquidity pools and direct exchanges across pools.")]),t._v(" "),s("p",[t._v("Each liquidity pool maintains a price for exchanges between the central token and a\nsecondary token. Secondary tokens can be exchanged with each other, but only through\nthe central token. For example, if simoleans and moola are two token types and bucks\nis the central currency, a swap giving simoleans and wanting moola would first use\nthe pool (simoleans, bucks) then the pool (moola, bucks). There are no direct\nliquidity pools between two secondary tokens.")]),t._v(" "),s("p",[t._v("There should only need to be one instance of this contract, so liquidity can be\nshared as much as possible. Each secondary currency has a separate pool of liquidity.")]),t._v(" "),s("p",[t._v("When the contract is instantiated, the terms specify the central token.  Invitations\nfor adding and removing liquidity and for making trades are available by calling\nmethods on the publicFacet. Other publicFacet operations support querying prices and\nthe sizes of pools. Create new pools with "),s("code",[t._v("addPool()")]),t._v(".")]),t._v(" "),s("p",[t._v("When making trades or requesting prices, the caller must specify that either the\ninput price (swapIn, getInputPrice) or the output price (swapOut, getOutputPrice) is\nfixed. For swaps, the required keywords are "),s("code",[t._v("In")]),t._v(" for the trader's "),s("code",[t._v("give")]),t._v(" amount, and\n"),s("code",[t._v("Out")]),t._v(" for the trader's "),s("code",[t._v("want")]),t._v(" amount.  "),s("code",[t._v("getInputPrice()")]),t._v(" and "),s("code",[t._v("getOutputPrice()")]),t._v(" each\ntake an amount for the currency that is being specified, and a brand to indicate the\ncurrency of the desired amount.")]),t._v(" "),s("p",[t._v("When adding and removing liquidity, the keywords are "),s("code",[t._v("Central")]),t._v(", "),s("code",[t._v("Secondary")]),t._v(", and\n"),s("code",[t._v("Liquidity")]),t._v(". Adding liquidity uses "),s("code",[t._v("Central")]),t._v(" and "),s("code",[t._v("Secondary")]),t._v(" in the "),s("code",[t._v("give")]),t._v(" section\nand "),s("code",[t._v("Liquidity")]),t._v(" in the "),s("code",[t._v("want")]),t._v(" section. Removing liquidity reverses the keywords:\n"),s("code",[t._v("Liquidity")]),t._v(" in the "),s("code",[t._v("give")]),t._v(" section, and "),s("code",[t._v("Central")]),t._v(" and "),s("code",[t._v("Secondary")]),t._v(" in the want\nsection. If the proposal specifies amounts directly taken from a recent quote, and\nany trading has intervened, the trade is unlikely to be accepted. You can either\nspecify limits on how far the price may have moved, or specify limits of zero and\ntrust the contract to trade fairly.")]),t._v(" "),s("p",[t._v("Transactions that don't require an invitation include "),s("code",[t._v("addPool()")]),t._v(" and the queries\n("),s("code",[t._v("getInputPrice()")]),t._v(", "),s("code",[t._v("getOutputPrice()")]),t._v(", "),s("code",[t._v("getPoolAllocation()")]),t._v(",\n"),s("code",[t._v("getLiquidityIssuer()")]),t._v(", and "),s("code",[t._v("getLiquiditySupply()")]),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"the-multipoolautoswap-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-multipoolautoswap-api"}},[t._v("#")]),t._v(" The MultipoolAutoswap API")]),t._v(" "),s("p",[t._v("These examples use Bucks as the central token. Moola and Simoleans are secondary\ncurrencies.")]),t._v(" "),s("h3",{attrs:{id:"trading-with-multipoolautoswap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trading-with-multipoolautoswap"}},[t._v("#")]),t._v(" Trading with MultipoolAutoswap")]),t._v(" "),s("p",[t._v("Once trading pools have been set up, a new trader can interact with the market by\nasking for the current price, making an invitation, and making an offer. If Sara has\nSimoleans and needs 275 Moola for a deal she has negotiated, she can use\ngetOutputPrice() to get a quote.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputPrice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("275n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" simoleansBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Let's assume the quote says she needs to provide 216 Simoleans. Sara believes the\nprice is somewhat volatile, and she doesn't want to make repeated calls, so she pads\nher offer. If the appropriate pools don't exist, she'll get an error ("),s("code",[t._v("brands were not recognized")]),t._v("). If someone sells a lot of Simoleans into the pool just ahead of\nher, the price will increase, and she'll have to decide whether to deposit more\nSimoleans or wait for the price to stabilize. If someone buys a lot of Simoleans just\nahead of her order, she'll get the 275 Moola for less and will get some Simoleans\nback.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" saraProposal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("275n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" In"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("simoleanBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("220n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" swapInvitation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeSwapOutInvitation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" simoleanPayment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" In"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" saraSimoleanPurse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withdraw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("simoleanBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("220n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" saraSeat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("swapInvitation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" saraProposal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" simoleanPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" saraResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" saraSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOfferResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If the result is "),s("code",[t._v("Swap successfully completed.")]),t._v(", she got the Moola for 220 Simoleans\nor less (she'll want to deposit any refund). Otherwise the market price moved against\nher, and she'll have to check the price again and make another offer.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moolaProceeds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saraSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'In'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" simoleanRefund "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saraSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Out'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moolaProceedsAmount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saraMoolaPurse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaProceeds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saraSimoleanPurse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("simoleanRefund"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"creating-a-new-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-pool"}},[t._v("#")]),t._v(" Creating a new Pool")]),t._v(" "),s("p",[t._v("When the contract is first instantiated, there won't be any pools ready for\ntrading. "),s("code",[t._v("addPool()")]),t._v(" adds a new currency, which can then be funded. When a pool is\nfirst funded, there's no other basis on which to decide how much liquidity to create,\nso the liquidity amount equals the amount of the central token in the offer.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moolaLiquidityIssuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Moola'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Alice decides that the current rate in the external market is 2 Moola for each\nBuck, so she deposits twice as many Moola as Bucks.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aliceProposal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Liquidity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("moolaLiquidity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Secondary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Central"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bucksBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" alicePayments "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Secondary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" aliceMoolaPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Central"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" aliceBucksPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aliceAddLiquidityInvitation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeAddLiquidityInvitation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addLiquiditySeat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  aliceAddLiquidityInvitation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  aliceProposal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alicePayments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"adding-liquidity-to-an-existing-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-liquidity-to-an-existing-pool"}},[t._v("#")]),t._v(" Adding Liquidity to an Existing Pool")]),t._v(" "),s("p",[t._v("When adding or removing liquidity to pools that have already been established, the\namounts deposited must be in proportion to the current balances in the pool. The\ncalculation is based on the amount of the "),s("code",[t._v("Central")]),t._v(" asset. The "),s("code",[t._v("Secondary")]),t._v(" assets\nmust be added in proportion.  If less "),s("code",[t._v("Secondary")]),t._v(" is provided than required, the\noffer is exited with no trade. If more of the secondary is provided than is required,\nthe excess is returned.")]),t._v(" "),s("p",[t._v("Bob calls "),s("code",[t._v("getPoolAllocation()")]),t._v(" to find the relative levels. Let's say the answer is\nthat the current ratio is 1234 Moola to 1718 Bucks.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moolaPoolAlloc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPoolAllocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bucksValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moolaPoolAlloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Central"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moolaValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moolaPoolAlloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("secondary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now he can add liquidity.  The price ratio changes when anyone trades with the pool,\nso he should leave some flexibility in the proposal. The pool calculates the amount\nof "),s("code",[t._v("secondary")]),t._v(" currency required based on the amount of "),s("code",[t._v("central")]),t._v(" currency provided.\nBob bumps up the amount of Moola he'll contribute by a little. If he was concerned\nabout how much liquidity this would produce, he would calculate it and specify a rough\nfigure, but there's no need in this case.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobProposal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Central"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bucksBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Secondary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moolaBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Liquidity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("liquidityBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" onDemand"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobPayments "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Central"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bobBucksPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Secondary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bobMoolaPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" seat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addLiquidityInvite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobProposal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobPayments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
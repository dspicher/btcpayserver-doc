(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{533:function(e,t,a){e.exports=a.p+"assets/img/Wallets.c7958da8.png"},534:function(e,t,a){e.exports=a.p+"assets/img/WallettTransactions.b39a5ee7.png"},535:function(e,t,a){e.exports=a.p+"assets/img/WalletSend.30300b62.png"},536:function(e,t,a){e.exports=a.p+"assets/img/WalletRBF.63921f4f.png"},537:function(e,t,a){e.exports=a.p+"assets/img/CoinSelection.e5233b84.png"},538:function(e,t,a){e.exports=a.p+"assets/img/ScanWallet.59bbfac4.png"},539:function(e,t,a){e.exports=a.p+"assets/img/WalletReceive.24e1641c.png"},540:function(e,t,a){e.exports=a.p+"assets/img/WalletRescan.f5078ef8.png"},541:function(e,t,a){e.exports=a.p+"assets/img/WalletRescanProgress.f54b3cb7.png"},636:function(e,t,a){"use strict";a.r(t);var n=a(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"btcpay-server-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-wallet"}},[e._v("#")]),e._v(" BTCPay Server Wallet")]),e._v(" "),n("p",[e._v("BTCPay Server has a built in, full-node reliant wallet that allows easier funds management.")]),e._v(" "),n("p",[e._v("Each "),n("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("store")]),e._v("'s configured cryptocurrency has a separate wallet displayed on the wallets page. A wallet can be accessed by clicking "),n("strong",[e._v("Wallets")]),e._v(" from the top menu. To access a particular wallet, click "),n("strong",[e._v("Manage")]),e._v(".")],1),e._v(" "),n("figure",[n("img",{attrs:{src:a(533),alt:"Wallets Page BTCPay"}})]),e._v(" "),n("h2",{attrs:{id:"wallet-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet-features"}},[e._v("#")]),e._v(" Wallet features")]),e._v(" "),n("p",[e._v("The wallet contains the following features:")]),e._v(" "),n("ol",[n("li",[e._v("Transactions")]),e._v(" "),n("li",[e._v("Send")]),e._v(" "),n("li",[e._v("Receive")]),e._v(" "),n("li",[e._v("Pull payments")]),e._v(" "),n("li",[e._v("Payouts")]),e._v(" "),n("li",[e._v("Re-scan")]),e._v(" "),n("li",[e._v("PSBT")]),e._v(" "),n("li",[e._v("Settings")])]),e._v(" "),n("h3",{attrs:{id:"transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),n("p",[e._v("An overview of the incoming (green), outgoing (red) and unconfirmed (grayed out) transactions displayed together with timestamps and balances, sorted by date. You can click on the tx ID to preview the transaction on the block explorer.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(534),alt:"Individual Wallet"}})]),e._v(" "),n("h4",{attrs:{id:"transaction-labels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-labels"}},[e._v("#")]),e._v(" Transaction Labels")]),e._v(" "),n("p",[e._v("The table below lists the various transaction labels used by BTCPay.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Transaction Type")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("invoice")]),e._v(" "),n("td",[e._v("Payment was received through an invoice")])]),e._v(" "),n("tr",[n("td",[e._v("payjoin")]),e._v(" "),n("td",[e._v("Not paid, invoice timer still has not expired")])]),e._v(" "),n("tr",[n("td",[e._v("payjoin-exposed")]),e._v(" "),n("td",[e._v("Utxo was exposed through an invoice payjoin proposal")])]),e._v(" "),n("tr",[n("td",[e._v("payout")]),e._v(" "),n("td",[e._v("Payment was sent through a payout or refund")])])])]),e._v(" "),n("p",[e._v("You can also create your own "),n("RouterLink",{attrs:{to:"/FAQ/FAQ-Wallet/#how-to-add-custom-labels-and-comments-to-transactions"}},[e._v("custom transaction labels and comments")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"send"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[e._v("#")]),e._v(" Send")]),e._v(" "),n("p",[e._v("The Send function allows spending of the funds from the BTCPay wallet.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(535),alt:"Send from the Wallet"}})]),e._v(" "),n("h4",{attrs:{id:"signing-a-transaction-spending"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction-spending"}},[e._v("#")]),e._v(" Signing a transaction (spending)")]),e._v(" "),n("p",[e._v("To spend the funds, you are required to "),n("strong",[e._v("sign")]),e._v(" the transaction. Transactions can be signed with:")]),e._v(" "),n("ul",[n("li",[e._v("HD Private key or mnemonic seed")]),e._v(" "),n("li",[e._v("Wallet supporting PSBT")]),e._v(" "),n("li",[e._v("Hardware Wallet")]),e._v(" "),n("li",[e._v("Hot Wallet")])]),e._v(" "),n("h5",{attrs:{id:"signing-with-hd-private-key-or-mnemonic-seed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-hd-private-key-or-mnemonic-seed"}},[e._v("#")]),e._v(" Signing with HD Private Key or mnemonic seed")]),e._v(" "),n("p",[e._v("If you set up an "),n("RouterLink",{attrs:{to:"/WalletSetup/#use-an-existing-wallet"}},[e._v("existing wallet with your BTCPay Server")]),e._v(", you can spend the funds by inputting your private key into an appropriate field. Make sure to set a proper "),n("code",[e._v("AccountKeyPath")]),e._v(" in Wallet > Settings otherwise you won't be able to spend.")],1),e._v(" "),n("h5",{attrs:{id:"signing-with-a-wallet-supporting-psbt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-wallet-supporting-psbt"}},[e._v("#")]),e._v(" Signing with a wallet supporting PSBT")]),e._v(" "),n("p",[e._v("PSBT (Partially Signed Bitcoin transactions) are supported and can be signed with PSBT compatible wallets.")]),e._v(" "),n("p",[e._v("Check this tutorial on how to "),n("RouterLink",{attrs:{to:"/ColdCardWallet/#spending-from-btcpay-server-wallet-with-coldcard-psbt"}},[e._v("sign a transaction with ColdCard Hardware Wallet")]),e._v(" completely air-gaped.")],1),e._v(" "),n("h5",{attrs:{id:"signing-with-a-hardware-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-hardware-wallet"}},[e._v("#")]),e._v(" Signing with a hardware wallet")]),e._v(" "),n("p",[e._v("BTCPay Server has built-in hardware wallet support allowing you to use your hardware wallet with BTCPay, without leaking information to third-party apps or servers.")]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/Vault/"}},[e._v("Check instructions")]),e._v(" on how to set up and sign with a "),n("a",{attrs:{href:"https://github.com/bitcoin-core/HWI#device-support",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatible hardware wallet"),n("OutboundLink")],1),e._v(".")],1),e._v(" "),n("h5",{attrs:{id:"signing-with-a-hot-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-a-hot-wallet"}},[e._v("#")]),e._v(" Signing with a hot wallet")]),e._v(" "),n("p",[e._v("If you "),n("RouterLink",{attrs:{to:"/CreateWallet/"}},[e._v("created a new wallet")]),e._v(" when setting up your store and enabled it as a "),n("RouterLink",{attrs:{to:"/HotWallet/"}},[e._v("hot wallet")]),e._v(", you can sign a transaction with a private key stored on your server.")],1),e._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Using the hot wallet feature comes with its own security implications, please be sure to read and understand them over at the "),n("RouterLink",{attrs:{to:"/HotWallet/"}},[e._v("Hot Wallet documentation")])],1)]),e._v(" "),n("h4",{attrs:{id:"advanced-settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-settings"}},[e._v("#")]),e._v(" Advanced Settings")]),e._v(" "),n("p",[e._v("Certain wallet features are available for advanced users. Toggle the "),n("code",[e._v("Advanced Settings")]),e._v(" within the "),n("code",[e._v("Send")]),e._v(" tab to preview them.")]),e._v(" "),n("h5",{attrs:{id:"dont-create-utxo-change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dont-create-utxo-change"}},[e._v("#")]),e._v(" Don't create UTXO change")]),e._v(" "),n("p",[e._v("This option is available in the "),n("code",[e._v("Advanced mode")]),e._v(" of the "),n("code",[e._v("Send")]),e._v(" page.")]),e._v(" "),n("p",[e._v("It is a privacy enhancing feature which is useful when you're sending funds to another wallet of yours or to an exchange. It makes sure that no change UTXO is created by "),n("strong",[e._v("rounding up")]),e._v(" the amount sent.")]),e._v(" "),n("p",[e._v("By default this feature is disabled, so if your wallet has an UTXO of "),n("code",[e._v("1.1 BTC")]),e._v(" and you input an amount equals to "),n("code",[e._v("1.0 BTC")]),e._v(", the resulting transaction will have two outputs "),n("code",[e._v("0.1 BTC")]),e._v(" of change, and "),n("code",[e._v("1.0 BTC")]),e._v(" to your destination.")]),e._v(" "),n("p",[e._v("Blockchain analysis will understand that those "),n("code",[e._v("0.1 BTC")]),e._v(" of change belong to the same entity which controlled "),n("code",[e._v("1.1 BTC")]),e._v(" before, and can track the future purchase you make under the same pattern.")]),e._v(" "),n("p",[e._v("By enabling this feature, BTCPay Server wallet will round up the amount sent to "),n("code",[e._v("1.1 BTC")]),e._v(" such that no change output is sent back to you.")]),e._v(" "),n("p",[e._v("Warning: Despite the fact, in this example, that you entered "),n("code",[e._v("1.0")]),e._v(" in the amount field, the amount that will really be sent to your destination will be "),n("code",[e._v("1.1 BTC")]),e._v(".")]),e._v(" "),n("h5",{attrs:{id:"rbf-replace-by-fee"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rbf-replace-by-fee"}},[e._v("#")]),e._v(" RBF (Replace-By-Fee)")]),e._v(" "),n("p",[e._v("Replace-By-Fee (RBF) is a Bitcoin protocol feature that allows you to replace a previously broadcast transaction (while unconfirmed) to randomize your wallet's transaction fingerprint, or simply for replacing it with a higher fee rate to move the transaction higher in the queue of confirmation (mining) priority. This will effectively replace the original transaction as the higher fee rate will be prioritized and once confirmed, invalidating the original one (double spend).")]),e._v(" "),n("p",[e._v("Press the "),n("code",[e._v("Advanced Settings")]),e._v(" button to view the RBF options:")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(536),alt:"RBF Options"}})]),e._v(" "),n("ul",[n("li",[e._v("Option 1 (Enabled by Default): Allow the transaction to be replaced automatically for randomization of transaction fingerprint (increased privacy)")]),e._v(" "),n("li",[e._v("Option 2: Yes, Allow the transaction to be replaced explicitly (not replaced by default)")]),e._v(" "),n("li",[e._v("Option 3: No, Do not allow the transaction to be replaced (ignore replacement)")])]),e._v(" "),n("h5",{attrs:{id:"coin-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coin-selection"}},[e._v("#")]),e._v(" Coin Selection")]),e._v(" "),n("p",[e._v("Coin selection is an advanced privacy-enhancing feature that allows you to specifically select coins that you would like to spend when crafting a transaction. For example, paying with coins that are fresh from a coinjoin mix.")]),e._v(" "),n("p",[e._v("To make the selection easier, coin-selection works natively with the wallet labels feature. This allows you to label any incoming funds for smoother UTXO management and spending.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(537),alt:"Coin Selection"}})]),e._v(" "),n("h5",{attrs:{id:"other-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-features"}},[e._v("#")]),e._v(" Other features")]),e._v(" "),n("h6",{attrs:{id:"camera-qr-scan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#camera-qr-scan"}},[e._v("#")]),e._v(" Camera QR scan")]),e._v(" "),n("p",[e._v("Scan option in wallet (camera icon in send screen) lets you use your device’s camera to scan a QR code containing an address or BIP21 payment link. It auto-populates the sending information so that you don’t have to manually copy-paste an address and amount.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(538),alt:"QR Scan"}})]),e._v(" "),n("h6",{attrs:{id:"paste-bip21-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#paste-bip21-address"}},[e._v("#")]),e._v(" Paste BIP21 address")]),e._v(" "),n("p",[e._v("This option decodes a BIP21 payment link. It's useful when you're trying to pay a "),n("RouterLink",{attrs:{to:"/Payjoin/"}},[e._v("Payjoin")]),e._v(" invoice.")],1),e._v(" "),n("h3",{attrs:{id:"receive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receive"}},[e._v("#")]),e._v(" Receive")]),e._v(" "),n("p",[e._v("The Receive tab generates an unused address which can be used to receive payments. The same can be achieved by generating an invoice (Invoices > Create new invoice).")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(539),alt:"Wallet Receive"}})]),e._v(" "),n("h3",{attrs:{id:"pull-payments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pull-payments"}},[e._v("#")]),e._v(" Pull Payments")]),e._v(" "),n("p",[e._v("This feature gives you the ability to create a Pull Payment, so that an outside individual may request to "),n("code",[e._v("pull")]),e._v(" funds from your wallet.")]),e._v(" "),n("p",[e._v("For more information, see "),n("RouterLink",{attrs:{to:"/PullPayments/"}},[e._v("Pull Payments")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"payouts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#payouts"}},[e._v("#")]),e._v(" Payouts")]),e._v(" "),n("p",[e._v("This section lets you manage Pull Payments and gives you the ability to accept or decline payouts requested by outside individuals.")]),e._v(" "),n("p",[e._v("For more information, see "),n("RouterLink",{attrs:{to:"/PullPayments/#approve-and-pay-a-payout"}},[e._v("Payouts")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"re-scan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#re-scan"}},[e._v("#")]),e._v(" Re-scan")]),e._v(" "),n("p",[e._v("The Rescan relies on Bitcoin Core 0.17.0's "),n("code",[e._v("scantxoutset")]),e._v(" to scan the current state of the blockchain (called UTXO Set) for coins belonging to the configured derivation scheme.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(540),alt:"Wallet Rescan"}})]),e._v(" "),n("p",[e._v("Wallet re-scan solves two critical problems for BTCPay users:")]),e._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/FAQ/FAQ-Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("Gap limit")])],1),e._v(" "),n("li",[e._v("Importing a previously used wallet")])]),e._v(" "),n("p",[n("strong",[e._v("Gap limit")]),e._v(": Most of the wallets have the gap limit set to 20. This means that if a merchant receives 21 or more consecutive unpaid invoices, those wallets show the incorrect balance and some transactions may not be visible.")]),e._v(" "),n("p",[n("strong",[e._v("Wallet import")]),e._v(": When users add a derivation scheme of a wallet that had transactions in the past (previously used wallet), BTCPay won't be able to show the balance and transactions from the past.")]),e._v(" "),n("figure",[n("img",{attrs:{src:a(541),alt:"Wallet rescan progress"}})]),e._v(" "),n("p",[e._v("Re-scan is a feature that solves both of these problems. Once the scan is complete, BTCPay Server will show the correct balance, along with the past transactions of the wallet.")]),e._v(" "),n("p",[e._v("Wallet re-scan requires access to the full node which means that this function is only available for server owners.")]),e._v(" "),n("p",[e._v("Users who use a third party host should use a newly generated xpub key and also use an external wallet like Electrum which allows them to increase the gap limit.")]),e._v(" "),n("h3",{attrs:{id:"psbt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#psbt"}},[e._v("#")]),e._v(" PSBT")]),e._v(" "),n("p",[e._v("In the Partially Signed Bitcoin Transactions (PSBT) tab, you can upload and decode any PSBT, for example an earlier signed PSBT from external wallet and broadcast it via BTCPay Wallet. For more information on PSBT "),n("RouterLink",{attrs:{to:"/ColdCardWallet/#spending-from-btcpay-server-wallet-with-coldcard-psbt"}},[e._v("check this link")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),n("p",[e._v("In the wallet settings tab you can adjust certain settings. If you've configured your wallet by "),n("RouterLink",{attrs:{to:"/CreateWallet/"}},[e._v("creating a new wallet")]),e._v(" or using an existing wallet via the "),n("RouterLink",{attrs:{to:"/Vault/"}},[e._v("hardware wallet integration")]),e._v(" these settings will be pre-configured.")],1),e._v(" "),n("p",[e._v("If you manually added the extended public key from an external wallet, you'd need to adjust "),n("code",[e._v("AccountKeyPath")]),e._v(" that you can find in your external wallet, for example "),n("code",[e._v("m/84'/0'/0'")]),e._v(" to be able to spend from the BTCPay Wallet.")])])}),[],!1,null,null,null);t.default=s.exports}}]);
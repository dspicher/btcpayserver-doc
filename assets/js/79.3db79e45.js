(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{619:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"raspberry-pi-3-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-3-deployment"}},[t._v("#")]),t._v(" Raspberry Pi 3 Deployment")]),t._v(" "),a("p",[t._v("This document guides you step by step on how to run BTCPay Server on a Raspberry Pi 3. See here the "),a("RouterLink",{attrs:{to:"/RPi4/"}},[t._v("Raspberry Pi 4 instructions")])],1),t._v(" "),a("p",[t._v("The overall process is as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Purchase and assemble hardware")]),t._v(" "),a("li",[t._v("Install Raspbian Lite operating system, configure networking")]),t._v(" "),a("li",[t._v("Install BTCPayServer-Docker")])]),t._v(" "),a("p",[t._v("BTCPayServer can be successfully installed on the following hardware:")]),t._v(" "),a("ol",[a("li",[t._v("Raspberry Pi 3 Model B+"),a("br")])]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://www.raspberrypi.org/app/uploads/2018/03/770A5842-462x322.jpg",alt:"Raspberry Pi 3 Model B+",title:"Raspberry Pi 3 Model B+"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("64GB SanDisk Ultra Fit USB Flash Drive"),a("br"),t._v(" "),a("img",{attrs:{src:"https://drh1.img.digitalriver.com/DRHM/Storefront/Company/sandiskus/images/product/detail/SDCZ430-210.png",alt:"64 GB SanDisk Ultra Fit USB Flash Drive",title:"SanDisk Ultra Fit USB 3.1 Flash Drive"}})])]),t._v(" "),a("li",[a("p",[t._v("16 GB SanDisk Ultra MicroSDXC Card"),a("br"),t._v(" "),a("img",{attrs:{src:"https://drh2.img.digitalriver.com/DRHM/Storefront/Company/sandiskus/images/product/detail/ultra-microsd-16gb-sandisk-210x210.png",alt:"16 GB SanDisk Ultra MicroSDXC Card",title:"16 GB SanDisk Ultra MicroSDXC Card"}})])])]),t._v(" "),a("p",[t._v("Other requirements are as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Internet connection")]),t._v(" "),a("li",[t._v("Static IP")]),t._v(" "),a("li",[t._v("Domain Name")]),t._v(" "),a("li",[t._v("Ability to open ports "),a("code",[t._v("80")]),t._v(", "),a("code",[t._v("443")]),t._v(", "),a("code",[t._v("9735")]),t._v(" on your router")])]),t._v(" "),a("p",[t._v("Once you have the hardware and other requirements, you're ready to begin!")]),t._v(" "),a("h2",{attrs:{id:"here-are-the-setup-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-are-the-setup-instructions"}},[t._v("#")]),t._v(" Here are the setup instructions:")]),t._v(" "),a("p",[a("strong",[t._v("Step 1")]),t._v(" - Configure your domain name.")]),t._v(" "),a("p",[t._v("Login to your domain registrar and create an "),a("code",[t._v("A")]),t._v(" record pointing your domain to the external IP address of your Pi's internet connection:")]),t._v(" "),a("ul",[a("li",[t._v("IP Address: Visit "),a("a",{attrs:{href:"https://ipchicken.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipchicken.com"),a("OutboundLink")],1),t._v(' or search the web for "what\'s my ip" from any device on the network')]),t._v(" "),a("li",[t._v("Domain / Hostname: "),a("code",[t._v("btcpay.YourDomain.com")]),t._v(". Name the subdomain where BTCPayServer will run (e.g. "),a("code",[t._v("btcpay")]),t._v(").")]),t._v(" "),a("li",[t._v("TTL: Shortest, or Default")])]),t._v(" "),a("p",[t._v("It can take several hours for DNS changes to propagate worldwide, so you should do this step first.")]),t._v(" "),a("p",[a("strong",[t._v("Step 2")]),t._v(" - Assemble your Pi.")]),t._v(" "),a("p",[a("strong",[t._v("Step 3")]),t._v(" - Get on a computer with a microSD card slot, or a USB port if you have a "),a("a",{attrs:{href:"https://www.canakit.com/mini-micro-sd-usb-reader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("USB-microSD adapter"),a("OutboundLink")],1),t._v(". Download and extract "),a("a",{attrs:{href:"https://downloads.raspberrypi.org/raspbian_lite_latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspbian Buster Lite"),a("OutboundLink")],1),t._v(" to this machine.")]),t._v(" "),a("p",[a("strong",[t._v("Step 4")]),t._v(" - On this same computer, download and install "),a("a",{attrs:{href:"https://etcher.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Etcher"),a("OutboundLink")],1),t._v(". Etcher is used to 'flash' Operating System disk images to SD cards and USB drives. "),a("strong",[t._v("⚠️ 'Flashing' a drive wipes it completely; be careful")]),t._v(".")]),t._v(" "),a("p",[t._v("In this case, we will be using Etcher to flash your microSD card with the downloaded Raspbian Lite OS. Plug in the microSD card, and run Etcher. Select the unzipped Raspbian OS, select your microSD card, and confirm to flash it.")]),t._v(" "),a("p",[a("strong",[t._v("Step 5")]),t._v(" - On this same computer, "),a("strong",[t._v("⚠️ before you plug the SD card into your Pi")]),t._v(", create an empty file named "),a("code",[t._v("ssh")]),t._v(" in the boot partition of the SD card.")]),t._v(" "),a("ul",[a("li",[t._v("On Mac and Linux, use "),a("code",[t._v("touch ssh")]),t._v(" in the card's root directory via "),a("code",[t._v("Terminal")])]),t._v(" "),a("li",[t._v("On Windows, use "),a("code",[t._v("type nul > ssh")]),t._v(" in the card's root directory via "),a("code",[t._v("cmd")])])]),t._v(" "),a("p",[a("strong",[t._v("Step 6")]),t._v(" - Insert your microSD card and flash drive into the Pi; connect the network cable and power supply.")]),t._v(" "),a("p",[a("strong",[t._v("Step 7")]),t._v(" - From another computer, use an SSH client ("),a("code",[t._v("ssh")]),t._v(" on Mac and Linux, "),a("a",{attrs:{href:"https://putty.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PuTTY"),a("OutboundLink")],1),t._v(" on Windows) to connect to your Raspberry Pi:")]),t._v(" "),a("ul",[a("li",[t._v("hostname: "),a("code",[t._v("raspberrypi.local")])]),t._v(" "),a("li",[t._v("username: "),a("code",[t._v("pi")])]),t._v(" "),a("li",[t._v("password: "),a("code",[t._v("raspberry")])])]),t._v(" "),a("p",[t._v("So: "),a("code",[t._v("ssh pi@raspberrypi.local")]),t._v(".")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("raspberrypi.local")]),t._v(" doesn't work, you will have to either look up the Pi's IP address on your router, or run "),a("code",[t._v("ifconfig")]),t._v(" on the Pi directly for the "),a("code",[t._v("eth0")]),t._v(" "),a("code",[t._v("inet")]),t._v(" address.")]),t._v(" "),a("p",[a("strong",[t._v("Step 8 - ⚠️ IMPORTANT!")]),t._v(" - Change your password:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Step 9")]),t._v(" - Give your Pi a static IP address and a DHCP reservation on your local network, via your router. Optionally, setup WiFi. There are a few different ways to do this and you will find a ton of articles online. Here's a pretty simple one to follow: "),a("a",{attrs:{href:"https://electrondust.com/2017/11/25/setting-raspberry-pi-wifi-static-ip-raspbian-stretch-lite/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setting up Raspberry Pi WiFi with Static IP on Raspbian Stretch Lite"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To get your router's IP:")]),t._v(" "),a("ul",[a("li",[t._v("On Linux: "),a("code",[t._v("ip route | grep default")])]),t._v(" "),a("li",[t._v("On Mac: "),a("code",[t._v("netstat -nr | grep default")])]),t._v(" "),a("li",[t._v("On Windows: "),a("code",[t._v('ipconfig | findstr /i "Gateway"')])])]),t._v(" "),a("p",[a("strong",[t._v("Step 10")]),t._v(" - Log into your router and forward ports "),a("code",[t._v("80")]),t._v(", "),a("code",[t._v("443")]),t._v(", and "),a("code",[t._v("9735")]),t._v(' to your Pi\'s local IP address. Every router is different and you should be able to find instructions for your router by searching the web for "Port Forwarding + {your router make and model}".')]),t._v(" "),a("p",[a("strong",[t._v("Step 11")]),t._v(" - Install "),a("code",[t._v("fail2ban")]),t._v(" and "),a("code",[t._v("git")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("fail2ban")]),t._v(" bans IPs that attempt to connect to your server and show malicious signs. "),a("code",[t._v("git")]),t._v(" allows you to clone and manage repositories on github.com.")]),t._v(" "),a("p",[t._v("So, open a new terminal window and type the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y fail2ban "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),a("p",[a("strong",[t._v("⚠️ Note for beginners:")]),t._v(" Run all commands in these instructions "),a("strong",[t._v("one line at a time")]),t._v("!")]),t._v(" "),a("p",[a("strong",[t._v("Step 12")]),t._v(" - Install "),a("code",[t._v("ufw")]),t._v(" (Uncomplicated Firewall) and allow only specific ports. UFW is a user-friendly frontend for managing iptables firewall rules and its main goal is to make managing iptables easier, or as the name says: uncomplicated.")]),t._v(" "),a("p",[t._v("Install UFW:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ufw\n")])])]),a("p",[t._v("This command allows SSH connections from internal networks only:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0/8 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0/12 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/16 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".0.0/16 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from fc00::/7 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from fe80::/10 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow from ff00::/8 to any port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" proto tcp\n")])])]),a("p",[t._v("These ports need to be accessible from anywhere (The default subnet is 'any' unless you specify one):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9735")]),t._v("\n")])])]),a("p",[t._v("Verify your configuration:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw status\n")])])]),a("p",[t._v("Enable your firewall:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Step 13")]),t._v(" - Reformat flash drive, to be configured as swap space.")]),t._v(" "),a("p",[a("strong",[t._v("⚠️ Warning:")]),t._v(" Using any SD card for swap space "),a("strong",[t._v("kills it quickly!")]),t._v(". Instead, use a flash drive, as the instructions discuss.")]),t._v(" "),a("p",[t._v("The command "),a("code",[t._v("sudo fdisk -l")]),t._v(" shows a list of the connected storage devices. Assuming you only have one flash drive connected, it will be\ncalled "),a("code",[t._v("/dev/sda")]),t._v(". Double-check that "),a("code",[t._v("/dev/sda")]),t._v(" exists, and that its storage capacity matches your flash memory.")]),t._v(" "),a("p",[t._v("Delete existing flash drive partition:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" /dev/sda\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'd'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'w'")]),t._v("\n")])])]),a("p",[t._v("Create new primary flash drive partition:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" /dev/sda\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'n'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'p'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press '1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'enter'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'enter'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Press 'w'")]),t._v("\n")])])]),a("p",[t._v("Format partition as ext4:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mkfs.ext4 /dev/sda1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create folder for mount.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /mnt/usb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Look up UUID of flash drive.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" blkid -s UUID -o value /dev/sda1"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add mount to fstab.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UUID='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UUID")]),t._v(' /mnt/usb ext4 defaults,nofail 0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/fstab\n")])])]),a("p",[t._v("Test changes to "),a("code",[t._v("fstab")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -a\n")])])]),a("p",[t._v("Verify that drive is mounted:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" -h\n")])])]),a("p",[a("code",[t._v("/dev/sda1")]),t._v(" should appear as mounted on "),a("code",[t._v("/mnt/usb")]),t._v(".")]),t._v(" "),a("p",[t._v("Create symlink to flash drive for Docker:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /mnt/usb/docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /mnt/usb/docker /var/lib/docker\n")])])]),a("p",[a("strong",[t._v("Step 14")]),t._v(" - Finally, move Swapfile to USB and increase its size.")]),t._v(" "),a("p",[t._v("Edit its configuration file:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/dphys-swapfile\n")])])]),a("p",[t._v("Change the CONF_SWAPFILE line to:\n"),a("code",[t._v("CONF_SWAPFILE=/mnt/usb/swapfile")])]),t._v(" "),a("p",[t._v("Change the CONF_SWAPSIZE line to:\n"),a("code",[t._v("CONF_SWAPSIZE=2048")])]),t._v(" "),a("p",[t._v("Stop and restart the swapfile service:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /etc/init.d/dphys-swapfile stop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /etc/init.d/dphys-swapfile start\n")])])]),a("p",[a("strong",[t._v("Step 15")]),t._v(" - Install BTCPayServer!")]),t._v(" "),a("p",[t._v("Login as "),a("code",[t._v("root")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n")])])]),a("p",[t._v("Create a folder for BTCPayServer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" btcpayserver\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver\n")])])]),a("p",[t._v("Clone the BTCPayServer-Docker repository into the folder:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/btcpayserver/btcpayserver-docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n")])])]),a("p",[t._v("Set your environment variables. Make sure the "),a("code",[t._v("BTCPAY_HOST")]),t._v(" value uses your own domain & subdomain. As usual, run each command separately:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btcpay.YourDomain.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NBITCOIN_NETWORK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mainnet"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_CRYPTO1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btc"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_REVERSEPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_LIGHTNING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lnd"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"opt-save-storage-xs;opt-save-memory"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_ENABLE_SSH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),a("p",[t._v("Adding the "),a("code",[t._v("opt-save-storage-xs")]),t._v(" fragment will tell Bitcoin Core to keep around 3 months of blocks, or 25 GB of disk space. See other pruning levels "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#generated-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". Pruning is necessary for FastSync to work.")]),t._v(" "),a("p",[t._v("If you want to use multiple hostnames, add them via the optional "),a("code",[t._v("BTCPAY_ADDITIONAL_HOSTS")]),t._v(" variable:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAY_ADDITIONAL_HOSTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"raspberrypi.local,btcpay.local"')]),t._v("\n")])])]),a("p",[t._v("In case you want to restrict access to your local network only, please note that you need to use a "),a("code",[t._v(".local")]),t._v(" domain.")]),t._v(" "),a("p",[t._v("Finally, run the BTCPayServer setup script:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ./btcpay-setup.sh -i\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Step 16")]),t._v(" - Go to "),a("code",[t._v("https://btcpay.YourDomain.com")]),t._v(" and confirm that your site is up and your nodes are syncing.")]),t._v(" "),a("p",[t._v("Syncing is very slow on a Pi, since each block and transaction needs to go through validation. You can skip this, at your own risk, by using "),a("a",{attrs:{href:"#fast-sync"}},[t._v("FastSync")]),t._v(". Otherwise, simply leave the node running to sync to 100%; this may take weeks.")]),t._v(" "),a("p",[a("strong",[t._v("Setup Complete!")])]),t._v(" "),a("h2",{attrs:{id:"fast-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-sync"}},[t._v("#")]),t._v(" Fast Sync")]),t._v(" "),a("p",[t._v("BTCPayServer's complete FastSync documentation is "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/tree/master/contrib/FastSync",target:"_blank",rel:"noopener noreferrer"}},[t._v("available here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Please read very carefully to understand what FastSync is and why it's important to verify the UTXO set yourself.")]),t._v(" "),a("p",[a("strong",[t._v("Step 17 - OPTIONAL")]),t._v(" - FastSync:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /root/btcpayserver/btcpayserver-docker\n\n./btcpay-down.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" contrib\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" FastSync\n./load-utxo-set.sh\n")])])]),a("p",[t._v("FastSync currently takes about 30 minutes on a high-speed internet connection. After FastSync finishes, run the following command to restart BTCPayServer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n./btcpay-up.sh\n")])])]),a("h2",{attrs:{id:"total-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#total-verification"}},[t._v("#")]),t._v(" Total Verification")]),t._v(" "),a("p",[t._v("By using FastSync, you are exposing yourself to attacks if a "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/README.md#what-are-the-downsides-of-fast-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("malicious UTXO Set snapshot"),a("OutboundLink")],1),t._v(" is sent to you.")]),t._v(" "),a("p",[t._v("If you have another trusted node somewhere else, you can check the validity of the UTXO Set gathered by FastSync by following "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/README.md#dont-trust-verify",target:"_blank",rel:"noopener noreferrer"}},[t._v("these instructions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"thats-it-enjoy-your-btcpi-"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thats-it-enjoy-your-btcpi-"}},[t._v("#")]),t._v(" That's it! Enjoy your BTCPi! 🎉")]),t._v(" "),a("p",[t._v("If you don't have the time or patience to build your own BTCPi, there are a few merchants who can build one for you:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://lightninginabox.co",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lightning in a Box"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://nodl.it",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodl.it"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);
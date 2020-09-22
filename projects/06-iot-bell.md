---
tags:
- Personal Project
- ESP8266
- Arduino
- node.js
title: iot connected bell
index_title: a connected bell.
year: "2020"
color: "#4A90E2"
image: "/v1596446492/imakethings/IMG_1513_doqk5f.jpg"
side_images:
- url: "/v1596446492/imakethings/IMG_1513_doqk5f.jpg"
  description: ''
- url: "/v1596445735/imakethings/IMG_1454_m1xofr.jpg"
  description: Solenoid hammer (yellow) and WeMos D1 mini

---
I spend a lot of time with my friends at hackathons and on personal projects.

Sometimes, when you're working hard on creating a new piece of software, it is difficult to keep track of progress and morals up, especially if it's 3 A.M.

That's why I wanted to build a funny and also useful connected device that can act as a physical way to notify you of something happening in the digital sphere.

The bell was outfitted with a tiny [solenoid ](https://www.aliexpress.com/item/32978781640.html)and a WeMos D1 mini, which is a popular small development board for the ESP8266. It connects to any WiFi network and listens to a tiny webserver running on a local machine. When the webserver receives a request on its webhook URL, it forwards a message to the bell via socket.io, and the bell rings.

Integrating the systems with webhooks means that the bell can be triggered by just about anything happening on the web - be it a github commit hook, or a complicated action triggered by IFTTT.

When I'm not hacking away, the bell is setup to work as an extension for my doorbell - courtesy of an automation powered by node-red.

Code for the bell and the webserver will be made available soon.

This project was made possible by the awesome [socket.io-client](https://github.com/timum-viw/socket.io-client "https://github.com/timum-viw/socket.io-client") Arduino library by timum-viw on GitHub.
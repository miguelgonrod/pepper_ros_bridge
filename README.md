# pepper_ros_bridge

## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features in development](#features_in_development)

## Description
This proyect was made for the ieee chapter "RAS Javeriana" to control pepper using ros bridge, I'm planning to modify this website to allow it to control every robot using the same page.

Credits to: Anis Kouba ros for beginners III: Web-based Navigation with ROSBridge course

## Technologies
Project is created with:
* React: 18.2.0
* React-bootstrap: 2.7.4
* roslib: 1.3.0

## Setup
To run this project, you need to install these dependencies:
```
$ sudo apt install npm
$ sudo apt install ros-noetic-desktop-full
$ sudo apt install ros-noetic-rosbridge-server
```

Now you need to install it locally using npm:
```
$ git clone https://github.com/miguelgonrod/pepper_ros_bridge.git
$ cd pepper_ros_bridge
$ npm install
$ npm start
$ roslaunch rosbridge_server rosbridge_websocket.launch
```

If you want to change your local ip address to connect with ros bridge, change a ros topic or any other parameter, you need to modify the file located in /pepper_ros_bridge/src/scripts/Config.js

## Features in development
* Textbox to publish to pepper speech topic
* Sliders to control pepper arms
* Slider to control pepper head

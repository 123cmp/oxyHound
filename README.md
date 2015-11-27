#oxyHound
Hound-demon which would watching your computer during someone's session.

Tested only for Ububtu 14.04

## Installation

#### You need installed:

1) Scrot
> sudo apt-get install scrot

2) Npm and node.js
> https://nodejs.org

#### How to run hound:

1) Clone hound-repository to your computer
> git clone https://github.com/123cmp/oxyHound.git

2) Go to project directory and run dependency installation
> npm install

3) You can check work of hound:
> node hound.js
You should see new folder in oxyHound/sessions/

#### How to configure hound:

##### You may configure automatic running oxyHound when system start

1) Install 'forever'
> sudo npm i -g forever

2) In terminal run
> gnome-session-properties
and add new program with any name and command:
> forever start /path/to/oxyHound/hound.js

##### You can bind stop of the hound to keybord shortcut

1) Go to sysem settings -> keybord -> shortcuts

2) Add new shortcut with any name and command:
> curl http://localhost:8000/stop
where 8000 - used port;

3) Click on 'disable' and set the keys

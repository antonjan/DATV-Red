# DATV-Red

## Prerequisite 
- Latest beta PlutoSDR [firmware](https://github.com/F5OEO/pluto-ori-ps/wiki)
- Please see [flashing steps](https://github.com/Psynosaur/DATV-Red/wiki#flashing-steps)

## Setup and use
1. Download [latest release](https://github.com/Psynosaur/DATV-Red/releases) and extract to folder `DATV-Red` and open in file explorer (you'll need [7zip](https://www.7-zip.org/download.html))

2. **VERY IMPORTANT** Please make sure to place the folder in a path without spaces like: `C:\radio\DATV-Red` or `/home/user/DATV-Red/`

3. Setup mqtt broker in address in `settings\pluto.json` and change `broker.broker` address for pluto and `payload` for callsign
   
   ```json
    {
      "action": "connect",
      "broker": {
        "broker": "192.168.2.1", 
        "port": 1883,
        "username": "root",
        "password": "analog"
      },
      "topic" : "cmd/pluto/call",
      "payload": "ZS1SCI"
    }
   ```
4. Double click `DATV-Start.cmd`

5. Press the `set call` button to set your call sign and reboot pluto
 ![image](https://github.com/Psynosaur/DATV-Red/assets/26934113/414b3359-f798-4938-bc17-af7d0bc135b1)

6. Please refer to the [Wiki](https://github.com/Psynosaur/DATV-Red/wiki) for more setup details

7. Watch this intro video on [usage](https://www.youtube.com/watch?v=8q4WMCyKtKw) and perhaps [reception](https://youtu.be/lz3GO2zCf_Q)

8. Have fun

![image](https://github.com/Psynosaur/DATV-Red/assets/26934113/518889c5-1a83-42d6-8c3e-94359abce399)

## Thanks 
Batch files previously used in this project were from DL5OCD Michael and his [DATV-NotSoEasy project](https://groups.io/g/plutodvb/message/257)

Node Red flows inspired by project from PE2JKO [from this post](https://www.pg540.org/wiki/index.php/RFE_for_PlutoDVB2)

Thank you to all the testers, **DL5OCD**, **HB9DUG**, **DL2GHM** and all others

## Supporting my hobby
If you'd like to say thanks, please feel free to buy me some [time](https://paypal.me/zs1sci?country.x=ZA&locale.x=en_US)


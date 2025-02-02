"use strict";

var spectrum, logger, ws;
function connectWebSocket(spectrum) {
  ws = new WebSocket(`ws://${pluto_url}:7681/websocket`);

  spectrum.setWebSocket(ws);

  ws.onconnect = function (evt) {
    ws.binaryType = "arraybuffer";
  };

  ws.onopen = function (evt) {
    ws.binaryType = "arraybuffer";
    console.log("connected!");
  };
  ws.onclose = function (evt) {
    console.log("closed");
    setTimeout(function () {
      connectWebSocket(spectrum);
    }, 1000);
  };
  ws.onerror = function (evt) {
    console.log("error: " + evt.message);
  };
  ws.onmessage = function (evt) {
    //spectrum.addData(evt.data);

    if (evt.data instanceof ArrayBuffer) {
      spectrum.addData(evt.data);
    } else {
      var data = JSON.parse(evt.data);
      console.dir(data);
      if (data.center) {
        spectrum.setCenterHz(data.center);
      }
      if (data.span) {
        spectrum.setSpanHz(data.span);
      }
      if (data.gain) {
        spectrum.setGain(data.gain);
      }
      if (data.framerate) {
        spectrum.setFps(data.framerate);
      }
      spectrum.log(
        " > Freq:" +
          data.center / 1000000 +
          " MHz | Span: " +
          data.span / 1000000 +
          " MHz | Gain: " +
          data.gain +
          "dB | Fps: " +
          data.framerate
      );
    }
  };
}

var mouse_in_canvas = false;
var freq_info = [];
function main() {
  // Create spectrum object on canvas with ID "waterfall"
  spectrum = new Spectrum("waterfall", {
    spectrumPercent: 65,
    logger: "log",
  });

  // Connect to websocket
  connectWebSocket(spectrum);

  // Bind keypress handler
  window.addEventListener("keydown", function (e) {
    spectrum.onKeypress(e);
  });

  // Drag keypress handler
  window.addEventListener("mousemove", function (event) {
    mouse_in_canvas = true;
    spectrum.detect_movement(event);
    // console.log(dragStart);
  });
  window.addEventListener("mouseleave", function (event) {
    mouse_in_canvas = false;
    // spectrum.onDrag(event);
    // console.log(dragStart);
  });
  mqtt_client();
}

window.onload = main;

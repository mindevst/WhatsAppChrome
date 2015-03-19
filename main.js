 onload = function() {
        var webview = document.getElementById("foo");
        var indicator = document.querySelector(".indicator");
      
        var loadstart = function() {
          indicator.innerText = "loading...";
        }
        var loadstop = function() {
          indicator.innerText = "";
        }
        webview.addEventListener("loadstart", loadstart);
        webview.addEventListener("loadstop", loadstop);
      }
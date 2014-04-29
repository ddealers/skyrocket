   var floader = true;  
            
            var loadingElm = document.getElementById("loading"),
                fontsContainerElm = document.getElementById("fontsContainer"),
                elementsMap = {},
                fontLoader,
                fontFamiliesArray = [];
            
            // When developer tools are closed IE8 does not have console object.
            if (typeof console === "undefined") {
                console = {log: function() {}};
            }
            
            function addFonts() {
                var i, link, div, fontFamily, head = document.getElementsByTagName("head")[0];
                // For each font family create <link> in head
                for (i = 0; i < fontsContainerElm.childNodes.length - 1; i++) {
                    if (fontsContainer.childNodes[i].nodeType !== 1) continue;

                    div = fontsContainerElm.childNodes[i];
                    fontFamily = div.style.fontFamily.match(/[^'",;]+/)[0];
                    elementsMap[fontFamily] = div;
                    fontFamiliesArray.push(fontFamily);
                    
                    link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.type = "text/css";
                    if (i == 1){
                        link.href = "http://fonts.googleapis.com/css?family=" + fontFamily + ":500italic";}
                    else{
                        link.href = "http://fonts.googleapis.com/css?family=" + fontFamily + ":500";}
                    head.appendChild(link);
                }
            }


            
            window.setTimeout(function() {
              

                addFonts();

                fontLoader = new FontLoader(fontFamiliesArray, {
                    "fontsLoaded": function(error) {
                        console.log("error:", error);
                        loadingElm.style.display = "none";
                        
                        
                    },
                    "fontLoaded": function(fontFamily) {
                        console.log("font loaded: " + fontFamily + " element size: " + elementsMap[fontFamily].offsetWidth + "x" + elementsMap[fontFamily].offsetHeight);
                        lib.preloader.addEventListener ('complete', oda.setGame);

                    }
                }, 3000);
                fontLoader.loadFonts();
                
            }, 0);
            

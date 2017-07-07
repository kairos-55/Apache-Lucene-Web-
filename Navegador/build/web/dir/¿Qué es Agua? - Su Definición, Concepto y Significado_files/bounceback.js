        (function(window, location) {
				if(url === "" || url === undefined || url === null)
				{
					pathArray = window.location.href.split( '/' );
					protocol = pathArray[0];
					host = pathArray[2];
					url = protocol + '//' + host;
				}
                history.replaceState(null, document.title, location.pathname+"#!/bounceback");
                history.pushState(null, document.title, location.pathname);
                
                window.addEventListener("popstate", function()
                {
                    if(location.hash === "#!/bounceback")
                    {
                        history.replaceState(null, document.title, location.pathname);
                        setTimeout(function()
                        {
                            location.replace(url);
                        },0);
                    }
                }, false);
            }(window, location))

            
            
        
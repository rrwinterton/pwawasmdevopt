//initialize
function Initialize() {
    //check for browser supports service worker (sw) and register sw
    if ('serviceWorker' in navigator) {
        //is browser supports sw register sw
        navigator.serviceWorker.register('/pwawasmdevopt/sw.js', {
            scope: './'
        }).then(function (registration) {
            var serviceWorker;
            if (registration.installing) {
                serviceWorker = registration.installing;
            } else if (registration.waiting) {
                serviceWorker = registration.waiting;
            } else if (registration.active) {
                serviceWorker = registration.active;
            }
            //future update of push notifications
/*            
            if (serviceWorker) {
                if ('PushManager' in window) {
                    console.log('Push is supported');
                } else {
                    console.warn('Push messaging is not supported');
                    pushButton.textContent = 'Push Not Supported';
                }
                serviceWorker.addEventListener('statechange', function (e) {
                });
            }
*/            
        }).catch(function (error) {
        });       
    }    
}

//initialization and install service worker (sw)
Initialize();


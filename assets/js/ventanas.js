const tabs = document.querySelectorAll('.tabs__radio');
const tabTitle = document.getElementById('tabTitle');
                    
                    tabs.forEach(tab => {
                      tab.addEventListener('click', function() {
                        const tabId = this.id;
                        tabTitle.innerText=`${tabId}`;
                        window.location.hash = tabId;
                      });
                    });
                
                    // Al cargar la página, verificar si hay un anclaje en la URL y activar el tab correspondiente
                    window.onload = function() {
                      const hash = window.location.hash.substring(1); // Obtener el anclaje sin el #
                      if (hash) {
                        const tab = document.getElementById(hash);
                        if (tab) {
                          tab.checked = true;
                          tab.dispatchEvent(new Event('click'));
                        }
                      }
                    };
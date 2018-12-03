function exibirBody(n){
    n = n || "";
    var body_ep = document.getElementById("body-ep"+n)
     body_ep.style.display="block";
    }


        //  fim  da função esconder body


     function esconderBody(n){
        n = n || "";
      var body__ep =   document.getElementById("body-ep"+n)
      body__ep.style.display="none";

     }
            // fim da função esconder body


            function openCity(evt, cityName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(cityName).style.display = "block";
                evt.currentTarget.className += " active";
            }

            // fim da função para adicionar o hover na seção de atores

            

                // Função ara carregar dados da Api no console
    
            function loadJSON(path, success, error)
            {

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function()
            {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if (success)
                            success(JSON.parse(xhr.responseText));
                    } else {
                        if (error)
                            error(xhr);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }

      loadJSON('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json',
         function(data) {  
            let  Cast = data['Cast']
            //console.log(teste)
            let divul = document.getElementById('elencodinamico');
            let b=`<li>Jessica Charstain</li>
            <li>Chiwetel Ejiofor</li>`;
        for (let ator in Cast){
            console.log(Cast[ator].Name)
            b += '<li>' + Cast[ator].Name + '</li>';
        }
        divul.innerHTML = b;
        },
         function(xhr) { console.error(xhr); }
         
);


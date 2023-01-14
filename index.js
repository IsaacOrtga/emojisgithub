//  Usando la API de emojis de GitHub muestra todos los emojis (su imagen en un nodo HTML cada una)
//   que contengan una "y" en su nombre (las claves del JSON de respuesta contienen los nombres de los emojis

// const API_URL = 'https://api.github.com/emojis';

    
    

 const emojis = async() => {
    
    let API_URL = 'https://api.github.com/emojis';
    let div = '';
    let name = '';
    let img = '';
    let newSplit = [];
    let letter = document.getElementById("letter").value;
    const text = document.createElement('h1');
    text.textContent = 'Emojis de Github que contienen la "' + letter + '"';
    document.body.appendChild(text);

    await fetch(API_URL)
        .then(res => res.json())
        .then(json => JSON.stringify(json))
        .then(json => {
            let split = json.split(',');
            for (let i = 0; i < split.length; i++) {
                newSplit = split[i].split(":");
                if (newSplit[0].includes(letter)) {
                    div = document.createElement('div');
                    div.classList.add("container");
                    div.setAttribute("id", "container");
                    name = document.createElement('h4');
                    name.textContent = newSplit[0];
                    img = document.createElement('img');
                    img.src = "https:" + newSplit[2];
                    img.alt = newSplit[0];
                    document.body.appendChild(div);
                    div.appendChild(name);
                    div.appendChild(img);
          
                    
                }
            }
            
        }
        )
     
        

        
        
}




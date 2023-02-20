const fuego = 0;
const agua = 1;
const planta = 2;

const perdiste = 0;
const empate = 1;
const ganaste = 2;

const boton1 = document.getElementById('boton1')
const boton = document.getElementById('boton')
const text = document.getElementById("texto")
const firebto = document.getElementById("0");
const watherbto = document.getElementById("1");
const plantbto = document.getElementById("2");
const vidausuario = document.getElementById('userlifeimg');
const vidapc = document.getElementById('puntospc');
const userselec = document.getElementById("seleccionuser");
const pcselec = document.getElementById("seleccionpc");
const partianterior = document.getElementById("party");
const partianterior2 = document.getElementById("party2");
const nombre = document.getElementById("nombre");
const apodo = document.getElementById("apodo");


boton.addEventListener('click', function(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'menooption.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        
            let datos = JSON.parse(this.responseText);
        
            let resp = document.querySelector('#resp');
            resp.innerHTML = '';

            for (let item of datos){
            
                resp.innerHTML += `
            
                    <tr>
                
                        <th id="tip">${item.Tipo}</th>
                        <th id= "tip">${item.Daños}</th>
                        
                    
                    
                    </tr>
                
                `}

        }
    }
}
);







firebto.addEventListener("click", ()=>{
    play(fuego)
});
watherbto.addEventListener("click", ()=>{
    play(agua)
});
plantbto.addEventListener("click", ()=>{
    play(planta)
});

var vidas=100
var pcvidas = 100 
var resultadouser = 100
var resultadopc = 100








function play(userOption) {
        


        userselec.src = "img/"+userOption+ ".jpg";

        text.innerHTML= "seleccionando!"
        const giratoria = setInterval(function(){
            const pcOption = calcpcOption();
            pcselec.src = "img/"+pcOption+ ".jpg";}, 100);
    

        setTimeout(function() {
            clearInterval(giratoria)


            const pcOption = calcpcOption();

            const result = calcResult(userOption, pcOption);



            min = Math.ceil(25);
            max = Math.floor(50);
            const nombers = Math.floor(Math.random() * (max - min + 1)) + min;
            


            for(let vidas =100; vidas<=0;)
            if (vidas<0){
            vidas=100
            }

            for (let pcvidas = 100; pcvidas<=0;);


            switch(result){
                case empate:
                text.innerHTML = "Sin Daños";
                    break;
                case perdiste:
                
                    resultadouser = (resultadouser - nombers);
                    
                    vidausuario.innerHTML = resultadouser;
                    text.innerHTML = "Recibes Daño, Pierdes Una Vida";

                
                    if (resultadouser <= 0){
                        resultadouser=vidas;
                    
                    
                        partida1 = prompt("Perdiste! Guarde un Nombre");
                        if (partida1 == ""){
                            alert("ingrese un valor")


                            partida1 = prompt ("ingrese el nombre")}};
                            let miArray = [partida1];
                            localStorage.setItem("partidaperdidasave", JSON.stringify(miArray[0]));
                                            partianterior.innerHTML = "partida perdida: "+ miArray[0]   
        

                break;

            case ganaste:
                resultadopc = (resultadopc - nombers);
                
                vidapc.innerHTML = resultadopc;
                text.innerHTML = "Causaste Daño";

                if (resultadopc <= 0){
                    resultadopc=pcvidas;
                    partida2 = prompt("Ganaste!!! Guarda La Partida");
                    if (partida2 == ""){
                        alert("ingrese un valor")
                        partida2 = prompt ("ingrese el nombre")}};
                    
                        let miArray1 = [partida2];
                        localStorage.setItem("partidaganadasave", JSON.stringify(miArray1[0]));
                
                                    partianterior2.innerHTML = "partida ganada: "+ miArray1[0];

                break;
                
        }
        
        

        },1500);
    
        



    }


    function calcpcOption(){
        const number = Math.floor(Math.random() * 3);
        switch(number){
            case  0:
                return fuego;
            case 1:
                return agua;
            case 2:
                return planta;    
        }

    }



    function calcResult(userOption, pcOption){
        
        if(userOption === pcOption){ 

            return empate;
            }else if(userOption === fuego){
            if(pcOption === agua) return perdiste; 
            if(pcOption === planta) return ganaste;
            
            } else if(userOption === agua){
            if(pcOption === planta) return perdiste; 
            if(pcOption === fuego) return ganaste;
            
            }else if(userOption === planta){
            if(pcOption === fuego) return perdiste; 
            if(pcOption === agua) return ganaste;   }
    }
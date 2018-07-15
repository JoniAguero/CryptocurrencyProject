import { API } from "./api.js";
import * as UI from "./interfaz.js";

const api = new API();

api.obtenerCriptomonedas().then(api => {
    
    const dataApi = api.data;
    const arrayMonedas = [];

    for (const obj in dataApi) {
        arrayMonedas.push(dataApi[obj])
    }
    
    arrayMonedas.forEach(moneda => {
        
        const option = document.createElement('option');
        option.value = moneda.id;
        option.appendChild(document.createTextNode(moneda.name));

        UI.selectCriptoMoneda.appendChild(option);

    });
    
})



UI.formCotizar.addEventListener('submit', (e) => {
    e.preventDefault();

    const pais = UI.selectTipoMoneda.value;
    const criptoMoneda = UI.selectCriptoMoneda.value;

    api.obtenerInfoCriptomoneda(criptoMoneda, pais).then(api => {

        let html = "";

        const precio = api.data.quotes;
        console.log(precio);
        
        if (precio.hasOwnProperty(pais)) {
            const element = precio[pais];
            console.log(element);
            
            if(precio)
            html += `<div class="card blue darken-3">
                        <div class="card-content white-text">
                            <span class="card-title">Information</span>
                            <p>Coin: ${api.data.symbol} (${api.data.name}) </p>
                            <p>Price: ${element.price} ${pais} </p>
                            <p>Percent Last Hour: ${element.percent_change_1h} %</p>
                            <p>Percent Last 24 Hours: ${element.percent_change_24h} %</p>
                            <p>Percent Last 7 Days: ${element.percent_change_7d} %</p>
                            <span> Last Update: ${precio.last_updated}</span>
                        </div>
                    </div>`
        }
        
        UI.resultado.innerHTML = html;
    })

})




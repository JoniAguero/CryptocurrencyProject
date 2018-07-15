export class API {

    async obtenerCriptomonedas() {

        const url = await fetch(`https://api.coinmarketcap.com/v2/listings/`);
        return await url.json();

    }

    async obtenerInfoCriptomoneda(moneda, pais) {

        console.log(moneda);
        console.log(pais);
        

        const url = await fetch(`https://api.coinmarketcap.com/v2/ticker/${moneda}?convert=${pais}`);
        return await url.json();

    }

}
 
    


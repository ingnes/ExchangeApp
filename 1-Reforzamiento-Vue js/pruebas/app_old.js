//SIN VUE

// let title = "hola desde vue";

// const h1 = document.getElementById('h1');

// title = "chau desde vue";

// h1.innerText = title;

// title = "hola desde vue";


//CON VUE


const app = new Vue({
    el: '#app',
    data() {
        return {           
            
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 8400,
            src: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 0,
            alt : 'Bitcoin',                    
            value : 0 ,
            color : 'f4f4f4',
            showPrices: false,
            pricesWithDays : [
                { 
                    "id" : 1,
                    "day": 'Lunes',
                    "price": 8400
                },
                { 
                    "id" : 2,
                    "day": 'Martes',
                    "price": 7900
                },
                { 
                    "id" : 3,
                    "day": 'Miercoles',
                    "price": 8200
                },
                { 
                    "id" : 4,
                    "day": 'Jueves',
                    "price": 9000
                },
                { 
                    "id" : 5,
                    "day": 'Viernes',
                    "price": 9400
                },
                { 
                    "id" : 6,
                    "day": 'Sabado',
                    "price": 10000
                },
                { 
                    "id" : 7,
                    "day": 'Domingo',
                    "price": 10600
                }
            ]            
        }
    },

    computed: {
        title() {
            return `${this.name} - ${this.symbol}`;
        }

    },

    methods : {
        clickme() {
            let mensaje = 'hola mundo desde Vue';
            console.log(`${mensaje}`);
            alert("hola mundo");
        },
        toogleShowPrices() {
            this.showPrices = !this.showPrices;
            
            this.color = this.color.split('').reverse().join('');
        }
    },

    watch : {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    }
})



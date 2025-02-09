//SIN VUE

// let title = "hola desde vue";

// const h1 = document.getElementById('h1');

// title = "chau desde vue";

// h1.innerText = title;

// title = "hola desde vue";


//CON VUE


Vue.component('CoinDetail', {

    props: ['coin'],
    data() {
        return {

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
            ],
        }
    },
    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`;
        }

    },
    methods: {
        toogleShowPrices() {
            this.showPrices = !this.showPrices;            
        }
        
    },
    created() {
        console.log('created Coin Detail.....');
    },
    mounted() {
        console.log('mounted Coin Detail.....')
    },
    template: `
    <div>
        <div class="row">

            <h1 :style="{ color: coin.changePercent > 0 ? 'green' : (coin.changePercent < 0 ? 'red' : 'orange') }">
                {{ title }}  ({{ coin.changePercent }})
            </h1>    

            <img 
                @mouseover="toogleShowPrices"
                @mouseout="toogleShowPrices"
                :src="coin.src"
                :alt="coin.alt"           
                style="width:100px; height: 100px;"
            />
    
        </div>    
        <br>

        <slot name="texto">  </slot>

        <div class="row">           
                      
            <div class="sm-3 md-3">
            <button
                class="btn btn-success btn-sm" 
                @click="toogleShowPrices">{{ showPrices ? 'Ocultar precios' : 'Mostrar precios'  }}
            </button>

            </div> 
        </div>
    
        <br>

        <div class="row">
    
            <table v-show="showPrices" class="table table-bordered">
              <thead>
                <tr>
                  <th colspan="3"> Precios </th>
                </tr>
                <tr>
                  <th width="10%"> Id</th>
                  <th> Dia</th>
                  <th> Precio</th>
                </tr>
              </thead>
    
              <tbody>
                  <tr v-for="p in pricesWithDays" :key="p.id">
                      <td> {{ p.id }} </td>
                      <td> {{ p.day }} </td>
                      <td  :style="{ color : p.price > coin.price ? 'green' : p.price < coin.price ? 'red' : 'orange' }"> {{ p.price }} </td>
                  </tr>
    
              </tbody>    
        
            </table> 
    
        </div> 

        <br>

    </div>
    `


})


const app = new Vue({
    el: '#app',
    data() {
        return {                                  
            value : 0 ,
            color : 'f4f4f4',            
            btc: {
                price: 8400,
                src: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 0,
                alt : 'Bitcoin',
                name: 'Bitcoin',
                symbol: 'BTC',
            }
        }
    }, 
    
    created() {

        console.log('created.....');

    },

    mounted() {
        console.log('mounted.....')
    }
})



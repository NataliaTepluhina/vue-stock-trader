import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stock/Stocks.vue'


export const routes = [
    {path: '/', component: Home},
    {path: '/stocks', component: Stocks},
    {path: '/portfolio', component: Portfolio}
];
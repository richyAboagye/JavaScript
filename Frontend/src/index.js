import CartScreen from "./Screens/CartScreen.js"
import Error404Screen from "./Screens/Error404Screen.js"
import HomeScreen from "./Screens/HomeScreen.js"
import ProductScreen from "./Screens/ProductScreen.js"
import signInScreen from "./Screens/signInScreen.js"
import { parseRequestUrl } from "./utils.js"

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': signInScreen

}

const router = async () => {
    const request = parseRequestUrl()
    const parseUrl = (request.resource ? `/${request.resource}` : "/") + (request.id ? '/:id' : "") + (request.verb ? `/${request.verb}` : '')
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen
    // console.log("parseurl=", parseUrl, 'request=', request)
    const main = document.getElementById('main-container')
    main.innerHTML = await screen.render()
    
    if (typeof screen.after_render === 'function') {
        await screen.after_render();
    }
}


window.addEventListener('load', router)
window.addEventListener('hashchange', router)


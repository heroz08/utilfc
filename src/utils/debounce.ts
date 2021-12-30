// @ts-ignore
import {checkRunCb} from './typeOf.js'
export default function debounce(delay:number, callback:any) {
    let timer:any = null;
    return function (params:any) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            checkRunCb(callback, params)
        },delay)
    }
}


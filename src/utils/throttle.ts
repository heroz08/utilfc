// @ts-ignore
import {checkRunCb} from "./typeOf";

export default function throttle(delay:number, callback:any) {
    let timer:any = null;
    return function (params:any) {
        if(timer) {
            return;
        }
        timer = setTimeout(() => {
            checkRunCb(callback, params)
        },delay)
    }
}

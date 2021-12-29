import {typeOf} from './typeOf'

export default function hasData(data) {
    const type = typeOf(data)
    switch (type){
        case 'Object':
            return !!Object.keys(data).length;
        case 'Array':
            return !!data.length;
        default:
            return !!data;
    }
}
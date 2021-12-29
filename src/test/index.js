import { storage } from '../utils'

const { local } = storage
local.set('test','123')
const test = local.get('test')
console.log(test)

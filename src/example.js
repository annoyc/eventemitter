import { eventEmitter } from '../index.js'
const emitter = eventEmitter()
let count = 0
const unbind = emitter.on('tick', number => {
  count += number
  console.log(count)
})

setTimeout(() => {
  emitter.emit('tick', 2) // print nothing after unbind executed
}, 1000);

emitter.emit('tick', 1) // print 1
unbind()
emitter.emit('tick', 2) // print nothing
export const eventEmitter = () => ({
  events: {},
  on(eventName, callback) {
    ; (this.events[eventName] = this.events[eventName] || []).push(callback);
    return () => this.events[eventName] = (this.events[eventName] || []).filter(i => i !== callback);
  },
  emit(eventName, ...args) {
    ; (this.events[eventName] || []).forEach(callback => callback(...args));
  }
})
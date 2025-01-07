const Mediator = {
  callback: null, // Placeholder for the function to call

  registerCallback(fn) {
    this.callback = fn; // Register the function
  },

  redrawSelection(...args) {
    if (this.callback) {
      this.callback(...args); // Call the registered function
    } else {
      console.error("No callback registered.");
    }
  },
};

module.exports = Mediator;
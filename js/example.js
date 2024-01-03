const motorbike = {
  brand: "Yamaha",
  speed: 0,
  revs: 0,
  kilometers: 10000,
  cc: 250,
  on: false,
  gearbox: ["Neutral", "First", "Second", "Third"],
  ignition: function() {
    motorbike.on = !motorbike.on
  }
}
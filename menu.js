// TODO: hardcode?
const fetchMenu = restaurantId => {
  const menuDB = {
    "aslkdfhdsl":
      [{
        name: "asdfasfsda",
        price: 100
      }],
    "KJHLKG":
      [{
        name: ";fashdflasf",
        price: 500
      }]
  }

  return menuDB[restaurantId];
}

module.exports = function(context, cb) {
  cb(null, fetchMenu(context.query.restaurant))
}

// TODO: GET
// TODO: PUT

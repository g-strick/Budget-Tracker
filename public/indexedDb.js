var db;
(function () {
  "use strict";

  //check for support
  if (!("indexedDB" in window)) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }
  var request = indexedDB.open("transaction-db", 1);
  request.onupgradeneeded = function (event) {
    var db = event.target.result;

    // Create another object store called "names" with the autoIncrement flag set as true.
    var objStore = db.createObjectStore("transactionsOS", {
      autoIncrement: true
    });

    // Because the "transactionsOS" object store has the key generator, the key for the name value is generated automatically.
    // The added records would be like:
    // key : 1 => value : "Bill"
    // key : 2 => value : "Donna"
    // customerData.forEach(function (customer) {
    //   objStore.add(customer.name);
    // });
  };
})();

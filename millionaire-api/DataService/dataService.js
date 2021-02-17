'use strict';
module.exports.DataService = class DataService {
    constructor(){
        console.log("Initiated new DataService");
    }
    
    greet() {
        console.log("Hello from Data Service");
    }
}
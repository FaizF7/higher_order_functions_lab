const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length
}

ScranAdvisor.prototype.findByName = function(name){
    return this.restaurants.find((restaurant)=>{return restaurant.name===name})
}

ScranAdvisor.prototype.findAllNames = function(){
    return this.restaurants.map((restaurant)=>{return restaurant.name})
}

ScranAdvisor.prototype.findRestaurantByTown = function(townName){
    return this.restaurants.filter((restaurant)=>{return restaurant.location.town===townName})
}

ScranAdvisor.prototype.findMostCommonCuisine=function(){
    console.log(this.restaurants.map((restaurant)=> {restaurant.cuisine}))
}

const restaurants = require('./restaurants.json')
scranAdvisor = new ScranAdvisor(restaurants);

scranAdvisor.findMostCommonCuisine()

module.exports = ScranAdvisor;
// A model is responsible for containing all the rules and regulations that we want our application to follow

const Weather = function (data) {
    this.data = data
    this.errors = []
}

Weather.prototype.validateUserInput = function(){
    if(this.data == ""){
        this.errors.push("Please enter the name of the city.")
    }
}

module.exports = Weather

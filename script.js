//ESO THEME 

var friends = ["Aldiun", "paarthurnax", "fighters-guild", "dark-brotherhood", "thieves-guild"];
var theLocations = [
    "sovenguard", "coldharbor", "whiterun", 
    "riften", "solitude", "falkreath", "winterhold", 
    "windhelm", "markarth", "dawnstar"
];
var weapons = [
    "warhamer", "steel-warhammer", "dagger", "orcish-dagger", 
    "wabajack", "mace", "iron-mace", "sword", "dwarven-sword", 
    "greatsword", "battleaxe", "posion", "daedric-greatsword",
    "ebony-battleaxe", "glass-dagger", "aegisbane", "bloodthorn",
    "blade-of-woe", "eduji", "daedric-bow",
];
document.addEventListener("DOMContentLoaded", function() {
    for (i = 1; i <=100; i++) {
        var h3var = document.createElement("h3");
        h3var.innerText = "accusation " + i;
        document.body.appendChild(h3var);
        var objects = {
            randomFriends: friends[Math.floor(Math.random()*friends.length)],
            randomLocation: theLocations[Math.floor(Math.random()*theLocations.length)],
            randomWeapons: weapons[Math.floor(Math.random()*weapons.length)],
        }
        h3var.addEventListener("click", random.bind(objects))
    }
});

function random() {
    alert("I accuse " + this.randomFriends + " " + "with the " + this.randomWeapons + " "  + "in " + this.randomLocation);
}
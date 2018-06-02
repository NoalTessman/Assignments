var Eric = {
    name: 'Eric',
    hobbies: [
        "doing nothing",
        "Staring at nothing",
        "throwing fits about nothing"
    ],
    eggs: 400,
    friends: [
        "derick" = {
            name:"Derick",
            Hobbies: [
                "doing nothing",
                "Staring at nothing",
                "throwing fits about nothing",
                "not being Eric"
            ],
            Current_egg_stockpiles: function() {
                var Dericks_eggs = Eric.eggs;
                console.log(Dericks_eggs);
            },
            AmITheSamePersonAsEric: "Haha, that's ridiculous, I have friends"
        },
        
        "gerrick" = {
            name: "Gerrick",
            Hobbies: [
                "doing nothing",
        "Staring at nothing",
        "throwing fits about nothing",
                "not being Eric, nor gerrick"
            ],
            Favorite_places_to_be: [
                "At home",
                "That's about it"
            ],
            TotallyEncryptedSecrets: [
                "Don't tell anyone but I am secretly Eric",
                "I really hope these things are encrytped, I'd be surprised if they weren't it's 2018 and developers know how embarrasing it would be if this sort of thing got out on website like google.com or github or the other hub website that I totally don't remember the name of and spend all my time on",
            ],
            egg_gather: function(){
                Eric.eggs += Math.floor((Math.random() * 10) + 1);
                console.log("if you've activated this function you will see that I collect eggs for my dear friends Eric and Derrick who totally aren't me " + Eric.eggs);
            }
        },
        
        "Mom" = {
            name: "Eric's Regretful Mother",
            FriendStatus: "This social media application won't let me unfriend him",
            Friends: [
                Eric,
                "many other people",
                "I've made this account to tell you that eric's friends are mostly fake and boast about the ridiculous amount of eggs he's collected over the period of 5 years",
                "most of them have gone bad by now, he needs help"
            ],
        }
        
    ]
}
console.log(Eric.friends[gerrick.egg_gather()]);
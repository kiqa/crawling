var campers = ["bob", "sally", "mary", "jane", "john", "bill", "jill",
"tim", "tom", "nancy", "kevin"];
// people who like to hunt
var hunters = ["jane", "susan", "diane", "jake", "jill", "sally",
"stewart", "mike", "jacob"];

for (var i = 0; i < campers.length; i++) {
    for (var m = 0; m < hunters.length; m++) {
        if(campers[i]=== hunters[m]){
            console.log(campers[i]);
        }
    }
}

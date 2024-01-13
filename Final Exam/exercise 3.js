function solve(array) {
    let followers = {};
    let followersCount = 0;
    while (array[0] != "Log out") {
        let current = array.shift().split(": ");
        let command = current.shift();
        let name = current.shift();
        let count = Number(current.shift());
        if (command == "New follower") {
            if (followers.hasOwnProperty(name) == false) {
                followers[name] = { likes: 0, comments: 0 };
                followersCount++;
            }
        }
        else if (command == "Like") {
            if (!followers.hasOwnProperty(name)) {
                followers[name] = { likes: count, comments: 0 };
                followersCount++;
            } else {
                followers[name].likes+=count;
            }
        }
        else if (command == "Comment") {
            if (!followers.hasOwnProperty(name)) {
                followers[name] = { likes: 0, comments: 1 };
                followersCount++;
            } else {
                followers[name].comments+=1;
            }
        }
        else if (command == "Blocked") {
            if (!followers.hasOwnProperty(name)) {
               console.log(`${name} doesn't exist.`);
            } else {
                delete followers[name];
                followersCount--;
            }
        }
    }
    let entries = Object.entries(followers);
    console.log(`${followersCount} followers`);
    for(let [el, data] of entries) {
        console.log(`${el}: ${data.likes+data.comments}`);
    }
}
solve(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])

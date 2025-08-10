var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longestFriendName = "";
friends.forEach(friend=>{
    if(friend.length>longestFriendName.length) longestFriendName = friend;
})
console.log(longestFriendName);
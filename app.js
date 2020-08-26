// Lets try to get some data back.
// OAUTH TOKEN xm5eubambs5pvsn8v4tlczspi3h9em

// oAuth Token Stuff
const clientID = {
  headers: {
    "Client-ID": "ba2gcck3s09vnovo0gkq5q5i8v01dp",
    Authorization: "Bearer xm5eubambs5pvsn8v4tlczspi3h9em",
  },
};

function populateFollowers(jsonObj) {
  const followersID = document.getElementById("followers");
  followTotal = jsonObj["total"];
  followersID.innerText = followTotal;
}

async function getFollowersData() {
  fetch("https://api.twitch.tv/helix/users/follows?to_id=44445592", clientID)
    .then((response) => response.json())
    .then((jsonObj) => populateFollowers(jsonObj))
    .catch((error) => console.log(error));
}

function populateChannelInfo(jsonObj) {
  const channelInfo = document.getElementById("info");
  const gameInfo = document.getElementById("game");
  const titleInfo = document.getElementById("title");
  casterName = jsonObj.data[0].broadcaster_name;
  gameName = jsonObj.data[0].game_name;
  titleName = jsonObj.data[0].title;
  channelInfo.innerText = "Broadcaster Name: " + casterName;
  gameInfo.innerText = "Game: " + gameName;
  titleInfo.innerText = "Stream Title: " + titleName;
}

async function getChannelInfo() {
  fetch(
    "https://api.twitch.tv/helix/channels?broadcaster_id=44445592",
    clientID
  )
    .then((response) => response.json())
    .then((jsonObj) => {
      console.log(jsonObj);
      populateChannelInfo(jsonObj);
    })
    .catch((error) => console.log(error));
}

getFollowersData();
getChannelInfo();

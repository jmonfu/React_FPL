    const players = [

        {
            id: 1,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "Paul",
            playerSurname: "Pogba",
            playerDOB: "15/03/1993",
            positionId: "RL3ipoQ0QQGdP5Y1H3JM",
            nationId: "OGBxuGB5q6CCBTTCyWfF",
            previousClubs: [
              {
                years: "2011-2012",
                teamId: 1,
                teamName: "Manchester United",
                teamBadge: "",
                apps: "3",
                goals: "0"
              },
              {
                years: "2012-2016",
                teamId: 100,
                teamName: "Juventus",
                teamBadge: "",
                apps: "124",
                goals: "28"
              },
              {
                years: "2016-",
                teamId: 1,
                teamName: "Manchester United",
                teamBadge: "",
                apps: "94",
                goals: "24"
              }
            ],
            teamId: 1
          },
          {
            id: 2,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "David",
            playerSurname: "De Gea",
            teamId: 1
          },
          {
            id: 3,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "Alexander",
            playerSurname: "Lacazette",
            teamId: 4
          },
          {
            id: 4,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "Patrick",
            playerSurname: "Aubemyang",
            teamId: 4
          },
          {
            id: 5,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "David",
            playerSurname: "Eriksen",
            teamId: 5
          },
          {
            id: 6,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "Harry",
            playerSurname: "Kane",
            teamId: 5
          },
          {
            id: 7,
            playerFace:
              "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
            playerName: "Anthony",
            playerSurname: "Martial",
            teamId: 1
          }
    ];

const playerReducer = (state=players, action) => {
        return state;
};

export default playerReducer;

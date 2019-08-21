import React, { Component } from "react";
import TeamSummary  from '../Teams/TeamSummary';

class TeamList extends Component {
  constructor(props) {
    super(props);

    this.teams = [
      {
        id: 1,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Manchester United",
        nationId: 1,
        leagueId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours : [
          {
            Title: "First Division/Premier League",
            Winnings: "20"
          },
          {
            Title: "Second Division",
            Winnings: "2"
          },
          {
            Title: "FA Cup",
            Winnings: "12"
          },
          {
            Title: "Football League Cup",
            Winnings: "5"
          },
        ]
      },
      {
        id: 2,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Aston Villa",
        nationId: 1,
        leagueId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours : [
          {
            Title: "First Division/Premier League",
            Winnings: "20"
          },
          {
            Title: "Second Division",
            Winnings: "2"
          },
          {
            Title: "FA Cup",
            Winnings: "12"
          },
          {
            Title: "Football League Cup",
            Winnings: "5"
          },
        ]
      },
      {
        id: 3,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Liverpool",
        nationId: 1,
        leagueId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours : [
          {
            Title: "First Division/Premier League",
            Winnings: "20"
          },
          {
            Title: "Second Division",
            Winnings: "2"
          },
          {
            Title: "FA Cup",
            Winnings: "12"
          },
          {
            Title: "Football League Cup",
            Winnings: "5"
          },
        ]
      },
      {
        id: 4,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Arsenal",
        nationId: 1,
        leagueId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours : [
          {
            Title: "First Division/Premier League",
            Winnings: "20"
          },
          {
            Title: "Second Division",
            Winnings: "2"
          },
          {
            Title: "FA Cup",
            Winnings: "12"
          },
          {
            Title: "Football League Cup",
            Winnings: "5"
          },
        ]
      },
      {
        id: 5,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Spurs",
        nationId: 1,
        leagueId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours : [
          {
            Title: "First Division/Premier League",
            Winnings: "20"
          },
          {
            Title: "Second Division",
            Winnings: "2"
          },
          {
            Title: "FA Cup",
            Winnings: "12"
          },
          {
            Title: "Football League Cup",
            Winnings: "5"
          },
        ]
      },
      {
        id: 6,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Manchester City",
        nationId: 1,
        leagueId: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours : [
          {
            Title: "First Division/Premier League",
            Winnings: "20"
          },
          {
            Title: "Second Division",
            Winnings: "2"
          },
          {
            Title: "FA Cup",
            Winnings: "12"
          },
          {
            Title: "Football League Cup",
            Winnings: "5"
          },
        ]
      }
    ];
  }

  render() {
    return (
      <div className="row">
        {this.teams &&
          this.teams.map(team => {
            return (
              <div className="col s4" key={team.id}>
              <span className="flow-text">
                <TeamSummary team={team} />
              </span>
            </div>
            );
          })}
      </div>
    );
  }
}

export default TeamList;

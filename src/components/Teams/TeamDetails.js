import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeamDetails extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;

    this.teams = [
      {
        id: 1,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Manchester United",
        nationId: 1,
        nationBadge:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        leagueId: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours: [
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
          }
        ]
      },
      {
        id: 2,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Aston Villa",
        nationId: 1,
        nationBadge:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        leagueId: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours: [
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
          }
        ]
      },
      {
        id: 3,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Liverpool",
        nationId: 1,
        nationBadge:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        leagueId: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours: [
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
          }
        ]
      },
      {
        id: 4,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Arsenal",
        nationId: 1,
        nationBadge:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        leagueId: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours: [
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
          }
        ]
      },
      {
        id: 5,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Spurs",
        nationId: 1,
        nationBadge:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        leagueId: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours: [
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
          }
        ]
      },
      {
        id: 6,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Manchester City",
        nationId: 1,
        nationBadge:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        leagueId: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mollis nulla non interdum. Sed in malesuada felis. Etiam congue urna lorem, placerat elementum nisi varius sodales. Cras neque arcu, facilisis at nibh sed, feugiat aliquet magna. Aliquam lorem ante, hendrerit quis erat a, cursus pellentesque felis. Aenean facilisis nulla a nisi aliquam, commodo aliquam erat convallis. Praesent quis massa eget nulla dignissim tempor. Morbi ornare velit sit amet elit cursus lobortis. Morbi ante est, rhoncus sit amet risus nec, suscipit fringilla arcu. Proin volutpat diam ut risus pharetra elementum. Morbi vel accumsan nisi. Nulla iaculis ac augue a posuere. Ut accumsan nisi eget tellus molestie varius. In consectetur ante iaculis turpis dictum maximus.",
        honours: [
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
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          {console.log(this.teams)}
          {this.teams &&
            this.teams
              .filter(team => team.id == this.id)
              .map(team => {
                return (
                  <div className="row center">
                    <div class="col s12 m4 l2">
                      <p>
                        <img
                          src={team.badge}
                          alt=""
                          class="circle responsive-img"
                        />
                      </p>
                    </div>
                    <div class="col s12 m4 l8">
                      <h5 class="center">
                        <b>{team.teamName}</b>
                      </h5>
                      <p>
                        <i>{team.description}</i>
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Winnings</th>
                          </tr>
                        </thead>
                        {team.honours &&
                          team.honours.map(teamHonors => {
                            return (
                              <tbody key={teamHonors.Title}>
                                <tr>
                                  <td>{teamHonors.Title}</td>
                                  <td>{teamHonors.Winnings}</td>
                                </tr>
                              </tbody>
                            );
                          })}
                      </table>
                      <Link
                        className="waves-effect waves-light btn red darken-2"
                        to={"/players/" + this.id}
                      >
                        Players List
                        <i class="material-icons right">send</i>
                      </Link>
                    </div>
                    <div class="col s12 m4 l2">
                      <p>
                        <img
                          src={team.nationBadge}
                          alt=""
                          class="circle responsive-img"
                        />
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default TeamDetails;

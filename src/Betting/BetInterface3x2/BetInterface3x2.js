import React from 'react';
import MLBdata from '../data'

const BetInterface3x2 = ({num}) => {
  const game1 = [
    {
      team: MLBdata[num].bookmakers[0].markets[0].outcomes[0].name,
      h2h: MLBdata[num].bookmakers[0].markets[0].outcomes[0].price,
      spread: "-2.5: -110",
      overunder: "+220: -110",
    },
    {
      team: MLBdata[num].bookmakers[0].markets[0].outcomes[1].name,
      h2h: MLBdata[num].bookmakers[0].markets[0].outcomes[1].price,
      spread: "-2.5: -110",
      overunder: "+220: -110",
    }
  ]

  return (
    <>
      <Description 
        //home_team= {game1.get('home_team')}
        home_team = {game1[0].team}
        away_team= {game1[1].team}
      />
      <div class="mb-0 text-s text-gray-800">
        <table class="table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Spread</th>
                    <th>Moneyline</th>
                    <th>Over/Under</th>
                </tr>
            </thead>
            <tbody>
              {game1.map((data, key) => {
                return (
                  <Line
                    team={data.team}
                    h2h={data.h2h}
                    spread= {data.spread}
                    overunder={data.overunder}
                  />
                );
              })}
            </tbody>
        </table>
      </div>
    </>
  );
};

const Description = ({ away_team, home_team }) => {
  return (
    <div class="text-s font-weight-bold text-primary mb-1">
      {home_team} vs {away_team} [[7/27 @7:05]]
    </div>
  );
};

const Line = ({ h2h, team, spread, overunder }) => {
  if (!h2h) return <div />;
  return (
    <tr>
      <td>{team}</td>
      <td>{spread}</td>
      <td>{h2h}</td>
      <td>{overunder}</td>
    </tr>
  );
};

export default BetInterface3x2
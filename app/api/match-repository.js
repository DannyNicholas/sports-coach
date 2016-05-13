import { fromJS } from 'immutable'

// Returns a function that calls the provided function if it is defined
const callIfDefined = fn => data => {
  if (fn) {
    fn(data)
  }
}

export default {
  getMatches: (fn) =>  callIfDefined(fn)(mockedMatches.matches.map(createMatch))
}

const mockedMatches = { matches:
    [ {id: 1, opponent: 'Aston Villa'}, {id: 2, opponent: 'Liverpool'} ],
  }

function createMatch(match) {
  const mockedPlayers = { players:
      [ {id: 1, name: 'George Best'}, {id: 2, name: 'Glenn Hoddle'} ],
    }

  return {
    id: match.id,
    opponent: match.opponent,
    players: mockedPlayers.players
  }
}

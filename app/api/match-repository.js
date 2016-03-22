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
  return {
    id: match.id,
    opponent: match.opponent,
  }
}

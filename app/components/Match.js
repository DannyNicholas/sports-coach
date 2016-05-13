import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { PlayerContainer } from './Player'

export const Match = ({ match }) => (
  <div>
    <h3>{'Match ID'} {match.get('id')}</h3>
      <div className="opponent">{match.get('opponent')}</div>
      {match.get('players').map(p => <PlayerContainer key={p.get('id')} player={p} />)}
  </div>
)

Match.propTypes = {
  match: React.PropTypes.instanceOf(Object).isRequired,
}

export const MatchContainer = connect(
  null
)(Match)

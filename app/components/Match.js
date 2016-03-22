import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

export const Match = ({ match }) => (
  <div>
    <h3>{'Match ID'} {match.get('id')}</h3>
      <div className="opponents">{match.get('opponent')}</div>
  </div>
)

Match.propTypes = {
  match: React.PropTypes.instanceOf(Object).isRequired,
}

export const MatchContainer = connect(
  null
)(Match)

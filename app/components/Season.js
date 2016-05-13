import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { MatchContainer } from './Match'

export const Season = ({ matches }) => (
  <div>
    <h2>{'Season'}</h2>
      {matches.map(m => <MatchContainer key={m.get('id')} match={m} />)}
  </div>
)

function mapStateToProps(state) {
  return {
    matches: state.get('matches'),
  }
}

Season.propTypes = {
  matches: React.PropTypes.instanceOf(List).isRequired,
}

export const SeasonContainer = connect(
  mapStateToProps
)(Season)

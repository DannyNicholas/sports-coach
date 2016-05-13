import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

export const Player = ({ player }) => (
  <div>
    <h4>{'Player ID'} {player.get('id')}</h4>
      <div className="player">{player.get('name')}</div>
  </div>
)

Player.propTypes = {
  player: React.PropTypes.instanceOf(Object).isRequired,
}

export const PlayerContainer = connect(
  null
)(Player)

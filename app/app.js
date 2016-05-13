import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import { setState } from './store/action-creators'
import matchRepository from './api/match-repository'
import { App } from './components/App'
import { SeasonContainer } from './components/Season'
import reducer from './store/reducer'

import testRest from './api/test-rest'

const rootNode = document.getElementById('app')
const store = createStore(reducer)

const routes = (
<Route component={App}>
  <Route path="/" component={SeasonContainer} />
</Route>
)

matchRepository.getMatches(matches => {
  console.log('got matches')
    console.log(matches)
  store.dispatch(setState({ matches }))
  ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    rootNode
  )
})

export function __unload() {
  ReactDOM.unmountComponentAtNode(rootNode)
}

testRest.getUsers(v => console.log(v))

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

const rootNode = document.getElementById('app')
const store = createStore(reducer)

const routes = (
<Route component={App}>
  <Route path="/" component={SeasonContainer} />
</Route>
)

// const finalCreateStore = compose(
//   applyMiddleware(apiActionMiddleware(techRepository)),
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore)

// const store = finalCreateStore(reducer)


// const render = () => {ReactDOM.render(
//   <Provider store={store}>
//       <Router history={hashHistory}>{routes}</Router>
//   </Provider>,
//   rootNode
// )}
// store.subscribe(render)
// render()

  matchRepository.getMatches(v => console.log(v))


//  console.log(
matchRepository.getMatches(matches => {
  console.log('got matches')
  store.dispatch(setState({ matches }))
  ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    rootNode
  )
})
//)

export function __unload() {
  ReactDOM.unmountComponentAtNode(rootNode)
}

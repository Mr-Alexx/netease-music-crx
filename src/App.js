import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Player from './Player'
import PlayList from './PlayList'
import Login from './Login'
import './App.css'

class App extends Component {
  componentDidMount () {
    let {fetchTopNew} = this.props.store
    fetchTopNew()
  }
  render() {
    let {store} = this.props
    return (
      <div>
        <ul className="list-group">
          {
            store.playlistGroup.map(item => {
              return (
                <PlayList key={item.id} item={item} isPlaying={item.id === store.selectedPlaylistId} store={store}/>
              )
            })
          }
        </ul>
        {!store.isAuthed && (<Login store={store}/>)}
        {
          store.song && <Player store={store} />
        }
      </div>
    )
  }
}

export default observer(App)

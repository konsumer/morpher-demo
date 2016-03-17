import React from 'react'
import {render} from 'react-dom'
import EmilioSheen from './EmilioSheen'


class Application extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sheenness: 0
    }
  }

  handleValueChange(ev) {
    this.setState({
      sheenness: ev.target.value
    })
  }

  render() {
    return (
      <div className='Application'>
        <EmilioSheen sheenness={this.state.sheenness} />
        <input value={this.state.sheenness} type='range' min={0} max={1} step={0.01} onChange={this.handleValueChange.bind(this)} />
      </div>
    )
  }
}

render(
  <Application />,
  document.getElementById('app')
)

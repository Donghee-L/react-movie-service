# Movie Service

React JS Fundamentals Course


## JSX
JSX = HTML in javascript


## PropTypes
``` bash
$ npm i prop-types
```

> example
``` javascript
import PropTypes from 'prop-types'

Food.PropTypes = {
  name:PropTypes.string.isRequired
}
```

## State


ex) set Count
``` javascript
class App extends React.Component {
  state = {
    count: 0
  }; //component의 변하는 데이터
  
  add = () => {
    // this.setState({count:this.state.count + 1});
    this.setState(current => ({count:current.count + 1}));
  };
  minus = () => {
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({count:current.count - 1}));
  };

  render(){
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>ADD</button>
      <button onClick={this.minus}>MINUS</button>
    </div>
    )
  }
}
```

## Life Cycle

### mounting

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

### updating
> state updating

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()


## Deploying to Github Pages

``` bash
npm i gh-pages
```

package.JSON -> "homepage": "https://Donghee-L.github.io/react-movie-service"
package.JSON ->   "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy":"gh-pages -d build",
    "predeploy": "npm run build"
  },
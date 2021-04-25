import React from 'react'

class Detail extends React.Component {  
  
  // constructor() {
  //   super()
  //   const {location,history} = this.props;
  //   console.log(location)
  //   console.log(this.props)
  //   if (location === undefined){history.push('/')}
  // }
  
  
  componentDidMount() {
    const {location,history} = this.props;
    console.log(location)
    if (location.state === undefined){
      history.push("/")
    }
  }

  render() {
    const {location}  = this.props
    if (!location) { return null}
    else {return <span>{location.state.title}</span>
  }
}
}

export default Detail;
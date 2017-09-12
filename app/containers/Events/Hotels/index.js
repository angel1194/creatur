import React,{Component} from 'react';
import MainHotels from '../../../components/Events/MainHotels'

class Hotels extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <MainHotels location={this.props.location}/>
      </div>
    );
  }
}

export default Hotels;

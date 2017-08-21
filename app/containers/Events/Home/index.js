import React,{Component} from 'react';
import Hom from '../../../components/Events/Home';

class Home extends Component {

  request(event){
    event.preventDefault()

    let rooms = this.refs.rooms.value

    let request = {
      checkin:'',
      checkout:'',
      rooms:{
        room:{
          key:1,
          adult:0,
          child:{

          }
        },
      }
    }
  }

  render() {
    return (
      <div>
        <Hom/>
      </div>
    );
  }
}

export default Home;

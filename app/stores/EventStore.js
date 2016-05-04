import alt from '../libs/alt';
import EventActions from '../actions/EventActions';
import dataobj from '../components/Calendar';

class EventStore {
  constructor() {

    this.exportPublicMethods({
      makeState: this.makeState

    });

    this.bindActions(EventActions);

    this.state = {
      title: '',
      start_time: '',
      end_time: '',
      location: ''
    }

  }



makeState() {
  var dataobj = require("json!../components/data.json");

  {dataobj.items.map(function(instance, i) {

  this.setState({title: dataobj.items[i].title,
                 start_time: dataobj.items[i].start_time,
                 end_time: '',
                 location: dataobj.items[i].location
                })

return <Event  />


})}
}


}
export default alt.createStore(EventStore, 'EventStore');

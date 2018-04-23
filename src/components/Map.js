import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
        locations: this.props.locations
    }
  }
  componentDidMount() {
    this.loadMap();
  }
  componentDidUpdate() {
    this.loadMap();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({locations: nextProps.locations});
  }

  loadMap() {
    if(this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 41.850033, lng: -87.6500523}, // Chicago
        zoom: 4,
        mapTypeId: 'roadmap'
      })

      this.map = new maps.Map(node, mapConfig);
      if(this.state.locations.length > 0){
        this.state.locations.forEach( location => { // iterate through locations saved in state
          const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
            position: {lat: location[0], lng: location[1]}, // sets position of marker to specified location
            map: this.map // sets markers to appear on the map
          });
      })
      }
    }
  }

  render() {
    const style = {
      width: '90vw',
      height: '75vh'
    }

    return(
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

export default Map;

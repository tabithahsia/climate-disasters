import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
        locations: [
          { name: "New York County Supreme Court", location: {lat: 40.7143033, lng: -74.0036919} },
          { name: "Queens County Supreme Court", location: {lat: 40.7046946, lng: -73.8091145} },
          { name: "Kings County Supreme Court", location: {lat: 40.6940226, lng: -73.9890967} },
          { name: "Richmond County Supreme Court", location: {lat: 40.6412336, lng: -74.0768597} },
          { name: "Bronx Supreme Court", location: {lat: 40.8262388, lng: -73.9235238} }
        ]
    }
  }


  componentDidMount() {
    this.loadMap();
  }
  componentDidUpdate() {
    this.loadMap();
  }

  loadMap() {
    if(this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 40.7485722, lng: -74.0068633}, // sets center of google map to NYC.
        zoom: 11,
        mapTypeId: 'roadmap'
      })

      this.map = new maps.Map(node, mapConfig);
      this.state.locations.forEach( location => { // iterate through locations saved in state
  const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
    position: {lat: location.location.lat, lng: location.location.lng}, // sets position of marker to specified location
    map: this.map, // sets markers to appear on the map we just created on line 35
    title: location.name // the title of the marker is set to the name of the location
  });
})
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

import React from 'react';
// import axios from 'axios';
// import Map from './Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '',
      disaster: 'Chemical',
      validDate: true
    }
    this.selectDisaster = this.selectDisaster.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  selectDisaster(event){
    event.preventDefault();
    this.setState({disaster: event.target.value})
    console.log(this.state.disaster);
  }

  selectDate(event){
    this.setState({year: event.target.value})
    console.log(this.state.year);
    // console.log(this.state.year.length + 1);
  }
  formSubmit(event){
    event.preventDefault();
    console.log(this.state);
    if(this.state.year.length + 1 === 4){
      if(Number(this.state.year) < 1953 || Number(this.state.year) > 2018){
        this.setState({validDate: false });
      } else {
        this.setState({validDate: true });
        console.log(this.state);
      }
    }
  }
  render()
   {
    return (
      <div>
        <h1>Climate Disasters</h1>
        <form onSubmit={this.formSubmit}>
          <label>
            Enter a year from 1953 - 2018:
            <input type="text" value={this.state.year} onChange={this.selectDate} />
          </label>
          <label>
            Disaster type:
            <select value={this.state.disaster} onChange={this.selectDisaster}>
              <option value="Chemical">Chemical</option>
              <option value="Coastal Storm">Coastal Storm</option>
              <option value="Dam/Leveebreak">Dam/Levee Break</option>
              <option value="Drought">Drought</option>
              <option value="Earthquake">Earthquake</option>
              <option value="Fire">Fire</option>
              <option value="Fishing Losses">Fishing Losses</option>
              <option value="Flood">Flood</option>
              <option value="Freezing">Freezing</option>
              <option value="Hurricane">Hurricane</option>
              <option value="Mud/Landslide">Mud/Landslide</option>
              <option value="Severe Ice Storm">Severe Ice Storm</option>
              <option value="Severe Storm(s)">Severe Storm(s)</option>
              <option value="Tornado">Tornado</option>
              <option value="Toxic Substances">Toxic Substances</option>
              <option value="Tsunami">Tsunami</option>
              <option value="Typhoon">Typhoon</option>
              <option value="Volcano">Volcano</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <input type="submit" value="Filter" />
        </form>

        {this.state.validDate ? null : <p> Please enter a valid date </p>}



      </div>
    );
  }
}

export default App;

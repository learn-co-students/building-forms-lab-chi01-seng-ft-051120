import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
  
  render() {
    return(
      <div>
        BandsContainer
        <ul>{this.renderBands()}</ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

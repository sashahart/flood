import { connect } from 'react-redux'

import * as actions from '../actions'
import Map from '../components/Map'

const mapStateToProps = (state) => {
  return {
    baseLayers: state.baseLayers,
    featureLayers: state.featureLayers,
    map: state.map,
  }
}

const mapDispatchToProps = (dispatch) => {
  function clickHandler(id, data) {
    const payload = {}
    if (data.data) {
      payload.id = id
      payload.data = data
    }
    dispatch(actions.setPopup(payload))
  }

  return {
    onLayerStatusChange: (id, status) => {
      dispatch(actions.layerStatusChange(id, status))
    },
    onClickAlerts: clickHandler,
    onClickUTFGrid: clickHandler,
    onMouseoutUTFGrid: () => {
      dispatch(actions.hoverOverMapClickable())
    },
    onMouseoverUTFGrid: (data) => {
      dispatch(actions.hoverOverMapClickable(data))
    },
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer

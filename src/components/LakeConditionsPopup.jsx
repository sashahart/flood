import React, { Component, PropTypes } from 'react'

import PopupTitle from './PopupTitle'
import PopupContent from './PopupContent'
import PopupHeader from './PopupHeader'
import PopupImage from './PopupImage'

const icon = require('../images/boat_icon_white.png')

export default class LakeConditionsPopup extends Component {
  static propTypes = {
    full_name: PropTypes.string,
    lake_url_name: PropTypes.string,
    updatePopup: PropTypes.func,
  }

  render() {
    const { full_name, lake_url_name, updatePopup } = this.props
    const image_src = `http://waterdatafortexas.org/reservoirs/api/individual/${lake_url_name}/recent-elevations-chart`

    return (
      <div className="popup__container--lake" >
        <PopupTitle icon={icon} title="Lake Conditions Information" />
        <PopupContent>
          <PopupHeader>
            { full_name }
          </PopupHeader>
          <PopupImage link={image_src} src={image_src} updatePopup={updatePopup} />
        </PopupContent>
      </div>
    )
  }
}

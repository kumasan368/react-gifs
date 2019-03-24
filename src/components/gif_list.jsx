import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderGifList = (props) => {
    // I can do implicit return here
    return {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectedGif={props.selectedGif} />);}
  }

  render() {
    return (
      <div className="gif-list">
        { this.renderGifList() }
      </div>
    );
  }
}

export default GifList;

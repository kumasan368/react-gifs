import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderGifList = () => {
    // I can do implicit return here
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
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

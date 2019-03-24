import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "4Zo41lhzKt6iZ8xff9"
    };
  }

  search = (query) => {
    // API Call here
    giphy('5EqmmmJQdrVgKPZX1i8efDxED1wSvdSy').search({
      q: query,
      rating: 'g',
      limit: 30
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  //  Here setState of selectedGifId above. selectedGif is defined in th giflistjsx.
  selectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

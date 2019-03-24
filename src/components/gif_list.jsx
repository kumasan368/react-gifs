import React from 'react';

import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

// class GifList extends Component {
//   renderGifList = (props) => {
//     // I can do implicit return here
//     return (
//       <div className="gif-list">
//         { props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectedGif={props.selectGif} />)}
//       </div>
//     );
//   };

// render() {
//   return (
//     <div className="gif-list">
//       { this.renderGifList() }
//     </div>
//   );
// }
// }

export default GifList;

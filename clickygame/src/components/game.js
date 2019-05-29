import React, { Component } from 'react';

import Shuffle from './utils/pics'

function getShuffle()
{
  return Shuffle();
}

function clicked(pic)
{
  alert("clicked" + pic);
}

class Game extends Component {
  
  state = {
    
    picsList: [],
    selectedPics: []
  };

  // use componentDidMount() to get the list of all dog breeds from the API and set result to this.state.breedList
  // componentDidMount(){
  //   Shuffle()
  //     .then(({data: {message: picsList}}) => {
  //       console.log(picsList);
  //       // convert breedList into an array of just the key names
  //       const picsListArr = Object.keys(picsList);
  //       console.log(picsListArr);
  //       this.setState({
  //         picsList: picsListArr
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }

 
  componentDidMount(){
    this.setState({
      picsList: getShuffle()
    })
  }

  render() {
    return ( 
      <React.Fragment>

        
        <div className="container">
          <div className="row">
            
            {
              
                this.state.picsList.map(pic => {
                  return (
                    <div
                    onClick={clicked(pic)}
                      key={pic} 
                      className="col-12 col-sm-6 col-md-4"
                      style={{
                        backgroundImage: `url(${pic})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '300px'
                      }}
                      >
                    </div>
                  )
                })
              
            }
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Game;
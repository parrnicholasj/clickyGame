import React, { Component } from 'react';

import Shuffle from './utils/pics'

function getShuffle()
{
  return Shuffle();
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
  

  clicked(pic){
    var tempArr = this.state.selectedPics;
    if (tempArr.includes(pic))
    {
      this.setState({//reset game you lose
        picsList: getShuffle(),
        selectedPics: []
      })
      alert("you lose")
      return;
    }
    tempArr.push(pic);
    this.setState({//first shuffle then do the rest
      picsList: getShuffle(),
      selectedPics: tempArr
    })
    console.log(this.state.selectedPics);

    if (tempArr == this.state.picsList)
    {
      this.setState({//reset game
        picsList: getShuffle(),
        selectedPics: []
      })
      alert("you win!")
      return;
    }

  }
 
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
                    onClick={(e) => this.clicked(pic)}
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
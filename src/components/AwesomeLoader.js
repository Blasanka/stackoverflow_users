import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class AwesomeLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading tc' 
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#FFFF00'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default AwesomeLoader;
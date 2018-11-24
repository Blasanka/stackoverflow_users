import React from 'react';
import Select from 'react-select';
 
const divStyle = {
    width: '50%',
    marginTop: '15px'
};

const options = [
  { value: 'top30', label: 'Top 30' },
  { value: 'id', label: 'User Id' },
  { value: 'country', label: 'Country' },
  { value: 'srilanka', label: 'Sri Lanka' }
];
 
class DropDown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            handleChange: props.handleChange,
            selectedOption: props.selectedOption
        }
    }

  render() {
    const { selectedOption, handleChange } = this.state;
    
    return (
        <div style={divStyle}>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
  }
}

export default DropDown;
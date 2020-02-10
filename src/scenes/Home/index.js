import React from 'react';
import { ChromePicker } from 'react-color';

class Home extends React.Component {

    state = {
        type: 'linear-gradient',
        angle: 0,
        color1: 'red',
        color2: 'blue',
    };

    handleClick = (type, value) => {
        this.setState({
            [type]: value.hex
        })
    }

    handleChange = (type, event) => {
        this.setState({
            [type]: event.target.value
        })
    }

    render() {
        const { type, angle, color1, color2 } = this.state;
        const gradient = `${type}(${angle}deg, ${color1}, ${color2})`;
        return (
            <div style={{ backgroundImage: gradient, height: '900px' }}>
                <div className='option color-picker color-picker-1'>
                    <ChromePicker
                        color={color1}
                        onChange={(color) => this.handleClick('color1', color)}
                    />
                </div>
                <div className='option color-picker color-picker-2'>
                    <ChromePicker
                        color={color2}
                        onChange={(color) => this.handleClick('color2', color)}
                    />
                </div>
                <div className='option range-slider'>
                    <input
                        min="-180"
                        max="180"
                        step="1"
                        type="range"
                        value={angle}
                        onChange={(event) => this.handleChange('angle', event)}
                    />
                </div>
                <div className='output'>
                    background-image: {gradient}
                </div>
            </div>
        )
    }
}

export default Home;
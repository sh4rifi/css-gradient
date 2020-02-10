import React from 'react';
import { ChromePicker } from 'react-color';

class Home extends React.Component {

    state = {
        color1: 'red',
        color2: 'blue',
    };

    handleClickSelectColor = (type, value) => {
        this.setState({
            [type]: value.hex
        })
    }

    render() {
        const { color1, color2 } = this.state;
        const gradient = `linear-gradient(60deg, ${color1}, ${color2})`;
        return (
            <div style={{ backgroundImage: gradient, height: '900px' }}>
                <div class='color-picker color-picker-1'>
                    <ChromePicker
                        color={color1}
                        onChange={(color) => this.handleClickSelectColor('color1', color)}
                    />
                </div>
                <div class='color-picker color-picker-2'>
                    <ChromePicker
                        color={color2}
                        onChange={(color) => this.handleClickSelectColor('color2', color)}
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
import React from 'react';
import { ChromePicker } from 'react-color';
import './style.css';

class Home extends React.Component {

    state = {
        type: 'linear-gradient',
        angle: 0,
        color1: '#FFC800',
        color2: '#ff4500',
        status: false
    };

    handleChangeColor = (type, value) => {
        this.setState({
            [type]: value.hex
        })
    }

    handleChangeRange = (type, event) => {
        this.setState({
            [type]: event.target.value
        })
    }

    handleClickLinear = () => {
        this.setState({
            type: 'linear-gradient'
        })
    }

    handleClickRadical = () => {
        this.setState({
            type: 'radial-gradient'
        })
    }

    handleClickOpenModal = () => {
        this.setState({
            status: true
        })
    }

    handleClickCloseModal = () => {
        this.setState({
            status: false
        })
    }

    copyToClipboard(code) {
        var textField = document.createElement('textarea')
        textField.innerText = code
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        console.log(code)
      }

    render() {
        const { type, angle, color1, color2, status } = this.state;
        const gradient = `(${type === 'linear-gradient' ? angle + 'deg, ' : ''}${color1}, ${color2})`;
        return (
            <div>
                {console.log(status)}
                <div style={{ backgroundImage: type + gradient }} className='wrapper'>
                    <div className='options'>
                        <div className='option color-picker color-picker-1'>
                            <h4>Select Color 1</h4>
                            <ChromePicker
                                color={color1}
                                onChange={(color) => this.handleChangeColor('color1', color)}
                            />
                        </div>
                        <div className='option color-picker color-picker-2'>
                            <h4>Select Color 2</h4>
                            <ChromePicker
                                color={color2}
                                onChange={(color) => this.handleChangeColor('color2', color)}
                            />
                        </div>
                        <div className='option'>
                            <h4>Gradients Type</h4>
                            <div className='button-group'>
                                <button className={['button', (type === 'radial-gradient' ? 'active' : '')].join(' ')} onClick={this.handleClickRadical}>Radial</button>
                                <button className={['button', (type === 'linear-gradient' ? 'active' : '')].join(' ')} onClick={this.handleClickLinear}>Linear</button>
                            </div>
                            {type === 'linear-gradient' ? (
                                <div className='range-slider'>
                                    <input
                                        min="-180"
                                        max="180"
                                        step="1"
                                        type="range"
                                        value={angle}
                                        onChange={(event) => this.handleChangeRange('angle', event)}
                                    />
                                    <span>{angle} deg</span>
                                </div>
                            ) : null}
                        </div>
                    </div>

                </div>
                <button className='button-modal' onClick={this.handleClickOpenModal}>CSS Output</button>
                <div className={['modal-wrap', status && 'active'].join(' ')}>
                <div className={['modal', status && 'active'].join(' ')}>
                    <div className='menu'>
                        <button class='close'  onClick={this.handleClickCloseModal}>x</button>
                    </div>
                    <div className='output'>
                        <p>background: -webkit-linear-gradient{gradient};</p>
                        <p>background: linear-gradient{gradient};</p>
                        <button className='button' onClick={this.copyToClipboard.bind(this, `background: -webkit-linear-gradient${gradient}; background: linear-gradient${gradient};`)}>Copy</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;
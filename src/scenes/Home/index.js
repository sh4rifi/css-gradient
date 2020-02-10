import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color1: 'white',
            color2: 'black'
        }
    }

    handleClickSelectColor = (type, value) => {
        this.setState({
            [type]: value
        })
    }

    render() {
        const { color1, color2 } = this.state;
        const gradient = `linear-gradient(${color1}, ${color2})`;
        return (
            <div style={{backgroundImage: gradient, height: '900px'}}>
                <button onClick={() => this.handleClickSelectColor('color1', 'blue')}>Button 1</button>
                <button onClick={() => this.handleClickSelectColor('color2', 'red')}>Button 2</button>
                <div className='output'>
                    background-image: {gradient}
                </div>
            </div>
        )
    }
}

export default Home;
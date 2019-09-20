import React from 'react';

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.state);
        console.log(props);
        this.state = {
            title: this.state.title,
            director: this.state.director,
            metascore: this.state.metascore,
            stars: this.state.stars
        };
        
    }
    render() {
        return(
            <div className='update-movie'>
                <form>
                    <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={this.state.title}
                    />
                    <input 
                    type='text'
                    name='director'
                    placeholder='Director'
                    value={this.state.director}
                    />
                    <input 
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    value={this.state.metascore}
                    />
                    <input 
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    value={this.state.stars}
                    />
                    <button>Update Movie</button>
                </form>
            </div>
        )
    }
}
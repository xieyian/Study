import React from 'react';
import SearchBar from './SearchBar';
import unpslash from '../api/unpslash';
import ImageList from './ImageList';




class App extends React.Component {
    state = { images: [] }
    onSearchSubmit = async term => {
       const response = await unpslash.get('/search/photos',{
           params: { query: term },
           
       });
       
       this.setState({images: response.data.results});

    }

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmitt= {this.onSearchSubmit} />
                <ImageList images= {this.state.images} />
            </div>
            );
    }
    
}
export default App;
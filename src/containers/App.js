import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount () {
        fetch('https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow')
            .then(response => response.json())
            .then(users => this.setState({ users: users.items }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
        console.log(event);
    }

    render() {
        const { searchField, users } = this.state;

        const filteredUsers = users.filter(user => {
            return user.display_name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (users.length === 0) 
            ? <h2 className="f1 tc">Loading..</h2>
            : (
                <div className='tc'>
                    <div className='flex'>
                        <h1 className='tl f1 w-50 pa2 mr2'>Stackoverflow Users</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <Scroll>
                        <CardList users={ filteredUsers } />
                    </Scroll>
                </div>
            );
    }
}

export default App;
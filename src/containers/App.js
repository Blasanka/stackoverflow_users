import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import AwesomeLoader from '../components/AwesomeLoader';
import DropDown from '../components/DropDown';
import SriLanka from './assets/srilanka.json';
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: '',
            selectedOption: 'Top30',
        }
    }

    componentDidMount () {
        // let val = 8076665;
        if (this.state.selectedOption === 'Top30') {
            fetch(`https://api.stackexchange.com/2.2/users/?order=desc&sort=reputation&site=stackoverflow`)
                .then(response => response.json())
                .then(users => this.setState({ users: users.items }));
        } //else if (this.state.selectedOption === 'id') {
        //     fetch(`https://api.stackexchange.com/2.2/users/${val}/?order=desc&sort=reputation&site=stackoverflow`)
        //         .then(response => response.json())
        //         .then(users => this.setState({ users: users.items }))
        //         .catch(e => console.log(e));
        // }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
        // console.log(event);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        if (selectedOption.value === 'srilanka') {
            this.setState({ users: SriLanka });
        }
    }

    render() {
        const { searchField, users } = this.state;

        const filteredUsers = users.filter(user => {
            return user.display_name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (users.length === 0) 
            ? <AwesomeLoader />
            : (
                <div className='tc'>
                    <div className='flex'>
                        <h1 className='tl f3 w-50 pa2 mr2'>Stackoverflow Users</h1>
                        <div className='controlls'>
                            <DropDown handleChange ={this.handleChange} selectedOption= {this.state.selectedOption} />
                            <SearchBox searchChange={this.onSearchChange} />
                        </div>
                    </div>
                    <Scroll>
                        <CardList users={ filteredUsers } />
                    </Scroll>
                </div>
            );
    }
}

export default App;
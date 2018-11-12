import React from 'react';
import Card from './Card';

export const CardList = ({ users }) => {

    const cardsArray = users.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={user.account_id} 
                img = {user.profile_image}
                name={user.display_name} 
                rep = {user.reputation} 
                badges = {user.badge_counts}
                location={user.location}
                link = {user.link}
            />
        );
    });

    return <div>{cardsArray}</div>;
}

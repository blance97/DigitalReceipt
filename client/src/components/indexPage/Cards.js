import React from 'react'
import { Card } from 'semantic-ui-react';

const Cards = () => (
    <Card.Group itemsPerRow ={4}>
        <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        />
        <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        />
        <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        />
         <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        />
    </Card.Group>
)

export default Cards
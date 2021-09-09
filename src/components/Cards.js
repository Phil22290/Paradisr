import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Examples of our listings</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = {require('./images/dominican.jpg').default}
                        text="Organize your very own 'Fiesta Dominicana'"
                        label="Dominican Republic"
                        path="/dominican"
                        />
                        {/* <CardItem
                        src = {require('./images/philippines.jpg').default}
                        text="Feel free as a bird in the Philippines"
                        label="Philippines"
                        path="/philippines"
                        /> */}
                        <CardItem 
                        src = {require('./images/indonesia.jpg').default}
                        text="This island will make Bali look like trash!"
                        label="Indonesia"
                        path="/indonesia"
                        />
                        {/* <CardItem
                        src = {require('./images/scotland.jpg').default}
                        text="Get your kilts (and umbrellas) out!"
                        label="Scotland"
                        path="/scotland"

                        />
                        <CardItem 
                        src = {require('./images/thailand.jpg').default}
                        text="Your personal luxury holiday resort"
                        label="Thailand"
                        path="/thailand"
                        
                        /> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards

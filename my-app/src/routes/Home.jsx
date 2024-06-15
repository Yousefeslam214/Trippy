import React from 'react'
import Header from '../components/Header/Header'
import Destination from '../components/Home/Destination'
import Trip from '../components/Trip/Trip'

const Home = () => {
    return (
        <div>
            <Header
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                btnClass="show"
                buttonText="Travel Plan"
                url="/"
            />
            <Destination />
            <Trip />
        </div>
    )
}

export default Home

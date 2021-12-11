# Music Metadata App

A simple Music Metadata App created in React, Node/Express, and GraphQL

First, start the server
### `cd server`
### `npm i`
### `node index.js`

Runs the server on port 3001

Then start the client
### `cd client`
### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To query the API using GraphQL, open [http://localhost:3001/graphql](http://localhost:3001/graphql) to view the GraphiQL interface.

## Get all tracks
query {
  getAllTracks {
    title,
    artist,
    genre,
    duration
  }
}

## Create track
mutation {
  createTrack(
    title:"Have A Cigar", 
    artist:"Pink Floyd", 
    genre:"Classic Rock", 
    duration: 301){
    title
    artist
    genre
    duration
  }
}

const express = require('express')
const tracks = require('./data.json')
const graphql = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const PORT = process.env.PORT || 3001;
const app = express()

const track = new graphql.GraphQLObjectType({
    name: "track",
    fields: () => ({
        title: { type: graphql.GraphQLString },
        artist: { type: graphql.GraphQLString },
        genre: { type: graphql.GraphQLString },
        duration: { type: graphql.GraphQLInt }
    })
})

const RootQuery = new graphql.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllTracks: {
            type: new graphql.GraphQLList(track),
            resolve(parent, args){
                return tracks
            } 
        }
    }
})

const Mutation = new graphql.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTrack: {
            type: track,
            args: {
                title: { type: graphql.GraphQLString },
                artist: { type: graphql.GraphQLString },
                genre: { type: graphql.GraphQLString },
                duration: { type: graphql.GraphQLInt }
            },
            resolve(parent, args) {
                tracks.push(
                    {
                        title: args.title,
                        artist: args.artist,
                        genre: args.genre,
                        duration: args.duration
                    })
                return args
            }
        }
    }
})

const schema = new graphql.GraphQLSchema({query: RootQuery, mutation: Mutation})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/server/tracklist', (req, res) => {
    res.json(tracks)
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
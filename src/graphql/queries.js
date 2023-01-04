const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType } = require('./types')
const { User, Post } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users from the database.',
    resolve(parent, args) {
        return User.find()
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: 'Query all posts from the database.',
    resolve(parent, args) {
        return Post.find()
    }
}

const user = {
    type: UserType,
    description: 'Query a specific user by their user ID.',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

const postById = {
    type: PostType,
    description: 'Query a post by it\'s ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return Post.findById(args.id)
    }
}

const postBySlug = {
    type: PostType,
    description: 'Query a post by it\'s slug',
    args: {
        slug: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Post.findOne({
            slug: args.slug
        })
    }
}

module.exports = {
    users,
    posts,
    user,
    postById,
    postBySlug
}
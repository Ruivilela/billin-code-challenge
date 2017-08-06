const ObjectId = require('mongodb').ObjectID;

import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve: () => {
          return db.Article.find()
      }
    },
    getArticle: {
      type: new GraphQLList(articleType),
      args: {
        id: {type: GraphQLString}
      },
      resolve: (obj, args, context) => {
        return db.Article.find(
          {_id:new ObjectId(args.id)}
        )
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name:'mutations',
  description:'these are the things we can change',
  fields: () => ({
    createArticle: {
      type: new GraphQLList(articleType),
      description: 'creates article',
      args: {
        author: {
          type: GraphQLString,
        },
        content: {
          type: GraphQLString,
        },
        excerpt: {
          type: GraphQLString,
        },
        published: {
          type: GraphQLBoolean,
        },
        tags: {
          type: new GraphQLList(GraphQLString),
        },
        title: {
          type: GraphQLString,
        }
      },
      resolve: (obj, args, context) => {
        return db.Article.create(args)
          .then((article) => {
            article
          })
      }
    },
    deleteArticle: {
      type: new GraphQLList(articleType),
      args: {
        id: { type: GraphQLString }
      },
      resolve: (obj, args, context) => {
        return db.Article.remove({_id:new ObjectId(args.id)})
          .then((article) => {
            article
          })
      }
    },
    updateArticle:{
      type: new GraphQLList(articleType),
      args: {
        id: { type: GraphQLString },
        author: {
          type: GraphQLString,
          required: true
        },
        content: {
          type: GraphQLString,
        },
        published: {
          type: GraphQLBoolean,
        },
        tags: {
          type: new GraphQLList(GraphQLString),
        },
        title: {
          type: GraphQLString,
        }
      },
      resolve: (obj, args, context) => {
        return db.Article.find(
          {_id:new ObjectId(args.id)}
        ).update(args)
          .then((article) => {
            article
          })
      }
    }
  })
})


const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;

const { Post } = require('../../models');

const postdata =
[
  {
    "postTitle": "Somebody once told me",
    "postContent": "the world is gonna roll me",
    "userId": 1
  },
  {
    "postTitle": "I ain't the sharpest tool in the shed",
    "postContent": "She was looking kind of dumb",
    "userId": 2
  },
  {
    "postTitle": "With her finger and her thumb",
    "postContent": "In the shape of an L on her forehead",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
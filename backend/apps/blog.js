//ROUTES PATH
const posts = require('../routes/blog/post')
const categories = require('../routes/blog/categories');
const guestApis = require('../routes/blog/guest');

server.use('/api/posts', passport.authenticate('jwt', {session: false}), posts);
server.use('/api/categories', passport.authenticate('jwt', {session: false}), categories);
server.use('/api/guest', guestApis);
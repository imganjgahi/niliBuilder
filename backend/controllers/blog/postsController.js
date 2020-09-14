const PostModel = require("../../models/blog/post");
const { Op } = require("sequelize");
const CategoryController = require('./categoriesController');

var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

exports.getAll = (req, res, next) => {
        PostModel.findAll({ where: {userId: req.user.id,  status: { [Op.gt]: 0} },
            order: [["createdAt"]]
        }).then(data => {
            return res.json(data)
        }).catch(err => {
            next(new Error(err))
        });
    
};
exports.getItemById = (req, res, next) => {
    PostModel.findOne({ where: { userId: req.user.id, status: { [Op.gt]: 0}, id: req.params.id } }).then(post => {
        return res.json(post)
    }).catch(err => {
        console.log(err.message)
        next(new Error(err))
    });
};

exports.createItem = (req, res, next) => {
    const data = req.body;
    PostModel.create({
        title: data.title,
        lead: data.lead,
        content: data.content,
        status: +data.status ? +data.status : 2,
        img: data.img ? data.img : "http://localhost:5000/public/uploads/avatar.jpg",
        label: data.label,
        categoryId: data.categoryId ? +data.categoryId : 1,
        userId: req.user.id,
    }).then((data) => {
        return res.status(201).json({ message: "Post Added", data })
    }).catch(err => {
        console.log(err.message)
        next(new Error(err))
    });
};
exports.updateItem = (req, res, next) => {

    const data = req.body

    PostModel.findOne({ where: { userId: req.user.id, id: req.params.id } }).then(targetPost => {

        if (!targetPost) {
            return res.status(400).json({ message: "Post not found" })
        }
        targetPost.title = data.title;
        targetPost.lead= data.lead;
        targetPost.content= data.content;
        targetPost.status= +data.status;
        img= data.img ? data.img : "http://localhost:5000/public/uploads/avatar.jpg",
        targetPost.label= data.label;
        targetPost.categoryId= data.categoryId ? +data.categoryId : 1;
        targetPost.userId= req.user.id;
        targetPost.save();
        return res.status(200).json({ message: "Post was updated" })
    }).catch(err => {
        console.log(err.message)
        next(new Error(err))
    });
};
exports.deleteItem = (req, res, next) => {

    PostModel.findOne({ where: { userId: req.user.id, id: req.params.id } }).then(post => {

        if (!post) {
            return res.status(400).json({ message: "Post not found" })
        }
        post.destroy().then(() => {
            return res.status(200).json({ message: "Post was Deleted" })
        })
    }).catch(err => {
        console.log(err.message)
        next(new Error(err))
    });
};

/*********************************************************************************
*
*
*
*
Client Apis**/

exports.getAllForClient = (req, res, next) => {
    console.log(req.query)
    PostModel.findAll({ where: { status: { [Op.gt]: 1} },
        offset: +req.query.offset || 0,
        limit: +req.query.limit || 10,
        order: req.query.sort ? sqs.sort(req.query.sort) : [['id', 'desc']],
    }).then(data => {
        return res.json(data)
    }).catch(err => {
        next(new Error(err))
    });

};

exports.getItemByIdForGuest = (req, res, next) => {
    PostModel.findOne({ where: { status: { [Op.gt]: 1}, id: req.params.id } }).then(post => {
        if(post){
            return res.json(post)
        }
        return res.status(400).json({message: "post not found"})
    }).catch(err => {
        console.log(err.message)
        next(new Error(err))
    });
};
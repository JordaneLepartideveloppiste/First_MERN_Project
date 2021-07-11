const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Arrête d'inventer des ID : " + req.params.id)
    
        UserModel.findById(req.params.id, (err, docs) => {
            if(!err) res.send(docs);
            else console.log('ID de merde : ' + err);
        }).select('-password');
};

module.exports.updateUser = async (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("Arrête d'inventer des ID : " + req.params.id)

    try {
        await UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{ bio: req.body.bio }},
            {new: true, upsert: true, setDefaultsOnInsert: true},
            (err, docs) => {
                if(!err) return res.send(docs);
                if(err) return res.status(500).send("La pute pute pute de Màj " + err);
            }
            )
    } 
    catch (err) {
        return res.status(500).json({message: err});
    } 
};     

module.exports.deleteUser = async (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("Arrête d'inventer des ID : " + req.params.id)

    try {
        await UserModel.remove({_id: req.params.id}).exec();
        res.status(200).json({message: "Repose en paix "});
    } catch (err) {
      return res.status(500).json({ message: err });
    }
};

module.exports.follow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow))
      return res.status(400).send("Arrête d'inventer des ID : " + req.params.id)

    try {
        //add to the followers list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            {
               $addToSet: {following: req.body.idToFollow} 
            },
            {new: true, upsert: true},
            (err, docs) => {
                if(!err) res.status(201).json(docs);
                else return res.status(400).json(err);
            }
        );

        //add to followings list
        
        await UserModel.findByIdAndUpdate(
          req.body.idToFollow,
          {
            $addToSet: { followers: req.params.id },
          },
          { new: true, upsert: true },
          (err, docs) => {
            if (err) return res.status(400).json(err);
          }
        );


    } catch (err) {
      return res.status(500).json({ message: err });
    }
};

module.exports.unfollow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) ||!ObjectID.isValid(req.body.idToUnFollow))
      return res.status(400).send("Arrête d'inventer des ID : " + req.params.id);

    try {
      //delete from the followers list
      await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { following: req.body.idToUnFollow },
        },
        { new: true, upsert: true },
        (err, docs) => {
          if (!err) res.status(201).json(docs);
          else return res.status(400).json(err);
        }
      );

      //delete from followings list

      await UserModel.findByIdAndUpdate(
        req.body.idToUnFollow,
        {
          $pull: { followers: req.params.id },
        },
        { new: true, upsert: true },
        (err, docs) => {
          if (err) return res.status(400).json(err);
        }
      );
    } catch (err) {
      return res.status(500).json({ message: err });
    }
};


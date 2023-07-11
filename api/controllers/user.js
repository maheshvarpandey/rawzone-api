const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Login = require("../models/login");
const User = require("../models/users");
const mongoose = require("mongoose");

// ********** Add User ***********************************************
exports.add_user = (req, res, next) => {
  try {
    User.find({ email: req.body.Code })
      .exec()
      .then((user) => {
        console.log("Resp ******************", user)
        if (user.length >= 1) {
          return res.status(409).json({
            message: "User already exists",
            success: false
          });
        } else {
          console.log("*************", req.body)

          const user = new User(req.body);
          user.save().then((result) => {
            console.log("Response **************", result)
            res
              .status(200)
              .json({
                data: result,
                massage: "User added Successfully!",
                success: true
              })
          });
        }
      });
  } catch (err) {
    res.status(500).json({
      error: err,
      message: err,
      success: false
    });
  }
};
// ********************** End **********************************************

// ********************* Edit User Details **********************************
exports.edit_user = (req, res, next) => {
  console.log("**************** REQ ****************", req.params.id, req.body)
  // Update the user's properties
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedUser => {
      console.log('Updated user:', updatedUser);
      return res.status(200).json({
        message: "User updated successfully!!",
        data: updatedUser,
        success: true
      });
    })
    .catch(error => {
      return res.status(401).json({
        message: error,
        success: false
      });
    });

};
//  ************** End ****************************************************

//  ************* Delete User *********************************************
exports.delete_user = (req, res, next) => {
  User.remove({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User Deleted Successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
//  ********* End ********************************************************

//  ******** Find User ***************************************************
exports.get_user = async (req, res, next) => {
  try {

    let searchText = req?.query?.searchText;
    let searchDate = req?.query?.Date?.trim();

    console.log("::::::: Search Filter ::::::::::::::::::", typeof searchDate)
    let condition = {
      // isDeleted: false,
    };
    const filterCriteria = [];

    console.log("searchText :::::::::::::::", searchText, searchDate !== "")

    if (searchText !== "") {
      condition = {
        ...condition,
        Name: new RegExp(searchText, "i"),
      };
    }

    if(searchDate !== "") {
      condition = {
        ...condition,
        DOValid: new RegExp(searchDate, "i"),
      };
    }

    console.log("Conditions***************", condition)

    filterCriteria.push({ $match: condition });

    let userList = await User.aggregate([
      ...filterCriteria,
    ])

    console.log("userList --------------", userList[0])

    if (userList) {
      res.status(200).json({
        data: userList,
        massage: "User Fetched Successfully!",
        success: true
      })
    } else {
      res.status(403).json({
        data: userList,
        massage: "User not found!!",
        success: true
      })
    }
  } catch (err) {
    console.log("Error *************", err)
    res.status(500).json({
      data: [],
      massage: err,
      success: true
    })
  }
}
//  *************** End *************************************************

// ************** user login ********************************************
exports.user_login = (req, res, next) => {
  console.log("Login **************", req.body)
  Login.find({ email: req.body.email })
    .exec()
    .then((resUser) => {
      if (resUser.length < 1) {
        return res.status(401).json({
          message: "User not exists",
          success: false
        });
      }
      console.log("resUser ****************", resUser?.[0]?.password, req.body.password)
      bcrypt.compare(req.body.password, resUser?.[0]?.password, (err, result) => {
        console.log("**********Res**********", err, result )
        if (err) {
          console.log("Error in compare ****************", err)
          return res.status(401).json({
            message: "Auth failed",
            success: false
          });
        }
        console.log("*****************", result)
        if (result) {
          const token = jwt.sign(
            {
              email: resUser?.[0]?.email,
              userId: resUser?.[0]?._id,
              password: resUser?.[0]?.password,
            },
            process.env.JWT_KEY || "maheshvar@233",
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Logged in successfully!",
            token: token,
            data: resUser?.[0],
            success: true
          });
        } else {
          res.status(401).json({
            message: "Auth failed",
            success: false
          });
        }
      });
    })
    .catch((err) => {
      console.log("Err ****************", err)
      res.status(500).json({
        error: err,
        message: err,
        success: false
      });
    });
};

exports.user_signup = (req, res, next) => {
  console.log("Register ***************", req.body)
  try { 
    Login.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "User already exists",
            success: false
          });
        } else {
          console.log("*************", req.body)
  
          // Generate a salt
          const salt = bcrypt.genSaltSync(10);
  
          // Hash the password using the salt
          const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  
          const user = new Login({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            password: hashedPassword,
          });
          user.save().then((result) => {
            res
              .status(200)
              .json({
                data: result,
                massage: "User Registered Successfully!",
                success: true
              })
          });
        }
      });
  } catch(err){
    res.status(500).json({
      error: err,
      message: err,
      success: false
    });
  }
};
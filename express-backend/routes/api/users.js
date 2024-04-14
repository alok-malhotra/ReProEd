// import express from 'express';

// const router = express.Router();
// // const {check, validationResult} = require('express-validator');
// // const User = require('../../models/User');

// // @route  GET api/users
// // @desc   Register user
// // @access Public
// router.post(
//     '/',
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({errors: errors.array()});
//         }
//         const {name, email, password} = req.body
//         try {
//             // See if user exists
//             let user = await User.findOne({email});
//             if (user) {
//                 res.status(400).json({errors: errors.array()})
//             }
//             // Get user's gravatar
//             // Encrypt password
//             // Return JWT


//             res.send('User route')
//         } catch(err) {
//             console.log(err.message);
//             res.status(500).send('Server Error');
//         }
        

//         console.log(req.body);
        
//     }
// );

// export default router; 
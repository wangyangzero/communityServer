const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
const mongoose = require('mongoose');
const User = mongoose.model('userInfo');

module.exports = passport => {
    passport.use(new JwtStrategy(opts,async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        user.exp = jwt_payload.exp;
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    }))
}
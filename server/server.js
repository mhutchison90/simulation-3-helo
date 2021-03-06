// --IMPORTS--
require('dotenv').config();

//const controller = require('./controller')

const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

// --SETUP APP--
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
//important to have this at top of file
app.use(passport.initialize());
app.use(passport.session());

// --MASSIVE--
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    //console.log(db)
    
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // will make db calls here in the future
    const db = app.get('db')
   
    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            //console.log(user)
            db.create_user([user.identities[0].user_id]).then(user => {
                //console.log(user[0].id)
                return done(null, user[0].id)
            })
        }
    })
}
))

// --ENDPOINTS--
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}))

app.get('/auth/me', (req, res) => {
    if(!req.user) {
        return res.status(404).send('User not found.')
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302,'http://localhost:3000/#/logout')
})

passport.serializeUser(function (id, done) {
    done(null, id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_current_user([id])
        .then(user => {
            done(null, user[0])
        })
})


// --SETUP APP TO LISTEN TO PORT--
const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
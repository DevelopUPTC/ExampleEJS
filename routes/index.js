const route = require('express').Router()

route.get('/',(req,res)=>{
    res.send({id:"4534535"})
})

module.exports = route;
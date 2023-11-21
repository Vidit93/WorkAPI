const express = require("express")
const router = express.Router();
const Work = require("../models/work");

router.get('/', async(req,res)=>{
    try {
        const works = await Work.find(req.query)
        res.json(works)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const works = await Work.findById(req.params.id)
        res.json(works)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async(req,res)=>{
    const works = new Work({
        w_name:req.body.w_name,
         w_req:req.body.w_req,
         w_rate:req.body.w_rate,
         w_des:req.body.w_des,
         c_name:req.body.c_name,
         c_number:req.body.c_number,
         e_mail:req.body.e_mail
    })
    try {
        const w1 = await works.save()
        res.json(w1)
    } catch (error) {
        res.send('error')
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        const works = await Work.findById(req.params.id)
        works.w_name = req.body.w_name
        works.w_req = req.body.w_req
        works.w_rate = req.body.w_rate
        works.w_des = req.body.w_des
        works.c_name = req.body.c_name
        works.c_number= req.body.c_number
        works.e_mail= req.body.e_mail
        const w1 = await works.save()
        res.json(w1)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const works = await Work.findByIdAndDelete(req.params.id)
        const w1 = await works.remove()
        res.json(w1)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;
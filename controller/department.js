const knex=require("../model/db")

const department=(req,res)=>{
    knex.select("*").from("department")
        .then((getdepart)=>{
            console.log(getdepart)
            res.json({
                succes:true,
                status:200,
                message:'derpatment datas',
                All_deparments:getdepart
            })
        }).catch((err)=>{
            console.log(err)
            return res.json({
                succes:false,
                status:400,
                message:'Derpartment data not found',
            })
        })
}


const get_by_id=(req,res)=>{
    knex.select("*").from("department").where("department_id","=",req.params.department_id)
    .then((get_id)=>{
        res.send(get_id)
    }).catch((err)=>{
        res.send({ Err:err})
    })
}


module.exports={department,get_by_id}
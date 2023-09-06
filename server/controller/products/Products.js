const connection = require("../../model/dbconnect");

const getProducts = async(req,res) =>{

  
    // console.log(userData);
    let sqlQuery =`Select products.* , product_description.description , product_description.weight , product_description.colour from products JOIN product_description ON products.product_id = product_description.product_id;`;

    //  console.log("query run",yesssssssssss)


     await connection.query(sqlQuery,function(error,result) {
        if(error){
            console.log("error", error.sqlMessage);
        }
          else{
            res.json(result);
     console.log("query run",result)
        }
    }
     )
}

// ======================

// app.get('/products', async (req, res)=>{
   

//     let sqlQuery =`Select products.* , product_description.description , product_description.weight , product_description.colour from products JOIN product_description ON products.product_id = product_description.product_id;`;
//     //  console.log("query run",yesssssssssss)


//      await connection.query(sqlQuery,function(error,result) {
//         if(error){
//             console.log("error", error.sqlMessage);
//         }
//           else{
//             res.json(result);
//      console.log("query run",result)
//         }
//     }
//      )

// })


module.exports = { getProducts }
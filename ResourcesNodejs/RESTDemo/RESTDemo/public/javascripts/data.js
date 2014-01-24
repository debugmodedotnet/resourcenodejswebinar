
var product =
[
 {
 "id" :1 ,
 "productName" : "Pen",
 "productPrice" : "200",
 'productStock' : "false"
 },
 {
 "id" :2 ,
 "productName" : "Pencil",
 "productPrice" : "200",
 "productStock" : "false"
 },
 ]

exports.getProducts = function(req,res){
    
       res.send(product);
    };

exports.addProduct = function(req,res)
{
 var data = req.body;
 product.push(data);
 res.send(product);
}



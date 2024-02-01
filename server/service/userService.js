import  post  from "../model/userModel.js";

export const getuser = ( async (req, res) => { 
    try { 
        // Adding Pagination 
        const limitValue = req.query.limit || 2; 
        const skipValue = req.query.skip || 0; 
        const posts = await post.find() 
            .limit(limitValue).skip(skipValue); 
        res.status(200).send(posts); 
    } catch (e) { 
        console.log(e); 
    } 
}); 
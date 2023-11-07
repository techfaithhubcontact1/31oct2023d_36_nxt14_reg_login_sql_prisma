//1. import area

const { default: prisma } = require("@/lib/prisma");


//define area 
async function POST(request){
    //2.1 hooks area 

    //2.2 defination area
    const res = await request.json();

    //Distructuring json object
    const { email } = res;

    try {
        const user = await prisma.user.findUnique({ where: {email} });

        if(!user) {
            return await Response.json({status:404, mmgg:"Invalid Credential"});
        } else {
            // Generate JsonWebToken
            var jwt = require('jsonwebtoken');
            var token = jwt.sign(user, process.env.JWT_TOKEN_KEY);

            return await Response.json({
                status:200,
                 mmgg:"Login Succefull",
                 jwt:token,
                 user,
                 tt:process.env.JWT_TOKEN_KEY
                });
        }
    } catch (error) {
        // return await Response.json({status:404, mmgg:"Invalid Credential"});
    }

    //2.3returning statements
    // return await Response.json({word:"HIIIHELLO",res, email});
}



//3. export area
module.exports = {POST} 
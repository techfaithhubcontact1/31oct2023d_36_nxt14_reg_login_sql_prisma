//1. import area
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const saltRounds = 10;

import prisma from "@/lib/prisma";

//2. defination area
export async function POST(request){
    //payload receive
    const res = await request.json();
    console.log(res);
    //Distrucring means choose particular value from json object
    const {name,email,password,role} = res; 
    const hash = bcrypt.hashSync(password, saltRounds);
    
    //2.1 hooks 

        //2.2 define
    try {
        
        // prisma.modal.method();
        const user = await prisma.user.create({
            data: {
              name:name,
              email:email,
              password:hash,
              role:role 
            }
        });
       
        //2.3 return 
        return Response.json({msg:"Hello", res:user,status:200});
        
      } catch (error) {
        console.error('Error inserting user:', error);
        // return Response.json({msg:"hiii",res: "user",});
        return Response.json({msg:"Hello", res:"user",status:400}); 
      }

}


//3.export area
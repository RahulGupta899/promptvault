import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';

// API Route [POST METHOD]: http://localhost:3000/api/prompt/new 
export const POST = async (req) => {
    console.log("Serverless API triggred");
    const { userId, prompt, tag } = await req.json();
    console.log({ userId, prompt, tag } )
    try{
        // NOTE: WE HAVE TO CONNECT THE DB EVERYTIME as It's SERVERLESS API
        await connectToDB(); 
        const newPrompt = new Prompt({ creator: userId, tag, prompt}); 
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt),{
            status: 201
        })
    }
    catch(error){
        console.log("Error: ", error.message)
        return new Response( error.message, { status: 500})
    }
}
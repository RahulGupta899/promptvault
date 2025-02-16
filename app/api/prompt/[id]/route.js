import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const  GET = async (request , {params}) => {
    try{
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt) return new Response('Prompt not found', {status: 404});
        return new Response(JSON.stringify(prompt), {status: 200});
    }
    catch(err){
        return new Response("Failed to fetch prompt.", {status: 500})
    }
}

export const PATCH = async(request, {params}) => {
    const {prompt, tag} = await request.json();
    try{
        await connectToDB();
        const existingPost = await Prompt.findById(params.id);
        if(!existingPost) return new Response('Prompt not found', {status: 404});

        existingPost.prompt = prompt;
        existingPost.tag = tag;
        await existingPost.save();
        return new Response(JSON.stringify(existingPost), {status: 200});
    }
    catch(err){
        return new Response("Failed to update prompt.", {status: 500})
    }
}

export const DELETE = async(request , {params}) => {
    try{
        await connectToDB();
        const response = await Prompt.findByIdAndDelete(params.id);
        console.log(response);
        return new Response("Successfylly deleted the prompt.", {status: 200})
    }
    catch(err){
        return new Response("Failed to delete prompt.", {status: 500})
    }
}
'use client';
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

const UpdatePrompt = () => {
    const router = useRouter();
    const params = useSearchParams();
    const promptId = params.get('id');
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });
    const [submitting, setSubmitting] = useState(false);
    useEffect(()=>{
        const fetchPromptDetails = async () => {
            setSubmitting(true)
            try{
                let prompt = await fetch(`/api/prompt/${promptId}`);
                prompt = await prompt.json();
                setPost({
                    prompt: prompt.prompt,
                    tag: prompt.tag
                })
            }
            catch(err){
                console.log(err.message);
            }
            finally{
                setSubmitting(false);
            }
        }
        if(promptId) fetchPromptDetails();
    },[promptId]);

    const saveEdittedPrompt = async (e) => {
        e.preventDefault();
        if(!promptId) alert('something went wrong!');
        setSubmitting(true);
        try{
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH', 
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })
            if(response.ok) router.push('/');
        }
        catch(err){
            console.log(err);
        }
        finally{
            setSubmitting(false);
        }
    }
    return (
        <Form
            type={"Edit"}
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={saveEdittedPrompt}
        />
    )
}

export default UpdatePrompt

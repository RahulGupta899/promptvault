"use client";
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Profile from '@/components/Profile';
import { useSession } from 'next-auth/react';

const MyProfile = () => {
    const router = useRouter();
    const { data: session} = useSession();
    const [posts, setPosts] = useState([]);
    const fetchUserPosts = async () => {
        try{
            const response = await fetch(`/api/users/${session.user.id}/posts`);
            const data = await response.json();
            console.log("USER POSTS: ", data);
            setPosts(data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        if(session?.user.id) fetchUserPosts();
    },[]);
    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt.");
        if(hasConfirmed){
            console.log("Post: ", post)
            try{
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                })
                fetchUserPosts();
            }
            catch(err){
                console.log("Something went wrong while deleting...");
            }
        }
    }
    const handleEdit = (post) => {
        router.push(`update-prompt?id=${post._id}`)
    }
  return (
    <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile

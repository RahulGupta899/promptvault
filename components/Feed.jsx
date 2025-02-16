'use client';
import React, { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import { useDebounce } from '@uidotdev/usehooks';

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText = useDebounce(searchText, 600)
    const [posts, setPosts] = useState([]);
    const [postsBackup, setPostsBackup] = useState([]);
    console.log("Posts: ", posts)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/prompt');
                const data = await response.json();
                setPosts(data);
                setPostsBackup(data);
            }
            catch (err) {
                alert(err.message || "Can't load posts.")
            }
        }
        fetchPosts();
    }, []);
    useEffect(()=>{
        if(debouncedSearchText){
            const filteredPosts = postsBackup.filter((p) => p.prompt.includes(debouncedSearchText) || p.tag.includes(debouncedSearchText) || p?.creator?.email.includes(debouncedSearchText) || p?.creator?.username.includes(debouncedSearchText))
            setPosts(filteredPosts)
        }
        else{
            setPosts(postsBackup)
        }
    },[debouncedSearchText])
    

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value) }}
                    required
                    className='search_input'
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={()=>{}}
            />
        </section>
    )
}

export default Feed

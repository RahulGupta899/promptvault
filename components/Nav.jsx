'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {
    signIn, signOut, useSession, getProviders
} from 'next-auth/react'


const Nav = () => {
  
  const [toggleDropdown, setToggleDropdown] = useState(false); // For Mobile View

  // SOCIAL LOGIN 
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  console.log("Next Auth Providers: ", providers);
  console.log("Session: ", session);

  useEffect(() => {
    (async () => {
        try{
            // Get list of all providers and utilities from next-auth
            const response = await getProviders();
            setProviders(response);
        }
        catch(err){
            console.log("Error in network call")
        }
    })();
  },[]);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>

        {/* LEFT LOGO */}
        <Link href="/" className='flex gap-2 flex-center '>
            <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                alt='home-icon'
                className='object-contain'
            />
            <p className='logo_text'>Promptvault</p>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className='sm:flex hidden'>
            {
                session?.user ? (
                    <div className='flex gap-3 md:gap-5'>

                        {/* CREATE POST */}
                        <Link
                            href="/create-prompt"
                            className='black_btn'
                        >
                            Create Post
                        </Link>

                        {/* SIGN OUT CTA */}
                        <button 
                            type='button'
                            onClick={signOut}
                            className='outline_btn'
                        >
                            Sign Out
                        </button>

                        {/* PROFILE */}
                        <Link href="/profile">
                            <Image 
                                src={session?.user?.image}
                                width={37}
                                height={37}
                                className='rounded-full'
                                alt='profile'
                            />
                        </Link>
                    </div>
                ):(
                    <>
                        {/* SIGN IN USING SOCIAL LOGIN AND NEXT AUTH */}
                        {
                            providers && Object.values(providers).map((provider) => {
                                // EACH SOCIAL LOGIN PROVIDER
                                return(
                                    <button 
                                        type='button'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        Sign In
                                    </button>
                                )
                            })
                        }
                    </>
                )
            }
        </div>

        {/* MOBILE NAVIGATION */}
        <div className='sm:hidden flex relative'>
            {
                session?.user ? (
                    <div className='flex'>
                        {/* DROPDOWN ICON */}
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => {
                                setToggleDropdown((state) => !state)
                            }}
                        />

                        {
                            toggleDropdown && (
                                <div className='dropdown'>
                                    <Link
                                        href="/profile"
                                        className='dropdown_link'
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        My Profile
                                    </Link>

                                    <Link
                                        href="/create-post"
                                        className='dropdown_link'
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Create Prompt
                                    </Link>

                                    <button
                                        type='button'
                                        className='mt-5 w-full black_btn'
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            signOut();
                                        }}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {/* SIGN IN USING SOCIAL LOGIN AND NEXT AUTH */}
                        {
                            providers && Object.values(providers).map((provider) => {
                                // EACH SOCIAL LOGIN PROVIDER
                                return(
                                    <button 
                                        type='button'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        Sign In
                                    </button>
                                )
                            })
                        }
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default Nav;

import Feed from "@/components/Feed";
const Home = () => {
  return (
    <section className=" w-full flex flex-center flex-col">
      <h1 className='text-center head_text'>
        Discover & Share
        {/* Hide this line on  */}
        <br className="md:hidden" />
        <span className="orange_gradient text-center ">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="text-center desc">
      Promptvault is an open-source AI prompting tool for modern world to discover, create and share creative  prompts.
      </p>

      {/* FEEDS */}
      <Feed/>
    </section>
  )
}

export default Home

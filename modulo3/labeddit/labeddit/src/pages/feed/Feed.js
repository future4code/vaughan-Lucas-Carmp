import { useState } from "react";

const Feed = (props) => {
  const [postsList, setPostsList] = useState([]);

  const getPosts = async () => {
    try{
      
    }catch (err){

    }
  }
  return (
    <div>
      <h2>Feed</h2>
      <button>Create post</button>
    </div>
  );
};

export default Feed;

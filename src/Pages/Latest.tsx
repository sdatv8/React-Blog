import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard/PostCard";
import './latest.scss'
import getLatestListRpc, { TPost } from "../mockRpc/getLatestListRpc";
import Loading from "../Components/Loading/Loading";

const Latest = () => {
  const [posts, setPosts] = useState<TPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getLatestListRpc()
      .then((res) => {
        setPosts(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return (
    <div className="container">
      <h1 className="main-title">
        <span>Explore</span>
        <span className="gradient-text">Learn</span>
        <span>Build 🚀</span>
      </h1>
      {loading &&
        <Loading />
      }
      <div className="posts-list">
        {posts.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Latest

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import getPostRpc, { type IMockDataItem } from "../../mockRpc/getPostRpc"
import './post.scss'
import Loading from "../Loading/Loading"
import PostNavigate from "./PostNavigae"
import PostContent from "./PostContent"



const Post = () => {
  const [post, setPost] = useState<IMockDataItem>({ id: 0, title: '', body: [], preview: '', time: '', tags: [] })
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    setLoading(true)
    const postId = Number(params.postId)
    getPostRpc(postId)
      .then((data) => {
        setPost(data)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])


  return (
    <div className="container">
      {loading && <Loading />}
      <div className="post-page">
        <PostContent title={post.title} body={post.body}/>
        <PostNavigate body={post.body}/>
      </div>
    </div>
  )

}

export default Post

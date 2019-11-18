import React from 'react'
import {useAsync} from 'react-async'
import {useParams} from 'react-router-dom'
import API from './API'

const loadPostById = async({postId}) =>{
    const res = await API.get(`/posts/${postId}`)
    console.log(res)
    let responseOK = res && res.status === 200;
    if(responseOK) return res.data
    throw new Error(res.statusText)
}

function Card({title, body}){
    return(
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

function Post(){
    let {postId} = useParams()

    const {data, error, isPending} = useAsync({promiseFn: loadPostById, postId: postId})

    if(isPending) return <p>Loading...</p>
    if(error) return <p>Something went wrong: {error}</p>

    return(
        <>
            {data && <Card title={data.title} body={data.body} />}
        </>
    )
}

export default Post
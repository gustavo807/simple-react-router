import React from 'react';
import { useAsync } from 'react-async'
import Card from './Card';
import API from './API';

const loadData = async () =>{
  const res = await API.get('/posts')
  console.log(res)
  let responseOK = res && res.status === 200;
  if(responseOK) return res.data
  throw new Error(res.statusText)
}

function Posts() {

  const { data, error, isPending } = useAsync({ promiseFn: loadData})

  if (isPending) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`

  return (
    <>
      { data && data.map(x => 
        <Card key={x.id} title={x.title} body={x.body} id={x.id} />
      )}
    </>
  );
}

export default Posts;

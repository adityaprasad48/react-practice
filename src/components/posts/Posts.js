import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from './postSlice';

const Posts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
    
  }, [])
  
  return (
    <div>
      Post..........
    </div>
  )
}

export default Posts

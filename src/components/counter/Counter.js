import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { increment, decrement, selectCount } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'



const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  return (
    <Box>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Typography>{count}</Typography>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </Box>
  )
}

export default Counter

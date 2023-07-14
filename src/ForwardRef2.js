import React, { forwardRef } from 'react'

function ForwardRef2(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(ForwardRef2)



import React, { memo } from 'react'

function UseCallBack(props) {
    //1 state
    console.log("usecallback", props.name);

    // 2. function defination

    //3. return statememt /jsx
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default memo(UseCallBack);
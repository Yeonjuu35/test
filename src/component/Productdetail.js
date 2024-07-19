import React from 'react'

function Productdetail(props) {
    return (
        <div className={props.cls}>
            <p>{props.rank === 1 ? "BEST.1" : props.rank}</p>
            <p>이미지</p>
            <div>
                <p>상품명</p>
                <p>10000원</p>
            </div>
        </div>
    )
}

export default Productdetail

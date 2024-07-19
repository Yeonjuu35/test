import React, {useEffect, useState} from 'react'
import { Title, Button } from '../component/Commonui';
import Productdetail from './Productdetail';

const tabnm = ["탄산", "주스", "커피/차", "스포츠/건강음료"]

function Producthot() {
    useEffect(()=>{
        const btns = document.querySelectorAll("button")
        btns[0].classList.add('active');
        // btns[0].classList = 'active';
        // btns[0].classList += ' active ';
    },[])

    const [tabnum, setTabnum] = useState(0);

    return (
        <section>
            <Title className='py-5'>칠성몰 인기상품</Title>
            <div className="text-center">
                {
                    tabnm.map((v, i)=>{
                        return(
                            <Button key={`buttonlist${i}`} className={`mx-2 ${ i===tabnum ? 'active' : null }`} onClick={()=>{ setTabnum(i)}}>{v}</Button>
                        )
                    })
                }
            </div>
            <div className="content">
                <div className="d-flex container">
                    {
                        ["베스트제품1위 콜라", "사이다", "5개 이상 구매"].map((v, i)=>{
                            return(
                                <Productdetail rank={i} cls={i===0 ? 'bg-dark text-white col-4' : 'col-4'}></Productdetail>
                            )
                        })
                    }
                </div>
            </div>  
        </section>
    )
}

export default Producthot

import { useEffect, useState } from "react"
export function UseEffectComponent() {
    const [title, setTitle] = useState('');
    const [product, setProduct] = useState([]);
    const handChangeTitle = (value) =>{
        setTitle(value);
    }
    useEffect(
        ()=>
        document.getElementById('title').innerHTML = title
    )

    // clall api
    useEffect(
        () => fetch()
        .then(res => res.json())
        .then(res =>{
            console.log(res);
            // setProducts.products
        })
    )

    // settimeout , setInterval làm việc với bom
    useEffect(
        () => {
            setTimeout(() => {
                console.log('test timeout');
            },1000
            )
        }
    )
    return (
        <>
            <input
                name='title'
                value={title}
                onChange = {(e) => handChangeTitle(e.target.value)}
            />
            <p id='title'>title</p>
        </>
        
    )
}
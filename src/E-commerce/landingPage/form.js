import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './formcss.css'
function Form() {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [add, setAdd] = useState();
    let [num, setNum] = useState();
    let [option,setOption] = useState(false)
    const [pymnt,setPymnt] = useState(false)
    const [sbmt, setSbmt] = useState(false)

    function payment(){
        setOption(true)
        setPymnt(true)
        setSbmt(false);
        var order = [];
        if(localStorage.getItem('order'))
        order = JSON.parse(localStorage.getItem('order'))
        var cart = JSON.parse(localStorage.getItem('cart'))
        localStorage.setItem('order', JSON.stringify([...order,cart]))
        // localStorage.removeItem('cart') //JSON.stringify(cart)
    }
    function submit(e) {
        e.preventDefault();
       let address = {
           name: name,
           email: email,
           number : num,
           address : add 
       }
        localStorage.setItem('address',JSON.stringify(address))
        setSbmt(true);
        setOption(true);
    }
    useEffect(()=>{
        if(localStorage.getItem('address')){
            let address = JSON.parse(localStorage.getItem('address'))
            setName(address.name);
            setNum(address.number);
            setEmail(address.email);
            setAdd(address.address);
            }
    },[]);

    return <section>
        <div className='model'>
            {option ? '' :
            <form onSubmit={(e) => submit(e)}>
                <input type='text' value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Name : ' required /> <br />
                <input type='email' value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='G-mail : ' required /> <br />
                <input type='tel' value={num}
                onChange={e => setNum(e.target.value)}
                placeholder='Mob No :' required /> <br />
                <input type='text' value={add}
                onChange={e => setAdd(e.target.value)}
                placeholder='Address :' required /> <br />
                <button type='submit'>Submit</button>
                <Link to="/"><button>Cancle</button></Link>
            </form>}
            {sbmt ? <button onClick={()=> payment()}>Payment</button> : ''}
            {pymnt ? <div>
                <h1>Your payment has been successful ...</h1>
                </div> :'' }
        </div>
    </section>
}
export default Form;
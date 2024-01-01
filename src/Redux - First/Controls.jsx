import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
    const dispatch = useDispatch();
    const inputNum = useRef();
    const handleAdd = () =>{
        dispatch({type:'add'})
    }
    const handleMinus = () =>{
        dispatch({type:'min'})
    }
    const handlePlus = () =>{
        const input = inputNum.current.value;
        dispatch({
            type:'adding',
            payload:{
                num:input
            }
        })
        inputNum.current.value = '';
    }
    const handleSubstract = () =>{
        const input = inputNum.current.value;
        dispatch({
            type:'subs',
            payload:{
                num:input
            }
        })
        inputNum.current.value = '';
    }
    const handlePrivacy = () =>{
dispatch({
    type:'private'
})
    }
    return (
        <div className="">
            <button onClick={handleAdd} className='btn btn-primary me-2'>+1</button>
            <button onClick={handleMinus} className='btn btn-danger ms-2 '>-1</button>
            <button onClick={handlePrivacy} className='btn btn-success ms-2 '>Privacy</button>
            <div className="d-flex gap-3 mt-3">
            <input type="email" ref={inputNum} placeholder="Enter number" className="form-control" />
            <button onClick={handlePlus} className="btn btn-primary">Add</button>
            <button onClick={handleSubstract} className="btn btn-danger">Minus</button>
            </div>
        </div>
    );
};

export default Controls;
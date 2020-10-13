import c from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({portionSize = 10, ...props}) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    let [showJump, toggleJump] = useState(false)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber  = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let jumpToPage = val => {
        toggleJump(false)
        if(val !== '' && !val.isNaN) props.changePage(val)
    }

    return <div className={c.pagesWrap}>
        <button onClick={e => props.changePage(1)}>First</button>
        <button disabled={portionNumber <= 1} onClick={() => setPortionNumber(portionNumber - 1)}>{'<'}</button>

        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => <button className={props.currentPage === p ? c.selectedPage : c.page}
                           key={p} disabled={props.currentPage === p}
                           onClick={e => props.changePage(p)}>{p}</button>)}

        <button disabled={portionNumber >= pagesCount} onClick={() => setPortionNumber(portionNumber + 1)}>{'>'}</button>
        <button onClick={e => props.changePage(pagesCount)}>Last</button>
        {showJump
            ? <input autoFocus={true} onBlur={e => jumpToPage(e.target.value)} placeholder={'page...'}/>
            : <button onClick={e => toggleJump(true)}>Jump</button>}
    </div>
}

export default Paginator
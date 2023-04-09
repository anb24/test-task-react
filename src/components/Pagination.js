import {LeftBtn, RightBtn} from "../config/links";

function Pagination({ evtPerPage, totalEvt, paginate, nextPage, prevPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalEvt / evtPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            <li className="pagination__pages">Показано <span className="pagination__pages_item">1-8</span> из <span className="pagination__pages_item">72</span> результатов</li>
            <div className="pagination__btns-box">
                <button className="pagination__btn" onClick={prevPage}><img src={LeftBtn} alt="Влево"/></button>
                <div className="pagination__numbers">
                    {pageNumbers.map(number => (
                        <li className="pagination__btns" key={number}>
                            <button className="pagination__btn" onClick={() => paginate(number)}>{number}</button>
                        </li>
                    ))
                    }
                </div>
                <button className="pagination__btn" onClick={nextPage}><img src={RightBtn} alt="Вправо"/></button>
            </div>
        </ul>
    )
}

export default Pagination;

export default function NotItem({ data,remove_item,edit_item }) {


    return (
        <>
            <ul className="list-group">
            {data.map((item) =>
                <li className="list-group-item d-flex justify-content-between align-items-start p-3" key={item.uuid}>
                    {item.pinned&&<i className="fa-solid fa-star text-warning py-3"></i>}
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.baslik}</div>
                        {item.yazi}
                    </div>
                    <button className="btn btn-white text-muted" onClick={()=>remove_item(item.uuid)} ><i className="fa-solid fa-trash text-muted"></i></button>
                    <button className="btn btn-white text-muted" onClick={()=>edit_item(item.uuid)}><i className="fa-solid fa-pen"></i></button>
                </li>
                  
            )}
            </ul>
        </>
    )
}
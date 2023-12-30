import { useState,useEffect } from "react"
import NotItem from "./NotItem"
import { v4 as uuidv4 } from 'uuid'

export default function NoteForm(){

    const def_value={baslik:"",yazi:"",pinned:false}
    const [data,setData]=useState(def_value)
    const [values,setValues]=useState([])

    const[pinned,setPinned]=useState(false)
    const[pinnedItem,setPinnedItem]=useState(values)
    const[isShowing,setShow]=useState(true)

    function showChanged(){
        setShow(prev=>!prev)
    }
    function pinChanged(){
        setPinned(prev=>!prev)
    }
    
    useEffect(()=>{
        setPinnedItem(values)
    },[values])

    useEffect(()=>{
        pinned?setPinnedItem(values.filter(item=>item.pinned===pinned)):setPinnedItem(values)
    },[pinned])
    
    function isNullOrEmpty(val){return (val === undefined && val=== null)}

    function remove(id){setValues(prev=>prev.filter(item=>item.uuid!==id))}

    function edit(id){setData({...values.find(item=>item.uuid==id),isEdit:true})}

    function handleSubmit(event){
        event.preventDefault()
        if(data.isEdit){
            const itemIndex=values.findIndex(item=>item.uuid===data.uuid)
            const newItem=values.slice()
            newItem[itemIndex]={...data}
            setValues(newItem)
        }else if(data.baslik.length>0&&data.yazi.length>0){
            data.uuid=uuidv4()
            if (!isNullOrEmpty(data.baslik)&&!isNullOrEmpty(data.yazi)) {
                setValues(
                    prev=>[data,...prev]
                )
            }
        }
        setData(def_value)
        event.target.reset()
    }
    
    function handleChange(event){
        setData(prev=>{
          return{
            ...prev,
            [event.target.name]:event.target.type=="checkbox"?event.target.checked:event.target.value
          }
        })
    }
    return(
            <>       
            <div className="container bg-white w-50 border border-light shadow-sm m-auto p-3">
            <h4 className="w-100 text-center text-dark m-auto">React Not Uygulaması</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="baslik" className="mb-1">Not Başlığı</label>
                        <input type="text" className="form-control" id="baslik" name="baslik" onChange={handleChange} placeholder="Not Başlığı" value={data.baslik} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="yazi" className="mb-1">Not</label>
                        <textarea className="form-control" rows={5} onChange={handleChange}  id="yazi" name="yazi" value={data.yazi}  placeholder="Not"/>
                    </div>
                    <div className="form-group mb-3">
                        <input type="checkbox" name="pinned" id="pinned" onChange={handleChange} checked={data.pinned} /><span className="ml-2">&nbsp;Favorilere Ekle</span>
                    </div>
                    <div className="d-flex float-end gap-2">
                    <button type="submit" className="btn btn-dark">Kaydet</button>
                    </div>
                    </form>
                    <div className="container bg-white w-100 border border-light m-auto mt-5 p-3 px-0">
                        <div className="row w-100 align-items-center mx-auto mt-3">
                            <div className="col-sm-6 px-0">
                                <h4 className="w-100 text-start text-dark m-auto">Notlar</h4>
                            </div>
                            <div className="col-sm-6 px-0">
                            <button className="btn btn-white border-none outline-none rounded-circle float-end" onClick={showChanged}><i className={isShowing?"fa-solid fa-angle-up":"fa-solid fa-angle-down"} ></i></button>
                                <button className="btn btn-white border-none outline-none rounded-circle float-end" onClick={pinChanged}><i className="fa-solid fa-star"></i></button>
                            </div>
                        </div>
                        {isShowing&&<div className="row w-100 align-items-center mx-auto mt-3">
                            <NotItem data={pinnedItem} remove_item={remove} edit_item={edit}/>
                        </div>}

                        </div>
            </div>
        </>
    )
}
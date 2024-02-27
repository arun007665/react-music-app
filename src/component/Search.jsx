import React,{useState} from 'react'

function Search(props) {
    const[key,setKey] = useState('')
    const[err,seterror]=useState(false)
    const[errmsg,seterrormsg]=useState('')

    const handler = () =>{
            if(!key){
                seterror(true)
                seterrormsg('the input field should not be empty')
                setTimeout(()=>{
                    seterror(false)
                    seterrormsg('')
                },3000)
            }else{
                props.find(key)
            }
    }

  return (
    <div className='col-md-6 mt-5'>
        <div className="block mt-5">
            <h1 className="display-1">
                <span className="text-success">Music</span> for Everyone
            </h1>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <div className="input-group">
                        <input type="search" name="key" value={key} onChange={(e)=> setKey(e.target.value)}id="key"className="form-control" placeholder="Enter artist name here"></input>
                        <button onClick={handler} className="btn btn-success">Search</button> 
                    </div>
                    <strong className="text-danger">
                        {err ? errmsg:null}
                    </strong>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Search
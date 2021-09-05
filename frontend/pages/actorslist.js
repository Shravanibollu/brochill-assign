import {Component} from 'react'
import actor from './actor'




class actorslist extends Component{
    state={industry:'',actorsData:[]}

    onChangeIndustry=(e)=>{
        this.setState({industry:e.target.value})
    }
    
    onSearchActors=async()=>{
        const{industry}=this.state
        const response = await fetch(`http://localhost:8000/api/actors?category=${industry}`)
        const data = await response.json();
        this.setState({actorsData:data})
    }
    
    render(){
        const {actorsData}=this.state
        console.log(actorsData)
        return(
           
            <>
            <div className='d-flex justify-content-center align-items-center w-25 m-auto'>
                <select className="form-select mt-2 mb-5" aria-label="Default select example" onChange={this.onChangeIndustry}>
                    <option Selected>Select Industry</option>
                    <option value="Tollywood">Tollywood</option>
                    <option value="Bollywood">Bollywood</option>
                    <option value="Hollywood">Hollywood</option>
                    <option value="Kollywood">Kollywood</option>
                </select>
                <button className='btn btn-primary mb-5 ml-5' onClick={this.onSearchActors}>Search</button>
            </div>
            <ul className='list-group w-50 m-auto d-flex flex-column'>
                {actorsData.map(each=>(
                    <li key={each.id} className='list-group-item d-flex justify-content-between'><p>{each.actor_name}</p><p>{each.category}</p></li>
                ))}
            </ul>
            
            </>
        )
    }
}


export default actorslist

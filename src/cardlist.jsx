import List from "./List.js"
import Card from "./cards.jsx";
import './cardlist.css'
function CardList()
{
    return <div className='Maindiv'>
        <div className="row">

        
        <Card
            avatar={List[0].avatar}
            articleName={List[0].articleName}
            role= {List[0].role}  
            name= {List[0].name}
        />
        <Card
            avatar={List[1].avatar}
            articleName={List[1].articleName}
            role= {List[1].role}
            name= {List[1].name}
        />
        <Card
            avatar={List[2].avatar}
            articleName={List[2].articleName}
            role= {List[2].role}
            name= {List[2].name}
        />
        </div>
        <div className="heading">

        <h3>See all articles</h3>
        </div>
        <div className="row">


        
        <Card
            avatar={List[3].avatar}
            articleName={List[3].articleName}
            role= {List[3].role}
            name= {List[3].name}
        />
        <Card
            avatar={List[4].avatar}
            articleName={List[4].articleName}
            role= {List[4].role}
            name= {List[4].name}
        />
        <Card
            avatar={List[5].avatar}
            articleName={List[5].articleName}
            role= {List[5].role}
            name= {List[5].name}
        />
        </div>
    </div>
}

export default CardList
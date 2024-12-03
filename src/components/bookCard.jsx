function BookCard(props){
     return(
        
        <div className = 'bookCard'>
           <a href={props.data.link} target="_blank"><img src={props.data.image} alt={props.data.title}/></a>
           <h2>{props.data.title}</h2>
           <h3>{props.data.author}</h3>
           <p>{props.data.desc}</p>
        </div>
        
        
     )
}
export default BookCard;
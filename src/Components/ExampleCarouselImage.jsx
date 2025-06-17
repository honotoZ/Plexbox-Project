
function ExampleCarouselImage({img,text,style}) {

    return (
        <>
            <img 
            style={style} 
            src={img} 
            alt={text} />
            
        </>
    )
}

export default ExampleCarouselImage
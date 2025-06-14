
function ExampleCarouselImage({img,text,style}) {

    return (
        <>
            <img 
            className="carouselImg"
            style={style} 
            src={img} 
            alt={text} />
            
        </>
    )
}

export default ExampleCarouselImage
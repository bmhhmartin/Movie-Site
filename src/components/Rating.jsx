import Star from "../assets/images/star.svg";

const Rating =({starValue})=>{

    const starts = Array(starValue).fill(Star);

    return (
        <>
            {
                starts.map((star, index)=>(
                    <img key={index} src={star} height="14" width="14" />
                ))
            }
        </>
    )
}
export default Rating;
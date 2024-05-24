const t = "Hedy Lamarr";
const imgSrc = "https://i.imgur.com/yXOvdOSs.jpg";
export function ImgComponent({ src, h1Content }) {
    return (
        <>
            <h1>{h1Content}</h1>
            <img
                src={src}
                alt="Hedy Lamarr"
                className="photo"
            />
        </>
    )
}
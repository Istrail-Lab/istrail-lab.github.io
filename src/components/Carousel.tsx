import MUICarousel from "react-material-ui-carousel";

const Carousel = ({ images }: { images: string[] }) => {
    return (
        <MUICarousel interval={3000} indicators={false}>
            {images.map((image, index) =>
                image.split(".")[1] === "mov" ? (
                    <video key={image} src={image} className="mx-auto h-80" />
                ) : (
                    <img key={image} src={image} className="mx-auto h-80" />
                )
            )}
        </MUICarousel>
    );
};

export default Carousel;

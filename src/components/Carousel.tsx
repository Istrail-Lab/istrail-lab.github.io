import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const Carousel = ({ images }: { images: string[] }) => {
    return (
        <CCarousel controls dark>
            {images.map((image, index) => (
                <CCarouselItem key={index}>
                    <CImage
                        className="mx-auto"
                        src={image}
                        alt={`slide ${index}`}
                    />
                </CCarouselItem>
            ))}
        </CCarousel>
    );
};

export default Carousel;

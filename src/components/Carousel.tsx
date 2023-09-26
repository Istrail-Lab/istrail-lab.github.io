import MUICarousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Carousel = ({ images }: { images: string[] }) => {
    return (
        <MUICarousel>
            {images.map((image, index) => (
                <Paper key={index}>
                    <img src={image} className="mx-auto h-80" />
                </Paper>
            ))}
        </MUICarousel>
    );
};

export default Carousel;

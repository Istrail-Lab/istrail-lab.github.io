import MUICarousel from "react-material-ui-carousel";

const Carousel = ({
    images,
    indicators,
    youtubeEmbed,
}: {
    images: string[];
    indicators?: boolean;
    youtubeEmbed?: boolean;
}) => {
    return (
        <MUICarousel
            interval={3000}
            indicators={false}
            autoPlay={!youtubeEmbed}
            navButtonsAlwaysVisible={indicators || youtubeEmbed}
        >
            {images.map((image, index) =>
                image.split(".")[1] === "mov" || youtubeEmbed ? (
                    youtubeEmbed ? (
                        <iframe
                            className="mx-auto"
                            width="560"
                            height="315"
                            src={image}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video
                            key={image}
                            src={image}
                            className="mx-auto h-80"
                        />
                    )
                ) : (
                    <img key={image} src={image} className="mx-auto h-80" />
                )
            )}
        </MUICarousel>
    );
};

export default Carousel;

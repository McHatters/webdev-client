export default function Images() {
    return (
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img
                id="wd-starship"
                width="400px"
                alt="Starship"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
                id="wd-teslabot"
                src="/images/teslabot.jpg"
                height="200px"
                alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            <img
                id="wd-ai-image"
                src="https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/imagerecords/0/885/modis_wonderglobe.jpg"
                width="200px"
                alt="Earth from space"
            />
            <br />
            <img
                id="wd-your-image"
                src="/images/hachi.png"
                height="300px"
                alt="My dog in the Philippines."
            />
        </div>
    );
}
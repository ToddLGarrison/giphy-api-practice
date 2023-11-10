import getGiphyData from "./getGiphyData.js";
import getOriginalGiphyWidth from "./getOriginalGiphyWidth.js";

async function getGiphyBasedOnSpeed() {
    const gifs = await getGiphyData();
    // const originalWidthData = await getOriginalGiphyWidth();

    const lowSpeedThreshold = 60
    const mediumSpeedThreshold = 125
    const highSpeedThreshold = 200

    
    //get giphy original frames data
    // const giphyFrames = []
    // for (const gif of gifs) {
        //     // console.log('Gifs images details:', gif.images.original.frames)
        // }
        
    const lowSpeedCount = gifs.filter((gif) => gif.images.original.frames <= 50).length
    const mediumSpeedCount = gifs.filter((gif) => gif.images.original.frames <= 125).length
    const highSpeedCount = gifs.filter((gif) => gif.images.original.frames <= 200).length

    console.log('Low Speed Count:', lowSpeedCount)
    console.log('Medium Speed Count:', mediumSpeedCount)
    console.log('High Speed Count:', highSpeedCount)

    return {
        lowSpeedCount,
        mediumSpeedCount,
        highSpeedCount,
    }
}

// getGiphyBasedOnSpeed()

export default getGiphyBasedOnSpeed
import { useEffect, useRef, useState } from "react";

const renderItemPosition = (index) => {
  switch (index) {
    case 0:
      return `top-2 left-1/2 -translate-x-1/2`;
    case 1:
      return `top-[10rem] left-[5rem] -translate-x-1/2`;
    case 2:
      return `top-[10rem] right-[5rem] translate-x-1/2`;
    case 3:
      return `bottom-[10rem] left-[5rem] -translate-x-1/2`;
    case 4:
      return `bottom-[10rem] right-[5rem] translate-x-1/2`;
    case 5:
      return `bottom-2 left-1/2 -translate-x-1/2`;
    default:
      return `top-2 left-1/2 -translate-x-1/2`;
  }
};

const CircularItem = (props) => {
  const { data, idx, handleChangeVideoSrc } = props;

  if (data.videoSource)
    return (
      <div
        className={
          `absolute transform rounded-full shadow-lg cursor-pointer ` +
          renderItemPosition(idx)
        }
        onClick={
          data.videoSource ? () => handleChangeVideoSrc(data.videoSource) : null
        }
      >
        <img
          src={data.imageSource}
          alt="mooc image"
          className="object-fill w-48 h-48 rounded-full"
        />
      </div>
    );
  else
    return (
      <div
        className={
          `absolute transform rounded-full shadow-lg cursor-pointer ` +
          renderItemPosition(idx)
        }
        onClick={
          data.videoSource ? () => handleChangeVideoSrc(data.videoSource) : null
        }
      >
        <video className="object-cover w-48 h-48 rounded-full" controls>
          <source src={data.source} type="video/mp4" />
        </video>
      </div>
    );
};

const CircularArrangement = (props) => {
  const { defaultVideo, cornerItems } = props;

  const vidRef = useRef(null);
  const [videoBoxHover, setVideoBoxHover] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(defaultVideo);
  const [autoplay, setAutoplay] = useState(false);

  const handlePlay = () => {
    vidRef.current.play();
  };

  const handlePause = () => {
    vidRef.current.pause();
  };

  const handleToggleVideo = () => {
    console.log("this is called");
    vidRef.current.paused ? handlePlay() : handlePause();
  };

  const handleChangeVideoSrc = (src) => {
    setCurrentVideoSrc(src);
    setAutoplay(true);
  };

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.load();
      if (autoplay) vidRef.current.play();
    }
  }, [vidRef, currentVideoSrc]);

  return (
    <div className="relative h-screen">
      <div className="relative h-[900px]">
        {/* Central div */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-3 border-black rounded-lg shadow-lg"
          onMouseEnter={() => setVideoBoxHover(true)}
          onMouseLeave={() => setVideoBoxHover(false)}
        >
          <video
            ref={vidRef}
            key={currentVideoSrc}
            className="rounded-xl object-fill w-[600px] h-[300px]"
            controls={videoBoxHover}
            // onClick={handleToggleVideo} // this does not work properly
          >
            <source src={currentVideoSrc} type="video/mp4" />
          </video>
        </div>
        {/* Hexagonal items */}
        {cornerItems.map((item, index) => (
          <CircularItem
            key={item.videoSource}
            data={item}
            idx={index}
            handleChangeVideoSrc={handleChangeVideoSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default CircularArrangement;

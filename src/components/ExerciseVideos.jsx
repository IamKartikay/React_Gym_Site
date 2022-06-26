import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideosDetail, name }) => {
  if (!exerciseVideosDetail.length) return "loading...";

  return (
    <Box sx={{ marginTop: { lg: "35px", xs: "20px" }, p: "20px", ml: "30px" }}>
      <Typography variant="h3" mb="33pxx">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        mt="60px"
        mb="100px"
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
        >
        {exerciseVideosDetail?.slice(0, 6).map((item, index) => (
          <a
            style={{ height: "300px" }}
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img
              style={{ height: "210px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography variant="h5" color='#000' textTransform='capitalize' >
                {item.video.title}
              </Typography>
              <Typography variant="h6" color='#000' textTransform='capitalize'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

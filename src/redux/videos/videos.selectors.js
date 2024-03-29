import { createSelector } from 'reselect';

const selectVideos = state => state.videos;

export const selectVideosList = createSelector(
  [selectVideos],
  videos => videos.videosList
);

export const selectCurrentVideo = createSelector(
  [selectVideos],
  videos => videos.currentVideo
);

export const selectFrameTime = createSelector(
  [selectCurrentVideo],
  currentVideo => currentVideo.duration / currentVideo.totalFrames
);

export const selectCurrentVideoElement = createSelector(
  [selectVideos],
  videos => videos.videoElement
);
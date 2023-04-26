export const formatTime = (timeInMilliseconds: number): string => {
  const timeInSeconds = timeInMilliseconds / 1000;
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  const milliseconds = Math.floor(
    (timeInSeconds - Math.floor(timeInSeconds)) * 100
  )
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}.${milliseconds}`;
};

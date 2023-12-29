export const generateMeetingID = () => {
  let meetingID = "";
  const chars =
    "6ccbca130affd470c2e2bb07c6eb8e6f15b56acaddc50aae637bd6787071d5c9";
  const maxPos = chars.length;

  for (let i = 0; i < 8; i++) {
    meetingID += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return meetingID;
};

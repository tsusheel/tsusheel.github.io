export function getResumeFileName(): string {
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  return `Sushil_Thakur_Resume_${currentMonth}_${currentYear}.pdf`;
}

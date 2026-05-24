export const RESUME_URL = "https://cdn.tsusheel.com/resume/latest.pdf";

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

export async function downloadResume(): Promise<void> {
  try {
    const response = await fetch(`${RESUME_URL}?v=${Date.now()}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = getResumeFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download resume:", error);
    // Fallback: open in new tab if CORS or network fails
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  }
}

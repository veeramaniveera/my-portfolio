import { FiDownload } from "react-icons/fi";

export function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="mono resume-button"
    >
      <FiDownload size={15} />
      resume.pdf
    </a>
  );
}

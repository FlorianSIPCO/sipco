export default function ProgressBar({ progress = 0 }: { progress?: number }) {
  return (
    <div className="relative w-0.5 h-180 bg-gray-900 rounded-full mt-6">
      <div
        className="absolute left-0 top-20 w-full rounded-full bg-gradient transition-all"
        style={{ height: `${progress}%`, maxHeight: 80 }}
      />
    </div>
  );
}

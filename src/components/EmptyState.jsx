export default function EmptyState({ title, message, icon = '🎬' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-inter font-bold text-brand-text mb-2">{title}</h3>
      <p className="text-brand-muted text-center max-w-md font-inter">{message}</p>
    </div>
  )
}

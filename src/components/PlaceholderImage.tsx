// Placeholder image component for development
export default function PlaceholderImage({ 
  className = '', 
  width = 400, 
  height = 300, 
  text = 'Image' 
}: {
  className?: string
  width?: number
  height?: number
  text?: string
}) {
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="text-gray-500 text-sm">{text}</span>
    </div>
  )
}

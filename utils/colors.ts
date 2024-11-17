const solidColors = [
  'bg-primary-500 text-white',
  'bg-info-500 text-white',
  'bg-success-500 text-white',
  'bg-warning-500 text-white',
  'bg-danger-500 text-white',
  'bg-pink-500 text-white',
  'bg-yellow-400 text-white',
  'bg-indigo-500 text-white',
  'bg-lime-500 text-white',
  'bg-rose-500 text-white',
  'bg-purple-500 text-white',
] as const

export function getRandomSolidColor() {
  return solidColors[Math.floor(Math.random() * solidColors.length)]
}

const pastelColors = [
  'bg-primary-500/10 text-primary-600',
  'bg-info-500/10 text-info-600',
  'bg-success-500/10 text-success-600',
  'bg-warning-500/10 text-warning-600',
  'bg-danger-500/10 text-danger-600',
  'bg-pink-500/10 text-pink-600',
  'bg-yellow-400/10 text-yellow-600',
  'bg-indigo-500/10 text-indigo-600',
  'bg-lime-500/10 text-lime-600',
  'bg-rose-500/10 text-rose-600',
  'bg-purple-500/10 text-purple-600',
] as const

export function getRandomPastelColor() {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)]
}

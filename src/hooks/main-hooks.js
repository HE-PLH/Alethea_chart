export function usePersistentState(init) {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem('draw-app')) || init
  )

  useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(locations))
  })

  return [locations, setLocations]
}

export function usePersistentCanvas() {
  const [locations, setLocations] = usePersistentState([])
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    locations.forEach(location => draw(ctx, location))
  })

  return [locations, setLocations, canvasRef]
}
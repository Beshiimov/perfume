export const uniqueId = (id: number, volume: number): number => {
  const str = id + '' + volume
  return +str
}

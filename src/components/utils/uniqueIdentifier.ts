export const uniqueId = (id: string, volume: number): number => {
  const str = id + '' + volume
  return +str
}

export const debounce = <T extends unknown[]>(callback: (...args: T) => void, delay: number) => {
  let timeout: NodeJS.Timeout | undefined
  return (...args: T) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

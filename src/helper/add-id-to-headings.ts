export function addIdToHeadings(html: string) {
  let i = 0
  return html.replace(/<h([2-3])>(.*?)<\/h\1>/g, (_, level, text) => {
    const id = `heading-${i++}`
    return `<h${level} id="${id}">${text}</h${level}>`
  })
}

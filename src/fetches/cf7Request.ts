/* eslint-disable @typescript-eslint/no-explicit-any */

class CF7Request {
  private formData: FormData

  constructor(formData: Record<string, any>) {
    this.formData = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      // CF7 endpoint đọc fields từ request body.
      // Skip undefined/null để tránh gửi chuỗi "undefined"/"null".
      if (value === undefined || value === null) return

      if (Array.isArray(value)) {
        // Bạn muốn submit "your_choice" dạng chuỗi => join mảng thành "a,b".
        if (value.length === 0) return
        this.formData.append(key, value.join(','))
        return
      }

      this.formData.append(key, String(value))
    })
  }

  private getEndpoint(id: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_API_CF7
    if (!baseUrl) {
      throw new Error('API base URL is not defined in environment variables.')
    }
    return `${baseUrl}/${id}/feedback`
  }

  public async send({ id, unitTag }: { id: string; unitTag: string }): Promise<any> {
    if (!id || !unitTag) {
      throw new Error("Both 'id' and 'unitTag' are required.")
    }

    try {
      this.formData.set('_wpcf7_unit_tag', unitTag) // Use set to avoid duplicates
      const response = await fetch(this.getEndpoint(id), {
        method: 'POST',
        body: this.formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error sending CF7 request:', error)
      throw error
    }
  }
}

export default CF7Request

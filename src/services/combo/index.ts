import ENDPOINTS from '@/configs/endpoints'
import fetchData from '@/fetches/fetchData'

const comboService = {
  getCombo: async () => {
    return await fetchData({
      api: ENDPOINTS.combo.list,
    })
  },
}

export default comboService

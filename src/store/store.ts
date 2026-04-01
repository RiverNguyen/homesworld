import { create } from 'zustand'

type FilterState = {
  startDate: Date | undefined
  endDate: Date | undefined
  locations: string[] | undefined
  combo: number | undefined
  quantity: {
    adults: number
    rooms: number
  }
}
type FilterActions = {
  setStartDate: (date: Date | undefined) => void
  setEndDate: (date: Date | undefined) => void
  setLocations: (locations: string[] | undefined) => void
  setCombo: (combo: number | undefined) => void
  setQuantity: (quantity: { adults: number; rooms: number }) => void
}

export const useFilterStore = create<FilterState & FilterActions>((set, get) => ({
  startDate: undefined,
  endDate: undefined,
  locations: undefined,
  combo: undefined,
  quantity: {
    adults: 0,
    rooms: 0,
  },
  setStartDate: (startDate) => {
    const endDate = get().endDate
    if (startDate && endDate && startDate > endDate) {
      set({ endDate: undefined })
    }
    set({ startDate })
  },
  setEndDate: (endDate) => {
    const startDate = get().startDate
    if (startDate && endDate && startDate > endDate) {
      set({ startDate: undefined })
    }
    set({ endDate })
  },
  setLocations: (locations) => {
    set({ locations })
  },
  setCombo: (combo) => set({ combo }),
  setQuantity: (quantity) => {
    const { adults, rooms } = (get().quantity = quantity)
    if (adults == 0 || rooms == 0) {
      set({ quantity: { adults: 1, rooms: 1 } })
    } else {
      set({ quantity })
    }
  },
}))

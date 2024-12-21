// Zustand is a small, fast and scalable state-management solution for React.
// This file creates a store using Zustand to manage the state of the application.

// To use this store in a component, you can import the `useStore` hook and 
// destructure the state variables and functions you need.

import { create } from 'zustand'

// The `useStore` hook allows components to access and update the state defined in the store.
export const useStore = create((set) => ({
    
    // The state includes variables like `scouter_name`, `alliance`, etc.
    scouter_name: '',
    alliance: 'blue',
    driver_station: 1,
    match_number: '',
    team_number: '',
    
    // It also includes functions to update these variables, 
    // such as `set_scouter_name`, `set_alliance`, etc.
    set_scouter_name: (name: string) => set((state) => ({ scouter_name: name })),
    set_alliance: (alliance: string) => set((state) => ({ alliance: alliance })),
    set_driver_station: (driver_station: number) => set((state) => ({ driver_station: driver_station })),
    set_match_number: (match_number: number) => set((state) => ({ match_number: match_number })),
    set_team_number: (team_number: number) => set((state) => ({ team_number: team_number })),
}))
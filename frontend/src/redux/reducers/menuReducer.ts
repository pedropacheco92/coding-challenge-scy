import { MenuActions } from "../actions/menuActions"

export interface MenuState {
    opened: boolean
}

const initialState: MenuState = {
    opened: false
}

export function menuReducer(state = initialState, action: any) {
    switch (action.type) {
        case MenuActions.OPEN_MENU:
            return { opened: true }
        case MenuActions.CLOSE_MENU:
            return { opened: false }
        default:
            return state
    }
}

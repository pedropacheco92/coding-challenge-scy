export enum MenuActions {
    OPEN_MENU = 'OPEN_MENU',
    CLOSE_MENU = 'CLOSE_MENU'
}

export const openMenu = () => {
    return { type: MenuActions.OPEN_MENU }
}

export const closeMenu = () => {
    return { type: MenuActions.CLOSE_MENU }
}

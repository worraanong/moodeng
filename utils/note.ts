export type Note = {
    readonly dir: string
    left: number
}

export class uNote {
    note:Note

    constructor(dir = 'up', left = 0) {
        this.note = {dir,left}
    } 
}
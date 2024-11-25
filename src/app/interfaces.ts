export interface Pokemon {
    order: number,
    name: string,
    types: [
        {
            slot: number,
            type: {
                name: string,
            }
        }
    ]
    stats: [
        {
            base_stat: number
        }
    ],
    sprites: {
        front_default: string
    },
    weight: number,
    height: number
}